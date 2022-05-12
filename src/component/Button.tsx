import React from 'react';
import styles from './Todolist.module.css'


type ButtonPropsType = {
    name: string
    callBack: () => void
    className?:string
}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button className={props.className} onClick={onClickHandler}>{props.name}</button>
    );
};

