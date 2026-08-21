import type { ExamSet } from '../types'

// Four additional standalone full practice tests (exam-set-7 .. exam-set-10),
// matching the format and depth of the sets in examSets.ts: each set mixes
// four unrelated topics across its reading/listening/writing/speaking
// sections, the way a genuine YKI keskitaso exam paper does. 100% original
// material — not copied from any real exam or book.
export const EXTRA_EXAM_SETS: ExamSet[] = [
  {
    id: 'exam-set-7',
    title: 'Koepaketti 7',
    titleBn: 'পরীক্ষার সেট ৭',
    level: ['B1', 'B2'],
    reading: {
      id: 'r-exam7',
      weekId: 1061,
      title: 'Uusi liikuntaseura etsii jäseniä',
      level: 'B1',
      textFi: `Uusi liikuntaseura etsii jäseniä kaikenikäisille

Kaupunkiin on perustettu uusi liikuntaseura nimeltä Vireä Kaupunki ry, jonka tavoitteena on tarjota edullista ja monipuolista liikuntaa kaikenikäisille asukkaille taitotasosta riippumatta. Seura aloittaa toimintansa syyskuun alussa, ja jäseneksi voi liittyä kuka tahansa, ikään tai aiempaan kokemukseen katsomatta.

Seuran ohjelmassa on tarjolla useita eri lajeja: sulkapalloa, koripalloa, uintia sekä kevyttä kuntosaliharjoittelua. Jokaiselle lajille on omat vuoronsa viikossa, ja aloittelijoille on lisäksi tarjolla erillisiä alkeisryhmiä, joissa ohjaaja opastaa perusteet rauhallisessa tahdissa. Seuran puheenjohtaja kertoo, että erityisesti aikuisia, jotka eivät ole harrastaneet liikuntaa vuosiin, kannustetaan rohkeasti mukaan.

Jäsenmaksu on 15 euroa kuukaudessa, ja siihen sisältyy pääsy kaikkiin seuran järjestämiin vuoroihin ilman erillisiä lisämaksuja. Uusille jäsenille tarjotaan myös ilmainen kokeilukuukausi, jonka aikana voi tutustua eri lajeihin ennen sitoutumista. Seuran tiloissa on lisäksi pukuhuoneet ja suihkut, joten harjoitusten jälkeen ei tarvitse kiirehtiä kotiin peseytymään.

Seura toivoo, että toiminta houkuttelisi mukaan erityisesti niitä, joille liikuntaharrastuksen aloittaminen on tuntunut kynnykseltä joko ajanpuutteen tai kustannusten vuoksi. Lisätietoja ja ilmoittautumisen saa seuran verkkosivuilta tai soittamalla toimistoon arkisin.`,
      questions: [
        {
          id: 'q1',
          question: 'Kenelle uusi liikuntaseura on tarkoitettu?',
          options: [
            'Vain kilpaurheilijoille',
            'Kaikenikäisille asukkaille taitotasosta riippumatta',
            'Vain lapsille ja nuorille',
            'Vain seuran perustajille',
          ],
          correctIndex: 1,
        },
        {
          id: 'q2',
          question: 'Mitä lajeja seuran ohjelmassa on tarjolla?',
          options: [
            'Vain jalkapalloa',
            'Sulkapalloa, koripalloa, uintia ja kuntosaliharjoittelua',
            'Vain uintia',
            'Ainoastaan joukkuelajeja',
          ],
          correctIndex: 1,
        },
        {
          id: 'q3',
          question: 'Mitä jäsenmaksuun sisältyy?',
          options: [
            'Vain yhteen lajiin osallistuminen',
            'Pääsy kaikkiin seuran vuoroihin ilman lisämaksuja',
            'Ainoastaan pukuhuoneiden käyttö',
            'Yksityistunnit ohjaajan kanssa',
          ],
          correctIndex: 1,
        },
        {
          id: 'q4',
          question: 'Mitä uusille jäsenille tarjotaan ennen sitoutumista?',
          options: [
            'Ilmainen kokeilukuukausi',
            'Puolen vuoden jäsenyys ilmaiseksi',
            'Ilmainen varustepaketti',
            'Alennus toisesta jäsenyydestä',
          ],
          correctIndex: 0,
        },
        {
          id: 'q5',
          question: 'Ketä seura toivoo tekstin mukaan erityisesti saavansa mukaan?',
          options: [
            'Vain entisiä kilpaurheilijoita',
            'Niitä, joille liikunnan aloittaminen on tuntunut kynnykseltä ajan tai kustannusten vuoksi',
            'Vain seuran hallituksen jäseniä',
            'Vain nuoria aikuisia',
          ],
          correctIndex: 1,
        },
      ],
    },
    listening: {
      id: 'l-exam7',
      weekId: 1062,
      title: 'Naapurit keskustelevat pensasaidasta',
      level: 'B1',
      scriptFi: `Marja: Hei Kalle, voisinko puhua kanssasi hetken teidän pihanne pensasaidasta? Se on kasvanut viime kesästä aika paljon.
Kalle: Hei Marja, toki. Onko siitä tullut jotain ongelmaa?
Marja: No, se varjostaa nyt meidän parveketta iltapäivisin, ja lisäksi oksat ovat alkaneet työntyä meidän puolelle aitaa.
Kalle: Ai, en ollut huomannut sitä. Emme ole leikanneet aitaa tänä kesänä ollenkaan, joten se on varmasti kasvanut aika villisti.
Marja: Ymmärrän kyllä, ettei se ole mikään tahallinen asia. Mietin vain, voisitteko leikata sitä hieman matalammaksi, jotta valo pääsisi taas parvekkeellemme.
Kalle: Se onnistuu ilman muuta. Voisimmeko sopia, että leikkaan aidan tämän viikonlopun aikana? Voin myös siistiä ne oksat, jotka ovat teidän puolellanne.
Marja: Se olisi todella mukavaa, kiitos ymmärryksestä. Ja jos haluat, voin auttaa keräämään leikatut oksat pois.
Kalle: Kiitos tarjouksesta, mutta hoidan kyllä sen itse. Pahoittelen, ettei tähän ole tullut puututtua aiemmin.
Marja: Ei se mitään, hyvä että asiasta pystyi puhumaan suoraan ja rauhallisesti.`,
      questions: [
        {
          id: 'q1',
          question: 'Mikä ongelma Marjalla on pensasaidan kanssa?',
          options: [
            'Se on kuollut kokonaan',
            'Se varjostaa parveketta ja oksat työntyvät hänen puolelleen',
            'Se on liian matala',
            'Se on väärän värinen',
          ],
          correctIndex: 1,
        },
        {
          id: 'q2',
          question: 'Miksi aitaa ei ole leikattu tänä kesänä Kallen mukaan?',
          options: [
            'He eivät ole leikanneet sitä ollenkaan tänä kesänä',
            'Leikkuri on rikki',
            'He eivät saa lupaa leikata sitä',
            'He unohtivat, että aita on olemassa',
          ],
          correctIndex: 0,
        },
        {
          id: 'q3',
          question: 'Mihin ratkaisuun Marja ja Kalle päätyvät?',
          options: [
            'Kalle leikkaa aidan viikonloppuna ja siistii Marjan puolen oksat',
            'He päättävät kaataa koko aidan',
            'Marja leikkaa aidan itse ilman lupaa',
            'He eivät pääse sopuun ja riitaantuvat',
          ],
          correctIndex: 0,
        },
        {
          id: 'q4',
          question: 'Millainen sävy keskustelulla on kokonaisuutena?',
          options: [
            'Vihainen ja syyttelevä',
            'Rauhallinen ja ratkaisukeskeinen',
            'Välinpitämätön',
            'Uhkaava',
          ],
          correctIndex: 1,
        },
      ],
    },
    writing: {
      id: 'w-exam7',
      weekId: 1063,
      title: 'Palautuspyyntö: Väärä tuote verkkokaupasta',
      level: 'B1',
      instructions:
        'Kirjoita viesti verkkokaupan asiakaspalveluun, jossa pyydät palauttamaan tilaamasi tuotteen. Kerro, mitä tilasit ja milloin, mikä tuotteessa on vikaa tai miksi se ei vastaa odotuksiasi (esim. väärä koko, väri tai malli), ja mitä toivot tapahtuvan seuraavaksi (rahat takaisin vai vaihto).',
      minWords: 130,
      maxWords: 200,
      timeMinutes: 25,
      rubric: [
        'Kerroit heti alussa, mitä tilasit ja milloin.',
        'Selitit selkeästi, miksi tuote ei vastaa odotuksiasi.',
        'Ilmaisit selvästi, haluatko rahat takaisin vai vaihdon.',
        'Käytit kohteliasta ja asiallista kieltä koko viestin ajan.',
        'Viesti on lyhyt mutta looginen: aloitus, selitys, pyyntö.',
      ],
      modelAnswer:
        'Hyvä asiakaspalvelu,\n\nTilasin verkkokaupastanne talvitakin kokoa M viime viikon tiistaina, ja se saapui tänään. Valitettavasti takki on selvästi liian pieni, vaikka valitsin kokotaulukon mukaan oikean koon. Lisäksi vetoketju juuttuu jatkuvasti kiinni, mikä tekee takin käytöstä hankalaa.\n\nToivoisin, että voisin vaihtaa takin kokoon L, mikäli se on varastossanne. Jos kokoa L ei enää ole saatavilla, toivon rahojen palautusta kokonaisuudessaan.\n\nLähetän mielelläni takin takaisin, kunhan saan ohjeet palautusta varten. Kiitos etukäteen avustanne.\n\nYstävällisin terveisin,\nAsiakas',
    },
    speaking: {
      id: 's-exam7',
      weekId: 1064,
      title: 'Kerro, miten vuodenajat vaikuttavat mielialaasi',
      level: 'B1',
      instructions:
        'Kerro, miten eri vuodenajat vaikuttavat mielialaasi ja jaksamiseesi. Mikä vuodenaika on sinulle mieluisin ja miksi, ja onko jokin vuodenaika sinulle erityisen raskas?',
      prepSeconds: 45,
      speakSeconds: 90,
      helpfulPhrases: [
        'Suosikkivuodenaikani on...',
        'Se saa minut tuntemaan itseni...',
        'Vaikeinta minulle on...',
        'Talvella/kesällä minä yleensä...',
        'Piristän itseäni esimerkiksi...',
      ],
    },
  },

  {
    id: 'exam-set-8',
    title: 'Koepaketti 8',
    titleBn: 'পরীক্ষার সেট ৮',
    level: ['B1', 'B2'],
    reading: {
      id: 'r-exam8',
      weekId: 1071,
      title: 'Pieniä muutoksia kohti kestävämpää arkea',
      level: 'B2',
      textFi: `Pieniä muutoksia kohti kestävämpää arkea

Yhä useampi suomalaiskoti pohtii, miten omaa arkea voisi muuttaa ympäristöystävällisemmäksi ilman, että elämästä tulee hankalaa tai kallista. Asiantuntijoiden mukaan suurimmat vaikutukset saadaan usein aikaan pienillä, mutta säännöllisillä muutoksilla, ei suurilla kertaluonteisilla investoinneilla.

Yksi helpoimmista tavoista on ruokahävikin vähentäminen. Tutkimusten mukaan keskivertokotitalous heittää pois merkittävän määrän syömäkelpoista ruokaa vuosittain, usein siksi, ettei ruoanlaittoa ole suunniteltu etukäteen. Ostoslistan tekeminen ja jääkaapin sisällön tarkistaminen ennen kauppareissua voi vähentää hävikkiä huomattavasti. Myös ylijääneiden ruokien pakastaminen myöhempää käyttöä varten kannattaa.

Toinen keskeinen alue on energiankulutus kotona. Pienetkin teot, kuten valojen sammuttaminen tyhjistä huoneista, laitteiden sammuttaminen valmiustilan sijaan kokonaan ja lämpötilan hienoinen laskeminen talvella, voivat vaikuttaa sekä ympäristöön että kotitalouden kuluihin. Monissa kunnissa tarjotaan myös ilmaista energianeuvontaa, joka auttaa löytämään juuri omaan kotiin sopivia ratkaisuja.

Asiantuntijat korostavat, ettei tavoitteena tarvitse olla täydellisyys. Jo se, että kotitalous ottaa käyttöön muutaman uuden tavan ja pitää niistä kiinni, vaikuttaa pidemmällä aikavälillä enemmän kuin yksittäinen suuri, mutta lyhytaikainen ponnistus.`,
      questions: [
        {
          id: 'q1',
          question: 'Mitä asiantuntijat sanovat suurimpien vaikutusten syntyvän mistä?',
          options: [
            'Suurista kertaluonteisista investoinneista',
            'Pienistä mutta säännöllisistä muutoksista',
            'Vain uuden teknologian hankkimisesta',
            'Täydellisestä elämäntavan muutoksesta yhdessä yössä',
          ],
          correctIndex: 1,
        },
        {
          id: 'q2',
          question: 'Miksi keskivertokotitalous heittää pois ruokaa tekstin mukaan?',
          options: [
            'Koska ruoka on liian kallista',
            'Koska ruoanlaittoa ei ole suunniteltu etukäteen',
            'Koska ruokaa ei voi pakastaa',
            'Koska kaupat myyvät liian vähän ruokaa',
          ],
          correctIndex: 1,
        },
        {
          id: 'q3',
          question: 'Mikä esimerkki liittyy energiankulutuksen vähentämiseen kotona?',
          options: [
            'Ruoanlaiton lopettaminen kokonaan',
            'Valojen sammuttaminen tyhjistä huoneista ja laitteiden sammuttaminen kokonaan',
            'Kodin lämmityksen nostaminen mahdollisimman korkeaksi',
            'Kaikkien sähkölaitteiden hankkiminen uusina',
          ],
          correctIndex: 1,
        },
        {
          id: 'q4',
          question: 'Mitä kunnat tarjoavat tekstin mukaan energia-asioissa?',
          options: [
            'Pakollisia energiakursseja',
            'Ilmaista energianeuvontaa',
            'Rahallista sakkoa suurkuluttajille',
            'Ilmaisia sähkölaitteita',
          ],
          correctIndex: 1,
        },
        {
          id: 'q5',
          question: 'Mikä on tekstin keskeinen viesti kestävästä arjesta?',
          options: [
            'Täydellisyyttä on tavoiteltava heti alusta lähtien',
            'Muutamien uusien tapojen omaksuminen ja niistä kiinni pitäminen vaikuttaa pidemmällä aikavälillä eniten',
            'Vain suuret investoinnit todella auttavat',
            'Kestävä arki ei ole mahdollista tavalliselle kotitaloudelle',
          ],
          correctIndex: 1,
        },
      ],
    },
    listening: {
      id: 'l-exam8',
      weekId: 1072,
      title: 'Työkaverit selvittävät erimielisyyden',
      level: 'B2',
      scriptFi: `Timo: Hei Reetta, voisimmeko jutella hetken siitä eilisestä kokouksesta? Tuntui, että jäin hieman ulkopuoliseksi, kun esittelit projektin tulokset.
Reetta: Hei Timo, kerro toki, mikä jäi häiritsemään.
Timo: No, tein ison osan datan analysoinnista, mutta kokouksessa vaikutti siltä, että koko työ esiteltiin sinun tekemänäsi. Se harmitti minua vähän.
Reetta: Ymmärrän kyllä, että se voi tuntua ikävältä. En tarkoittanut jättää sinua mainitsematta, kiireessä vain unohtui sanoa erikseen, kuka teki minkäkin osan.
Timo: Uskon kyllä, ettei se ollut tarkoituksellista. Mutta jatkossa toivoisin, että työnjako mainittaisiin selkeästi, kun tuloksia esitellään muille.
Reetta: Se on ihan reilu pyyntö. Voisimmeko jatkossa käydä yhdessä läpi, mitä esittelyssä sanotaan, ennen kuin menemme kokoukseen?
Timo: Se kuulostaisi hyvältä. Näin vältettäisiin väärinkäsitykset jatkossa.
Reetta: Sovitaan niin. Ja pahoittelen vielä, ettet tuntenut oloasi huomioiduksi eilen.
Timo: Kiitos, että otit tämän hyvin vastaan. Nyt oloni on paljon parempi.`,
      questions: [
        {
          id: 'q1',
          question: 'Mikä Timoa harmitti kokouksen jälkeen?',
          options: [
            'Reetta ei tullut kokoukseen',
            'Hänen osuuttaan työstä ei mainittu, kun tuloksia esiteltiin',
            'Kokous kesti liian kauan',
            'Hän ei saanut osallistua kokoukseen lainkaan',
          ],
          correctIndex: 1,
        },
        {
          id: 'q2',
          question: 'Miten Reetta selittää tapahtunutta?',
          options: [
            'Hän myöntää tehneensä sen tahallaan',
            'Se johtui kiireestä eikä ollut tarkoituksellista',
            'Hän kieltää koko tilanteen tapahtuneen',
            'Hän syyttää siitä esimiestä',
          ],
          correctIndex: 1,
        },
        {
          id: 'q3',
          question: 'Mistä Timo ja Reetta sopivat jatkoa varten?',
          options: [
            'He eivät sovi mistään',
            'He päättävät käydä esittelyt yhdessä läpi ennen kokouksia',
            'Timo lopettaa yhteistyön Reetan kanssa',
            'He päättävät, ettei työnjakoa tarvitse enää mainita',
          ],
          correctIndex: 1,
        },
        {
          id: 'q4',
          question: 'Millainen keskustelun lopputulos on?',
          options: [
            'Molemmat jäävät edelleen vihaisiksi',
            'Väärinkäsitys selvitetään ja molemmat tuntevat olonsa paremmaksi',
            'Reetta ei suostu kuuntelemaan Timoa',
            'Asia jää täysin ratkaisematta',
          ],
          correctIndex: 1,
        },
      ],
    },
    writing: {
      id: 'w-exam8',
      weekId: 1073,
      title: 'Kertomus: Vapaaehtoistyökokemus',
      level: 'B2',
      instructions:
        'Kirjoita henkilökohtainen kertomus vapaaehtoistyöstä, jota olet tehnyt tai jota kuvittelet tekeväsi. Kerro, missä ja miten toimit vapaaehtoisena, miksi päätit ryhtyä vapaaehtoiseksi, ja mitä opit tai koit kokemuksen aikana.',
      minWords: 160,
      maxWords: 230,
      timeMinutes: 35,
      rubric: [
        'Kerroit, missä ja millaisessa vapaaehtoistyössä toimit.',
        'Selitit, miksi päätit ryhtyä vapaaehtoiseksi.',
        'Kuvailit konkreettisesti, mitä teit ja millaisia ihmisiä tapasit.',
        'Kerroit, mitä opit tai miten kokemus vaikutti sinuun.',
        'Teksti etenee johdonmukaisesti alusta loppuun.',
      ],
      modelAnswer:
        'Aloitin vapaaehtoistyön paikallisessa ruoka-aputoiminnassa pari vuotta sitten. Päätin ryhtyä vapaaehtoiseksi, koska halusin tehdä jotain konkreettista oman kaupunkini hyväksi enkä vain seurata sivusta, kun uutisissa puhuttiin kasvavasta ruokahävikistä ja toisaalta ihmisistä, joilla ei ollut varaa ruokaan.\n\nAluksi tehtäväni oli lähinnä lajitella lahjoitettuja elintarvikkeita ja pakata niitä jaettaviksi. Vähitellen pääsin myös mukaan itse jakotilaisuuksiin, joissa kohtasin hyvin erilaisia ihmisiä: opiskelijoita, eläkeläisiä ja perheitä, joilla kaikilla oli oma tarinansa.\n\nYllätyin siitä, kuinka paljon pienikin apu voi merkitä ihmiselle. Moni kiitti paitsi ruoasta, myös siitä, että joku ylipäätään kysyi kuulumisia ja jaksoi kuunnella. Opin, ettei vapaaehtoistyö ole vain antamista, vaan myös saamista: sain uusia ystäviä ja laajemman ymmärryksen omasta yhteisöstäni.\n\nTämä kokemus on saanut minut arvostamaan omaa arkeani enemmän ja muistuttaa säännöllisesti siitä, kuinka paljon pienillä teoilla voi olla merkitystä toisen ihmisen päivään.',
    },
    speaking: {
      id: 's-exam8',
      weekId: 1074,
      title: 'Kerro matkasuunnitelmistasi ulkomaille',
      level: 'B1',
      instructions:
        'Kerro suunnitelmasta matkustaa ulkomaille, joko todellisesta tai kuvitteellisesta. Kerro, minne haluaisit matkustaa, milloin ja kenen kanssa, ja mitä haluaisit tehdä matkalla.',
      prepSeconds: 45,
      speakSeconds: 90,
      helpfulPhrases: [
        'Haluaisin matkustaa...',
        'Suunnittelen matkustavani...',
        'Matkustaisin yhdessä...',
        'Matkalla haluaisin ehdottomasti...',
        'Odotan matkalta erityisesti...',
      ],
    },
  },

  {
    id: 'exam-set-9',
    title: 'Koepaketti 9',
    titleBn: 'পরীক্ষার সেট ৯',
    level: ['B1', 'B2'],
    reading: {
      id: 'r-exam9',
      weekId: 1081,
      title: 'Kaupungin kulttuurifestivaali kerää jälleen yleisöä',
      level: 'B1',
      textFi: `Kaupungin kulttuurifestivaali kerää jälleen yleisöä

Kaupungin vuotuinen kulttuurifestivaali järjestetään tänä vuonna jo kymmenettä kertaa, ja tapahtuma on kasvanut alkuvuosien pienestä puistotapahtumasta koko keskustan valtaavaksi viikonlopuksi. Festivaalilla esiintyy tänä vuonna yli neljäkymmentä eri esiintyjää musiikin, tanssin ja teatterin aloilta, ja mukana on sekä paikallisia että kansainvälisiä ryhmiä.

Ohjelma on suunniteltu niin, että jokaiselle löytyisi jotain: lapsille on oma ohjelma-alueensa, jossa järjestetään kädentaitopajoja ja nukketeatteria, kun taas iltaisin lavalla nähdään suurempia musiikkiesityksiä. Uutena osana ohjelmaa festivaalille on tänä vuonna lisätty myös ruokatori, jossa eri ravintolat ja katukeittiöt tarjoavat maistiaisia paikallisista ja kansainvälisistä keittiöistä.

Festivaalin järjestäjät kertovat, että tapahtuman tarkoituksena on tuoda kaupungin eri kulttuurit ja yhteisöt yhteen samaan tilaan. Suuri osa ohjelmasta on maksutonta, ja vain muutamiin iltanäytöksiin tarvitaan erillinen lippu. Järjestäjät toivovat, että matala kynnys osallistua houkuttelisi paikalle myös niitä, jotka eivät yleensä käy kulttuuritapahtumissa.

Festivaali järjestetään elokuun viimeisenä viikonloppuna, ja sään ollessa huono osa ohjelmasta siirretään lähellä sijaitsevaan monitoimitaloon. Tarkempi ohjelma julkaistaan festivaalin verkkosivuilla lähempänä tapahtumaa.`,
      questions: [
        {
          id: 'q1',
          question: 'Monesko kerta festivaali järjestetään tänä vuonna?',
          options: ['Ensimmäinen', 'Viides', 'Kymmenes', 'Kahdeskymmenes'],
          correctIndex: 2,
        },
        {
          id: 'q2',
          question: 'Mitä uutta ohjelmaan on lisätty tänä vuonna?',
          options: ['Urheilukilpailuja', 'Ruokatori', 'Automessut', 'Kirjamyynti'],
          correctIndex: 1,
        },
        {
          id: 'q3',
          question: 'Mikä on festivaalin järjestäjien mukaan tapahtuman tarkoitus?',
          options: [
            'Kerätä mahdollisimman paljon rahaa',
            'Tuoda kaupungin eri kulttuurit ja yhteisöt yhteen',
            'Kilpailla naapurikaupunkien kanssa',
            'Mainostaa yhtä yritystä',
          ],
          correctIndex: 1,
        },
        {
          id: 'q4',
          question: 'Miten maksullisuus on järjestetty festivaalilla?',
          options: [
            'Koko festivaali on maksullinen',
            'Suuri osa ohjelmasta on maksutonta, vain osaan iltanäytöksistä tarvitaan lippu',
            'Vain lapset pääsevät ilmaiseksi',
            'Festivaali on täysin maksuton kaikille tapahtumille',
          ],
          correctIndex: 1,
        },
        {
          id: 'q5',
          question: 'Mitä tapahtuu, jos sää on festivaalin aikana huono?',
          options: [
            'Koko festivaali perutaan',
            'Ohjelma jatkuu ulkona säästä huolimatta',
            'Osa ohjelmasta siirretään lähellä olevaan monitoimitaloon',
            'Festivaali siirretään seuraavalle vuodelle',
          ],
          correctIndex: 2,
        },
      ],
    },
    listening: {
      id: 'l-exam9',
      weekId: 1082,
      title: 'Vanhempainvartti opettajan kanssa',
      level: 'B2',
      scriptFi: `Opettaja: Kiva kun pääsitte tulemaan, käydään läpi, miten koulunkäynti on sujunut. Ylipäätään Aleksi on edistynyt hyvin, erityisesti matematiikassa.
Vanhempi: Se on hienoa kuulla. Kotona hän on kyllä valittanut, että matikan läksyt tuntuvat vaikeilta.
Opettaja: Se on aika tyypillistä juuri nyt, kun käsittelemme uutta aihetta. Suosittelisin, että hän harjoittelisi kotona muutaman lisätehtävän viikossa, mutta ei liikaa kerralla, ettei into lopu.
Vanhempi: Selvä, voisitteko suositella jotain tiettyä materiaalia?
Opettaja: Voin lähettää teille linkin harjoitussivustolle, joka sopii hyvin hänen tasolleen. Toinen asia, josta halusin puhua, on hänen osallistumisensa tunneilla: hän on hiljaisempi kuin moni muu, eikä nosta kättä kovin usein.
Vanhempi: Se ei yllätä, hän on aina ollut hieman ujompi lapsi.
Opettaja: Ymmärrän. Ehdottaisin, että kokeilisimme pienryhmätehtäviä enemmän, jolloin hänen voisi olla helpompi osallistua kuin koko luokan edessä.
Vanhempi: Kuulostaa hyvältä idealta. Kiitos, että kerroitte tästä suoraan.
Opettaja: Totta kai, on tärkeää, että pysymme yhteistyössä hänen edistymisensä tukemiseksi.`,
      questions: [
        {
          id: 'q1',
          question: 'Missä aineessa Aleksi on opettajan mukaan edistynyt hyvin?',
          options: ['Äidinkielessä', 'Matematiikassa', 'Kuvataiteessa', 'Liikunnassa'],
          correctIndex: 1,
        },
        {
          id: 'q2',
          question: 'Mitä opettaja suosittelee matematiikan harjoitteluun kotona?',
          options: [
            'Ei mitään lisäharjoittelua',
            'Muutamaa lisätehtävää viikossa, ei liikaa kerralla',
            'Useita tunteja päivittäistä harjoittelua',
            'Yksityisopettajan palkkaamista',
          ],
          correctIndex: 1,
        },
        {
          id: 'q3',
          question: 'Mitä opettaja kertoo Aleksin osallistumisesta tunneilla?',
          options: [
            'Hän häiritsee tunteja jatkuvasti',
            'Hän on hiljaisempi eikä nosta kättä usein',
            'Hän ei koskaan tule tunneille',
            'Hän puhuu liikaa muiden päälle',
          ],
          correctIndex: 1,
        },
        {
          id: 'q4',
          question: 'Mitä opettaja ehdottaa osallistumisen tueksi?',
          options: [
            'Aleksin siirtämistä toiseen luokkaan',
            'Pienryhmätehtävien lisäämistä',
            'Vanhempien osallistumista jokaiselle tunnille',
            'Kotitehtävien vähentämistä kokonaan',
          ],
          correctIndex: 1,
        },
      ],
    },
    writing: {
      id: 'w-exam9',
      weekId: 1083,
      title: 'Kertomus: Kodin remontti',
      level: 'B2',
      instructions:
        'Kirjoita kertomus kodin remontista, jonka olet tehnyt tai jota suunnittelet. Kerro, mitä remontoit ja miksi, mitä haasteita kohtasit matkan varrella (esim. budjetti, aikataulu tai yllätykset), ja millainen lopputulos oli tai millaiseksi arvelet sen tulevan.',
      minWords: 170,
      maxWords: 240,
      timeMinutes: 40,
      rubric: [
        'Kerroit, mitä remontoit ja miksi remontti tehtiin.',
        'Kuvailit konkreettisesti kohtaamiasi haasteita.',
        'Kerroit, miten haasteista selvittiin tai miten niitä ratkottiin.',
        'Kuvailit lopputulosta tai odotettua lopputulosta.',
        'Käytit sujuvasti aikamuotoja tapahtumien järjestyksen ilmaisemiseen.',
      ],
      modelAnswer:
        'Viime keväänä päätimme puolisoni kanssa remontoida keittiömme, joka oli ollut samannäköinen jo yli kaksikymmentä vuotta. Kaapit olivat kuluneet ja tila tuntui ahtaalta, joten halusimme sekä uudistaa ilmeen että saada käytännöllisemmän pohjaratkaisun.\n\nSuunnitteluvaihe sujui hyvin, mutta itse remontin aikana kohtasimme useita yllätyksiä. Kun vanhoja kaappeja purettiin, seinästä paljastui vanha, huonokuntoinen putki, joka piti vaihtaa ennen kuin työtä voitiin jatkaa. Tämä viivästytti aikataulua lähes kahdella viikolla ja nosti budjettia enemmän kuin olimme suunnitelleet.\n\nYritimme pysyä rauhallisina ja etsimme yhdessä remonttifirman kanssa ratkaisuja, jotka eivät venyttäisi aikataulua liikaa. Lopulta putkiongelma saatiin korjattua, ja remontti jatkui suunnitellusti.\n\nNyt, kun keittiö on valmis, olemme erittäin tyytyväisiä lopputulokseen. Tila on avarampi ja käytännöllisempi kuin ennen, ja vaikka prosessi oli välillä stressaava, opimme, että remonteissa kannattaa aina varautua pieniin yllätyksiin sekä ajallisesti että rahallisesti.',
    },
    speaking: {
      id: 's-exam9',
      weekId: 1084,
      title: 'Kerro ylennyksestä tai urakehityksestä',
      level: 'B1',
      instructions:
        'Kerro tilanteesta, jossa sinä tai joku tuntemasi henkilö on saanut ylennyksen tai edennyt urallaan. Kerro, mitä tapahtui, mitä ylennys vaati, ja miten se vaikutti kyseisen henkilön elämään.',
      prepSeconds: 45,
      speakSeconds: 100,
      helpfulPhrases: [
        'Haluan kertoa tilanteesta, jossa...',
        'Ylennys tuli, kun...',
        'Se vaati muun muassa...',
        'Uusi asema toi mukanaan...',
        'Kokonaisuudessaan tämä vaikutti...',
      ],
    },
  },

  {
    id: 'exam-set-10',
    title: 'Koepaketti 10',
    titleBn: 'পরীক্ষার সেট ১০',
    level: ['B1', 'B2'],
    reading: {
      id: 'r-exam10',
      weekId: 1091,
      title: 'Asukkaat valittavat bussiliikenteen myöhästymisistä',
      level: 'B2',
      textFi: `Asukkaat valittavat bussiliikenteen myöhästymisistä

Kaupungin joukkoliikenneyhtiölle on viime kuukausina tullut poikkeuksellisen paljon palautetta bussien myöhästymisistä, erityisesti ruuhka-aikoina. Monet työmatkalaiset kertovat joutuneensa odottamaan pysäkillä jopa kaksikymmentä minuuttia yli aikataulun, mikä on aiheuttanut myöhästymisiä töistä ja koulusta.

Joukkoliikenneyhtiön mukaan myöhästymisten taustalla on useita syitä: kaupungin katutöiden aiheuttamat kiertotiet, kuljettajapula sekä osittain vanhentunut kalusto, joka rikkoutuu tavallista useammin. Yhtiö myöntää, että tilanne on ollut matkustajille turhauttava, ja pahoittelee aiheutunutta haittaa.

Osa asukkaista on ehdottanut, että aikataulut julkaistaisiin realistisemmiksi, jotta ne vastaisivat paremmin todellista tilannetta ruuhka-aikoina, sen sijaan että aikataulua yritettäisiin noudattaa mahdottomissa olosuhteissa. Toiset puolestaan toivovat lisää reaaliaikaista tietoa pysäkeille, jotta matkustajat tietäisivät jo etukäteen, jos bussi on myöhässä.

Joukkoliikenneyhtiö on luvannut parantaa tilannetta lähikuukausina muun muassa palkkaamalla lisää kuljettajia ja päivittämällä osan kalustosta. Lisäksi yhtiö selvittää mahdollisuutta lisätä reaaliaikaisia näyttöjä useammille pysäkeille. Lopullisia tuloksia muutoksista luvataan aikaisintaan ensi vuoden alkupuolella.`,
      questions: [
        {
          id: 'q1',
          question: 'Mistä asukkaat ovat erityisesti valittaneet?',
          options: [
            'Lippujen hinnoista',
            'Bussien myöhästymisistä ruuhka-aikoina',
            'Bussien liiallisesta määrästä',
            'Pysäkkien puutteesta',
          ],
          correctIndex: 1,
        },
        {
          id: 'q2',
          question: 'Mitkä ovat myöhästymisten syitä joukkoliikenneyhtiön mukaan?',
          options: [
            'Vain huono sää',
            'Katutyöt, kuljettajapula ja vanhentunut kalusto',
            'Matkustajien oma käytös',
            'Liian moni matkustaja käyttää busseja',
          ],
          correctIndex: 1,
        },
        {
          id: 'q3',
          question: 'Mitä osa asukkaista ehdottaa aikatauluista?',
          options: [
            'Aikataulut pitäisi poistaa kokonaan',
            'Aikataulut julkaistaisiin realistisemmiksi ruuhka-aikoina',
            'Aikatauluja ei tarvitse muuttaa',
            'Aikataulut pitäisi salata matkustajilta',
          ],
          correctIndex: 1,
        },
        {
          id: 'q4',
          question: 'Mitä joukkoliikenneyhtiö lupaa tehdä tilanteen parantamiseksi?',
          options: [
            'Lopettaa bussiliikenteen kokonaan',
            'Palkata lisää kuljettajia ja päivittää kalustoa',
            'Nostaa lippujen hintoja huomattavasti',
            'Vähentää bussivuorojen määrää',
          ],
          correctIndex: 1,
        },
        {
          id: 'q5',
          question: 'Milloin lopullisia tuloksia muutoksista luvataan aikaisintaan?',
          options: ['Heti seuraavalla viikolla', 'Ensi kuun alussa', 'Ensi vuoden alkupuolella', 'Kahden vuoden kuluttua'],
          correctIndex: 2,
        },
      ],
    },
    listening: {
      id: 'l-exam10',
      weekId: 1092,
      title: 'Perhe harkitsee koiran hankkimista',
      level: 'B1',
      scriptFi: `Äiti: No niin, olemme nyt käyneet eläinsuojassa katsomassa koiria kahdesti. Mitä mieltä olette, pitäisikö meidän hankkia koira?
Isä: Itse olen edelleen vähän epävarma. Meillä molemmilla on kiireinen työ, ja koira tarvitsee paljon aikaa ja lenkkeilyä joka päivä.
Lapsi: Mutta minä voisin auttaa lenkillä käymisessä koulun jälkeen! Olen luvannut sen jo monta kertaa.
Äiti: Se on totta, mutta pitää muistaa, että vastuu on lopulta meidän aikuisten, emme voi jättää kaikkea sinun harteillesi.
Isä: Olen samaa mieltä. Toisaalta se koira, jonka näimme viimeksi, tuo keskikokoinen sekarotuinen, vaikutti todella rauhalliselta ja sopisi ehkä hyvin meidän elämäntyyliimme.
Äiti: Niin minustakin. Ja eläinsuojan työntekijä kertoi, että se on jo tottunut olemaan yksin muutaman tunnin kerrallaan, mikä helpottaisi meidän tilannettamme.
Lapsi: Voisimmeko käydä katsomassa sitä vielä kerran ennen päätöstä?
Isä: Se kuulostaa järkevältä. Käydään ensi viikonloppuna vielä kerran, ja tehdään päätös sen jälkeen yhdessä koko perheenä.
Äiti: Sovittu. Tärkeintä on, että olemme kaikki varmoja ennen kuin sitoudumme.`,
      questions: [
        {
          id: 'q1',
          question: 'Mikä huolestuttaa isää koiran hankkimisessa?',
          options: [
            'Koira maksaa liikaa',
            'Molemmilla vanhemmilla on kiireinen työ, ja koira tarvitsee paljon aikaa',
            'Hän ei pidä koirista lainkaan',
            'Asunto on liian pieni koiralle',
          ],
          correctIndex: 1,
        },
        {
          id: 'q2',
          question: 'Mitä lapsi lupaa auttaa?',
          options: ['Ruoan ostamisessa', 'Lenkillä käymisessä koulun jälkeen', 'Koiran kylvettämisessä', 'Eläinlääkärikäynneissä'],
          correctIndex: 1,
        },
        {
          id: 'q3',
          question: 'Millainen se koira on, josta perhe erityisesti pitää?',
          options: [
            'Pieni ja levoton',
            'Keskikokoinen sekarotuinen ja rauhallinen',
            'Hyvin iso ja aktiivinen',
            'Erittäin nuori pentu',
          ],
          correctIndex: 1,
        },
        {
          id: 'q4',
          question: 'Mihin perhe päätyy keskustelun lopussa?',
          options: [
            'He päättävät olla hankkimatta koiraa kokonaan',
            'He käyvät katsomassa koiraa vielä kerran ja päättävät sitten yhdessä',
            'He hankkivat koiran heti saman päivän aikana',
            'He riitaantuvat asiasta eivätkä pääse sopuun',
          ],
          correctIndex: 1,
        },
      ],
    },
    writing: {
      id: 'w-exam10',
      weekId: 1093,
      title: 'Mielipidekirjoitus: Terveellisten ruokailutottumusten tukeminen',
      level: 'B2',
      instructions:
        'Kirjoita mielipidekirjoitus aiheesta "Pitäisikö yhteiskunnan tukea nykyistä enemmän terveellisten ruokailutottumusten omaksumista?". Ilmaise selkeä kanta heti alussa, perustele se vähintään kahdella syyllä, ota huomioon myös vastakkainen näkökulma, ja päätä teksti yhteenvetoon.',
      minWords: 170,
      maxWords: 250,
      timeMinutes: 35,
      rubric: [
        'Ilmaisit selkeän oman kannan heti tekstin alussa.',
        'Perustelit kantasi vähintään kahdella konkreettisella syyllä.',
        'Otit huomioon myös vastakkaisen näkökulman.',
        'Käytit konnektoreita (ensinnäkin, toisaalta, näin ollen, kuitenkin).',
        'Teksti on jäsennelty selkeästi: johdanto, perustelut, yhteenveto.',
      ],
      modelAnswer:
        'Mielestäni yhteiskunnan kannattaisi tukea nykyistä enemmän terveellisten ruokailutottumusten omaksumista.\n\nEnsinnäkin terveelliset ruokailutottumukset ehkäisevät monia pitkäaikaissairauksia, mikä säästäisi pidemmällä aikavälillä merkittävästi terveydenhuollon kustannuksia. Toiseksi kaikilla ei ole tasavertaisia mahdollisuuksia syödä terveellisesti, sillä terveelliset raaka-aineet ovat usein kalliimpia kuin runsaasti prosessoidut vaihtoehdot, joten tuki tasoittaisi eroja ihmisten välillä.\n\nToisaalta osa saattaa ajatella, ettei ruokavalintoihin pitäisi puuttua, koska se on jokaisen yksilön oma asia. Ymmärrän tämän näkökulman, mutta mielestäni kyse ei olisi pakottamisesta vaan mahdollisuuksien parantamisesta, esimerkiksi tukemalla tuoreiden raaka-aineiden hintaa tai lisäämällä ravitsemuskasvatusta kouluissa.\n\nNäin ollen uskon, että kohtuullinen, valinnanvapautta kunnioittava tuki terveellisiin ruokailutottumuksiin hyödyttäisi sekä yksilöitä että koko yhteiskuntaa pitkällä aikavälillä.',
    },
    speaking: {
      id: 's-exam10',
      weekId: 1094,
      title: 'Kerro muutosta uuteen kaupunkiin',
      level: 'B1',
      instructions:
        'Kerro tilanteesta, jossa muutit tai kuvittelet muuttavasi uuteen kaupunkiin. Kerro, miksi muutit, mikä oli vaikeinta uuteen paikkaan sopeutumisessa, ja mikä auttoi sinua tuntemaan olosi kotoisaksi.',
      prepSeconds: 45,
      speakSeconds: 90,
      helpfulPhrases: [
        'Muutin uuteen kaupunkiin, koska...',
        'Vaikeinta alussa oli...',
        'Uusia ihmisiä tapasin esimerkiksi...',
        'Aloin tuntea oloni kotoisaksi, kun...',
        'Nyt viihdyn kaupungissa, koska...',
      ],
    },
  },
]
