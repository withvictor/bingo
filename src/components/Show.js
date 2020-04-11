import React, {useEffect, useContext, useState} from 'react'
import TodosContext from "../context";


export default function Show(){

    const {state , dispatch} = useContext(TodosContext);
    const kingColor1 = (state.ballSum >=1 && state.ballSum <=151)? true: false ;
    const kingColor2 = (state.ballSum >=152 && state.ballSum <=302)? true: false ;
    const kingColor3 = (state.ballSum >=303 && state.ballSum <=453)? true: false ;
    const kingColor4 = (state.ballSum >=454 && state.ballSum <=604)? true: false ;
    const kingColor5 = (state.ballSum >=605 && state.ballSum <=755)? true: false ;


    let [fourseason, setFourseason]= useState({spring:null, summer:null, autumn:null, winter:null});
    let spring=0;
    let winter=0;
    let autumn=0;
    let summer=0;
    //useEffect(()=>{
        //console.log(state.season4.spring,'');
        state.choiceBall.map((item,i) =>{
            //console.log(item,i);
            item =parseInt(item);
            if( item>=1 && item<=20){
                //console.log(item,i);
                spring+=1;
            }else if(item>=21 && item<=40){
                summer+=1;
                //setFourseason( {summer: parseInt(fourseason.summer)+1,autumn:fourseason.autumn, winter:fourseason.winter, spring:fourseason.spring});
            }else if(item>=41 && item<=60){
                autumn+=1;
                //setFourseason( {autumn : parseInt(fourseason.autumn)+1,winter:fourseason.winter, spring:fourseason.spring, summer : fourseason.summer });
            }else if(item>=61 && item<=80){
                winter+=1;
                //setFourseason( {winter : parseInt(fourseason.winter)+1, spring:fourseason.spring, summer : fourseason.summer ,autumn:fourseason.autumn });
                // dispatch({
                //     type : "UPDATE_SEASON",
                //     season_type : "winter",
                //     allSeasion:state.season4
                // });
            }
        });
    //},[ state.choiceBall]);
    //console.log(fourseason.spring);

    return  (
        <>
        <div className="flex border-2 bg-purple-100 w-full h-full">

            <div className="flex-row font-mono bg-blue-100 w-1/3">
                <h1 className="font-red">Yuor Choice Ball</h1>
                <div className="flex-row w-full">
                    <p>{state.choiceBall.sort().join(",")}</p>
                </div>
            </div>

            <div className="flex-row font-mono bg-blue-400 w-1/3">


                <div className="flex flex-row w-full text-2xl">

                    <div className="flex flex-row">
                        <span className="flex flex-row m-3">春</span>
                        <span className="flex flex-row m-3">{spring}</span>
                    </div>

                    <div className="flex flex-row">
                        <span className="flex flex-row m-3">夏</span>
                        <span className="flex flex-row m-3">{summer}</span>
                    </div>

                    <div className="flex flex-row">
                        <span className="flex flex-row m-3">秋</span>
                        <span className="flex flex-row m-3">{autumn}</span>
                    </div>

                    <div className="flex flex-row">
                        <span className="flex flex-row m-3">冬</span>
                        <span className="flex flex-row m-3">{winter}</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row bg-gray-200 w-1/3">



                <div className="flex flex-row  bg-gray-400  py-0 m-0 w-1/5 rounded-full" style={{backgroundColor:(kingColor1)?'red':'' }} >
                    <span className="flex flex-row m-3 text-3xl">金  </span>
                </div>

                <div className="flex flex-row  bg-gray-400  py-0 m-0 w-1/5 rounded-full" style={{backgroundColor:(kingColor2)?'red':'' }} >
                    <span className="flex flex-row m-3 text-3xl ">木</span>
                </div>

                <div className="flex flex-row  bg-gray-400  py-0 m-0 w-1/5 rounded-full" style={{backgroundColor:(kingColor3)?'red':'' }} >
                    <span className="flex flex-row m-3  text-3xl">水</span>
                </div>

                <div className="flex flex-row  bg-gray-400  py-0 m-0 w-1/5 rounded-full" style={{backgroundColor:(kingColor4)?'red':'' }} >
                    <span className="flex flex-row m-3 text-3xl">火</span>
                </div>

                <div className="flex flex-row  bg-gray-400  py-0 m-0 w-1/5 rounded-full" style={{backgroundColor:(kingColor5)?'red':'' }} >
                    <span className="flex flex-row m-3 text-3xl">土</span>
                </div>
            </div>
        </div>

        <div className="flex flex-col border-2 bg-purple-100 w-full h-full">

            <div className="flex flex-col ">
                <span>sum</span>
            </div>
            <div className="flex flex-col ">
                <span>{state.ballSum}</span>
                <p>

                </p>
            </div>
        </div>

        </>


    )
}


