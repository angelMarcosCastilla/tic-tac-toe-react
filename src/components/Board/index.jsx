export default function Board({cells,handleClick}) {
  return (
    <div className="gridBoard">
      {cells.map((cell, index) => (
        <div
          key={index}
          className="cell"
          onClick={(e) => handleClick(e, index)}
        >
          <span className={cell}></span>
        </div>
      ))}
    </div>
  );
}
