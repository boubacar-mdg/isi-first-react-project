import React, { createContext, useState, useContext } from "react";

const MyContext = createContext(null);

function UseContext() {
  const initialColor = "gray";
  const [color, setColor] = useState(initialColor);
  return (
    <MyContext.Provider
      value={{ color: color, setColor: setColor, initialColor: initialColor }}
    >
      <Form />
    </MyContext.Provider>
  );
}

function Form() {
  return (
    <>
      <form action="">
        <Input />
        <Box />
      </form>
    </>
  );
}

function Box() {
  const {color, initialColor} = useContext(MyContext);
  return (
    <div
      style={{
        backgroundColor: color ? color : initialColor,
        height: "20px",
        width: "20px",
        marginTop: "5px;",
      }}
    ></div>
  );
}

function Input() {
  const { color, setColor } = useContext(MyContext);
  return (
    <input
      type="text"
      placeholder="Nom de la couleur"
      value={color}
      onChange={(e) => setColor(e.target.value)}
    />
  );
}

export default UseContext;
