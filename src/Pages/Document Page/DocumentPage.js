import React, {useState} from "react";
import descrIcon from "./Icons/Description.png"
import scholarIcon from "./Icons/School Building.png"
import collectionIcon from "./Icons/Collections bookmark.png"
import filliere from "./Icons/Group.png"
import docType from "./Icons/icons8-document-100.png"
import note from "./Icons/SVGRepo_iconCarrier.png"
import star from "./Icons/Star rate.png"
import Popup from "../../Component/popup";
function DocumentPage() {

    const [showModel, setShowModal] = useState(false)
    const [rating , setRating] = useState(0);
    const [hover, setHover] = useState(null)
    let currentIndex = 0
    const rateBtn = [...Array(10)].map((i, index) => {
        const currentRate = index + 1;
        currentIndex++;
        return(
           <span key={index}>
               <input
                   className="hidden cursor-pointer	"
                   type="radio"
                   name="rating"
                   value={currentRate}
               />
                <input style={{
                    backgroundColor:
                        currentRate <= (hover || rating) ? "#5C54AC" : "white",
                    color : currentRate <= (hover || rating) ? "white" : "black"
                }}
                       onClick={()=> {
                           setRating(currentRate)
                       }}
                       onMouseEnter={() => setHover(currentRate)}
                       onMouseLeave={() => setHover(null)}
                       value={currentIndex} type="button" className="rate-btn border-2 w-[51px] h-[51px] border-[#5C54AC] text-black bg-white rounded-[7px] font-bold"/>
           </span>
        );

    })
    return(
    <>
            <div style={{marginLeft: 'auto', marginRight: 'auto'}} className="download-sec flex flex-col justify-center gap-4 w-1/2 h-42 p-6 drop-shadow-lg rounded-[14px] bg-white">
                <span className="text-[#5C54AC] text-[32px] font-bold">Examen corrigé de Analyse 1 MIP.pdf</span>
                <span className="flex flex-row gap-2 items-center"><img src={descrIcon} alt="decriptio" style={{width: '16px', height: '16px'}}/>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                <div className="flex flex-row gap-3 items-center ">
                    <span className="flex flex-row gap-2 items-center">
                        <img src={scholarIcon} alt="scholar" style={{width: '16px', height: '16px'}}/>
                        <p>Errachidia - Faculte des sciences et techniques</p>
                    </span>
                    <span className="flex flex-row gap-2 items-center">
                        <img src={collectionIcon} alt="scholar" style={{width: '16px', height: '16px'}}/>
                        <p>MIP</p>
                    </span>
                    <span className="flex flex-row gap-2 items-center">
                        <img src={filliere} alt="scholar" style={{width: '16px', height: '16px'}}/>
                        <p>Analyse 1</p>
                    </span>
                    <span className="flex flex-row gap-2 items-center">
                        <img src={docType} alt="scholar" style={{width: '16px', height: '16px'}}/>
                        <p>Examen</p>
                    </span>
                    <span className="flex flex-row gap-2 items-center">
                        <img src={note} alt="scholar" style={{width: '16px', height: '16px'}}/>
                        <p>{rating + `/10`}</p>
                    </span>
                </div>
                <button style={{marginLeft: 'auto', marginRight: 'auto'}} className="flex flex-row gap-2 items-center justify-center bg-[#5C54AC] rounded-[10px] w-[170px] text-white p-3">
                    Télécharger
                    <span className="flex flex-row gap-1 items-center ">
                        -1
                        <img src={star} alt="star" width="20px" height="20px"/>
                    </span>
                </button>
            </div>
            <div style={{marginLeft: 'auto', marginRight: 'auto'}} className="evaluation-sec drop-shadow-lg rounded-[14px] bg-white mt-6 p-6 flex flex-col items-center gap-4 w-1/2">
                <span className="text-[#5C54AC] text-[24px] font-bold">Commentaire</span>
                <p className="text-[#CCCCCC] text-[16px] font-bold">vous pouvez laissez un commentaires pour ce document !</p>
                <div className="flex flex-col items-center gap-4 w-1/2">
                    <p className="font-bold">Evaluez ce fichier</p>
                    <div className="rating-sec flex flex-row items-center justify-center gap-2 w-1/2">
                        {rateBtn }
                    </div>
                    <p className="font-bold">signaler ce document !</p>
                    <select className="motif-drop border-2 w-full h-[48px] border-[#5C54AC] text-black bg-white rounded-[7px]">
                        <option disabled value="Motif">Motif du signalement</option>
                        <option value="fausses">Documents contenant des informations fausses</option>
                        <option value="inapproprié">Contenu inapproprié ou illégal</option>
                        <option value="Motif">Contenu non pertinent pour l'éducation</option>
                    </select>
                    <p className="font-bold">Veuillez decrire la raison de ce signalement </p>
                    <textarea style={{resize: 'none'}} className="p-1 w-full h-[150px] border-2 rounded-[7px] border-[#5C54AC]" placeholder="votre message"></textarea>
                    <button onClick={()=> setShowModal(true)} className="send-btn bg-[#5C54AC] text-white w-[120px] h-[35px] rounded-[10px]" type="submit">Envoyer</button>
                    {showModel && <Popup t="Merci Pour Votre " close={()=> {
                        setShowModal(false)
                    }}/>}
                </div>
            </div>
    </>
    );
}

export default DocumentPage;