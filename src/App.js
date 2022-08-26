import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './components/constants/constants.css';
import './App.css';
//import Quiz from './components/QuizComponents/quiz/Quiz';
import Register from './components/register/Register';
//import Create from './components/QuizComponents/CreateQuestions/Create';
import HomePage from './components/homepage/HomePage';
import Login from './components/login/Login';
import AdditionalDetails from './components/register/AdditionalDetails';
import Farmer from './components/nodalcenter/Farmer';
// import Payment from './components/nodalcenter/Payment';
// import questions from './components/questions';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/myprofile' element={<AdditionalDetails />}></Route>
        <Route path='/farmer' element={<Farmer />}></Route>
        {/* <Route path='/payment' element={<Payment />}></Route>
       */}
        {/* <Route path='/quiz' element={<Quiz />}></Route>
        <Route path='/create' element={<Create />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;