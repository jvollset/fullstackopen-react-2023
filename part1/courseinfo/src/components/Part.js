const Part = ({ part }) => {
  return (
    <p key={part.index}>
      {part.name} {part.exercises}
    </p>
  );
};

export default Part;
