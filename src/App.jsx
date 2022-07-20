import "./App.css";
import Page from "./components/Page";
import React from 'react';

const dataIn = [
    {
        "time": "2022-07-20T03:00:00",
        "val": 18.2
    },
    {
        "time": "2022-07-20T04:00:00",
        "val": 18.9
    },
    {
        "time": "2022-07-20T05:00:00",
        "val": 19.4
    }
];

function App() {
    const axisData = dataIn.map((dataPoint) => [dataPoint.time, dataPoint.val]);
    return <Page axisData={axisData}/>;
}

export default App;
