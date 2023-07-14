import {RouterProvider} from "react-router-dom";
import {router} from "./router-config";

export const AppRouter = () => (
    <RouterProvider router={router} />
);
