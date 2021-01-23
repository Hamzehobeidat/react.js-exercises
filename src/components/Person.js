import React, { Component } from 'react'
import './person-style.css'

import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';


export class Person extends Component {
    render() {

        const {users} = this.props;
        const theUser = users.map( (user) => {
            return (
                
               
                        <div  className="col-md-4">

                            <div className="card hovercard">
                                <div className="cardheader">
                                <a href="#"><i><FaEdit /></i></a>
                                <img src={user.image} />
                                    
                                </div>
                                    <div className="avatar">
                                        <img alt="" src={user.profileImage}/>
                                    </div>
                                    <div className="info">
                                        <div className="title">
                                            <a target="_blank" href="https://scripteden.com/">{user.fullName}</a>
                                        </div>
                                        <div className="desc">{user.work}</div>
                                        <div className="desc">{user.location}</div>
                                        <div className="desc">{user.info}</div>
                                    </div>
                                    <div className="bottom">
                                        <a className="btn btn-primary btn-twitter btn-sm" href={user.facebook}>
                                         <FaFacebook />   <i className="fa fa-facebook"></i>
                                        </a> 
                                       
                                        <a class="btn btn-danger btn-sm" rel="publisher"
                                        href={user.linkedin}>
                                            <FaLinkedin /><i class="fa fa-linkedin"></i>
                                        </a>
                                        <a class="btn btn-secondary btn-sm" rel="publisher" href={user.github}>
                                            <FaGithub /><i class="fa fa-github"></i>
                                        </a>
                                    </div>
                                  
                            </div>
                        </div>
                
      
            )
        })
       
        
        return (
            
        <div>
            <div className="container">
                <div className="row">
                    {theUser}
                </div>
            </div>
        </div> 
        
        );
    } 
}

export default Person
