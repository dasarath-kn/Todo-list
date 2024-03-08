
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useState,useEffect,useRef } from 'react'
import '../App.css'

const Todo = () => {
  let [values,setValues]=useState('');
  let [todo,setTodo]=useState([]);
  useEffect(()=>{
    console.log("hello");
    console.log(todo);
  })
  function validation(){
    if(values.trim()==""||todo.some(val=>val.txt ===values.trim())){

    }else{
      setTodo([...todo,{id:Date.now(),txt:values,status:false}])}
    }
  
  
  return(
  <>
 
 <div class="container m-5 p-2 rounded mx-auto bg-light shadow">
    
    <div class="row m-1 p-4">
        <div class="col">
            <div class="p-1 h1 text-primary text-center mx-auto display-inline-block">                <u> Todo-List</u>
            </div>
        </div>
    </div>
    <div class="row m-1 p-3">
        <div class="col col-11 mx-auto">
            <div class="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                <div class="col">
                    <input class="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" type="text"  onChange={((e)=>{setValues(e.target.value)})} value={values} placeholder="Add new .." ></input>
                </div>
                <div class="col-auto m-0 px-2 d-flex align-items-center">
                    <label class="text-secondary my-2 p-0 px-1 view-opt-label due-date-label d-none">Due date not set</label>
                    <i class="fa fa-calendar my-2 px-1 text-primary btn due-date-button" data-toggle="tooltip" data-placement="bottom" title="Set a Due date"></i>
                    <i class="fa fa-calendar-times-o my-2 px-1 text-danger btn clear-due-date-button d-none" data-toggle="tooltip" data-placement="bottom" title="Clear Due date"></i>
                </div>
                <div class="col-auto px-0 mx-0 mr-2">
                    <button onClick={validation} type="button" class="btn btn-primary">Add</button>
                </div>
            </div>
        </div>
    </div>
    <div class="p-2 mx-4 border-black-25 border-bottom"></div>
    <div class="row m-1 p-3 px-5 justify-content-end">
        
      
    </div>
   {  
   todo.map((val)=>{
    return(
    <div class="row mx-1 px-5 pb-3 w-80">
        <div class="col mx-auto">
            <div class="row px-3 align-items-center todo-item rounded">
                <div class="col-auto m-1 p-0 d-flex align-items-center">
                    <h2 class="m-0 p-0">
                      
                    <input onChange={((e)=>{setTodo(todo.filter(value=>{if(value.id === val.id){
                      value.status=e.target.checked
                     
                    }
                    return val}))})} type="checkbox" />
                      
                        
                    </h2>
                </div>
                <div class="col px-1 m-1 d-flex align-items-center">
                    <input type="text" class="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3" readonly  style={val.status?{fontStyle:'initial', textDecoration: 'line-through'}:{color:'black'}} value={val.txt} />
                </div>
                <div class="col-auto m-1 p-0 px-3 d-none">
                </div>
                <div class="col-auto m-1 p-0 todo-actions">
                    <div class="row d-flex align-items-center justify-content-end">
                        
                        <h5 class="m-0 p-0 px-2">
                        <i onClick={((e)=>{setTodo(todo.filter(value=>{if(value.id===val.id){value=null}
                      return value}))})} className="fa fa-trash bg-primary text-white rounded p-2" > </i>                        </h5>
                    </div>
                    <div class="row todo-created-info">
                        <div class="col-auto d-flex align-items-center pr-2">
                            <label class="date-label my-2 text-black-50">28th Jun 2020</label>
                        </div>
                    </div>
                </div>
            </div>
         
          
        </div>
    </div>
   )})
}
 
</div>
  </>
  )

}
export default Todo

