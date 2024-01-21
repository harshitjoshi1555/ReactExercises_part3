
import React from 'react';

const Person = ({ name, age, hobbies }) => {
  const shortenedName = name.length > 8 ? name.substring(0, 6) + '...' : name;
  const canDrive = age > 18;

  return (
    <div style={{ marginBottom: '20px' }}>
      <p>Learn some information about {shortenedName}</p>
      {canDrive ? <h3>You can drive!</h3> : <h3>You must be 18 to drive.</h3>}
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default Person;
