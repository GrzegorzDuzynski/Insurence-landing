import React from "react";
import { StyledButton, StyledContainer } from "./Popup.css";
import { StyledText, StyledTitle } from "./PopupRODO.css";

const PopupRODO = ({ onClick }) => {
  return (
    <StyledContainer>
      <StyledButton onClick={onClick}>x</StyledButton>
      <StyledTitle>RODO i zgody Marketingowe</StyledTitle>
      <StyledText>
        1. Zaznaczając wyrażasz zgodę, aby moje dane osobowe byly przetwarzane
        przez Ryszard Sępowicz z siedzibą w Kielcach w celach marketingowych, w
        tym poprzez profilowanie w celu okreslenia preferencji lub wymagań i
        potrzeb w zakresie produktów ubezpieczeniowych i innych produktów
        finansowych oraz w celu przedstawienia oferty.
      </StyledText>
      <StyledText>
        2. Zaznaczając wyrażasz zgodę, na otrzymywanie od Ryszard Sępowicz z
        siedzibą w Kielcach informacji handlowej drogą elektroniczną, przy
        wykorzystaniu podanego adresu e-mail lub wiadomosci MMS/SMS na podany
        numer telefonu, w oparciu o art. 10 Ustawy z 18 lipca 2002r., o
        świadczeniu usług drogą elektroniczną.
      </StyledText>
      <StyledText>
        3. Zaznaczając wyrażasz zgodę, na używanie telekomunikacyjnych urządzeń
        dla celów marketingu bezpośredniego przez Ryszard Sępowicz z siedzibą w
        Kielcach przy wykorzystaniu podanego numeru telefonu, w oparciu o art.
        172 Ustawy z dnia 16 lipca 2004r., Prawo telekomunikacyjne.
      </StyledText>
    </StyledContainer>
  );
};

export default PopupRODO;
