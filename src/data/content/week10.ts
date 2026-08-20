import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

// Week 10 — kertausviikko (review week) for weeks 1-9: self-introduction,
// family, daily routine/time, food/shopping, home/housing, weather/seasons,
// hobbies, health/body, and travel/transport, plus the grammar covered in
// Phase 1 (olla-verbi & pronouns, basic cases, possessive suffixes,
// sisäpaikallissijat, present tense & verb types, negation,
// ulkopaikallissijat, imperfekti, comparison, modal verbs). Content is
// framed explicitly as cumulative review, not new material.

export const week10Reading: ReadingExercise = {
  id: 'r-w10',
  weekId: 10,
  title: 'Kertaus: Leenan viikko',
  level: 'A2',
  textFi: `Viime viikolla minulla oli sekä kiireinen että mukava viikko. Maanantaina heräsin aikaisin, koska minun piti mennä töihin jo kello kahdeksaksi. Iltapäivällä kävin kaupassa ostamassa ruokaa perheelleni: ostin leipää, maitoa ja tuoreita vihanneksia. Kun pääsin kotiin, valmistin illallisen ja söin sen yhdessä mieheni ja lasteni kanssa.

Keskiviikkona sää oli hyvin kylmä, mutta torstaina aurinko paistoi ja ilma oli paljon lämpimämpi kuin edellisenä päivänä. Menin ystäväni kanssa kävelylle lähipuistoon, koska minusta on mukava liikkua ulkona. Illalla soitin siskolleni, joka asuu Oulussa. Hän kertoi, että hänen perheensä voi hyvin.

Perjantaina minulla oli vähän kuumetta, enkä voinut mennä töihin. Lepäsin kotona koko päivän ja join paljon teetä. Lauantaina tunsin oloni jo paremmaksi, joten matkustin junalla siskoni luo Ouluun. Matka kesti noin viisi tuntia. Vietimme mukavan viikonlopun yhdessä ja puhuimme paljon perheestämme.`,
  questions: [
    {
      id: 'q1',
      question: 'Miksi Leena heräsi aikaisin maanantaina?',
      options: [
        'Koska hänen piti mennä töihin kello kahdeksaksi.',
        'Koska hän lähti matkalle.',
        'Koska hänellä oli kuumetta.',
        'Koska hän meni kauppaan yöllä.',
      ],
      correctIndex: 0,
    },
    {
      id: 'q2',
      question: 'Mitä Leena osti kaupasta?',
      options: ['Vaatteita ja kenkiä', 'Leipää, maitoa ja vihanneksia', 'Lääkkeitä', 'Junalipun'],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Millainen sää oli torstaina verrattuna keskiviikkoon?',
      options: ['Yhtä kylmä', 'Paljon kylmempi', 'Paljon lämpimämpi', 'Sateinen'],
      correctIndex: 2,
    },
    {
      id: 'q4',
      question: 'Miksi Leena ei mennyt töihin perjantaina?',
      options: ['Hän oli matkalla.', 'Hänellä oli vähän kuumetta.', 'Kauppa oli kiinni.', 'Hän oli siskonsa luona.'],
      correctIndex: 1,
    },
    {
      id: 'q5',
      question: 'Miten Leena matkusti siskonsa luo Ouluun?',
      options: ['Bussilla', 'Lentokoneella', 'Junalla', 'Autolla'],
      correctIndex: 2,
    },
  ],
}

