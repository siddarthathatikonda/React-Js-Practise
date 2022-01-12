/* 11.1 CLASS COMPONENT 
import React, { Component } from 'react'

export default class App extends Component {
  state={
    name : "Telugu Skillhub",  // State is the best feature in class level management, we can create variables and we can store "json data, temporary variable data" and even we can modify .
  }
  render() {
    return (
      <div>
        <h2>Telugu Skillhub</h2>
        <h2>welcome to {this.state.name}</h2>   
      </div> // to use js code in html we have to use with the help of {}... this keyword is for reffering the current object
    )
  }
}*/
//11.2 FUNCTION LEVEL COMPONENT
/*import React,{useState} from 'react'

export const App = () => {
  const [name,setName]=useState("Telugu !!");
  return (
    <div>
      <h2>welcome to {name}</h2>
    </div>
  )
}*/
/*// 12.STATE AND PROPS 
import React, { Component } from 'react'
import Display from './Display';
export default class App extends Component {
  state ={ 
    name : "Telugu Skillhub"  // To declare multiple variable values in a component
  }
  render() {
    return (
      <div>
        <center>
           <h2>Hello World!! {this.state.name}</h2> 
          <Display  name={this.state.name}/> 
        </center>
      </div>
    )
  }
}*/

// USING THE STYLING IN REACTJS BOTH THE INLINE AND IMPORT TYPE STYLING
/*import React from 'react'
//import './App.css';
export const App = () => {
  const styling = { color: "white", backgroundColor: "skyblue", textAlign: "center",padding:'50px' }
  return (
    <div className="container">
      <h1>Welcome to Telugu skillHub</h1>  
      <h1 style={styling}>Welcome to Telgu Skillhub!!</h1>
    </div>
  )
}
export default App*/
// ON CLICK FUNCTIONALITY
/*import React from 'react'

export const App = () => {
  return (
    <div>
      <button onClick={()=> console.log("Clicked")}>Click Here</button>
      <h1 onClick={()=> console.log("clicked")}>ON CLICK CAN BE USED FOR ANYTHING NOT ONLY FOR BUTTON</h1>
    </div>
  ) 
}
export default App*/
/*//ON CLICK IN REACT JS
import React,{useState} from 'react'

export const App = () => {
  const[name,setName]=useState("Skillhub");
  const[count,setCount]=useState(0)
  return (
    <div>
      <center>
        <h1>{name}</h1>
        <h1>{count}</h1>
        <button onClick={()=>setName("Telugu Skillhub")}>
           Change
        </button>
        <button onClick={()=>setCount(count+1)}>Increment</button>
      </center>
    </div>
  )
}
export default App*/
/*// HOW TO USE USE-EFFECT 
import React,{useState,useEffect} from 'react'

export const App = () => {
  const[count,setCount]=useState(0);
  useEffect(()=> console.log(count ),[count])
  return (
    <div>
      <center>
       <h1><p>You Clicked {count} times.</p></h1>
       <button onClick={()=>setCount(count+1)}>Click Me</button>
       </center>
    </div>
  )
}
export default App
------------------------------------------*/
/*// ON-CHANGE EVENT HANDLER
import React,{useState} from 'react'

export const App = () => {
  const[user,setUser]=useState("");
  const handler=e=>{
    setUser(e.target.value)
  }
  return (
    <div>
      <center>
        <input type="text" placeholder="username" value={user} name="user" onChange={handler}/><br/>
        {user}
      </center>
      
    </div>
  )
}
export default App
-------------------------------*/
/*//18.ON-SUBMIT HANDLER
import React,{ useState} from 'react'

function App()  {
  const[data,setData]=useState({
    username:'',
    password:'',
  })
  const {username,password}=data;
  const onChange = e=>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const sumbitHandler=e=>{
    e.preventDefault(); 
    console.log(data);
  }
  return (
    <div>
      <center>
        <form onSubmit={sumbitHandler}>
        <input type="text" placeholder="Username" value={username} onChange={onChange} name="username" /><br />

        <input type="text" placeholder="Password" value={password} onChange={onChange}  name="password"/><br />

        <input type="submit" name="submit"/>
        </form>
      </center>
    </div>
  )
}
export default App*/
/*// 19 MAP FUNCTION
import React from 'react'

function App() {
  //const arr=["React Js","Node Js","Express Js","Angular Js"];
  const arr =[
    {
      id:1,
      title:"React Js"
    },
    {
      id:2,
      title:"Node Js"
    },
    {
      id:3,
      title:"Express Js"
    },
    {
      id:4,
      title:"Angular Js"
    }

  ]
  return (
    <div>
     {/* {
       arr.map(
         (value,index)=><li key={index}>{value}</li>)
     } }
     {
       arr.map(
         (value)=><li key={value.id}>{value.title}</li>
       )
     }
    </div>
  )
} 
export default App*/
/*//20. FILTER FUNCTION IN REACT JS
import React from 'react'

function App(){
  //const name=['James','John','Paul','Ringo','George'];
  //const filtered=name.filter(name=name.includes('J'));
  const arr=[10,20,30,40,50,60,70,80];
  const filtered = arr.filter( item=> item>40)
  return (
    <div>
      {
        filtered.map(item=><li>{item}</li>)
      }
    </div>
  );
}
export default App;*/
/*// 21.EXPORT VS EXPORT DEFAULT IN REACT JS
import React from 'react'
import {Header} from './components/Header';// exported with only ""export"" WE HAVE  TO IMPORT WITHIN CURLY BRACES
import Footer from './components/Footer';
import Home from './components/Home';// exported with """export default"" WE HAVE TO IMPORT NORMALLY WITHOUT CURLY BRACES
function App(){
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}
export default App*/
/*//22.HOW TO CREATE LOGIN FORM
import React,{useState} from 'react'

export const App = () => {
  const[data,setData]=useState({
    username:'',
    password:''
  })
  const {username,password}=data;
  const changeHandler=e=>
  {
    setData({...data,
      [e.target.name]:[e.target.value]})
  }
  const submitHandler= e =>{
    e.preventDefault()
    console.log(data)
  }
  return (
    <div>
      <center>
      <form onSubmit={submitHandler}>
        <input type="text" name="username" placeholder="UserName" value={username} onChange={changeHandler}/><br/>
        <input type="password" name="password" placeholder="Password" value={password} onChange={changeHandler}/><br/>
        <input type="submit" name="submit"/>
      </form>
      </center>
    </div>
  )
}
export default App*/
/*// PRACTISE OF THE ONCLICK EVENT HANDLER
import React,{useState} from 'react'

export const App = () => {
  const clickHandler= e => setCount(count+1);
  const [count,setCount]=useState(0);
  return (
    <div>
      <center>
      <p> The OnClick is execute {count} times </p>
      <button onClick={clickHandler}>Change</button>
      </center>
    </div>
  )
}
export default App*/
/*//PRACTISE OF THE ONCHANGE EVENT HANDLER
import React,{useState} from 'react'
import { forwardRef } from 'react';

export const App = () => {
  const [user,setUser]=useState('');
  const handler=e=>{
    setUser(e.target.value);
  }
  return (
    <div>
      <center>
        <form>
          <input type="text" placeholder="Username" value={user} onChange={handler}/>
        </form>
        {user}
      </center>

    </div>
  )
}
export default App*/
/*//PRACTISE OF THE ON-SUBMIT EVENT HANDLER
import React,{useState} from 'react'

export const App = () => {
  const [data,setData]=useState({
    username:'',
    password:''
  })
  const changeHandler = e =>{
    setData({...data,
      [e.target.name]:[e.target.value]})
  }
  const submitHandler= e=>{
    e.preventDefault();
    console.log(data);
  }
  const {username,password}=data;
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Username" value={username} name="username" onChange={changeHandler}/><br/>
          <input type="password" placeholder="Password" value={password} name="password" onChange={changeHandler}/><br/>
          <input type="submit" name="submit"/>
        </form>
      </center>
    </div>
  )
}
export default App*/
/*//23.SIGN UP FORM IN REACT JS
import React,{useState} from 'react'

function App() {
  const[data,setData]=useState({
    username:'',
    email:'',
    password:'',
    confirmpassword:''
  }) 
  const {username,email,password,confirmpassword}=data;
  const handler = e=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })}
    const sumbitHandler=e=>{
      e.preventDefault();
      if(password === confirmpassword)
      {
        console.log(data);
      }
      else{
         console.log("passwords are not matching");
      }
    }
  return (
    <div>
      <center>
        <form onSubmit={sumbitHandler}>
        <input type="text" placeholder="Username" value={username} name="username" onChange={handler}/><br/>
          <input type="email" placeholder="EmailId" value={email} name="email" onChange={handler}/><br/>
          <input type="password" placeholder="Password" value={password} name="password" nmae="password" onChange={handler}/><br/>
          <input type="password" placeholder="ConfirmPassword" value={confirmpassword} name="confirmpassword" onChange={handler}/><br/>
          <input type="submit" name="submit"/>
        </form>
      </center>
    </div>
  )
}
export default App*/
/*// 24. FORM VALIDATION
import React, { useState } from 'react'

export const App = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  })
  const changeHandler = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const submitHandler = e => {
    e.preventDefault();
    if (username.length < 5) {
      alert("Username must be minimum 5 characters");
    }
    // else if(password!==confirmpassword){
    //   alert("passwords are not matching");
    // }
    else {
      console.log(data);
    }
  }
  const { username, email, password, confirmpassword } = data;
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Username" vlaue={username} name="username" onChange={changeHandler} /><br />
          <input type="email" placeholder="EmailId" value={email} name="email" onChange={changeHandler} /><br />
          <input type="password" placeholder="Password" value={password} name="password" onChange={changeHandler} /><br />
          <input type="password" placeholder="ConfirmPassword" value={confirmpassword} name="confirmpassword" onChange={changeHandler}/><br/>
          {password !== confirmpassword ? <p style={{"color" : "red"}}>passwords not matching</p> : null}
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  )
}
export default App*/
/*//25. CALCULATOR REACT APP
import React,{ useState } from 'react'
import './App.css';

function App(){
  const [input, setInput] = useState("");
  const [ result,setResult]= useState(0);
  
  const handler = e => {
    setInput(e.target.value);
  }
  return (
    <div>
      <center>
      <input type="text" value={input} name="input" onChange={handler}/><br />
      <button onClick={()=>setResult(eval(input))}>Result</button><br/>
      <h4>Result is  : {result}</h4>
      <button onClick={()=> setInput(input+'1')}>1</button>
      <button onClick={()=> setInput(input+'2')}>2</button>
      <button onClick={()=> setInput(input+'3')}>3</button>
      <button onClick={()=> setInput(input+'4')}>4</button>
      <button onClick={()=> setInput(input+'5')}>5</button><br/>
      <button onClick={()=> setInput(input+'6')}>6</button>
      <button onClick={()=> setInput(input+'7')}>7</button>
      <button onClick={()=> setInput(input+'8')}>8</button>
      <button onClick={()=> setInput(input+'9')}>9</button>
      <button onClick={()=> setInput(input+'0')}>0</button><br/>
      <button onClick={()=> setInput(input+'+')}>+</button>
      <button onClick={()=> setInput(input+'-')}>-</button>
      <button onClick={()=> setInput(input+'*')}>*</button>
      <button onClick={()=> setInput(input+'/')}>/</button>
      <button onClick={()=> setInput('')}>clr</button><br/>
      </center>
    </div>
  )
}
export default App*/
/*// 26. HOW TO GET API DATA USING FETCH API IN REACT JS
import React,{useEffect,useState} from 'react'


const App = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{ fetch("https://jsonplaceholder.typicode.com/todos").then(response=>response.json()).then(json =>setData(json))},[]);
  return (
    <div>
      {data.map(item=><li key={item.id}>{item.title}</li>)} 
    </div>
  )
}
export default App*/
/*//27. HOW TO GET API DATA USING AXIOS
import React,{useEffect,useState} from 'react'
import axios from 'axios';
export const App = () => {
  const [data,setData]=useState([]);
  useEffect(()=> {axios.get('https://jsonplaceholder.typicode.com/todos').then(response=>setData(response.data))},[])
  return (
    <div>
      {data.map(item=><li key={item.id}>{item.title}</li>)}
    </div>
  )
}
export default App*/
/*//28. HOW TO USE FIREBASE REALTIME DATABASE IN REACT JS
import React, { useState } from 'react'
import  axios from 'axios';
export const App = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  })
  const changeHandler = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const submitHandler = e => {
    e.preventDefault();
    if (username.length < 5) {
      alert("Username must be minimum 5 characters");
    } 
    else if(password!==confirmpassword){
      alert("passwords are not matching");
    }
    else {
      axios.post('https://teluguskillhub-f507c-default-rtdb.firebaseio.com/register.json',data).then(()=>alert("submitted successfully"))
    }
  }
  const { username, email, password, confirmpassword } = data;
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Username" vlaue={username} name="username" onChange={changeHandler} /><br />
          <input type="email" placeholder="EmailId" value={email} name="email" onChange={changeHandler} /><br />
          <input type="password" placeholder="Password" value={password} name="password" onChange={changeHandler} /><br />
          <input type="password" placeholder="ConfirmPassword" value={confirmpassword} name="confirmpassword" onChange={changeHandler}/><br/>
          {/* {password !== confirmpassword ? <p style={{"color" : "red"}}>passwords not matching</p> : null} }
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  )
}
export default App*/

