// import React from 'react';
// import { useState } from 'react';

// const Mcq = (props) => {
//   const [userAnswer, setUserAnswer] = useState('');
//   const question = props.question;
//   const options = question.options;
//   return (
//     <div className='card py-5' style={{ width: '25rem' }}>
//       <h2>{question.type}</h2>
//       <h3>{question.id}</h3>
//       <div>{question.question}</div>
//       <div>
//         {options.map((option, id) => {
//           //   console.log(option);
//           return (
//             <div key={id}>
//               {/* <input type='checkbox'>{option}</input> */}
//               <div
//                 onClick={() => {
//                   setUserAnswer(option);
//                 }}
//               >
//                 {option}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div>{question.answer}</div>
//       <h3>{userAnswer}</h3>
//     </div>
//   );
// };

// export default Mcq;
