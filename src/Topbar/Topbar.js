import React from "react";
import logo from './197684_preview.png';
import classes from './Topbar.module.css'
const Topbar=(props)=>{
    return(
        <header>
            <nav className={classes.topbar}>
            <img src={logo} alt="Amazon Logo"/>
            </nav>
        </header>
    )
}
export default Topbar;