import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Popup from "./Popup";
import PopupRODO from "./PopupRODO";
import { useSelector, useDispatch } from "react-redux";
import { contactActions } from "../store";
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

const ContactForm = ({ ColorTitlePopup, ColorTextPopup, ColorErrorPopup }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupRODO, setShowPopupRODO] = useState(false);
  console.log(ColorTitlePopup);
  // const reduxState = useSelector((state) => state);
  // console.log("Redux:", reduxState);
  const dispatch = useDispatch();

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
      setShowPopup(true);
      dispatch(contactActions.clearInfo());
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
      <form onSubmit={formik.handleSubmit}>
        {showPopup && (
          <Popup onClick={() => setShowPopup(false)}>
            <p>
              Dziekuję za zgłoszenie. Postaram sie odpowiedzieć w ciagu 24h.
            </p>
            <p>Mariusz </p>
          </Popup>
        )}
        {showPopupRODO && (
          <PopupRODO onClick={() => setShowPopupRODO(false)}></PopupRODO>
        )}
        <StyledBoxLeft>
          <StyledTitle ColorTitlePopup={ColorTitlePopup}>
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
            <StyledTextError ColorErrorPopup={ColorErrorPopup}>
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
            <StyledTextError ColorErrorPopup={ColorErrorPopup}>
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
            <StyledTextError ColorErrorPopup={ColorErrorPopup}>
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
              <StyledText ColorTextPopup={ColorTextPopup}>
                Zaznaczając wyrażasz zgodę na RODO i zgody marketingowe
              </StyledText>
            </StyledBoxCheckbox>
            <StyledTextError ColorErrorPopup={ColorErrorPopup}>
              {formik.errors.consents &&
                formik.touched.consents &&
                formik.errors.consents}
            </StyledTextError>
          </StyledBox>
          <StyledButton type="submit" ColorTextPopup={ColorTextPopup}>
            Wyślij wiadomość
          </StyledButton>
          <StyledButtonRODO
            onClick={() => setShowPopupRODO(true)}
            ColorTextPopup={ColorTextPopup}
          >
            Szczegóły RODO i zgód marketingowych
          </StyledButtonRODO>
        </StyledBoxLeft>
      </form>
    </>
  );
};

export default ContactForm;
