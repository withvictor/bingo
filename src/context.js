import React from 'react'

const ballClass = "rounded-full border-4 p-1 border-black m-1 bg-white";
let balls=new Array(), todoList=new Array();

for(var ic=1 ;ic <=2 ; ic++ ){
    todoList[ic] = {id:ic , text:"Eat "+ic, complete:false};
}

for(var s=1 ;s <=80 ; s++ ){
    balls[s] = {id: s ,className:ballClass , flag:false};
}

const TodosContext = React.createContext({
    todos:todoList,
    balls:balls,
    currentTodo:{},
    ballCount:0,
    choiceBall:[],
    ballSum:0,
    season4:{spring: 0 , summer:0, "autumn":0, "winter":0}
});


export default  TodosContext;