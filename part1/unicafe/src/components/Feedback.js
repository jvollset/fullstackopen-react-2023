import Button from "./Button";

const Feedback = ({ handleGoodClick, handleNeutralClick, handleBadClick }) => {
  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text={"Good"} />
      <Button onClick={handleNeutralClick} text={"Neutral"} />
      <Button onClick={handleBadClick} text={"Bad"} />
    </div>
  );
};

export default Feedback;
