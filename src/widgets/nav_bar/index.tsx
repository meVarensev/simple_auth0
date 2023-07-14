import {lazy} from "react";
export const Navbar = lazy(() =>
    import('./ui/nav_bar').then((module) => ({ default: module.NavbarMinimal }))
);
