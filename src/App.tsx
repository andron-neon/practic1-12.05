import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ArrayType, Todolist} from "./Todolist";

export type FilterValuesType ="all" | "active" | "completed";

function App() {
    let[propertyList, setPropertyList] = useState <Array<ArrayType>>([
        {id: 1, title: "flat", isDone: true},
        {id: 2, title: "cottage", isDone: true},
        {id: 3, title: "garage", isDone: false},
        {id: 4, title: "country house", isDone: false}
    ])
    const [filter, setFilter] = useState<FilterValuesType>("all")
    
    const changeFilter = (filter:FilterValuesType) => {
      setFilter(filter)
    }

    let removeList = (elID:number) => {
        setPropertyList(propertyList.filter(el => el.id !== elID))
    }
    let objForRender = propertyList
if (filter === "active") {
    objForRender = propertyList.filter(el=> !el.isDone)
}
if (filter === "completed") {
    objForRender = propertyList.filter(el=> el.isDone)
}


    return (
        <div className="App">
            <Todolist title={"My property1"}
                      list={objForRender}
                      removeList={removeList}
                      changeFilter={changeFilter}
            />

        </div>
    );
}

export default App;
