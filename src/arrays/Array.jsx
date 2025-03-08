import React from "react";

function Array() {
  // Exemple d’un tableau d’objets sans prix
  const fruits = [
    { id: 1, name: "Pommes" },
    { id: 2, name: "Oranges" },
    { id: 3, name: "Bananes" },
  ];

  // Exemple d’un tableau d’objets avec les prix
  const fruitsWithPrices = [
    { id: 1, name: "Pommes", price: 400 },
    { id: 2, name: "Oranges", price: 500 },
    { id: 3, name: "Bananes", price: 300 },
  ];

  const filteredFruits = fruitsWithPrices.filter((fruit) => fruit.price >= 400);

  const fruitThatCosts300 = fruitsWithPrices.find(
    (fruit) => fruit.price === 300
  );
  return (
    <>
      <h1>Fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
      <ul>
        <h1>Fruits avec un prix {">="} 400</h1>
        {filteredFruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>

        {fruitThatCosts300 && (
          <h1>Le fruit qui coute 300 est {fruitThatCosts300.name}</h1>
        )}

        {fruitThatCosts300 ? (
          <h1>Le fruit qui coute 300 est {fruitThatCosts300.name}</h1>
        ) : null}
     
    </>
  );
}

export default Array;
