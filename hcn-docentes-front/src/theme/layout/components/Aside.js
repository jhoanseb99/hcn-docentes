import React from "react";
import {NavLink}  from "react-router-dom";

export default function Aside() {
  return (
    /* begin::aside-manu */
    <div id="kt_aside" className="sidebar d-flex flex-column flex-row-auto">
      <div id="kt_aside_menu" className="my-4 scroll ps ps--active-y" data-menu-vertical="1" data-menu-scroll="1" data-menu-dropdown-timeout="500">
        <ul>
          <li aria-haspopup="true">
            <NavLink to="/courses/announcements">
              <span className="menu-text">Anuncios</span>
            </NavLink>
          </li>
          <li aria-haspopup="true">
            <NavLink to="/courses/activities">
              <span className="menu-text">Actividades</span>
            </NavLink>
          </li>
          <li aria-haspopup="true">
            <NavLink to="/courses/clinical-cases">
              <span className="menu-text">Casos clínicos</span>
            </NavLink>
          </li>
          <li aria-haspopup="true">
            <NavLink to="/courses/hcn">
              <span className="menu-text">HCN</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}