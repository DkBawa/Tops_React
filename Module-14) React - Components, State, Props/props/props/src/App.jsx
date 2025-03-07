import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";  // ✅ CORRECT

import './App.css'
import Greet from './Greet';
import Hello from './Hello'
import Propess from './Propess'
import Class from './Class'
import Usercard from './Usercard'
import UseEffect from './UseEffect'
import ClassMount from './ClassMount'
import UseEffectHooks from './UseEffectHooks'
import Counter from './Reducer'
import FatchDataUseeffect from './FatchDataUseeffect'
import InputFocus from './UseSelector'
import UseRef from './UseRef'

function App() {
  return (
  
    <div>
      <Router>
      <Hello />
      <Greet />
      <Propess />
      <Class />
      <Usercard />
      <UseEffect />
      <ClassMount />
      <UseEffectHooks />
      <Counter />
      <FatchDataUseeffect />
      <InputFocus />
      <UseRef />
  </Router>

    </div>
  )
}

export default App;
