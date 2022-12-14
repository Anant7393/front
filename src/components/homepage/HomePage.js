import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import Navbar from '../navbar/Navbar';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nodalcenter from '../nodalcenter/Nodalcenter';
//import Navbarnew from '../navbarnew/Navbar';
// import { elements } from '../links/links';
// import axios from 'axios';

const HomePage = () => {
  let navigate = useNavigate();
  // const additionalDetails = useSelector(
  //   (state) => state.AdditionalDetails.additionalDetails
  // );
  const userData = useSelector((state) => state.UserDetails.userDetails);

  // const logout = async () => {
  //   try {
  //     const res = await axios.post(`/api/auth/logout`);
  //     if (res) {
  //       console.log(res.data);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   additionalDetails = {};
  //   userData = {};
  // };
  // let sendElement;
  useEffect(() => {
    if (!userData.accessToken) {
      navigate('/');
    }

    // elements.map((element, i) => {
    //   if (element.type == 'login') {
    //     sendElement = element.body;
    //   }
    // });
    // console.log(elements);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Navbar
        element={
          // <Link
          //   className={`mx-2 text-dark text-decoration-none btn border-dark bg-none`}
          //   to='/login'
          // >
          //   Login
          // </Link>
          <Link to="/register" className="btn btn-primary">Farmer Registration</Link>
        }
      />
{/* <Navbarnew/> */}
{/* <Link to="/register" className="btn btn-primary">Farmer Registration</Link> */}
      <div
        className={`container my-4 ${styles.homeContainer} d-flex flex-column align-items-center`}
      >
        <div className={`h1 ${styles.heading} text-center`}>
          Register a farmer
        </div>
        {/* <div
          className={`${
            (styles.lightText, styles.extraText)
          } text-center m-2 mb-4`}
        >
          Made with ??? 404 solvers
        </div> */}
        {/* <div className='d-flex justify-content center'>
          <div className='m-2'>
            <Link to='/login'>Login</Link>
          </div>
          <div className='m-2'>
            <Link to='/register'>Register</Link>
          </div>
          <div className='m-2'>
            <Link to='/myprofile'>Profile</Link>
          </div>
         
        </div> */}
        <div
          className={`d-flex justify-content-center w-50 ${styles.btnContainer}`}
        >
          <Link
            to='/register'
            className={`m-3 btn btn-dark text-decoration-none w-50 ${styles.btnRegister}`}
            type=''
          >
            Register Now
          </Link>
        </div>
        <Nodalcenter />
      </div>
    </div>
  );
};

export default HomePage;
