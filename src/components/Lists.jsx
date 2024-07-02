import React from "react";

function Lists() {
  const numbers = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {numbers.map((num) => (
        <ul key={Math.random()}>
          <li>{num}</li>
        </ul>
      ))}
    </>
  );
}

export default Lists;
