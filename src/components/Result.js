import React from 'react';
import styled from 'styled-components';

const ResultContainer = styled.div`
  
  flex-direction: column;
  align-items: center;

  /* @media (max-width: 768px) {
    transform: scale(0.45); /* Adjust the scale value as per your requirement
    padding-top: 0%;
  } */
`;

const PrintButton = styled.button`
  padding: 10px;
  margin-top: 20px;
  font-size: 16px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;



const Result = ({ enrollmentNumber, name, seatNo, marksDistribution }) => {
  const handlePrint = () => {
    window.print();
  };

  
  let total = 0;
  for (let index = 0; index < marksDistribution.length; index++) {
    total += marksDistribution[index];
  }
  

  const percentage = (total * 100) / 700;
let classification;

if (percentage >= 75) {
  classification = 'FIRST CLASS DIST.';
} else if (percentage >= 60) {
  classification = 'FIRST CLASS';
} else {
  classification = 'SECOND CLASS';
}
  
  return (
    <ResultContainer>
      <PrintButton onClick={handlePrint}>Print Result</PrintButton>
        <div id="divContent">
        <title> </title>
        <style dangerouslySetInnerHTML={{__html: "\n        body {\n            font-family: Calibri;\n        }\n\n        .tableRecordPadding {\n            font-weight: bold;\n            padding: 2px 0 2px 2px;\n        }\n\n        .Error {\n            text-align: center;\n            margin: 70px 0;\n            color: red;\n            font-size: 1.5em;\n        }\n\n        .Error1 {\n            text-align: center;\n            color: red;\n            font-size: 1.5em;\n        }\n\n        .statment {\n            font-family: Calibri;\n            text-align: center;\n            margin-top: 20px;\n            text-transform: uppercase;\n        }\n\n        .tbl tr td {\n            padding: 2px 5px;\n        }\n\n        .Instruct {\n            display: table-cell;\n        }\n\n        * {\n            margin: 0px;\n            padding: 0px;\n        }\n\n        .main {\n            width: 1050px;\n            height: auto;\n            border: 3px dotted black;\n            margin: auto;\n            padding: 10px;\n        }\n\n        .heading {\n            width: 100%;\n            height: 100px;\n        }\n\n        .heading h1,\n        h3 {\n            font-family: \"Old English Text MT\";\n            text-align: center;\n        }\n\n        .img {\n            width: 10%;\n            height: 100px;\n            float: left;\n            margin-left: 15px;\n        }\n\n        .td {\n            /*border-left:1px solid;\n           border-right:1px solid;\n           border-bottom:1px solid;*/\n            height: 15px;\n            width: 205px;\n            text-align: center;\n        }\n\n        .td1 {\n            /*border: 1px solid;*/\n            height: 15px;\n            width: 80px;\n            text-align: center;\n        }\n        table,\n        th,\n        td {\n            border: 1px solid black;\n            border-collapse: collapse;\n        }\n\n        .col {\n            border: 0px;\n            border-bottom: 1px dashed;\n            border-collapse: collapse;\n            height: 40px;\n        }\n    " }} />
        <div className="main">
          <img className="img" src="https://msbte.org.in/MSBTE_Logo/logo.png" border={0} alt="MSBTE LOGO" />
          <div className="heading">
            <h1 style={{fontSize: '41px'}}>Maharashtra State Board of Technical Education</h1>
            <h3 className="statment">Statement of Marks</h3>
                    
          </div>

          <div>
            <table style={{width: '100%', marginTop: '10px', border: '0px solid'}}>
              <tbody>
                <tr>
                  <td style={{width: '155px'}} className="col">&nbsp;&nbsp;&nbsp;<strong>MR. / MS.</strong></td>
                  <td colSpan={6} className="col"><strong>{name.toUpperCase()}</strong></td>
                </tr>
                <tr>
                  <td style={{width: '155px'}} className="col">&nbsp;&nbsp;&nbsp;<strong>ENROLLMENT NO.</strong></td>
                  <td style={{width: '170px'}} className="col">{enrollmentNumber}</td>
                  <td style={{width: '150px'}} className="col"><strong>EXAMINATION</strong></td>
                  <td style={{width: '150px'}} className="col">SUMMER 2023</td>
                  <td style={{width: '100px'}} className="col"><strong>SEAT NO.</strong></td>
                  <td style={{width: '100px'}} className="col">{seatNo}</td>
                  <td className="col"><strong>FOURTH SEMESTER</strong></td>
                </tr>
                <tr>
                  <td style={{marginRight: '20px', width: '155px'}} className="col">&nbsp;&nbsp;&nbsp;<strong>COURSE</strong></td>
                  <td colSpan={6} className="col">Diploma In Computer Science And Engineering</td>
                </tr>
              </tbody>
            </table>
            <div id="dvMain0">
              <table border={1} cellSpacing={0} align="center" widht={0}>
                <tbody>
                  <tr>
                    <td width="700px" height="30px" align="center" rowSpan={2}><strong>TITLE OF COURSES</strong></td>
                    <td width="150px" height="30px" align="center" rowSpan={2}>
                      <strong>
                        TH/<br />
                        PR
                      </strong>
                    </td>
                    <td width="150px" height="30px" align="center" rowSpan={2}>
                      <strong>
                        COURSE<br />
                        HEAD
                      </strong>
                    </td>
                    <td width="150px" height="30px" align="center" colSpan={3}><strong>MARKS</strong></td>
                    <td width="150px" height="30px" align="center" colSpan={2}><strong>TOTAL MARKS</strong></td>
                    <td width="150px" height="30px" align="center" rowSpan={2}><strong>CREDITS</strong></td>
                  </tr>
                  <tr>
                    <td width="150px" height="30px" align="center"><strong>MAX.</strong></td>
                    <td width="150px" height="30px" align="center"><strong>MIN. </strong></td>
                    <td width="150px" height="30px" align="center"><strong>OBT.</strong></td>
                    <td width="150px" height="30px" align="center"><strong>MAX</strong></td>
                    <td width="150px" height="30px" align="center"><strong>OBT</strong></td>
                  </tr>
                  
                 
                  <tr>
                    <td><strong>JAVA PROGRAMMING</strong></td>
                    <td align="center"><strong>TH</strong></td>
                    <td align="center"><strong>ESE</strong></td>
                    <td align="center"><strong>070</strong></td>
                    <td align="center"><strong>028</strong></td>
                    <td align="center"><strong>0{marksDistribution[1]} </strong></td>
                    <td align="center"><strong>100</strong></td>
                    <td align="center"><strong>0{marksDistribution[1]+marksDistribution[6]} </strong></td>
                    <td align="center"><strong>5</strong></td>
                  </tr>
                  <tr>
                    <td><strong /></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong>PA</strong></td>
                    <td align="center"><strong>030</strong></td>
                    <td align="center"><strong>000</strong></td>
                    <td align="center"><strong>0{marksDistribution[6]} </strong></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong /></td>
                  </tr>
                  <tr>
                    <td><strong /></td>
                    <td align="center"><strong>PR</strong></td>
                    <td align="center"><strong>ESE</strong></td>
                    <td align="center"><strong>025</strong></td>
                    <td align="center"><strong>010</strong></td>
                    <td align="center"><strong>0{marksDistribution[10]} </strong></td>
                    <td align="center"><strong>050</strong></td>
                    <td align="center"><strong>0{marksDistribution[10]+marksDistribution[11]} </strong></td>
                    <td align="center"><strong /></td>
                  </tr>
                  <tr>
                    <td><strong /></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong>PA</strong></td>
                    <td align="center"><strong>025</strong></td>
                    <td align="center"><strong>010</strong></td>
                    <td align="center"><strong>0{marksDistribution[11]}</strong></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong /></td>
                  </tr>
                  <tr>
                    <td><strong>MICROPROCESSOR</strong></td>
                    <td align="center"><strong>TH</strong></td>
                    <td align="center"><strong>ESE</strong></td>
                    <td align="center"><strong>070</strong></td>
                    <td align="center"><strong>028</strong></td>
                    <td align="center"><strong>0{marksDistribution[2]} </strong></td>
                    <td align="center"><strong>100</strong></td>
                    <td align="center"><strong>0{marksDistribution[2]+marksDistribution[7]} </strong></td>
                    <td align="center"><strong>5</strong></td>
                  </tr>
                  <tr>
                    <td><strong /></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong>PA</strong></td>
                    <td align="center"><strong>030</strong></td>
                    <td align="center"><strong>000</strong></td>
                    <td align="center"><strong>0{marksDistribution[7]} </strong></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong /></td>
                  </tr>
                  <tr>
                    <td><strong /></td>
                    <td align="center"><strong>PR</strong></td>
                    <td align="center"><strong>ESE</strong></td>
                    <td align="center"><strong>025</strong></td>
                    <td align="center"><strong>010</strong></td>
                    <td align="center"><strong>0{marksDistribution[12]} </strong></td>
                    <td align="center"><strong>050</strong></td>
                    <td align="center"><strong>0{marksDistribution[12]+marksDistribution[13]} </strong></td>
                    <td align="center"><strong /></td>
                  </tr>
                  <tr>
                    <td><strong /></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong>PA</strong></td>
                    <td align="center"><strong>025</strong></td>
                    <td align="center"><strong>010</strong></td>
                    <td align="center"><strong>0{marksDistribution[13]}</strong></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong /></td>
                  </tr>
                  <tr>
                    <td><strong>DATA COMMUNICATION AND COMPUTER NETWORK</strong></td>
                    <td align="center"><strong>TH</strong></td>
                    <td align="center"><strong>ESE</strong></td>
                    <td align="center"><strong>070</strong></td>
                    <td align="center"><strong>028</strong></td>
                    <td align="center"><strong>0{marksDistribution[3]} </strong></td>
                    <td align="center"><strong>100</strong></td>
                    <td align="center"><strong>0{marksDistribution[3]+marksDistribution[8]} </strong></td>
                    <td align="center"><strong>8</strong></td>
                  </tr>
                  <tr>
                    <td><strong /></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong>PA</strong></td>
                    <td align="center"><strong>030</strong></td>
                    <td align="center"><strong>000</strong></td>
                    <td align="center"><strong>0{marksDistribution[8]} </strong></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong /></td>
                  </tr>
                  <tr>
                    <td><strong /></td>
                    <td align="center"><strong>PR</strong></td>
                    <td align="center"><strong>ESE</strong></td>
                    <td align="center"><strong>025</strong></td>
                    <td align="center"><strong>010</strong></td>
                    <td align="center"><strong>0{marksDistribution[14]} </strong></td>
                    <td align="center"><strong>050</strong></td>
                    <td align="center"><strong>0{marksDistribution[14]+marksDistribution[15]} </strong></td>
                    <td align="center"><strong /></td>
                  </tr>
                  <tr>
                    <td><strong /></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong>PA</strong></td>
                    <td align="center"><strong>025</strong></td>
                    <td align="center"><strong>010</strong></td>
                    <td align="center"><strong>0{marksDistribution[15]} </strong></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong /></td>
                  </tr>
                  <tr>
                    <td><strong>SOFTWARE ENGINEERING</strong></td>
                    <td align="center"><strong>TH</strong></td>
                    <td align="center"><strong>ESE</strong></td>
                    <td align="center"><strong>070</strong></td>
                    <td align="center"><strong>028</strong></td>
                    <td align="center"><strong>0{marksDistribution[0]} </strong></td>
                    <td align="center"><strong>100</strong></td>
                    <td align="center"><strong>0{marksDistribution[0]+marksDistribution[9]} </strong></td>
                    <td align="center"><strong>6</strong></td>
                  </tr>
                  <tr>
                    <td><strong /></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong>PA</strong></td>
                    <td align="center"><strong>030</strong></td>
                    <td align="center"><strong>000</strong></td>
                    <td align="center"><strong>0{marksDistribution[9]}</strong></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong /></td>
                  </tr>
                  <tr>
                    <td><strong /></td>
                    <td align="center"><strong>PR</strong></td>
                    <td align="center"><strong>ESE</strong></td>
                    <td align="center"><strong>025</strong></td>
                    <td align="center"><strong>010</strong></td>
                    <td align="center"><strong>0{marksDistribution[16]} </strong></td>
                    <td align="center"><strong>050</strong></td>
                    <td align="center"><strong>0{marksDistribution[16]+marksDistribution[17]} </strong></td>
                    <td align="center"><strong /></td>
                  </tr>
                  <tr>
                    <td><strong /></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong>PA</strong></td>
                    <td align="center"><strong>025</strong></td>
                    <td align="center"><strong>010</strong></td>
                    <td align="center"><strong>0{marksDistribution[17]} </strong></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong /></td>
                  </tr>


                  <tr>
                    <td><strong>GUI APPLICATION DEVELOPMENT USING VB.NET</strong></td>
                    <td align="center"><strong>PR</strong></td>
                    <td align="center"><strong>ESE</strong></td>
                    <td align="center"><strong>050</strong></td>
                    <td align="center"><strong>018</strong></td>
                    <td align="center"><strong>0{marksDistribution[4]} </strong></td>
                    <td align="center"><strong>100</strong></td>
                    <td align="center"><strong>0{marksDistribution[4]+marksDistribution[5]} </strong></td>
                    <td align="center"><strong>7</strong></td>
                    
                  </tr>
                  <tr>
                    <td><strong /></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong>PA</strong></td>
                    <td align="center"><strong>050</strong></td>
                    <td align="center"><strong>018</strong></td>
                    <td align="center"><strong>0{marksDistribution[5]} </strong></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong /></td>
                    <td align="center"><strong /></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <div id="dvTotal0">
              <table className="tbl" border={1} cellSpacing={0} align="center" widht={0}>
                <tbody>
                  <tr>
                    <td width="150px" height="30px" align="left" rowSpan={2}>
                      <strong>DATE :</strong><br />
                      23/06/2023
                    </td>
                    <td width="600px" height="30px" align="center" rowSpan={3}>
                      This Marksheet is Downloaded from Internet<br />
                      <br />
                      <span style={{fontWeight: 'bold'}}> SECRETARY </span><br />
                      MAHARASHTRA STATE BOARD OF TECHNICAL EDUCATION
                    </td>
                    <td width="150px" height="30px" align="center">
                      <strong>
                        TOTAL MAX.<br />
                        MARKS
                      </strong>
                    </td>
                    <td width="150px" height="30px" align="center">
                      <strong>
                        RESULT WITH<br />
                        %
                      </strong>
                    </td>
                    <td width="150px" height="30px" align="center">
                      <strong>
                        TOTAL MARKS<br />
                        OBTAINED
                      </strong>
                    </td>
                    <td width="100px" height="30px" align="center">
                      <strong>TOTAL CREDIT<br /> </strong>
                    </td>
                  </tr>
                  <tr>
                    <td width="150px" height="30px" align="center"><strong>700</strong></td>
                    <td width="150px" height="30px" align="center"><strong>{percentage.toFixed(2)}</strong></td>
                    <td width="150px" height="30px" align="center"><strong>{total}</strong></td>
                    <td width="150px" height="30px" align="center"><strong>31</strong></td>
                  </tr>
                  <tr>
                    <td width="150px" height="30px" align="left">4/1564/CW4I</td>
                    <td width="150px" height="30px" align="center" colSpan={4}><strong>{classification}</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <table className="tbl" border={1} cellSpacing={0} align="center" widht={0}>
                <tbody>
                  <tr>
                    <td colSpan={8} style={{textAlign: 'center', height: '10px'}}><strong>INSTRUCTIONS</strong></td>
                  </tr>
                  <tr>
                    <td colSpan={3}><span className="Instruct"> 1.</span><span className="Instruct">Report Discrepancy in this certificate to Head of the institution.</span></td>
                    <td colSpan={5}><span className="Instruct"> 2.</span><span className="Instruct">This certificate of marks is issued as per prevaling rules and regulations of MSBTE at the time of this exam.</span></td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <span className="Instruct"> 3.</span>
                      <span className="Instruct">
                        Eligibility for III semester is based on total <br />
                        number of failure subjects in I &amp; II semesters taken together.
                      </span>
                    </td>
                    <td colSpan={5}>
                      <span className="Instruct"> 4.</span>
                      <span className="Instruct">
                        Candidate is eligible for admission to V/VII Semester only if he/she is fully passed in I &amp; II /III &amp; IV semesters &amp; availed benefit of A.T.K.T/PASS at III &amp; IV /V &amp; VI semesters taken
                        together respectively.
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={8}><span className="Instruct"> 5.</span><span className="Instruct">Class awarded for Diploma is based on aggregate marks obtained in pre-final &amp; final semester.</span></td>
                  </tr>
                  <tr>
                    <td colSpan={8} align="center"><strong>ABBREVATION DETAILS</strong></td>
                  </tr>
                  <tr>
                    <td className="td1">TH</td>
                    <td className="td">Theory</td>
                    <td className="td1">TW</td>
                    <td className="td">Team Work</td>
                    <td className="td1">AB</td>
                    <td className="td">Absent</td>
                    <td className="td1">%</td>
                    <td className="td">Percentage of Marks</td>
                  </tr>
                  <tr>
                    <td className="td1">TM</td>
                    <td className="td">Theory Test Marks</td>
                    <td className="td1">PJ</td>
                    <td className="td">Project Work</td>
                    <td className="td1">EX</td>
                    <td className="td">Exemption</td>
                    <td className="td1" rowSpan={2}>WFLY</td>
                    <td className="td" rowSpan={2}>Result Withheld Due to Pending Lower Year</td>
                  </tr>
                  <tr>
                    <td className="td1">PR</td>
                    <td className="td">Practical</td>
                    <td className="td1">SW</td>
                    <td className="td">Sessional</td>
                    <td className="td1">OTP</td>
                    <td className="td">Optional</td>
                  </tr>
                  <tr>
                    <td className="td1">PM</td>
                    <td className="td">Practical Test Marks</td>
                    <td className="td1">IT</td>
                    <td className="td">Industrial Training</td>
                    <td className="td1">LSP</td>
                    <td className="td">Lower Semester Pending</td>
                    <td className="td1">CON</td>
                    <td className="td">Condoned</td>
                  </tr>
                  <tr>
                    <td className="td1">AG</td>
                    <td className="td">Aggregate</td>
                    <td className="td1">@</td>
                    <td className="td">Condoned Marks</td>
                    <td className="td1">PLY</td>
                    <td className="td">Pending Lower Year</td>
                    <td className="td1">FT</td>
                    <td className="td">Failure But Allowed To Keep Term</td>
                  </tr>
                  <tr>
                    <td className="td1">AP</td>
                    <td className="td">Additional Practical</td>
                    <td className="td1">*</td>
                    <td className="td">Failure Marks</td>
                    <td className="td1" rowSpan={3}>WFLS</td>
                    <td className="td" rowSpan={3}>Result Withheld Due To Pending Lower Semester</td>
                    <td className="td1">A.T.K.T</td>
                    <td className="td">Allowed to Keep Term</td>
                  </tr>
                  <tr>
                    <td className="td1">OR</td>
                    <td className="td">Oral</td>
                    <td className="td1">#</td>
                    <td className="td">Carry Forward Marks</td>
                    <td className="td1" rowSpan={2}>DIST</td>
                    <td className="td" rowSpan={2}>Distinction</td>
                  </tr>
                  <tr>
                    <td className="td1">ESE</td>
                    <td className="td">End Semester Exam</td>
                    <td className="td1">PA</td>
                    <td className="td">Progressive Assessment</td>
                  </tr>
                  <tr>
                    <td colSpan={8}>
                      <strong>
                        Ref:Formerly known as The board of Technical Examinations Maharashtra State of Technical Education Act 1997(Mah XXXVIII of 1997) and Maharashtra Government Gazette Notification Section IV-B issued on
                        march 31,1999(-172/16/200/20-04:07:2007 12:00:28)
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={2} colSpan={5}>Result Declared On 23/06/2023</td>
                    <td colSpan={4} style={{textAlign: 'right'}}>Url:-https://www.msbte.org.in</td>
                  </tr>
                  <tr>
                    <td colSpan={4} style={{textAlign: 'right'}}>E &amp; OE</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <br />
        <br />
        <p style={{pageBreakAfter: 'always'}}>&nbsp;</p>
        {/*<p style="page-break-before: always;">&nbsp;</p>*/}
      </div>
    
   
    </ResultContainer>
  );
}

  export default Result;
