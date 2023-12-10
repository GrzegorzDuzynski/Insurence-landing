import React from "react";
import {
  StyledText,
  StyledTitle,
  StyledButton,
  StyledContainer,
} from "./PopupRODO.css";

const PopupRODO = ({ onClick }) => {
  return (
    <StyledContainer>
      <StyledButton onClick={onClick}>x</StyledButton>
      <StyledTitle>RODO i zgody Marketingowe</StyledTitle>
      <StyledText>
        <strong>
          1. Administrator i dane kontaktowe administratora oraz Inspektora
          Ochrony Danych.
        </strong>
        Administratorem danych osobowych jest Firma: Ryszard Sępowicz z siedzibą
        w Kielcach, adres do korespondencji: 25-341 Kielce, ul. Św.St.Kostki
        7/10. Kontakt z administratorem jest możliwy za pośrednictwem adresu
        e-mail: biuro@zoltypunkt.pl, telefonicznie pod numerem: 791577679, lub
        pisemnie na wyżej wskazany adres do korespondencji.
      </StyledText>
      <StyledText>
        <strong>
          2. Cel przetwarzania danych osobowych oraz podstawa prawna
          przetwarzania.
        </strong>
        Firma: Ryszard Sępowicz z siedzibą w Kielcach, adres do korespondencji:
        25-341 Kielce, ul. Św.St.Kostki 7/10. może przetwarzać Pani/Pana dane w
        celu: 1) przedstawienia oferty marketingowej produktu ubezpieczeniowego
        z oferty współpracujących z Ryszard Sępowicz z siedzibą w Kielcach
        zakładów ubezpieczeń – podstawę do przetwarzania stanowi dobrowolna
        zgoda na przetwarzanie Pani/Pana danych osobowych, w rozumieniu art. 6
        ust. 1 pkt a Rozporządzania Parlamentu Europejskiego i Rady (UE)
        2016/679 z dnia 27 kwietnia 2016r. w sprawie ochrony osób fizycznych w
        związku z przetwarzaniem danych osobowych i w sprawie swobodnego
        przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne
        rozporządzenie o ochronie danych) (Dz.Urz. UE L 119 z 4.05.2016, str. 1)
        – dalej „RODO”. 2) marketingu bezpośredniego usług własnych zakładu
        ubezpieczeń, z którym ma Pan/Pani zawartą za pośrednictwem firmy Ryszard
        Sępowicz z siedzibą w Kielcach umowę ubezpieczenia lub innych usług
        świadczonych przez firmę Ryszard Sępowicz z siedzibą w Kielcach –
        podstawę do przetwarzania stanowi niezbędność przetwarzania do
        realizacji celu wynikającego z prawnie uzasadnionego interesu
        administratora w rozumieniu art. 6 ust. 1 pkt f RODO, którym jest
        marketing usług własnych tego zakładu ubezpieczeń, na podstawie
        powierzonego Ryszard Sępowicz z siedzibą w Kielcach zakresu
        przetwarzania danych osobowych przez ten zakład ubezpieczeń oraz
        marketing usług własnych firmy Ryszard Sępowicz z siedzibą w Kielcach.
        3) zawarcia i wykonania umowy ubezpieczenia, w tym dokonania oceny
        ryzyka ubezpieczeniowego - podstawą prawną przetwarzania jest
        niezbędność przetwarzania danych do podjęcia działań na żądanie osoby,
        której dane dotyczą niezbędnych do zawarcia umowy (np. na potrzeby
        wniosku o zawarcie umowy ubezpieczenia) i wykonywania umowy, w
        rozumieniu art. 6 ust. 1 pkt b RODO, na podstawie powierzonego Ryszard
        Sępowicz z siedzibą w Kielcach zakresu przetwarzania danych osobowych
        przez współpracujący zakład ubezpieczeń. 4) oceny ryzyka
        ubezpieczeniowego w sposób zautomatyzowany w ramach profilowania
        klientów przed zawarciem umowy - podstawą prawną przetwarzania jest
        niezbędność przetwarzania do realizacji prawnego obowiązku ciążącego na
        zakładzie ubezpieczeń, w rozumieniu art. 6 ust. 1 pkt c RODO, na
        podstawie powierzonego Ryszard Sępowicz z siedzibą w Kielcach zakresu
        przetwarzania danych osobowych przez współpracujący zakład ubezpieczeń.
        5) wypełnienia obowiązków wynikających z ustawy o rachunkowości -
        podstawą prawną przetwarzania danych jest niezbędność przetwarzania do
        wypełnienia obowiązku prawnego ciążącego na Ryszard Sępowicz, w
        rozumieniu art. 6 ust. 1 pkt c RODO. 6) w celach analitycznych, w tym
        profilowania na potrzeby monitorowania i analiz oferty produktów
        ubezpieczeniowych współpracujących z Ryszard Sępowicz z siedzibą w
        Kielcach zakładów ubezpieczeń, w celu zapewnienia możliwości
        zaproponowania produktu najbardziej dostosowanego do wymagań i potrzeb
        osoby poszukującej ochrony ubezpieczeniowej – podstawę przetwarzania
        stanowi niezbędność do realizacji celu wynikającego z prawnie
        uzasadnionego interesu realizowanego przez administratora, jakim jest
        proponowanie klientowi produktu najbardziej odpowiedniego do wymagań i
        potrzeb klienta, w rozumieniu art. 6 ust. 1 pkt f RODO oraz docelowo
        także niezbędność przetwarzania do wypełnienia obowiązku prawnego
        ciążącego na administratorze , w rozumieniu art. 6 ust. 1 pkt c RODO, w
        ramach realizacji art. 8 ust. 1 i ust. 3 Ustawy z 15 grudnia 2017r. o
        dystrybucji ubezpieczeń (Dz.U. z 2017 r. poz. 2486), wprowadzającej
        obowiązek ustalenia wymagań i potrzeb osoby poszukującej ochrony oraz
        przedstawienia produktu odpowiedniego do tych wymagań i potrzeb. 7)
        ewentualnie w celu dochodzenia roszczeń lub w ramach obrony przed
        dochodzonymi roszczeniami, związanych z przedstawioną Pani/Panu ofertą
        produktu ubezpieczeniowego – podstawą prawną przetwarzania danych jest
        niezbędność przetwarzania do realizacji prawnie uzasadnionego interesu
        administratora; jakim jest zapewnienie możliwość dochodzenia oraz obrony
        przed roszczeniami, w rozumieniu art. 6 ust. 1 pkt f RODO.
      </StyledText>
      <StyledText>
        <strong>
          3. Informacja o zautomatyzowanym podejmowaniu decyzji, w tym
          profilowaniu.
        </strong>
        W związku z przetwarzaniem Pani/Pana danych osobowych, decyzje dotyczące
        Pani/Pana będą podejmowane w sposób zautomatyzowany (bez wpływu
        człowieka). Decyzje te będą dotyczyły wysokości składki
        ubezpieczeniowej. Decyzje będą podejmowane na podstawie Pani /Pana
        danych obejmujących w szczególności imię i nazwisko, numeru PESEL, data
        urodzenia, miejsce zamieszkania). Decyzje będą oparte o profilowanie,
        tj. automatyczną ocenę ryzyka ubezpieczeniowego zawarcia z Panią/Panem
        umowy ubezpieczenia.
      </StyledText>
      <StyledText>
        4. Informacja o wymogu podania danych osobowych. Podanie danych
        osobowych w związku z zawieraną umową jest konieczne do zawarcia i
        wykonywania umowy ubezpieczenia oraz do dokonania oceny ryzyka
        ubezpieczeniowego - bez podania danych osobowych nie jest możliwe
        zawarcie umowy ubezpieczenia oraz dokonanie oceny ryzyka. Podanie danych
        osobowych w celach marketingowych jest dobrowolne.
      </StyledText>
      <StyledText>
        <strong>5. Okres przechowywania danych.</strong> Pani/Pana dane osobowe
        będą przechowywane do momentu przedawnienia roszczeń lub do momentu
        wygaśnięcia obowiązku przechowywania danych wynikającego z przepisów
        prawa. Administrator przestanie wcześniej przetwarzać dane
        wykorzystywane do celów profilowania i analitycznych jeżeli zgłosi
        Pani/Pan sprzeciw wobec przetwarzania Pani/Pana danych w tych celach.
      </StyledText>
      <StyledText>
        <strong>6. Przekazywanie danych.</strong> 1) Pani/Pana dane osobowe mogą
        być udostępnione podmiotom i organom upoważnionym do przetwarzania tych
        danych na podstawie przepisów prawa oraz zakładom ubezpieczeń
        współpracującym z Ryszard Sępowicz z siedzibą w Kielcach oraz do:
        Alwis&Secura Sp. z o.o.., jako agenta ubezpieczeniowego (w ramach
        pośrednictwa ubezpieczeniowego); Adamczuk-Serwis Finansowy Grzegorz
        Adamczuk z siedzibą w Siedlcach jako agenta ubezpieczeniowego (w ramach
        pośrednictwa ubezpieczeniowego); ASF PREMIUM sp. z o.o. z siedzibą w
        Siedlcach jako agenta ubezpieczeniowego (w ramach pośrednictwa
        ubezpieczeniowego); 2) Pani/Pana dane osobowe mogą być przekazywane
        podmiotom przetwarzającym dane osobowe na zlecenie administratora, tj.
        dostawcom usług IT lub współpracującym z Ryszard Sępowicz z siedzibą w
        Kielcach partnerom, w ramach wykonywania przez nich czynności
        agencyjnych, przy czym takie podmioty przetwarzają dane na podstawie
        umowy z administratorem i wyłącznie zgodnie z poleceniami
        administratora. 3) Pani/Pana dane osobowe nie będą przekazywane do
        odbiorców mających siedzibę lub przetwarzających dane osobowe w
        państwach poza Europejskim Obszarem Gospodarczym (EOG).
      </StyledText>
      <StyledText>
        <strong>7. Pani/Pana prawa.</strong> 1) Przysługuje Pani/Panu prawo
        dostępu do swoich danych osobowych oraz prawo żądania ich sprostowania,
        ich usunięcia lub ograniczenia ich przetwarzania. 2) W zakresie, w jakim
        podstawą przetwarzania Pani/Pana danych osobowych jest zgoda, ma
        Pani/Pan prawo wycofania zgody. Wycofanie zgody nie ma wpływu na
        zgodność z prawem przetwarzania, którego dokonano na podstawie zgody
        przed jej wycofaniem. 3) W zakresie, w jakim podstawą przetwarzania
        Pani/Pana danych osobowych jest przesłanka niezbędności przetwarzania do
        realizacji celu wynikającego z prawnie uzasadnionego interesu
        administratora, przysługuje Pani/Panu prawo wniesienia sprzeciwu wobec
        przetwarzania Pani/Pana danych osobowych. W szczególności przysługuje
        Pani/Panu prawo sprzeciwu wobec przetwarzania danych na potrzeby
        profilowania. 4) W zakresie, w jakim Pani/Pana dane są przetwarzane w
        celu zawarcia i wykonywania umowy ubezpieczenia lub przetwarzane na
        podstawie zgody - przysługuje Pani/Panu także prawo do przenoszenia
        danych osobowych, tj. do otrzymania od administratora Pani/Pana danych
        osobowych, w ustrukturyzowanym, powszechnie używanym formacie nadającym
        się do odczytu maszynowego. Może Pani/Pan przesłać te dane innemu
        administratorowi danych. 5) W związku ze zautomatyzowanym podejmowaniem
        decyzji, ma Pani/Pan prawo do zakwestionowania tej decyzji, prawo do
        wyrażenia własnego stanowiska oraz wystąpienia o ponowne
        przeanalizowanie Pani/Pana sprawy i podjęcie decyzji przez pracownika
        zakładu ubezpieczeń współpracującego Ryszard Sępowicz z siedzibą w
        Kielcach. 6) Przysługuje Pani/Panu prawo wniesienia skargi do organu
        nadzorczego zajmującego się ochroną danych osobowych w Polsce (Prezesa
        Urzędu Ochrony Danych Osobowych).
      </StyledText>
      <StyledText>
        <strong>
          W celu skorzystania z powyższych praw należy skontaktować się z
          administratorem, korzystając ze wskazanych wyżej danych kontaktowych
          lub bezpośrednio z organem nadzorczym (w zakresie prawa do wniesienia
          skargi do tego organu).
        </strong>
      </StyledText>
      <StyledText>
        Zaznaczając wyrażasz zgodę, na otrzymywanie od Ryszard Sępowicz z
        siedzibą w Kielcach informacji handlowej drogą elektroniczną, przy
        wykorzystaniu podanego adresu e-mail lub wiadomosci MMS/SMS na podany
        numer telefonu, w oparciu o art. 10 Ustawy z 18 lipca 2002r., o
        świadczeniu usług drogą elektroniczną.
      </StyledText>
      <StyledText>
        Zaznaczając wyrażasz zgodę, na używanie telekomunikacyjnych urządzeń dla
        celów marketingu bezpośredniego przez Ryszard Sępowicz z siedzibą w
        Kielcach przy wykorzystaniu podanego numeru telefonu, w oparciu o art.
        172 Ustawy z dnia 16 lipca 2004r., Prawo telekomunikacyjne.
      </StyledText>
    </StyledContainer>
  );
};

export default PopupRODO;
