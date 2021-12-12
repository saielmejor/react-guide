import React from "react"; 
import ChartBar from  './CharBar';
import './Chart.css';

const Chart= (props)=> {  //pass props as argument 
    // this create an array of data points with the values key,value, label ,maxValue 
    
    //you need to define the maxValue data points 

    const dataPointValues=props.dataPoints.map(dataPoint=> dataPoint.value); // creates an array of values from dataPoint
    const totalMaximum = Math.max(...dataPointValues); 
    // you use the spread operator to get a list of values from each month 
    
    
    return ( 
        <div className='chart'> {props.dataPoints.map((dataPoint) => ( 
            <ChartBar 
            key={dataPoint.label} 
            value={dataPoint.value} 
            maxValue={totalMaximum} 
            label={dataPoint.label} />

        ))}

        </div>
    )

}

export default Chart