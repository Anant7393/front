import React from 'react';
import questions from '../questions';
import Mcq from '../QuestionTypes/Mcq';
import Text from '../QuestionTypes/Text';
import Boolean from '../QuestionTypes/Boolean';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IncQuestionNum, DecQuestionNum } from '../../../actions/index';

const Quiz = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.CounterReducer.questionNum);
  const [element, setElement] = useState(<Mcq question={questions[0]} />);
  useEffect(() => {
    console.log('counter', counter);
    console.log(questions[counter]);

    if (questions[counter].type === 'mcq') {
      setElement(<Mcq question={questions[counter]} />);
    } else if (questions[counter].type === 'text') {
      setElement(<Text question={questions[counter]} />);
    } else if (questions[counter].type === 'boolean') {
      setElement(<Boolean question={questions[counter]} />);
    }
  }, [counter]);

  return (
    <div>
      <h1 className='text-center'>Quiz</h1>
      <div
        style={{ position: 'relative', height: '30rem' }}
        className='container'
      >
        <div className='my-5 py-2'>{element}</div>

        {/* <h1>{counter}</h1> */}
        <div style={{ position: 'absolute', bottom: '0' }} className='buttons'>
          <button
            onClick={() => {
              dispatch(IncQuestionNum());
            }}
          >
            Next
          </button>
          <button
            onClick={() => {
              dispatch(DecQuestionNum());
            }}
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
