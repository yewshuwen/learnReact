import styles from "@/styles/Hello.module.css"
import { useState } from "react"

export default function Hello(){
    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState(["1","2"])

    const addTodo = () =>{
        const temp = [...todoList,todo]
        setTodoList(temp)
    }
    return (
        <div>
            <div className={`${styles["navbar-container"]}`}>
                <div>
                    Logo
                </div>
                <div className={`${styles["navbar-menu"]}`}>
                    <div>Home</div>
                    <div>About Us</div>
                    <div>Contact Us</div>
                </div>
            </div>
            <div className={`${styles["todo-container"]}`}>
                <div>
                    <div>Todo Task : </div>
                    <input type="text" value={todo} onChange={(e)=>{
                        setTodo(e.target.value)
                    }}/>
                    <button onClick={()=>{
                        addTodo()
                    }}>Add Todo</button>
                </div>
            </div>
            <div className={`${styles["todolist-container"]}`}>
                {
                    todoList.map((todo)=>{
                        return (
                            <div style={{textAlign:"center"}}>{todo}</div>
                        )
                    })
                }
            </div>
        </div>
    )
} 