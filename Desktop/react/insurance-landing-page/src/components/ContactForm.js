import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Popup from "./Popup";
import PopupRODO from "./PopupRODO";
import { useSelector, useDispatch } from "react-redux";
import { contactActions, offersActions } from "../store";
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
} from "./ContactForm.css";

const ContactForm = ({ colorTitlePopup, colorTextPopup, colorErrorPopup }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupRODO, setShowPopupRODO] = useState(false);
  console.log(colorTitlePopup);
  const reduxState = useSelector((state) => state);
  const reduxjosn = JSON.stringify(reduxState);
  console.log("Redux:", reduxjosn);
  const dispatch = useDispatch();

  const fetchSubmit = async (formData) => {
    try {
      console.log("jestem w try");
      const response = await fetch(
        "https://zoltypunkt.kylos.pl/wp-headless/server/wp-json/wp/v2/contact-form2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log("jestem w try");

      if (response.ok) {
        console.log(response);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error("Błąd podczas wysyłania danych:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
      phone: "",
      consents: false,
    },

    onSubmit: (values, { resetForm }) => {
      console.log("onsubmit", values);
      dispatch(
        contactActions.addInfo({
          email: formik.values.email,
          message: formik.values.message,
          phone: formik.values.phone,
          consents: formik.values.consents,
        })
      );
      console.log(reduxState.contact);
      fetchSubmit(reduxState);
      setShowPopup(true);

      // dispatch(contactActions.clearInfo());
      // resetForm({
      //   email: "",
      //   message: "",
      //   phone: "",
      //   consents: false,
      // });
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
      <form onSubmit={formik.handleSubmit}>
        {showPopup && (
          <div
            style={{
              width: "80%",
              height: "80%",
              backgroundColor: "white",
              padding: 30,
              position: "fixed",
              overflowY: "auto",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",

              boxShadow: "3px 3px 7px 7px gray",
              zIndex: 100,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <StyledButton
                style={{ width: 70 }}
                onClick={() => {
                  setShowPopup(false);
                }}
              >
                Powrót
              </StyledButton>
              <StyledButton
                style={{ width: 30 }}
                onClick={() => {
                  setShowPopup(false);
                  dispatch(contactActions.clearInfo());
                  dispatch(offersActions.clearOffers());
                  formik.resetForm({
                    email: "",
                    message: "",
                    phone: "",
                    consents: false,
                  });
                }}
              >
                x
              </StyledButton>
            </div>
            <div style={{ padding: 30 }}>
              <p>
                Dziekuję za zgłoszenie. Postaram sie odpowiedzieć w ciagu 24h.
              </p>
              <p>Mariusz </p>
            </div>
          </div>
        )}
        {showPopupRODO && (
          <PopupRODO
            onClick={() => {
              setShowPopupRODO(false);
            }}
          ></PopupRODO>
        )}
        <StyledBoxLeft>
          <StyledTitle colortitlepopup={colorTitlePopup}>
            Chętnie przedstawię ofertę
          </StyledTitle>
          <StyledBox>
            <StyledTextArea
              placeholder="Napisz wiadomość"
              rows="8"
              cols="70"
              name="message"
              value={formik.values.message}
              values={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></StyledTextArea>
            <StyledTextError colorErrorPopup={colorErrorPopup}>
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
            <StyledTextError colorErrorPopup={colorErrorPopup}>
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
            <StyledTextError colorErrorPopup={colorErrorPopup}>
              {formik.errors.email &&
                formik.touched.email &&
                formik.errors.email}
            </StyledTextError>
          </StyledBox>
          <StyledBox>
            <StyledBoxCheckbox>
              <StyledCheckbox
                id="consents"
                name="consents"
                checked={formik.values.consents}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <StyledText colortextpopup={colorTextPopup}>
                Zaznaczając wyrażasz zgodę na RODO i zgody marketingowe
              </StyledText>
            </StyledBoxCheckbox>
            <StyledTextError colorErrorPopup={colorErrorPopup}>
              {formik.errors.consents &&
                formik.touched.consents &&
                formik.errors.consents}
            </StyledTextError>
          </StyledBox>

          <StyledButton type="submit" colortextpopup={colorTextPopup}>
            Wyślij wiadomość
          </StyledButton>

          <StyledButtonRODO
            onClick={() => setShowPopupRODO(true)}
            colortextpopup={colorTextPopup}
          >
            Szczegóły RODO i zgód marketingowych
          </StyledButtonRODO>
        </StyledBoxLeft>
      </form>
    </>
  );
};

export default ContactForm;
