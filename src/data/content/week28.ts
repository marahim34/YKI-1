import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week28Reading: ReadingExercise = {
  id: 'r-w28',
  weekId: 28,
  title: 'Miten väitellä rakentavasti?',
  level: 'B2',
  textFi: `Yhteiskunnallinen keskustelu on nykyään usein kärjistynyttä, ja monista aiheista – ilmastopolitiikasta maahanmuuttoon – näyttää olevan vaikea käydä keskustelua ilman, että osapuolet ajautuvat vastakkainasetteluun. Tutkijoiden mukaan ongelma ei kuitenkaan ole erimielisyys itsessään, vaan tapa, jolla erimielisyyttä käsitellään julkisuudessa.

Toisaalta some-keskustelut palkitsevat usein kärjistyksiä ja iskeviä kommentteja, kun taas toisaalta rakentava väittely vaatisi kärsivällisyyttä ja halua todella kuunnella vastapuolen näkökulmaa. Tämä ristiriita selittää osaltaan, miksi keskustelu monista tärkeistä aiheista tuntuu junnaavan paikallaan: huomio kiinnittyy helposti siihen, kuka "voittaa" väittelyn, eikä siihen, löydetäänkö yhteistä ymmärrystä.

Asiantuntijat suosittelevat muutamia keinoja rakentavamman keskustelukulttuurin edistämiseksi. Ensinnäkin kannattaisi pyrkiä ymmärtämään, mistä vastapuolen näkökulma kumpuaa, ennen kuin sitä lähtee kritisoimaan. Toiseksi omien argumenttien perusteleminen faktoilla mielipiteiden sijaan vähentää tarpeetonta kärjistymistä. Kolmanneksi olisi hyödyllistä myöntää ääneen, jos vastapuolen argumentissa on jotain oikeaa, vaikka olisikin lopulta eri mieltä kokonaisuudesta.

Ristiriitojen välttäminen kokonaan ei kuitenkaan ole tavoiteltavaa, sillä erilaisten näkökulmien kohtaaminen on demokraattisen yhteiskunnan perusedellytys. Tavoitteena tulisikin olla ristiriitojen käsitteleminen tavalla, joka johtaa parempaan ymmärrykseen eikä pelkkään vastakkainasetteluun.`,
  questions: [
    {
      id: 'q1',
      question: 'Mikä tekstin mukaan on ongelma yhteiskunnallisessa keskustelussa – erimielisyys vai jokin muu?',
      options: [
        'Erimielisyys itsessään on ongelma, ja se pitäisi poistaa kokonaan.',
        'Ongelma on ennen kaikkea tapa, jolla erimielisyyttä käsitellään julkisuudessa.',
        'Suomalaiset eivät tekstin mukaan koskaan ole eri mieltä mistään.',
        'Ongelmaa ei tekstin mukaan ole olemassa lainkaan.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Millainen ristiriita tekstissä kuvataan some-keskustelujen ja rakentavan väittelyn välillä?',
      options: [
        'Molemmat vaativat tekstin mukaan täsmälleen samanlaista lähestymistapaa.',
        'Some-keskustelut palkitsevat kärjistyksiä, kun taas rakentava väittely vaatii kärsivällisyyttä ja kuuntelemista.',
        'Rakentava väittely vaatii tekstin mukaan aina nopeita, iskeviä kommentteja.',
        'Some-keskusteluissa ei tekstin mukaan koskaan synny kärjistyksiä.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Mitä asiantuntijat suosittelevat rakentavamman keskustelun edistämiseksi?',
      options: [
        'Vastapuolen näkökulman ymmärtämistä ja argumenttien perustelemista faktoilla.',
        'Vastapuolen mielipiteiden täydellistä huomiotta jättämistä.',
        'Kaikkien ristiriitojen välttämistä kokonaan.',
        'Sitä, ettei omia argumentteja koskaan perustella millään.',
      ],
      correctIndex: 0,
    },
    {
      id: 'q4',
      question: 'Miksi tekstin mukaan ristiriitoja ei kannata pyrkiä välttämään kokonaan?',
      options: [
        'Koska ristiriidat ovat aina vahingollisia demokratialle.',
        'Koska erilaisten näkökulmien kohtaaminen on demokraattisen yhteiskunnan perusedellytys.',
        'Koska ristiriitoja ei tekstin mukaan ole koskaan olemassa.',
        'Koska ne ratkeavat aina itsestään ilman keskustelua.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q5',
      question: 'Mikä on tekstin päätarkoitus?',
      options: [
        'Kannustaa lukijaa välttämään kaikkia väittelyjä.',
        'Analysoida, miksi julkinen keskustelu kärjistyy, ja ehdottaa keinoja käydä ristiriitoja rakentavammin.',
        'Väittää, ettei suomalaisilla ole koskaan erimielisyyksiä.',
        'Kertoa yksityiskohtaisesti yhden some-alustan historiasta.',
      ],
      correctIndex: 1,
    },
  ],
}

export const week28Listening: ListeningExercise = {
  id: 'l-w28',
  weekId: 28,
  title: 'Väittely opiskelijaryhmässä',
  level: 'B2',
  scriptFi: `Elias: Minun mielestäni etätyö pitäisi sallia kaikille, joiden työ sen mahdollistaa. Se lisää tuottavuutta ja hyvinvointia.
Noora: Toisaalta olen samaa mieltä siitä, että joustavuus on hyväksi, mutta toisaalta pelkään, että täysin etätyöhön siirtyminen heikentää yhteisöllisyyttä työpaikoilla.
Elias: Ymmärrän huolesi, mutta eikö sitä voisi ratkaista järjestämällä säännöllisiä yhteisiä tapaamisia?
Noora: Voisi ehkä, mutta käytännössä moni yritys ei panosta siihen tarpeeksi, kun kaikki on jo "hoidettu" etänä.
Elias: Hmm, siinä saatat olla oikeassa. En ole ajatellut asiaa yritysten näkökulmasta, vaan lähinnä yksittäisen työntekijän kannalta.
Noora: Juuri niin. Uskon, että paras ratkaisu olisi jonkinlainen välimalli, jossa osa viikosta tehtäisiin etänä ja osa yhdessä.
Elias: Sen voisin hyväksyä. Ehkä kannattaisi keskittyä siihen, millainen malli toimisi parhaiten, sen sijaan että väittelemme, onko etätyö hyvä vai huono asia sinänsä.
Noora: Samaa mieltä. Molemmat ääripäät tuntuvat lopulta vähän liian yksinkertaisilta.`,
  questions: [
    {
      id: 'q1',
      question: 'Mitä Elias ehdottaa alun perin?',
      options: [
        'Että etätyö kiellettäisiin kokonaan.',
        'Että etätyö pitäisi sallia kaikille, joiden työ sen mahdollistaa.',
        'Että kaikkien pitäisi työskennellä toimistolla joka päivä.',
        'Että työaikaa lyhennettäisiin puoleen.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Mitä Noora todella tarkoittaa sanoessaan, että moni yritys ei "panosta tarpeeksi", kun kaikki on jo "hoidettu" etänä?',
      options: [
        'Että hän uskoo yritysten laiminlyövän yhteisöllisyyden tukemisen, jos etätyö tekee siitä näennäisesti tarpeetonta.',
        'Että hän on täysin samaa mieltä Eliaksen alkuperäisestä ehdotuksesta.',
        'Että kaikki yritykset hoitavat yhteisöllisyyden tekstin mukaan erinomaisesti.',
        'Että hän ei usko etätyön olevan mahdollista lainkaan.',
      ],
      correctIndex: 0,
    },
    {
      id: 'q3',
      question: 'Millaisen ratkaisun Noora lopulta ehdottaa?',
      options: [
        'Täydellistä etätyötä ilman poikkeuksia.',
        'Välimallia, jossa osa viikosta tehtäisiin etänä ja osa yhdessä.',
        'Etätyön kieltämistä kokonaan.',
        'Sitä, että asiasta ei kannata keskustella lainkaan.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Mihin keskustelijat lopulta päätyvät?',
      options: [
        'He jäävät täysin eri mieltä eivätkä löydä mitään yhteistä näkemystä.',
        'He toteavat, että kannattaisi keskittyä toimivan mallin löytämiseen ääripäiden väittelyn sijaan.',
        'He päättävät lopettaa koko keskustelun aiheesta.',
        'He toteavat, että etätyö on aina huono ratkaisu.',
      ],
      correctIndex: 1,
    },
  ],
}

export const week28Writing: WritingPrompt = {
  id: 'w-w28',
  weekId: 28,
  title: 'Argumentoiva essee: Sosiaalisen median vaikutus julkiseen keskusteluun',
  level: 'B2',
  instructions:
    'Kirjoita argumentoiva essee aiheesta "Onko sosiaalinen media parantanut vai heikentänyt julkista keskustelua?". Esitä oma kantasi, mutta käsittele asiaa monipuolisesti käyttäen vastakkainasettelua (esim. "toisaalta... toisaalta...").',
  minWords: 180,
  maxWords: 260,
  timeMinutes: 40,
  rubric: [
    'Esitit selkeän oman kannan heti alussa.',
    'Käytit rakennetta "toisaalta... toisaalta..." tai vastaavaa vastakkainasettelua vähintään kerran.',
    'Perustelit kantasi vähintään kahdella konkreettisella esimerkillä tai argumentilla.',
    'Käsittelit myös vastakkaisen näkökulman argumentteja, et vain omiasi.',
    'Teksti on jäsennelty selkeästi: johdanto, perustelut, vastaväitteen käsittely ja lopetus.',
  ],
  modelAnswer:
    'Sosiaalinen media on mielestäni sekä parantanut että heikentänyt julkista keskustelua, mutta kokonaisuutena uskon sen vaikutusten olevan tällä hetkellä enemmän kielteisiä kuin myönteisiä.\n\nToisaalta sosiaalinen media on antanut äänen ihmisille, joilla ei aiemmin ollut pääsyä perinteiseen mediaan. Kuka tahansa voi nyt osallistua keskusteluun, jakaa tietoa ja haastaa vallanpitäjiä nopeasti. Tämä on lisännyt julkisen keskustelun moniäänisyyttä huomattavasti.\n\nToisaalta samat alustat palkitsevat algoritmiensa kautta kärjistyksiä ja tunteisiin vetoavia väitteitä enemmän kuin harkittuja, faktapohjaisia näkemyksiä. Tämä johtaa siihen, että monimutkaiset yhteiskunnalliset kysymykset pelkistyvät helposti kahdeksi vastakkaiseksi leiriksi, joiden välillä ei juuri käydä todellista keskustelua.\n\nOn totta, että ongelma ei ole pelkästään teknologiassa, vaan myös siinä, miten ihmiset käyttävät sitä. Silti alustojen rakenne vaikuttaa vahvasti siihen, millainen keskustelu niissä yleensä menestyy.\n\nTämän vuoksi ajattelen, että sosiaalisen median hyödyt eivät tällä hetkellä riitä kompensoimaan sen aiheuttamaa keskustelun kärjistymistä, vaikka näen myös sen mahdollisuudet.',
}

export const week28Speaking: SpeakingPrompt = {
  id: 's-w28',
  weekId: 28,
  title: 'Puolusta näkökulmaasi kohteliaasti eri mieltä ollessa',
  level: 'B2',
  instructions:
    'Kuvittele, että ystäväsi on täysin eri mieltä kanssasi jostain ajankohtaisesta yhteiskunnallisesta aiheesta (esim. etätyö, sosiaalinen media, ilmastopolitiikka). Esitä oma näkökantasi, mutta myönnä myös, missä vastapuolella voi olla oikeassa, ja ehdota tapaa käsitellä ristiriitaa rakentavasti.',
  prepSeconds: 60,
  speakSeconds: 120,
  helpfulPhrases: [
    'Ymmärrän näkökulmasi, mutta itse ajattelen, että...',
    'Toisaalta olet oikeassa siinä, että..., mutta toisaalta...',
    'Vaikka olemmekin eri mieltä, voimme ehkä löytää yhteisen...',
    'Myönnän, että argumentissasi on jotain oikeaa.',
    'Ehdottaisin, että keskitymme siihen, miten...',
  ],
}
