import React from 'react';
import Lane from './Lane';

export default ({lanes}) => {
  return (
    <div className="lanes">
      {lanes.map(lane =>
      <Lane className="lane z-depth-3"
        key={lane.id}
        lane={lane} />
    )}
  </div>
  );
}
