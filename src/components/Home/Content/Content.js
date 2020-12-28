import React from 'react';
import './Content.css';
import Cont from '../../../assets/images/cont.png'
import Tasks from '../../../assets/images/tasks.png'
import flexible from '../../../assets/images/flexible.svg'
import transparent from '../../../assets/images/transparent.svg'
import scalable from '../../../assets/images/scalable.svg'


const Content = () => {
    return (
        <div className="container">
            <br/>
            <div className="row">
                <div className="head col-md-4">
                    <h3><b>Clazana helps teams work more collaboratively and get more done.</b></h3><br/>
                    
                    <input className="freeRegister" type="submit" name="" value="Register Now" onClick={()=> window.open("/register", "_self") } />                
                </div>
                <div className="imageCont col-md-8">
                    <img height="400px" width="750px" src={Cont} alt=""/>
                </div>
            
            </div>
            <br/> <br/>
            <h2><b>#The best in Project Management#</b></h2>
            <p>Clazana is built for every person who wants to plan and release great projects.</p>
            <div className="what row">
                <div className=" plan col-md-4">
                    <h4><b>Plan Projects</b></h4>
                    <p className="text">Create new projects, plan sprints, and distribute tasks across your team.</p>
                </div>
                <div className=" col-md-7">
                    <img height="400px" width="750px" src={Cont} alt=""/>
                </div>
            </div>
            <div className="what row">
            <div className=" col-md-8">
                    <img height="400px" width="750px" src={Tasks} alt=""/>
                </div>
                <div className=" plan col-md-4">
                    <h4><b>Stay Organized</b></h4>
                    <p className="text">Whether it’s for work, a side project or even a trip, Clazana helps your team stay organized.</p>
                </div>
                
            </div>
            <div className="row">
                <div className="char col-md-4">
                    <img alt="" src={flexible}/>
                    <h4><b>Flexible planning</b></h4>
                    <p>
                    Scrum? Check. Kanban? Check. Mixed methodology? Check. Clazana’s rich planning features enable your team to flexibly plan in a way that works best for them.
                    </p>

                </div>
                <div className="char col-md-4">
                    <img alt="" src={transparent}/>
                    <h4><b>Transparent execution</b></h4>
                    <p>
                    Whether your team is across the table or around the world, Clazana brings a new level of transparency to your team's work and keeps everyone on the same page.                    </p>

                </div>
                <div className="char col-md-4">
                    <img alt="" src={scalable}/>
                    <h4><b>Scalable evolution</b></h4>
                    <p>
                    Add and change issue types, fields, and workflows as your team evolves. Clazana is a project management tool designed for teams of every shape and size.                    </p>

                </div>
            </div>
            
            
        </div>
    );
};

export default Content;