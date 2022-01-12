import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom';
 const Dashboard = () => {
     const {name}=useParams()
     useEffect(()=>{console.log(name)})
    return (
        <div>
            <h4>
                Dashboard profile name is:{name}
            </h4>
        </div>
    )
}
export default Dashboard
