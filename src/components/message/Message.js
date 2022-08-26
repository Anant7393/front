import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserDetails, AddDetails } from '../../actions/index';
import Navbar from '../navbar/Navbar';
import styles from './Login.module.css';
// import { elements } from '../links/links';
 import { url } from '../../utilities';

const Message =  () => {
 


    
        const [user, setUser] = useState(null)
      
        const submit = e => {
          e.preventDefault()
          fetch('/api', {
            method: 'POST',
            body: JSON.stringify({ user }),
            headers: { 'Content-Type': 'application/json' },
          })
            .then(res => res.json())
            .then(json => setUser(json.user))
        }
      
        return (
            

            // <>hhhh</>
          <form onSubmit={submit}>
            
            <input
              type="text"
       className={`mx-2 text-dark text-decoration-none btn border-dark bg-none`}

              name="user[name]"
              value={user.name}
              onChange={e => setUser({ ...user, name: e.target.value })}
            />
            {user.errors.name && <p>{user.errors.name}</p>}
      
            <input
              type="email"
              name="user[email]"
              value={user.email}
              onChange={e => setUser({ ...user, email: e.target.value })}
            />
            {user.errors.name && <p>{user.errors.name}</p>}
      
            <input type="submit" name="Sign Up" />
          </form>
        )
        }


export default Message;
