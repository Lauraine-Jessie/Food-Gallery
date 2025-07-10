const List = ({ items, category, isVisible }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="list-container">
      <h3 className="list-title">{category}</h3>
      <ul   className="list">
        {items.map(item => (
          <li key={item.id}>
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;