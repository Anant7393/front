import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import "./Nodalcenter.css"
import img from '../assets/gif.gif'
import Navbarnew from '../navbarnew/Navbar';
//import {Link} from 'react-router-dom';
//import ScriptTag from 'react-script-tag';


const Farmer = () => {
    let html;
    const [form, setForm] = useState(false);
    console.log(form)
    const [biomass, setBiomass] = useState("Select Biomass Type")
    const [weight, setWeight] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault(e)
        const target = e.target.value;
        setBiomass(target);


    }
    console.log(biomass)


    const handleWeight = (e) => {
        e.preventDefault(e);
        const target1 = e.target.value;
        setWeight(target1)
    }
    console.log(weight)
    let ammount;
    if (biomass == "sugarcane") {
        ammount = weight * 110
    }
    if (biomass == "pitari") {
        ammount = weight * 100
    }
    console.log(ammount)
    const farmerDetails = useSelector((state) => state.FarmerDetails.farmerDetails);
    if (form) {
        html =
            <>
                <div className='form'>


                    <div className='biotype'><select value={biomass} onChange={handleSubmit} placeholder="type of Biomass">
                        <option value="sugarcane" name="sugarcane">sugarcane</option>
                        <option value="pitari" name="pitari">parali</option>
                    </select></div>
                    <div className='weig'>
                        <label>
                            Weight:
                            <input type="number" name="name" value={weight} onChange={handleWeight} />
                        </label>
                    </div>

                </div>
              &nbsp;&nbsp;  <h4>Ammount Will be : <h3>{ammount}</h3> </h4>
                <iframe src="https://jazzy-shortbread-a332c3.netlify.app/" height="600px" />
          {/* <div className='payment'>

          <h4>Click Here to Pay Ammount</h4><scriptTag src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_GXYBw2oLsb2luo" async> </scriptTag> <h3>&copy;{farmerDetails.name}</h3>
          </div> */}
          {/* <Link to='/payment' className='btn btn-danger p-3 mt-4'>PAY NOW</Link> */}

                </>
    }
    return (
        <div>

            {/* <Navbarnew/> */}
           <div className="main">
            <div className="left">
                <img src={img} alt="" />
            </div>
            <div className="right">
            <div className="profile">
                <div>{farmerDetails.name}</div>
                <div>{farmerDetails.email}</div>


            </div>

            <button className='bio' onClick={() => {
                setForm(true);
            }} >Deposit BioMass</button>

            <div className="form">
                {html}


            </div>
            </div>
           </div>

        </div>
    )
}

export default Farmer