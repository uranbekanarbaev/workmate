import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import GetTypes from './components/GetTypes.jsx'
import GetCats from './components/GetCats.jsx'
import CatsByType from './components/CatsByType.jsx'
import CatDetails from './components/CatDetails.jsx'
import CreateCat from './components/CreateCat';  // Import CreateCat
import UpdateCat from './components/UpdateCat';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import ContactMe from './components/ContactMe.jsx';
import Documentation from './components/Documentation.jsx';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Make the parent div a flex container with full height */}
      <Router>
        <Navbar />
        <div className="flex-grow"> {/* This will allow the main content to grow and push the footer down */}
          <Routes>
            <Route path="/" element={<Main />} /> {/* Main Page */}
            <Route path="/cats" element={<GetCats />} /> {/* All Cats Page */}
            <Route path="/cats/:catId" element={<CatDetails />} /> {/* Specific Cat Page */}
            <Route path="/cats/create" element={<CreateCat />} /> {/* Create Cat Page */}
            <Route path="/cats/update/:catId" element={<UpdateCat />} /> {/* Update Cat Page */}
            <Route path="/types" element={<GetTypes />} /> {/* Cat Types Page */}
            <Route path="/cats/type/:type" element={<CatsByType />} /> {/* Cats by Specific Type */}
            <Route path="/contactme" element={<ContactMe />} />
            <Route path="/documentation" element={<Documentation />} />
          </Routes>
        </div>
        <Footer /> {/* Footer will be at the bottom of the screen */}
      </Router>
    </div>
  );
};

export default App;