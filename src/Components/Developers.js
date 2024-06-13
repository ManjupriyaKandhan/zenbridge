import React from 'react';
import photo from '../images/Photo.png';
import './developers.css';

function Developers() {
    return (
        <div>
            <div className='boxx container-fluid mt-5'>
                <h1>What people say about <span style={{color: "#ec559b"}}>zenbridge?</span></h1>
                <div class=" row mt-5">
                    <div class="col-sm-12 col-md-6 col-lg-4 mt-5">
                        <div class="card mb-3" style={{width: "28rem"}}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={photo} class="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Valdemar Forsbe</h5>
                                        <h6 class="card-subtitle mb-2 text-body-secondary">Founder Digitac Finance</h6>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="col-sm-12 col-md-6 col-lg-4 mt-5">
                    <div class="card mb-3" style={{width: "28rem"}}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={photo} class="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Valdemar Forsbe</h5>
                                        <h6 class="card-subtitle mb-2 text-body-secondary">Founder Digitac Finance</h6>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="col-sm-12 col-md-6 col-lg-4 mt-5">
                    <div class="card mb-3" style={{width: "28rem" }}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={photo} class="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Valdemar Forsbe</h5>
                                        <h6 class="card-subtitle mb-2 text-body-secondary">Founder Digitac Finance</h6>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Developers