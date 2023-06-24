import React, { useState } from 'react';
import axios from 'axios';

const StudentResultForm = () => {
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [name, setName] = useState('');
  const [seatNo, setSeatNo] = useState('');
  const [showInputs, setShowInputs] = useState(false);
  const [marks, setMarks] = useState(Array(18).fill(''));
  const [checkBoxChecked, setCheckBoxChecked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://b-result-prank.vercel.app/addData', {
        enrollmentNumber,
        name,
        seatNo,
        marks,
        checkBoxChecked,
      });

      console.log(response.data);
      // Reset form fields
      setEnrollmentNumber('');
      setName('');
      setSeatNo('');
      setMarks(Array(18).fill(''));
      setCheckBoxChecked(false);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleCheckboxChange = (e) => {
    setShowInputs(e.target.checked);
    setCheckBoxChecked(e.target.checked);
  };

  const handleMarksChange = (index, value) => {
    const updatedMarks = [...marks];
    updatedMarks[index] = value;
    setMarks(updatedMarks);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Enrollment Number:</label>
        <input type="text" value={enrollmentNumber} onChange={(e) => setEnrollmentNumber(e.target.value)} />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Seat Number:</label>
        <input type="text" value={seatNo} onChange={(e) => setSeatNo(e.target.value)} />
      </div>
      <div>
        <label>Show Inputs:</label>
        <input type="checkbox" checked={checkBoxChecked} onChange={handleCheckboxChange} />
      </div>
      {showInputs && (
        <div>
          {[...Array(18)].map((_, index) => (
            <div key={index}>
              <label>Mark {index + 1}:</label>
              <input
                type="number"
                min="0"
                max="100"
                value={marks[index]}
                onChange={(e) => handleMarksChange(index, e.target.value)}
                style={
                  (index >= 0 && index <= 3 && marks[index] > 70) ||
                  (index >= 4 && index <= 5 && marks[index] > 50) ||
                  (index >= 6 && index <= 9 && marks[index] > 30) ||
                  (index >= 10 && index <= 17 && marks[index] > 25)
                    ? { backgroundColor: 'red' }
                    : {}
                }
              />
            </div>
          ))}
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentResultForm;
