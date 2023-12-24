import React, { useEffect, useState } from "react";

import "./Stats.css";
import {
  StyledBox,
  StyledBoxPlus,
  StyledContainer,
  StyledText,
  StyledTitle,
} from "./Stats.css";

const Stats = () => {
  const [yearsStart, setYearsStart] = useState(new Date("2015/12/01"));
  const [years, setYears] = useState(0);
  const [displayYears, setDisplayYears] = useState(0);
  const [scroll, setScroll] = useState(false);
  const [constarcts, setConstarcts] = useState(0);
  const [displayConstarcts, setDisplayConstarcts] = useState(0);
  const [clients, setClients] = useState(0);
  const [displayClients, setDisplayClients] = useState(0);

  let today = new Date();

  useEffect(() => {
    const yearsOnMarket = () => {
      setYears(
        (
          Math.round((today - yearsStart) / (1000 * 60 * 60 * 24)) / 365
        ).toFixed(0)
      );
    };

    const contractsOnMarket = () => {
      setConstarcts(
        Math.round(((today - yearsStart) / (1000 * 60 * 60 * 24)) * 4).toFixed(
          0
        )
      );
    };

    const clientsOnMarket = () => {
      setClients(
        Math.round((today - yearsStart) / (1000 * 60 * 60 * 24) / 3).toFixed(0)
      );
    };

    const countToYear = (liczba) => {
      let count = 0;
      let interval = setInterval(function () {
        if (count <= liczba) {
          setDisplayYears(count);
          count++;
        } else {
          clearInterval(interval);
        }
      }, 200);
    };

    const countToContracts = (liczba) => {
      let count = 0;
      let interval = setInterval(function () {
        if (count <= liczba) {
          setDisplayConstarcts(count);
          count += 50;
        } else {
          clearInterval(interval);
        }
      }, 10);
    };

    const countToClients = (liczba) => {
      let count = 0;
      let interval = setInterval(function () {
        if (count <= liczba) {
          setDisplayClients(count);
          count += 10;
        } else {
          clearInterval(interval);
        }
      }, 20);
    };
    yearsOnMarket();
    contractsOnMarket();
    clientsOnMarket();

    countToYear(years);
    countToContracts(constarcts);
    countToClients(clients);
  }, [scroll]);

  const sprawdzPrzewijanie = () => {
    let counterElement = document.getElementById("stats");
    let position = counterElement.getBoundingClientRect().top;

    if (position < window.innerHeight) {
      setScroll(true);
    }
  };

  window.addEventListener("scroll", sprawdzPrzewijanie, { passive: true });

  return (
    <StyledContainer id="stats">
      <StyledBox>
        <StyledBoxPlus>
          <StyledTitle>{displayYears}</StyledTitle>
          <StyledTitle>+</StyledTitle>
        </StyledBoxPlus>
        <StyledText>Lat na rynku</StyledText>
      </StyledBox>
      <StyledBox>
        <StyledBoxPlus>
          <StyledTitle>{displayConstarcts}</StyledTitle>
          <StyledTitle>+</StyledTitle>
        </StyledBoxPlus>
        <StyledText>Zawartych polis</StyledText>
      </StyledBox>
      <StyledBox>
        <StyledBoxPlus>
          <StyledTitle>{displayClients}</StyledTitle>
          <StyledTitle>+</StyledTitle>
        </StyledBoxPlus>
        <StyledText>Zadowolonych klientów</StyledText>
      </StyledBox>
    </StyledContainer>
  );
};

export default Stats;
