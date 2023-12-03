import React from 'react';

const ParentPortal = ({ parentName, batch, studentMarks }) => (
  <div>
    <h2>Parent Portal - Batch {batch}</h2>
    <p>Welcome, {parentName}!</p>
    <h3>Student Marks:</h3>
    <ul>
      {studentMarks.map((mark, index) => (
        <li key={index}>{`Student ${index + 1}: ${mark}`}</li>
      ))}
    </ul>
  </div>
);

export default ParentPortal;