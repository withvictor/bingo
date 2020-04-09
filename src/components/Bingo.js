import React, {useEffect, useContext, useState} from 'react'
import TodosContext from "../context";


export default function Bingo(){
    const {state , dispatch} = useContext(TodosContext);

    const handleBtn = ( n,event) =>{

            dispatch({
                type : "ADD_BALL",
                ballNum : n,
                event : event,
                balls : state.balls,
                choiceBall : state.choiceBall
            });

    };

    useEffect(()=>{
        //console.log(state.balls);
    },[]);

    return  (
        <div className="flex w-full">

            <div className="font-mono w-1/3 h-full">

                <div className="font-mono bg-yellow-200 h-20">
                    <h1 className="font-red">Yuor Choice Ball</h1>
                    <hr className="border-2 bg-black-900"/>
                    <p>{state.choiceBall.sort().join(",")}</p>
                </div>

                <div className="font-mono bg-purple-100 w-full">
                    <h1>History</h1>
                    <img src="https://source.unsplash.com/random" alt=""/>
                </div>
            </div>


            <div className="font-mono bg-gray-200 w-2/3 h-full flex-row" >
                <h1>has check ball  - {state.ballCount}</h1>
                <header>

                    <button
                            className="rounded-full border-4 p-1 border-black m-1 bg-blue-200"
                            onClick={ ()=> dispatch({type:"RANDOM_10_BTNS",ccBtns:state.balls})}
                    >
                        random 10
                    </button>

                    <button
                        className="rounded-full border-4 p-1 border-black m-1 bg-red-400"
                        onClick={ ()=> dispatch({type:"SUBMIT_BET",choiceBall:state.choiceBall})}
                    >
                        submit bet
                    </button>

                    <button
                        className="rounded-full border-4 p-1 border-black m-1 bg-yellow-300"
                        onClick={ ()=> dispatch({type:"CLEAR_ALL",ccBtns:state.balls})}
                        >
                        Clear all
                    </button>

                </header>

                <div>
                    {state.balls.map((item,i) => {
                        return(<button className={item.className}  key={i}
                                    onClick={ event => handleBtn(i,event)}
                                    data-flag={item.flag} style={{backgroundColor: (item.flag)?"red":""}}>
                                        {i}
                                    </button>
                        );
                    } )}
                </div>
            </div>

        </div>
    )
}


