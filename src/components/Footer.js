import React from "react"
import './Footer.css'
import ContactCard from "./Contacts/ContactCard"

function Footer() {
    return (
        <footer className="contacts">
            <ContactCard
                contact={{
                    name: "Mr. Whiskerson",
                    imgUrl: "http://placekitten.com/300/200",
                    phone: "(212) 555-1234",
                    email: "mr.whiskaz@catnap.meow"
                }}
            />

            <ContactCard
                contact={{
                    name: "Fluffykins",
                    imgUrl: "http://placekitten.com/400/200",
                    phone: "(212) 555-2345",
                    email: "fluff@me.com"
                }}
            />

            <ContactCard
                contact={{
                    name: "Destroyer",
                    imgUrl: "http://placekitten.com/400/300",
                    phone: "(212) 555-3456",
                    email: "ofworlds@yahoo.com"
                }}
            />

            <ContactCard
                contact={{
                    name: "Felix",
                    imgUrl: "http://placekitten.com/200/100",
                    phone: "(212) 555-4567",
                    email: "thecat@hotmail.com"
                }}
            />
        </footer>
    )
}

export default Footer;