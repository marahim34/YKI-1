import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week1Reading: ReadingExercise = {
  id: 'r-w1',
  weekId: 1,
  title: 'Anna esittäytyy',
  level: 'A1',
  textFi: `Hei! Minun nimeni on Anna. Olen kolmekymmentä vuotta vanha. Olen kotoisin Virosta, mutta asun nyt Suomessa, Tampereella. Asun pienessä asunnossa keskustan lähellä.

Minä opiskelen suomea kielikurssilla kolme kertaa viikossa. Kurssi on maanantaisin, keskiviikkoisin ja perjantaisin. Opettajani nimi on Mikko. Hän on ystävällinen ja puhuu selvästi.

Minulla on mies ja yksi lapsi. Perheeni asuu myös Tampereella. Vapaa-ajalla minä luen kirjoja ja käyn kävelyllä. En osaa vielä puhua kovin hyvin suomea, mutta harjoittelen joka päivä.`,
  questions: [
    {
      id: 'q1',
      question: 'Mistä maasta Anna on kotoisin?',
      options: ['Suomesta', 'Virosta', 'Ruotsista', 'Venäjältä'],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Missä kaupungissa Anna asuu nyt?',
      options: ['Helsingissä', 'Turussa', 'Tampereella', 'Oulussa'],
      correctIndex: 2,
    },
    {
      id: 'q3',
      question: 'Kuinka monta kertaa viikossa Anna käy kielikurssilla?',
      options: ['Kaksi kertaa', 'Kolme kertaa', 'Neljä kertaa', 'Joka päivä'],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Mitä Anna tekee vapaa-ajalla?',
      options: ['Hän katsoo televisiota.', 'Hän lukee kirjoja ja kävelee.', 'Hän soittaa pianoa.', 'Hän ui.'],
      correctIndex: 1,
    },
    {
      id: 'q5',
      question: 'Miten Anna kuvailee suomen taitoaan?',
      options: [
        'Hän puhuu jo hyvin sujuvasti.',
        'Hän ei osaa vielä puhua kovin hyvin, mutta harjoittelee.',
        'Hän ei opiskele suomea.',
        'Hän puhuu vain englantia.',
      ],
      correctIndex: 1,
    },
  ],
}

export const week1Listening: ListeningExercise = {
  id: 'l-w1',
  weekId: 1,
  title: 'Uusi opiskelija kielikurssilla',
  level: 'A1',
  scriptFi: `Mikko: Hei! Tervetuloa kurssille. Mikä sinun nimesi on?
Ali: Hei, kiitos! Minun nimeni on Ali.
Mikko: Mukava tavata, Ali. Mistä sinä olet kotoisin?
Ali: Olen kotoisin Syyriasta. Nyt asun Helsingissä.
Mikko: Kuinka kauan olet asunut Suomessa?
Ali: Olen asunut Suomessa kahdeksan kuukautta.
Mikko: Entä puhutko jo suomea kotona?
Ali: Vähän. Vaimoni puhuu paremmin kuin minä, mutta harjoittelemme yhdessä.
Mikko: Hienoa! Nähdään huomenna tunnilla kello yhdeksän.
Ali: Kiitos, nähdään!`,
  questions: [
    {
      id: 'q1',
      question: 'Mistä maasta Ali on kotoisin?',
      options: ['Irakista', 'Syyriasta', 'Somaliasta', 'Afganistanista'],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Missä kaupungissa Ali asuu?',
      options: ['Tampereella', 'Turussa', 'Helsingissä', 'Vaasassa'],
      correctIndex: 2,
    },
    {
      id: 'q3',
      question: 'Kuinka kauan Ali on asunut Suomessa?',
      options: ['Kolme kuukautta', 'Kahdeksan kuukautta', 'Kaksi vuotta', 'Yhden vuoden'],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Mihin aikaan tunti alkaa huomenna?',
      options: ['Kello kahdeksan', 'Kello yhdeksän', 'Kello kymmenen', 'Kello yksi'],
      correctIndex: 1,
    },
  ],
}

export const week1Writing: WritingPrompt = {
  id: 'w-w1',
  weekId: 1,
  title: 'Esittele itsesi',
  level: 'A1',
  instructions:
    'Kirjoita lyhyt esittely itsestäsi. Kerro: mikä on nimesi, mistä olet kotoisin, missä asut nyt, mitä teet (työ / opiskelu), ja mitä teet vapaa-ajalla. Käytä yksinkertaisia lauseita.',
  minWords: 30,
  maxWords: 80,
  timeMinutes: 15,
  rubric: [
    'Kerroit nimesi ja kotimaasi.',
    'Kerroit missä asut nyt.',
    'Mainitsit työn, opiskelun tai vapaa-ajan.',
    'Käytit olla-verbiä oikein (olen, asun, opiskelen).',
    'Lauseet ovat ymmärrettäviä, vaikka pieniä virheitä olisi.',
  ],
  modelAnswer:
    'Hei! Minun nimeni on Sofia. Olen kotoisin Puolasta, ja nyt asun Suomessa, Jyväskylässä. Opiskelen suomea kielikurssilla ja työskentelen osa-aikaisesti kaupassa. Vapaa-ajalla luen kirjoja ja käyn ystävien kanssa kahvilla. Suomen kieli on vaikea, mutta se on myös kiinnostava.',
}

export const week1Speaking: SpeakingPrompt = {
  id: 's-w1',
  weekId: 1,
  title: 'Esittele itsesi ja perheesi',
  level: 'A1',
  instructions:
    'Kuvittele, että tapaat uuden luokkatoverin. Esittele itsesi: nimi, ikä, kotimaa, ja kerro lyhyesti perheestäsi (esim. onko sinulla lapsia, sisaruksia). Puhu selvästi ja rauhallisesti.',
  prepSeconds: 60,
  speakSeconds: 90,
  helpfulPhrases: [
    'Minun nimeni on...',
    'Olen ... vuotta vanha.',
    'Olen kotoisin ...',
    'Minulla on / ei ole lapsia.',
    'Minulla on kaksi sisarusta.',
  ],
}
