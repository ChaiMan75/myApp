import { useState, useEffect } from "react";
import { Switch, Route, Router } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Soles from "./pages/Soles";
import Souls from "./pages/Souls";
import Impact from "./pages/Impact";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/not-found";

// Custom hook for GitHub Pages
function useBasePath() {
  // If in production, use the base path from Vite
  const base = import.meta.env.BASE_URL || "/";
  
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname.replace(base, "/")
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname.replace(base, "/"));
    };
    
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [base]);

  const navigate = (to: string) => {
    window.history.pushState(null, "", `${base}${to.startsWith("/") ? to.slice(1) : to}`);
    setCurrentPath(to);
  };

  return [currentPath, navigate];
}

function App() {
  return (
    <Router hook={useBasePath}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/soles" component={Soles} />
            <Route path="/souls" component={Souls} />
            <Route path="/impact" component={Impact} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
