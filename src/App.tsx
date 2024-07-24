import Navbar from "./components/Navbar"
import { SkeletonTheme } from 'react-loading-skeleton';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";

function App() {

  return (
    <SkeletonTheme baseColor="#D1D1D1" highlightColor="#9C9C9C">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </SkeletonTheme>
  )
}

export default App