/*//30.REDIRECT COMPONENT IN REACT JS
import React from 'react'
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App*/
/*// 31. USEHISTORY HOOK IN REACT JS
import React from 'react'
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App*/
// 32->Path params && query Params(Explanation)
/*//33. HOW TO USE PATH PARAMETERS IN REACTJS
import React from 'react'
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
 const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  path="/"  exact component={<Home/>} />
          <Route  path="/about"  exact component={About} />
          <Route  path='/dashboard/:name' exact component={Dashboard} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App*/
/*//35. HOW TO IMPORT IMAGES IN REACT JS
import React from 'react'
import image from './IMG20190912233738.jpg'
 const App = () => {
  return (
    <div>
      <center>
        <img src={image}m height="150" width="auto"/> 
      </center>
      
    </div>
  )

}
export default App*/
// 36. HOW TO IMPORT THE AUDIO IN THE REACT JS
/*// 37. HOW TO IMPORT THE VIDEO IN THE REACT JS
import React from 'react'
import reactvideo from './VID-20210828-WA0006.mp4'
export const App = () => {
  return (
    <div>
      <center>
        <video width="150" heigth="50" controls>
          <source src={reactvideo} type="video/mp4"/>
          </video> 
          <h1>This is the video
          </h1>
        </center>
        
    </div>
  )
}
export default App*/
 /*// 37. USECONTEXT HOOK IN REACT JS
 import React from 'react'
 import ComponentC from './ComponentC.js'
  export const userContext=React.createContext();
 const App = () => {
   return (
     <div>
       <center>
         <userContext.Provider value={"Telugu Skill Hub"}><ComponentC/></userContext.Provider>
         
       </center>
     </div>
   )
 }
 export default App*/
 /*//38. REDUX IN REACT JS
 import React from 'react'
 import {connect} from 'react-redux';
 import Inc from './inc';
 
 const App = ({count}) => {
 
   return (
     <div>
       <center>
         Count from App Js Component : {count} <br/><hr/>
         <Inc/>
       </center>
     </div>
   )
 }
 const mapStateToProps = (state)=>({
  count : state,
}
 )
 export default connect(mapStateToProps)(App);*/
 //41. LIFE CYCLE METHODS IN REACT JS
 /*import React from 'react'
 
  class Container extends React.Component {
   constructor(props){
     super(props);
     this.state={
       show: true,
       count:0
     };
   }
   delHeader =()=>{
     this.setState({show : false});
   }
   componentDidMount(){
     console.log("ComponentDidMount method");
   }
   componentDidUpdate(){
     console.log("ComponentDidUpdate method");
   }
   render() {
     let myheader;
     if(this.state.show){
       myheader=<Child/>;
     };
     return (
       <div>
         <center>
           {myheader}
           <button type="button" onClick={this.delHeader}>Delete Header</button><hr/><hr/>
           <h3>count : {this.state.count}</h3>
           <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
         </center>
       </div>
     )
   }
 }
 class Child extends React.Component{
   componentWillUnmount(){
     console.log("ComponentWillUnmount method");
   }
   render(){
     return(
       <h1>Hello World</h1>
     );
   }
 }
 export default Container*/
 // 29. React Router
 
 
 