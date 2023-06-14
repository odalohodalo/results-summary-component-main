import "./SecondCard.css";
import StatsResults from "./StatsResults";

const SecondCard = ({ results }) => {
  const [reaction, memory, verbal, visual] = results;

  return (
    <div className="SecondCard">
      <h2>Summary</h2>
      <StatsResults
        // reaction={reaction}
        // memory={memory}
        // verbal={verbal}
        // visual={visual}

        results={results}
      />
      <button> Continue </button>
    </div>
  );
};

export default SecondCard;
