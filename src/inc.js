import React from 'react'
import {connect} from 'react-redux';
import {increse,decrease} from './action';
 const inc = ({count,increase,decrease}) => {
    return (
        <div>
            Count From Inc Component :{count}<br/><br/>
            <button onClick={()=>increase()}>Increment</button> &nbsp; &nbsp;
            <button onClick={()=>decrease()}>Decrease</button>
        </div>
    )
}

const mapStateToProps =(state)=>({
    count : state,
})
export default inc
