import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week6Reading: ReadingExercise = {
  id: 'r-w6',
  weekId: 6,
  title: 'Suomen vuodenajat',
  level: 'A2',
  textFi: `Suomessa on neljä vuodenaikaa, ja ne ovat hyvin erilaisia. Talvi on pitkä ja kylmä. Silloin sataa lunta ja on usein pakkasta, joskus jopa kaksikymmentä astetta pakkasta. Talvi on Suomen kylmin vuodenaika, ja päivät ovat lyhyitä ja pimeitä.

Kevät on iloinen aika, koska lumi sulaa ja aurinko alkaa paistaa enemmän. Sää on kevättä lämpimämpää kuin talvella, mutta silti vielä viileää. Kesällä sää on paljon lämpimämpää, ja joskus on jopa hellettä. Kesä on Suomen valoisin vuodenaika, koska yöt ovat lyhyitä ja aurinko paistaa myöhään.

Syksy on usein pilvinen ja sateinen. Ilma muuttuu kylmemmäksi kuin kesällä, ja tuuli voi olla kova. Minun mielestäni kesä on kaikkein mukavin vuodenaika, koska silloin voi olla ulkona ilman takkia. Talvi on vaikeampi, mutta lumi tekee maisemasta kaunista.`,
  questions: [
    { id: 'q1', question: 'Mikä on Suomen kylmin vuodenaika?', options: ['Kevät', 'Kesä', 'Syksy', 'Talvi'], correctIndex: 3 },
    { id: 'q2', question: 'Mitä tapahtuu keväällä?', options: ['Lumi sulaa ja aurinko paistaa enemmän', 'Sataa vain lunta', 'Päivät lyhenevät', 'Tulee pakkasta'], correctIndex: 0 },
    { id: 'q3', question: 'Miksi kesä on Suomen valoisin vuodenaika?', options: ['Koska sataa paljon', 'Koska yöt ovat lyhyitä', 'Koska on kylmää', 'Koska päivät ovat pimeitä'], correctIndex: 1 },
    { id: 'q4', question: 'Millainen sää syksyllä yleensä on?', options: ['Aurinkoinen ja lämmin', 'Pilvinen ja sateinen', 'Täysin tyyni', 'Hyvin kuiva'], correctIndex: 1 },
    { id: 'q5', question: 'Minkä vuodenajan puhuja mainitsee suosikikseen?', options: ['Kevään', 'Kesän', 'Syksyn', 'Talven'], correctIndex: 1 },
  ],
}

export const week6Listening: ListeningExercise = {
  id: 'l-w6',
  weekId: 6,
  title: 'Millainen sää huomenna on?',
  level: 'A2',
  scriptFi: `Maria: Kuulitko, millainen sää huomenna on?
Antti: Kuulin uutisista, että huomenna on pilvistä ja sataa vähän vettä.
Maria: Voi ei, minä toivoin aurinkoista säätä. Onko lämpötila korkea?
Antti: Ei kovin korkea, ehkä vain kymmenen astetta. Se on kylmempää kuin tänään.
Maria: Entä ylihuomenna, tiedätkö sitä?
Antti: Ylihuomenna pitäisi olla aurinkoisempaa ja lämpimämpää, jopa viisitoista astetta.
Maria: Hyvä, silloin voisimme mennä ulos kävelylle.
Antti: Kannattaa ottaa kuitenkin takki mukaan, koska tuuli voi olla kylmää.
Maria: Selvä, otan lämpimät vaatteet mukaan varmuuden vuoksi.`,
  questions: [
    { id: 'q1', question: 'Millainen sää on huomenna?', options: ['Aurinkoista', 'Pilvistä ja sataa vähän', 'Lumisateista', 'Tyyntä ja lämmintä'], correctIndex: 1 },
    { id: 'q2', question: 'Mikä on huomisen lämpötila?', options: ['Noin viisi astetta', 'Noin kymmenen astetta', 'Noin viisitoista astetta', 'Noin kaksikymmentä astetta'], correctIndex: 1 },
    { id: 'q3', question: 'Millainen sää on ylihuomenna verrattuna huomiseen?', options: ['Kylmempää', 'Sateisempaa', 'Aurinkoisempaa ja lämpimämpää', 'Täysin samanlaista'], correctIndex: 2 },
    { id: 'q4', question: 'Mitä Antti suosittelee ottamaan mukaan?', options: ['Sateenvarjon', 'Takin', 'Aurinkolasit', 'Ei mitään'], correctIndex: 1 },
  ],
}

export const week6Writing: WritingPrompt = {
  id: 'w-w6',
  weekId: 6,
  title: 'Vuodenajat kotimaassani ja Suomessa',
  level: 'A2',
  instructions:
    'Kirjoita teksti, jossa vertailet säätä ja vuodenaikoja kotimaassasi ja Suomessa. Käytä komparatiivia (esim. "kylmempää", "lämpimämpää") ja kerro, mikä vuodenaika on mielestäsi mukavin ja miksi.',
  minWords: 50,
  maxWords: 120,
  timeMinutes: 20,
  rubric: [
    'Vertasit säätä kahden paikan välillä.',
    'Käytit komparatiivimuotoja oikein (esim. kylmempää, lämpimämpää, aurinkoisempaa).',
    'Mainitsit ainakin kaksi vuodenaikaa.',
    'Kerroit mielipiteesi suosikkivuodenajasta ja perustelit sen.',
    'Käytit sääsanastoa (esim. sataa, pilvinen, pakkanen).',
  ],
  modelAnswer:
    'Kotimaassani talvi ei ole yhtä kylmä kuin Suomessa. Meillä ei juuri koskaan sada lunta, mutta Suomessa talvella on usein pakkasta ja paljon lunta. Kesällä sää on kotimaassani lämpimämpää kuin Suomessa, mutta Suomen kesä on valoisampi, koska yöt ovat lyhyitä. Minun mielestäni Suomen kesä on kaikkein mukavin vuodenaika, koska sää on silloin miellyttävä eikä liian kuuma.',
}

export const week6Speaking: SpeakingPrompt = {
  id: 's-w6',
  weekId: 6,
  title: 'Kerro säästä ja vuodenajoista',
  level: 'A2',
  instructions:
    'Kuvittele, että ystäväsi kysyy, millainen sää tänään on ja mikä vuodenaika sinusta on paras. Kerro säästä tänään, vertaile eri vuodenaikoja käyttäen komparatiivia, ja perustele mielipiteesi.',
  prepSeconds: 30,
  speakSeconds: 75,
  helpfulPhrases: [
    'Tänään on ulkona...',
    'Talvi on kylmempi kuin...',
    'Minusta paras vuodenaika on...',
    'Kesällä sataa vähemmän kuin...',
    'Pidän eniten... vuodenajasta, koska...',
  ],
}
