import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import ErrorBoundry from "./modules/errorBoundry";
import { RouteList } from "./pages/routeList";
import { Spinner } from "./components/index";

const PageLoader = (
    <div className='flex h-screen w-screen items-center justify-center bg-stone-400'>
        <Spinner style='mr-2' />
        Loading...
    </div>
);

function App() {
    return (
        <ErrorBoundry>
            <BrowserRouter>
                <Suspense fallback={PageLoader}>
                    <RouteList />
                </Suspense>
            </BrowserRouter>
            {import.meta.env.VITE_ENV === "development" && <ReactQueryDevtools initialIsOpen={false} />}
        </ErrorBoundry>
    );
}

export default App;
