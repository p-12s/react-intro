import React from "react"
import './Footer.css';

function ContactCard(props) {
    console.table(props)
    return (
        <div className="contact-card">
            <img align="center" src={props.contact.imgUrl}/>
            <h3><font color="#3AC1EF">▍ {props.contact.name}</font></h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
}

export default ContactCard;