import React from 'react'
import { useState } from 'react'
import { deleteTask, editTask, getAllTasks } from '../utillities/TasksUtil'
import { Button } from '@mui/material'

function TaskRow({ task, onUpdatedTask, onDeletedTask, idUser }) {
    const [edit, setEdit] = useState(false)
    const [updateTask, setUpdateTask] = useState({})
    const updated = async () => {
        await editTask(task._id, updateTask)
        setEdit(!edit)
        await getAllTasks();
        onUpdatedTask(updateTask)
    }

    const deleated = async () => {
        const a = await deleteTask(task._id)
        console.log("aa : ", a);
        onDeletedTask(a)
    }

    return (
        <>
            <td>{task.name}</td>
            <td>{task.password}</td>
            <td>{task.id_user}</td>
            <td >{edit ? <input style={{ width: '60px' }} defaultValue={task.description} onChange={e => setUpdateTask({ ...updateTask, description: e.target.value })} /> : task.description}</td>
            {/* <td style={{ width: '200px' }}>
  {edit ? <input defaultValue={task.compleated} onChange={e => setUpdateTask({ ...updateTask, compleated: e.target.value })} /> : task.compleated}
</td> */}
            <td >{edit ? <input style={{ width: '60px' }} type='date' defaultValue={task.date} onChange={e => setUpdateTask({ ...updateTask, date: e.target.value })} /> : task.date}</td>
            
            <td>{edit ? <input style={{ width: '60px' }} type='radio' defaultValue={task.compleated} onChange={e => setUpdateTask({ ...updateTask, compleated: e.target.value })}/> : task.compleated}</td>
            <td onClick={() => deleated()}>delete</td>
            <td onClick={() => setEdit(!edit)}>edit</td>
            {edit ? <td onClick={() => updated()}>confirm</td> : null}
            {/* {edit?<Button onClick={() => updated()}>confirm</Button>:null} */}
        </>
    )
}

export default TaskRow