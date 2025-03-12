import React, { useState, useEffect, useContext, createContext } from 'react';

// Create a context to analyze context internals
const AnalysisContext = createContext('default value');

// Component with various hooks to analyze
function App() {
  // useState hook for state management analysis
  const [count, setCount] = useState(0);
  
  // useEffect hook for lifecycle analysis
  useEffect(() => {
    console.log('Effect running, count:', count);
    
    return () => {
      console.log('Effect cleanup');
    };
  }, [count]);
  
  // useContext hook for context API analysis
  const contextValue = useContext(AnalysisContext);
  
  // Event handler to trigger state updates
  const handleClick = () => {
    console.log('Before state update');
    setCount(prevCount => prevCount + 1);
    console.log('After state update (but before re-render)');
  };
  
  console.log('Rendering App component');
  
  return (
    <div className="app">
      <h1>React Internals Analysis</h1>
      <p>Current count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <p>Context value: {contextValue}</p>
      
      <AnalysisContext.Provider value={`Provider value (count: ${count})`}>
        <ChildComponent />
      </AnalysisContext.Provider>
    </div>
  );
}

// Child component to demonstrate props and context passing
function ChildComponent() {
  const contextValue = useContext(AnalysisContext);
  console.log('Rendering Child component');
  
  return (
    <div className="child">
      <h2>Child Component</h2>
      <p>Context from provider: {contextValue}</p>
    </div>
  );
}

export default App; 