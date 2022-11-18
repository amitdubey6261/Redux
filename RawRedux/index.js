//RUN to see O/P

//Multiple Reducers and states
//NOW CAKES AND ICECREAM 
/*

cakes are in shelf and icecreams are on freezer thus 
1. shopkeeper-1 handle icecreams
2. shopkeeper-2 handle freezer
*/
const redux = require('redux');
const createStore = redux.createStore ;


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

const initialState = {
    numOfCakes : 10 ,
    numOfIceCreams : 20 ,
}

const reducer = (state = initialState , action)=>{
    switch(action.type){
        case BUY_CAKE : return{
            ...state , 
            numOfCakes : state.numOfCakes-1
        }
        case BUY_ICECREAM :return{
            ...state , 
            numOfIceCreams : state.numOfIceCreams-1
        }
        default : return state
    }
}

const store = createStore(reducer) //Responibility -1 Holding the application state
console.log('InitialState' , store.getState() ); //Responisibility-2 Allow access via getState method by which we can see current state
const unsubscribe = store.subscribe(()=>{console.log(`Updated Store`,store.getState())}) //Responibility-3 Allow to listen any changes that has happened to the store current state
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyCake())
store.dispatch(buyIcecream())

unsubscribe()

//Run to watch op

