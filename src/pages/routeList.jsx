import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const NoPathFound = lazy(() => import("./noPath"));

const AppLayout = lazy(() => import("./appLayout").then((module) => ({ default: module.AppLayout })));
const Home = lazy(() => import("./home/home").then((module) => ({ default: module.Home })));

const Metamask = lazy(() =>
    import("./metamask/connect/metamask").then((module) => ({ default: module.Metamask }))
);

export const RouteList = () => (
    <Routes>
        <Route path='/' element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path='/metamask' element={<Metamask />} />
            <Route path='*' element={<NoPathFound />} />
        </Route>
    </Routes>
);
