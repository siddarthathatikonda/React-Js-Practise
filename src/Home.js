/*import React from 'react'


export const Home = () => {
    return (
        <div>
            <center>
                <h4>
                    Welcome To Home Page !!!
                </h4>
                
            </center>
        </div>
    )
}
export default Home*/
/*// NAVIGATE CONCEPT
import React,{useState} from 'react'
import {Navigate} from 'react-router-dom';

export const Home = () => {
    const [auth,setAuth]=useState(false);
    if(auth)
    {
        return <Navigate to='./dashboard'/>
    }
    return (
        <div>
            <center>
                <h4>
                    Welcome To Home Page !!!
                </h4>
                <button onClick={()=>setAuth(true)}>Login</button>
            </center>
        </div>
    )
}
export default Home*/
/*// 31.USEHISTORY i.e. USENAVIGATE CONCEPT 
import React from 'react'
import {useNavigate} from 'react-router-dom';
let history=useNavigate();

export const Home = () => {
    return (
        <div> 
            <center>
                <h4>
                    Welcome To Home Page !!!
                </h4>
                <button onClick={()=>history('./dashboard')}>Login</button>
                
            </center>
        </div>
    )
}
export default Home*/
import React from 'react'


 const Home = () => {
    return (
        <div>
            <center>
                <h4>
                    Welcome To Home Page !!!
                </h4>
                
            </center>
        </div>
    )
}
export default Home
