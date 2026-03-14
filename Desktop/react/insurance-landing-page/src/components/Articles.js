import React, { useState, useEffect, useRef } from "react";
import {
  PageWrapper,
  Layout,
  Sidebar,
  TOCToggle,
  TOCTitle,
  TOCArticle,
  TOCArticleTitle,
  TOCSection,
  Content,
  ArticleCard,
  ArticleHeader,
  ArticleTitle,
  ArticleSubtitle,
  SectionBlock,
  SectionHeading,
  SectionContent,
} from "./Articles.css";

/* ──────────────────────────────────────────────
   DATA — artykuły (łatwo dodawać kolejne)
   ────────────────────────────────────────────── */

const articlesData = [
  {
    id: "wstep",
    title: "Wstęp – Historie pacjentów",
    subtitle: "Dlaczego ubezpieczenie organizacyjne może uratować życie",
    sections: [
      {
        id: "wstep-intro",
        heading: "Jak bym to zrobił dla siebie?",
        content: `Często przychodzicie do mnie i mówicie: „Mariusz chcę się ubezpieczyć na życie, zrób mi ofertę taką jak byś robił dla siebie". Rozważmy kilka przypadków z życia:`,
      },
      {
        id: "wstep-przypadek1",
        heading: "Mężczyzna lat 54 – operacja zastawek serca",
        content: `Diagnoza: konieczna operacja zastawek serca. W Polsce skierowany na klasyczną operację otwarcia klatki piersiowej. Co w ramach ubezpieczenia zrobił Ubezpieczyciel:

• Zorganizował wydanie opinii medycznej
• Nakreślił plan leczenia
• Wskazał dostępne kliniki specjalistyczne
• Sfinansował przelot pacjenta wraz z osobą towarzyszącą

Eksperci zagraniczni zarekomendowali i wykonali mniej inwazyjny zabieg przezcewnikowy w klinice w Szwajcarii.`,
      },
      {
        id: "wstep-przypadek2",
        heading: "45-letnia kobieta z rakiem piersi",
        content: `Druga opinia medyczna od lekarzy z USA zmieniła schemat chemioterapii na bardziej celowany molekularnie, co pozwoliło na uniknięcie mastektomii i przejście do operacji oszczędzającej.`,
      },
      {
        id: "wstep-przypadek3",
        heading: "38-letni mężczyzna z guzem mózgu",
        content: `Diagnoza w Polsce: nieoperacyjny glejak — wyrok śmierci. (Tak zmarł mój dobry kolega Piotr). Ubezpieczyciel zorganizował drugą opinię medyczną i wskazał ośrodek w Hanowerze (Niemcy). Przeprowadzono tam precyzyjną operację z użyciem neuronawigacji, która uratowała życie pacjenta.`,
      },
      {
        id: "wstep-przypadek4",
        heading: "Dziecko z neuroblastomą",
        content: `4-letni pacjent z Polski, u którego standardowe leczenie nie przynosiło efektów. Ubezpieczyciel zapewnił transport do specjalistycznej kliniki w Barcelonie i pokrył koszty innowacyjnej immunoterapii niedostępnej wówczas w kraju.`,
      },
      {
        id: "wstep-przypadek5",
        heading: "Nowotwór tarczycy u 53-letniego mężczyzny",
        content: `Pacjent otrzymał diagnozę nowotworu złośliwego. Zorganizowano operację w jednym z najbardziej prestiżowych ośrodków onkologicznych na świecie — MD Anderson Cancer Center w Madrycie. Przeprowadzono całkowite usunięcie tarczycy oraz węzłów chłonnych.`,
      },
      {
        id: "wstep-przypadek6",
        heading: "Nowotwór piersi u Pani Anny",
        content: `Po wykryciu zaawansowanego raka pacjentka poprosiła o drugą opinię. Onkolog z Bostonu zweryfikował diagnozę i zaproponował plan leczenia. Leczenie zrealizowano w klinice w Genewie. Ubezpieczyciel opłacił koszty leczenia przekraczające 200\u00A0000 euro. Po powrocie do Polski zapewnił pokrycie kosztów zaleconych leków do kwoty 50\u00A0000 euro.`,
      },
      {
        id: "wstep-podsumowanie",
        heading: "Podsumowanie",
        content: `Powyższe historie są prawdziwe — idą za nimi ludzie, którym się udało. Ale pomyślcie o tych, którym to nie było dane.

Wszystkie te osoby miały ubezpieczenie zdrowia, które można nazwać organizacyjnym. Oznacza to, że Ubezpieczyciel zorganizował i sfinansował cały proces ich leczenia.`,
      },
    ],
  },
  {
    id: "global-doctors",
    title: "Global Doctors",
    subtitle: "Ubezpieczenia organizacyjne — kompleksowa ochrona zdrowia",
    sections: [
      {
        id: "gd-epidemiologia",
        heading: "Epidemiologia nowotworów w Polsce",
        content: `Ponad 1,17 mln Polaków żyje z chorobą nowotworową. Na każde 100 tys. polskiej populacji co roku u ok. 440 osób diagnozuje się nowotwór.

Głównymi przyczynami zgonów w Polsce są choroby układu krążenia (ponad 36%), nowotwory złośliwe (ok. 24%) oraz choroby układu oddechowego i pokarmowego.

Najczęściej kobiety umierają na nowotwór piersi i płuc, mężczyźni — na raka płuc i prostaty.`,
      },
      {
        id: "gd-leczenie-pl",
        heading: "Jak wygląda leczenie w Polsce?",
        content: `Na stronie oncoindex.org znajdziesz listę substancji czynnych zarejestrowanych przez EMA w ciągu ostatnich 15 lat. Dla raka płuc, oskrzeli i tchawicy — 35 metod leczenia na liście, ale w Polsce w pełni refundowanych jest jedynie 7.

Polska wypada pod względem wyleczalności nowotworów poniżej średniej UE, zajmując jedno z ostatnich miejsc w rankingu. W 2022 roku odnotowała najwyższy współczynnik umieralności na raka w Europie — 330,5 zgonów na 100 tys. mieszkańców.

Wyleczalność nowotworów szacuje się na ok. 30%, podczas gdy w Europie Zachodniej i USA jest znacznie wyższa. Główną przyczyną gorszych wyników jest późna wykrywalność.`,
      },
      {
        id: "gd-historia-rafal",
        heading: "Historia Rafała Podczasika",
        content: `Rafał Podczasik to jedna z niewielu osób, która publicznie opisała swoje doświadczenia z polisą typu Global Doctors.

U Rafała zdiagnozowano guz mózgu. Dzięki polisie trafił do International Neuroscience Institute (INI) w Hanowerze — jednej z najbardziej renomowanych klinik neurochirurgicznych na świecie. Operacja zakończyła się sukcesem, a wszystkie koszty pokrył ubezpieczyciel.

Jego relację można znaleźć na kanale YouTube „Rafał Podczasik — Moja Historia".`,
      },
      {
        id: "gd-rys-historyczny",
        heading: "Rys historyczny",
        content: `Historia ubezpieczeń typu Global Doctors sięga 1989 roku. Hiszpania weszła do UE i stała się atrakcyjnym kierunkiem dla turystów z Niemiec i Anglii — potrzeba organizacji opieki medycznej za granicą dała impuls do powstania tego produktu.

Firmą odpowiedzialną za Global Doctors jest FURTHER (wegofurther.com). Obsługuje pacjentów z ponad 30 krajów. Stan na 2019 rok:
• Ponad 30 krajów obsługiwanych
• 450 tys. szpitali z podpisaną umową
• 54 tys. indywidualnych lekarzy współpracujących`,
      },
      {
        id: "gd-siec-szpitali",
        heading: "Sieć szpitali na świecie",
        content: `Największa liczba szpitali współpracujących z Further znajduje się w krajach z najlepszą infrastrukturą medyczną:

• Stany Zjednoczone — trzon sieci (np. Mayo Clinic)
• Hiszpania — kliniki w Madrycie i Barcelonie (np. HM Hospitales)
• Niemcy — onkologia i kardiologia (np. Charité Berlin)
• Szwajcaria, Wielka Brytania, Izrael, Korea Południowa

Ciekawostką jest Izrael, który przeznacza ok. 5% PKB na badania i rozwój. Działa tam ponad 1600 firm z sektora Life Sciences. Placówki takie jak Sheba Medical Center regularnie trafiają do czołówki rankingów.`,
      },
      {
        id: "gd-zakres",
        heading: "Co obejmuje ubezpieczenie Global Doctors?",
        content: `Ubezpieczenie zapewnia leczenie w renomowanych zagranicznych klinikach w razie:

1. Nowotworu złośliwego
2. Nowotworu w stadium przedinwazyjnym / in situ / ciężkiej dysplazji
3. Choroby lub urazu wymagającego:
   — operacji pomostowania tętnic wieńcowych
   — operacji neurochirurgicznej
   — wymiany lub naprawy zastawek serca
   — przeszczepienia narządów od żywego dawcy
   — przeszczepienia szpiku kostnego`,
      },
      {
        id: "gd-swiadczenia",
        heading: "Zakres świadczeń",
        content: `1. Second Medical Opinion (druga opinia medyczna)
2. Medical Concierge Service (opieka medyczna za granicą)
3. Koszty medyczne w trakcie leczenia za granicą
4. Koszty zakwaterowania podczas leczenia
5. Koszty leków po powrocie z leczenia
6. Follow Up Care (kontrola stanu zdrowia po leczeniu)
7. Dzienne świadczenie szpitalne`,
      },
      {
        id: "gd-kto-moze",
        heading: "Kto może przystąpić i ile to kosztuje?",
        content: `Ubezpieczamy osoby dorosłe w wieku 18–64 lata i dzieci od 3. miesiąca życia do 17. roku życia.

Global Doctors to polisa roczna — co roku otrzymujesz propozycję przedłużenia ochrony. Na rok 2026 koszt to ok. 120 zł/mc (polisy dla dzieci — ok. połowa tej kwoty).

Aby przystąpić, należy odpowiedzieć na pytania w ankiecie medycznej dotyczącej m.in. przebytych nowotworów, chorób serca, przeszczepów i bieżących objawów. Jeśli wszystkie odpowiedzi to „NIE" — zapraszam do zawarcia polisy!`,
      },
    ],
  },
];

