import AltContainer from 'alt-container';
import React from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
// import Firebase from 'firebase';

import Header from './Header';
import Footer from './Footer';

import Lanes from './Lanes';
import LaneStore from '../stores/LaneStore';
import LaneActions from '../actions/LaneActions';

// let firebaseRef = new Firebase('https://ikanband.firebaseio.com/');

@DragDropContext(HTML5Backend)
export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="Site">
          <main className="Site-content">
            <Header />
            <div className="container">
              <AltContainer
                stores={[LaneStore]}
                inject={{
                  lanes: () => LaneStore.getState().lanes || []
                }}
              >
                <Lanes />
              </AltContainer>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    )
  }
}
