import alt from '../libs/alt';
import LaneActions from '../actions/LaneActions';
import uuid from 'node-uuid';

class LaneStore {
  constructor() {
    this.bindActions(LaneActions);
  }
  create(lane) {
    const lanes = this.lanes;

    lane.id = uuid.v4();
    lane.notes = lane.notes || [];
    this.setState({lanes: lanes.concat(lane)});
  }
}

export default alt.createStore(LaneStore, 'LaneStore')
