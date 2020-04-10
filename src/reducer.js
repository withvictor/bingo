import uuidv4 from 'uuid/v4'

const ballClass = "rounded-full border-4 p-1 border-black m-1 bg-white";

export default function reducer(state ,action){

    switch (action.type) {
        case "ADD_TODO":
            if(!action.payload){
                return state;
            }
            if(state.todos.findIndex(t => t.text === action.payload) > -1){
                return state;
            }
            const newTodos = {
                id:uuidv4(),
                text:action.payload,
                complete:false
            };
            const addedTodos = [...state.todos,newTodos];
            return {
                ...state,
                todos:addedTodos
            };
        case "SET_CURRENT_TODO":
            return {
              ...state,
              currentTodo :action.payload
            };
        case "TOGGLE_TODO":
            const toggleTodos = state.todos.map(
                t =>
                    t.id === action.payload.id
                    ? {...action.payload , complete:!action.payload.complete }
                    : t
            );
            return {
              ...state,
              todos:toggleTodos
            };
        case "UPDATE_TODO":

            if(!action.payload){
                return state;
            }
            if(state.todos.findIndex(t => t.text === action.payload) > -1){
                return state;
            }

            const updateTodo = { ...state.currentTodo ,text:action.payload};
            const updateTodoIndex = state.todos.findIndex(
                t => t.id === state.currentTodo.id
            );
            const updateTodos = [
                ...state.todos.slice(0,updateTodoIndex),
                updateTodo,
                ...state.todos.slice(updateTodoIndex+1),
            ];
            return {
              ...state,
              currentTodo: {},
              todos:updateTodos
            };


        case "REMOVE_TODO":
            const filteredTodos  = state.todos.filter( t =>t.id !== action.payload.id );
            const isRemovedTodo  = state.currentTodo.id === action.payload.id ? {} : state.currentTodo;
            return {
                ...state,
                currentTodo: isRemovedTodo,
                todos:filteredTodos
            };

        /////Bingo
        case "CLEAR_ALL":
            action.ccBtns.map((item,i) => {
                action.ccBtns[i]={id: i , className:ballClass ,flag:false};
            });
            return {
                ...state,
                ccBtns:action.ccBtns,
                ballCount:0,
                choiceBall:[]
            };
        ////////BINGO
        case "SUBMIT_BET":

            console.log(state.choiceBall.sort() );

            return {
                ...state,
            };
        ////////BINGO
        case "UPDATE_BALL":
            let setNum  = 0 ;
            let ball_Sum = 0;
            setNum = parseInt(action.ballNum) ;
            console.log(action.choiceBall.length);
            if(action.choiceBall.length === 10 ){

                if(action.balls[setNum].flag === true ) {
                    action.choiceBall = action.choiceBall.filter( (item, index) => action.choiceBall.indexOf(setNum) !== index );
                    action.balls[setNum].flag = false;
                    state.ballSum -=setNum;
                    return {
                        ...state,
                        ballCount: state.ballCount-1,
                        balls: action.balls,
                        choiceBall:action.choiceBall,
                        ballSum:state.ballSum
                    };
                }else{
                    return {
                        ...state,
                    };
                }
            }else {

                //加處理 ，反處理
                if (action.balls[setNum].flag) {
                    //要去掉
                    action.choiceBall = action.choiceBall.filter( (item, index) => action.choiceBall.indexOf(setNum) !== index );
                    action.balls[setNum].flag = false;
                    state.ballSum -=setNum;
                    return {
                        ...state,
                        ballCount: state.ballCount-1,
                        balls: action.balls,
                        choiceBall:action.choiceBall,
                        ballSum:state.ballSum
                    };

                } else {
                    state.ballSum+=setNum;
                    action.choiceBall[action.choiceBall.length] = setNum;
                    action.balls[setNum].flag = true;
                    return {
                        ...state,
                        ballCount: state.ballCount+1,
                        balls: action.balls,
                        choiceBall:action.choiceBall,
                        ballSum:state.ballSum
                    };
                }
            }


        case "RANDOM_10_BTNS":

            let randomNums = [];
            let randomNum = 0, ballSum=0;

            while (randomNums.length <= 9 ) {
                randomNum = parseInt((Math.random() * 80) + 1);
                if (randomNum > 0 && randomNum <= 80) {
                    randomNums[randomNums.length] = randomNum;

                    //remove the same int
                    randomNums = randomNums.filter(function (value, index, array) {
                        return array.indexOf(value) === index;
                    });
                }
            }

            //算總合
            randomNums.map((item,i)=>{
                return ballSum+= parseInt(item)
            });


            action.ccBtns.map( (item,i ) => {
                // console.log(i);
                // ballSum+= parseInt(i);
                action.ccBtns[i]={id: i , className:ballClass};
                if (randomNums.indexOf(i)>=0){
                    action.ccBtns[i].flag = true;
                }
            });

            return {
                ...state,
                balls:action.ccBtns,
                ballCount:10,
                choiceBall:randomNums,
                ballSum:ballSum
            };
        default:
            return state;
    }
}