import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const NoPathFound = lazy(() => import("./noPath"));

const AppLayout = lazy(() => import("./appLayout").then((module) => ({ default: module.AppLayout })));
const Home = lazy(() => import("./home/home").then((module) => ({ default: module.Home })));

const Metamask = lazy(() => import("./metamask/metamask").then((module) => ({ default: module.Metamask })));
const Polygonscan = lazy(() =>
    import("./polygonscan/polygonscan").then((module) => ({ default: module.Polygonscan }))
);

export const RouteList = () => (
    <Routes>
        <Route path='/' element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path='/metamask' element={<Metamask />} />
            <Route path='/polygonscan' element={<Polygonscan />} />
            <Route path='*' element={<NoPathFound />} />
        </Route>
    </Routes>
);
