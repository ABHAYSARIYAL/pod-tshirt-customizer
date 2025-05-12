import React from "react";

const TextInput = ({ text, setText }) => {
  return (
    <textarea
      value={text}
      onChange={(e) => {
        const lines = e.target.value.split("\n").slice(0, 3);
        setText(lines.join("\n"));
      }}
      rows="3"
      placeholder="Enter max 3 lines"
      className="w-full p-2 border rounded"
      maxLength="100"
    />
  );
};

export default TextInput;
