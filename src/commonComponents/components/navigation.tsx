import React from "react";
import { useLocation, Link } from "react-router-dom";

import { topBarRoutes } from "../topBarRoutes";

import styles from "./navigation.module.css";

export function Navigation() {
  const { pathname } = useLocation();

  return (
    <ul className={styles.container}>
      {topBarRoutes.map(rt => {
        
        const style =
          pathname === rt.route ? { borderBottom: `4px solid ${rt.color}`
          
        } : {borderBottom: ''};

        if(pathname === rt.route){
          document.documentElement.style.setProperty('--main-green-color', rt.color)     
        }

        return (
          <li key={rt.name} style={style}>
            <Link to={rt.route}>{rt.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
