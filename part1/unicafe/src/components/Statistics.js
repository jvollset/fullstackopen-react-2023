import StatisticsLine from "./StatisticsLine";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;
  if (total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <StatisticsLine text="Good:" value={good} />
        <StatisticsLine text="Neutral:" value={neutral} />
        <StatisticsLine text="Bad:" value={bad} />
        <StatisticsLine text="Total:" value={total} />
        <StatisticsLine text="Average:" value={average} />
        <StatisticsLine text="Positive:" value={`${positive}%`} />
      </table>
    </div>
  );
};

export default Statistics;
