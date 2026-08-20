import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week11Reading: ReadingExercise = {
  id: 'r-w11',
  weekId: 11,
  title: 'Työpaikkailmoitus: Myyjä kahvilaan',
  level: 'A2',
  textFi: `MYYJÄ KAHVILAAN, Café Aurinko, Tampere

Etsimme reipasta ja asiakaspalveluhenkistä myyjää osa-aikaiseen työsuhteeseen. Työ alkaa sopimuksen mukaan, mielellään mahdollisimman pian.

Työtehtäviin kuuluu asiakaspalvelu, kassatyö ja kahvilan siisteydestä huolehtiminen. Työvuorot vaihtelevat, ja työhön kuuluu myös viikonlopputyötä.

Toivomme hakijalta:
- hyvää suomen kielen taitoa (vähintään taso A2–B1)
- aiempaa kokemusta asiakaspalvelusta on eduksi, mutta ei ole pakollinen
- reipasta ja ystävällistä asennetta
- joustavuutta työaikojen suhteen

Tarjoamme mukavan työyhteisön, perehdytyksen tehtävään sekä kilpailukykyisen palkan. Lähetä hakemus ja ansioluettelo sähköpostitse osoitteeseen rekry@cafeaurinko.fi viimeistään 30.9. mennessä. Kerro hakemuksessa myös, milloin voisit aloittaa työt.`,
  questions: [
    {
      id: 'q1',
      question: 'Millaista työsuhdetta ilmoituksessa haetaan?',
      options: ['Kokoaikaista', 'Osa-aikaista', 'Kesätyötä vain', 'Etätyötä'],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Mikä seuraavista EI kuulu työtehtäviin?',
      options: ['Asiakaspalvelu', 'Kassatyö', 'Kahvilan siisteydestä huolehtiminen', 'Kirjanpito'],
      correctIndex: 3,
    },
    {
      id: 'q3',
      question: 'Onko aiempi asiakaspalvelukokemus pakollinen?',
      options: ['Kyllä, ehdottomasti.', 'Ei, mutta se on eduksi.', 'Vain viikonloppuisin.', 'Ilmoituksessa ei mainita asiaa.'],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Mihin mennessä hakemus pitää lähettää?',
      options: ['1.9. mennessä', '15.9. mennessä', '30.9. mennessä', '30.10. mennessä'],
      correctIndex: 2,
    },
    {
      id: 'q5',
      question: 'Mitä hakijan pitää mainita hakemuksessaan varsinaisten tietojen lisäksi?',
      options: [
        'Palkkatoiveensa',
        'Milloin voisi aloittaa työt',
        'Aiemman esimiehensä yhteystiedot',
        'Kielitutkinnon numeron',
      ],
      correctIndex: 1,
    },
  ],
}

export const week11Listening: ListeningExercise = {
  id: 'l-w11',
  weekId: 11,
  title: 'Puhelinsoitto: Haastatteluajan sopiminen',
  level: 'A2',
  scriptFi: `Rekrytoija: Hyvää päivää, Café Aurinko, Laura tässä.
Hakija: Hyvää päivää. Soitan koskien myyjän työpaikkaa. Lähetin hakemuksen viime viikolla.
Rekrytoija: Ai, hetkinen... Joo, muistan hakemuksesi. Haluaisimme kutsua sinut haastatteluun.
Hakija: Se sopii hyvin. Milloin haastattelu olisi?
Rekrytoija: Sopisiko torstaina kello 14, vai onko sinulla sinä päivänä muuta menoa?
Hakija: Torstai kello 14 sopii minulle erinomaisesti.
Rekrytoija: Hyvä. Haastattelu kestää noin puoli tuntia, ja se pidetään kahvilassa, osoitteessa Kauppakatu 5.
Hakija: Selvä, kiitos tiedosta. Pitääkö minun tuoda jotain mukanani?
Rekrytoija: Ota vain henkilöllisyystodistus mukaan, kiitos. Nähdään torstaina!
Hakija: Kiitos paljon, nähdään silloin!`,
  questions: [
    {
      id: 'q1',
      question: 'Minkä työpaikan takia hakija soittaa?',
      options: ['Kokin', 'Myyjän', 'Siivoojan', 'Tarjoilijan'],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Minä päivänä ja mihin aikaan haastattelu on?',
      options: ['Keskiviikkona klo 14', 'Torstaina klo 14', 'Torstaina klo 16', 'Perjantaina klo 14'],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Kuinka kauan haastattelu kestää arviolta?',
      options: ['15 minuuttia', 'Puoli tuntia', 'Tunnin', 'Kaksi tuntia'],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Mitä hakijan pitää ottaa mukaan haastatteluun?',
      options: ['Ansioluettelon paperilla', 'Henkilöllisyystodistuksen', 'Suosituskirjeen', 'Ei mitään erityistä'],
      correctIndex: 1,
    },
  ],
}

export const week11Writing: WritingPrompt = {
  id: 'w-w11',
  weekId: 11,
  title: 'Saatekirje työhakemukseen',
  level: 'A2',
  instructions:
    'Kirjoita lyhyt saatekirje (motivaatiokirje) kahvilan myyjän työpaikkaan. Kerro, miksi olet kiinnostunut työstä, mitä kokemusta tai osaamista sinulla on, ja milloin voisit aloittaa. Käytä kohteliasta, mutta selkeää kieltä.',
  minWords: 80,
  maxWords: 150,
  timeMinutes: 25,
  rubric: [
    'Kerroit, mihin työpaikkaan haet ja miksi se kiinnostaa sinua.',
    'Mainitsit relevanttia kokemusta tai osaamista.',
    'Kerroit, milloin voisit aloittaa työt.',
    'Käytit kohteliasta aloitusta ja lopetusta (esim. "Hyvä vastaanottaja", "Ystävällisin terveisin").',
    'Käytit ainakin yhtä sivulausetta (esim. joka, koska, että -lause).',
  ],
  modelAnswer:
    'Hyvä vastaanottaja,\n\nHaen myyjän paikkaa Café Aurinkoon, koska pidän asiakaspalvelusta ja olen työskennellyt aiemmin kaupassa kaksi vuotta. Osaan käyttää kassajärjestelmiä ja olen tottunut vilkkaaseen työympäristöön. Puhun suomea sujuvasti arjen tilanteissa ja opiskelen kieltä edelleen aktiivisesti.\n\nVoisin aloittaa työt heti, kun sopiva ajankohta löytyy. Kiitos mielenkiinnosta, ja kerron mielelläni lisää haastattelussa.\n\nYstävällisin terveisin,\nHakija',
}

export const week11Speaking: SpeakingPrompt = {
  id: 's-w11',
  weekId: 11,
  title: 'Kerro työkokemuksestasi',
  level: 'A2',
  instructions:
    'Kuvittele, että olet työhaastattelussa. Haastattelija kysyy: "Kerro aiemmasta työkokemuksestasi ja siitä, miksi haet juuri tätä työpaikkaa." Vastaa niin kuin oikeassa haastattelussa.',
  prepSeconds: 30,
  speakSeconds: 90,
  helpfulPhrases: [
    'Olen aiemmin työskennellyt...',
    'Minulla on kokemusta...',
    'Haen tätä työtä, koska...',
    'Osaan hyvin...',
    'Uskon, että sopisin tähän tehtävään, koska...',
  ],
}
