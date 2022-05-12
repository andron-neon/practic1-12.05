import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from "./App";
import styles from "./Todolist.module.css"
import {Button} from "./component/Button";


export type PropsType = {
    title: string
    list: Array<ArrayType>
    removeList: (elID: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (newTitle: string) => void
    checkBoxChange: (elID: string, checkedValue: boolean) => void
    filter: FilterValuesType
}
export type ArrayType = {
    id: string
    title: string
    isDone: boolean
}
export const Todolist = (props: PropsType) => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState(false)
    const addTaskHandler = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim())
            setTitle("")
        } else {
            setError(true)
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (title.trim() !== '') {
                props.addTask(title.trim())
                setTitle('')

            }
        }
    }


    const checkBoxChangeHandler = (elID: string, checkedValue: boolean) => {
        props.checkBoxChange(elID, checkedValue)
    }
    const changeFilterHandler = (filterValue: FilterValuesType) => {
        props.changeFilter(filterValue)
    }
    const removeListHandler = (elID:string) => props.removeList(elID)

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    className={error ? styles.error : ''}
                    value={title}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}/>
                <button onClick={addTaskHandler}>+</button>
            </div>
            {error && <div className={styles.errorMessage}>Title is required</div>}
            <ul>
                {props.list.map(el => {
                        // const removeListHandler = () => props.removeList(el.id)

                        return (

                            <li key={el.id}>
                                <input type="checkbox" checked={el.isDone}
                                       onChange={(e) =>
                                           checkBoxChangeHandler(el.id, e.currentTarget.checked)}/>
                                <span>{el.title}</span>
                                <button onClick={()=>removeListHandler(el.id)}>X</button>
                            </li>
                        )
                    }
                )}

            </ul>
            <div>
                {/*<button  className={props.filter === "all" ? styles.activeFilter : ''} onClick={() => changeFilterHandler("all")}>All</button>*/}
                {/*<button  className={props.filter === "active" ? styles.activeFilter : ''} onClick={() => changeFilterHandler("active")}>Active</button>*/}
                {/*<button  className={props.filter === "completed" ? styles.activeFilter : ''} onClick={() => changeFilterHandler("completed")}>Completed</button>*/}

                <Button name={"all"} callBack={() => changeFilterHandler("all")}
                        className={props.filter === "all" ? styles.activeFilter : ''}/>
                <Button name={"active"} callBack={() => changeFilterHandler("active")}
                        className={props.filter === "active" ? styles.activeFilter : ''}/>
                <Button name={"completed"} callBack={() => changeFilterHandler("completed")}
                        className={props.filter === "completed" ? styles.activeFilter : ''}/>

            </div>
        </div>

    );
};

