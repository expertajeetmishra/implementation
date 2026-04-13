 import React from "react";
 import { useState } from "react";
export default function Authentication()
{
   const [isLogin,setLogin]=useState(false)
    return(

   <div>
            <h1>{isLogin? " welcome to LogIn page":"welcome to the signup page"}</h1>         
            {isLogin ? <LogIn/>:<SignUp/>}
              <button onClick={()=>setLogin(!isLogin)}>{isLogin ? "LogIn":"Signup"}</button>
  </div>        
      
    )
}
export function LogIn()
{
return(
<div>
    <input type="text" placeholder="enter email id"/>
    <br />
    <input type="text" placeholder="Enter the password" />
   
</div>
)
}
export function SignUp()
{
   
return(
<div>
    <input type="text" placeholder="enter email id"/>
    <br />
    <input type="text" placeholder="Enter the password" />
    <br/>
    <input type="text" placeholder="Enter the mobile" />
   
</div>
)
}