import React from "react"; 
import "./ChartBar.css"
import Chart from "./Chart"

const ChartBar=(props)=> { 
    
    let barFillHeight="0%" 

    if (props.maxValue>0){ 
        barFillHeight=Math.round((props.value/props.maxValue)*100) + "%"
    }
    return ( 
<div className="chart-bar"> 
<div className="chart-bar__inner">

<div className="chart-bar__fill" style={{height:barFillHeight}}></div>  </div>
{/* this will add the height dynamically in Css 
it needs to have double curly brackets to identify that it needs a javascript property  */}
<div className="chart-bar__label">{props.label}</div>
</div>

    )
}

export default ChartBar