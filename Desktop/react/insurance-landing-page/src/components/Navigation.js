import React, { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";

import {
  StyledBoxCompany,
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
  const location = useLocation();

  /* ── Resize listener ── */
  useEffect(() => {
    const handleResize = () => {
      setIsNavOpen(window.innerWidth >= 850);
    };

    if (window.innerWidth >= 768) {
      setIsNavOpen(true);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ── Scroll listener — only on home page ── */
  const checkScroll = useCallback(() => {
    if (location.pathname !== "/") {
      setScroll(false);
      return;
    }
    const counterElement = document.getElementById("offer");
    if (!counterElement) {
      setScroll(false);
      return;
    }
    const position = counterElement.getBoundingClientRect().top;
    setScroll(position < window.innerHeight);
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  /* Reset scroll state when route changes */
  useEffect(() => {
    if (location.pathname !== "/") {
      setScroll(false);
    }
  }, [location.pathname]);

  return (
    <StyledContainer
      style={scroll ? { backgroundColor: "rgba(145, 146, 143, 0.546)" } : {}}
    >
      <StyledBoxCompany>
        <StyledLink smooth to="/#hero">
          <StyledTitle>ŻÓŁTY PUNKT</StyledTitle>
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
              {/* NOWA ZAKŁADKA — Artykuły */}
              <StyledListItem>
                <StyledLink
                  to="/artykuly"
                >
                  Artykuły
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
