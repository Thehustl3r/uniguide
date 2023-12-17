import React from 'react';
import "./Services";

const Services = () => {
    return (
        <div className="services">

            <h3>Our Services</h3>
            <div className="service-container">
                <div className="service">
                    <img src="/usearch.png" alt="" />
                    <h4>University Search</h4>
                    <p>We provide reliable information about universities.</p>
                </div>
                <div className="service">
                    <img src="/uassistance.png" alt="" />
                    <h4>Application Assistance</h4>
                    <p>We help people apply for African university schools.</p>
                </div>
                <div className="service">
                    <img src="/uscholarship.png" alt="" />
                    <h4>Scholarship Search</h4>
                    <p>We assist people in finding scholarships for their studies.</p>
                </div>
            </div>
      </div>
    );
};

export default Services;