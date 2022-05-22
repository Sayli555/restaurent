import React from 'react';
import logo from "../assets/logo.svg";

const navbaroption=[
    {
        iconName:"person_outline",
        lable:"Sign in"
    },
    {
        iconName:"",
        lable:"Sign in"
    },
    {
        iconName:"search",
        lable:"Search"
    }

]

const Navbar = (props) => {
  return (
    <section className="navbar">
        <div className="container">
            <img className="logo" src={logo}/>
            <div className="location">
                <span className="city"> {props.city}</span>
                <span className="state">{props.state},{props.country}</span>
            </div>
            <div className="navbar-options">
                {navbaroption.map((navbarop)=>(
                    <div key={navbarop.iconName} className="navbar-option">
                         <span className="material-icons"> {navbarop.iconName}</span>{navbarop.lable}
                    </div>
                ))}
              
             
            </div>
        </div>
        
    </section>
  )
}

export default Navbar
