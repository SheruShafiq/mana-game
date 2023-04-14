import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import Landing from "./pages/Landing";
import Application from "./pages/Application";
import Succesful from "./pages/Succesful";

import { motion } from "framer-motion";

const PageLayout = ({ children }) => children;

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};
const pageTransition = {
  type: "tween",
  ease: "linear",
  duration: 0.5,
};

const AnimationLayout = () => {
  const { pathname } = useLocation();
  return (
    <PageLayout>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
    </PageLayout>
  );
};

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<AnimationLayout />}>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/Application" element={<Application />} />
            <Route exact path="/Succesful" element={<Succesful />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
