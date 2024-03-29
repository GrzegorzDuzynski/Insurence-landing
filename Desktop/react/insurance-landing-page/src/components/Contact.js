import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import { useFormik } from "formik";
import ContactForm from "./ContactForm";
import {
  StyledBox,
  StyledBoxCheckbox,
  StyledBoxImg,
  StyledBoxLeft,
  StyledBoxMiddle,
  StyledBoxRight,
  StyledButton,
  StyledButtonRODO,
  StyledCheckbox,
  StyledContainer,
  StyledInput,
  StyledText,
  StyledTextArea,
  StyledTextError,
  StyledTitle,
  StyledBoxBlurr,
  StyledBoxContact,
} from "./Contact.css";
import Popup from "./Popup";
import PopupRODO from "./PopupRODO";

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
              // style={"border:0"}
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
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
