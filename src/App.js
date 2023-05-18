import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
//COMPONENTS
import NavBar from "./Components/Navbar";

//PAGES
import About from "./Pages/About.js";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

function App() {
  return (
    <Router>
      <NavBar />
    <div className="">  
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/About" element={<About />} />
      <Route path="/fitness/new" element={<New />} />
      <Route path="/fitness/:id/edit" element={<Edit />}/>
      <Route path="/fitness/:id" element={<Show />} />
      <Route path="*" element={<FourOFour />} />
     </Routes>
   
      
    </div>
    </Router>
  );
}

export default App;
