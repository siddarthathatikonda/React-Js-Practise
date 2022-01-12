export const increase =()=>dispatch=>{
    dispatch({
        type:"INCREMENT"
    })
}
export const decrease =()=>dispatch=>{
    dispatch({
        type: "DECREMENT"
    })
}
