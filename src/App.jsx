import "./App.css";
import Page from "./components/Page";
import { useState } from "react";

function App() {
    const [plottingData, setPlottingData] = useState([
        {
            time: "2022-07-20T03:00:00",
            val: 18.2,
        },
        {
            time: "2022-07-20T04:00:00",
            val: 18.9,
        },
        {
            time: "2022-07-20T05:00:00",
            val: 19.4,
        },
    ]);
    const [plottingOptions, setPlottingOptions] = useState({
        independentKey: "time",
        dependentKey: "val",
        independentName: "Time",
        dependentName: "CO2",
    });

    return <Page plottingData={plottingData} plottingOptions={plottingOptions} />;
}

export default App;
