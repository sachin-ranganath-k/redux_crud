import * as types from "./actionType"

const initialState=
{
    users:[],  //Users are many. That's why Array
    user:{},
    loading: true
}

const userReducers=(state=initialState,action)=>{    // Assign initialState to state variable
    switch(action.type)
    {
      case types.GET_USERS:
          return{
              ...state,
              users: action.payload,
              loading:false,
          }
    
        default: return state; 
    }
}

//Now Goto Home and dispatch the action using useSelector()

export default userReducers;