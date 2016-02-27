import AltContainer from 'alt-container';
import React from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Header from './Header';

import Lanes from './Lanes';
import LaneStore from '../stores/LaneStore';
import LaneActions from '../actions/LaneActions';

@DragDropContext(HTML5Backend)
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container kanban-app">

          <AltContainer
            stores={[LaneStore]}
            inject={{
              lanes: () => LaneStore.getState().lanes || []
            }}
          >
            <Lanes />
          </AltContainer>
        </div>

      </div>
    )
  }
}
