
const initialState = {
    cart: []
}

//actions

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_ITEM= "REMOVE_ITEM";

export function addToCart(id){
    return{
        type: ADD_TO_CART,
        payload: id
    }
}

export function removeItem(id){
    return{
        type: REMOVE_ITEM,
        payload: id
    }
}

//reducers

export default function reducer(state = initialState, action){
//     switch(action.type){
//         case: ADD_TO_CART:
//             if(id = 2){
//                 console.log('hey')
//             }
//             break;
//         case: REMOVE_ITEM:
//             if(id = 3){
//                 console.log('wrong')
//             }
//             break;
//     }
}