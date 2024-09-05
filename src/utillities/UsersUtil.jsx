import axios from 'axios'

const getAllUsers = async () => {
    const response = await axios.get("http://127.0.0.1:5000/users/")
    console.log("response : ",response.data);
    return response.data
}

const getById = async (id)=>{
    const response = await axios.get(`http://127.0.0.1:5000/users/${id}`)
    return response.data
}

const chexUser = async(user)=>{
   const response = await axios.post("http://127.0.0.1:5000/users/check_user",user)
//    console.log("in create user");
   return response.data
}
const createUser = async(user)=>{
    const response = await axios.post("http://127.0.0.1:5000/users/",user)
    console.log("in create user");
    return response.data
 }

const deleteUser = async (id)=>{
    const response = await axios.delete(`http://127.0.0.1:5000/users/${id}`)
    return response.data
}

const editUser = async(id,task)=>{
    const response = await axios.put(`http://127.0.0.1:5000/users/${id}`,user)
    return response.data
}

export {getAllUsers,getById,createUser,deleteUser,editUser,chexUser}
