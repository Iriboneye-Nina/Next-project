import React from "react";

const Cards = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-sm bg-slate-200 rounded-lg shadow-lg overflow-hidden">
        <div className="p-4">
          <h1 className="text-lg font-bold text-gray-800 mb-2">
            Embracing Moment
          </h1>
          <p className="text-sm text-gray-600">August 7, 2024</p>
        </div>
        <div className="p-4 border-t border-gray-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Blog Card
          </h2>
          <a
            href="https://dev.to/iriboneye_nina_47b95feedc"
            className="text-blue-500 hover:underline"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
