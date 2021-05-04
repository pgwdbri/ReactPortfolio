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
        
        <div class="text-center">

            <div class="col-sm-12 my-auto">
                <h1>Budget Tracker</h1>
                <img src={budget} class="img-thumbnail" alt="image"/>
                <a href="https://budget-tracker-pgwd.herokuapp.com/">Budget Tracker Application</a>
                <p>Description</p>
                <a href="https://github.com/pgwdbri/BudgetTracker">Check out the Github Repository for this project.</a>
             </div>

             <div class="col-sm-12 my-auto">

                <h1>Fitness Tracker</h1>
                <img src={workoutapp} class="img-thumbnail" alt="image" />
                <a href="https://fitness-tracker-pgwd.herokuapp.com/">Fitness Tracker Application</a>
                <p>Description</p>
                <a href="https://github.com/pgwdbri/FitnessTracker">Check out the Github Repository for this project.</a>
                
             </div> 

             <div class="col-sm-12 my-auto">
                <h1>Daily Planner</h1>
                <img src={dailyplanner} class="img-thumbnail" alt="image" />
                <a href="https://pgwdbri.github.io/DailyPlanner/">Daily Planner Application</a>
                <p>Description</p>
                <a href="https://github.com/pgwdbri/DailyPlanner">Check out the Github Repository for this project.</a>
                
             </div>

             <div class="col-sm-12 my-auto">

                <h1>Note Taker</h1>
                <img src={notetaker} class="img-thumbnail" alt="image" />
                <a href="https://note-taker-pgwdbri.herokuapp.com/">Note Taker Application</a>
                <p>Description</p>
                <a href="https://github.com/pgwdbri/NoteTaker">Check out the Github Repository for this project.</a>
                
             </div>

             <div class="col-sm-12 my-auto">

                <h1>Employee Directory</h1>
                <img src={employeedirectory} class="img-thumbnail" alt="image" />
                <a href="https://employee-directory-pgwdb.herokuapp.com/">Employee Directory Application</a>
                <p>Description</p>
                <a href="https://github.com/pgwdbri/userdirectory">Check out the Github Repository for this project.</a>
                
             </div>

             <div class="col-sm-12 my-auto">

                <h1>JavaScript Quiz</h1> 
                <img src={jquiz} class="img-thumbnail"alt="image" />
                <a href="https://pgwdbri.github.io/JavaScriptQuiz/">JavaScript Quiz Application</a>
                <p>Description</p>
                <a href="https://github.com/pgwdbri/JavaScriptQuiz">Check out the Github Repository for this project.</a>
                
             </div>


        </div> 

       

    )
}

export default MyBody