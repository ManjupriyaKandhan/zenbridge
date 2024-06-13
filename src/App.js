
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Developers from './Components/Developers';

import Navbar from './Components/Navbar';
import Products from './Components/Products';
import Resources from './Components/Resources';
import Solutions from './Components/Solutions';


function App() {
  return (
    <div className="App">

      <Navbar/>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/solutions' element={<Solutions/>}/>
        <Route path='/developers' element={<Developers/>}/>
        <Route path='/resources' element={<Resources/>}/>
      
      
    </Routes>
    </BrowserRouter>

    <div className='foot container-fluid text-light'>
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
            </div>

    </div>
  );
}

export default App;
