import React from 'react';
import fast from '../images/Faster.png';
import './product.css';
function Products() {
    return (
        <div className='container-fluid'>
            <div class="box row mt-5">
                <div class="platform col-6 mt-5">
                    <h1>We are on a mission to make <span style={{ color: "#ec559b" }}>integration</span> easy</h1>
                    <h4 className='mt-3 mb-5'>An EDI platform for all retailers, suppliers, manufacturers,
                        transportation, 3PLs & developers.</h4>
                </div>
                <div class="platform2 col-6 mt-5">
                    <img src={fast} />
                    <h3>Faster & stabler integrations</h3>
                    <p class="new">Our API eliminates EDI complexities using
                        a very rich modern developer toolset,
                        resulting in faster EDI integrations &
                        production environments that are 10X
                        stabler than typical EDI solutions.</p>

                </div>
            </div>


            <div class="center row mt-5">
                <div class="col-sm-12 col-md-6 col-lg-4 mt-5">

                    <h3><i class="fa fa-globe" aria-hidden="true"></i> Global connectivity</h3>
                    <p>Zenbridge is the only platform that offers
                        API for X12 and EDIFACT EDI standards.
                        No matter which part of the world or
                        industry your trading partner belongs to,
                        you are all set for EDI connectivity</p>


                </div>

                <div class="col-sm-12 col-md-6 col-lg-4 mt-5">

                    <h3><i class=" fa fa-database" aria-hidden="true"></i> Real time data validation</h3>

                    <p>Unlike traditional EDI solutions, API can
                        validate data for partner specific
                        compliances in real time, saving hundreds
                        of manual hours lost in communication &
                        thousands of dollars lost as chargebacks.</p>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-4 mt-5">

                    <h3><i class=" fa fa-handshake-o" aria-hidden="true"></i> Unlimited support</h3>

                    <p>Zenbridge offers you a delivery manager
                        who manages trading partners & monitors
                        issues with unlimited developer support
                        24X7 chat, email & phone connectivity.

                        No more EDI support frustrations.</p>
                </div>

            </div>




        </div>
    )
}

export default Products