import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { offersActions } from "../store";
import { insuranceDescription } from ".././data";

import ContactForm from "./ContactForm";
import {
  StyledBoxBottom,
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
  const dispatch = useDispatch();

  const reduxState = useSelector((state) => state);

  return (
    <StyledContainer id="offer">
      {showSummaryPopup && reduxState.offers.offers && (
        <Popup
          onClick={() => {
            setShowSummaryPopup(false);
            dispatch(offersActions.clearOffers());
          }}
        >
          <StyledTitle style={{ textAlign: "left" }}>
            Zakres :{reduxState.offers.offers[0].type}
          </StyledTitle>
          <ul>
            {reduxState.offers.offers &&
              reduxState.offers.offers.map((offer, id) => (
                <li key={id}>
                  <StyledBoxTextLi>
                    <StyledCheckbox
                      defaultChecked={true}
                      // onChange={(e) =>
                      //   dispatch(
                      //     offersActions.changeSelection({
                      //       type: reduxState.offers.offers[0].type,
                      //       selection: offer.selection,
                      //       value: e.target.checked,
                      //     })
                      //   )
                      // }
                    />
                    <StyledText style={{ textAlign: "left" }}>
                      {offer.selection}
                    </StyledText>
                  </StyledBoxTextLi>
                </li>
              ))}
          </ul>
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
              onClick={() =>
                setShowPopup((prevState) => [
                  ...prevState.slice(0, id),
                  false,
                  ...prevState.slice(id + 1),
                ])
              }
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
                          />
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
