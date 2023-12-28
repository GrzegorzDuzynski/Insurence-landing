import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../LOGO2.png";

import {
  StyledBoxCompany,
  StyledBoxLogo,
  StyledContainer,
  StyledLink,
  StyledList,
  StyledListItem,
  StyledTitle,
} from "./Navigation.css";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const windowScreen = window;

  console.log(isNavOpen);

  useEffect(() => {
    if (windowScreen.innerWidth >= 768) {
      setIsNavOpen(true);
    }
    windowScreen.addEventListener("resize", () => {
      if (windowScreen.innerWidth >= 768) {
        setIsNavOpen(true);
      } else {
        setIsNavOpen(false);
      }
    });
    return () =>
      windowScreen.removeEventListener("resize", () => {
        if (windowScreen.innerWidth >= 768) {
          setIsNavOpen(true);
        } else {
          setIsNavOpen(false);
        }
      });
  }, [windowScreen]);

  return (
    <StyledContainer>
      <StyledBoxCompany>
        <StyledBoxLogo>
          <img src={logo} alt="Żółty Punkt" />
        </StyledBoxLogo>
        <StyledTitle>Żółty Punkt</StyledTitle>
      </StyledBoxCompany>
      <div>
        <FontAwesomeIcon
          className="icon-menu"
          icon={faBars}
          onClick={() => setIsNavOpen(!isNavOpen)}
        />

        {isNavOpen && (
          <nav>
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
