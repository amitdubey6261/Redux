const redux = require('redux');
const createStore = redux.createStore ;


const BUY_CAKE = 'BUY_CAKE'

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

const initialState = {
    numOfCakes : 10
}

const reducer = (state = initialState , action)=>{
    switch(action.type){
        case BUY_CAKE : return{
            ...state , 
            numOfCakes : state.numOfCakes-1
        }
        default : return state
    }
}

const store = createStore(reducer) //Responibility -1 Holding the application state
console.log('InitialState' , store.getState() ); //Responisibility-2 Allow access via getState method by which we can see current state
const unsubscribe = store.subscribe(()=>{console.log(`Updated Store`,store.getState())}) //Responibility-3 Allow to listen any changes that has happened to the store current state
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()


//RUN to see O/P