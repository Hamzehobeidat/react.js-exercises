import React, { Component } from 'react'
import './person-style.css'

export class Person extends Component {
    render() {

        const {users} = this.props;
        const theUser = users.map( (user) => {
            return (
                
                <div className="container">
                <div className="row">
                    <div  className="col-md-4">

                        <div className="card hovercard">
                            <div className="cardheader">

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
                                    <a className="btn btn-primary btn-twitter btn-sm" href="https://twitter.com/webmaniac">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                   
                                   
                                    
                                </div>
                      
                     </div>
                 </div> 
            </div>
        </div>
            )
        })
       
        
        return (
            
           <div>
               {theUser}
           </div>      
 
        
        );
    } 
}

export default Person
