import React from 'react'

function Contact() {
  return (
    <>
        <section className="contact-section mt-5">
            <div className="container">
                <h2 className="section-title">Keep In Touch With Us</h2>
                <p className="section-subtitle">
                    Be the first to know about new skincare launches, exclusive offers, and <br />
                    expert beauty tips for radiant skin.
                </p>

                <div className="row contact-boxes">
                    {/* Address */}
                    <div className="contact-col">
                        <div className="contact-box bg-transparent border-0">
                            <i className='ri-map-pin-line icon'></i>
                            <h5>Address</h5>
                            <p>140 Le Trong Tan</p>
                            <p className='mb-4'>P. Tay Thanh, Q. Tan Phu, TP. Ho Chi Minh</p>
                            <a href="" target='_blank' rel='noopener noreferrer' className='link'>Get Direction</a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="contact-col">
                        <div className="contact-box bg-transparent border-0">
                            <i className='ri-phone-line icon'></i>
                            <h5>Contact</h5>
                            <p><strong>Mobile:</strong> +84 931318657</p>
                            <p><strong>Hotline:</strong> 1800 123 4567</p>
                            <p><strong>Email:</strong> support@renomtech.in</p>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="contact-col">
                        <div className="contact-box bg-transparent border-0">
                            <i className='ri-time-line icon'></i>
                            <h5>Hours of operation</h5>
                            <p><strong>Mon - Fri:</strong> 08:30 - 20:30</p>
                            <p><strong>Sat - Sun:</strong> 09:30 - 21:30</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Map Section */}
        <div className="contact-page">
            <section className="map-section container">
                <iframe
                    title='Our Location'
                    className='map rounded'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.067347733593!2d106.62866559999999!3d10.8061539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be27d8b4f4d%3A0x92dcba2950430867!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBUaMawxqFuZyBUUC4gSOG7kyBDaMOtIE1pbmggKEhVSVQp!5e0!3m2!1svi!2s!4v1750565209265!5m2!1svi!2s" allowfullscreen="">
                </iframe>
            </section>
            
            {/* Contact Form Section */}
            <section className="message-section">
                <h2 className="form-title">Send A Message</h2>
                <form className="contact-form">
                    <div className="row">
                        <input type="text" placeholder='Name' className='input' />
                        <input type="email" placeholder='Email' className='input' />
                    </div>
                    <div className="row">
                        <textarea className="textarea" placeholder='Message'></textarea>
                    </div>
                    <button type='submit' className='btn px-5'>Submit</button>
                </form>
            </section>
        </div>
    </>
  )
}

export default Contact