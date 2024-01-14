import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";
// import logo from "../LOGO2.png";

import {
  StyledBoxCompany,
  StyledBoxLogo,
  StyledContainer,
  StyledLink,
  StyledList,
  StyledListItem,
  StyledTitle,
  StyledBox,
  StyledBoxContact,
  StyledTitleTel,
  StyledText,
} from "./Navigation.css";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const windowScreen = window;

  useEffect(() => {
    if (windowScreen.innerWidth >= 768) {
      setIsNavOpen(true);
    }
    windowScreen.addEventListener("resize", () => {
      if (windowScreen.innerWidth >= 850) {
        setIsNavOpen(true);
      } else {
        setIsNavOpen(false);
      }
    });
    return () =>
      windowScreen.removeEventListener("resize", () => {
        if (windowScreen.innerWidth >= 850) {
          setIsNavOpen(true);
        } else {
          setIsNavOpen(false);
        }
      });
  }, [windowScreen]);

  const checkScroll = () => {
    let counterElement = document.getElementById("offer");
    let position = counterElement.getBoundingClientRect().top;

    if (position < window.innerHeight) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", checkScroll, { passive: true });
  return (
    <StyledContainer
      style={scroll ? { backgroundColor: "rgba(145, 146, 143, 0.546)" } : {}}
    >
      <StyledBoxCompany>
        <StyledLink smooth to="/#hero">
          <StyledTitle>Żółty Punkt</StyledTitle>
        </StyledLink>
        <StyledBox>
          <a href="tel:+48791577679">
            <StyledBoxContact>
              <FontAwesomeIcon className="icon" icon={faPhone} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <StyledTitleTel>791&nbsp;577&nbsp;679</StyledTitleTel>
              </div>
            </StyledBoxContact>
          </a>
        </StyledBox>
      </StyledBoxCompany>
      <div>
        <FontAwesomeIcon
          className="icon-menu"
          icon={faBars}
          onClick={() => setIsNavOpen(!isNavOpen)}
        />

        {isNavOpen && (
          <nav style={{ display: "flex", alignItems: "center" }}>
            <StyledList>
              <StyledListItem>
                <StyledLink smooth to="/#offer">
                  Oferta
                </StyledLink>
              </StyledListItem>
              <StyledListItem>
                <StyledLink smooth to="/#about">
                  O mnie
                </StyledLink>
              </StyledListItem>
              <StyledListItem>
                <StyledLink smooth to="/#reputation">
                  Reputacja
                </StyledLink>
              </StyledListItem>
              <StyledListItem>
                <StyledLink smooth to="/#stats">
                  Statystyki
                </StyledLink>
              </StyledListItem>
              <StyledListItem>
                <StyledLink smooth to="/#contact">
                  Kontakt
                </StyledLink>
              </StyledListItem>
            </StyledList>
          </nav>
        )}
      </div>
    </StyledContainer>
  );
};

export default Navigation;
