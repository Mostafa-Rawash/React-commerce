import React, { useState } from 'react'


// import image from 
const subTitle = "Sava The Day"
const title = <h2 className='title'>Join on Day Long Workshop for <b>Advance</b> <span>Mastering</span></h2>


const desc = "Limited Time Offer! Hurry Up"

function Register() {

    return (
        <section className='register-section padding-tb pb-0'>
            <div className="container">

            <div className="row g-4 row-cols-1 row-cols-md-2 align-items-center">
                <div className="col">
                    <div className="section-header">
                        <span className='subtitle'>{subTitle}</span>
                        {title}
                        <p>
                            {desc}
                        </p>
                    </div>        
                            </div>

                <div className="col">
                    <div className="section-wrapper">
                        <h4>Register Now</h4>
                        <form >
                            <input type="text"  placeholder='UserName' className='reg-input' />
                            <input type="email"  placeholder='Email' className='reg-input' />
                            <input type="number"  placeholder='Email' className='reg-input' />
                            <button type='submit' className='lab-btn'>Register Now</button>
                        </form>
                    </div>
                    {/* <img src={} alt="" /> */}
                </div>
                </div>
            </div>
        </section>
    )
}

export default Register