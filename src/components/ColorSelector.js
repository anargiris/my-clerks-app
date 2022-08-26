import React, { useState } from "react";

const ColorSelector = ({ cardColor, setCardColor }) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleColorChange = (color) => {
    setCardColor(color);
    localStorage.setItem("cardColor", color);
    setShowColorPicker(false);
  };

  const colors = [
    "blue-200",
    "red-200",
    "yellow-200",
    "green-200",
    "fuchsia-200",
    "gray-200",
  ];

  return (
    <div className="flex justify-center items-center mx-auto gap-2 relative z-10">
      <p>Card Background color</p>
      <div className="relative mt-1">
        <button
          type="button"
          onClick={() => setShowColorPicker(!showColorPicker)}
          className={`bg-${cardColor} h-5 w-5 rounded-md border-2 border-gray-800 `}
        ></button>
        {showColorPicker && (
          <div
            className={`absolute bg-white flex flex-wrap gap-x-2 gap-y-1 p-2 border border-gray-300 shadow-sm rounded-md gap-50  w-40 z-20`}
          >
            {colors.map((color, i) => (
              <button
                key={i}
                onClick={() => handleColorChange(color)}
                className={`w-5 h-5 rounded-md bg-${color} cursor-pointer`}
              ></button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorSelector;
