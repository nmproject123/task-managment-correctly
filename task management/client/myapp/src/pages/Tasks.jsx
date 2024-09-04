import React, { useState, useEffect } from 'react'
import { getAllTasks, deleteTask, editTask, createTask } from '../utillities/TasksUtil';
import { useParams } from "react-router-dom"
import Radio from '@mui/material/Radio';
import { DataGrid } from '@mui/x-data-grid';


// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };

import TaskRow from './TaskRow';
import { Button } from '@mui/material';
import { getById } from '../utillities/UsersUtil';
function Tasks(props) {

  // const columns = [
  //   { field: 'description', headerName: 'Description', width: 180 },
  //   { field: 'date', headerName: 'Date', width: 180 },
  //   { field: 'compleated', headerName: 'Compleated', width: 180 },
  // ];
  // const getRowId = (task) => task._id;



  const { id } = useParams()

  const [tasks, setTasks] = useState([])
  const [create, setCreate] = useState(false)
  const [newTask, setNewTask] = useState({ id_user: id, description: "", date: "", compleated: 'true' })

  const handleChange = (event) => {
    setNewTask({ ...newTask, compleated: event.target.value })
  };

  const getData = async () => {
    const getTasks = await getAllTasks()
    setTasks(getTasks)
  }

  const deleateTask = () => {
    getData()
    console.log("in deleated");
  }

  const updateTask = (updateTask) => {
    getData()
  }

  const addTask = async () => {
    console.log("new task after useState : ", newTask);
    if (newTask.date === "" || newTask.description === "") {
      alert("all the field request")
    }
    else {
      const task = await createTask(newTask)
      console.log("task : ", task);
      setCreate(!create)
      getData()
    }

  }
  useEffect(() => {
    const userName = async () => {
      const user = await getById(id)
      setNewTask({ ...newTask, name: user.name, password: user.password })
    }
    userName()
    getData()
  }, [])

  // const [selectedRow, setSelectedRow] = useState(null);

  // const handleRowSelection = (selectedRows) => {
  //   if (selectedRows.isSelected && selectedRows.data.length > 0) {
  //     setSelectedRow(tasks.find(task => task.id === selectedRows.data[0]));
  //   } else {
  //     setSelectedRow(null);
  //   }
  // };

  // const filteredRows = tasks.filter(task => task.id_user === id);
  return (
    <div>
      <table border={1} >
        <thead>
          <tr>
            <th>name</th>
            <th>password</th>
            <th>id_user</th>
            <th>description</th>
            <th>date</th>
            <th>compleated</th>
            <th>delete</th>
            <th>edit</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map(t => {
            console.log("t.id_user : ", t);
            console.log("id :  ", id);
            if (t.id_user === id) {
              return (
                <tr key={t._id}>
                  <TaskRow task={t} idUser={id} onUpdatedTask={updateTask} onDeletedTask={deleateTask} />
                </tr>)
              // return <TaskRow task={t} idUser={id} onUpdatedTask={updateTask} onDeletedTask={deleateTask} />
            }
          }
          )}
        </tbody>
      </table>
      {/* {tasks.map((t) => (<tr key={t.id}><TaskRow task={t} /></tr>))} */}



      <Button onClick={() => setCreate(!create)} >add task</Button>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        {create ? <Input placeholder="description" type='text' inputProps={ariaLabel} onChange={(e => setNewTask({ ...newTask, description: e.target.value }))} /> : null}
        {create ? <Input placeholder="date" type='date' inputProps={ariaLabel} onChange={(e => setNewTask({ ...newTask, date: e.target.value }))} /> : null}
        {create ?
          <div>
            <Radio
              checked={newTask.compleated === 'true'}
              onChange={handleChange}
              value="true"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'A' }}

            />compleated
            <Radio
              checked={newTask.compleated === 'false'}
              onChange={handleChange}
              value="false"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'B' }}
            />not compleated
          </div> : null}
      </Box>
      {create ? <Button onClick={() => (addTask())} >conferm</Button> : null}
    </div>
  )
}
export default Tasks

{/* //     <table border={1} >
    //       <thead>
    //         <tr>
    //           <th>name</th>
    //           <th>password</th>
    //           <th>id_user</th>
    //           <th>description</th>
    //           <th>date</th>
    //           <th>compleated</th>
    //           <th>delete</th>
    //           <th>edit</th>
    //         </tr>
    //       </thead>

    //       <tbody>
    //         {tasks.map(t => {
    //           if (t.id_user === id) {
    //             // return <tr key={t.id_user}><TaskRow task={t} idUser={id} onUpdatedTask={updateTask} onDeletedTask={deleateTask} /></tr>
    //             return <TaskRow task={t} idUser={id} onUpdatedTask={updateTask} onDeletedTask={deleateTask} />
    //           }
    //         }
    //         )}
    //       </tbody>
    //     </table>
        {tasks.map((t) => (<tr key={t.id}><TaskRow task={t} /></tr>))} */}


{/* <Button onClick={() => setCreate(!create)} >add task</Button> */ }






// <div style={{ height: 400, width: '100%' }}>
// {/* if (t.id_user === id) {
// */}
// {console.log("mk")}
// <DataGrid rows={filteredRows} columns={columns} pageSize={5} checkboxSelection getRowId={getRowId}
//   onSelectionModelChange={(e) => handleRowSelection(e)}
//   // onEditCellChangeCommitted={(params) => handleRowUpdate(params.props.row)}
//   />
//   {console.log("123k")}
// <div>
//   <p>Selected Row: {selectedRow}
//     {/* {selectedRow.description} {selectedRow.date} */}
//   </p>
//   {/* Here you can add buttons or logic to update or delete the selected row */}
// </div>
// <Button onClick={(e) => deleateTask()}>d</Button>
// <br />
// </div>



