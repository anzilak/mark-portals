
import './App.css';
import React from 'react';
import TeacherPortal from './TeacherPortal';

const batches = [
  { batchNumber: 'BSc Computer Science', studentMarks: [85, 90, 78, 92, 88, 75, 86, 94, 80, 89] },
  { batchNumber: 'BCA', studentMarks: [79, 88, 92, 87, 83, 90, 76, 85, 94, 82] },
  { batchNumber: 'BTech', studentMarks: [91, 87, 84, 89, 95, 80, 92, 78, 88, 83] },
];

function App() {
  return (
    <div className='hts'>
      <h1 style={{textAlign:'center'}}>College Portal System</h1>
      <TeacherPortal batches={batches} />
    </div>
  );
}

export default App;