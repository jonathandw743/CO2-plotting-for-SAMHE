import Plotter from "./Plotter";

const Page = ({plottingData, plottingOptions}) => {
  return <Plotter data={plottingData} options={plottingOptions}/>;
};

export default Page;