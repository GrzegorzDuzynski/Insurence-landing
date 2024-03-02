import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";
import {
  StyledBoxImg,
  StyledBoxMiddle,
  StyledBoxRight,
  StyledContainer,
  StyledTitle,
  StyledBoxBlurr,
  StyledBoxContact,
} from "./Contact.css";

const Contact = () => {
  return (
    <>
      <StyledContainer id="contact">
        <ContactForm colorTitlePopup={"white"} colorTextPopup={"white"} />
        <StyledBoxMiddle>
          <StyledBoxImg>
            <iframe
              src="//maps.google.com/maps?output=embed&amp;q=Astronautów 1A, Kielce&amp;t=m&amp;hl=English"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </StyledBoxImg>
        </StyledBoxMiddle>
        <StyledBoxBlurr>
          <StyledBoxRight>
            <StyledBoxContact>
              <FontAwesomeIcon className="icon" icon={faLocationDot} />
              <StyledTitle>
                Kielce Astronautów&nbsp;1A obok stacji{" "}
                <span className="span">Statoil/CircleK</span>
              </StyledTitle>
            </StyledBoxContact>
            <a href="tel:+48791577679">
              <StyledBoxContact>
                <FontAwesomeIcon className="icon" icon={faPhone} />
                <StyledTitle>Mariusz: 791&nbsp;577&nbsp;679</StyledTitle>
              </StyledBoxContact>
            </a>
          </StyledBoxRight>
        </StyledBoxBlurr>
      </StyledContainer>
      {/* </form> */}
    </>
  );
};

export default Contact;
