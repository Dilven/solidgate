import { clientPaths } from "@/config/paths";
import React from "react";
import { NavLink } from "../Navlink/Navlink";

export const Navbar = () => (
  <>
    {Object.entries(clientPaths).map(([name, path]) => (
      <NavLink key={name} path={path}>
        {name}
      </NavLink>
    ))}
  </>
);
