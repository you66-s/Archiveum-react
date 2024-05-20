import React, {useState} from "react";
import "../Add document/addDoc.css"
import uploadIcon from "./SVGs/upload-minimalistic-svgrepo-com.svg"
import checkMarkdown from "./SVGs/checkmark-circle-svgrepo-com.png";
import cancelMark from "./SVGs/cancel-svgrepo-com.png"
import Popup from "../../Component/popup";

function AddDocument() {
    //Hook
    const [showModel, setShowModal] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null);
    const [errorFile, setErrorFile] = useState(false);
    const [FileInfo, setFileInfo] = useState({
        file: null,
        Title: "",
        Desc: "",
        School: "",
        Filiere: "",
        Matiere: "",
        Year: ""
    });
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [school, setSchool] = useState("");
    const [filiere, setFiliere] = useState("");
    const [matiere, setMatiere] = useState("");
    const [Year, setYear] = useState("");
    //Functions
    const allowedDocumentMimeTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const allowedImageMimeTypes = ['image/jpg', 'image/png'];
    function handleFile(e) {
        const File = e.target.files[0]
        const isDoc= allowedDocumentMimeTypes.includes(File.type);
        const isImage = allowedImageMimeTypes.includes(File.type);
        if (isDoc || isImage){
            setSelectedFile(File);
            console.log(e.target.files[0])
        }else {
            alert('Type de document nest pas acceptable')
            setErrorFile(true)
            setSelectedFile(null)
        }
    }
    function sendFile(e){
        const title = String(document.getElementById('Title').value);
        const desc = String(document.getElementById('Description').value);
        const school = String(document.getElementById('School').value);
        const filiere = String(document.getElementById('filliere').value);
        const matiere = String(document.getElementById('matiere').value);
        const year = String(document.getElementById('year').value);
        if (title.length===0 ||desc.length===0 ||school.length===0|| filiere.length===0 || matiere.length===0 || year.length===0){
            alert("Veuillez remplir tous les champs d'abord")
            e.preventDefault()
        }else {
            setFileInfo({
                file: selectedFile,
                Title: title,
                Desc: desc,
                School: school,
                Filiere: filiere,
                Matiere: matiere,
                Year: year,
            })
            setShowModal(true)
        }

    }
    return (
        <div className="uploadDoc p-7">
            <form style={{marginRight: 'auto', marginLeft: 'auto'}} className="File-container w-1/2">
                <div className="upload-box">
                    <img className="upload-img" alt="upload" src={uploadIcon} width="125px" height="125px"/>
                    <span id="upload-text">Glisser votre document ici pour le partager</span>
                    <input
                        id="upload-input"
                           type="file"
                           onChange={handleFile}/>
                </div>
                <div className="Form-container">
                    <div className="Title-area" style={{display: 'flex', flexDirection: 'column', gap: '3px'}}>
                        <label htmlFor="School">Titre</label>
                        <input type="text" id="Title" name="title" onBlur={(event)=>setTitle(event.target.value)}/>
                    </div>
                    <div className="Description-area" style={{display: 'flex', flexDirection: 'column', gap: '3px'}}>
                        <label htmlFor="Description">Description</label>
                        <textarea id="Description" name="desc" onBlur={(event)=> setDesc(event.target.value)}/>
                    </div>
                    <div className="School-area" style={{display: 'flex', flexDirection: 'column', gap: '3px'}}>
                        <label htmlFor="School">Choisir établissement</label>
                        <input type="text" id="School" name="school" onBlur={(event)=>setSchool(event.target.value)}/>
                    </div>
                    <div className="Details-area">
                        <div className="filliere-sec" style={{width: '50%'}}>
                            <label style={{display: 'block'}}>Choisir filliére</label>
                            <input style={{width: '100%'}} type="text" id="filliere" name="filiere" onBlur={(event)=>setFiliere(event.target.value)}/>
                        </div>
                        <div className="module-sec" style={{width: '50%'}}>
                            <label style={{display: 'block'}}>Choisir matiére</label>
                            <input style={{width: '100%'}} type="text" id="matiere" name="matiere" onBlur={(event)=>setMatiere(event.target.value)}/>
                        </div>
                    </div>
                    <div className="Document-area">
                        <div className="doc-year" style={{width: '100%'}}>
                            <label style={{display: 'block'}}>Choisir l'année universitaires</label>
                            <input id="year" name="year" style={{width: '100%'}} type="number" min="1900" max="2099" step="1" onBlur={(event)=>setYear(event.target.value)}/>
                        </div>
                    </div>
                    <div className="Submit-btn" style={{width: '100%'}}>
                        <button onClick={sendFile} id="submit-btn" type="button">Ajouter Document
                        </button>
                        {showModel && <Popup t="Document ajouter avec succes" close={()=> {
                            setShowModal(false)
                        }}/>}
                    </div>
                </div>
            </form>
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