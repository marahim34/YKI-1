import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week14Reading: ReadingExercise = {
  id: 'r-w14',
  weekId: 14,
  title: 'Miten Suomessa haetaan asuntoa kunnalta',
  level: 'B1',
  textFi: `Suomessa monet asiat hoidetaan viranomaisten kautta, ja usein käytetään passiivimuotoa, kun puhutaan yleisistä säännöistä. Esimerkiksi kun halutaan hakea kunnan vuokra-asuntoa, hakemus täytetään yleensä internetissä.

Ensin hakemukseen kirjoitetaan omat tiedot: nimi, henkilötunnus ja tulot. Sen jälkeen hakemus lähetetään kunnan asuntotoimistoon, jossa sitä käsitellään muutaman viikon aikana. Jos hakemuksessa puuttuu tietoja, hakijalle soitetaan tai lähetetään viesti.

Kun päätös on tehty, siitä ilmoitetaan hakijalle kirjeitse tai sähköpostitse. Jos asunto myönnetään, vuokrasopimus allekirjoitetaan yhdessä vuokranantajan kanssa. Monissa kunnissa tarjotaan myös neuvontaa, jos hakija ei ymmärrä hakemusta tai tarvitsee tulkkia.

Suomalaisessa yhteiskunnassa kansalaisilla ja maahanmuuttajilla on oikeus samoihin palveluihin. Viranomaisilta odotetaan, että kaikkia asiakkaita kohdellaan tasa-arvoisesti riippumatta siitä, mistä he ovat kotoisin. Siksi on tärkeää, että jokainen tietää omat oikeutensa ja osaa hakea tarvittaessa apua kunnalta tai muulta viranomaiselta.`,
  questions: [
    {
      id: 'q1',
      question: 'Missä kunnan vuokra-asunnon hakemus yleensä täytetään?',
      options: ['Puhelimessa', 'Internetissä', 'Vain paperilomakkeella postissa', 'Kunnantalon aulassa'],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Mitä tapahtuu, jos hakemuksessa puuttuu tietoja?',
      options: [
        'Hakemus hylätään heti.',
        'Hakijalle soitetaan tai lähetetään viesti.',
        'Hakemus unohdetaan kokonaan.',
        'Hakija joutuu maksamaan sakon.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Miten hakijalle ilmoitetaan päätöksestä?',
      options: [
        'Vain puhelimitse.',
        'Kirjeitse tai sähköpostitse.',
        'Hakijan täytyy itse käydä kysymässä.',
        'Päätöksestä ei ilmoiteta lainkaan.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Mitä tehdään, jos asunto myönnetään?',
      options: [
        'Vuokrasopimus allekirjoitetaan yhdessä vuokranantajan kanssa.',
        'Hakija muuttaa heti ilman sopimusta.',
        'Kunta maksaa hakijalle rahaa.',
        'Hakija joutuu hakemaan uudestaan.',
      ],
      correctIndex: 0,
    },
    {
      id: 'q5',
      question: 'Mitä tekstin mukaan viranomaisilta odotetaan?',
      options: [
        'Että he palvelevat vain suomalaisia kansalaisia.',
        'Että he kohtelevat kaikkia asiakkaita tasa-arvoisesti.',
        'Että he työskentelevät vain arkisin.',
        'Että he vastaavat kysymyksiin vain suomeksi.',
      ],
      correctIndex: 1,
    },
  ],
}

export const week14Listening: ListeningExercise = {
  id: 'l-w14',
  weekId: 14,
  title: 'Kunnan asiakaspalvelussa',
  level: 'B1',
  scriptFi: `Virkailija: Hyvää päivää, miten voin auttaa?
Asiakas: Hei, haluaisin kysyä, miten lasten päivähoitopaikkaa haetaan.
Virkailija: Hakemus täytetään verkkopalvelussa, ja siihen tarvitaan tietoja lapsesta ja perheestä.
Asiakas: Kuinka kauan hakemuksen käsittely kestää?
Virkailija: Yleensä hakemus käsitellään noin neljän kuukauden kuluessa, mutta kiireellisissä tapauksissa nopeamminkin.
Asiakas: Miten minulle ilmoitetaan päätöksestä?
Virkailija: Päätös lähetetään sähköpostitse, ja se näkyy myös verkkopalvelussa.
Asiakas: Entä jos en ymmärrä kaikkea hakemuksessa?
Virkailija: Silloin voidaan varata aika, jossa asia käydään läpi yhdessä, tarvittaessa tulkin kanssa.
Asiakas: Selvä, kiitos avusta.
Virkailija: Ei kestä, hyvää päivänjatkoa!`,
  questions: [
    {
      id: 'q1',
      question: 'Mistä asiasta asiakas kysyy?',
      options: [
        'Miten haetaan asuntoa.',
        'Miten haetaan lasten päivähoitopaikkaa.',
        'Miten haetaan työpaikkaa.',
        'Miten haetaan koulupaikkaa.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Missä hakemus täytetään?',
      options: ['Kunnantalolla paikan päällä', 'Verkkopalvelussa', 'Puhelimessa', 'Sähköpostitse'],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Kuinka kauan hakemuksen käsittely yleensä kestää?',
      options: ['Yhden viikon', 'Yhden kuukauden', 'Noin neljä kuukautta', 'Yhden vuoden'],
      correctIndex: 2,
    },
    {
      id: 'q4',
      question: 'Mitä tehdään, jos asiakas ei ymmärrä hakemusta?',
      options: [
        'Hakemus hylätään.',
        'Voidaan varata aika, jossa asia käydään läpi yhdessä, tarvittaessa tulkin kanssa.',
        'Asiakkaan täytyy hakea itse käännöspalvelua.',
        'Hakemusta ei voi enää täyttää.',
      ],
      correctIndex: 1,
    },
  ],
}

export const week14Writing: WritingPrompt = {
  id: 'w-w14',
  weekId: 14,
  title: 'Miten jokin asia hoidetaan Suomessa',
  level: 'B1',
  instructions:
    'Kirjoita teksti, jossa selität passiivimuotoa käyttäen, miten jokin arkinen asia hoidetaan Suomessa (esimerkiksi miten haetaan Kela-korttia, ilmoittaudutaan TE-toimistoon tai varataan lääkäriaika). Käytä passiivin nykyhetkeä (esim. haetaan, lähetetään, käsitellään) monipuolisesti.',
  minWords: 80,
  maxWords: 150,
  timeMinutes: 25,
  rubric: [
    'Valitsit selkeän aiheen ja pysyit siinä koko tekstin ajan.',
    'Käytit passiivin nykyhetkeä (-taan/-tään) useassa eri lauseessa.',
    'Kuvasit prosessin vaiheet loogisessa järjestyksessä.',
    'Teksti on ymmärrettävä ja hyvin jäsennelty.',
    'Käytit ainakin yhtä sivulausetta (esim. jos, kun, joka).',
  ],
  modelAnswer:
    'Suomessa Kela-kortti haetaan yleensä Kelan verkkosivuilta tai käymällä paikan päällä Kelan toimistossa. Ensin täytetään hakemus, johon kirjoitetaan omat henkilötiedot ja osoite. Hakemukseen liitetään myös tarvittavat todistukset, esimerkiksi työsopimus tai opiskelutodistus.\n\nKun hakemus on lähetetty, se käsitellään yleensä muutaman viikon kuluessa. Jos tietoja puuttuu, hakijalle lähetetään viesti, jossa pyydetään lisätietoja. Kun päätös on tehty, kortti lähetetään postitse hakijan osoitteeseen.\n\nJos hakija ei ymmärrä hakemusta, Kelan asiakaspalvelusta voidaan pyytää apua, ja tarvittaessa käytetään tulkkia. Näin varmistetaan, että jokainen saa tarvitsemansa palvelut.',
}

export const week14Speaking: SpeakingPrompt = {
  id: 's-w14',
  weekId: 14,
  title: 'Selitä, miten arkinen asia hoidetaan',
  level: 'B1',
  instructions:
    'Selitä, miten jokin arkinen asia hoidetaan Suomessa tai kotimaassasi, esimerkiksi miten haetaan lääkäriaikaa, ilmoittaudutaan kouluun tai haetaan passia. Käytä passiivimuotoa mahdollisimman paljon (esim. haetaan, lähetetään, tarkistetaan).',
  prepSeconds: 60,
  speakSeconds: 120,
  helpfulPhrases: [
    'Ensin hakemus täytetään...',
    'Sen jälkeen se lähetetään...',
    'Asia käsitellään yleensä...',
    'Jos jotain puuttuu, hakijalle ilmoitetaan...',
    'Lopuksi päätös lähetetään...',
  ],
}
