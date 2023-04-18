import React from 'react';
import Directory from "./components/Directory";

function App() {
  return (
    <div className="App">
      <div className='border border-amber-600 bg-gray-200 drop-shadow transition-shadow'>

          <Directory
            name={'Root'}
          />
      </div>
    </div>
  );
}

export default App;
