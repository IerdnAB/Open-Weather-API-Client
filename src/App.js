import Header from "./components/header/header";
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Home from "./pages/home";
import {links} from "./components/header/links";


function App() {

  return (
    <div>
      <Router>
        <Header brand={'Open Weather API -  Client'} links={links} />
        <Routes>
          <Route index path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
