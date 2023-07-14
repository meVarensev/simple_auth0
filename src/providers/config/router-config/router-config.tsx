import {createBrowserRouter} from "react-router-dom";
import {APP_ROUTER} from "../app-router.constans";
import {AuthPage} from "../../../pages/auth/auth_page";
import {MainPage} from "../../../pages/main/main_page";
import {ErorrPage} from "../../../pages/error/error_page";


//TODO : Children не рендерит
export const router = createBrowserRouter([
    {
        path: APP_ROUTER.ROOT,
        element: <MainPage/>,
        errorElement: <ErorrPage/>,
        children: [
            {
                path: APP_ROUTER.CHILDREN,
                element: <div>Children</div>,
            }
        ],
    },
    {
        path: APP_ROUTER.AUTH,
        element: <AuthPage/>,
    },
]);

