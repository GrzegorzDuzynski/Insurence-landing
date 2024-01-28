import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { offersActions } from "../store";
import { insuranceDescription } from ".././data";

import useDebounce from "../features/debounce";

import ContactForm from "./ContactForm";
import {
  StyledBoxBottom,
  StyledBoxCheckbox,
  StyledBoxImg,
  StyledBoxImgPopup,
  StyledBoxPopup,
  StyledBoxText,
  StyledBoxTextLi,
  StyledBoxTextPopup,
  StyledBoxTop,
  StyledButton,
  StyledButtonContact,
  StyledCard,
  StyledCheckbox,
  StyledContainer,
  StyledLink,
  StyledText,
  StyledTitle,
} from "./Offer.css";
import Popup from "./Popup";

const Offer = () => {
  const [showPopup, setShowPopup] = useState([]);
  const [showSummaryPopup, setShowSummaryPopup] = useState(false);
  const [titles, setTitles] = useState([]);
  const dispatch = useDispatch();

  const reduxState = useSelector((state) => state);
  console.log("redux:", reduxState);

  useEffect(() => {
    const uniqueTitleSet = new Set(
      reduxState.offers.offers.map((item) => item.type)
    );

    setTitles([...uniqueTitleSet]);
    console.log(titles);
  }, [showSummaryPopup]);

  return (
    <StyledContainer id="offer">
      {showSummaryPopup && reduxState.offers.offers && (
        <Popup
          onClickBack={() => {
            setShowSummaryPopup(false);
          }}
          onClick={() => {
            setShowSummaryPopup(false);
            dispatch(offersActions.clearOffers());
          }}
        >
          {titles.map((title, id) => (
            <>
              <StyledTitle key={id} style={{ textAlign: "left" }}>
                {title}
              </StyledTitle>
              <ul>
                {reduxState.offers.offers &&
                  reduxState.offers.offers.map((offer, id) =>
                    title === offer.type ? (
                      <li key={id}>
                        <StyledBoxTextLi>
                          <StyledBoxCheckbox>
                            <StyledCheckbox
                              defaultChecked={true}
                              onChange={(e) =>
                                dispatch(
                                  offersActions.changeSelection({
                                    type: reduxState.offers.offers[0].type,
                                    selection: offer.selection,
                                    value: e.target.checked,
                                  })
                                )
                              }
                            />
                          </StyledBoxCheckbox>
                          <StyledText style={{ textAlign: "left" }}>
                            {offer.selection}
                          </StyledText>
                        </StyledBoxTextLi>
                      </li>
                    ) : null
                  )}
              </ul>
            </>
          ))}

          <ContactForm
            ColorTitlePopup={"white"}
            ColorErrorPopup={"red"}
            ColorTextPopup={"rgb(121, 117, 117)"}
          />
        </Popup>
      )}
      {insuranceDescription.map((card, id) => (
        <StyledCard key={id}>
          {showPopup[id] && (
            <Popup
              onClickBack={() => {
                setShowPopup((prevState) => [
                  ...prevState.slice(0, id),
                  false,
                  ...prevState.slice(id + 1),
                ]);
              }}
              onClick={() => {
                setShowPopup((prevState) => [
                  ...prevState.slice(0, id),
                  false,
                  ...prevState.slice(id + 1),
                ]);
                dispatch(offersActions.clearOffers());
              }}
            >
              <StyledBoxPopup>
                <StyledBoxImgPopup>
                  <img src={`/${card.img}`} alt={card.title} />
                </StyledBoxImgPopup>
                <StyledBoxTextPopup>
                  <StyledTitle style={{ textAlign: "left" }}>
                    {card.title}
                  </StyledTitle>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {card.longText.map((text, id) => (
                      <li key={id}>
                        <StyledBoxTextLi>
                          <StyledBoxCheckbox>
                            <StyledCheckbox
                              onChange={(e) =>
                                dispatch(
                                  offersActions.changeSelection({
                                    type: card.title,
                                    selection: text,
                                    value: e.target.checked,
                                  })
                                )
                              }
                              defaultChecked={reduxState.offers.offers.some(
                                (offer) => offer.selection === text
                              )}
                            />
                          </StyledBoxCheckbox>
                          <StyledText style={{ textAlign: "left" }}>
                            {text}
                          </StyledText>
                        </StyledBoxTextLi>
                      </li>
                    ))}
                  </ul>
                  <StyledButtonContact
                    onClick={() => {
                      setShowSummaryPopup(true);

                      setShowPopup((prevState) => [
                        ...prevState.slice(0, id),
                        false,
                        ...prevState.slice(id + 1),
                      ]);
                    }}
                  >
                    Proszę o wycenę zaznaczonych opcji ubezpieczenia
                  </StyledButtonContact>
                </StyledBoxTextPopup>
              </StyledBoxPopup>
            </Popup>
          )}
          <StyledBoxTop>
            <StyledBoxImg>
              <img src={`/${card.img}`} alt={card.title} />
            </StyledBoxImg>
          </StyledBoxTop>
          <StyledBoxBottom>
            <StyledTitle>{card.title}</StyledTitle>
            <StyledBoxText>
              <StyledText>{card.shortText}</StyledText>
            </StyledBoxText>
            <StyledButton
              onClick={() =>
                setShowPopup((prevState) => [
                  ...prevState.slice(0, id),
                  true,
                  ...prevState.slice(id + 1),
                ])
              }
            >
              Więcej informacji
            </StyledButton>
          </StyledBoxBottom>
        </StyledCard>
      ))}
    </StyledContainer>
  );
};

export default Offer;
