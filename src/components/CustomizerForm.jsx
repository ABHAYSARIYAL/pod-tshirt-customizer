import React from "react";

const CustomizerForm = ({
  height,
  setHeight,
  weight,
  setWeight,
  build,
  setBuild,
  handleDownload,
  handleReset,
  styleVersion,
}) => {
  const formVersions = [
    "flex flex-col gap-6 rounded-lg p-6 ",
    "flex flex-col gap-6 rounded-lg p-6 ",
    "flex flex-col gap-6 rounded-lg p-6 "
  ];

  const inputClasses = [
    "p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-black ",
    "p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 text-black ",
    "p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black "
  ];

  return (
    <div className={formVersions[styleVersion]}>

      {/* Height */}
      <div className="flex flex-col rounded-lg p-4 border shadow-lg gap-5 mb-6 hover:shadow-xl transition-shadow duration-300">
        <label className="font-semibold text-lg text-white">Height:</label>
        <select
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className={inputClasses[styleVersion]}
        >
          <option value="170cm">170cm</option>
          <option value="180cm">180cm</option>
          <option value="190cm">190cm</option>
        </select>
      </div>

      {/* Weight */}
      <div className="flex flex-col rounded-lg p-4 border shadow-lg gap-5 mb-6 hover:shadow-xl transition-shadow duration-300">
        <label className="font-semibold text-lg text-white">Weight:</label>
        <select
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className={inputClasses[styleVersion]}
        >
          <option value="70kg">70kg</option>
          <option value="80kg">80kg</option>
          <option value="90kg">90kg</option>
        </select>
      </div>

      {/* Build */}
      <div className="flex flex-col rounded-lg p-4 border shadow-lg gap-5 mb-8 hover:shadow-xl transition-shadow duration-300">
        <label className="font-semibold text-lg text-white">Build:</label>
        <select
          value={build}
          onChange={(e) => setBuild(e.target.value)}
          className={inputClasses[styleVersion]}
        >
          <option value="lean">Lean</option>
          <option value="regular">Regular</option>
          <option value="athletic">Athletic</option>
          <option value="big">Big</option>
        </select>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-6 mt-6 justify-between">
        <button
          type="button"
          onClick={handleDownload}
          className="w-full sm:w-1/2 p-3 bg-green-700 to-blue-600 hover:from-blue-600 hover:to-green-500 text-white rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
        >
          Download
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="w-full sm:w-1/2 p-3 bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
        >
          Reset
        </button>
      </div>

      {/* Footer */}
      <p className="fixed bottom-4 left-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-500 opacity-80 hover:opacity-100 transition-opacity duration-300">
        abhaysariyal143@
      </p>
    </div>
  );
};

export default CustomizerForm;
