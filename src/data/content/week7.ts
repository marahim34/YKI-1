import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week7Reading: ReadingExercise = {
  id: 'r-w7',
  weekId: 7,
  title: 'Vapaa-aikani harrastukset',
  level: 'A2',
  textFi: `Minulla on monta harrastusta, koska pidän aktiivisesta vapaa-ajasta. Kaksi kertaa viikossa käyn urheilemassa: maanantaisin pelaan jalkapalloa ystävieni kanssa, ja torstaisin käyn kuntosalilla. Haluan pysyä hyvässä kunnossa, joten liikunta on minulle tärkeää.

Urheilun lisäksi minä osaan soittaa kitaraa. Aloitin soittamisen kolme vuotta sitten, ja nyt osaan soittaa useita kappaleita. Soitan yleensä illalla, kun haluan rentoutua päivän jälkeen. Musiikki auttaa minua unohtamaan stressin.

Viikonloppuisin haluan usein tavata ystäviä. Voimme mennä yhdessä kahvilaan tai katsoa elokuvan. Joskus en halua tehdä mitään erityistä, vaan haluan vain lukea kirjaa kotona ja rentoutua rauhassa. En osaa vielä uida hyvin, mutta haluaisin oppia sen ensi kesänä. Vapaa-aika on minulle tärkeää, koska työ vie paljon energiaa.`,
  questions: [
    { id: 'q1', question: 'Mitä puhuja tekee maanantaisin?', options: ['Käy kuntosalilla', 'Pelaa jalkapalloa', 'Soittaa kitaraa', 'Lukee kirjaa'], correctIndex: 1 },
    { id: 'q2', question: 'Milloin puhuja aloitti kitaransoiton?', options: ['Vuosi sitten', 'Kaksi vuotta sitten', 'Kolme vuotta sitten', 'Viisi vuotta sitten'], correctIndex: 2 },
    { id: 'q3', question: 'Miksi puhuja soittaa kitaraa illalla?', options: ['Haluaa rentoutua', 'Se on ainoa vapaa aika', 'Naapuri pyytää', 'Ei ole muuta tekemistä'], correctIndex: 0 },
    { id: 'q4', question: 'Mitä puhuja tekee joskus viikonloppuna, kun ei halua tehdä mitään erityistä?', options: ['Menee kuntosalille', 'Lukee kirjaa kotona', 'Soittaa kitaraa julkisesti', 'Ui altaassa'], correctIndex: 1 },
    { id: 'q5', question: 'Minkä taidon puhuja haluaisi oppia ensi kesänä?', options: ['Soittamisen', 'Pelaamisen', 'Uimisen', 'Lukemisen'], correctIndex: 2 },
  ],
}

export const week7Listening: ListeningExercise = {
  id: 'l-w7',
  weekId: 7,
  title: 'Mitä teet vapaa-ajalla?',
  level: 'A2',
  scriptFi: `Laura: Hei, mitä sinä yleensä teet vapaa-ajallasi?
Marko: Moi! Minä harrastan valokuvausta. Käyn usein luonnossa ottamassa kuvia.
Laura: Kuulostaa kivalta! Osaatko myös urheilla?
Marko: Osaan pelata tennistä vähän, mutten ole kovin hyvä siinä. Haluaisin harjoitella enemmän.
Laura: Minä puolestani haluan aina tavata ystäviä vapaa-ajalla. Voimmeko me joskus mennä yhdessä valokuvaamaan?
Marko: Se olisi mukavaa! Voisitko tulla ensi lauantaina? Silloin haluan mennä metsään.
Laura: Voin kyllä tulla. Osaatko opettaa minua vähän valokuvaamisesta?
Marko: Totta kai, mielelläni! Se ei ole vaikeaa, kun oppii perusteet.
Laura: Hienoa, odotan jo innolla!`,
  questions: [
    { id: 'q1', question: 'Mitä Marko harrastaa?', options: ['Valokuvausta', 'Kitaransoittoa', 'Uimista', 'Pyöräilyä'], correctIndex: 0 },
    { id: 'q2', question: 'Osaako Marko pelata tennistä hyvin?', options: ['Kyllä, erittäin hyvin', 'Vähän, mutta haluaa harjoitella enemmän', 'Ei osaa lainkaan', 'Hän ei pelaa tennistä'], correctIndex: 1 },
    { id: 'q3', question: 'Mitä Laura haluaa aina tehdä vapaa-ajalla?', options: ['Olla yksin kotona', 'Tavata ystäviä', 'Katsoa televisiota', 'Nukkua'], correctIndex: 1 },
    { id: 'q4', question: 'Mihin he suunnittelevat menevänsä yhdessä?', options: ['Kuntosalille', 'Metsään valokuvaamaan', 'Elokuviin', 'Kahvilaan'], correctIndex: 1 },
  ],
}

export const week7Writing: WritingPrompt = {
  id: 'w-w7',
  weekId: 7,
  title: 'Harrastukseni ja vapaa-aikani',
  level: 'A2',
  instructions:
    'Kirjoita teksti harrastuksistasi ja siitä, miten vietät vapaa-aikaasi. Käytä verbejä "osata", "voida" ja "haluta" yhdessä infinitiivin kanssa (esim. "osaan uida", "haluan oppia", "voin harjoitella"). Kerro myös, miten rentoudut.',
  minWords: 50,
  maxWords: 120,
  timeMinutes: 20,
  rubric: [
    'Mainitsit ainakin kaksi harrastusta.',
    'Käytit verbejä osata, voida ja haluta infinitiivin kanssa oikein.',
    'Kerroit, milloin tai kuinka usein harrastat asioita.',
    'Kerroit, miten rentoudut tai vietät aikaa ystävien kanssa.',
    'Teksti on selkeä ja looginen kokonaisuus.',
  ],
  modelAnswer:
    'Vapaa-ajallani harrastan uintia ja lukemista. Osaan uida hyvin, ja käyn uimahallissa kaksi kertaa viikossa. Haluaisin myös oppia soittamaan pianoa, mutta minulla ei ole vielä ollut aikaa aloittaa. Voin usein tavata ystäviäni viikonloppuisin, ja silloin juomme kahvia ja juttelemme pitkään. Illalla haluan rentoutua lukemalla kirjaa sohvalla. Vapaa-aika auttaa minua jaksamaan paremmin arjessa.',
}

export const week7Speaking: SpeakingPrompt = {
  id: 's-w7',
  weekId: 7,
  title: 'Kerro harrastuksistasi',
  level: 'A2',
  instructions:
    'Kuvittele, että tapaat uuden ihmisen ja hän kysyy harrastuksistasi. Kerro, mitä osaat tehdä, mitä haluaisit oppia, ja miten yleensä vietät vapaa-aikaasi. Käytä osata-, voida- ja haluta-verbejä.',
  prepSeconds: 30,
  speakSeconds: 75,
  helpfulPhrases: [
    'Vapaa-ajalla minä harrastan...',
    'Osaan hyvin...',
    'Haluaisin oppia...',
    'Voin tavata ystäviäni...',
    'Rentoudun parhaiten, kun...',
  ],
}
