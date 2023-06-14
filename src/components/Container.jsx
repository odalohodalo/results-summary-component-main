import { useState } from "react";
import data from "./data.json";
import "./Container.css"
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";


const Container = () => {
  const [results] = useState(data);

  return (
    <div className="Container">
        <FirstCard />
        <SecondCard results={results}/>
    </div>
  );
};

export default Container;
