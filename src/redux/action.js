import * as types from "./actionType";
import axios from "axios";

//Define actions here

const getUsers=(users)=>({
    type:types.GET_USERS,   //Take GET_USERS from actionType
    payload:users,         //  users is Key from combineReducer
})

//Need to write action dispatcher now. To dispatch from Action to Reducer
//Let's name dispather as loadUsers
//To do this, we need to write API (Which is in .env file)

export const loadUsers=()=>{
  return function (dispatch){
      axios.get(`${process.env.REACT_APP_API}`)
       .then((resp)=>{
           console.log("response",resp);
           dispatch(getUsers(resp.data));
       }).catch(error=>console.log(error));
  }
}
//After the abovr component (loadUsers), let's write reducer