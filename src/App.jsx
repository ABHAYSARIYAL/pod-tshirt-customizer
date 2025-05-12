import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import html2canvas from "html2canvas";

import CustomizerForm from "./components/CustomizerForm";
import ImagePreview from "./components/ImagePreview";

function App() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [height, setHeight] = useState("180cm");
  const [weight, setWeight] = useState("80kg");
  const [build, setBuild] = useState("athletic");
  const [styleVersion, setStyleVersion] = useState(0);
  const previewRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDownload = () => {
    if (!previewRef.current) return;

    html2canvas(previewRef.current, { backgroundColor: null }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "tshirt-preview.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  const handleReset = () => {
    setImage(null);
    setText("");
    setHeight("180cm");
    setWeight("80kg");
    setBuild("athletic");
  };

  // Style switching with Alt+Q
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.altKey && e.key.toLowerCase() === "q") {
        setStyleVersion((prev) => (prev + 1) % 3);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Apply body styles based on styleVersion
  useEffect(() => {
    if (styleVersion === 0) {
      document.body.style.backgroundColor = "#E7B615"; //golden
      document.body.style.color = "#333";
    } else if (styleVersion === 1) {
      document.body.style.backgroundColor = "#8C66EE"; //blue
      document.body.style.color = "#333";
    } else {
      document.body.style.backgroundColor = "#2C9293"; //cyan
      document.body.style.color = "#333";
    }
  }, [styleVersion]);

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-transparent p-10 space-y-6 md:space-y-0 md:space-x-6">
      {/* Left Panel */}
      <div className="md:w-2/3 w-full flex flex-col bg-transparent rounded-xl p-6 border border-gray-900 shadow-lg space-y-10">
        <div
          ref={previewRef}
          className="flex-1 flex items-center justify-center border-2 border-dashed border-gray-900 rounded-xl relative h-96"
        >
          <ImagePreview
            image={image}
            text={text}
            onUpload={handleImageUpload}
            styleVersion={styleVersion}
          />
        </div>

        <div>
          <label className="block text-gray-800 text-lg font-medium mb-2">
            Add Text (max 3 lines)
          </label>
          <textarea
            value={text}
            onChange={(e) => {
              const lines = e.target.value.split("\n").slice(0, 3);
              setText(lines.join("\n"));
            }}
            rows="3"
            className="w-full p-3 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type your T-shirt text..."
          />
        </div>
      </div>

      {/* Right Panel */}
      <div className="md:w-1/3 w-full flex flex-col bg-transparent rounded-xl p-6 border border-gray-900 shadow-xl">
        <CustomizerForm
          height={height}
          setHeight={setHeight}
          weight={weight}
          setWeight={setWeight}
          build={build}
          setBuild={setBuild}
          handleDownload={handleDownload}
          handleReset={handleReset}
        />
      </div>
    </div>
  );
}

export default App;
