import React ,{useState}from 'react'
import { app,database } from './Firebase';

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from 'firebase/auth';

export default function LogIn() {
    const [data,setData]=useState({
        email:'',
        password:""
    })


     function change(event){

     let inputData={[event.target.name]:event.target.value}
      setData({...data,...inputData})
    }
      const auth=getAuth()

    function signup(){ 
        console.log(auth,data.email,data.password)
        createUserWithEmailAndPassword(auth,data.email,data.password)
        .then((result)=>console.log(result.user))
        .catch((error)=>alert(error.message))
    }



    function signin(){
        signInWithEmailAndPassword(auth,data.email,data.password)
        .then((result)=>console.log(result.user))
        .catch((error)=>alert(error.message))
    }


    function logout() {
        console.log(auth)
        auth.signOut()
        .then(()=>console.log("successful logout"))
        .catch((error)=>alert(error.message))
    }
    
  
    return (
        <div className='container'>
          
            {/* <form className='container' mathod='post'> */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={data.email} onChange={change}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' value={data.password} onChange={change}/>
                </div>
               
                <button type='submit' className="btn btn-primary mx-3" onClick={signup}>sign Up</button>
                <button type='submit' className="btn btn-primary mx-3" onClick={signin}>sign in</button>
                <button  className="btn btn-primary mx-3" onClick={logout}>log out</button>
            {/* </form> */}
        </div>
    )
}