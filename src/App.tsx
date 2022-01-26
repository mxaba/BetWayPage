import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { store } from "./store/store";
import { Header } from "./commonComponents/components/header";
import { Navigation } from "./commonComponents/components/navigation";
import { JoinNow } from "./commonComponents/components/joinNow";
import { topBarRoutes } from "./commonComponents/topBarRoutes";

import styles from "./app.module.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className={styles.container}>
          <Header />
          <div className={styles.background} />
          <Navigation />
          <Routes>
            {topBarRoutes.map(route => (
              <Route key={route.name} path={route.route} element={route.component} />
            ))}
          </Routes>
        </div>
      </Router>
      <JoinNow />
    </Provider>
  );
}

export default App;
