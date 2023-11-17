import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage/HomePage';
import TeamPage from './pages/TeamPage/TeamPage';
import ServicePage from './pages/ServicePage/ServicePage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import TestimonialPage from './pages/TestimonialPage/TestimonialPage';
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<TeamPage/>} />
            <Route path="/service" element={<ServicePage/>} />
            <Route path="/project" element={<ProjectPage/>} />
            <Route path="/testimonial" element={<TestimonialPage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/registration" element={<Registration/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
