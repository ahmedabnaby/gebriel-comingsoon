import React, { Component } from 'react';
import emailjs from 'emailjs-com';
export default function ContactUs()
{
   function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_muib64s', 'template_owrfydg', e.target, 'user_6wV3npovXhIWDPBmLQDUT')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    
        return (
            <div className="contact-form">
                <div className="row ">
                <div className="col-xl-12 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                    <div className="card-body bg-light">
                        <div className="container">
                        <form id="contact-form" role="form" onSubmit={sendEmail}>
                            <div className="controls">
                            <div className="row">
                                <div className="col-md-6">
                                <div className="form-group"> <label htmlFor="form_name">Name*</label> <input id="form_name" type="text" name="name" className="form-control" placeholder="Name" required="required" data-error="Firstname is required." /> </div>
                                </div>
                                {/* <div className="col-md-6">
                                <div className="form-group"> <label htmlFor="form_lastname">Lastname*</label> <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Lastname" required="required" data-error="Lastname is required." /> </div>
                                </div> */}
                                <div className="col-md-6">
                                <div className="form-group"> <label htmlFor="form_phone">Phone number*</label> <input id="form_phone" name="phone" className="form-control" placeholder="Phone number" required="required" data-error="Please, leave us a phonenumber." /> </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                <div className="form-group"> <label htmlFor="form_email">Email*</label> <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required="required" data-error="Valid email is required." /> </div>
                                </div>
                                <div className="col-md-12">
                                <div className="form-group"> <label htmlFor="form_need">Country*</label> 
                                    <select id="form_country" name="country" className="form-control" required="required" data-error="Please specify your country.">
                                        <option value disabled>--Select Your Country--</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Other">Other</option>
                                    </select> 
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* <div className="col-md-12">
                                <div className="form-group"> <label htmlFor="form_phone">Phone number*</label> <input id="form_phone" name="phone" className="form-control" placeholder="Write your phone here." required="required" data-error="Please, leave us a phonenumber." /> </div>
                                </div> */}
                                <div className="col-md-12 mt-2"> <input type="submit" className="btn btn-success btn-send pt-2 btn-block " defaultValue="Send Message" /> </div>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div> {/* /.8 */}
                </div> {/* /.row*/}
            </div>
            </div>
            
              );
}
 