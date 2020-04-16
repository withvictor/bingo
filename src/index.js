import React  , {useContext ,useReducer}from 'react';
import ReactDOM from 'react-dom';
import './output.css';
//import Demo from './Demo';

import TodosContext from "./context";
import todosReducer from "./reducer";
import Bingo from "./components/Bingo";
import About from "./components/About";
import Show from "./components/Show";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import * as serviceWorker from './serviceWorker';


const Header = ()=>{
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>

                    <Route path="/about" render={props =>
                        (<Bpp {...props}  />)
                    }/>

                    <Route path="/users">
                        <div className="bg-yellow-100">
                            <Users />
                        </div>
                    </Route>

                    <Route path="/">
                        <div className="bg-yellow-100">
                            <App />
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};






function Users() {
    return <h2>Users</h2>;
}

const App  = () =>{
    const initialState = useContext(TodosContext);
    const [state ,dispatch] = useReducer(todosReducer ,initialState);
    return (
        <>
            <div className=" w-full h-full">
                <TodosContext.Provider value={{state , dispatch}}>
                    <Bingo/>
                    <Show />
                </TodosContext.Provider>
            </div>
        </>
    )
};


const Bpp  = () =>{
    const initialState = useContext(TodosContext);
    const [state ,dispatch] = useReducer(todosReducer ,initialState);
    return (
        <>
            <div className=" w-full h-full">

                    <About ssdata={state}/>


            </div>
        </>
    )
};



ReactDOM.render(

    <Header />
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
