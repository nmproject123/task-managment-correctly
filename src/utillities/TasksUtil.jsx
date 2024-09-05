import axios from 'axios'

const getAllTasks = async () => {
    const response = await axios.get("http://127.0.0.1:5000/tasks/")
    console.log("response : ",response.data);
    return response.data
}

const getById = async (id)=>{
    const response = await axios.get(`http://127.0.0.1:5000/tasks/${id}`)
    return response.data
}

const createTask = async(task)=>{
   const response = await axios.post("http://127.0.0.1:5000/tasks/",task)
   return response.data
}

const deleteTask = async (id)=>{
    console.log("id in utilities : ",id); 
    const response = await axios.delete(`http://127.0.0.1:5000/tasks/${id}`)
    console.log("response in utilities : ",response);
    return response.data
}

const editTask = async(id,task)=>{
    const response = await axios.put(`http://127.0.0.1:5000/tasks/${id}`,task)
    return response.data
}

export {getAllTasks,getById,createTask,deleteTask,editTask}
