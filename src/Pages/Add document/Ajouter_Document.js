import React from "react";
import "../Add document/addDoc.css"
import uploadIcon from "./SVGs/upload-minimalistic-svgrepo-com.svg"
import checkMarkdown from "./SVGs/checkmark-circle-svgrepo-com.png";
import cancelMark from "./SVGs/cancel-svgrepo-com.png"
import {Link} from "react-router-dom";
import ProfileIcon from "../../Component/profileIcon";
import NavBar from "../../Component/NavBar";

function AddDocument() {
    function handleFile() {
        alert("File uploaded")
    }

    return (
        <div className="uploadDoc p-7">
            <div className="File-container">
                <div className="upload-box">
                    <img className="upload-img" alt="upload" src={uploadIcon} width="125px" height="125px"/>
                    <span id="upload-text">Glisser votre document ici pour le partager</span>
                    <input id="upload-input" type="file" onClick={handleFile}/>
                </div>
                <div className="Form-container">
                    <div className="Description-area" style={{display: 'flex', flexDirection: 'column', gap: '3px'}}>
                        <label htmlFor="Description">Description</label>
                        <textarea id="Description"/>
                    </div>
                    <div className="School-area" style={{display: 'flex', flexDirection: 'column', gap: '3px'}}>
                        <label htmlFor="School">Choisir votre établissement</label>
                        <input type="text" id="School"/>
                    </div>
                    <div className="Details-area">
                        <div className="filliere-sec" style={{width: '50%'}}>
                            <label style={{display: 'block'}}>Choisir votre filliére</label>
                            <input style={{width: '100%'}} type="text" id="filliere"/>
                        </div>
                        <div className="module-sec" style={{width: '50%'}}>
                            <label style={{display: 'block'}}>Choisir votre filliére</label>
                            <input style={{width: '100%'}} type="text" id="filliere"/>
                        </div>
                    </div>
                    <div className="Document-area">
                        <div className="doc-type" style={{width: '100%'}}>
                            <label style={{display: 'block'}}>Choisir le type du document</label>
                            <select id="type" style={{width: '100%'}}>
                                <option disabled>type de document</option>
                                <option>.pdf</option>
                                <option>.docx</option>
                                <option>.jpg</option>
                                <option>.png</option>
                            </select>
                        </div>
                        <div className="doc-year" style={{width: '100%'}}>
                            <label style={{display: 'block'}}>Choisir l'année universitaires</label>
                            <input id="year" style={{width: '100%'}} type="number" min="1900" max="2099" step="1"/>
                        </div>
                    </div>
                    <div className="Submit-btn" style={{width: '100%'}}>
                        <button onClick={() => alert('File uploaded')} id="submit-btn" type="submit">Ajouter Document
                        </button>
                    </div>
                </div>
            </div>
            <div className="conditions-Sec">
                <div className="positive-sec">
                    <div className="content-sec"
                         style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
                        <img id="checkmark" alt="checkMark" src={checkMarkdown} width="24px" height="24px"/>
                        <p>Partagez des documents, des notes, des resumes et des solutions crees par vous-meme.</p>
                    </div>
                    <div className="content-sec"
                         style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
                        <img id="checkmark" alt="checkMark" src={checkMarkdown} width="24px" height="24px"/>
                        <p>Partagez de preference ces types de fichiers : .pdf, .doc, .docx, .jpeg, .png.</p>
                    </div>
                    <div className="content-sec"
                         style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
                        <img id="checkmark" alt="checkMark" src={checkMarkdown} width="24px" height="24px"/>
                        <p>Veuillez nommer vos documents d'une maniere appropriee et expliquer brievement le contenu
                            dans la description.</p>
                    </div>
                    <div className="content-sec"
                         style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
                        <img id="checkmark" alt="checkMark" src={checkMarkdown} width="24px" height="24px"/>
                        <p>Assurez-vous que le titre et la description sont informatifs pour vos camarades.</p>
                    </div>
                </div>
                <div className="negative-sec">
                    <div className="content-sec"
                         style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
                        <img id="checkmark" alt="checkMark" src={cancelMark} width="24px" height="24px"/>
                        <p>Ne partagez pas des livres entiers.</p>
                    </div>
                    <div className="content-sec"
                         style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
                        <img id="checkmark" alt="checkMark" src={cancelMark} width="24px" height="24px"/>
                        <p>Ne partagez aucun document non lie a vos etudes ou protege par le droit d'auteur.</p>
                    </div>
                    <div className="content-sec"
                         style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
                        <img id="checkmark" alt="checkMark" src={cancelMark} width="24px" height="24px"/>
                        <p>Ne partagez pas de photos individuelles a partir de documents de plusieurs pages.</p>
                    </div>
                    <div className="content-sec"
                         style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
                        <img id="checkmark" alt="checkMark" src={cancelMark} width="24px" height="24px"/>
                        <p>Fusionnez les documents s'ils appartiennent au meme module.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddDocument;