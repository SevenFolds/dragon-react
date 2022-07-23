import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import "./PageCss/Navbar.css";
import "./PageCss/Home.css";

function App() {
  return (
    < >
    <Navbar/>
      
       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
         <Route
          path="*"
          element={
            <div>
              <h2>404 Page not found etc.. </h2>
            </div>
          }
        />
      </Routes>

  {/* <Bot/> */}
    
       
    </>
  );
}

export default App;
