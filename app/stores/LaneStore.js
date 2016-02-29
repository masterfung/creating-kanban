import alt from '../libs/alt';
import uuid from 'node-uuid';
import update from 'react-addons-update';
import LaneActions from '../actions/LaneActions';

class LaneStore {
  constructor() {
    this.bindActions(LaneActions);

    this.lanes = [];
  }

  create(lane) {
    const lanes = this.lanes;

    lane.id = uuid.v4();
    lane.notes = lane.notes || [];

    this.setState({
      lanes: lanes.concat(lane)
    });
  }

  attachToLane({laneId, noteId}) {
    if (!noteId) {
      this.waitFor(NoteStore);
      noteId = NoteStore.getState().notes.slice(-1)[0].id;
    }

    const lanes = this.lanes.map(lane => {
      if(lane.notes.includes(noteId)) {
        lane.notes = lane.notes.filter(note => note !== noteId);
      }

      if(lane.id === laneId) {
        if(lane.notes.includes(noteId)) {
          console.warn('Already attached note to lane', lanes);
        }
        else {
          lane.notes.push(noteId);
        }
      }

      return lane;
    });

    this.setState({lanes});
  }

  delete(id) {
    this.setState({
      lanes: this.lanes.filter(lane => lane.id !== id)
    })
  }

  update(updatedLane) {
    const lanes = this.lanes.map(lane => {
      if(lane.id === updatedLane.id) {
        return Object.assign({}, lane, updatedLane);
      }
      return lane;
    });
    return this.setState({lanes})
  }

  detachFromLane({laneId, noteId}) {
    const lanes = this.lanes.map(lane => {
      if(lane.id === laneId) {
        lane.notes = lane.notes.filter(note => note !== noteId);
      }

      return lane;
    });

    this.setState({lanes});
  }

  move({sourceId, targetId}) {
    const lanes = this.lanes;
    const sourceLane = lanes.filter(lane => lane.notes.includes(sourceId))[0];
    const targetLane = lanes.filter(lane => lane.notes.includes(targetId))[0];
    const sourceNoteIdx = sourceLane.notes.indexOf(sourceId);
    const targetNoteIdx = targetLane.notes.indexOf(targetId);

    if (sourceLane === targetLane) {
      sourceLane.notes = update(sourceLane.notes, {
        $splice: [
          [sourceNoteIdx, 1],
          [targetNoteIdx, 0, sourceId]
        ]
      })
    } else {
      sourceLane.notes.splice(sourceNoteIdx, 1);

      targetLane.notes.splice(targetNoteIdx, 0, sourceId);
    }

    this.setState({lanes});
  }
}

export default alt.createStore(LaneStore, 'LaneStore')
