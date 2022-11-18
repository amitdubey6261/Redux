//RUN to see O/P

//Multiple Reducers and states
//NOW CAKES AND ICECREAM 
/*

cakes are in shelf and icecreams are on freezer thus 
1. shopkeeper-1 handle icecreams
2. shopkeeper-2 handle freezer
*/
const redux = require('redux');
const reduxLogger = require('redux-logger')
const createStore = redux.createStore ;
const combineReducers = redux.combineReducers // TO use this method we have create a root redcer and use taht reduvcer in our our code
const logger = reduxLogger.createLogger() // --------------> will use as a middleware thus library provide a function called redux middleware
const applyMiddleware = redux.applyMiddleware // -------> to apply this pass it as an argument to store with middleawre as an argument



const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//Action :
// let action = {
//     type : BUY_CAKE , 
//     info : "First redux action"
// }

//Action Creator

let buyCake = () =>{
    return {
        type : BUY_CAKE , 
        info : 'First Redux Action '
    }
}

let buyIcecream = () =>{
    return {
        type : BUY_ICECREAM , 
        info : 'Second Redux Action '
    }
}

const initialCakeState = {
    numOfCakes : 10 ,
}

const intialIceCreamState = {
    numOfIceCreams : 20 ,
}

// const initialState = {
//     numOfCakes : 10 ,
//     numOfIceCreams : 20 ,
// }

// const reducer = (state = initialState , action)=>{
//     switch(action.type){
//         case BUY_CAKE : return{
//             ...state , 
//             numOfCakes : state.numOfCakes-1
//         }
//         case BUY_ICECREAM :return{
//             ...state , 
//             numOfIceCreams : state.numOfIceCreams-1
//         }
//         default : return state
//     }
// }

const cakeReducer = (state = initialCakeState , action ) =>{
    switch(action.type){
        case BUY_CAKE : return {
            ...state , 
            numOfCakes : state.numOfCakes -1 
        }
        default : return state ;
    }
}

const iceceamReducer = (state = intialIceCreamState , action ) =>{
    switch(action.type){
        case BUY_ICECREAM : return {
            ...state , 
            numOfIceCreams : state.numOfIceCreams -1 
        }
        default : return state ;
    }
}

//COMBINE REDUCERs IN ROOT REDUCER

const rootReducer = combineReducers({
    cake : cakeReducer , 
    icecream : iceceamReducer
})

// const store = createStore(reducer) //Responibility -1 Holding the application state      ------------> ONLY ACCEPTS SINGLE REDUCER THUS WE have to use COMBINE REDUCER METHOD SUch that we can use icecreamreducer and cakereducer simultaneously
const store = createStore(rootReducer , applyMiddleware(logger));
console.log('InitialState' , store.getState() ); //Responisibility-2 Allow access via getState method by which we can see current state
const unsubscribe = store.subscribe(()=>{/*console.log(`Updated Store`,store.getState())*/}) //Responibility-3 Allow to listen any changes that has happened to the store current state ---------------> now not require to log anything we have logger
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyCake())
store.dispatch(buyIcecream())

unsubscribe()

//Run to watch op

