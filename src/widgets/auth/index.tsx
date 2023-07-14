import {lazy} from "react";
export const AuthenticationForm = lazy(() =>
    import('./ui/auth').then((module) => ({ default: module.AuthenticationForm }))
);