export const week10Listening: ListeningExercise = {
  id: 'l-w10',
  weekId: 10,
  title: 'Kertaus: Viikonlopun kuulumiset',
  level: 'A2',
  scriptFi: `Maria: Hei Pekka! Mitä teit viikonloppuna?
Pekka: Hei Maria! Perjantaina olin vähän kipeä, joten en tehnyt mitään erityistä. Lepäsin kotona.
Maria: Voi ei, toivottavasti olet nyt parempi.
Pekka: Kyllä, kiitos kysymästä. Lauantaina tunsin oloni jo paremmaksi ja menin harrastukseeni, jalkapalloon.
Maria: Kiva! Minä puolestani kävin sisareni kanssa ostoksilla. Ostimme uudet talvitakit, koska sää on muuttunut kylmemmäksi.
Pekka: Niin onkin. Entä sunnuntaina?
Maria: Sunnuntaina koko perheeni tuli kylään. Valmistimme yhdessä ruokaa ja söimme pihalla, koska sää oli yllättäen aurinkoinen.
Pekka: Kuulostaa mukavalta päivältä. Minä matkustin bussilla vanhempieni luo, koska en ole nähnyt heitä pitkään aikaan.
Maria: Kiva, että pääsit heitä tapaamaan.`,
  questions: [
    {
      id: 'q1',
      question: 'Miksi Pekka lepäsi kotona perjantaina?',
      options: ['Hän oli kipeä.', 'Hän oli lomalla.', 'Hän oli töissä koko päivän.', 'Hän matkusti ulkomaille.'],
      correctIndex: 0,
    },
    {
      id: 'q2',
      question: 'Mitä Maria osti sisarensa kanssa?',
      options: ['Uudet kengät', 'Uudet talvitakit', 'Junalipun', 'Ruokaa illalliselle'],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Millainen sää oli sunnuntaina Marian mukaan?',
      options: ['Sateinen', 'Kylmä', 'Yllättäen aurinkoinen', 'Tuulinen'],
      correctIndex: 2,
    },
    {
      id: 'q4',
      question: 'Miten Pekka matkusti vanhempiensa luo?',
      options: ['Junalla', 'Bussilla', 'Autolla', 'Kävellen'],
      correctIndex: 1,
    },
  ],
}

export const week10Writing: WritingPrompt = {
  id: 'w-w10',
  weekId: 10,
  title: 'Kertaus: Kirjoita viime viikostasi',
  level: 'A2',
  instructions:
    'Kirjoita lyhyt kertomus viime viikostasi. Kerro esimerkiksi: mitä teit arkena (työ tai opiskelu), kävitkö ostoksilla tai tapasitko perhettä, millainen sää oli, ja harrastitko jotain vapaa-ajalla. Käytä imperfektiä (menneen ajan muotoa) ja muista omistusliitteet (esim. perheeni, siskoni).',
  minWords: 60,
  maxWords: 120,
  timeMinutes: 20,
  rubric: [
    'Käytit imperfektiä kertoessasi menneistä tapahtumista.',
    'Mainitsit ainakin yhden arkipäivän aktiviteetin (työ, opiskelu tai kotityöt).',
    'Kerroit jotain perheestäsi tai ystävistäsi ja käytit omistusliitteitä oikein.',
    'Mainitsit säästä tai vuodenajasta.',
    'Lauseet ovat ymmärrettäviä ja sidottu ajan ilmauksilla (sitten, myöhemmin, viikonloppuna).',
  ],
  modelAnswer:
    'Viime viikolla minulla oli tavallinen mutta kiva viikko. Maanantaista perjantaihin kävin töissä ja tulin kotiin illalla noin kello viisi. Keskiviikkona sää oli sateinen, mutta torstaina aurinko paistoi taas. Perjantai-iltana kävin kaupassa ostamassa ruokaa ja tapasin siskoni kahvilla. Viikonloppuna koko perheeni tuli kylään, ja valmistimme yhdessä ruokaa. Sunnuntaina harrastin lempiharrastustani, uintia, uimahallissa. Se oli mukava viikko.',
}

export const week10Speaking: SpeakingPrompt = {
  id: 's-w10',
  weekId: 10,
  title: 'Kertaus: Kerro tyypillisestä viikostasi',
  level: 'A2',
  instructions:
    'Kerro tyypillisestä viikostasi. Kuvaile arkipäivän rutiinia (esim. milloin heräät, teetkö töitä vai opiskeletko), kerro lyhyesti perheestäsi ja harrastuksistasi, ja vertaile esimerkiksi kesän ja talven säätä Suomessa.',
  prepSeconds: 45,
  speakSeconds: 90,
  helpfulPhrases: [
    'Yleensä herään...',
    'Minulla on ... lasta / sisarusta.',
    'Harrastan...',
    'Kesällä on lämpimämpää kuin talvella.',
    'Minun täytyy / pitää...',
  ],
}
