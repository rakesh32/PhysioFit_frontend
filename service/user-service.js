import axios from 'axios'
import dotenv from 'dotenv'
import {USER_API} from '../constants/env-variables'
dotenv.config();
async function login(payload) {
    try{
        console.log(payload)
        console.log(process.env.BACKEND_URI)
        const res = await axios.post('http://192.168.29.23:5000/api/app/user/login', payload)
        // console.log(res)
        if(res.data){
            return res.data
        }
    }catch(e){
        console.log(e)
    }
}

export default userService = {
    login,

}