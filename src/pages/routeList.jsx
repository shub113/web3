import { lazy } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

const NoPathFound = lazy(() => import("./noPath"));

const AppLayout = lazy(() => import("./appLayout").then((module) => ({ default: module.AppLayout })));
const Home = lazy(() => import("./home/home").then((module) => ({ default: module.Home })));

const Metamask = lazy(() => import("./metamask/metamask").then((module) => ({ default: module.Metamask })));
const Polygonscan = lazy(() =>
    import("./polygonscan/polygonscan").then((module) => ({ default: module.Polygonscan }))
);
const Issue = lazy(() => import("./issue/Issue").then((module) => ({ default: module.Issue })));

export const RouteList = () => (
    <Routes>
        <Route path='/' element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path='menu1' element={<div>Menu page 1</div>} />
            <Route path='menu2' element={<div>Menu page 2</div>} />
            <Route path='services' element={<div>Service page</div>} />
            <Route path='dashboard' element={<Metamask />} />
            <Route path='tokens' element={<Polygonscan />} />
            <Route path='issue' element={<Issue />} />
            <Route path='menu4' element={<div>Menu page 4</div>} />
            <Route path='menu5' element={<div>Menu page 5</div>} />

            <Route path='*' element={<NoPathFound />} />
        </Route>
    </Routes>
);
