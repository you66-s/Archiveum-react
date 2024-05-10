import React from 'react';
import logo from "./Image/logo.png"
import mission from "./icons/icons8-goal-100.png"
import goals from "./icons/icons8-mission-100.png"
import impact from "./icons/icons8-impact-64.png"
import avatar1 from "./Image/i.jpg"
import avatar2 from "./Image/oualla4.png"
import std from "./Image/8596567.png"
import "./about-us.css"
function AboutUs() {
    return (
            <section className="main-Container">
                <span id="logo"><img id="logo-img" src={logo} alt="logo"/></span>
                <h2>Révolutionner l'archivage des fichiers educatifs avec Archiveum</h2>
                <p id="paragraph">Dans le domaine en constante évolution de l'éducation, la conservation et
                    l'accessibilité des connaissances sont primordiales. Archiveum s'impose comme une solution
                    révolutionnaire, conçue pour répondre au besoin critique d'une plateforme sécurisée, décentralisée
                    et conviviale pour l'archivage de fichiers éducatifs.</p>
                <div className="propos-sec">
                    <div className="Type-Container">
                        <img src={mission} alt="mission" width="82px" height="82px"/>
                        <span>Notre mission</span>
                        <p style={{fontWeight: 'normal'}}>révolutionne l'archivage des fichiers éducatifs en créant un référentiel sécurisé et
                            décentralisé pour préserver la connaissance, en favorisant un écosystème collaboratif pour
                            le partage des ressources</p>
                    </div>
                    <div className="Type-Container">
                        <img src={goals} alt="mission" width="82px" height="82px"/>
                        <span>Nos valeurs</span>
                        <p style={{fontWeight: 'normal'}}>Intégrité, accessibilité, innovation et collaboration sont les piliers fondamentaux qui
                            guident notre mission. Nous garantissons l'authenticité des ressources éducatives,
                            favorisons leur partage universel</p>
                    </div>
                    <div className="Type-Container">
                        <img src={impact} alt="mission" width="82px" height="82px"/>
                        <span>Notre impact</span>
                        <p style={{fontWeight: 'normal'}}>facilitant le partage des connaissances sans frontières et en offrant aux apprenants un
                            accès personnalisé à des ressources pédagogiques de haute qualité.</p>
                    </div>
                </div>
                <h2 style={{color: 'black'}}>Meet our Team</h2>
                <div className="Team-Container">
                    <div className="member-container">
                        <img className="avatar" src={avatar1} alt="member"/>
                        <span style={{marginTop: '10px'}}>Youssef Achehboune</span>
                        <span style={{color: '#CCCCCC'}}>Developer</span>
                    </div>
                    <div className="member-container">
                        <img className="avatar" src={avatar2} alt="member"/>
                        <span style={{marginTop: '10px'}}>Pr. Mouhammed Oualla</span>
                        <span style={{color: '#CCCCCC'}}>Supervisor</span>
                    </div>
                    <div className="member-container">
                        <img style={{backgroundColor: '#CCCCCC'}} className="avatar" src="" alt=""/>
                        <span style={{marginTop: '10px'}}>Fatima Ezzahra Amri</span>
                        <span style={{color: '#CCCCCC'}}>Developer</span>
                    </div>
                </div>
                <h2 style={{color: 'black'}}>Testimonials</h2>
                <div className="Feedback-container">
                    <div className="feedback-content">
                        <p id="comment" style={{width: '100%', fontWeight: 'normal'}}>En tant qu'étudiant en MIP, j'ai souvent du mal à
                            trouver des ressources fiables et complètes en ligne. Archiveum a changé la donne ! Je peux
                            désormais accéder à une collection incroyable de documents éducatifs de haute qualité.</p>
                        <div className="author">
                            <img id="auth-logo" src={std} alt="auther-logo"/>
                            <span>Hamza Hamza, Etudiant en MIP</span>
                        </div>
                    </div>
                    <div className="feedback-content">
                        <p id="comment" style={{width: '100%', fontWeight: 'normal'}}>C'est un outil essentiel pour faire avancer la recherche en éducation et améliorer les pratiques pédagogiques.</p>
                        <div className="author">
                            <img id="auth-logo" src={std} alt="auther-logo"/>
                            <span>Ahmed Yassin, Chercheur</span>
                        </div>
                    </div>
                </div>
                <h2 style={{color: 'black'}}>Stay connected with Archiveum</h2>
                <div className="newsletter-container">
                    <p style={{width: '100%', fontWeight: 'normal'}}>Sign up for our newsletter to stay informed about the latest news, updates, and exclusive offers from VisionCrafters. By subscribing, you'll receive regular emails featuring project highlights, industry insights, and tips for your construction projects.</p>
                    <div className="email-sec">
                        <input id="emailInput" type="email" placeholder="entrez votre email"/>
                        <button id="submit" type="submit" onClick={()=>alert("Merci pour votre confience")}>Sign up</button>
                    </div>
                </div>
            </section>
    );
}
export default AboutUs;