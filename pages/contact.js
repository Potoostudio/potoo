import Image from 'next/image'
import React, {useState} from 'react'
import Link from 'next/link'


export default function Contact() {
   
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [phone, setPhone] = useState('')
    const [submitted, setSubmitted] = useState(false)
  
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('sending')

        let data = {
            name,
            email,
            message,
            phone,
        }

        fetch('/api/contact-handle', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
              console.log('Response succeeded!')
              setSubmitted(true)
              setName('')
              setPhone('')
              setEmail('')
              setBody('')
            }
          })
    }

      return (
          <>
        <div className="container-fluid contact-container">
            <div className="row justify-content-around pl-md-5 pb-md-3 mx-md-5 pt-md-4">
                <div className="col-lg-4 col-11">
                    <form className="contact-form">
                        <formGroup className="inputGroup">
                            <input type="text" name="name" className="contact-form-input name" 
                            onChange={(e)=>{setName(e.target.value)}} placeholder="Name"/>
                        </formGroup>
                        <formGroup className="inputGroup">
                            <input type="tel" name="phone" className="contact-form-input phone"
                            onChange={(e)=>{setPhone(e.target.value)}} placeholder="Phone"/>
                        </formGroup>
                        <formGroup className="inputGroup">
                            <input type="text" name="email" className="contact-form-input email"
                            onChange={(e)=>{setEmail(e.target.value)}} required placeholder="Email"/>
                        </formGroup>
                        <formGroup className="inputGroup">
                            <textarea rows="4" cols="50" type="text" placeholder="Message" name="message" className="contact-form-input message"
                            onChange={(e)=>{setMessage(e.target.value)}}/>
                        </formGroup>

                        <input type="submit" className="submit-btn" onClick={(e)=>{handleSubmit(e)}}/>
                    </form>
                </div>
            </div>
        </div>
        </>
      );
    }