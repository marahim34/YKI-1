import type { ExamSet } from '../types'

// Standalone full practice tests modeled on the real YKI keskitaso exam
// format: each set mixes several unrelated topics across its four sections,
// the way a genuine past exam paper does, rather than sharing one theme like
// the curriculum weeks do. 100% original material — not copied from any real
// exam or book.
export const EXAM_SETS: ExamSet[] = [
  {
    id: 'exam-set-1',
    title: 'Koepaketti 1',
    titleBn: 'পরীক্ষার সেট ১',
    level: ['B1', 'B2'],
    reading: {
      id: 'r-exam1',
      weekId: 1001,
      title: 'Tiedote: Uusi etätyökäytäntö',
      level: 'B1',
      textFi: `Yritys tiedottaa: Etätyökäytäntö uudistuu 1.9. alkaen

Yrityksemme johtoryhmä on päättänyt uudistaa etätyökäytäntöä syyskuun alusta lähtien. Uudistuksen taustalla on henkilöstökyselyn tulokset, joiden mukaan suurin osa työntekijöistä toivoi enemmän joustavuutta työajan ja -paikan suhteen, mutta samalla toivottiin myös riittävästi yhteistä aikaa toimistolla.

Uuden käytännön mukaan jokainen työntekijä voi tehdä etätyötä enintään kolmena päivänä viikossa. Kaksi päivää viikossa, tiistai ja torstai, on määritelty yhteisiksi toimistopäiviksi, jolloin koko tiimin toivotaan olevan paikalla. Tämä helpottaa kokousten järjestämistä ja epävirallista yhteydenpitoa kollegoiden kesken.

Esimiehet voivat tarvittaessa poiketa käytännöstä, jos työtehtävät sitä vaativat. Esimerkiksi asiakaspalvelutehtävissä työskentelevien on oltava toimistolla useammin. Muutoksesta huolimatta yritys korostaa, että luottamus työntekijöihin säilyy ennallaan: etätyöpäivien tarkkaa käyttöä ei valvota erikseen.

Henkilöstöosasto järjestää infotilaisuuden uudesta käytännöstä ensi viikolla. Kysymyksiä voi lähettää etukäteen sähköpostitse. Uudistuksen toivotaan parantavan sekä työhyvinvointia että tiimien yhteistyötä pitkällä aikavälillä.`,
      questions: [
        {
          id: 'q1',
          question: 'Mihin uudistus perustuu?',
          options: ['Johtoryhmän omaan mielipiteeseen', 'Henkilöstökyselyn tuloksiin', 'Asiakkaiden toiveisiin', 'Kilpailijoiden käytäntöihin'],
          correctIndex: 1,
        },
        {
          id: 'q2',
          question: 'Kuinka monena päivänä viikossa etätyö on sallittu enintään?',
          options: ['Yhtenä', 'Kahtena', 'Kolmena', 'Neljänä'],
          correctIndex: 2,
        },
        {
          id: 'q3',
          question: 'Mitkä päivät on määritelty yhteisiksi toimistopäiviksi?',
          options: ['Maanantai ja keskiviikko', 'Tiistai ja torstai', 'Keskiviikko ja perjantai', 'Kaikki arkipäivät'],
          correctIndex: 1,
        },
        {
          id: 'q4',
          question: 'Mitä tekstistä voi päätellä asiakaspalvelutehtävistä?',
          options: [
            'Ne siirtyvät kokonaan etätyöhön.',
            'Niissä työskentelevien on oltava toimistolla useammin kuin muiden.',
            'Niitä ei enää tarvita.',
            'Ne eivät kuulu uudistuksen piiriin lainkaan.',
          ],
          correctIndex: 1,
        },
        {
          id: 'q5',
          question: 'Mikä on tekstin mukaan yrityksen suhtautuminen etätyöpäivien valvontaan?',
          options: [
            'Jokaisen etätyöpäivän käyttöä seurataan tarkasti.',
            'Etätyö kielletään kokonaan, jos sitä ei valvota.',
            'Työntekijöihin luotetaan, eikä käyttöä valvota erikseen.',
            'Vain esimiehet saavat tehdä etätyötä ilman valvontaa.',
          ],
          correctIndex: 2,
        },
      ],
    },
    listening: {
      id: 'l-exam1',
      weekId: 1002,
      title: 'Puhelinsoitto: Ajan varaaminen terveyskeskukseen',
      level: 'B1',
      scriptFi: `Vastaanottaja: Terveyskeskus, Hanna tässä, hyvää päivää.
Soittaja: Hyvää päivää. Haluaisin varata ajan lääkärille. Minulla on ollut kurkkukipua ja kuumetta pari päivää.
Vastaanottaja: Selvä. Onko teillä ollut muita oireita, esimerkiksi yskää?
Soittaja: On, vähän yskää myös, mutta ei hengitysvaikeuksia.
Vastaanottaja: Hyvä. Lähin vapaa aika olisi valitettavasti vasta ensi viikon torstaina. Jos oireet kuitenkin pahenevat, suosittelen soittamaan päivystykseen suoraan.
Soittaja: Torstai kuulostaa aika kaukaiselta, mutta ymmärrän tilanteen. Onko aikaisempaa aikaa mitenkään mahdollista saada, jos joku peruu?
Vastaanottaja: Voin laittaa teidät perumislistalle. Jos joku peruu ajan huomiseen tai ylihuomiseen, soitan teille heti.
Soittaja: Kiitos, se olisi hyvä. Mikä se torstain aika sitten olisi?
Vastaanottaja: Torstaina kello 10.30, lääkäri Korhoselle. Sopiiko se?
Soittaja: Sopii kyllä. Kiitos avusta.
Vastaanottaja: Ole hyvä, ja parane pian!`,
      questions: [
        {
          id: 'q1',
          question: 'Mitkä oireet soittajalla on?',
          options: [
            'Vain kuumetta',
            'Kurkkukipua, kuumetta ja vähän yskää',
            'Hengitysvaikeuksia ja kuumetta',
            'Vain yskää',
          ],
          correctIndex: 1,
        },
        {
          id: 'q2',
          question: 'Milloin lähin vapaa aika on?',
          options: ['Huomenna', 'Ylihuomenna', 'Ensi viikon torstaina', 'Ensi kuussa'],
          correctIndex: 2,
        },
        {
          id: 'q3',
          question: 'Mitä vastaanottaja ehdottaa, jos soittajan oireet pahenevat?',
          options: [
            'Odottamaan torstaihin asti',
            'Soittamaan päivystykseen suoraan',
            'Menemään suoraan terveyskeskukseen ilmoittautumatta',
            'Ottamaan yhteyttä sähköpostilla',
          ],
          correctIndex: 1,
        },
        {
          id: 'q4',
          question: 'Mitä vastaanottaja tarkoittaa "perumislistalla"?',
          options: [
            'Listaa potilaista, jotka eivät koskaan tule vastaanotolle',
            'Listaa, josta soittajalle ilmoitetaan, jos joku peruu aikaisemman ajan',
            'Listaa lääkäreistä, jotka ovat lomalla',
            'Listaa peruutetuista lääkkeistä',
          ],
          correctIndex: 1,
        },
      ],
    },
    writing: {
      id: 'w-exam1',
      weekId: 1003,
      title: 'Mielipidekirjoitus: Julkinen liikenne vai oma auto?',
      level: 'B2',
      instructions:
        'Kirjoita mielipidekirjoitus aiheesta "Pitäisikö kaupunkien panostaa enemmän julkiseen liikenteeseen yksityisautoilun sijaan?". Ilmaise selkeä kanta heti alussa, perustele se vähintään kahdella syyllä, ota huomioon myös vastakkainen näkökulma, ja päätä teksti yhteenvetoon.',
      minWords: 160,
      maxWords: 240,
      timeMinutes: 35,
      rubric: [
        'Ilmaisit selkeän oman kannan heti tekstin alussa.',
        'Perustelit kantasi vähintään kahdella konkreettisella syyllä.',
        'Otit huomioon myös vastakkaisen näkökulman (esim. "toisaalta").',
        'Käytit konnektoreita (ensinnäkin, toisaalta, näin ollen, kuitenkin).',
        'Teksti on jäsennelty selkeästi: johdanto, perustelut, yhteenveto.',
      ],
      modelAnswer:
        'Mielestäni kaupunkien kannattaisi panostaa selvästi enemmän julkiseen liikenteeseen yksityisautoilun sijaan.\n\nEnsinnäkin toimiva julkinen liikenne vähentää ruuhkia ja päästöjä merkittävästi, kun useampi ihminen mahtuu yhteen bussiin tai junaan yhden auton sijaan. Toiseksi hyvät julkiset yhteydet ovat tärkeitä tasa-arvon kannalta, sillä kaikilla ei ole varaa omaan autoon.\n\nToisaalta ymmärrän, että haja-asutusalueilla julkinen liikenne ei aina ole realistinen vaihtoehto, ja auto voi olla monille välttämättömyys. Tämän vuoksi panostusten tulisi olla harkittuja eikä täysin poissulkevia.\n\nNäin ollen uskon, että paras ratkaisu on parantaa julkista liikennettä erityisesti kaupunkialueilla, samalla kun maaseudun erityistarpeet otetaan huomioon.',
    },
    speaking: {
      id: 's-exam1',
      weekId: 1004,
      title: 'Kerro mieleenpainuvasta matkasta',
      level: 'B1',
      instructions:
        'Kerro mieleenpainuvasta matkasta tai reissusta, jonka olet tehnyt. Kuvaile, minne matkustit, kenen kanssa, ja miksi matka jäi erityisesti mieleen.',
      prepSeconds: 45,
      speakSeconds: 90,
      helpfulPhrases: [
        'Muistan erityisen hyvin matkan...',
        'Matkustin yhdessä...',
        'Mieleeni jäi erityisesti...',
        'Se oli minulle tärkeä kokemus, koska...',
        'Voisin suositella samaa matkaa muillekin.',
      ],
    },
  },

  {
    id: 'exam-set-2',
    title: 'Koepaketti 2',
    titleBn: 'পরীক্ষার সেট ২',
    level: ['B1', 'B2'],
    reading: {
      id: 'r-exam2',
      weekId: 1011,
      title: 'Kirjaston uudet palvelut',
      level: 'B1',
      textFi: `Kaupunginkirjasto laajentaa palveluitaan

Kaupunginkirjasto tiedottaa laajentavansa palveluitaan ensi kuun alusta lähtien. Uudistuksen tavoitteena on tehdä kirjastosta entistä monipuolisempi paikka, joka palvelee kaikenikäisiä asukkaita pelkän kirjojen lainauksen lisäksi.

Yksi suurimmista muutoksista on uusi työkalulaina-palvelu, jonka avulla asukkaat voivat lainata esimerkiksi poraa, ompelukonetta tai retkeilyvälineitä samalla tavalla kuin kirjoja. Palvelun taustalla on ajatus siitä, että kaikkien ei kannata omistaa harvoin tarvittavia esineitä itse.

Lisäksi kirjastoon avataan uusi tila, jossa järjestetään ilmaisia kursseja: suomen kielen keskusteluryhmiä, tietokoneen käytön opastusta ja lasten satutunteja. Erityisesti kielenoppijoille suunnattu keskusteluryhmä kokoontuu joka tiistai-ilta, eikä siihen tarvitse ilmoittautua etukäteen.

Kirjaston johtaja kertoo, että muutosten taustalla on halu vastata asukkaiden muuttuviin tarpeisiin. "Kirjasto ei ole enää pelkkä kirjavarasto, vaan yhteisöllinen kohtaamispaikka", hän toteaa. Palveluiden laajentaminen ei vaikuta kirjaston aukioloaikoihin, jotka pysyvät ennallaan.`,
      questions: [
        {
          id: 'q1',
          question: 'Mikä on yksi suurimmista uudistuksista?',
          options: ['Aukioloaikojen pidentäminen', 'Työkalulaina-palvelu', 'Kirjojen hinnan nostaminen', 'Kirjaston sulkeminen viikonloppuisin'],
          correctIndex: 1,
        },
        {
          id: 'q2',
          question: 'Mitä kielenoppijoille suunnattu keskusteluryhmä vaatii osallistujalta?',
          options: ['Etukäteisilmoittautumista', 'Jäsenmaksua', 'Ei mitään erityistä ilmoittautumista', 'Vähintään B1-tason todistusta'],
          correctIndex: 2,
        },
        {
          id: 'q3',
          question: 'Miksi kirjasto tarjoaa työkalulaina-palvelua tekstin mukaan?',
          options: [
            'Koska kirjat eivät enää kiinnosta ketään',
            'Koska kaikkien ei kannata omistaa harvoin tarvittavia esineitä itse',
            'Koska kunta velvoitti kirjaston tarjoamaan sitä',
            'Koska muut kirjastot tekevät samoin',
          ],
          correctIndex: 1,
        },
        {
          id: 'q4',
          question: 'Miten johtajan sitaatti kuvaa kirjaston roolin muutosta?',
          options: [
            'Kirjastosta tulee pelkkä varasto.',
            'Kirjasto muuttuu yhteisölliseksi kohtaamispaikaksi kirjavaraston sijaan.',
            'Kirjasto lopettaa kaikki kurssit.',
            'Kirjasto keskittyy jatkossa vain lapsille.',
          ],
          correctIndex: 1,
        },
        {
          id: 'q5',
          question: 'Mihin uudistus ei vaikuta?',
          options: ['Lainattaviin tuotteisiin', 'Järjestettäviin kursseihin', 'Aukioloaikoihin', 'Tilojen määrään'],
          correctIndex: 2,
        },
      ],
    },
    listening: {
      id: 'l-exam2',
      weekId: 1012,
      title: 'Palaverissa: Aikatauluristiriita',
      level: 'B2',
      scriptFi: `Esimies: Käydään läpi ensi viikon aikataulu. Sanna, sinä vedät asiakastapaamisen keskiviikkona, eikö niin?
Sanna: Kyllä, mutta pieni ongelma: minulla on samana päivänä myös se koulutuspäivä, jonka piti olla jo peruttu.
Esimies: Ai, en tiennytkään että se on yhä voimassa. Onko koulutus koko päivän?
Sanna: Aamupäivän, kello 9-12. Asiakastapaaminen olisi kello 10, joten ne menevät päällekkäin.
Esimies: Ymmärrän. Voisiko Matti hoitaa asiakastapaamisen sinun sijastasi?
Matti: Periaatteessa kyllä, mutta en ole ollut mukana aiemmissa keskusteluissa tämän asiakkaan kanssa. Voisin toki lukea muistiinpanot etukäteen.
Sanna: Voisin lähettää sinulle kaiken tarvittavan tiedon tänään. Se voisi oikeasti toimia hyvin.
Esimies: Hyvä. Sovitaan siis niin, että Matti hoitaa tapaamisen Sannan materiaalien pohjalta, ja Sanna osallistuu koulutukseen. Sanna, voisitko silti olla puhelimen päässä tapaamisen aikana siltä varalta, että tulee kysymyksiä?
Sanna: Toki, se onnistuu koulutuksen tauolla ainakin.
Esimies: Hyvä, sovittu. Kiitos joustavuudesta molemmille.`,
      questions: [
        {
          id: 'q1',
          question: 'Mikä on Sannan ongelma?',
          options: [
            'Hän on sairaana keskiviikkona.',
            'Asiakastapaaminen ja koulutuspäivä osuvat samaan aikaan.',
            'Hän ei halua tavata asiakasta.',
            'Hän on lomalla ensi viikolla.',
          ],
          correctIndex: 1,
        },
        {
          id: 'q2',
          question: 'Mitä Matti aluksi epäröi asiakastapaamisen hoitamisessa?',
          options: [
            'Hän ei osaa suomea tarpeeksi hyvin.',
            'Hän ei ole ollut mukana aiemmissa keskusteluissa asiakkaan kanssa.',
            'Hän ei pidä kyseisestä asiakkaasta.',
            'Hänellä on jo toinen tapaaminen samaan aikaan.',
          ],
          correctIndex: 1,
        },
        {
          id: 'q3',
          question: 'Mitä ratkaisua palaverissa lopulta sovitaan?',
          options: [
            'Tapaaminen perutaan kokonaan.',
            'Matti hoitaa tapaamisen Sannan materiaalien avulla, ja Sanna on tavoitettavissa puhelimitse.',
            'Esimies hoitaa tapaamisen itse.',
            'Koulutus perutaan, jotta Sanna voi mennä tapaamiseen.',
          ],
          correctIndex: 1,
        },
        {
          id: 'q4',
          question: 'Mitä keskustelu kertoo Sannan ja Matin asenteesta tilannetta kohtaan?',
          options: [
            'He molemmat kieltäytyvät joustamasta.',
            'He etsivät aktiivisesti yhdessä toimivaa ratkaisua ja ovat valmiita joustamaan.',
            'He riitelevät siitä, kenen vika ongelma on.',
            'He päättävät jättää asian esimiehen ratkaistavaksi kokonaan.',
          ],
          correctIndex: 1,
        },
      ],
    },
    writing: {
      id: 'w-exam2',
      weekId: 1013,
      title: 'Valituskirje: Ongelma tilauksessa',
      level: 'B1',
      instructions:
        'Kirjoita valituskirje yritykselle, jolta tilasit tuotteen tai palvelun, joka ei vastannut odotuksiasi. Kerro, mitä tilasit ja milloin, mikä meni pieleen, ja mitä toivot yrityksen tekevän asian hyvittämiseksi.',
      minWords: 150,
      maxWords: 220,
      timeMinutes: 30,
      rubric: [
        'Kerroit heti alussa, mistä tilauksesta on kyse ja milloin se tehtiin.',
        'Selitit selkeästi, mikä meni pieleen.',
        'Kerroit, miten ongelma vaikutti sinuun.',
        'Ilmaisit selvästi, mitä toivot yrityksen tekevän.',
        'Sävy on asiallinen mutta jämäkkä koko tekstin ajan.',
      ],
      modelAnswer:
        'Hyvä asiakaspalvelu,\n\nTilasin verkkokaupastanne pöytälampun 14. maaliskuuta, ja se toimitettiin viikko myöhemmin. Valitettavasti lampun mukana ei tullut lainkaan asennusohjeita, ja kun sain sen lopulta kytkettyä, huomasin, että sen kytkin on rikki eikä lamppu syty ollenkaan.\n\nTämän vuoksi olen joutunut käyttämään huonetta ilman kunnollista valaistusta jo kaksi viikkoa. Olen pettynyt, koska tuote maksoi melko paljon ja odotin siltä parempaa laatua.\n\nToivon, että lähetätte minulle joko korjatun tai uuden lampun mahdollisimman pian, tai vaihtoehtoisesti palautatte maksamani rahat kokonaisuudessaan. Odotan vastaustanne viikon sisällä.\n\nYstävällisin terveisin,\nAsiakas',
    },
    speaking: {
      id: 's-exam2',
      weekId: 1014,
      title: 'Neuvoja Suomeen muuttaneelle',
      level: 'B1',
      instructions:
        'Kuvittele, että ystäväsi on juuri muuttanut Suomeen eikä tunne vielä maan tapoja. Anna hänelle kolme käytännön neuvoa arkielämästä Suomessa (esim. asioinnista, kulttuurista tai kielestä).',
      prepSeconds: 45,
      speakSeconds: 100,
      helpfulPhrases: [
        'Ensimmäinen neuvoni on...',
        'Kannattaa muistaa, että...',
        'Suomessa on tapana...',
        'Toinen tärkeä asia on...',
        'Lopuksi suosittelisin...',
      ],
    },
  },

  {
    id: 'exam-set-3',
    title: 'Koepaketti 3',
    titleBn: 'পরীক্ষার সেট ৩',
    level: ['B1', 'B2'],
    reading: {
      id: 'r-exam3',
      weekId: 1021,
      title: 'Lyhytartikkeli: Tekoäly arjessa',
      level: 'B2',
      textFi: `Tekoäly hiipii yhä syvemmälle arkeemme

Vielä kymmenen vuotta sitten tekoäly tuntui monista kaukaiselta tulevaisuuden ilmiöltä, joka esiintyi lähinnä tieteiselokuvissa. Nykyään tilanne on toinen: tekoälyä hyödynnetään päivittäin muun muassa puhelimen kameran kuvankäsittelyssä, verkkokaupan tuotesuosituksissa ja jopa sairauksien diagnosoinnissa.

Monet asiantuntijat pitävät kehitystä pääosin myönteisenä. Tekoäly voi esimerkiksi auttaa lääkäreitä havaitsemaan sairauksia aikaisemmassa vaiheessa, tai helpottaa opiskelijoita löytämään juuri heille sopivaa oppimateriaalia. Samalla monet tehtävät, joita ihmiset ovat aiemmin tehneet käsin, nopeutuvat huomattavasti.

Kehitykseen liittyy kuitenkin myös huolenaiheita. Osa asiantuntijoista varoittaa, että tekoälyn laaja käyttö voi johtaa työpaikkojen katoamiseen tietyillä aloilla, erityisesti sellaisissa tehtävissä, jotka ovat rutiininomaisia ja helposti automatisoitavissa. Lisäksi keskustelua on herättänyt se, kuinka luotettavia tekoälyn tekemät päätökset todella ovat, ja kuka on vastuussa, jos tekoäly tekee virheen.

Tulevaisuudessa keskeinen kysymys ei todennäköisesti ole se, käytetäänkö tekoälyä yhä enemmän, vaan se, miten sen käyttöä säädellään niin, että hyödyt saadaan käyttöön ilman kohtuuttomia riskejä.`,
      questions: [
        {
          id: 'q1',
          question: 'Miten tekstin mukaan suhtautuminen tekoälyyn on muuttunut kymmenessä vuodessa?',
          options: [
            'Se on muuttunut yhä epäilevämmäksi.',
            'Se on siirtynyt kaukaisesta tulevaisuuskuvasta osaksi arkea.',
            'Kukaan ei enää käytä sitä.',
            'Se on pysynyt täysin samana.',
          ],
          correctIndex: 1,
        },
        {
          id: 'q2',
          question: 'Mikä on esimerkki tekoälyn myönteisestä vaikutuksesta tekstin mukaan?',
          options: [
            'Se poistaa kaikki työpaikat.',
            'Se voi auttaa havaitsemaan sairauksia aikaisemmin.',
            'Se korvaa opettajat kokonaan.',
            'Se tekee kaikki päätökset ihmisten puolesta.',
          ],
          correctIndex: 1,
        },
        {
          id: 'q3',
          question: 'Millaisiin tehtäviin tekoälyn arvellaan vaikuttavan eniten työmarkkinoilla?',
          options: [
            'Luoviin ja ainutlaatuisiin tehtäviin',
            'Rutiininomaisiin, helposti automatisoitavissa oleviin tehtäviin',
            'Vain johtotason tehtäviin',
            'Vain käsityöammatteihin',
          ],
          correctIndex: 1,
        },
        {
          id: 'q4',
          question: 'Mikä huolenaihe liittyy tekoälyn tekemiin päätöksiin?',
          options: [
            'Ne ovat aina täysin virheettömiä.',
            'Kysymys niiden luotettavuudesta ja vastuusta virhetilanteissa.',
            'Ne ovat liian hitaita verrattuna ihmisiin.',
            'Niitä ei voi käyttää lainkaan sairaanhoidossa.',
          ],
          correctIndex: 1,
        },
        {
          id: 'q5',
          question: 'Mikä on tekstin mukaan tulevaisuuden keskeinen kysymys?',
          options: [
            'Käytetäänkö tekoälyä ylipäätään enää',
            'Miten tekoälyn käyttöä säädellään, jotta hyödyt saadaan ilman kohtuuttomia riskejä',
            'Voiko tekoäly korvata kaikki ihmiset',
            'Pitäisikö tekoäly kieltää kokonaan',
          ],
          correctIndex: 1,
        },
      ],
    },
    listening: {
      id: 'l-exam3',
      weekId: 1022,
      title: 'Ystävysten viikonloppusuunnitelmat',
      level: 'B1',
      scriptFi: `Elina: Hei! Oletko valmis lähtemään mökille perjantaina? Odotan tätä viikonloppua ihan hirveästi.
Jasmin: Hei Elina... itse asiassa halusin puhua siitä. Työpaikalla tuli yllättäen kiireinen projekti, ja pomo pyysi minua tulemaan töihin lauantaina.
Elina: Voi ei, se on kyllä harmillista. Tarkoittaako se, ettet pääse mökille ollenkaan?
Jasmin: En usko, että ehdin perjantaina teidän kanssanne, mutta voisin ehkä tulla lauantai-iltana töiden jälkeen, jos se sopii.
Elina: Se sopii toki! Onko sinulla mitään mahdollisuutta päästä sinne itse, vai tarvitsetko kyydin?
Jasmin: Voisin ehkä tulla junalla lähimpään asemaan, jos joku voisi hakea minut sieltä.
Elina: Totta kai, Marko voi hakea sinut, hän on kuitenkin menossa hakemaan lisää ruokaa lauantai-iltapäivällä.
Jasmin: Loistavaa, kiitos ymmärryksestä! Pahoittelen todella, että aikataulu meni sekaisin.
Elina: Ei se mitään, tärkeintä on, että pääset edes osaksi viikonloppua mukaan. Ilmoitan Markolle junan aikataulun heti kun tiedät sen.`,
      questions: [
        {
          id: 'q1',
          question: 'Mikä muuttaa Jasminin suunnitelmia?',
          options: ['Hän sairastuu', 'Yllättävä kiireinen projekti töissä', 'Auto hajoaa', 'Hän ei halua mennä mökille'],
          correctIndex: 1,
        },
        {
          id: 'q2',
          question: 'Milloin Jasmin arvioi pääsevänsä mökille?',
          options: ['Perjantaina aamulla', 'Perjantai-iltana', 'Lauantai-iltana töiden jälkeen', 'Vasta sunnuntaina'],
          correctIndex: 2,
        },
        {
          id: 'q3',
          question: 'Miten Jasmin aikoo päästä mökille?',
          options: ['Omalla autolla', 'Junalla, ja joku hakee hänet asemalta', 'Kävellen', 'Hän ei pääse ollenkaan'],
          correctIndex: 1,
        },
        {
          id: 'q4',
          question: 'Millainen Elinan reaktio on tilanteeseen keskustelun perusteella?',
          options: [
            'Hän suuttuu ja peruu koko viikonlopun.',
            'Hän on ymmärtäväinen ja järjestää käytännön ratkaisun.',
            'Hän ei välitä, pääseekö Jasmin mukaan vai ei.',
            'Hän syyttää Jasminia suunnitelmien muuttamisesta.',
          ],
          correctIndex: 1,
        },
      ],
    },
    writing: {
      id: 'w-exam3',
      weekId: 1023,
      title: 'Henkilökohtainen kertomus: Muutokseen sopeutuminen',
      level: 'B2',
      instructions:
        'Kirjoita henkilökohtainen kertomus tilanteesta, jossa jouduit sopeutumaan isoon muutokseen elämässäsi (esim. muutto, uusi työ, uusi kieli tai muu iso muutos). Kerro, mikä muuttui, miltä se tuntui, ja miten lopulta sopeuduit tilanteeseen.',
      minWords: 170,
      maxWords: 250,
      timeMinutes: 40,
      rubric: [
        'Kerroit selkeästi, mikä muutos elämässäsi tapahtui.',
        'Kuvailit, miltä muutos tuntui aluksi (tunteet, haasteet).',
        'Kerroit konkreettisesti, miten sopeuduit tilanteeseen.',
        'Käytit sekä imperfektiä että tarvittaessa perfektiä kertoessasi tapahtumista.',
        'Teksti etenee johdonmukaisesti alusta loppuun (aikajärjestys selkeä).',
      ],
      modelAnswer:
        'Suurin muutos elämässäni oli, kun muutin kotimaastani Suomeen kolme vuotta sitten. Aluksi kaikki tuntui vieraalta: kieli, sää ja jopa arkiset tavat olivat hyvin erilaisia kuin mihin olin tottunut.\n\nEnsimmäiset kuukaudet olivat vaikeita. En ymmärtänyt suomea juuri lainkaan, ja tunsin itseni usein yksinäiseksi, koska en osannut kommunikoida naapureiden kanssa. Olin myös huolissani siitä, löydänkö koskaan työtä uudessa maassa.\n\nVähitellen aloin kuitenkin sopeutua. Aloitin suomen kielen kurssin, ja opin joka viikko vähän lisää. Löysin myös muita samassa tilanteessa olevia ihmisiä, joiden kanssa saatoin harjoitella kieltä ja jakaa kokemuksia. Tämä auttoi minua tuntemaan oloni vähemmän yksinäiseksi.\n\nNyt, kolme vuotta myöhemmin, tunnen Suomen jo toiseksi kodikseni. Muutos oli vaikea, mutta opin sen kautta paljon itsestäni ja siitä, kuinka tärkeää on olla kärsivällinen uusien asioiden edessä.',
    },
    speaking: {
      id: 's-exam3',
      weekId: 1024,
      title: 'Vertaile kahta tapaa tehdä jotain',
      level: 'B1',
      instructions:
        'Vertaile kahta eri tapaa tehdä jokin arkinen asia (esim. verkko-ostokset vs. kaupassa käynti, etäopiskelu vs. lähiopetus, tai kaksi eri asuinaluetta). Kerro molempien hyviä ja huonoja puolia ja kerro lopuksi, kumman valitsisit itse ja miksi.',
      prepSeconds: 45,
      speakSeconds: 110,
      helpfulPhrases: [
        'X ja Y ovat molemmat...',
        'X on... , kun taas Y on...',
        'Toisaalta... mutta toisaalta...',
        'Itse valitsisin... koska...',
        'Kaiken kaikkiaan...',
      ],
    },
  },

  {
    id: 'exam-set-4',
    title: 'Koepaketti 4',
    titleBn: 'পরীক্ষার সেট ৪',
    level: ['B1', 'B2'],
    reading: {
      id: 'r-exam4',
      weekId: 1031,
      title: 'Sähkösopimusten vertailu kannattaa tehdä huolella',
      level: 'B2',
      textFi: `Sähkösopimusten vertailu kannattaa tehdä huolella

Sähkön hinta on puhuttanut suomalaisia kuluttajia viime vuosina paljon, ja yhä useampi miettii, kannattaisiko vaihtaa sähkösopimustaan. Tarjolla on pääasiassa kahdenlaisia sopimuksia: kiinteähintainen sopimus ja pörssisähkösopimus.

Kiinteähintaisessa sopimuksessa sähkön hinta pysyy samana koko sopimuskauden ajan, esimerkiksi vuoden tai kahden. Tämä sopii hyvin niille, jotka arvostavat ennustettavuutta ja haluavat tietää tarkalleen, paljonko lasku on joka kuukausi. Pörssisähkösopimuksessa hinta puolestaan vaihtelee tunneittain markkinatilanteen mukaan. Öisin ja tuulisina päivinä hinta voi olla hyvinkin edullinen, mutta kylminä pakkaspäivinä se voi nousta yllättävän korkeaksi.

Asiantuntijoiden mukaan pörssisähkö kannattaa erityisesti kuluttajille, jotka pystyvät siirtämään sähkönkulutustaan, kuten pyykinpesua tai auton lataamista, halvempiin tunteihin. Jos taas kulutusta ei voi juurikaan ajoittaa, kiinteä hinta voi tuoda enemmän mielenrauhaa, vaikka se ei aina olisikaan halvin vaihtoehto pitkällä aikavälillä.

Ennen sopimuksen vaihtamista kannattaa aina lukea sopimusehdot huolellisesti ja verrata useamman yhtiön tarjouksia. Myös mahdollinen irtisanomisaika kannattaa tarkistaa, jotta yllätyksiltä vältytään.`,
      questions: [
        {
          id: 'q1',
          question: 'Minkälaisia sähkösopimuksia tekstissä vertaillaan?',
          options: ['Vain kiinteähintaisia sopimuksia', 'Aurinkosähköä ja tuulisähköä', 'Kiinteähintaista ja pörssisähkösopimusta', 'Ulkomaisia ja kotimaisia sähköyhtiöitä'],
          correctIndex: 2,
        },
        {
          id: 'q2',
          question: 'Mikä on kiinteähintaisen sopimuksen suurin etu tekstin mukaan?',
          options: ['Se on aina halvin vaihtoehto', 'Hinta pysyy samana ja on ennustettava', 'Se sopii vain yrityksille', 'Siinä ei tarvitse maksaa kuukausittain'],
          correctIndex: 1,
        },
        {
          id: 'q3',
          question: 'Milloin pörssisähkön hinta on tekstin mukaan yleensä edullisempaa?',
          options: ['Kylminä pakkaspäivinä', 'Vain viikonloppuisin', 'Öisin ja tuulisina päivinä', 'Aina kesäkuukausina'],
          correctIndex: 2,
        },
        {
          id: 'q4',
          question: 'Kenelle pörssisähkösopimus sopii asiantuntijoiden mukaan erityisen hyvin?',
          options: [
            'Niille, jotka voivat siirtää kulutustaan halvempiin tunteihin',
            'Niille, jotka eivät koskaan käytä sähköä',
            'Vain suuryrityksille',
            'Niille, jotka asuvat kerrostalossa',
          ],
          correctIndex: 0,
        },
        {
          id: 'q5',
          question: 'Mitä tekstin perusteella kannattaa tehdä ennen sopimuksen vaihtamista?',
          options: [
            'Vaihtaa sopimusta miettimättä asiaa tarkemmin',
            'Odottaa, että hinta laskee automaattisesti',
            'Soittaa vain yhdelle sähköyhtiölle',
            'Verrata tarjouksia ja tarkistaa sopimusehdot sekä irtisanomisajan',
          ],
          correctIndex: 3,
        },
      ],
    },
    listening: {
      id: 'l-exam4',
      weekId: 1032,
      title: 'Asiakaspalvelu: Virhe puhelinlaskussa',
      level: 'B1',
      scriptFi: `Asiakaspalvelija: Kiitos kun odotitte, tässä asiakaspalvelu, nimeni on Laura. Miten voin auttaa?
Asiakas: Hei, soitan koska viime kuun laskuni oli paljon tavallista suurempi, enkä ymmärrä miksi.
Asiakaspalvelija: Selvä, katsotaanpa. Voisitteko kertoa asiakasnumeronne tai puhelinnumeronne, josta löydän tiedot?
Asiakas: Toki, numero on 040 123 4567.
Asiakaspalvelija: Kiitos, hetkinen... Näen tässä, että laskuunne on lisätty ylimääräinen maksu ulkomailla käytetystä datasta. Oletteko matkustanut viime kuussa?
Asiakas: Olin viikon Virossa, mutta minulla piti olla EU-alueen datapaketti käytössä, joten en ymmärrä miksi siitä tulisi lisämaksua.
Asiakaspalvelija: Tarkistan asian... Näyttää siltä, että pakettinne oli vahingossa päättynyt kuukautta aiemmin eikä se uusiutunut automaattisesti järjestelmävirheen vuoksi. Pahoittelen tätä.
Asiakas: No sehän selittää asian. Voidaanko lisämaksu hyvittää?
Asiakaspalvelija: Ehdottomasti, teen heti hyvityksen koko ylimääräisestä summasta, ja lisään pakettinne uudelleen voimaan, ettei sama toistu.
Asiakas: Kiitos paljon avusta, tämä helpotti oloani huomattavasti.
Asiakaspalvelija: Ei kestä kiittää, pahoittelen vielä kerran vaivaa. Onko muuta, missä voisin auttaa?
Asiakas: Ei tällä kertaa, kiitos.
Asiakaspalvelija: Kiitos soitostanne ja mukavaa päivänjatkoa!`,
      questions: [
        {
          id: 'q1',
          question: 'Miksi asiakas soittaa asiakaspalveluun?',
          options: ['Hän haluaa vaihtaa liittymän toiseen operaattoriin', 'Hänen laskunsa oli tavallista suurempi', 'Hän on hukannut puhelimensa', 'Hän haluaa perua koko liittymän'],
          correctIndex: 1,
        },
        {
          id: 'q2',
          question: 'Mistä ylimääräinen maksu laskussa johtui?',
          options: [
            'Asiakas käytti liikaa dataa tarkoituksella',
            'Operaattori nosti kaikkien hintoja',
            'EU-alueen datapaketti oli päättynyt järjestelmävirheen vuoksi',
            'Asiakas ei ollut maksanut edellistä laskua',
          ],
          correctIndex: 2,
        },
        {
          id: 'q3',
          question: 'Mitä asiakaspalvelija lupaa tehdä ongelman ratkaisemiseksi?',
          options: [
            'Hyvittää ylimääräisen summan ja aktivoida paketin uudelleen',
            'Sulkea asiakkaan liittymän kokonaan',
            'Lähettää asiakkaalle uuden puhelimen',
            'Veloittaa asiakasta lisää selvitystyöstä',
          ],
          correctIndex: 0,
        },
        {
          id: 'q4',
          question: 'Miltä asiakkaasta todennäköisesti tuntuu puhelun lopussa?',
          options: [
            'Yhä turhautuneelta ja tyytymättömältä',
            'Helpottuneelta, koska asia selvisi ja korjattiin',
            'Välinpitämättömältä koko asiasta',
            'Vihaiselta asiakaspalvelijalle',
          ],
          correctIndex: 1,
        },
      ],
    },
    writing: {
      id: 'w-exam4',
      weekId: 1033,
      title: 'Hakemus: Paikka täydennyskoulutukseen',
      level: 'B2',
      instructions:
        'Kirjoita hakemuskirje, jossa haet paikkaa itse valitsemallesi ammatilliselle täydennyskoulutukselle tai kurssille. Kerro, kuka olet ja mikä on koulutus- tai työtaustasi, miksi haluat juuri tälle kurssille, ja mitä hyötyä koulutuksesta olisi sinulle ja mahdollisesti työnantajallesi. Käytä asiallista ja kohteliasta kieltä koko kirjeen ajan.',
      minWords: 160,
      maxWords: 230,
      timeMinutes: 35,
      rubric: [
        'Esittelit itsesi ja taustasi lyhyesti kirjeen alussa.',
        'Kerroit selkeästi, mihin koulutukseen haet ja miksi.',
        'Perustelit, mitä hyötyä koulutuksesta olisi sinulle.',
        'Käytit kohteliasta ja asiallista kirjekieltä (esim. kohteliaisuusmuotoja, passiivia).',
        'Kirje on jäsennelty selkeästi: aloitus, perustelut, lopetus ja allekirjoitus.',
      ],
      modelAnswer:
        'Arvoisa vastaanottaja,\n\nHaen täten paikkaa järjestämällenne asiakaspalvelun täydennyskoulutukseen, joka alkaa syyskuussa. Olen työskennellyt kolme vuotta asiakaspalvelussa vähittäiskaupan alalla, ja koen, että osaamistani olisi hyvä syventää erityisesti vaativien asiakastilanteiden hoitamisessa.\n\nKiinnostuin juuri tästä koulutuksesta, koska sen sisältö vastaa täsmällisesti niitä taitoja, joita tarvitsen työssäni päivittäin. Uskon, että koulutuksen käytyäni pystyisin ratkaisemaan hankaliakin asiakastilanteita entistä rauhallisemmin ja ammattimaisemmin.\n\nKoulutuksesta olisi hyötyä sekä minulle että työnantajalleni, sillä paremmat vuorovaikutustaidot näkyisivät suoraan asiakastyytyväisyydessä. Olen valmis osallistumaan koulutukseen joko työajalla tai vapaa-ajallani, mikäli se on tarpeen.\n\nToivon, että hakemukseni otetaan huomioon, ja vastaan mielelläni lisäkysymyksiin, mikäli sellaisia ilmenee.\n\nYstävällisin terveisin,\nHakija',
    },
    speaking: {
      id: 's-exam4',
      weekId: 1034,
      title: 'Kuvaile tyypillistä työ- tai opiskelupäivääsi',
      level: 'B1',
      instructions:
        'Kuvaile tyypillistä työ- tai opiskelupäivääsi aamusta iltaan. Kerro, mihin aikaan heräät, mitä teet päivän aikana, ja mikä osa päivästä on sinulle mieluisin.',
      prepSeconds: 45,
      speakSeconds: 100,
      helpfulPhrases: [
        'Tavallinen päiväni alkaa...',
        'Aamulla minä yleensä...',
        'Päivän aikana...',
        'Mieluisin hetkeni on...',
        'Illalla lopetan päiväni...',
      ],
    },
  },

  {
    id: 'exam-set-5',
    title: 'Koepaketti 5',
    titleBn: 'পরীক্ষার সেট ৫',
    level: ['B1', 'B2'],
    reading: {
      id: 'r-exam5',
      weekId: 1041,
      title: 'Kaupunki suunnittelee laajaa pyörätieverkoston uudistusta',
      level: 'B2',
      textFi: `Kaupunki suunnittelee laajaa pyörätieverkoston uudistusta

Kaupunginhallitus on esitellyt suunnitelman, jonka mukaan keskustan alueelle rakennettaisiin seuraavan kolmen vuoden aikana yli kaksikymmentä kilometriä uusia pyöräteitä. Hankkeen tavoitteena on vähentää autoliikennettä keskustassa ja tehdä pyöräilystä turvallisempaa ja houkuttelevampaa vaihtoehtoa erityisesti työmatkaliikenteessä.

Osa asukkaista on ottanut suunnitelman innolla vastaan. Monet pyöräilijät ovat kauan toivoneet erillisiä, autoliikenteestä selkeästi erotettuja pyöräkaistoja, sillä nykyiset kapeat pientareet koetaan usein vaarallisiksi. Myös ympäristöjärjestöt ovat kannattaneet hanketta, sillä pyöräilyn lisääntyminen vähentäisi liikenteen päästöjä.

Toisaalta osa kauppiaista ja autoilijoista on huolissaan suunnitelman vaikutuksista. Uusien pyöräteiden rakentaminen vaatisi useiden autopaikkojen poistamista keskustan kaduilta, mikä huolestuttaa erityisesti niitä yrittäjiä, joiden asiakkaat saapuvat usein autolla. Osa asukkaista puolestaan pelkää, että rakennustyöt aiheuttavat pitkäaikaista haittaa liikenteelle rakennusvaiheen aikana.

Kaupunki on luvannut järjestää asukastilaisuuden, jossa suunnitelmasta voi keskustella ja esittää kysymyksiä ennen lopullista päätöstä. Lopullinen päätös hankkeesta tehdään todennäköisesti ensi vuoden alussa.`,
      questions: [
        {
          id: 'q1',
          question: 'Mikä on hankkeen päätavoite?',
          options: ['Lisätä autopaikkoja keskustassa', 'Vähentää autoliikennettä ja tehdä pyöräilystä turvallisempaa', 'Rakentaa uusi ostoskeskus', 'Poistaa julkinen liikenne kokonaan'],
          correctIndex: 1,
        },
        {
          id: 'q2',
          question: 'Miksi monet pyöräilijät kannattavat suunnitelmaa?',
          options: ['Koska nykyiset pientareet koetaan usein vaarallisiksi', 'Koska he eivät välitä turvallisuudesta', 'Koska pyöräteitä ei ole ennen ollut lainkaan', 'Koska autoilu kielletään kokonaan'],
          correctIndex: 0,
        },
        {
          id: 'q3',
          question: 'Mikä huolestuttaa osaa kauppiaista?',
          options: ['Pyöräteiden väri', 'Pyöräilijöiden määrän väheneminen', 'Autopaikkojen poistaminen keskustan kaduilta', 'Kaupungin budjetin kasvaminen liikaa'],
          correctIndex: 2,
        },
        {
          id: 'q4',
          question: 'Mitä tekstistä voi päätellä asukkaiden suhtautumisesta suunnitelmaan?',
          options: [
            'Kaikki asukkaat vastustavat sitä yksimielisesti',
            'Kukaan ei ole kiinnostunut asiasta',
            'Kaikki asukkaat kannattavat sitä täysin varauksetta',
            'Mielipiteet jakautuvat: osa kannattaa, osa on huolissaan',
          ],
          correctIndex: 3,
        },
        {
          id: 'q5',
          question: 'Mitä kaupunki aikoo tehdä ennen lopullista päätöstä?',
          options: [
            'Tehdä päätöksen kysymättä asukkailta mitään',
            'Aloittaa rakennustyöt välittömästi',
            'Perua koko hankkeen heti',
            'Järjestää asukastilaisuuden keskustelua ja kysymyksiä varten',
          ],
          correctIndex: 3,
        },
      ],
    },
    listening: {
      id: 'l-exam5',
      weekId: 1042,
      title: 'Naapurit keskustelevat uusista pysäköintisäännöistä',
      level: 'B1',
      scriptFi: `Pekka: Moi Liisa! Näitkö tuon ilmoituksen pihan pysäköinnistä? Taloyhtiö aikoo rajata jokaiselle asunnolle vain yhden paikan.
Liisa: Näin, ja täytyy sanoa, etten ole kovin innoissani. Meillä on kaksi autoa, joten toinen jäisi kadulle.
Pekka: Ymmärrän kyllä, mutta toisaalta pihalla on ollut viime aikoina tosi ahdasta, kun vieraatkin pysäköivät sinne miten sattuu.
Liisa: Se on totta, ja vieraspaikkoja on liian vähän. Mutta eikö olisi reilumpaa, että paikkoja jaettaisiin tarpeen mukaan eikä tasan per asunto?
Pekka: Hyvä pointti. Ehkä voisimme ehdottaa hallitukselle, että osa paikoista olisi kiinteitä ja osa yhteiskäytössä niille, joilla on useampi auto tai vieraita.
Liisa: Se kuulostaisi paljon järkevämmältä ratkaisulta kuin tiukka yksi-paikka-sääntö. Voisimmeko kirjoittaa yhdessä ehdotuksen hallitukselle?
Pekka: Toki, kirjoitetaan se tänä viikonloppuna ja viedään seuraavaan kokoukseen.
Liisa: Sovittu. Kiva, että löydettiin yhteinen näkemys tästäkin asiasta.`,
      questions: [
        {
          id: 'q1',
          question: 'Mikä muutos taloyhtiön pihan pysäköintiin on ehdotettu?',
          options: ['Pysäköinti kielletään kokonaan', 'Jokaiselle asunnolle varataan vain yksi paikka', 'Kaikki paikat muutetaan vieraspaikoiksi', 'Pihalle rakennetaan parkkihalli'],
          correctIndex: 1,
        },
        {
          id: 'q2',
          question: 'Mikä on Liisan huoli asiassa?',
          options: ['Hänellä ei ole autoa lainkaan', 'Hän ei halua maksaa pysäköinnistä', 'Heillä on kaksi autoa, joten toinen jäisi kadulle', 'Hän ei tunne naapureita'],
          correctIndex: 2,
        },
        {
          id: 'q3',
          question: 'Mihin ratkaisuun Pekka ja Liisa lopulta päätyvät?',
          options: [
            'He päättävät olla tekemättä mitään',
            'He ehdottavat osaa paikoista kiinteiksi ja osaa yhteiskäyttöön',
            'He päättävät myydä autonsa',
            'He riitaantuvat asiasta lopullisesti',
          ],
          correctIndex: 1,
        },
        {
          id: 'q4',
          question: 'Mitä keskustelu kertoo Pekan ja Liisan suhtautumisesta erimielisyyteen?',
          options: [
            'He välttelevät aihetta kokonaan',
            'He kilpailevat siitä, kumpi on oikeassa',
            'He jättävät asian täysin hallituksen päätettäväksi ilman omaa kantaa',
            'He etsivät yhdessä molempia tyydyttävää ratkaisua',
          ],
          correctIndex: 3,
        },
      ],
    },
    writing: {
      id: 'w-exam5',
      weekId: 1043,
      title: 'Mielipidekirjoitus: Sosiaalinen media – hyötyä vai haittaa?',
      level: 'B2',
      instructions:
        'Kirjoita mielipidekirjoitus aiheesta "Tekeekö sosiaalinen media nykyään enemmän hyvää vai haittaa?". Ilmaise selkeä kanta heti alussa, perustele kantasi vähintään kahdella syyllä, ota huomioon myös vastakkainen näkökulma, ja päätä teksti yhteenvetoon.',
      minWords: 180,
      maxWords: 260,
      timeMinutes: 40,
      rubric: [
        'Ilmaisit selkeän oman kannan heti tekstin alussa.',
        'Perustelit kantasi vähintään kahdella konkreettisella esimerkillä tai syyllä.',
        'Otit huomioon myös vastakkaisen näkökulman.',
        'Käytit monipuolisia konnektoreita (esimerkiksi, toisaalta, näin ollen, kuitenkin).',
        'Teksti on jäsennelty selkeästi: johdanto, perustelut, yhteenveto.',
      ],
      modelAnswer:
        'Mielestäni sosiaalinen media tekee nykyään sekä hyvää että haittaa, mutta kokonaisuutena sen hyödyt voivat olla suurempia, jos sitä käytetään harkiten.\n\nEnsinnäkin sosiaalinen media mahdollistaa yhteydenpidon kaukanakin asuvien ystävien ja sukulaisten kanssa, mikä ei olisi yhtä helppoa ilman sitä. Toiseksi se on tärkeä tiedonlähde monille: uutiset, vertaistuki ja erilaiset yhteisöt löytyvät nykyään usein juuri sosiaalisesta mediasta.\n\nToisaalta on selvää, että sosiaalisella medialla on myös kielteisiä vaikutuksia. Monet tutkimukset ovat osoittaneet, että liiallinen käyttö voi lisätä ahdistusta ja huonontaa unenlaatua, erityisesti nuorilla. Lisäksi some voi altistaa jatkuvalle vertailulle muihin, mikä voi heikentää itsetuntoa.\n\nNäin ollen uskon, että sosiaalinen media itsessään ei ole hyvä eikä huono, vaan ratkaiseva tekijä on se, miten ja kuinka paljon sitä käytetään. Kun käyttöä osaa rajoittaa ja valita sisällöt harkiten, hyödyt voivat selvästi ylittää haitat.',
    },
    speaking: {
      id: 's-exam5',
      weekId: 1044,
      title: 'Kuvaile unelmiesi asumismuotoa',
      level: 'B1',
      instructions:
        'Kuvaile, millainen olisi ihanteellinen asumismuotosi tai kotisi. Kerro, missä se sijaitsisi, millainen se olisi, ja miksi juuri sellainen asuminen sopisi sinulle parhaiten.',
      prepSeconds: 50,
      speakSeconds: 100,
      helpfulPhrases: [
        'Unelmieni koti sijaitsisi...',
        'Se olisi kooltaan...',
        'Tärkeintä minulle asumisessa on...',
        'Valitsisin tämän, koska...',
        'Verrattuna nykyiseen kotiini...',
      ],
    },
  },

  {
    id: 'exam-set-6',
    title: 'Koepaketti 6',
    titleBn: 'পরীক্ষার সেট ৬',
    level: ['B1', 'B2'],
    reading: {
      id: 'r-exam6',
      weekId: 1051,
      title: 'Tutkimus: Yhä useampi suomalainen nukkuu liian vähän',
      level: 'B2',
      textFi: `Uusi tutkimus: Yhä useampi suomalainen nukkuu liian vähän

Tuore kyselytutkimus paljastaa, että lähes kolmannes suomalaisista aikuisista nukkuu säännöllisesti alle kuusi tuntia yössä, vaikka asiantuntijat suosittelevat aikuisille seitsemästä yhdeksään tuntiin yöunta. Tutkijoiden mukaan kehitys on huolestuttava, sillä krooninen unenpuute on yhdistetty muun muassa keskittymisvaikeuksiin, heikentyneeseen immuunipuolustukseen ja pidemmällä aikavälillä myös sydän- ja verisuonisairauksien riskiin.

Tutkimuksen mukaan yleisimpiä syitä unenpuutteeseen ovat työhön liittyvä stressi, myöhäiseen iltaan venyvä ruutuaika sekä epäsäännölliset työajat. Erityisesti nuoret aikuiset raportoivat nukkuvansa liian vähän, sillä moni heistä kertoo valvovansa myöhään sosiaalista mediaa selatessaan, vaikka tietääkin sen vaikuttavan seuraavan päivän jaksamiseen.

Uniasiantuntijat muistuttavat, ettei unenpuutetta voi täysin korvata nukkumalla pitkään viikonloppuisin. Sen sijaan he suosittelevat säännöllistä nukkumaanmenoaikaa, ruutuajan vähentämistä ennen nukkumaanmenoa sekä rauhallista iltarutiinia. Monet työpaikat ovatkin alkaneet kiinnittää huomiota työntekijöiden unen laatuun, sillä hyvin nukkunut työntekijä on tutkitusti tuottavampi ja vähemmän sairaslomalla.

Tutkijat toivovat, että tulokset herättäisivät laajempaa keskustelua siitä, miten työelämän ja arjen rakenteita voitaisiin muuttaa unen kannalta suotuisammiksi.`,
      questions: [
        {
          id: 'q1',
          question: 'Kuinka moni suomalainen aikuinen tutkimuksen mukaan nukkuu säännöllisesti alle kuusi tuntia yössä?',
          options: ['Lähes puolet', 'Lähes kolmannes', 'Vain harva', 'Käytännössä kaikki'],
          correctIndex: 1,
        },
        {
          id: 'q2',
          question: 'Mikä on tutkijoiden mukaan yksi unenpuutteen riski pitkällä aikavälillä?',
          options: ['Parempi keskittymiskyky', 'Pidempi elinikä', 'Sydän- ja verisuonisairauksien riskin kasvu', 'Parantunut immuunipuolustus'],
          correctIndex: 2,
        },
        {
          id: 'q3',
          question: 'Mikä on yksi yleisimmistä syistä unenpuutteeseen tekstin mukaan?',
          options: ['Liian aikainen nukkumaanmeno', 'Liian pitkät yöunet', 'Myöhäiseen iltaan venyvä ruutuaika', 'Liian vähäinen työmäärä'],
          correctIndex: 2,
        },
        {
          id: 'q4',
          question: 'Miksi nukkuminen pitkään viikonloppuisin ei tekstin mukaan riitä korvaamaan unenpuutetta?',
          options: [
            'Koska asiantuntijat eivät ole tutkineet asiaa',
            'Koska viikonloppuisin ei saa nukkua pitkään',
            'Koska se on kiellettyä',
            'Koska viikon aikana kertynyttä unenpuutetta ei voi täysin korvata sillä',
          ],
          correctIndex: 3,
        },
        {
          id: 'q5',
          question: 'Miksi työpaikat ovat alkaneet kiinnittää huomiota työntekijöiden uneen?',
          options: [
            'Koska hyvin nukkunut työntekijä on tuottavampi ja vähemmän sairaslomalla',
            'Koska laki vaatii sitä',
            'Koska unenpuute ei vaikuta työhön mitenkään',
            'Koska se on halvempaa kuin muut hyvinvointitoimet',
          ],
          correctIndex: 0,
        },
      ],
    },
    listening: {
      id: 'l-exam6',
      weekId: 1052,
      title: 'Kämppikset sopivat kotitöiden jaosta',
      level: 'B1',
      scriptFi: `Aino: Hei, mietin että meidän pitäisi vihdoin sopia selkeästi, kuka tekee mitäkin kotitöitä. Nyt tuntuu, että minä siivoan aina keittiön.
Ville: Niin, olet oikeassa, se ei ole reilua. Itse taas hoidan roskat ja kaupassa käynnin lähes joka kerta.
Aino: Totta, ehkä meidän kannattaisi tehdä oikea vuorolista, jotta molemmat tietäisivät tarkalleen, mikä on kenenkin vastuulla.
Ville: Hyvä idea. Voisimmeko jakaa työt esimerkiksi niin, että minä hoidan keittiön yhden viikon ja sinä seuraavan, sen sijaan että keittiö olisi aina sinun?
Aino: Se kuulostaa reilulta. Entä roskat ja kauppa? Voisimmeko vuorotella niitäkin?
Ville: Voidaan kokeilla. Ehdotan, että laitamme listan jääkaapin oveen, jotta kumpikin muistaa, kenen vuoro on mikäkin viikko.
Aino: Loistava ajatus. Sitten emme enää riitele siitä, kenen olisi pitänyt tehdä mitäkin.
Ville: Juuri niin. Kokeillaan tätä kuukausi ja katsotaan, toimiiko se meille.`,
      questions: [
        {
          id: 'q1',
          question: 'Mistä Aino on turhautunut keskustelun alussa?',
          options: ['Siitä, että hän joutuu aina siivoamaan keittiön', 'Siitä, ettei Ville käy koskaan kaupassa', 'Siitä, että Ville ei maksa vuokraa', 'Siitä, että asunto on liian pieni'],
          correctIndex: 0,
        },
        {
          id: 'q2',
          question: 'Mitä Ville on tähän asti hoitanut lähes joka kerta?',
          options: ['Keittiön siivouksen', 'Roskat ja kaupassa käynnin', 'Pyykinpesun', 'Ikkunoiden pesun'],
          correctIndex: 1,
        },
        {
          id: 'q3',
          question: 'Mihin ratkaisuun Aino ja Ville päätyvät?',
          options: [
            'He päättävät palkata siivoojan',
            'He päättävät olla tekemättä mitään kotitöitä',
            'He sopivat vuorottelevasta työnjaosta ja listasta jääkaapin ovessa',
            'He riitaantuvat eivätkä pääse sopuun',
          ],
          correctIndex: 2,
        },
        {
          id: 'q4',
          question: 'Mitä keskustelu kertoo Ainon ja Villen tavasta ratkaista erimielisyyksiä?',
          options: [
            'He välttävät aihetta eivätkä puhu siitä koskaan',
            'He keskustelevat avoimesti ja etsivät yhdessä reilun ratkaisun',
            'He riitelevät eivätkä löydä ratkaisua',
            'He jättävät asian aina toisen päätettäväksi',
          ],
          correctIndex: 1,
        },
      ],
    },
    writing: {
      id: 'w-exam6',
      weekId: 1053,
      title: 'Kertomus: Uuden taidon oppiminen',
      level: 'B2',
      instructions:
        'Kirjoita henkilökohtainen kertomus siitä, kun opit jonkin uuden taidon tai kielen. Kerro, miksi päätit opetella sen, millaisia vaikeuksia kohtasit matkan varrella, ja mitä opit itsestäsi prosessin aikana. Lopeta pohtimalla, miten kokemus on vaikuttanut sinuun.',
      minWords: 170,
      maxWords: 240,
      timeMinutes: 40,
      rubric: [
        'Kerroit, minkä taidon opit ja miksi päätit opetella sen.',
        'Kuvailit konkreettisesti matkan varrella kohtaamiasi vaikeuksia.',
        'Kerroit, miten selvisit vaikeuksista tai mikä auttoi sinua jatkamaan.',
        'Pohdit lopuksi, mitä opit itsestäsi ja miten kokemus vaikutti sinuun.',
        'Käytit sujuvasti sekä imperfektiä että tarvittaessa perfektiä ja pluskvamperfektiä.',
      ],
      modelAnswer:
        'Muutama vuosi sitten päätin opetella soittamaan kitaraa, vaikka en ollut aiemmin soittanut yhtäkään instrumenttia. Halusin oppia jotain uutta, joka veisi ajatukseni pois arjen kiireistä, ja kitara oli aina kiehtonut minua.\n\nAlku oli yllättävän vaikea. Sormeni olivat kipeät ensimmäisten viikkojen ajan, enkä meinannut saada otteitani soimaan puhtaasti. Monta kertaa mietin, kannattaako koko harrastusta jatkaa, kun edistyminen tuntui niin hitaalta.\n\nOnneksi olin liittynyt netistä löytämääni harjoitteluryhmään, jossa muut aloittelijat jakoivat samanlaisia kokemuksia. Se auttoi minua ymmärtämään, ettei vaikeus johtunut siitä, etten olisi tarpeeksi lahjakas, vaan siitä, että uuden taidon oppiminen vaatii yksinkertaisesti aikaa ja toistoa. Aloin harjoitella vain viisitoista minuuttia päivässä, mutta täysin säännöllisesti, ja edistyminen alkoi vähitellen näkyä.\n\nNyt, kun katson taaksepäin, huomaan oppineeni paljon muutakin kuin soittamisen. Opin, että kärsivällisyys ja pienet, toistuvat askeleet vievät pidemmälle kuin innostuksen puuska, joka sammuu ensimmäisen vastoinkäymisen kohdatessa. Tämä oivallus on auttanut minua myöhemmin myös muissa elämäni haasteissa.',
    },
    speaking: {
      id: 's-exam6',
      weekId: 1054,
      title: 'Väittele: "Neljän päivän työviikko olisi hyvä asia"',
      level: 'B2',
      instructions:
        'Ota kantaa väittämään "Neljän päivän työviikko olisi hyvä asia". Kerro, oletko samaa vai eri mieltä, ja perustele näkemyksesi vähintään kahdella syyllä. Ota puheenvuorossasi huomioon myös mahdollinen vastaväite.',
      prepSeconds: 60,
      speakSeconds: 120,
      helpfulPhrases: [
        'Olen sitä mieltä, että...',
        'Ensimmäinen syy tähän on...',
        'Toisaalta joku voisi väittää, että...',
        'Kuitenkin uskon, että...',
        'Kaiken kaikkiaan kantani on, että...',
      ],
    },
  },
]

export function examSet(id: string): ExamSet | undefined {
  return EXAM_SETS.find((s) => s.id === id)
}
