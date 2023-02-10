import {RouteProps} from "react-router-dom";
import MainPage from "pages/MainPage/ui/MainPage";
import {AboutPage} from "pages/AboutPage";
import {AppRoutes} from "shared/config/routeConfig/AppRoutes";
import {RoutePath} from "shared/config/routeConfig/routePath";
export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
        [AppRoutes.ABOUT]: {
    path: RoutePath.about,
        element: <AboutPage/>
}
}