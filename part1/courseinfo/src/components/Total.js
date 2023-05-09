const Total = ({ course }) => {
  return (
    <p>
      Number of exercises:{" "}
      {course.parts.reduce((total, part) => {
        return total + part.exercises;
      }, 0)}
    </p>
  );
};

export default Total;
