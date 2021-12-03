import React, { Component } from 'react';
import './Card.css' ; 

function Card(props) { 
    const classes= 'card ' + props.className; 
    // adds the card and the props classes 
    return <div className={classes}>{props.children}</div>
    //returns div with all classes constant that includes card and props.className
} 
export default Card; 