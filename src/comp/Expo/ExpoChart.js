import React from "react";
import Chart from "../Chart/Chart";

const ExpoChart = props => {
    
    const chartDataPoint = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ];

    for (const expo of props.expenses) {
        const expoMonth = expo.date.getMonth();
        chartDataPoint[expoMonth].value += expo.amount;
    }
    
    return (
        <Chart dataPoints={chartDataPoint} />
    );
};

export default ExpoChart;