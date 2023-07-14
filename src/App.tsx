import './shared/styles/App.css';
import {Suspense} from "react";
import {AppRouter} from "./providers/config/router-config/app_router";


function App() {

    return (
        <div className='App'>
            <Suspense fallback={<div>Loading...</div>}>
                <AppRouter/>
            </Suspense>
        </div>
    );
}

export default App;
