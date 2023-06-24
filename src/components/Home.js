import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import cap1 from '../images/cap1.png';
import cap2 from '../images/cap2.png';
import cap3 from '../images/cap3.png';
import Result from './Result';
import Error from './servererror';
import axios from 'axios';
import Secret from './DarkTruth';




const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2vh;

  @media (max-width: 768px) {
    transform: scale(0.45); /* Adjust the scale value as per your requirement */
  }
`;

const Logo = styled.img`
  height: 84px;
  margin-right: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Title = styled.h2`
  font-family: Cinzel Decorative;
  font-weight: bold;
  margin: 0;
  margin-left: 10px;
`;

const Title2 = styled.h3`
  font-family: Cinzel Decorative;
  font-weight: bold;
  margin: 0;
  margin-top: 10px;
  margin-left: 10px;
`;

const Rect = styled.div`
  background-color: #FFFFDF;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 0.25rem;
  height: 35vh;
  width: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  margin-left: 100px; /* Adjust this value as per your requirement */
`;
const CaptchaInput = styled(Input)`
  margin-left: 230px; /* Increase the margin-left value as needed */
`;

const Select = styled.select`
  font-size: 16px;
  padding: 10px 125px 10px 10px;  
  border-radius: 4px;
  margin-bottom: 10px;
  margin-left: 90px;
`;

const ImageButton = styled.button`
  padding: 0;
  border: none;
  background: url('https://msbte.org.in/pcwebBTRes/pcImg/pcImgbuttons/pcbtnShowResult.png') no-repeat center center;
  background-size: contain;
  width: 120px;
  height: 30px;
  margin-left: 30rem;
  cursor: pointer;
`;

const InlineContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  margin-left: 250px;
`;


const images = [cap1, cap2, cap3];
const cap = ['4HLugA4d', 'BEZ5sYw', 'aGwfPL9']
const randomIndex = Math.floor(Math.random() * images.length);
const captcha = cap[randomIndex]
const Imagel = images[randomIndex];

const Home = () => {
  const [enteredCaptcha, setEnteredCaptcha] = useState('');
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [fetchedEnrollmentNumber, setFetchedEnrollmentNumber] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isPresent, setIsPresent] = useState(true); // Track if the enrollment number is present
  const [name, setName] = useState(''); // Track the name associated with the enrollment number
  const [seatNo, setSeatNo] = useState(''); // Track the seat number received from the backend
  const [marksDistribution, setMarksDistribution] = useState([]); // Track the marks distribution array received from the backend
  // const [totalMarks, setTotalMarks] = useState(0); // Track the total marks received from the backend

  const handleEnrollmentNumberChange = (event) => {
    setEnrollmentNumber(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();



    if (enrollmentNumber === '3986123') {
      setShowResult(false);
      return;
    }

    if (enteredCaptcha !== captcha) {
      // Display pop-up or error message indicating the mismatch
      alert('The Captcha Typed does not match with that shown on the screen');
      return;
    }


    // Make an HTTP POST request to the backend API endpoint
    axios
      .post('https://b-result-prank.vercel.app/enrollment', { enrollmentNumber })
      .then((response) => {
        // Handle the response from the backend
        const {
          enrollmentNumber: fetchedEnrollmentNumber,
          isPresent,
          name,
          seatNo,
          marksDistribution
        } = response.data;

        if (isPresent) {
          setShowResult(true);
          setName(name);
          setSeatNo(seatNo); // Set the seatNo received from the backend
          setMarksDistribution(marksDistribution);
          setEnrollmentNumber(fetchedEnrollmentNumber);
          setFetchedEnrollmentNumber(enrollmentNumber);
          // Set the marksDistribution array received from the backend
          // setTotalMarks(totalMarks); // Set the totalMarks received from the backend
        } else {
          setIsPresent(false);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  };


  return (
    <>
      <Container>
        <form onSubmit={handleFormSubmit}>
          <TitleContainer>
            <Logo src={logo} alt="MSBTE LOGO" />
            <div>
              <Title>Maharashtra State Board of Technical Education</Title>
              <Title2>महाराष्ट्र राज्य तंत्र शिक्षण मंडळ, मुंबई</Title2>
            </div>
          </TitleContainer>
          {isPresent && (
            <Rect>
              <InlineContainer>
                <Label>Select Enrollment No. or Seat No.</Label>
                <Select>
                  <option value="enrollment">Enrollment No.</option>
                  <option value="seat">Seat No.</option>
                </Select>
              </InlineContainer>
              <InlineContainer>
                <Label>Enter Enrollment No. or Seat No.</Label>
                <Input
                  type="text"
                  placeholder="Enrollment No. or Seat No."
                  value={enrollmentNumber}
                  onChange={handleEnrollmentNumberChange}
                />
              </InlineContainer>
              <InlineContainer>
                <Label>Captcha</Label>
                <Img src={Imagel} alt="captcha" />
              </InlineContainer>
              <InlineContainer>
                <Label>Enter Captcha</Label>
                <CaptchaInput
                  type="text"
                  placeholder="Captcha"
                  value={enteredCaptcha}
                  onChange={(event) => setEnteredCaptcha(event.target.value)}
                />

              </InlineContainer>
              <ImageButton type="submit" />
            </Rect>
          )}
        </form>
      </Container>
      {!isPresent && <Error />}
      {showResult && isPresent && (
        <Result
          enrollmentNumber={fetchedEnrollmentNumber}
          name={name}
          seatNo={seatNo} // Pass the seatNo as a prop to the Result component
          marksDistribution={marksDistribution} // Pass the marksDistribution as a prop to the Result component
        // totalMarks={totalMarks} // Pass the totalMarks as a prop to the Result component
        />
      )}
      {enrollmentNumber === '3986123' && <Secret />}
    </>
  );
};

export default Home;
