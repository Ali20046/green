import React from 'react'
import Information from '../../components/Contact/Information'
import ContactForm from '../../components/Contact/ContactForm'
import Title from '../../components/Title'

const ContactPage = () => {
    return (
        <>
            <section id="contact" className="contact">
                <div className="container">
                    <Title
                        name='Contact'
                        dec='Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.'
                    />

                    <div className="row">

                        <Information />

                        <ContactForm />

                    </div>

                </div>
            </section>
        </>
    )
}

export default ContactPage