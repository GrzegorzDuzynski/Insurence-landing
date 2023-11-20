import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import map from "../mapa.png";
// import Button from "./Button";
// import Popup from "./Popup";

import "./Contact.css";
import {
  StyledBox,
  StyledBoxImg,
  StyledBoxLeft,
  StyledBoxRight,
  StyledButton,
  StyledContainer,
  StyledInput,
  StyledTextArea,
  StyledTextError,
  StyledTitle,
} from "./Contact.css";
import Popup from "./Popup";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
      phone: "",
    },

    onSubmit: (values, { resetForm }) => {
      console.log("onsubmit", values);
      setShowPopup(true);
      resetForm({
        email: "",
        message: "",
        phone: "",
      });

      // setValues({ values });
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
    }),
  });

  return (
    <>
      {showPopup && (
        <Popup onClick={() => setShowPopup(false)}>
          <p>Dziekuję za zgłoszenie. Postaram sie odpowiedzieć w ciagu 24h.</p>
          <p>Mariusz </p>
        </Popup>
      )}
      <form onSubmit={formik.handleSubmit}>
        <StyledContainer>
          <StyledBoxLeft>
            <StyledTitle>Chętnie przedstawię ofertę</StyledTitle>
            <StyledBox>
              <StyledTextArea
                placeholder="Napisz wiadomość"
                rows="4"
                cols="70"
                name="message"
                value={formik.values.message}
                values={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></StyledTextArea>
              <StyledTextError>
                {formik.errors.message &&
                  formik.touched.message &&
                  formik.errors.message}
              </StyledTextError>
            </StyledBox>
            <StyledBox>
              <StyledInput
                id="phone"
                name="phone"
                placeholder="telefon"
                value={formik.values.phone}
                values={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <StyledTextError>
                {formik.errors.phone &&
                  formik.touched.phone &&
                  formik.errors.phone}
              </StyledTextError>
            </StyledBox>
            <StyledBox>
              <StyledInput
                id="email"
                name="email"
                placeholder="email"
                value={formik.values.email}
                values={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <StyledTextError>
                {formik.errors.email &&
                  formik.touched.email &&
                  formik.errors.email}
              </StyledTextError>
            </StyledBox>
            <StyledButton type="submit">Wyślij wiadomość</StyledButton>
          </StyledBoxLeft>
          <StyledBoxRight>
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
          </StyledBoxRight>
        </StyledContainer>
      </form>
    </>
  );
};

export default Contact;
