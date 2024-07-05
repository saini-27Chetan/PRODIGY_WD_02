import React from "react";

function LapRecord({ laps }) {
  return (
    <div className="w-11/12 sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/3 my-10 mx-auto rounded-xl py-6 px-4 xl:p-6 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
      {laps.length === 0 ? (
        <div className="text-center text-lg text-gray-600 font-bold">
          NO LAPS AS PER NOW
        </div>
      ) : (
        <div className="flex flex-col space-y-4 p-4 bg-gray-100 rounded-lg shadow-lg">
          {laps.map((lap, index) => (
            <div
              key={index}
              className="border-2 border-gray-300 p-4 rounded-md flex flex-row justify-between items-center bg-white shadow-md"
            >
              <div className="font-bold text-lg sm:text-3xl text-gray-800">
                Lap {index + 1}
              </div>
              <div className="font-bold text-md sm:text-2xl text-blue-500">
                Time: {lap}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LapRecord;
