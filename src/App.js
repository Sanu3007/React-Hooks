import React from 'react';
import './App.css';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
import UseEffect1 from './components/UseEffect1';
import ClassUseAfterEffect from './components/ClassUseAfterEffect';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';

function App() {
  return (
    <div className="App">
      <MouseContainer/>
      {/*<HookMouse/>
     {/* <ClassUseAfterEffect/>*/}
     {/*<UseEffect1/>
      {/*<HookCounter4/>
      {/*<HookCounter3/>
      {/*<HookCounter/>
      <HookCounter2/>*/}
    </div>
  );
}

export default App;
