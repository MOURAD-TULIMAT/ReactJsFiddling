function FiddlingGroup() {
  const items = [
    "Fiddle num 1",
    "Fiddle num 2",
    "Fiddle num 3",
    "Fiddle num 4",
    "Fiddle num 5",
  ];
  items.map((item) => <li>{item}</li>);
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{item}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
export default FiddlingGroup;
