import React from 'react'
import './Nodalcenter.css'

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { AllUsers,FarmerDetails } from '../../actions';
import axios from 'axios';
function Nodalcenter() {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const allUsers = useSelector((state)=>state.AllUsers.allUsers);
   // const farmerDetails = useSelector((state)=>state.FarmerDetails?state.FarmerDetails.farmerDetails:"");

    const getData = async()=>{

        const farmers =await axios.get('/api/auth/getAll').then(function(response) {
         console.log(response);
         dispatch(AllUsers(response.data));
        })
        .catch(function(error){
         console.log(error)
        })
        console.log(farmers)
     }

    const getFarmer = async (id)=>{
     const response = await axios.get(`http://localhost:9000/api/auth/users/${id}`);
     console.log(response)
     
    }
    console.log(getFarmer)
    useEffect(()=>{
        
       getData();
        
    },[allUsers])

    

  return (
    <div>
   
      {
        allUsers.map((farmer,i)=>{
            return(
                <div key={i} className="m-2 content">
                   {/* <button onClick={()=>getFarmer(farmer._id)}>View</button> */}
                   <button className="click" onClick={()=>{dispatch(FarmerDetails(farmer));console.log("aaa",farmer);navigate('/farmer')}}>View</button>
                    <div>{farmer.name}</div>
                    <div>{farmer.email}</div> console.log(FarmerDetails)
                    {/* <button onClick={()=>{console.log(farmerDetails?farmerDetails:"j")}}>click</button> */}
                        
                    {/* <div className = "right">
                        <button className="click">View</button>
                        
                         </div> */}
                </div>
              
            )
        })
      }
 
    </div>
  )
}

export default Nodalcenter