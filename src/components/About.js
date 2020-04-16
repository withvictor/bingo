import React, { useContext} from 'react'
import TodosContext from "../context";
import toastr from 'toastr'

export default function About(props){

    const {state } = useContext(TodosContext);
    console.log(props,'about,props');
    toastr.warning('無權使用，請先登入系統');
    return  (
        <>
            <div className="flex border-2 bg-purple-100 w-full h-full">
                <div className="flex-row font-mono bg-blue-100 w-1/3">
                    <h1 className="font-red">About </h1>
                </div>
                <p>{props.ssdata.ballSum}</p>

            </div>
        </>


    )
}


