import React, {useEffect, useState} from 'react'
import {ContactList } from "./ContactList"

export const AddContact = (props) => {
  console.log(props)
    const [data, setData ] = useState({
        name : "",
        email : "",
        address : ""
    })


    const HandleChange = (ev) =>{
        const Value = ev.target.value;
        const Name = ev.target.name
        setData({...data, [Name] : Value
        })
    }

    const HandleSubmitButton = (ev) =>{
      ev.preventDefault();
      if(!data.email || !data.name || !data.address) {
          alert("Please, fill all your Input")
          return
      }
      // props.AddContactFunction(data)
      // setData ({
      //   name : "",
      //   email : "",
      //   address : ""
      // })
      console.log("You clicked me")
    
    }

  return (
      <>
    <div className='container bg-light positon-relative py-3' style={{marginTop : "4rem"}}>
          <h4 className='text-center p-2 text-black my-2'>Create your Profile / Bio</h4>

               <div className="formContanier" style={{width : "70%", margin : "2em auto"}}>

              <form onSubmit={HandleSubmitButton}>
               <div className="form-group mb-3">
               <input type="text" 
               className="form-control" 
               id="exampleInputText" 
               aria-describedby="textHelp" 
               value={data.name}
               name = "name"
               onChange ={HandleChange}
               placeholder="Enter Name" />
               </div>

               <div className="form-group mb-3">
               <input type="email" 
               className="form-control" 
               id="exampleInputEmail1" 
               aria-describedby="emailHelp" 
               value={data.email}
               name = "email"
               onChange ={HandleChange}
               placeholder="Enter email" />
               </div>
                 

               <div className="form-group mb-3">
               <input type="text" 
               className="form-control" 
               id="exampleInputText" 
               aria-describedby="textHelp" 
               value={data.address}
               onChange ={HandleChange}
               name = "address"
               placeholder="Enter address" />
               </div>
               
               <button className="btn btn-primary d-block container w-75">Submit</button>
              </form>
          </div>
    </div>
    
    </>
  )
}
