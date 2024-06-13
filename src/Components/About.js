import React from 'react';
import wheelpng from '../images/wheel.png';
import './about.css';
import first from '../images/1.png';
import second from '../images/2.png';
import third from '../images/3.png';
import four from '../images/4.png';
import five from '../images/5.png';
import six from '../images/6.png';
import photo from '../images/Photo.png';
import winter from '../images/winter.png';



function About() {
  return (
  <>
        <div class="about container-fluid">
        <div class=" about row mt-5">
            <div class="part1 col-sm-12 col-md-6 col-lg-4">
                <p class="p1 mt-5">Slay your EDI <span style={{color: "#ec559b"}}>Integrate Faster</span></p>
                <p class="p2 mt-4">Leverage the power of API technology faster 
                    integrations, greater data accuracy, global connectivity & 
                    total automation. The customer service and 
                    developer resource</p>   
                        <button type="button" class="partt btn btn-danger mt-3">Schedule a free demo</button>
                </div>
                <div class="part2 col-sm-12 col-md-6 col-lg-4">
                    <img src={wheelpng} alt=''/>
                </div>
                </div>

                <div class="orion row text-center">
                    <div class="col-2">
                      <img src={first} alt=''/>
                    </div>
                
              
                    <div class="col-2" >
                      <img src={second} alt=''/>
                    </div>
                    <div class="col-2" >
                      <img src={third} alt=''/>
                    </div>
                    <div class="col-2" >
                      <img src={four} alt=''/>
                    </div>
                    <div class="col-2" >
                      <img src={five} alt=''/>
                    </div>
                    <div class="col-2" >
                      <img src={four} alt=''/>
                    </div>
                    
                  </div>

                  
                  <div class="row  mt-5">
                    <div class="col-sm-12 col-md-6 col-lg-4 text-center mt-5">
                        <img src={photo} />
                        </div>
                        <div class="mid col-sm-12 col-md-6 col-lg-4 mt-5 ">
                            <h4>Not just our technology, we are loved for
                                our <span style={{color: "#ec559b"}}>EDI support </span>too</h4>

                            <p>"We use Zenbridge as middleware for the end to
                                end sales cycle. The customer service and 
                                developer resource(s) we have partnered with 
                                have been exceptional"
                                </p>
                                <p><span style={{color: "#ec559b"}}>Seth V, Senior Director, Operations & Logistics</span></p>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4 mt-5">
                            <img src={winter} width="80%" height="150px"/>
                        </div>



                        
                    </div>

</div>

{/* <div className='foot container-fluid text-light'>
          <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
              <div className='fw-bold text-warning mb-2'>Zenbridge Software Solutions</div>
              <p>No.5, 1st Main Road, Chennai</p>
              <p>+91 9840758047</p>
              <p>zenbridge.org.in</p>
            </div>
          
          <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
              <div className='fw-bold text-warning mb-2'>Quick Links</div>
              <div className='d-flex gap-2'>
                <div>
                <i class="fa fa-info-circle"></i>
                </div>
                <div>
                <i class="fa fa-home"></i>
                </div>
                <div>
                <i class="fa fa-briefcase"></i>
                </div>
                <div>
                <i class="fa fa-phone"></i>
                </div>
              </div>
             
            </div>
          

            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
              <div className='fw-bold text-warning mb-2'>Communities</div>
              <div className='d-flex gap-2'>
                <div>
                <i class="fa fa-twitter"></i>
                </div>
                <div>
                <i class="fa fa-facebook"></i>
                </div>
                <div>
                <i class="fa fa-whatsapp"></i>
                </div>
                <div>
                <i class="fa fa-linkedin"></i>
                </div>
              </div>
             
            </div>

         
          </div>
          <div>
            </div>
            </div> */}

            </>
    
  )
}

export default About