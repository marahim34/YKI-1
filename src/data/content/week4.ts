import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week4Reading: ReadingExercise = {
  id: 'r-w4',
  weekId: 4,
  title: 'Ostoksilla kaupassa',
  level: 'A2',
  textFi: `Eilen menin kauppaan ostamaan ruokaa viikonlopuksi. Ensin ostin leipää ja maitoa. Leipä maksoi kaksi euroa, ja maito oli aika halpa, vain yksi euro. Sitten menin kalaosastolle, koska halusin ostaa tuoretta kalaa perjantaiksi.

Myyjä kysyi minulta: "Paljonko kalaa haluat?" Vastasin, että tarvitsen noin puoli kiloa lohta. Lohi ei ollut halpaa, mutta se oli alennuksessa tänään. Normaalisti se maksaa paljon enemmän.

Ostin myös hedelmiä ja vihanneksia: omenoita, banaaneja ja tomaatteja. Kassalla koko ostoskori maksoi kolmekymmentäkuusi euroa. Se oli vähän kalliimpaa kuin yleensä, mutta ruokavalioni pitää olla monipuolinen, joten en säästänyt liikaa. Kotona ruoka maistui todella hyvältä, kun valmistin sen itse.`,
  questions: [
    { id: 'q1', question: 'Kuinka paljon leipä maksoi?', options: ['Yhden euron', 'Kaksi euroa', 'Kolme euroa', 'Viisi euroa'], correctIndex: 1 },
    { id: 'q2', question: 'Miksi puhuja meni kalaosastolle?', options: ['Osti kissanruokaa', 'Halusi ostaa tuoretta kalaa perjantaiksi', 'Etsi ystäväänsä', 'Kysyi hintoja vain'], correctIndex: 1 },
    { id: 'q3', question: 'Kuinka paljon lohta puhuja osti?', options: ['Yhden kilon', 'Puoli kiloa', 'Neljänneskilon', 'Kaksi kiloa'], correctIndex: 1 },
    { id: 'q4', question: 'Miksi lohi ei ollut niin kallista tänään?', options: ['Se oli vanhaa', 'Se oli alennuksessa', 'Kauppa antoi sen ilmaiseksi', 'Puhuja tinki hintaa'], correctIndex: 1 },
    { id: 'q5', question: 'Kuinka paljon koko ostoskori maksoi?', options: ['26 euroa', '30 euroa', '36 euroa', '40 euroa'], correctIndex: 2 },
  ],
}

export const week4Listening: ListeningExercise = {
  id: 'l-w4',
  weekId: 4,
  title: 'Kalatiskillä',
  level: 'A2',
  scriptFi: `Myyjä: Hyvää päivää! Miten voin auttaa?
Asiakas: Hyvää päivää. Paljonko tämä lohi maksaa kilolta?
Myyjä: Se maksaa kaksikymmentäkaksi euroa kilolta, mutta tänään meillä on alennus, joten hinta on nyt kahdeksantoista euroa.
Asiakas: Ai, hyvä! Otan puoli kiloa lohta, kiitos.
Myyjä: Selvä. Haluatko muuta? Meillä on tänään myös tuoretta kirjolohta, se on halvempaa kuin lohi.
Asiakas: Kuinka paljon kirjolohi maksaa?
Myyjä: Kaksitoista euroa kilolta.
Asiakas: Ei kiitos, tällä kertaa riittää pelkkä lohi. Montako euroa se tekee yhteensä?
Myyjä: Puoli kiloa lohta kahdeksastatoista eurosta on yhdeksän euroa.
Asiakas: Selvä, kiitos paljon!`,
  questions: [
    { id: 'q1', question: 'Paljonko lohi maksaa kilolta alennuksen jälkeen?', options: ['12 euroa', '18 euroa', '22 euroa', '25 euroa'], correctIndex: 1 },
    { id: 'q2', question: 'Kuinka paljon lohta asiakas ostaa?', options: ['Yhden kilon', 'Puoli kiloa', 'Neljänneskilon', 'Kaksi kiloa'], correctIndex: 1 },
    { id: 'q3', question: 'Miksi myyjä ehdottaa kirjolohta?', options: ['Se on loppumassa', 'Se on halvempaa kuin lohi', 'Se on parempaa', 'Lohta ei ole enää'], correctIndex: 1 },
    { id: 'q4', question: 'Kuinka paljon asiakas maksaa yhteensä?', options: ['9 euroa', '12 euroa', '18 euroa', '22 euroa'], correctIndex: 0 },
  ],
}

export const week4Writing: WritingPrompt = {
  id: 'w-w4',
  weekId: 4,
  title: 'Ostosreissu ja ruokavalioni',
  level: 'A2',
  instructions:
    'Kirjoita teksti viimeisimmästä ostosreissustasi kauppaan. Kerro, mitä ostit (käytä partitiivia, esim. "ostin leipää, maitoa, omenoita"), paljonko eri tuotteet maksoivat, ja kerro lyhyesti, millainen ruokavaliosi yleensä on.',
  minWords: 60,
  maxWords: 120,
  timeMinutes: 20,
  rubric: [
    'Käytit partitiivia ostamiesi tuotteiden kanssa (esim. leipää, maitoa, kalaa).',
    'Mainitsit ainakin kolme ostamaasi tuotetta.',
    'Kerroit hintoja tai käytit ilmaisua "paljonko" tai "monta".',
    'Kuvailit lyhyesti ruokavaliotasi tai ruokatottumuksiasi.',
    'Käytit ainakin yhtä imperfektimuotoa (esim. ostin, menin, maksoi).',
  ],
  modelAnswer:
    'Eilen kävin kaupassa ostamassa ruokaa. Ostin leipää, maitoa ja juustoa. Leipä maksoi kaksi euroa ja juusto oli hieman kalliimpi, noin viisi euroa. Ostin myös vihanneksia, kuten porkkanoita ja tomaatteja, koska ruokavalioni on melko terveellinen. En osta paljon makeisia, mutta syön mielelläni hedelmiä joka päivä. Kauppareissu maksoi yhteensä noin kaksikymmentäviisi euroa, mikä oli sopiva hinta viikon ruoille.',
}

export const week4Speaking: SpeakingPrompt = {
  id: 's-w4',
  weekId: 4,
  title: 'Kaupassa asioiminen',
  level: 'A2',
  instructions:
    'Kuvittele, että olet kaupassa ja kysyt myyjältä tuotteiden hintoja. Kysy esimerkiksi, paljonko jokin tuote maksaa, onko se alennuksessa, ja osta jotain. Käytä ilmauksia "paljonko" ja "montako".',
  prepSeconds: 30,
  speakSeconds: 75,
  helpfulPhrases: [
    'Paljonko tämä maksaa?',
    'Onko tämä alennuksessa?',
    'Haluaisin puoli kiloa...',
    'Onko teillä halvempaa vaihtoehtoa?',
    'Montako euroa se tekee yhteensä?',
  ],
}
