import React from 'react';
import './solution.css';

function Solutions() {
    return (
        <div className='container-fluid mt-5'>
            <div class="sol row mt-5">
                <div class="box2 col-sm-12 col-md-6 col-lg-4 mt-5">

                    <h1>Why <span style={{color: "#ec559b"}}>Zenbridge?</span></h1>
                    <h5>Unmatched Pricing, Unparalleled Support</h5>

                </div>

                <div class=" soll col-sm-12 col-md-6 col-lg-4 mt-5">
                <h3>Nature of use</h3>
                        <ul className='desc'>
                            <li>Self serve mode</li>
                            <li>Fully managed mode </li>
                            <li>Fully customized implementation</li>
                           
                        </ul>
                </div>

                <div class="solll col-sm-12 col-md-6 col-lg-4 mt-5">
                <h3>Support</h3>
                        <ul className='desc'>
                            <li>Exclusive delivery manager</li>
                            <li>Unlimited developer support hours </li>
                            <li>24*7 support via Chat, Email & Phone</li>
                           
                        </ul>
                </div>

            </div>
        </div>
    )
}

export default Solutions