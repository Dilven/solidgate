import { clientPaths } from "@/config/paths";
import React, { ReactNode } from "react";
import { NavLink } from "./Navlink";

export const Navbar = () => (
    <>
        {Object.entries(clientPaths).map(([name, path]) => (
            <NavLink key={name} path={path}>
                {name}
            </NavLink>
        ))}
    </>
  );