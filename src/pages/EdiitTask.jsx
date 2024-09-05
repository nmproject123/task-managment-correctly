import React from 'react'
import { deleteTask } from '../utillities/TasksUtil'

function EdiitTask() {
  return (
    <div>EdiitTask


<table border={1}>
        <thead>

          <tr>
            <th>name</th>
            <th>description</th>
            <th>date</th>
            <th>compleated</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task=>
            <tr key={task._id}>
              <td> {task.name}</td>
              <td> {task.description}</td>
              <td> {task.date}</td>
              <td> {task.compleated}</td>
              <td><button onClick={()=>deleated(task._id)
              }>delete</button></td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  )
}

export default EdiitTask