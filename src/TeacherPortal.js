import React, { useState } from 'react';
import LoginPage from './LoginPage';
import ParentPortal from './ParentPortal';


const TeacherPortal = ({ batches }) => {
  const [teacherName, setTeacherName] = useState('');
  const [loggedInParent, setLoggedInParent] = useState('');

  const handleTeacherLogin = (username) => {
    setTeacherName(username);
  };

  const handleParentLogin = (username) => {
    // Add logic to verify if the parent is associated with any batch
    // For simplicity, let's assume the first batch for any parent
    setLoggedInParent(username);
  };

  return (
    <div>
      {teacherName ? (
        <div>
          <h2>Teacher Portal</h2>
          <p>Welcome, {teacherName}!</p>
          <h3>Batches:</h3>
          {batches.map((batch, index) => (
            <ParentPortal
              key={index}
              parentName={loggedInParent}
              batch={batch.batchNumber}
              studentMarks={batch.studentMarks}
            />
          ))}
        </div>
      ) : (
        <LoginPage onLogin={handleTeacherLogin} />
      )}
    </div>
  );
};

export default TeacherPortal;
