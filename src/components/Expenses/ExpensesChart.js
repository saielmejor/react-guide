import React from 'react'; 
import Chart from '../Chart/Chart'; 

const ExpensesChart= (props)=> { 

    //chart data points with value 0
    const chartDataPoints =[ 
        {label:'Jan',value:0},
        {label:'Feb',value:0}, 
        {label:'Mar',value:0}, 
        {label:'Apr',value:0}, 
        {label:'May',value:0}, 
        {label:'Jun',value:0}, 
        {label:'Jul',value:0}, 
        {label:'Aug',value:0}, 
        {label:'Sep',value:0}, 
        {label:'Oct',value:0}, 
        {label:'Nov',value:0}, 
        {label:'Dec',value:0}, 
     

    ]; 
//find the value from expenses and add it to ChartDataPoints 

// use for of loop because is an array and no an object 
for (const expense of props.expenses) { 
    const expenseMonth=expense.date.getMonth(); //starting at 0 => January 
    chartDataPoints[expenseMonth].value += expense.amount; //gets the expense amount from each month and adds it to chartdataPoints
}
    
    return <Chart dataPoints={chartDataPoints}/>

}

export default ExpensesChart