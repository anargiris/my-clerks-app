import React, { useState } from "react";

const ColorSelector = ({ cardColor, setCardColor }) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleColorChange = (color) => {
    setCardColor(color);
    localStorage.setItem("cardColor", color);
    setShowColorPicker(false);
  };

  const colors = [
    "bg-blue-100",
    "bg-red-100",
    "bg-yellow-100",
    "bg-green-100",
    "bg-fuchsia-100",
    "bg-gray-100",
  ];

  return (
    <div className="flex justify-center items-center mx-auto gap-2 relative z-10">
      <p>Card Background color</p>
      <div className="relative mt-1">
        <button
          type="button"
          onClick={() => setShowColorPicker(!showColorPicker)}
          className={`${cardColor} h-5 w-5 rounded-md border-2 border-gray-800 `}
        ></button>
        {showColorPicker && (
          <div
            data-testid="color-picker"
            className={`absolute bg-white flex right-0 md:right-auto gap-x-2 gap-y-1 p-2 border border-gray-300 shadow-sm rounded-md gap-50`}
          >
            {colors.map((color, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleColorChange(color)}
                className={`w-5 h-5 rounded-md ${color} cursor-pointer`}
              ></button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorSelector;
