import React from "react";
import "../Add document/addDoc.css"
import uploadIcon from "./SVGs/upload-minimalistic-svgrepo-com.svg"
function AddDocument() {
    function handleFile() {
        alert("File uploaded")
    }

    return (
        <div className="main-container">
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
                    <div className="module-sec"  style={{width: '50%'}}>
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
                    <button onClick={()=> alert('File uploaded')} id="submit-btn" type="submit">Ajouter Document</button>
                </div>
            </div>
        </div>
    )
}

export default AddDocument;