import "./FirstCard.css"

const FirstCard = () => {
  return (
    <div className="FirstCard">
      <h2>Your Result</h2>
      <div className="Circle">
        <h1>76</h1>
        <p>of 100</p>
      </div>
      <h1>Great</h1>
      <p>You scored higher than 65% of the people who have taken these tests</p>
    </div>
  );
};

export default FirstCard;
