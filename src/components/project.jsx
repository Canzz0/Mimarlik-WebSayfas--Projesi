import React from 'react';
import { Link } from 'react-router-dom';
function ProjectComponent() {
    return (
        <>
            <h1 className="project-title">Projelerimiz</h1>
            <div className="project-container">
                <Link to='/hotelprojectdetail'>
                <div class="cardBox mb-2">
                    <div class="card">
                        <h2>Otel Odası Projesi</h2>
                        <span></span>
                        <div class="card-content">
                            <h3>Otel Odası Projesi</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui minima ad totam veritatis assumenda!</p>
                        </div>

                    </div>
                </div>
                </Link>
                <Link to='/museumprojectdetail'>
                <div  class="cardBox  mb-2">
                    <div id="museum" class="card">
                        <h2>Müze Projesi</h2>
                        <span></span>
                        <div class="card-content">
                            <h3>Müze Projesi</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui minima ad totam veritatis assumenda!</p>
                        </div>
                    </div>
                </div>
                </Link>
                <Link to='/hotel2projectdetail'>
                <div class="cardBox  mb-2">
                    <div id="room2" class="card">
                        <h2>Otel Odası Projesi</h2>
                        <span></span>
                        <div class="card-content">
                            <h3>Otel Odası Projesi</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui minima ad totam veritatis assumenda!</p>
                        </div>
                    </div>
                </div>
                </Link>
               
            </div>


        </>
    )
}

export default ProjectComponent;