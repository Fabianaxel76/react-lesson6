const items = ['Apples', 'Bananas', 'Cherries', 'Oranges']; // Added bonus item

function Header(props) {
  return <h1>{props.title}</h1>;
}

function List() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <Header title="My Grocery List" />
      <List />
      <List /> {/* Rendered twice */}
    </div>
  );
}

export default App;