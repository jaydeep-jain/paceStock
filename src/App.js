import LogIn from "./component/LogIn"

import Homepage from "./component/Homepage";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App (){



  return (
    <Router>
      <h1> this is </h1>
      <Routes >
        <Route path="/" element={<LogIn />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
     
    </Router>
  //  <div>yes his</div>

  )
}

export default App

