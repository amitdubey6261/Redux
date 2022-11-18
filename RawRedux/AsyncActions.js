const redux = require('redux')
const axios = require('axios')
const thunkMiddleware = require('redux-thunk').default
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const initalState = {
    loading : false , 
    users : [] , 
    error : ""
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST ';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS ';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE ';

// Action Creator
// ---------------------------------
const fetchUsersRequest = () =>{
    return {
        type : FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) =>{
    return {
        type : FETCH_USERS_SUCCESS , 
        payload: users
    }
}

const fetchUsersFailure = () =>{
    return{
        type : FETCH_USERS_FAILURE , 
        payload : error
    }
}

const reducer = (state = initalState , action) =>{
    switch(action.type){
        case  FETCH_USERS_REQUEST : return{
            ...state , 
            loading : true
        }
        case FETCH_USERS_SUCCESS:return{
            ...state ,
            loading: false , 
            users : action.payload ,
            error : ''
        }
        case FETCH_USERS_FAILURE : return{
            ...state ,
            loading:false , 
            users:[] ,
            error : action.payload
        }
    }
}

const fetchUsers = () => { //thunk action creator // use json place holder
    return function(dispatch){
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
            // console.log(res);
            users = res.data ;
            dispatch(fetchUsersSuccess(users))

        }).catch((e)=>{
            // console.log(e)
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

const store = createStore(reducer , applyMiddleware(thunkMiddleware))
store.subscribe(()=>{ console.log(store.getState())})
//dispatch async action creator
store.dispatch(fetchUsers())