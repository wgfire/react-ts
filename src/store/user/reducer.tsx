
interface state {
    names:string
}
let initState:state ={
    names:"港"
}
interface action {
    type:string,
    names:string
}
export const UserReducer = (state:state=initState ,action:action):state=>{
 let {type,names}=action
 switch (type){
     case"change":
     state ={
         names
     }
       return state
     default:
       return state
 }
}