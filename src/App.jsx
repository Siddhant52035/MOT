import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Topbar from "./components/Topbar";
import About from "./pages/About";

import Footer from "./components/Footer";
import Donate from "./pages/Donate";
import Hospitals from "./pages/Hospitals";
import Infographics from "./pages/Infographics";
import JoinUs from "./pages/JoinUs";
import News from "./pages/News";
function Layout() {
  return (
    <>
      <Topbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/hospital" element={<Hospitals />} />
        <Route path="/infographics" element={<Infographics />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/news" element={<News />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
