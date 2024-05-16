import React, {useState} from 'react';
import "./Contact.css"
import {Link} from "react-router-dom";
import Buttons from "../../Component/Buttons";
import NavBar from "../../Component/NavBar";

function Contact() {
    function test(){
        alert('connection')
    }
    return(
        <>
            <NavBar link1={<Link to='/'>Home</Link>} link2={<Link to='/'>Explore</Link>} link3={<Link to='/contact'>contact</Link>} link4={<Link to='/about'>about us</Link>} button={<Buttons value="Connect" func={test}/>}/>
            <section className="Contact-Page">
                <div className="Contact-Description">
                    <h2 className="Contact-Title">Avez-vous besoin d'aide ?</h2>
                    <p className="Contact-Subtitle">
                        Envoyez-nous vos questions en utilisant le formulaire ci-contre
                    </p>
                </div>
                <div className="contact-Form">
                    <div className="Contact-nameSubject">
                        <input id="name" placeholder="votre nom" />
                        <input id="subject" placeholder="votre sujet" />
                    </div>
                    <input id="email" placeholder="votre email" />
                    <textarea id="message" placeholder="votre message" />
                    <button className="Contact-Submit" type="submit" onClick={()=>alert('Merci, Message envoyée')}>Envoyer</button>
                </div>
            </section>
        </>
    );
}
export default Contact;