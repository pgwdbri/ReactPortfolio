import React from 'react'
import Image from 'react-bootstrap/Image'

import dailyplanner from './dailyplanner.jpg'
import jquiz from './jquiz.jpg'
import budget from './budget.jpg'
import notetaker from './notetaker.jpg'
import workoutapp from './workouttrack.jpg'
import employeedirectory from './employee.jpg'


import "./body.style.css";



const MyBody = () => {
    return (
        
   <div className="text-center">
      <h1>Latest Projects</h1>


   <div className="row">

      <div className="col-md-3"></div>
         <div className="col-sm-7">
            <h1>Budget Tracker</h1>
            <img src={budget} className="img-fluid" alt="image"/>
            <a href="https://budget-tracker-pgwd.herokuapp.com/">Budget Tracker Application</a>
            <p>This application tracks a users budget by allowing them to record positive and negative balances. This application also includes a visual feature that shows the budget fluctuations over time.</p>
            <a href="https://github.com/pgwdbri/BudgetTracker">Check out the Github Repository for this project.</a>
         </div>

      </div>

   <div className="row">   
      <div className="col-md-3"></div>
         <div className="col-sm-7 ">
                <h1>Fitness Tracker</h1>
                <img src={workoutapp} className="img-fluid" alt="image" />
                <a href="https://fitness-tracker-pgwd.herokuapp.com/">Fitness Tracker Application</a>
                <p>This is an application that can record fitness data such as exercises, exercise data, sets, reps, and workout duration. This application also keeos track of your data that you record and can be accessed on the Dashboard.</p>
                <a href="https://github.com/pgwdbri/FitnessTracker">Check out the Github Repository for this project.</a>
             </div> 
         </div>

   <div className="row">
      <div className="col-md-3"></div>
            <div className="col-sm-7">
                <h1>Daily Planner</h1>
                <img src={dailyplanner} className="img-fluid" alt="image" />
                <a href="https://pgwdbri.github.io/DailyPlanner/">Daily Planner Application</a>
                <p>This project consists of a simple daily planner from 9AM to 5AM. It displays the current day at the top of the page and throughout the day text blocks change color to indicate if that timeblock has passed, is current, or is upcoming. There is also a feature to save text when plans are being made, which stay when the screen is refreshed.</p>
                <a href="https://github.com/pgwdbri/DailyPlanner">Check out the Github Repository for this project.</a>
            </div>
         </div>

   <div className="row">
            <div className="col-md-3"></div>
               <div className="col-sm-7">

                <h1>Note Taker</h1>
                <img src={notetaker} className="img-fluid" alt="image" />
                <a href="https://note-taker-pgwdbri.herokuapp.com/">Note Taker Application</a>
                <p>This project is a note taker application that can save and delete notes.</p>
                <a href="https://github.com/pgwdbri/NoteTaker">Check out the Github Repository for this project.</a>
                
             </div>

   <div className="row">
         <div className="col-md-3"></div>   
             <div className="col-sm-7">
                <h1>Employee Directory</h1>
                <img src={employeedirectory} className="img-fluid" alt="image" />
                <a href="https://employee-directory-pgwdb.herokuapp.com/">Employee Directory Application</a>
                <p>This project is a simple employee directory. The user is provided with a table consisting of information about employees of the company. Functionality includes searching employees by name and sorting by age from oldest to youngest and youngest to oldest.</p>
                <a href="https://github.com/pgwdbri/userdirectory">Check out the Github Repository for this project.</a>
                
             </div>
         </div>

      <div className="row">
         <div className="col-md-3"></div>
             <div className="col-sm-7">

                <h1>JavaScript Quiz</h1> 
                <img src={jquiz} className="img-fluid"alt="image" />
                <a href="https://pgwdbri.github.io/JavaScriptQuiz/">JavaScript Quiz Application</a>
                <p>This is a simple quiz that will ask the user 4 questions about JavaScript. Includes a timer. Features that need to be worked on include deducing time when wrong answer is selected and a way to keep score.</p>
                <a href="https://github.com/pgwdbri/JavaScriptQuiz">Check out the Github Repository for this project.</a>
                
             </div>
         </div>


        </div> 

        </div>

       

    )
}

export default MyBody