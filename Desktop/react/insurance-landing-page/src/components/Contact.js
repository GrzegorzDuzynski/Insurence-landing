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
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupRODO, setShowPopupRODO] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
      phone: "",
      consents: false,
    },

    onSubmit: (values, { resetForm }) => {
      console.log("onsubmit", values);

      setShowPopup(true);
      resetForm({
        email: "",
        message: "",
        phone: "",
        consents: false,
      });
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email jest wymagany")
        .email("Wpisz prawidłowy adres"),
      message: Yup.string()
        .required("Pole jest wymagane")
        .min(3, "Zbyt krótka wiadomość ")
        .max(220, "Zbyt duga wiadomość"),
      phone: Yup.string()
        .required("Pole jest wymagane")
        .matches(/^\+?\d{6,15}$/, {
          message: "Wpisz prawidłowy numer.",
          excludeEmptyString: false,
        }),
      consents: Yup.bool().oneOf([true], "Pole jest wymagane"),
    }),
  });

  return (
    <>
      <StyledContainer id="contact">
        <ContactForm />
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
