import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <p>
        Number of exercises:{" "}
        {parts.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.exercises;
        }, 0)}
      </p>
    </div>
  );
};

export default Content;
