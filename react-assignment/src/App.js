import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Counter from './components/Counter';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="p-6">
        <Profile name="John Doe" email="john.doe@example.com" />
        <Counter />
      </main>
    </div>
  );
}

export default App;
