/* eslint-disable no-template-curly-in-string */
import React, { useState } from 'react'
import './contact.css'
import hand from '../pic/hand.jpg'
import Navbar5 from "../Head/Header5.jsx";

const Contact = () => {
    const [data, setData] = useState({
        
        name:"",
        phone:"",
        email:"",
        subject:"",
        message:"",
    })
    const InputEvent = (event) => {
        const {name , value} = event.target

        setData ((preVal => {
            return {
                ...preVal,
                [name]:value,
            }
        }))

    }

    const formSubmit = (event) =>{
        event.preventDefault()
        alert(
             'My name is {data.name}, My phone is ${data.phone}, My email is ${data.email}, My subject is ${data.subject}, Hear is my message I want to say: ${data.message}',
        )
    }


  return (
    <div>
        <section className='Contact' id='contact'>
        <Navbar5/>
            <div className='container top'>
                <div className='heading text-center'>
                    <h4>CONTACT</h4>
                    <h1>Contact With Me</h1>
                </div>

                <div className='content test1'>
                    <div className='left'>
                        <div className='box_one'>
                            <div className='img'>
                                <img src={hand} alt="" />
                            </div>

                            <div className='details'>
                                <h1>Vinnath Satharasinghe</h1>
                                <p>I am avaiable for front-end web developments.</p>

                                <h5>________077-1176273_______</h5>
                                <h5>- vinnathninura@gmail.com -</h5>
                                 <br />
                                <span>FIND WITH ME</span>
                                <div className='button f_flex'>
                                    <button className='button_shadow'>
                                    <a href="https://web.facebook.com/vinnath.satharasinghe/?_rdc=1&_rdr"><i className='fab fa-facebook-f'></i></a>
                                    </button>
                                    <button className='button_shadow'>
                                    <a href="https://www.youtube.com/channel/UCxDw9rKHEk5m_BRaL9RqFqA"><i className='fab fa-youtube'></i></a>
                                    </button>
                                    <button className='button_shadow'>
                                    <a href="https://www.instagram.com/winny_satharasinghe/"> <i className='fab fa-instagram'></i></a>
                                    </button>
                                    <button className='button_shadow'>
                                    <a href="https://www.linkedin.com/in/vinnath-satharasinghe-663642231/?locale=zh_CN"><i className='fab fa-linkedin-in'></i></a>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div className='right box_two'>
                        <form onSubmit={formSubmit}>
                            <div className='input'>
                                    <span>YOUR NAME</span>
                                    <br />
                                    <input type="text"  name='name' value={data.name} onChange={InputEvent} />
                                </div>

                            <div className='input'>
                                    <span>YOUR NUMBER</span>
                                    <br />
                                    <input type="text" name='phone' value={data.phone} onChange={InputEvent} />
                                </div>

                            

                            <div className='input'>
                                    <span>YOUR EMAIL</span>
                                    <br />
                                    <input type="email" name='email' value={data.email} onChange={InputEvent} />
                                </div>
                                <div className='input'>
                                    <span>YOUR SUBJECT</span>
                                    <br />
                                    <input type="text" name='subject' value={data.subject} onChange={InputEvent} />
                                </div>
                                
                                <div className='input'>
                                    <span>YOUR MESSAGE</span>
                                    <br />
                                    <textarea placeholder='This is textarea' cols='87' rows='10' name='message' value={data.message} onChange={InputEvent} />
                                </div>

                                <button className='btn btn_shadow'>
                                    SEND MESSAGE <i className='fa fa-long-arrow-down'></i>
                                </button>
                        </form>

                    </div>


                </div>
            </div>
        </section>
      
    </div>
  )
}

export default Contact
