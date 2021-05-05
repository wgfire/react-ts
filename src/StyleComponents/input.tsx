import React,{useEffect,useState} from "react"; 
import {store} from '../store/index'
import {Divstyle} from "../style/base";
const Inputs= ()=>{
let [name,setName]=useState(store.getState().UserReducer.names)
 useEffect (()=>{
     store.subscribe(()=>{
        setName(store.getState().UserReducer.names)
     })
 })

 function change (event:any){
   store.dispatch({
       type:"change",
       names:event.target.value
   })
 }
 function setNames (){
     setName('react')
 }
    return (
    <>
       <h1 onClick={setNames}>Hello, {name}</h1>
        <Divstyle backGround="#61dafb" className="divStyle">
            <input type="text" name="" id=""  onChange={change} value={name}/>
        </Divstyle>
        </>
    )

}

export default Inputs