import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage/HomePage';
import TeamPage from './pages/TeamPage/TeamPage';
import ServicePage from './pages/ServicePage/ServicePage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import TestimonialPage from './pages/TestimonialPage/TestimonialPage';

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<TeamPage/>} />
            <Route path="/service" element={<ServicePage/>} />
            <Route path="/project" element={<ProjectPage/>} />
            <Route path="/testimonial" element={<TestimonialPage/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
