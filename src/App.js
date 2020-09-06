import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [time, updateTime] = useState(new Date());
  useEffect(()=> {
    const timer = setInterval(() => {
      updateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  },[])
  return (
    <div className="App">
      <div className="elementcontainer">
        <h1>Digital Clock</h1>
        <div className="timeparent">
          <div className="timecontainer">
            {/* print the string prettily */}
            <span className="time">
            {time.toLocaleTimeString()}
            </span>
          </div>
         </div>
      </div>
      <div className="footer">
        <div>References: </div>
        <div className="firstlink"> 
          <a href="https://reactjsexample.com/glowing-orb-clock-made-with-react/">Reactjs Examples</a>
        </div>
        <span>, </span>
        <div className="firstlink">
        <a href="https://stackoverflow.com/questions/44920162/how-to-display-working-digital-clock-using-react">Stack Overflow</a>
        </div>
      </div>
    </div>
  );
}

export default App;
