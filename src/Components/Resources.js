import React from 'react';
import soft from '../images/soft.jpeg';
import './resource.css'


function Resources() {
  return (
    
         <div className='container-fluid'>
                <h1 className='res'>What people say about <span style={{color: "#ec559b"}}>zenbridge?</span></h1>
                <div class="card-group">
  <div class="card" > 
    <img src={soft} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Best EDI Software for a Small 
      Business</h5>
      <p class="card-text"><small class="text-body-secondary">Read arcticle </small></p>
    </div>
  </div>
  <div class="card" >
    <img src={soft} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">What’s the best eDI software </h5>
      <p class="card-text"><small class="text-body-secondary">Read arcticle</small></p>
    </div>
  </div>
  <div class="card" >
    <img src={soft} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">NetSuite EDI integration A 
      complete setup guide</h5>
      <p class="card-text"><small class="text-body-secondary">Read arcticle</small></p>
    </div>
  </div>
</div>
            </div>
    
  )
}

export default Resources