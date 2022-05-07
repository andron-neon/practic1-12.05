import React from 'react';
import {FilterValuesType} from "./App";

export type PropsType={
    title:string
    list:Array<ArrayType>
    removeList:(elID:number)=> void
    changeFilter:(filter:FilterValuesType)=> void
}
export type ArrayType={
    id:number
    title:string
    isDone:boolean
}
export const Todolist = (props:PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.list.map((el)=> {
                    return (
                        <li key={el.id}><input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                            <button onClick={()=>props.removeList(el.id)}>X</button>
                        </li>
                    )
                })}

            </ul>
            <div>
                <button onClick={()=>props.changeFilter("all")}>All</button>
                <button onClick={()=>props.changeFilter("active")}>Active</button>
                <button onClick={()=>props.changeFilter("completed")}>Completed</button>
            </div>
        </div>

    );
};

