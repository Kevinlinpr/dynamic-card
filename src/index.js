import React, { useState } from 'react'
import './style.css'


export default function DynamicCard(props){
    let [focus,setFocus] = useState(false);
    return (
        <div id="dynamic-card-wrapper" className="CardWrapper"
            onMouseEnter={()=>{setFocus(true)}}
            onMouseLeave={()=>{setFocus(false)}}
        >
            <img src={props.Img} id="dynamic-card-img-wrapper" className="CardImgWrapper" style={{transform:focus?'translate(0,0)':'translate(0,-150px)'}}/>
            <div id="dynamic-card-content-wrapper" className="CardContentWrapper">
                <div id="dynamic-card-content" className="CardContent"  style={{transform:focus?'translate(0,150px)':'translate(0,0)'}}>
                    <p id="dynamic-card-content-category" className="CardContentCategory">
                    {props.Category}
                    </p>
                    <p id="dynamic-card-content-title" className="CardContentTitle">
                    {props.Title}
                    </p>
                    <p id="dynamic-card-content-summary" className="CardContentSummary">
                    {props.Summary}
                    </p>
                </div>
                <div id="dynamic-card-author" className="CardAuthor">
                    <p id="dynamic-card-author-name" className="CardAuthorName">{props.AuthorName}</p>
                    <p id="dynamic-card-author-date" className="CardAuthorDate">{props.AuthorDate}</p>
                </div>
            </div>
        </div>
    )
} 