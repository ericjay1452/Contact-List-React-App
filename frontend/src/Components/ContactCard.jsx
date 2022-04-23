import React from "react";
import {BiTrashAlt} from "react-icons/bi";
import "../Components/Push.css"
import {MdEdit, MdOutlineAlternateEmail} from "react-icons/md";
import svg from "../images/user.svg";
import {ImProfile} from "react-icons/im";

export const ContactCard = ({email,name, address}) => {
                      return (
                    <div className="content d-flex mb-2 p-2 justify-content-between align-items-center">
                        <div className="user d-flex flex-column pt-2">
                              <div className="img-div">
                              <img src={svg} alt={name} />
                               </div>   
                                 <p>
                                 <span className="text-white"><ImProfile /></span>  {name}</p>
                                 <p>
                                 <span className="text-white"><MdOutlineAlternateEmail /></span> 
                                  {email}</p>
                        </div>

                        <div className="profile">
                             <p>{address}</p>
                         </div>

                         <div className="icon">
                         <span className="icon span text-success"><MdEdit /></span>
                         <span className="icon span text-danger"><BiTrashAlt/></span>
                        </div>
                  </div>
  )
}