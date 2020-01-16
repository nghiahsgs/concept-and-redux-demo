const redux=require('redux')
const reduxLogger=require('redux-logger')

const createStore=redux.createStore
const combineReducers=redux.combineReducers
const applyMiddleware=redux.applyMiddleware
const logger=reduxLogger.createLogger()


const BUY_CAKE="BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

//action creater
function buyCake(){
    //action la 1 object
    return {
        type:BUY_CAKE,
        info:"First Redux Action"
    }
}
function buyIcecream(){
    return {
        type:BUY_ICECREAM
    }
}


//reducer is one fuction, accept state and action are argument
//pure reducer : return new state
// (previousState, action)=> newState

// const initialState={
//     nb_cakes:10,
//     nb_icecreams:15
// }
const initialCakeState={
    nb_cakes:10
}
const initialIceCreamState={
    nb_icecreams:15
}

// const reducer=(state=initialState,action)=>{
//     switch(action.type){
//         case BUY_CAKE: return {
//             ...state,
//             nb_cakes:state.nb_cakes-1
//         }

//         case BUY_ICECREAM: return {
//             ...state,
//             nb_icecreams:state.nb_icecreams-1
//         }
//         default : return state
//     }
// }

const cakeReducer=(state=initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            nb_cakes:state.nb_cakes-1
        }
        default : return state
    }
}


const iceCreamReducer=(state=initialIceCreamState,action)=>{
    switch(action.type){
        
        case BUY_ICECREAM: return {
            ...state,
            nb_icecreams:state.nb_icecreams-1
        }
        default : return state
    }
}

const rootReducer=combineReducers({
    "cake":cakeReducer,
    "iceCream":iceCreamReducer

})
const store=createStore(rootReducer,applyMiddleware(logger))
//console.log('Initial state',store.getState())

//const unSubsribe=store.subscribe(()=>console.log('update state',store.getState()))
const unSubsribe=store.subscribe(()=>{})
store.dispatch(buyCake()) //accept action as parameter
store.dispatch(buyCake())
//unSubsribe()
store.dispatch(buyIcecream())
store.dispatch(buyCake())
console.log(store.getState())