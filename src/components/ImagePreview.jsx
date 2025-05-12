import React, { useState, forwardRef } from "react";

const ImagePreview = forwardRef(({ image, text, onUpload, styleVersion }, ref) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      onUpload({ target: { files: [file] } });
    }
  };

  const dropBoxStyles = [
    `relative w-full h-full border-2 border-dashed ${
      isDragging ? "border-blue-400 bg-transparent" : "border-gray-300"
    } flex items-center justify-center bg-transparent rounded-md transition-colors duration-300`,
    `relative w-full h-full border-2 border-dashed ${
      isDragging ? "border-yellow-400 bg-transparent" : "border-blue-900"
    } flex items-center justify-center bg-transparent rounded-md transition-colors duration-300`,
    `relative w-full h-full border-2 border-dashed ${
      isDragging ? "border-white bg-transparent" : "border-white"
    } flex items-center justify-center bg-transparent rounded-md transition-colors duration-300`
  ];

  const textOverlayStyles = [
    "absolute inset-0 flex flex-col justify-center items-center text-white text-xl font-bold px-2 text-center space-y-1",
    "absolute inset-0 flex flex-col justify-center items-center text-white text-xl font-bold px-2 text-center space-y-1",
    "absolute inset-0 flex flex-col justify-center items-center text-white text-xl font-bold px-2 text-center space-y-1"
  ];

  const dropTextStyles = [
    "cursor-pointer flex flex-col items-center text-white text-lg p-4",
    "cursor-pointer flex flex-col items-center text-white text-lg p-4",
    "cursor-pointer flex flex-col items-center text-white text-lg p-4"
  ];

  return (
    <div
      ref={ref}
      className={dropBoxStyles[styleVersion]}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {image ? (
        <>
          <img
            src={image}
            alt="T-Shirt Preview"
            className="max-h-full max-w-full object-contain"
          />
          <div className={textOverlayStyles[styleVersion]}>
            {text.split("\n").map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </>
      ) : (
        <label className={dropTextStyles[styleVersion]}>
          <input
            type="file"
            accept="image/*"
            onChange={onUpload}
            className="hidden"
          />
          <p className="text-center">Click to upload or drag & drop an image</p>
        </label>
      )}
    </div>
  );
});

export default ImagePreview;
