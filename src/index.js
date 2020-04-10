import React  , {useContext ,useReducer}from 'react';
import ReactDOM from 'react-dom';
import './output.css';
//import Demo from './Demo';

import TodosContext from "./context";
import todosReducer from "./reducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Bingo from "./components/Bingo";
import Show from "./components/Show";

import * as serviceWorker from './serviceWorker';

const App  = () =>{
    const initialState = useContext(TodosContext);
    const [state ,dispatch] = useReducer(todosReducer ,initialState);

    return (
        <>
            <div className="bg-gray-300 w-full h-full">
                <TodosContext.Provider value={{state , dispatch}}>
                    <Bingo/>
                    <Show />
                </TodosContext.Provider>

            </div>


        </>
    )
};

ReactDOM.render(

    <App />
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
