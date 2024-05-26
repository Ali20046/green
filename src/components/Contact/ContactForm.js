import React, { useState } from 'react'

const ContactForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const Send = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form onSubmit={(e) => Send(e)} action="" className="php-email-form">
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="name" >Your Name</label>
                            <input value={form.name} onChange={(e) => { handleForm(e) }} type="text" name="name" className="form-control" id="name" required />
                        </div>
                        <div className="form-group col-md-6 mt-3 mt-md-0">
                            <label htmlFor="email">Your Email</label>
                            <input value={form.email} onChange={(e) => { handleForm(e) }} type="email" className="form-control" name="email" id="email" required />
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="subject">Subject</label>
                        <input value={form.subject} onChange={(e) => { handleForm(e) }} type="text" className="form-control" name="subject" id="subject" required />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="message">Message</label>
                        <textarea value={form.message} onChange={(e) => { handleForm(e) }} className="form-control" name="message" rows="10" required></textarea>
                    </div>
                    {/* <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div> */}
                    <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
            </div>
        </>
    )
}

export default ContactForm
