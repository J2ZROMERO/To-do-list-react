import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import TodoContainer from "./functionBased/components/TodoContainer"
import "./functionBased/App.css"
import About from "./pages/About"  
import NotMatch from "./pages/NotMatch"
ReactDOM.render(
  <React.StrictMode>
    <Router>
 <Routes>  
     <Route path="/" element={<TodoContainer />} />
     <Route path="/about" element={<About />} />
     <Route path="/nomatch" element={<NotMatch />} />
     </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)