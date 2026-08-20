import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week12Reading: ReadingExercise = {
  id: 'r-w12',
  weekId: 12,
  title: 'Ensimmäinen työpäivä uudessa työpaikassa',
  level: 'B1',
  textFi: `Aloitin viime maanantaina uuden työni logistiikka-alan yrityksessä. Esimieheni Sari esitteli minulle toimiston ja kertoi tehtävistäni. Ensimmäisenä päivänä opin käyttämään yrityksen tietojärjestelmää ja tapasin muutaman kollegan.

Työni tärkein tehtävä on hoitaa asiakkaiden tilauksia ja varmistaa, että tavarat lähtevät ajallaan. Joka aamu tarkistan sähköpostini ja luen uudet viestit. Sitten kirjoitan raportin edellisen päivän tilauksista ja lähetän sen esimiehelleni.

Palkka maksetaan kerran kuukaudessa, ja työaikataulu on melko joustava. Voin aloittaa työpäivän kello seitsemän ja kahdeksan välillä. Kollegani ovat ystävällisiä, ja he auttavat minua mielellään, kun en ymmärrä jotain.

Ensimmäisellä viikolla opin paljon uutta, mutta huomasin myös, että vastuu on suurempi kuin edellisessä työpaikassani. Esimieheni sanoi, että hän luottaa minuun ja että yhteistyö tiimin kanssa on tärkeintä. Odotan innolla, että pääsen tekemään itsenäisempiä projekteja tulevaisuudessa.`,
  questions: [
    {
      id: 'q1',
      question: 'Millä alalla kirjoittajan uusi työpaikka on?',
      options: ['Ravintola-alalla', 'Logistiikka-alalla', 'Terveydenhuollossa', 'Rakennusalalla'],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Mitä kirjoittaja teki ensimmäisenä työpäivänä?',
      options: [
        'Hän matkusti asiakkaan luo.',
        'Hän oppi käyttämään tietojärjestelmää ja tapasi kollegoita.',
        'Hän piti lomaa.',
        'Hän kirjoitti työsopimuksen uudestaan.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Mitä kirjoittaja tekee joka aamu?',
      options: [
        'Hän soittaa asiakkaille.',
        'Hän tarkistaa sähköpostinsa ja kirjoittaa raportin.',
        'Hän pitää palaverin koko tiimin kanssa.',
        'Hän siivoaa toimiston.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Kuinka usein palkka maksetaan?',
      options: ['Kerran viikossa', 'Kaksi kertaa kuukaudessa', 'Kerran kuukaudessa', 'Kerran vuodessa'],
      correctIndex: 2,
    },
    {
      id: 'q5',
      question: 'Minkä eron kirjoittaja huomasi verrattuna edelliseen työpaikkaansa?',
      options: [
        'Palkka on pienempi.',
        'Vastuu on suurempi.',
        'Työmatka on pidempi.',
        'Kollegat eivät ole yhtä ystävällisiä.',
      ],
      correctIndex: 1,
    },
  ],
}

export const week12Listening: ListeningExercise = {
  id: 'l-w12',
  weekId: 12,
  title: 'Keskustelu esimiehen kanssa',
  level: 'B1',
  scriptFi: `Esimies: Huomenta! Miten ensimmäinen viikkosi on sujunut?
Työntekijä: Ihan hyvin, kiitos. Opin jo käyttämään tilausjärjestelmää.
Esimies: Hienoa. Muistatko, että sinun täytyy lähettää raportti joka perjantai?
Työntekijä: Kyllä, muistan. Lähetän raportin tänään iltapäivällä.
Esimies: Hyvä. Voisitko myös hoitaa yhden uuden asiakkaan tilauksen tänään?
Työntekijä: Totta kai. Onko siinä jotain erityistä?
Esimies: Asiakas tarvitsee tavarat nopeasti, joten tarkista toimitusaika huolellisesti.
Työntekijä: Selvä, teen sen heti.
Esimies: Kiitos. Ja jos sinulla on kysymyksiä, kysy rohkeasti kollegoiltasi.
Työntekijä: Kiitos, teen niin.`,
  questions: [
    {
      id: 'q1',
      question: 'Mitä työntekijä on jo oppinut ensimmäisellä viikolla?',
      options: ['Käyttämään tilausjärjestelmää', 'Ajamaan trukkia', 'Puhumaan englantia', 'Laskemaan palkkoja'],
      correctIndex: 0,
    },
    {
      id: 'q2',
      question: 'Minä päivänä raportti pitää lähettää?',
      options: ['Maanantaina', 'Keskiviikkona', 'Perjantaina', 'Joka päivä'],
      correctIndex: 2,
    },
    {
      id: 'q3',
      question: 'Mitä työntekijän pitää tarkistaa uuden asiakkaan tilauksessa?',
      options: ['Asiakkaan osoitteen', 'Toimitusajan', 'Hinnan', 'Tuotteen värin'],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Mitä esimies neuvoo työntekijää tekemään, jos hänellä on kysymyksiä?',
      options: [
        'Soittamaan asiakaspalveluun',
        'Odottamaan seuraavaan viikkoon',
        'Kysymään rohkeasti kollegoilta',
        'Etsimään vastauksen internetistä',
      ],
      correctIndex: 2,
    },
  ],
}

export const week12Writing: WritingPrompt = {
  id: 'w-w12',
  weekId: 12,
  title: 'Sähköposti esimiehelle työtehtävistä',
  level: 'B1',
  instructions:
    'Kirjoita sähköposti esimiehellesi. Kerro, miten työtehtäväsi ovat edenneet viime viikolla, mainitse jokin haaste tai kysymys, ja pyydä apua tai lisäohjeita. Käytä objekteja monipuolisesti (esim. "kirjoitin raportin" vs. "kirjoitin raporttia").',
  minWords: 80,
  maxWords: 150,
  timeMinutes: 25,
  rubric: [
    'Kerroit selkeästi, miten viikko on sujunut työssä.',
    'Mainitsit ainakin yhden konkreettisen tehtävän, jonka teit.',
    'Kuvasit haasteen tai kysymyksen ja pyysit apua.',
    'Käytit objektin sijamuotoja (partitiivi ja akkusatiivi) oikein eri lauseissa.',
    'Sähköposti on kohtelias ja sisältää aloituksen ja lopetuksen.',
  ],
  modelAnswer:
    'Hyvä Sari,\n\nHalusin kertoa lyhyesti, miten viikko on sujunut. Sain hoidettua kaikki viikon tilaukset ajallaan ja kirjoitin raportit joka päivä. Opin myös käyttämään uutta tietojärjestelmää melko hyvin.\n\nYksi asia mietityttää minua: en ole vielä täysin varma, miten käsittelen kiireelliset tilaukset, jos asiakas tarvitsee tavaraa jo samana päivänä. Voisitko näyttää minulle esimerkin tai kertoa, keneltä voin kysyä apua tällaisissa tilanteissa?\n\nMuuten kaikki sujuu hyvin, ja olen tyytyväinen uuteen työhöni. Kiitos jo etukäteen avusta.\n\nYstävällisin terveisin,\nJuha',
}

export const week12Speaking: SpeakingPrompt = {
  id: 's-w12',
  weekId: 12,
  title: 'Kehityskeskustelu esimiehen kanssa',
  level: 'B1',
  instructions:
    'Kuvittele, että sinulla on kehityskeskustelu esimiehesi kanssa. Kerro omista työtehtävistäsi, mitä olet oppinut viime kuukausina, ja mitä tavoitteita sinulla on tulevaisuudessa. Mainitse myös, millaista tukea toivoisit esimieheltäsi.',
  prepSeconds: 60,
  speakSeconds: 120,
  helpfulPhrases: [
    'Tärkein tehtäväni on...',
    'Olen oppinut paljon esimerkiksi...',
    'Tavoitteenani on...',
    'Toivoisin lisää tukea/koulutusta...',
    'Yhteistyö tiimin kanssa on sujunut hyvin.',
  ],
}
