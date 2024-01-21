import React from 'react';
import Person from './Person';

const App = () => {
  const person1 = {
    name: 'Narendra Das Modi',
    age: 25,
    hobbies: ['Reading', 'Meeting', 'Travelig'],
  };

  const person2 = {
    name: 'Harshit Joshi',
    age: 16,
    hobbies: ['Vlogging', 'Bedminton', 'Music'],
  };

  const person3 = {
    name: 'Yogi AdityaNath',
    age: 30,
    hobbies: ['Building', 'Fixing', 'Traveling'],
  };

  return (
    <div>
      <Person {...person1} />
      <Person {...person2} />
      <Person {...person3} />
    </div>
  );
};

export default App;
