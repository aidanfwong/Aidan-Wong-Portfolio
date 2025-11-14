import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./sections/HomePage";
import About from "./sections/About";
import ProjectsPage from "./sections/ProjectsPage";
import ExperiencePage from "./sections/ExperiencePage";

const App = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="experience" element={<ExperiencePage />} />
    </Route>
  </Routes>
);

export default App;
