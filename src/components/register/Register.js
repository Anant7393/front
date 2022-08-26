import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import AdditionalDetails from './AdditionalDetails';
import { useDispatch } from 'react-redux';
import { UserDetails } from '../../actions/index';
import Navbar from '../navbar/Navbar';
import styles from './Register.module.css';
 import { url } from '../../utilities';
import axios from 'axios';

const Register = () => {
  // const url = 'https://onerecruit.herokuapp.com';
  const dispatch = useDispatch();
  // const additionalDetails = useSelector(
  //   (state) => state.AdditionalDetails.additionalDetails
  // );
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    accNo: '',
    adress:''
  });
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const userRegister = async (e) => {
    e.preventDefault();
    const { name, email, password, accNo,adress } = user;
    if (name && email && password && accNo && adress) {
      console.log('User is:', user);
      const res = await axios.post(`${url}/api/auth/register`, {
        name,
        email,
        password,
        accNo,
        adress
      });
      console.log(res.data);
      if (res.data.success === true) {
        setMessage('Registered successfully, proceed to login.');
      }
      // const data = await res.json();
      // if (data) {
      //   console.log('success');
      //   console.log(data);
      // }
      // axios
      //   .post('http://localhost/5000/api/auth/register', user)
      //   .then((response) => {
      //     console.log(response);
      //   });
    } else {
      alert('Invalid user');
    }
  };
  return (
    <div>
      <Navbar
        element={
          <Link
            className={`mx-2 text-dark text-decoration-none btn border-dark bg-none`}
            to='/'
          >
            Home
          </Link>
        }
      />
      <div
        className={`container my-4 w-100 d-flex flex-column align-items-center`}
      >
        <div className={`h1 ${styles.heading}`}>Create a new account</div>
        <div
          className={`${
            (styles.lightText, styles.extraText)
          } text-center m-2 mb-4`}
        >
          Let’s get you a new account
        </div>
        <div className={`text-success`}>{message}</div>
        <form
          onSubmit={userRegister}
          className={`container d-flex flex-column align-items-center w-50 ${styles.formContainer}`}
        >
          <div className={`m-2 w-50 ${styles.inputFieldContainer}`}>
            <input
              className={`p-2 ${styles.inputField} border-none`}
              type='text'
              name='name'
              value={user.name}
              placeholder='Name'
              onChange={handleChange}
            />
          </div>
          <div className={`m-2 w-50 ${styles.inputFieldContainer}`}>
            <input
              className={`p-2 ${styles.inputField} border-none`}
              type='email'
              name='email'
              value={user.email}
              placeholder='Email'
              onChange={handleChange}
            />
          </div>
          <div className={`m-2 w-50 ${styles.inputFieldContainer}`}>
            <input
              className={`p-2 ${styles.inputField} border-none`}
              type='password'
              name='password'
              value={user.password}
              placeholder='Password'
              onChange={handleChange}
            />
          </div>
          <div className={`m-2 w-50 ${styles.inputFieldContainer}`}>
            <input
              className={`p-2 ${styles.inputField} border-none`}
              type='text'
              name='adress'
              value={user.adress}
              placeholder='Adress'
              onChange={handleChange}
            />
          </div>
          <div className={`m-2 w-50 ${styles.inputFieldContainer}`}>
            <input
              className={`p-2 ${styles.inputField} border-none`}
              type='text'
              name='accNo'
              value={user.accNo}
              placeholder='accNo'
              onChange={handleChange}
            />
          </div>
          {/* <div className={`m-2 w-50 ${styles.inputFieldContainer}`}>
            {/* <input
              className={`p-2 ${styles.inputField} border-none`}
              type='text'
              name='deliveryaddress'
              value={user.deliveryaddress}
              placeholder='Delivery Address'
              onChange={handleChange}
            /> */}
            {/* <select className={`m-2 w-50 ${styles.inputFieldContainer}`} id="drop">
              <option value="-1">select type</option>
              <option value="Ethanol 1g">Ethanol1G</option>
              <option value="Ethanol 2g">Ethanol2G</option>
            </select>
          </div> */} 

          <button
            onClick={() => {
              dispatch(UserDetails(user));
            }}
            className={`m-3 btn btn-dark w-50`}
            type='submit'
          >
            Register
          </button>
          <div>or</div>

          <Link
            to='/login'
            className={`m-3 btn btn-light border-dark w-50 ${styles.btnRegister}`}
          >
            Log in
          </Link>
        </form>
        {/* <AdditionalDetails /> */}
        {/* <button
          className='btn'
          onClick={() => {
            console.log(additionalDetails);
          }}
        >
          print
        </button> */}
      </div>
    </div>
  );
};

export default Register;