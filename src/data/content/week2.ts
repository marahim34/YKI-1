import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week2Reading: ReadingExercise = {
  id: 'r-w2',
  weekId: 2,
  title: 'Perheeni',
  level: 'A1',
  textFi: `Hei, minä olen Jussi. Kerron teille vähän perheestäni. Minun vaimoni nimi on Liisa. Hän on hoitaja, ja hän työskentelee sairaalassa. Meillä on kaksi lasta: poikamme Eemeli ja tyttäremme Aino. Eemeli on kahdeksan vuotta ja Aino on viisi vuotta.

Minun äitini asuu Kuopiossa ja isäni asuu myös siellä. He ovat jo eläkkeellä. Minulla on yksi sisko ja yksi veli. Siskoni nimi on Maria, ja hän asuu Ruotsissa. Veljeni Tomi asuu täällä Helsingissä, samassa kaupungissa kuin minä.

Perheeni on minulle hyvin tärkeä. Käymme usein vanhempieni luona viikonloppuisin. Lapsemme rakastavat isovanhempiaan, ja he leikkivät yhdessä pihalla. Naapurimme Pekka on myös hyvä ystävämme. Hänen perheensä käy usein meillä kylässä.`,
  questions: [
    { id: 'q1', question: 'Mikä on Jussin vaimon ammatti?', options: ['Opettaja', 'Hoitaja', 'Myyjä', 'Lääkäri'], correctIndex: 1 },
    { id: 'q2', question: 'Kuinka monta lasta Jussilla ja Liisalla on?', options: ['Yksi', 'Kaksi', 'Kolme', 'Ei yhtään'], correctIndex: 1 },
    { id: 'q3', question: 'Missä kaupungissa Jussin vanhemmat asuvat?', options: ['Helsingissä', 'Turussa', 'Kuopiossa', 'Ruotsissa'], correctIndex: 2 },
    { id: 'q4', question: 'Missä maassa Jussin sisko Maria asuu?', options: ['Suomessa', 'Ruotsissa', 'Norjassa', 'Virossa'], correctIndex: 1 },
    {
      id: 'q5',
      question: 'Kuka on Pekka?',
      options: ['Jussin veli', 'Jussin naapuri ja ystävä', 'Jussin isä', 'Jussin poika'],
      correctIndex: 1,
    },
  ],
}

export const week2Listening: ListeningExercise = {
  id: 'l-w2',
  weekId: 2,
  title: 'Kuvat perheestä',
  level: 'A1',
  scriptFi: `Sanna: Katso, tässä on kuva minun perheestäni. Tämä on mieheni, hänen nimensä on Antti.
Reeta: Ai, mukava! Onko teillä lapsia?
Sanna: On, meillä on yksi tytär. Hänen nimensä on Elsa, ja hän on kolme vuotta.
Reeta: Kuinka söpö! Entä nämä kaksi vanhempaa ihmistä kuvassa, keitä he ovat?
Sanna: He ovat minun vanhempani, äitini ja isäni. He asuvat Vaasassa.
Reeta: Onko sinulla sisaruksia?
Sanna: On, minulla on yksi veli. Hänen nimensä on Juho, ja hän on naimisissa. Hänen vaimonsa nimi on Katri.
Reeta: Näyttää siltä, että sinulla on iso ja onnellinen perhe.
Sanna: Niin on! Rakastan perhettäni todella paljon.`,
  questions: [
    { id: 'q1', question: 'Mikä on Sannan miehen nimi?', options: ['Juho', 'Antti', 'Pekka', 'Mikko'], correctIndex: 1 },
    { id: 'q2', question: 'Kuinka vanha Sannan tytär Elsa on?', options: ['Yksi vuotta', 'Kaksi vuotta', 'Kolme vuotta', 'Viisi vuotta'], correctIndex: 2 },
    { id: 'q3', question: 'Missä Sannan vanhemmat asuvat?', options: ['Helsingissä', 'Vaasassa', 'Oulussa', 'Turussa'], correctIndex: 1 },
    { id: 'q4', question: 'Mikä on Sannan veljen vaimon nimi?', options: ['Reeta', 'Elsa', 'Katri', 'Maria'], correctIndex: 2 },
  ],
}

export const week2Writing: WritingPrompt = {
  id: 'w-w2',
  weekId: 2,
  title: 'Kerro perheestäsi',
  level: 'A1',
  instructions:
    'Kirjoita lyhyt teksti perheestäsi. Kerro, keitä perheeseesi kuuluu (esim. vanhemmat, sisarukset, puoliso, lapset), ja käytä omistusliitteitä (esim. äitini, isäni, siskoni, poikani). Kerro myös, missä he asuvat.',
  minWords: 30,
  maxWords: 80,
  timeMinutes: 15,
  rubric: [
    'Mainitsit ainakin kolme perheenjäsentä.',
    'Käytit omistusliitteitä oikein (esim. -ni, -si, -nsa).',
    'Kerroit, missä joku perheenjäsenistäsi asuu.',
    'Käytit sanaa "minulla on" tai "meillä on" perheenjäsenistä puhuessasi.',
    'Lauseet ovat ymmärrettäviä, vaikka pieniä virheitä olisi.',
  ],
  modelAnswer:
    'Minulla on pieni perhe. Äitini nimi on Helena ja isäni nimi on Reijo. He asuvat Kotkassa. Minulla on yksi veli, hänen nimensä on Sami. Hän on naimisissa, ja hänen vaimonsa nimi on Noora. Minulla itselläni on mies ja kaksi lasta. Perheeni on minulle hyvin tärkeä, ja käymme usein vanhempieni luona.',
}

export const week2Speaking: SpeakingPrompt = {
  id: 's-w2',
  weekId: 2,
  title: 'Kerro ihmissuhteistasi',
  level: 'A1',
  instructions:
    'Kuvittele, että näytät kaverillesi valokuvan perheestäsi tai ystävistäsi. Kerro, keitä kuvassa on, mikä on heidän suhteensa sinuun (esim. isäni, ystäväni), ja missä he asuvat. Puhu selvästi ja käytä omistusliitteitä.',
  prepSeconds: 45,
  speakSeconds: 90,
  helpfulPhrases: [
    'Tässä kuvassa on minun...',
    'Hänen nimensä on...',
    'Minulla on kaksi sisarusta.',
    'Vanhempani asuvat...',
    'Paras ystäväni on...',
  ],
}