/* ──────────────────────────────────────────────
   COMPONENT
   ────────────────────────────────────────────── */

const Articles = () => {
  const [activeSection, setActiveSection] = useState("");
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const sectionRefs = useRef({});

  /* Intersection Observer — highlight active section in TOC */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileTocOpen(false);
    }
  };

  const getActiveArticle = () => {
    for (const article of articlesData) {
      if (article.sections.some((s) => s.id === activeSection)) {
        return article.id;
      }
    }
    return articlesData[0]?.id;
  };

  return (
    <PageWrapper>
      <Layout>
        {/* Mobile TOC toggle */}
        <TOCToggle onClick={() => setMobileTocOpen(!mobileTocOpen)}>
          {mobileTocOpen ? "Zwiń spis treści ▲" : "Spis treści ▼"}
        </TOCToggle>

        {/* Sidebar */}
        <Sidebar mobileOpen={mobileTocOpen}>
          <TOCTitle>Spis treści</TOCTitle>
          {articlesData.map((article) => (
            <TOCArticle key={article.id}>
              <TOCArticleTitle
                active={getActiveArticle() === article.id}
                onClick={() => scrollTo(article.sections[0]?.id)}
              >
                {article.title}
              </TOCArticleTitle>
              {article.sections.map((section) => (
                <TOCSection
                  key={section.id}
                  active={activeSection === section.id}
                  onClick={() => scrollTo(section.id)}
                >
                  {section.heading}
                </TOCSection>
              ))}
            </TOCArticle>
          ))}
        </Sidebar>

        {/* Articles */}
        <Content>
          {articlesData.map((article) => (
            <ArticleCard key={article.id}>
              <ArticleHeader>
                <ArticleTitle>{article.title}</ArticleTitle>
                {article.subtitle && (
                  <ArticleSubtitle>{article.subtitle}</ArticleSubtitle>
                )}
              </ArticleHeader>

              {article.sections.map((section) => (
                <SectionBlock
                  key={section.id}
                  id={section.id}
                  ref={(el) => (sectionRefs.current[section.id] = el)}
                >
                  <SectionHeading>{section.heading}</SectionHeading>
                  <SectionContent>{section.content}</SectionContent>
                </SectionBlock>
              ))}
            </ArticleCard>
          ))}
        </Content>
      </Layout>
    </PageWrapper>
  );
};

export default Articles;
