import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import Post from "./components/pages/Post";
import NotFound from "./components/pages/NotFound";
import "./App.css";

const App = () => {
  const routes = [
    { path: "/", Component: Home, exact: true },
    { path: "/about", Component: About, exact: true },
    { path: "/contact", Component: Contact, exact: true },
    { path: "/blog", Component: Blog, exact: true },
    { path: "/blog/:id", Component: Post, exact: false },
    { path: "*", Component: NotFound, exact: true },
  ];
  return (
    <Router>
      <div className="app__container">
        <NavigationBar />
        <Switch>
          {/* {routes.map(({ path, Component, exact }) => {
            return (
              <Route key={path} exact={`${exact}`} path={path}>
                <Component />
              </Route>
            );
          })} */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route path="/blog/:id">
            <Post />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
