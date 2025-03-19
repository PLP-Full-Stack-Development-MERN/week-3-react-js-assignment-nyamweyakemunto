import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="flex flex-col items-center my-8">
      <h2 className="text-2xl font-semibold mb-4">Counter</h2>
      <div className="flex items-center space-x-6">
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
        >
          -
        </button>
        <span className="text-xl">{count}</span>
        <button
          onClick={increment}
          className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;

