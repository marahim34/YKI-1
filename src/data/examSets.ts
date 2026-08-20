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
]

export function examSet(id: string): ExamSet | undefined {
  return EXAM_SETS.find((s) => s.id === id)
}
