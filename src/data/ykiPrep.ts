import type { YkiChapter } from '../types'

// YKI-valmennus: exam-prep chapters organized around the YKI test's own 9
// official themes and 4 subtests, each following the source material's
// lämmittele -> harjoittele -> testaa (warm-up -> practice -> test)
// progression. Distinct from Keskusteluharjoitukset (free-form speaking/
// writing practice). Reading texts, dialogues, and task instructions are
// transcribed from the user-supplied chapter content; English glosses are
// added where the source omitted them.

export const YKI_SUBTESTS: { nameFi: string; nameEn: string; minutes: number }[] = [
  { nameFi: 'Tekstin ymmärtäminen', nameEn: 'Reading', minutes: 60 },
  { nameFi: 'Kirjoittaminen', nameEn: 'Writing', minutes: 55 },
  { nameFi: 'Puheen ymmärtäminen', nameEn: 'Listening', minutes: 40 },
  { nameFi: 'Puhuminen', nameEn: 'Speaking', minutes: 25 },
]

export const YKI_THEMES: { fi: string; en: string }[] = [
  { fi: 'Minä ja taustani', en: 'Me and My Background' },
  { fi: 'Koti ja asuminen', en: 'Home and Housing' },
  { fi: 'Kauppa ja palvelut', en: 'Shops and Services' },
  { fi: 'Kulttuuri', en: 'Culture' },
  { fi: 'Matkustaminen', en: 'Traveling' },
  { fi: 'Terveys ja hyvinvointi', en: 'Health and Wellbeing' },
  { fi: 'Työ', en: 'Work' },
  { fi: 'Ympäristö', en: 'Environment' },
  { fi: 'Yhteiskunta', en: 'Society' },
]

const NO_TRANSCRIPT_NOTE =
  'Tämä on kuunteluharjoitus. Alkuperäistä äänitteen tekstiä ei ole painettuna kirjassa – kuuntele oma äänite tai podcast ja vastaa kysymyksiin sen perusteella.'

const NO_ARTICLE_NOTE =
  'Tämän harjoituksen alkuperäinen lehtiartikkeli ei sisältynyt saatuun lähdemateriaaliin, joten tekstiä ei voida näyttää tässä. Voit silti harjoitella kysymyssanojen tunnistamista alla olevista kysymyksistä.'

export const YKI_CHAPTERS: YkiChapter[] = [
  {
    id: 'yki-ch1',
    number: 1,
    titleFi: 'Minä ja taustani',
    titleEn: 'Me and My Background',
    pages: '8-43',
    theme: 'Henkilötiedot, tausta, itsensä esittely, perhe ja identiteetti',
    grammarTopicIds: ['persoonapronominit-olla', 'omistusrakenne', 'kysymyslauseet', 'sijamuodot-perusteet', 'lukusanat', 'preesens', 'perfekti'],
    reading: {
      vocabWarmup: {
        instructionsFi: 'Osaatko sanastoa perustiedoista? Selvitä lomakkeen sanat ja täytä lomake omilla tiedoillasi tai keksi itse.',
        items: [
          { fi: 'etunimet (kutsumanimi alleviivattuna)', en: 'first names (given name underlined)', bn: 'নামসমূহ (ডাকনাম আন্ডারলাইন করা)' },
          { fi: 'sukunimi', en: 'last name / surname', bn: 'পদবি / উপাধি' },
          { fi: 'syntymäpaikka ja -aika', en: 'place and date of birth', bn: 'জন্মস্থান ও জন্মতারিখ' },
          { fi: 'sukupuoli (mies, nainen, muu, en halua sanoa)', en: 'gender (male, female, other, prefer not to say)', bn: 'লিঙ্গ (পুরুষ, নারী, অন্যান্য, বলতে চাই না)' },
          { fi: 'lähiosoite', en: 'street address', bn: 'রাস্তার ঠিকানা' },
          { fi: 'postinumero', en: 'postal code', bn: 'পোস্টাল কোড' },
          { fi: 'postitoimipaikka', en: 'post office / city', bn: 'ডাকঘর / শহর' },
          { fi: 'sähköpostiosoite', en: 'email address', bn: 'ইমেইল ঠিকানা' },
          { fi: 'puhelinnumero', en: 'phone number', bn: 'ফোন নম্বর' },
          { fi: 'kansalaisuus', en: 'citizenship', bn: 'নাগরিকত্ব' },
          { fi: 'äidinkieli', en: 'mother tongue', bn: 'মাতৃভাষা' },
          { fi: 'siviilisääty (yksin asuva, avoliitossa, avioliitossa, eronnut, leski)', en: 'marital status (single, cohabiting, married, divorced, widowed)', bn: 'বৈবাহিক অবস্থা (অবিবাহিত, লিভ-ইন, বিবাহিত, তালাকপ্রাপ্ত, বিধবা/বিপত্নীক)' },
          { fi: 'alaikäisten lasten syntymävuodet', en: 'birth years of minor children', bn: 'নাবালক সন্তানদের জন্মসাল' },
          { fi: 'koulutus', en: 'education', bn: 'শিক্ষা' },
          { fi: 'ammatti', en: 'profession', bn: 'পেশা' },
          { fi: 'työnantaja', en: 'employer', bn: 'নিয়োগকর্তা' },
        ],
        note: {
          title: 'VINKKI: Keksi',
          body: [
            'Kun näet ohjeissa sanan "keksi", se ei tarkoita pullaa tai keksiä (keksi = biscuit/cookie). Tässä "keksi" tarkoittaa "make up" / "invent" – käytä mielikuvitusta.',
            'Sinun ei tarvitse kertoa totta; voit keksiä omia ideoita.',
          ],
        },
      },
      practicePassages: [
        {
          id: 'reading-practice-1',
          titleFi: 'Helmikuussa 100 vuotta täyttävä Aira Ehrlund painaa töitä päivittäin',
          titleEn: 'Aira Ehrlund - 100 Years Old and Still Working',
          source: 'Marianne Roivio, Aamuset 15.1.2022 (lyhennetty ja muokattu)',
          textFi:
            'Aira Ehrlund täyttää helmikuussa sata vuotta, mutta jatkaa edelleen parturi-kampaajan töitä osa-aikaisena yrittäjänä. Ehrlund saapui 17-vuotiaana evakkona äitinsä kanssa Turkuun vuonna 1940 ja ihastui kaupunkiin heti.\n\nHän muistelee, kuinka he äitinsä kanssa ihaillivat Kaskenmäen varrella kasvavia kukkia. Lisäksi sen ajan raitiovaunut tuntuivat tutuilta, sillä vanhassa kotikaupungissa Viipurissakin oli ollut raitiovaunuja. Samana vuonna Ehrlund aloitti kolmivuotisen parturi-kampaajakoulun työn ohessa.\n\nEhrlundilla on paljon tarinoita lapsuudestaan ja nuoruudestaan Karjalassa.\n\n"Minulla oli Karjalassa oikein onnellinen lapsuus. Isäni oli opettaja ja äiti perusti sinne sekatavarakaupan. Isäni kuitenkin kuoli jo ennen sotaa. Kun muutimme Turkuun, opin pian puhumaan niin kuin täällä päin oli tapana. En sanonut enää \'mie\' ja \'sie\' vaan \'mää\' ja \'sää\'. Olen kuitenkin aina ollut ylpeä karjalaisista juuristani."\n\nTöitä Ehrlund jatkaa vielä, koska se pitää hänen mielensä virkeänä. Hänen poikansa Jyrki Ehrlund auttaa äitiään joka arkipäivä aamulla töihin ja takaisin kotiin.\n\n"Minusta on ihanaa, että on seuraa, ja täällä tapaamme sitten ihmisten kanssa. En enää leikkaa kuin iäkkäämpien hiuksia. Enkä tee tätä työtä rahasta, vaan puheliaana ihmisenä kaipaan sosiaalista elämää."\n\nEhrlundilta on moni kysellyt pitkän iän salaisuutta. Hän ei tiedä vastausta, mutta miettii, voisiko positiivisella suhtautumisella elämään olla vaikutusta.\n\n"Olen vaikeidenkin hetkien aikana pyrkinyt aina löytämään asioiden iloiset puolet."',
          tip: {
            title: 'Silmäily (skimming)',
            body: [
              'Silmäily tarkoittaa nopeaa lukemista. Se antaa yleiskuvan tekstistä ja auttaa ymmärtämään pääajatuksen paremmin. Tärkeimmät ajatukset ovat yleensä kunkin kappaleen ensimmäisessä lauseessa.',
              'Älä pysähdy miettimään sanojen merkityksiä.',
              'Pienet yksityiskohdat eivät ole tärkeitä silmäilyvaiheessa. Älä stressaa, jos et ymmärrä vielä kaikkea!',
            ],
          },
          mcq: [
            {
              id: 'rp1-q1',
              question: 'Mistä Aira on kotoisin?',
              options: ['Turusta', 'Viipurista', 'Kaskenmäeltä'],
              correctIndex: 1,
              explanation: 'Teksti sanoo: "vanhassa kotikaupungissa Viipurissakin" (in her old hometown Vyborg).',
            },
            {
              id: 'rp1-q2',
              question: 'Mikä Airan äiti oli ammatiltaan?',
              options: ['kotiäiti', 'opettaja', 'kauppias'],
              correctIndex: 2,
              explanation: 'Teksti sanoo: "äiti perusti sinne sekatavarakaupan" (mother founded a general store there).',
            },
            {
              id: 'rp1-q3',
              question: 'Miksi Aira jatkaa työntekoa?',
              options: ['Hän tarvitsee rahaa.', 'Hän saa samalla seuraa.', 'Hän haluaa auttaa ihmisiä.'],
              correctIndex: 1,
              explanation: 'Teksti sanoo: "puheliaana ihmisenä kaipaan sosiaalista elämää" (as a talkative person, I miss social life).',
            },
          ],
        },
      ],
      testPassages: [
        {
          id: 'reading-test-1',
          titleFi: 'Saamelaisuus merkitsee Helga Westille kaikkea',
          textFi:
            'Kun toimittaja Helga West muutti Helsinkiin kymmenisen vuotta sitten, hän tunsi itsensä erilaiseksi kuin muut ikäisensä.\n\n"En tarkoita, että olisin ollut parempi tai huonompi. Tulen vain toisesta maailmasta. Saamenpuku on ensimmäinen ihoni. Sen päälle ovat rakentuneet muut asiat."\n\nWest kuvailee omaa asemaansa "diasporasaamelaisuudeksi". Yhä useampi saamelainen asuu saamelaisalueen ulkopuolella, mutta asioita peilataan kuitenkin Saamenmaan kautta. Välillä käydään saamelaisalueella, sitten taas muutetaan muualle.\n\nKaksivuotiaalle pojalleen Lennartille West puhuu saamea. Lennart oppii pohjoissaamea myös kielipesässä eli saamenkielisessä päiväkodissa. Kielipesä on perheeltä iso investointi, sillä päiväkotimatkat Länsi-Pasilaan kestävät kaksi tuntia päivässä.\n\nWestistä tuntuu, että kaupungissa hän kasvattaa lasta häkissä. Hänen omaan lapsuuteensa kuuluivat luonto ja vapaus. Lapset saivat olla ulkona, kunnes tuli pimeää. Vieraanvaraisuus kuului kulttuuriin toisella tavalla kuin suomalaisilla.\n\n"Ihmisiä tuli ja meni, ja yölläkin saattoi tulla vieraita. Etukäteen ei kysytty, saako tulla kahville."',
          mcq: [
            {
              id: 'rt1-q1',
              question: 'Muuttaessaan Helsinkiin Helga',
              options: ['ajatteli olevansa erilainen kuin muut', 'tunsi itsensä muita huonommaksi', 'osti ensimmäisen saamenpukunsa'],
              correctIndex: 0,
              explanation: '"hän tunsi itsensä erilaiseksi kuin muut ikäisensä" (she felt different from others her age).',
            },
            {
              id: 'rt1-q2',
              question: 'Saamenkielinen päiväkoti on',
              options: ['kallis', 'Lennartin ainoa mahdollisuus oppia saamea', 'kaukana Westien kodista'],
              correctIndex: 2,
              explanation: '"päiväkotimatkat Länsi-Pasilaan kestävät kaksi tuntia päivässä" (daycare trips take two hours a day).',
            },
            {
              id: 'rt1-q3',
              question: 'Lapsen kasvattaminen on Helgan mielestä',
              options: ['samanlaista joka paikassa', 'rajoitetumpaa Helsingissä kuin saamelaisalueella', 'vapaampaa kuin hänen lapsuudessaan'],
              correctIndex: 2,
              explanation: '"Hänen omaan lapsuuteensa kuuluivat luonto ja vapaus" (her own childhood included nature and freedom) – tämä viittaa siihen, että hänen oma lapsuutensa oli vapaampi kuin kaupunkielämä nyt.',
            },
          ],
        },
        {
          id: 'reading-test-2',
          titleFi: 'Kun viisivuotias Hertta saa yöllä kohtauksen, tukikoira Pätkä rientää apuun',
          source: 'Elina Kurki, Helsingin Sanomat 15.2.2022 (lyhennetty)',
          textFi:
            'Monissa kodeissa koira on epätoivottu vieras sängyssä, mutta turkulaisperheessä Pätkä-koira nukkuu viisivuotiaan Hertta Ahdin vieressä joka yö. Syynä on epilepsia, jota perheen tytär sairastaa. Australianlabradoodle Pätkä on Suomen ensimmäinen virallinen epileptikon tukikoira.\n\nKun Hertta saa epileptisen kohtauksen yöllä, tukikoira Pätkä hälyttää apua.\n\nHertan äiti Anna Laitila kertoo, että koiran tulo taloon helpotti perheen elämää. Hertta saa epilepsiakohtauksia yhdestä kolmeen viikossa. Kun epileptinen kohtaus alkaa, Pätkä herää ja painaa kuonollaan hälytyskutsunappia. Tällöin vanhempien huoneen seinässä oleva hälytin alkaa soida ja vilkkua. Tämä herättää Laitilan, joka varmistaa, ettei tytär kouristellessaan vahingoita itseään.\n\nPätkä on ollut tyttären korvaamattomana apuna jo kolmen ja puolen vuoden ajan, kertoo Laitila.\n\nHertta oli reilun vuoden ikäinen, kun Laitila alkoi pohtia tukikoiran hankkimista. Perhe oli valitsemansa kennelin pentujonossa 1,5 vuotta, sillä sopivaa koiraa ei heti löytynyt. Pätkä tuli perheeseen vuonna 2018 ja tukikoirakoulutus alkoi.\n\nSuomen kuulo- ja tukikoirat ry:n järjestämä tukikoirakoulutus kestää 1–2 vuotta. Sen aikana koira opetetaan tunnistamaan epilepsiakohtaus hajun perusteella. Lisäksi koira oppii ilmaisukeinon, jonka avulla se viestii kohtauksesta.\n\n"Koiranomistaja saa avukseen yhteistyökouluttajan, mutta suurin työ tehdään kotona", sanoo kuulo- ja tukikoirat ry:n järjestösuunnittelija Nina Frantsi.',
          trueFalse: [
            {
              id: 'rt2-tf1',
              statementFi: 'Pätkä-koira ei saa nukkua Hertan sängyssä.',
              answer: false,
              explanation: 'Teksti sanoo: "Pätkä-koira nukkuu viisivuotiaan Hertta Ahdin vieressä joka yö."',
            },
            {
              id: 'rt2-tf2',
              statementFi: 'Pätkä hälyttää apua, kun Hertalla on sairauskohtaus.',
              answer: true,
              explanation: 'Teksti sanoo: "tukikoira Pätkä hälyttää apua."',
            },
            {
              id: 'rt2-tf3',
              statementFi: 'Pätkä tuli perheeseen vuosi sitten.',
              answer: false,
              explanation: 'Teksti sanoo, että "Pätkä tuli perheeseen vuonna 2018" ja on ollut apuna "jo kolmen ja puolen vuoden ajan".',
            },
            {
              id: 'rt2-tf4',
              statementFi: 'Perhe odotti sopivaa pentua muutaman kuukauden.',
              answer: false,
              explanation: 'Teksti sanoo: perhe oli "pentujonossa 1,5 vuotta".',
            },
            {
              id: 'rt2-tf5',
              statementFi: 'Tukikoira koulutetaan vain koirien koulutuskeskuksessa.',
              answer: false,
              explanation: 'Teksti sanoo: "suurin työ tehdään kotona".',
            },
          ],
        },
        {
          id: 'reading-test-3',
          titleFi: 'Retkeilyseuraa',
          textFi:
            'Liisi Kutvonen\n\nRetkeilyseuraa\n\nMoikka!\n\nOon 46-vuotias naisihminen Lieksasta ja oon innostunut viime vuosina retkeilystä. Lähimmät luontokohteet, kuten Kolin, oon jo pyörinyt läpi moneen kertaan, mutta kun mulla ei ole autoa, niin kauemmaskaan ei ole tullut lähdettyä. Teltta ja varusteet multa kyllä löytyy omasta takaa. Löytyiskö tästä ryhmästä autollista seuraa, eli olisiko joku autolla Itä-Suomen retkikohteiden lähelle liikkuva vailla seuraa ja voisi ottaa mut kyytiin? Osallistuisin ilman muuta bensakuluihin. Jos kiinnostuit, niin laita vaikka yksityisviestiä!',
          tip: {
            title: 'VINKKI: Avoimiin kysymyksiin vastaaminen',
            body: [
              'Älä kopioi vastauksia suoraan tekstistä sana sanalta.',
              'Ymmärrä kysymys ja vastaa siihen.',
              'Selitä omin sanoin.',
              'Jos kopioit, arvioija ei tiedä, ymmärsitkö todella tekstin.',
              'Kiinnitä huomiota kysymyssanoihin.',
            ],
          },
          open: [
            {
              id: 'rt3-o1',
              questionFi: 'Millainen ihminen kirjoittaja on? (Mainitse ainakin kaksi asiaa.)',
              sampleAnswerFi: 'Kirjoittaja on 46-vuotias nainen Lieksasta. Hän pitää retkeilystä.',
            },
            {
              id: 'rt3-o2',
              questionFi: 'Miksi kirjoittaja etsii retkeilyseuraa?',
              sampleAnswerFi: 'Hänellä ei ole autoa, joten hän ei pääse kauemmas retkikohteisiin.',
            },
            {
              id: 'rt3-o3',
              questionFi: 'Mistä kirjoittaja lupaa maksaa?',
              sampleAnswerFi: 'Hän lupaa maksaa bensakulut (osallistuu bensakuluihin).',
            },
          ],
        },
      ],
    },
    writing: {
      tip: {
        title: 'VINKKI: Kirjoittamisen osakoe',
        body: [
          'YKI-kirjoittamisen osakokeessa sinulla on 55 minuuttia aikaa kirjoittaa kolme erilaista tekstiä.',
          'Kolme tehtävätyyppiä: epämuodollinen viesti (ystävälle, tutulle tai rennolle ryhmälle), muodollinen viesti (jollekulle, jota et tunne), ja mielipide (teksti, jossa kerrot ajatuksesi aiheesta).',
          'Muista harjoitella kaikkia kolmea tyyppiä valmistautuessasi kokeeseen!',
        ],
      },
      freewrite: {
        instructionsFi: 'Kirjoita vapaasti itsestäsi 10 minuuttia. Käytä kelloa tai ajastinta.',
        rules: ['Älä käytä kirjoittamisen apuvälineitä (sanakirja, kääntäjä).', 'Älä mieti liikaa.', 'Älä keskity kielen oikeellisuuteen.', 'Kirjoita, mitä mieleen tulee.'],
        topics: ['Kerro kolme asiaa itsestäsi.', 'Kuvaile itseäsi viidellä adjektiivilla.'],
      },
      groupIntro: {
        instructionsFi: 'Kirjoita esittely opiskeluryhmällesi. Kerro:',
        questions: [
          'Missä asut?',
          'Millainen perhe sinulla on?',
          'Mitä harrastat?',
          'Mistä tykkäät?',
          'Lue muiden esittelyjä ja kysy heiltä jatkokysymyksiä.',
        ],
      },
      practiceTasks: [
        {
          id: 'writing-practice-1',
          titleFi: 'Harrastuskaverin etsiminen',
          instructionsFi:
            'Etsit harrastuskaveria sosiaalisen median ryhmästä. Kerro itsestäsi. Keksi, mikä harrastus on. Kirjoita 3–5 lausetta.',
          starterFi: 'Hei, olen...',
        },
        {
          id: 'writing-practice-2',
          titleFi: 'Naapurustoon tutustuminen',
          instructionsFi:
            'Olet muuttanut uudelle alueelle etkä tunne ketään. Liity naapuruston sosiaalisen median ryhmään ja etsi ihmisiä, joiden kanssa voit viettää aikaa. Kerro itsestäsi 3–5 lauseessa.',
          starterFi: 'Hei, olen...',
        },
      ],
      practiceShareTable: [
        { category: 'Perustieto', hobbyBuddy: 'Harrastuksesi', neighbors: 'Missä asut', both: 'Nimesi' },
        { category: 'Kesto', hobbyBuddy: 'Kuinka kauan olet harrastanut sitä', neighbors: 'Kuinka kauan olet asunut siellä', both: 'Ikäsi' },
        { category: 'Yksityiskohdat', hobbyBuddy: 'Mitä välineitä sinulla on', neighbors: 'Mistä pidät alueessa', both: 'Mitä pidät tehdä' },
        { category: 'Toive', hobbyBuddy: 'Mitä etsit', neighbors: 'Mitä haluat tehdä yhdessä', both: 'Yhteystiedot' },
        { category: 'Taso / tilanne', hobbyBuddy: 'Taitotasosi', neighbors: 'Perhetilanteesi', both: 'Miksi otat yhteyttä' },
      ],
      openingClosingTip: {
        title: 'VINKKI: Epämuodollisen viestin aloittaminen ja lopettaminen',
        body: [
          'Yleisiä aloituksia: Hei, Moikka, Terve, Moi.',
          'Yleisiä lopetuksia: Terkuin, Nähdään!, Moikka!, Hei hei.',
          'Epämuodollisissa viesteissä ei tarvitse olla yhtä muodollinen tai kohtelias – voit käyttää rennompaa kieltä.',
        ],
      },
      informalTasks: [
        {
          id: 'writing-test-informal-1',
          titleFi: 'Viesti parhaalle ystävälle',
          instructionsFi: 'Sinulla on uusi kumppani. Paras ystäväsi haluaa tietää, millainen hän on. Kirjoita viesti, jossa kuvailet häntä. Kerro ainakin viisi asiaa.',
        },
        {
          id: 'writing-test-informal-2',
          titleFi: 'Viesti sukulaiselle',
          instructionsFi: 'Olet aloittanut uuden harrastuksen. Kerro siitä sukulaisellesi ja ehdota, että hän liittyisi mukaan. Selitä, miksi hänen kannattaisi kokeilla sitä.',
        },
        {
          id: 'writing-test-informal-3',
          titleFi: 'Onnitteluviesti ystävälle',
          instructionsFi: 'Ystävällesi on tapahtunut jotain tärkeää (keksi itse, mitä). Kirjoita viesti, jossa onnittelet häntä. Kerro myös, mitä sinulle kuuluu.',
        },
        {
          id: 'writing-test-informal-4',
          titleFi: 'Viesti työkavereille',
          instructionsFi: 'Työkaveri on vaihtamassa työpaikkaa. Kirjoita viesti, jossa ehdotat läksiäisjärjestelyjä.',
        },
        {
          id: 'writing-test-informal-5',
          titleFi: 'Viesti harrastusryhmään',
          instructionsFi: 'Olet aloittanut uuden harrastuksen. Et tiedä hyviä paikkoja sitä varten. Kirjoita harrastusryhmälle ja pyydä vinkkejä.',
        },
      ],
      formalTasks: [
        {
          id: 'writing-test-formal-1',
          titleFi: 'Viesti kansalaisopistoon',
          instructionsFi: 'Haluat osallistua kurssille. Kirjoita viesti, jossa kysyt ainakin kolme kysymystä. Kerro kaksi tärkeää asiaa itsestäsi.',
        },
        {
          id: 'writing-test-formal-2',
          titleFi: 'Viesti liikuntapaikkaan',
          instructionsFi: 'Haluat aloittaa uuden ohjatun lajin. Ennen ilmoittautumista haluat varmistaa, että se sopii sinulle. Kirjoita ja pyydä heidän arviotaan.',
        },
        {
          id: 'writing-test-formal-3',
          titleFi: 'Viesti koirankasvattajalle',
          instructionsFi: 'Olet päättänyt hankkia koiran. Kirjoita kasvattajalle. Kerro, millaisen koiran haluat ja mihin tarkoitukseen.',
        },
        {
          id: 'writing-test-formal-4',
          titleFi: 'Viesti nimiasioista vastaavaan virastoon',
          instructionsFi: 'Sukunimesi kirjoitetaan usein väärin virallisessa postissa. Kirjoita virastolle ja selitä ongelma.',
        },
      ],
      opinionTopics: [
        {
          id: 'writing-opinion-1',
          titleFi: 'Ystävät ja harrastukset',
          options: ['A. Kuinka monta ystävää ihminen tarvitsee?', 'B. Kaikilla pitäisi olla harrastus'],
        },
        {
          id: 'writing-opinion-2',
          titleFi: 'Kotityöt',
          options: ['Miten kotityöt pitäisi jakaa?'],
        },
        {
          id: 'writing-opinion-3',
          titleFi: 'Muita aiheita',
          options: [
            'Perhe ja suku ovat tärkeämpiä kuin ystävät',
            'Kenen tehtävä on huolehtia ikäihmisistä?',
            'Iso perhe – paras perhe?',
            'Sopiva ikä jäädä eläkkeelle',
          ],
        },
      ],
    },
    listening: {
      tip: {
        title: 'VINKKI: Puheen ymmärtämisen osakoe',
        body: [
          'Kuuntelukoe pidetään kielistudiossa. Se kestää 40 minuuttia.',
          'Kolme tehtävätyyppiä: monivalinta, oikein–väärin, avoimet kysymykset.',
          'Muista harjoitella kaikkia tehtävätyyppejä valmistautuessasi!',
        ],
      },
      podcastWarmup: {
        instructionsFi:
          'Etsi suomen kielen oppimiseen liittyvä podcast harrastuksista. Hae hakusanoilla kuten "suomen kieli", "podcast", "harrastukset". Kuuntele 3 minuuttia. Kuuntele kuin musiikkia – sinun ei tarvitse ymmärtää mitään! Kuuntele vain rytmiä ja melodiaa.',
        keywords: ['suomen kieli', 'podcast', 'harrastukset'],
      },
      practicePassages: [
        {
          id: 'listening-practice-1',
          titleFi: 'Asad kertoo elämästään ja suomen kielen opiskelusta',
          textFi: `${NO_TRANSCRIPT_NOTE} Asad tuli Suomeen pakolaisena ja kertoo elämästään ja suomen kielen opiskelusta.`,
          predictVocab: [
            { fi: 'pakolainen', en: 'refugee', bn: 'শরণার্থী' },
            { fi: 'Suomeen tulo', en: 'coming to Finland', bn: 'ফিনল্যান্ডে আসা' },
            { fi: 'suomen kieli', en: 'Finnish language', bn: 'ফিনিশ ভাষা' },
            { fi: 'opiskelu', en: 'studying', bn: 'পড়াশোনা' },
            { fi: 'työ', en: 'work', bn: 'কাজ' },
            { fi: 'perhe', en: 'family', bn: 'পরিবার' },
          ],
          mcq: [
            {
              id: 'lp1-q1',
              question: 'Asad on kotoisin',
              options: ['Syyriasta', 'Itä-Suomesta', 'Somalista'],
              correctIndex: 0,
              explanation: 'Vastaus: Syyriasta.',
            },
            {
              id: 'lp1-q2',
              question: 'Asad tuli Suomeen',
              options: ['sisarustensa kanssa', 'sukulaistensa kanssa', 'yksin'],
              correctIndex: 2,
              explanation: 'Vastaus: yksin.',
            },
            {
              id: 'lp1-q3',
              question: 'Mistä Asad sai rahaa yliopisto-opintoihinsa?',
              options: ['sukulaisiltaan', 'tulkin työstä', 'suomalaiselta perheeltään'],
              correctIndex: 1,
              explanation: 'Vastaus: tulkin työstä.',
            },
            {
              id: 'lp1-q4',
              question: 'Mitä Asad kertoo työstään?',
              options: ['Hän ymmärtää työtovereitaan.', 'Hän työskentelee ulkomailla.', 'Hänen työkaverinsa ovat paenneet sotaa.'],
              correctIndex: 0,
              explanation: 'Vastaus: Hän ymmärtää työtovereitaan.',
            },
          ],
        },
      ],
      testPassages: [
        {
          id: 'listening-test-1',
          titleFi: 'Eeron ja Iidan puhelinkeskustelu',
          textFi: NO_TRANSCRIPT_NOTE,
          mcq: [
            {
              id: 'lt1-q1',
              question: 'Eero kutsuu Iidan',
              options: ['uimahalliin', 'jalkapallo-otteluun', 'synttäreille'],
              correctIndex: 1,
              explanation: 'Vastaus: jalkapallo-otteluun.',
            },
            {
              id: 'lt1-q2',
              question: 'Tapahtuma on',
              options: ['keskiviikkona', 'perjantaina', 'lauantaina'],
              correctIndex: 2,
              explanation: 'Vastaus: lauantaina.',
            },
            {
              id: 'lt1-q3',
              question: 'Iida on menossa',
              options: ['syntymäpäiväjuhliin', 'elokuvateatteriin', 'keikalle'],
              correctIndex: 1,
              explanation:
                'Kirjan oma vastausavain merkitsee tämän todennäköiseksi vastaukseksi tyypillisen keskustelukaavan perusteella, mutta ei täysin varmaksi ilman äänitettä.',
            },
          ],
        },
        {
          id: 'listening-test-2',
          titleFi: 'Kahden lapsen äiti',
          textFi: NO_TRANSCRIPT_NOTE,
          trueFalse: [
            {
              id: 'lt2-tf1',
              statementFi: 'Jenni sai molemmat lapsensa nuorena.',
              answer: false,
              explanation: 'Äänitteen mukaan Jenni ei saanut molempia lapsiaan nuorena.',
            },
            {
              id: 'lt2-tf2',
              statementFi: 'Jennistä toisen lapsen hoitaminen oli vaikeampaa kuin ensimmäisen.',
              answer: true,
              explanation: 'Äänitteen mukaan toisen lapsen hoitaminen oli vaikeampaa.',
            },
            {
              id: 'lt2-tf3',
              statementFi: 'Jennin ystävillä ei ole pieniä lapsia.',
              answer: false,
              explanation: 'Äänitteen mukaan Jennin ystävillä on pieniä lapsia.',
            },
          ],
        },
        {
          id: 'listening-test-3',
          titleFi: 'Elias Virtanen kertoo työstään',
          textFi: NO_TRANSCRIPT_NOTE,
          open: [
            {
              id: 'lt3-o1',
              questionFi: 'Mitä Elias Virtanen tekee ammatikseen?',
              sampleAnswerFi: 'Tämä vastaus riippuu kuunneltavasta äänitteestä – kirjan oma malli ei anna tähän tarkkaa vastausta.',
            },
            {
              id: 'lt3-o2',
              questionFi: 'Kuinka kauan Elias on tehnyt tätä työtä?',
              sampleAnswerFi: 'Tämä vastaus riippuu kuunneltavasta äänitteestä – kirjan oma malli ei anna tähän tarkkaa vastausta.',
            },
            {
              id: 'lt3-o3',
              questionFi: 'Mitä Elias teki ennen kuin hän aloitti ammatissaan?',
              sampleAnswerFi: 'Tämä vastaus riippuu kuunneltavasta äänitteestä – kirjan oma malli ei anna tähän tarkkaa vastausta.',
            },
          ],
        },
      ],
    },
    speaking: {
      tip: {
        title: 'VINKKI: Puhumisen osakoe',
        body: [
          'Puhumisen koe pidetään kielistudiossa. Se kestää noin 25 minuuttia.',
          'Neljä tehtävätyyppiä: kertominen (puhu 1–2 minuuttia), keskustelu (vastaa kehotteisiin), tilannetehtävät (lyhyet vastaukset, n. 10–30 sekuntia), mielipide (puhu 2 minuuttia).',
          'Muista harjoitella kaikkia neljää tehtävätyyppiä!',
        ],
      },
      selfIntro: {
        instructionsFi: 'Harjoittele itsestäsi kertomista. Vastaa näihin kysymyksiin puhumalla. Nauhoita vastauksesi.',
        qa: [
          { spoken: 'Mikä sun nimi on?', written: 'Mikä sinun nimesi on?', en: "What's your name?" },
          { spoken: 'Mikä sun puhelinnumero on?', written: 'Mikä sinun puhelinnumerosi on?', en: "What's your phone number?" },
          { spoken: 'Missä ja millon sä oot syntynyt?', written: 'Missä ja milloin olet syntynyt?', en: 'Where and when were you born?' },
          { spoken: 'Kuinka vanha sä oot?', written: 'Kuinka vanha sinä olet?', en: 'How old are you?' },
          { spoken: 'Mitä kieliä sä puhut?', written: 'Mitä kieliä puhut?', en: 'What languages do you speak?' },
          { spoken: 'Missä sä asut?', written: 'Missä asut?', en: 'Where do you live?' },
          { spoken: 'Missä maissa sä oot asunu?', written: 'Missä maissa olet asunut?', en: 'In which countries have you lived?' },
          { spoken: 'Ketä sun perheeseen kuuluu?', written: 'Keitä perheeseesi kuuluu?', en: 'Who is in your family?' },
        ],
      },
      groupIntro: {
        instructionsFi: 'Kerro itsestäsi pareittain tai pienissä ryhmissä. Kerro ainakin:',
        questions: [
          'Kuka olet ja mistä tulet?',
          'Kuinka kauan olet asunut Suomessa?',
          'Mitä kieliä puhut?',
          'Miksi opiskelet suomea?',
          'Mikä sinun ammattisi on tai mitä opiskelet?',
          'Kysy jatkokysymyksiä ja vastaa muiden kysymyksiin sinusta.',
        ],
      },
      truthTip: {
        title: 'VINKKI: YKI-testissä ei tarvitse puhua totta',
        body: ['Sinun ei tarvitse kertoa mitään, mitä et halua. Voit keksiä asioita, kunhan vastaat siihen, mitä kysytään.'],
      },
      practiceLongTask: {
        id: 'speaking-practice-1',
        titleFi: 'Ihminen, josta pidän paljon',
        titleEn: 'A person I like a lot',
        prepSeconds: 60,
        speakSeconds: 90,
        questions: [
          'Kuka hän on?',
          'Missä hän asuu?',
          'Minkä ikäinen hän on?',
          'Millainen ihminen hän on?',
          'Miten ja kuinka usein pidätte yhteyttä?',
          'Missä tilanteissa otat häneen yhteyttä?',
          'Miksi pidät hänestä?',
        ],
        reflectionPrompt:
          'Mitä olisit voinut sanoa paremmin? Unohditko sanoja? Kokeile uudelleen: aseta ajastin 1,5 minuuttiin ja yritä puhua koko ajan. Voit nauhoittaa vastauksesi, jos haluat.',
        speakDontWriteTip: {
          title: 'VINKKI: Puhu, älä kirjoita',
          body: [
            'Puhumisen kokeessa voit tehdä nopeita muistiinpanoja, mutta aikaa ei ole paljon. Älä kirjoita täysiä lauseita – harjoittele puhumista ääneen.',
            'Se voi tuntua aluksi vaikealta, mutta helpottuu harjoittelemalla.',
          ],
        },
      },
      conversationVocab: [
        { fi: 'Kehu.', en: 'Compliment.', bn: 'প্রশংসা করো।' },
        { fi: 'Keksi.', en: 'Make up / Invent.', bn: 'রচনা করো / বানাও।' },
        { fi: 'Kerro.', en: 'Tell.', bn: 'বলো।' },
        { fi: 'Kieltäydy.', en: 'Refuse / Say no.', bn: 'প্রত্যাখ্যান করো।' },
        { fi: 'Kysy.', en: 'Ask.', bn: 'জিজ্ঞেস করো।' },
        { fi: 'Kysy lisätietoa.', en: 'Ask for more information.', bn: 'আরও তথ্য জিজ্ঞেস করো।' },
        { fi: 'Neuvo.', en: 'Advise.', bn: 'পরামর্শ দাও।' },
        { fi: 'Onnittele.', en: 'Congratulate.', bn: 'অভিনন্দন জানাও।' },
        { fi: 'Pahoittele.', en: 'Apologize.', bn: 'দুঃখ প্রকাশ করো।' },
        { fi: 'Rauhoittele.', en: 'Calm down / Reassure.', bn: 'শান্ত করো / আশ্বস্ত করো।' },
        { fi: 'Reagoi sopivalla tavalla.', en: 'React appropriately.', bn: 'উপযুক্তভাবে প্রতিক্রিয়া দেখাও।' },
        { fi: 'Selitä.', en: 'Explain.', bn: 'ব্যাখ্যা করো।' },
        { fi: 'Tervehdi.', en: 'Greet.', bn: 'শুভেচ্ছা জানাও।' },
        { fi: 'Vastaa kieltävästi/myöntävästi.', en: 'Answer negatively/affirmatively.', bn: 'না-বাচক/হ্যাঁ-বাচক উত্তর দাও।' },
      ],
      testLongTasks: [
        {
          id: 'speaking-test-1',
          titleFi: 'Minulle tärkeä paikka',
          titleEn: 'An important place for me',
          prepSeconds: 60,
          speakSeconds: 90,
          questions: ['Missä se on?', 'Miksi se on sinulle tärkeä?', 'Kenen kanssa käyt siellä?', 'Mitä siellä voi tehdä?', 'Millainen paikka se on?'],
        },
        {
          id: 'speaking-test-2',
          titleFi: 'Miten vietän vapaa-aikaa',
          titleEn: 'How I spend my free time',
          prepSeconds: 60,
          speakSeconds: 90,
          questions: ['Mikä sinua kiinnostaa? Miksi?', 'Mitä tykkäät tehdä vapaa-ajalla?', 'Onko sinulla harrastuksia?', 'Miten ja missä rentoudut parhaiten?'],
        },
        {
          id: 'speaking-test-3',
          titleFi: 'Hieno päivä elämässäni',
          titleEn: 'A great day in my life',
          prepSeconds: 120,
          speakSeconds: 120,
          questions: [
            'Mikä oli erityisen hieno päivä elämässäsi?',
            'Mitä silloin tapahtui? Mitä teit?',
            'Mikä teki päivästä erityisen?',
            'Kenen kanssa olit?',
          ],
        },
      ],
      conversationTasks: [
        {
          id: 'speaking-conv-1',
          titleFi: 'Puhelu kaverilta',
          scenarioFi: 'Uusi ystävä soittaa sinulle.',
          turns: [
            { instructionFi: 'Vastaa kysymykseen.', seconds: 10 },
            { instructionFi: 'Vastaa myöntävästi.', seconds: 5 },
            { instructionFi: 'Reagoi sopivalla tavalla.', seconds: 10 },
            { instructionFi: 'Reagoi sopivalla tavalla.', seconds: 5 },
            { instructionFi: 'Hyvästele.', seconds: 5 },
          ],
        },
        {
          id: 'speaking-conv-2',
          titleFi: 'Kahvilla ystävän kanssa',
          scenarioFi: 'Olet kahvilassa odottamassa ystävää, joka on 10 minuuttia myöhässä.',
          turns: [
            { instructionFi: 'Reagoi sopivalla tavalla.', seconds: 10 },
            { instructionFi: 'Vastaa kieltävästi.', seconds: 5 },
            { instructionFi: 'Vastaa kysymykseen ja kysy, mitä kaverillesi kuuluu.', seconds: 30 },
            { instructionFi: 'Kehu kaveriasi.', seconds: 10 },
            { instructionFi: 'Vastaa kysymykseen.', seconds: 20 },
          ],
        },
      ],
      situationalTasks: [
        {
          id: 'speaking-situation-1',
          scenarioFi:
            'Olet löytänyt kiinnostavan suomen kielen kurssin. Soita opettajalle ja kysy, sopiiko kurssi sinulle. Opettaja kysyy, kuinka kauan ja missä olet opiskellut suomea. Vastaa.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-2',
          scenarioFi: 'Olet aloittanut uuden työpaikan. Taukohuoneessa joku kysyy, kuka olet. Vastaa.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-3',
          scenarioFi: 'Olet lounaalla uuden työkaverin kanssa. Hän kertoo pyöräilystä ja kysyy sinun harrastuksistasi. Vastaa.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-4',
          scenarioFi: 'Ystävä kysyy, haluatko lähteä elokuviin. Kieltäydy kohteliaasti, pahoittele ja anna syy.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-5',
          scenarioFi: 'Juot kahvia uuden luokkatoverin kanssa. Hän kertoo perheestään ja haluaa tietää sinun perheestäsi. Kerro jotain perheestäsi.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-6',
          scenarioFi: 'Ystäväsi kertoo olevansa raskaana. Onnittele ja kysy ainakin yksi kysymys.',
          seconds: 20,
        },
      ],
      opinionTasks: [
        {
          id: 'speaking-opinion-1',
          titleFi: 'Paras ikä',
          titleEn: 'The best age',
          prepSeconds: 120,
          speakSeconds: 120,
          questions: [
            'Kuinka vanha olet nyt?',
            'Mikä on ollut paras ikä omassa elämässäsi tähän mennessä? Miksi?',
            'Odotatko jotain tiettyä ikää tai elämänvaihetta?',
            'Mitä hyviä ja huonoja puolia on lapsuudessa, aikuisuudessa ja vanhuudessa?',
            'Minkä ikäisiä ihmisiä yhteiskunta arvostaa mielestäsi eniten?',
          ],
        },
        {
          id: 'speaking-opinion-2',
          titleFi: 'Kiire',
          titleEn: 'Busyness / Hurry',
          prepSeconds: 120,
          speakSeconds: 120,
          questions: [
            'Onko ihmisillä mielestäsi liian kiire? Miksi? Miksi ei?',
            'Oletko itse liian kiireinen?',
            'Mitä hyvää ja mitä huonoa kiireessä on?',
            'Miten kiirettä voi vähentää?',
          ],
        },
        {
          id: 'speaking-opinion-3',
          titleFi: 'Vanhustenhoito ja lastenkasvatus',
          titleEn: 'Elderly care and child rearing',
          prepSeconds: 120,
          speakSeconds: 120,
          questions: ['Valitse A tai B.'],
          subChoices: [
            {
              label: 'A. Millainen on hyvä vanhuus?',
              questions: [
                'Kenen tehtävä on huolehtia meistä vanhana?',
                'Pitäisikö vanhusten asua palvelutaloissa, omissa kodeissaan vai sukulaisten luona?',
                'Missä itse haluaisit asua vanhana?',
                'Millainen on mielestäsi hyvä vanhuus?',
              ],
            },
            {
              label: 'B. Lasten kasvattaminen',
              questions: [
                'Kenen tehtävä on huolehtia pienistä lapsista?',
                'Kuka päättää lasten kasvatuksesta perheessä?',
                'Mikä on mielestäsi hyvä ikä aloittaa päivähoito?',
                'Mitä täytyy tehdä, jos lapsi käyttäytyy huonosti?',
              ],
            },
          ],
        },
      ],
      ageVocabTip: {
        title: 'VINKKI: Ikäsanastoa (aiheeseen "Paras ikä")',
        pairs: [
          { person: 'lapsi', stage: 'lapsuus (childhood)' },
          { person: 'teini, teini-ikäinen', stage: 'teini-ikä (teenage years)' },
          { person: 'murrosikäinen', stage: 'murrosikä (puberty)' },
          { person: 'nuori', stage: 'nuoruus (youth)' },
          { person: 'aikuinen', stage: 'aikuisuus (adulthood)' },
          { person: 'keski-ikäinen', stage: 'keski-ikä (middle age)' },
          { person: 'eläkeläinen', stage: 'eläkeikä (retirement age)' },
          { person: 'vanhus', stage: 'vanhuus (old age)' },
        ],
        note: 'Sanaa "vanhus" vältetään nykyään usein; suositaan sanoja kuten "seniori", "ikääntynyt" tai "ikäihminen".',
        phrases: [
          'Lapsena... minulla oli pieni koira. (As a child... I had a small dog.)',
          'Kun olin nuori... uin paljon. (When I was young... I swam a lot.)',
          'Kun kasvoin aikuiseksi... muutin kaupunkiin. (When I grew up... I moved to the city.)',
        ],
      },
    },
    vocabSummary: [
      { fi: 'etunimi', en: 'first name', bn: 'প্রথম নাম' },
      { fi: 'sukunimi', en: 'last name / surname', bn: 'পদবি' },
      { fi: 'syntymäpaikka', en: 'place of birth', bn: 'জন্মস্থান' },
      { fi: 'syntymäaika', en: 'date of birth', bn: 'জন্মতারিখ' },
      { fi: 'sukupuoli', en: 'gender', bn: 'লিঙ্গ' },
      { fi: 'kansalaisuus', en: 'citizenship', bn: 'নাগরিকত্ব' },
      { fi: 'äidinkieli', en: 'mother tongue', bn: 'মাতৃভাষা' },
      { fi: 'siviilisääty', en: 'marital status', bn: 'বৈবাহিক অবস্থা' },
      { fi: 'koulutus', en: 'education', bn: 'শিক্ষা' },
      { fi: 'ammatti', en: 'profession', bn: 'পেশা' },
      { fi: 'työnantaja', en: 'employer', bn: 'নিয়োগকর্তা' },
      { fi: 'työpaikka', en: 'workplace', bn: 'কর্মস্থল' },
      { fi: 'perhe', en: 'family', bn: 'পরিবার' },
      { fi: 'sukulainen', en: 'relative', bn: 'আত্মীয়' },
      { fi: 'ystävä', en: 'friend', bn: 'বন্ধু' },
      { fi: 'harrastus', en: 'hobby', bn: 'শখ' },
      { fi: 'ikä', en: 'age', bn: 'বয়স' },
      { fi: 'lapsuus', en: 'childhood', bn: 'শৈশব' },
      { fi: 'nuoruus', en: 'youth', bn: 'কৈশোর/যৌবন' },
      { fi: 'aikuisuus', en: 'adulthood', bn: 'প্রাপ্তবয়স্কতা' },
      { fi: 'vanhuus', en: 'old age', bn: 'বার্ধক্য' },
    ],
    usefulPhrases: [
      { fi: 'Hei, olen...', en: 'Hi, I am...', bn: 'হাই, আমি...' },
      { fi: 'Olen kotoisin...', en: 'I come from...', bn: 'আমি ... থেকে এসেছি।' },
      { fi: 'Asun...', en: 'I live in...', bn: 'আমি ... বাস করি।' },
      { fi: 'Olen...vuotias.', en: 'I am... years old.', bn: 'আমার বয়স ... বছর।' },
      { fi: 'Minulla on...', en: 'I have...', bn: 'আমার আছে...' },
      { fi: 'Harrastan...', en: 'I do (as a hobby)...', bn: 'আমার শখ...' },
      { fi: 'Tykkään...', en: 'I like...', bn: 'আমি পছন্দ করি...' },
      { fi: 'En tykkää...', en: "I don't like..." },
      { fi: 'Olen opiskellut suomea...', en: 'I have studied Finnish for...', bn: 'আমি ... ধরে ফিনিশ ভাষা শিখছি।' },
      { fi: 'Kiitos!', en: 'Thank you!', bn: 'ধন্যবাদ!' },
      { fi: 'Näkemiin!', en: 'Goodbye!', bn: 'বিদায়!' },
    ],
    learnEverywhereTip: {
      title: 'VINKKI: Opit kieltä kaikkialla',
      body: [
        'Tämä kirja ei ole ainoa tapa valmistautua YKI-testiin. Älä yritä opetella tätä kirjaa ulkoa!',
        'Jokainen suomenkielinen paikka ja tilanne on tilaisuus oppia suomea.',
        'Voit oppia suomea mm. näistä: työpaikka, koulu ja kurssit, harrastukset, ystävät ja naapurit, kirjat, lehdet ja mainokset, televisio, radio ja internet, suomenkielinen musiikki.',
        'Muista: kuuntele ihmisiä bussissa, junassa, kahvilassa ja kaupassa. Lue kylttejä kadulla. Ota koko kieliympäristö oppimisvälineeksesi!',
      ],
    },
  },
  {
    id: 'yki-ch2',
    number: 2,
    titleFi: 'Koti ja asuminen',
    titleEn: 'Home and Housing',
    pages: '44-70',
    theme: 'Koti, asuminen, asumismuodot, naapurusto ja asumiseen liittyvät palvelut',
    grammarTopicIds: ['sisapaikallissijat', 'ulkopaikallissijat', 'genetiivi', 'adjektiivien-taivutus', 'monikko', 'passiivi-preesens', 'asiointikieli'],
    reading: {
      vocabWarmup: {
        instructionsFi:
          'Osaatko asumisen sanastoa? Selvitä, mitä seuraavat sanat tarkoittavat. Ovatko sanat tärkeitä, jos asut kerrostalossa, rivitalossa, omakotitalossa vai näissä kaikissa?',
        items: [
          { fi: 'hissi', en: 'elevator (kerrostalo)', bn: 'লিফট (অ্যাপার্টমেন্ট বিল্ডিং)' },
          { fi: 'parveke', en: 'balcony (kerrostalo, rivitalo)', bn: 'বারান্দা (অ্যাপার্টমেন্ট, টাউনহাউস)' },
          { fi: 'piha', en: 'yard (kaikissa)', bn: 'উঠান (সব ধরনের বাসায়)' },
          { fi: 'autotalli', en: 'garage (omakotitalo, rivitalo)', bn: 'গ্যারেজ (একক বাড়ি, টাউনহাউস)' },
          { fi: 'kellari', en: 'basement (kaikissa)', bn: 'বেসমেন্ট (সব ধরনের বাসায়)' },
          { fi: 'sauna', en: 'sauna (kaikissa)', bn: 'সাউনা (সব ধরনের বাসায়)' },
          { fi: 'keittiö', en: 'kitchen (kaikissa)', bn: 'রান্নাঘর (সব ধরনের বাসায়)' },
          { fi: 'olohuone', en: 'living room (kaikissa)', bn: 'বসার ঘর (সব ধরনের বাসায়)' },
          { fi: 'makuuhuone', en: 'bedroom (kaikissa)', bn: 'শোবার ঘর (সব ধরনের বাসায়)' },
          { fi: 'kylpyhuone', en: 'bathroom (kaikissa)', bn: 'বাথরুম (সব ধরনের বাসায়)' },
          { fi: 'vuokra', en: 'rent (kaikissa)', bn: 'ভাড়া (সব ধরনের বাসায়)' },
          { fi: 'vastike', en: 'maintenance fee (omistusasunto)', bn: 'রক্ষণাবেক্ষণ ফি (মালিকানাধীন বাসা)' },
          { fi: 'remontti', en: 'renovation (kaikissa)', bn: 'সংস্কার (সব ধরনের বাসায়)' },
          { fi: 'isännöitsijä', en: 'property manager (kerrostalo, rivitalo)', bn: 'সম্পত্তি ব্যবস্থাপক (অ্যাপার্টমেন্ট, টাউনহাউস)' },
          { fi: 'taloyhtiö', en: 'housing company (kaikissa)', bn: 'হাউজিং কোম্পানি (সব ধরনের বাসায়)' },
          { fi: 'naapuri', en: 'neighbor (kaikissa)', bn: 'প্রতিবেশী (সব ধরনের বাসায়)' },
          { fi: 'talkoot', en: 'volunteer work together (kaikissa)', bn: 'সম্মিলিত স্বেচ্ছাশ্রম (সব ধরনের বাসায়)' },
        ],
        note: {
          title: 'VINKKI: Lue kysymys tai väite tarkasti',
          body: [
            'YKI-lukemisen tehtävissä on usein vastausvaihtoehtoja, jotka vaikuttavat oikeilta, mutta ovat itse asiassa vääriä.',
            'Tärkeää: sama sana kysymyksessä ja tekstissä ei automaattisesti tarkoita, että vaihtoehto on oikein. Oikea vastaus voi käyttää eri sanoja, jotka tarkoittavat samaa asiaa.',
            'Esimerkki: Teksti sanoo "Polkupyörävarastossa ja käytössä olevat pyörät on merkittävä. Huonokuntoiset ja hylätyt pyörät heitetään pihatalkoissa roskalavalle." Väite "Polkupyörävarastossa on merkittävä määrä huonokuntoisia pyöriä" → Väärin (B), koska teksti ei kerro pyörien määrästä – se kertoo, että käytössä olevat pyörät merkitään ja huonokuntoiset heitetään pois.',
          ],
        },
      },
      practicePassages: [
        {
          id: 'reading-practice-1',
          titleFi: 'Onnistuneet pihatalkoot',
          titleEn: 'Successful Yard Work Events',
          textFi:
            'Keväisin ja syksyisin taloyhtiöissä järjestetään pihatalkoita. Yhdessä puuhastellen laitetaan pihaa kesäkuntoon. Vaikka talkoissa keskitytäänkin puutarhatöihin, vähintäänkin yhtä tärkeää on seurustelu ja naapureihin tutustuminen. Kun tullaan tutuiksi, kaikenlaisista asioista on helpompi puhua.\n\nYhteisöllisyys lisääntyy, yhteishenki vahvistuu ja kiinnostus yhteisten asioiden hoitoon sekä päätöksentekoon kasvaa. Kun asioista puhutaan, on taloyhtiössä kaikkien mukava asua ja elää.\n\nOn tärkeää muistaa, että talkoot perustuvat aina vapaaehtoisuuteen. Ketään ei voida velvoittaa tekemään "omaa osuuttaan", jos ei syystä tai toisesta voi tai halua osallistua. Suuremmat remontit kannattaakin teettää alan ihmisillä, jottei niiden tekeminen kuormita liikaa talkoisiin osallistuvia. Turvallisuussyistä myös kiipeily katoilla ja tikkailta kannattaa jättää ammattilaisille.\n\nMonilla taloyhtiöillä on hyviä kokemuksia yhteisöllisyyden lisääntymisestä. Mitä kaikkea teidän taloyhtiönne voisi keksiä tänä vuonna? Jos et ole vielä kertaakaan osallistunut taloyhtiön talkoisiin, mitäpä jos tänä vuonna kokeilisit? Saatat yllättyä positiivisesti!',
          trueFalse: [
            {
              id: 'rp1-tf1',
              statementFi: 'Osallistuminen talkoisiin on tärkeää, koska talkoissa voi tutustua naapureihin.',
              answer: true,
              explanation: 'Teksti sanoo: "vähintäänkin yhtä tärkeää on seurustelu ja naapureihin tutustuminen".',
            },
            {
              id: 'rp1-tf2',
              statementFi: 'Talkoissa tehdään taloyhtiön pieniä töitä.',
              answer: true,
              explanation:
                'Teksti sanoo, että talkoissa "keskitytäänkin puutarhatöihin" ja "suuremmat remontit kannattaakin teettää alan ihmisillä" – tämä viittaa siihen, että talkoot ovat pienempiä töitä varten.',
            },
            {
              id: 'rp1-tf3',
              statementFi: 'Talkoot ovat pakollisia kaikille.',
              answer: false,
              explanation: 'Teksti sanoo: "talkoot perustuvat aina vapaaehtoisuuteen".',
            },
            {
              id: 'rp1-tf4',
              statementFi: 'Talkoot ovat hyvä tapa tehdä myös isoja remontteja.',
              answer: false,
              explanation: 'Teksti sanoo: "Suuremmat remontit kannattaakin teettää alan ihmisillä".',
            },
          ],
        },
        {
          id: 'reading-practice-2',
          titleFi: 'Auto- ja kuljetusalan lakon vaikutukset jäteastioiden tyhjennyksiin',
          titleEn: 'Effects of a Transport Strike on Waste Collection',
          textFi:
            'Keskiviikkona 15.2. alkanut auto- ja kuljetusalan lakko vaikuttaa alueemme jätehuoltoon merkittävästi, sillä arvion mukaan ainakin puolet asuinkiinteistöjen jäteastioista voi jäädä päivittäin tyhjentämättä. Lakon aikana varmistetaan jätehuollon toimivuus ensisijaisesti yhteiskunnallisesti tärkeissä kohteissa, kuten sairaaloissa. Jätekuljetuksia koskevan lakon on määrä loppua 21.2.\n\nJotta kiinteistöjemme jäteastiat eivät yllättyisi, pyydämme asukkaita säilyttämään hajuttomat ja pilaantumattomat jätteet, kuten kartongit ja muovit, kotona. Roskapussit voi nostaa myös parvekkeelle, kunhan huolehditaan siitä, etteivät esim. linnut pääse niihin käsiksi. Lakon aikana jätettä ei ole välttämätöntä lajitella, vaan esimerkiksi sekajäteastioihin voi laittaa niihin normaalisti kuulumattomia vaarattomia jätteitä, jos niissä on tilaa.\n\nYhteistyöterveisin isännöitsijä',
          trueFalse: [
            {
              id: 'rp2-tf1',
              statementFi: 'Auto- ja kuljetusalan lakon vuoksi jätehuollon astiat täytyy merkitä.',
              answer: false,
              explanation: 'Teksti ei mainitse jäteastioiden merkitsemistä; se puhuu jätteiden säilyttämisestä kotona.',
            },
            {
              id: 'rp2-tf2',
              statementFi: 'Lakon aikana pyritään tyhjentämään ainakin sairaaloiden jäteastiat.',
              answer: true,
              explanation: 'Teksti sanoo: "varmistetaan jätehuollon toimivuus ensisijaisesti... sairaaloissa".',
            },
            {
              id: 'rp2-tf3',
              statementFi: 'Asukkaita pyydetään säilyttämään ainakin osaa jätteistään kotona.',
              answer: true,
              explanation: 'Teksti sanoo: "pyydämme asukkaita säilyttämään hajuttomat ja pilaantumattomat jätteet... kotona".',
            },
            {
              id: 'rp2-tf4',
              statementFi: 'Lakon aikana lajittelu on erityisen tärkeää.',
              answer: false,
              explanation: 'Teksti sanoo: "Lakon aikana jätettä ei ole välttämätöntä lajitella".',
            },
          ],
        },
        {
          id: 'reading-practice-3',
          titleFi: 'Lämmityspattereiden ilmaaminen',
          titleEn: 'Radiator Bleeding',
          textFi:
            'Hyvät taloyhtiö Tammenkolon asukkaat!\n\nTaloyhtiön lämmitysjärjestelmässä tehtyjen korjausten jälkitoimena ilmaamme vesikiertoiset lämmityspatterit ti 22.4. - pe 29.4. Huoltomiehillä tulee tällöin olla esteetön pääsy huoneistoihin. Jos asukas ei ole kotona, käytetään yleisavainta.\n\nMikäli teillä on lemmikkejä tai teidän on muista syistä tiedettävä tarkemmin, milloin omassa asunnossanne käydään, ottakaa pikimmiten yhteyttä huoltoesihenkilö Jaakko Paajaseen, jonka tavoitatte numerosta 045 356 2578.\n\nHuomioittehan myös, että lämmityspattereiden luo täytyy päästä vaivatta. Jos asunnossanne on esimerkiksi huonekaluja lähellä pattereita, siirrättehän ne valmiiksi.\n\nJos teillä on kysymyksiä, voitte kääntyä huoltoesihenkilön puoleen. Kiitos yhteistyöstä!\n\nTerveisin Kiinteistöhuolto Korpela Oy',
          open: [
            {
              id: 'rp3-o1',
              questionFi: 'Miksi huoltomiesten täytyy päästä kaikkiin asuntoihin?',
              sampleAnswerFi: 'Koska he ilmaavat lämmityspatterit.',
            },
            {
              id: 'rp3-o2',
              questionFi: 'Mitä asukkaan täytyy tehdä, jos hänellä on lemmikkejä?',
              sampleAnswerFi: 'Ottaa yhteyttä huoltoesihenkilöön.',
            },
            {
              id: 'rp3-o3',
              questionFi: 'Mistä jokaisen asukkaan täytyy huolehtia, jotta huoltomiehet pääsevät tekemään työnsä?',
              sampleAnswerFi: 'Siirtää huonekalut pattereiden läheltä.',
            },
          ],
        },
      ],
      testPassages: [],
    },
    writing: {
      tip: {
        title: 'VINKKI: Tekstin suunnittelu on tärkeä osa kirjoittamista',
        body: [
          'Lämmittelytehtävissä sinulla on runsaasti aikaa suunnitella tekstiäsi. YKI-testissä aikaa ei ole paljon – etsi oma nopea ja tehokas tapa suunnitella.',
          'Luonnos on tekstisi alku, suunnitelmasi ensimmäinen versio.',
          'Kokeile eri suunnittelutapoja: miellekarttoja, listoja, vapaata kirjoittamista. Kokeile menetelmiä, joita et ole aiemmin käyttänyt.',
        ],
      },
      freewrite: {
        instructionsFi: 'Tee miellekartta tai lista asumiseen liittyvästä sanastosta. Käytä esimerkiksi näitä kategorioita:',
        rules: [],
        topics: [
          'asumismuoto (housing type): kerrostalo, rivitalo, omakotitalo, paritalo',
          'asunnon ja talon eri tilat (rooms and spaces): olohuone, keittiö, makuuhuone, kylpyhuone, sauna, parveke, kellari, varasto',
          'asumiskustannukset (housing costs): vuokra, vastike, sähkö, vesi, lämmitys, jätemaksu, vakuutus',
        ],
      },
      groupIntro: {
        instructionsFi: 'Vaihda luonnoksesi luokkatoverin kanssa ja anna palautetta:',
        questions: [
          'Lue toistenne luonnokset.',
          'Kysy kysymyksiä luonnoksista.',
          'Ehdota, mitä voisi lisätä.',
          'Kerro, jos jokin ei tunnu liittyvän aiheeseen.',
        ],
      },
      practiceTasks: [
        {
          id: 'writing-practice-1',
          titleFi: 'Uuden vuokra-asunnon etsiminen',
          instructionsFi:
            'Etsit uutta vuokra-asuntoa. Kirjoita viesti, jossa esittelet itsesi lyhyesti mahdolliselle vuokranantajalle. Kysy ainakin kaksi kysymystä asunnosta. Käytä lämmittelytehtävässä tekemääsi luonnosta.',
          exampleTitleFi: 'Lue tämä muodollinen viesti mallina:',
          exampleFi:
            'Hei, Annikki!\n\nHuomasin asuntoilmoituksesi Facebookin Asuntoja vuokrataan -ryhmässä.\n\nOlen ammatiltani psykoterapeutti. Olen osa-aikaisesti palkkatöissä, minkä lisäksi teen töitä omassa yrityksessäni. Etsin hiljaista ja rauhallista asuntoa vuosiksi eteenpäin. Vuokralaisena olen siisti ja luotettava, ja minulla on luottotiedot kunnossa.\n\nOlisiko mahdollista tulla katsomaan asuntoa lähipäivinä?\n\nYstävällisin terveisin Ella Smith',
        },
      ],
      openingClosingTip: {
        title: 'VINKKI: Muodollisen tervehdyksen tyyli',
        body: [
          'Suomeksi muodollinen viesti alkaa yleensä sanoilla: Hei tai Hei!',
          'Muodollisen kirjoittamisen säännöt: käytä kirjakieltä; pronominit (minä, sinä, me, te) voi usein jättää pois; kohteliaisuuden lisäämiseksi voi käyttää teitittelyä; käytä omistusliitteitä, kuten "asuntomme", "puhelinnumeroni".',
          'Sopivia lopetuksia: Ystävällisin terveisin, Terveisin (hieman vähemmän muodollinen).',
        ],
      },
      informalTasks: [
        {
          id: 'writing-test-informal-1',
          titleFi: 'Tuparikutsu ystäville',
          instructionsFi: 'Olet juuri muuttanut uuteen asuntoon. Kirjoita kutsu ystävillesi.',
        },
        {
          id: 'writing-test-informal-2',
          titleFi: 'Ohjeet ystävälle',
          instructionsFi: 'Lähdet viikoksi matkalle. Ystäväsi jää asuntoosi ja huolehtii lemmikeistäsi ja kasveistasi. Kirjoita sähköposti, jossa annat ohjeet.',
        },
        {
          id: 'writing-test-informal-3',
          titleFi: 'Viesti naapureille',
          instructionsFi:
            'Asut rivitalossa. Lumityöt on jaettu tasan naapureiden kesken. Sinun vuorosi on kahden viikon päästä, mutta olet silloin matkalla. Kirjoita naapureille, selitä tilanne ja pyydä vaihtamaan vuoroa.',
        },
        {
          id: 'writing-test-informal-4',
          titleFi: 'Viesti alueelliseen some-ryhmään',
          instructionsFi:
            'Harkitset muuttamista alueelle, jota et tunne. Kirjoita alueen some-ryhmään ja kysy alueesta – turvallisuudesta, palveluista, harrastusmahdollisuuksista.',
        },
      ],
      formalTasks: [
        {
          id: 'writing-test-formal-1',
          titleFi: 'Viesti huoltoyhtiölle',
          instructionsFi: 'Asunnossasi on ongelma. Kirjoita huoltoyhtiölle, selitä ongelma ja pyydä korjausta mahdollisimman pian.',
        },
        {
          id: 'writing-test-formal-2',
          titleFi: 'Valitusviesti huoltoyhtiöön',
          instructionsFi: 'Polkupyörävaraston ovi ei lukitu. Kirjoita valitus, jossa selität, miksi tämä on ongelma.',
        },
        {
          id: 'writing-test-formal-3',
          titleFi: 'Viesti isännöitsijälle',
          instructionsFi:
            'Naapurisi tupakoi parvekkeellaan, ja savu tulee sinun asuntoosi. Olet pyytänyt häntä lopettamaan, mutta hän jatkaa. Kirjoita ja ehdota, että taloyhtiön kokouksessa laadittaisiin tupakointisäännöt.',
        },
        {
          id: 'writing-test-formal-4',
          titleFi: 'Vastaus kyselyyn',
          instructionsFi:
            'Kaupunki haluaa kehittää alueesi palveluja. Mielestäsi osa leikkivälineistä on huonossa kunnossa. Kirjoita ja selitä tilanne sekä ehdota korjauksia.',
        },
      ],
      opinionTopics: [
        {
          id: 'writing-opinion-1',
          titleFi: 'Asuinpaikka ja asumismuoto',
          options: ['A. Kumpi on parempi asuinpaikka, kaupunki vai maaseutu?', 'B. Vuokra- vai omistusasunto?'],
        },
        {
          id: 'writing-opinion-2',
          titleFi: 'Pääkaupunkiseudun hintataso',
          options: ['Onko tavallisilla ihmisillä varaa asua pääkaupunkiseudulla?'],
        },
        {
          id: 'writing-opinion-3',
          titleFi: 'Muita aiheita',
          options: [
            'Iso koti on parempi kuin pieni',
            'Kaikilla ihmisillä pitäisi olla oma kesämökki',
            'Kaikilla asuinalueilla pitäisi olla samanlaiset palvelut',
          ],
        },
      ],
    },
    listening: {
      tip: {
        title: 'VINKKI: Ääntämisen harjoittelu',
        body: [
          'Ääntämisen harjoittelu auttaa sekä puhumisessa että kuullun ymmärtämisessä. Harjoittele vähän mutta usein – esimerkiksi viisi minuuttia viitenä päivänä viikossa.',
          '3 + 1 -harjoitus: kuulet lauseen kolme kertaa, sitten sanot sen kerran itse.',
        ],
      },
      repeatSentences: {
        instructionsFi: 'Kuuntele lause kolme kertaa, sano se sitten kerran itse.',
        sentences: [
          'Mulla on huonoja uutisia.',
          'Meidän kellarikomeroon on murtauduttu.',
          'Oliks teillä soittimia siellä?',
          'Meidän ois varmaan hyvä tehdä rikosilmoitukset.',
          'Soitin jo poliisille.',
        ],
      },
      practicePassages: [
        {
          id: 'listening-practice-1',
          titleFi: 'Kellarikomeromurto',
          titleEn: 'Storage Room Break-in',
          textFi: NO_TRANSCRIPT_NOTE,
          predictVocab: [
            { fi: 'kellari', en: 'basement', bn: 'বেসমেন্ট' },
            { fi: 'komero', en: 'storage room', bn: 'স্টোরেজ রুম' },
            { fi: 'murto', en: 'break-in', bn: 'সিঁধ কাটা / চুরি' },
            { fi: 'rikosilmoitus', en: 'police report', bn: 'পুলিশ রিপোর্ট' },
            { fi: 'varkaat', en: 'thieves', bn: 'চোর' },
            { fi: 'ovi', en: 'door', bn: 'দরজা' },
            { fi: 'lukko', en: 'lock', bn: 'তালা' },
            { fi: 'poliisi', en: 'police', bn: 'পুলিশ' },
            { fi: 'kellarikomero', en: 'storage room in basement', bn: 'বেসমেন্টের স্টোরেজ রুম' },
            { fi: 'on murtauduttu', en: 'has been broken into', bn: 'সিঁধ কাটা হয়েছে' },
            { fi: 'rikosilmoitukset', en: 'police reports', bn: 'পুলিশ রিপোর্টসমূহ' },
            { fi: 'kätevästi', en: 'conveniently', bn: 'সহজেই' },
            { fi: 'netissä', en: 'online', bn: 'অনলাইনে' },
            { fi: 'saa', en: 'one can / is allowed', bn: 'করা যায় / অনুমতি আছে' },
            { fi: 'jo', en: 'already', bn: 'ইতিমধ্যে' },
            { fi: 'siivota', en: 'to clean', bn: 'পরিষ্কার করা' },
          ],
          open: [
            { id: 'lp1-o1', questionFi: 'Mitä on tapahtunut?', sampleAnswerFi: 'Kellarikomeroon on murtauduttu.' },
            { id: 'lp1-o2', questionFi: 'Mitä on varastettu?', sampleAnswerFi: 'Soittimia on varastettu.' },
            { id: 'lp1-o3', questionFi: 'Mitä asukkaiden on hyvä tehdä?', sampleAnswerFi: 'Asukkaiden on hyvä tehdä rikosilmoitukset.' },
            { id: 'lp1-o4', questionFi: 'Missä voi tehdä rikosilmoituksen?', sampleAnswerFi: 'Rikosilmoituksen voi tehdä netissä.' },
          ],
        },
      ],
      testPassages: [
        {
          id: 'listening-test-1',
          titleFi: 'Annin ja Konstan keskustelu',
          textFi: NO_TRANSCRIPT_NOTE,
          mcq: [
            {
              id: 'lt1-q1',
              question: 'Anni opiskelee',
              options: ['ammattikoulussa', 'yliopistossa', 'lukiossa'],
              correctIndex: 0,
              explanation: 'Vastaus: ammattikoulussa.',
            },
            {
              id: 'lt1-q2',
              question: 'Nyt Anni kulkee kouluun',
              options: ['metrolla', 'kävellen', 'bussilla'],
              correctIndex: 1,
              explanation: 'Vastaus: kävellen.',
            },
            {
              id: 'lt1-q3',
              question: 'Konsta olisi halunnut',
              options: ['lähteä kesällä merelle', 'muuttaa uuteen asuntoon', 'pysyä vanhassa koulussa'],
              correctIndex: 2,
              explanation: 'Vastaus: pysyä vanhassa koulussa.',
            },
            {
              id: 'lt1-q4',
              question: 'Anni haluaisi kutsua Siljan kylään, kun hän on',
              options: ['ostanut uuden asunnon', 'saanut uudet huonekalut', 'käynyt ensin elokuvissa'],
              correctIndex: 1,
              explanation: 'Vastaus: saanut uudet huonekalut.',
            },
          ],
        },
        {
          id: 'listening-test-2',
          titleFi: 'Kimppakämppä',
          titleEn: 'Shared Apartment',
          textFi: NO_TRANSCRIPT_NOTE,
          trueFalse: [
            { id: 'lt2-tf1', statementFi: 'Vanhat ystävät tapaavat sattumalta.', answer: true, explanation: 'Vanhat ystävät tapaavat sattumalta.' },
            {
              id: 'lt2-tf2',
              statementFi: 'Molemmat asuvat tapaamispaikan lähellä.',
              answer: true,
              explanation: 'Molemmat asuvat tapaamispaikan lähellä.',
            },
            { id: 'lt2-tf3', statementFi: 'Liisa etsii uutta asuntoa.', answer: true, explanation: 'Liisa etsii uutta asuntoa.' },
            {
              id: 'lt2-tf4',
              statementFi: 'Marko on myymässä asuntoa.',
              answer: false,
              explanation: 'Marko vuokraa asuntoa, ei myy sitä.',
            },
            {
              id: 'lt2-tf5',
              statementFi: 'Kimppakämpän asukkaat ovat helppoja ja mukavia ihmisiä.',
              answer: true,
              explanation: 'Kimppakämpän asukkaat ovat helppoja ja mukavia ihmisiä.',
            },
            {
              id: 'lt2-tf6',
              statementFi: 'Asunnossa on 5 huonetta, keittiö ja kylpyhuone.',
              answer: false,
              explanation: 'Asunnossa on 3 huonetta, ei 5.',
            },
            {
              id: 'lt2-tf7',
              statementFi: 'Marko ja Liisa sopivat tapaamisajan seuraavalle viikolle.',
              answer: false,
              explanation: 'He sopivat tapaavansa jo samana päivänä.',
            },
            {
              id: 'lt2-tf8',
              statementFi: 'Markon puhelinnumero on 040 726 4620.',
              answer: true,
              explanation: 'Markon puhelinnumero on 040 726 4620.',
            },
          ],
        },
        {
          id: 'listening-test-3',
          titleFi: 'Kotihäpeä',
          titleEn: 'Home Shame',
          textFi: NO_TRANSCRIPT_NOTE,
          open: [
            {
              id: 'lt3-o1',
              questionFi: 'Mitä tarkoittaa kotihäpeä?',
              sampleAnswerFi: 'Kotihäpeä tarkoittaa, että ihminen häpeää omaa kotiaan ja sen sotkuisuutta.',
            },
            {
              id: 'lt3-o2',
              questionFi: 'Mitä ihminen, joka tuntee kotihäpeää, ajattelee omasta kodistaan?',
              sampleAnswerFi: 'Hän ajattelee, että koti on liian sotkuinen ja että muut näkevät sen.',
            },
            {
              id: 'lt3-o3',
              questionFi: 'Miten Siiri reagoi yllätysvieraisiin?',
              sampleAnswerFi: 'Siiri alkaa siivota kiireesti tai ei halua päästää vieraita sisään.',
            },
            {
              id: 'lt3-o4',
              questionFi: 'Miksi ihmiset pelkäävät, että joku näkee heidän sotkuisen kotinsa?',
              sampleAnswerFi: 'He pelkäävät, että muut ajattelevat heistä huonosti.',
            },
            {
              id: 'lt3-o5',
              questionFi: 'Miksi monet luulevat, että kaikilla muilla on aina siistiä?',
              sampleAnswerFi: 'Koska sosiaalisessa mediassa ja kuvissa näytetään vain siistejä koteja.',
            },
          ],
        },
      ],
    },
    speaking: {
      groupIntro: {
        instructionsFi: 'Keskustele asumisesta parin tai pienen ryhmän kanssa. Puhukaa:',
        questions: [
          'Millaisia teidän nykyiset asuinalueenne ovat?',
          'Missä ja miten asuisitte, jos voisitte vapaasti valita?',
          'Mikä teille on tärkeää, kun valitsette asuinpaikkaa?',
        ],
      },
      practiceLongTask: {
        id: 'speaking-practice-1',
        titleFi: 'Asuinpaikastani kertominen',
        titleEn: 'Telling about my home',
        prepSeconds: 60,
        speakSeconds: 180,
        questions: [
          'Missä asut? Millainen paikka se on?',
          'Mitä hyviä ja huonoja puolia asuinpaikassasi on?',
          'Mitä asuinalueesi ympäristössä on?',
        ],
      },
      practiceSituationalTasks: [
        {
          id: 'speaking-practice-situation-1',
          scenarioFi: 'Naapurisi koira haukkuu päivällä, kun omistaja on poissa. Se häiritsee sinua. Mene naapurin ovelle ja kerro asiasta.',
          seconds: 30,
          modelAnswerFi:
            'Moi! Mä asun tässä naapurissa. Teidän koira haukkuu joka päivä monta tuntia putkeen, ja se häiritsee meidän lasten päiväunia tosi pahasti. Mä yritän yleensä opiskella silloin, kun lapset nukkuvat, eikä sekään oikein onnistu. Onkohan teidän koiralla kaikki hyvin?',
        },
        {
          id: 'speaking-practice-situation-2',
          scenarioFi: 'Vuokraat asuntoa, ja astianpesukone on rikki. Soita vuokranantajalle.',
          seconds: 30,
          modelAnswerFi:
            'Moi, tässä Ellen Levy Postitie 3 B:stä. Meidän tiskikone on valitettavasti rikki, vesi vaan jää sinne pohjalle eikä poistu koneesta kunnolla. Olisikohan sitä mahdollista korjata?',
        },
        {
          id: 'speaking-practice-situation-3',
          scenarioFi: 'On satanut paljon lunta. Tehdessäsi lumitöitä tapaat naapurin, joka tekee samaa. Kommentoi säätä.',
          seconds: 10,
          modelAnswerFi: 'Moikka! Kylläpä tätä lunta nyt tulee ja tulee. Mä kyllä tykkään lumesta, mutta tää alkaa jo olla vähän liikaa.',
        },
        {
          id: 'speaking-practice-situation-4',
          scenarioFi: 'Vessasi on rikki. Soita putkimiehelle, kuvaile ongelma ja pyydä häntä tulemaan.',
          seconds: 30,
          modelAnswerFi:
            'Saara Nykänen täällä hei. Meidän vessa on mennyt jotenkin rikki. Vettä valuu lattialle joka kerta, kun vessa vedetään. Pääsisitkö sä katsomaan sitä? Millaisella aikataululla voisi onnistua?',
        },
        {
          id: 'speaking-practice-situation-5',
          scenarioFi: 'Tapaat naapurin porraskäytävässä. Hän tervehtii ja valittaa taas rikkinäisestä lasista ulko-ovessa. Vastaa.',
          seconds: 20,
          modelAnswerFi: 'Moikka! Joo, tosi ärsyttävää, että kaikki pitää aina rikkoa. Juurihan se korjattiin!',
        },
      ],
      dontMemorizeTip: {
        title: 'VINKKI: Älä opettele mallivastauksia ulkoa',
        body: [
          'Et voi opetella mallivastauksia ulkoa – sinun täytyy vastata itse, omin sanoin.',
          'Testissä et onnistu pelkästään vastauksia ulkoa opettelemalla. Harjoittele aina vastaamista omin sanoin!',
        ],
      },
      testLongTasks: [
        {
          id: 'speaking-test-1',
          titleFi: 'Elämäni paras koti',
          titleEn: "The best home I've ever lived in",
          prepSeconds: 60,
          speakSeconds: 90,
          questions: ['Missä se on?', 'Milloin asuit siellä?', 'Millainen paikka se on?', 'Miksi se on mielestäsi paras koti?', 'Mikä tekee kodista hyvän?'],
        },
        {
          id: 'speaking-test-2',
          titleFi: 'Hyvä asuinalue',
          titleEn: 'A good residential area',
          prepSeconds: 60,
          speakSeconds: 90,
          questions: [
            'Mitä alueella täytyy olla?',
            'Mitä palveluita hyvällä asuinalueella on?',
            'Millaiset liikenneyhteydet ovat hyvät?',
            'Mikä tekee asuinalueesta hyvän?',
            'Mikä on sinulle tärkeää, kun valitset asuinaluetta?',
          ],
        },
        {
          id: 'speaking-test-3',
          titleFi: 'Naapurit',
          titleEn: 'Neighbors',
          prepSeconds: 60,
          speakSeconds: 90,
          questions: [
            'Tunnetko naapurisi?',
            'Onko sinulle tärkeää tutustua naapureihin?',
            'Onko sinulla joskus ollut erityisen hyvä tai erityisen huono naapuri?',
            'Mitä taloyhtiöt voivat tehdä, jotta naapurit oppisivat tuntemaan toisensa paremmin?',
          ],
        },
      ],
      conversationTasks: [
        {
          id: 'speaking-conv-1',
          titleFi: 'Asunnon vuokraaminen',
          scenarioFi: 'Lähdet kolmen kuukauden matkalle ja etsit vuokralaista. Joku soittaa kysyäkseen asiasta.',
          turns: [
            { instructionFi: 'Vastaa myöntävästi.', seconds: 5 },
            { instructionFi: 'Vastaa kysymykseen.', seconds: 15 },
            { instructionFi: 'Vastaa kysymykseen.', seconds: 10 },
            { instructionFi: 'Vastaa kysymykseen.', seconds: 30 },
            { instructionFi: 'Reagoi sopivalla tavalla.', seconds: 15 },
            { instructionFi: 'Hyvästele.', seconds: 10 },
          ],
        },
        {
          id: 'speaking-conv-2',
          titleFi: 'Saunavuoron varaaminen',
          scenarioFi: 'Asut kerrostalossa ja haluat varata saunavuoron. Soita isännöitsijälle.',
          turns: [
            { instructionFi: 'Esittele itsesi ja kerro asiasi.', seconds: 20 },
            { instructionFi: 'Vastaa kysymykseen.', seconds: 15 },
            { instructionFi: 'Kerro, minkä päivän haluat.', seconds: 15 },
            { instructionFi: 'Vastaa kysymykseen kieltävästi ja kerro miksi.', seconds: 20 },
            { instructionFi: 'Kerro, minkä ajan haluat.', seconds: 15 },
            { instructionFi: 'Vastaa kysymykseen ja kysy saunan hintaa.', seconds: 20 },
            { instructionFi: 'Kysy jokin kysymys.', seconds: 30 },
            { instructionFi: 'Kiitä ja lopeta puhelu.', seconds: 10 },
          ],
        },
      ],
      situationalTasks: [
        {
          id: 'speaking-situation-1-1',
          setLabel: 'Tilanteet 1',
          scenarioFi: 'Tapaat naapurin pihalla. Hän kysyy, tuletko lauantain talkoisiin. Vastaa.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-1-2',
          setLabel: 'Tilanteet 1',
          scenarioFi: 'Olet juuri muuttanut uuteen asuntoon ja haluat tietää, miten kerhohuoneen voi varata. Kysy naapurilta.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-1-3',
          setLabel: 'Tilanteet 1',
          scenarioFi: 'Olet varannut pesutuvan, mutta kun saavut, naapuri on jo siellä pesemässä pyykkiä. Kerro, mitä ajattelet ja mitä toivoisit hänen tekevän.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-1-4',
          setLabel: 'Tilanteet 1',
          scenarioFi: 'Etsit uutta vuokra-asuntoa ja löysit kiinnostavan ilmoituksen. Soita omistajalle ja kerro hieman itsestäsi.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-1-5',
          setLabel: 'Tilanteet 1',
          scenarioFi: 'Sinulla on juhlat. Naapuri soittaa ovikelloa ja valittaa metelistä. Pyydä kohteliaasti anteeksi.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-2-1',
          setLabel: 'Tilanteet 2',
          scenarioFi: 'Huomaat, että ikääntynyt naapurisi on loukannut itsensä ja liikkuu vaikeasti. Kysy, tarvitseeko hän apua, ja tarjoudu tekemään jotain hyödyllistä.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-2-2',
          setLabel: 'Tilanteet 2',
          scenarioFi: 'Huomaat, että roska-astiat ovat aivan täynnä. Soita jätehuoltoon.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-2-3',
          setLabel: 'Tilanteet 2',
          scenarioFi: 'Naapuri on hankkinut lapselleen pianon. He kysyvät, häiritseekö harjoittelun ääni sinua. Vastaa.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-2-4',
          setLabel: 'Tilanteet 2',
          scenarioFi: 'Naapuri remontoi, ja meteli alkaa hyvin aikaisin aamulla. Soita hänen ovikelloaan ja valita metelistä.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-2-5',
          setLabel: 'Tilanteet 2',
          scenarioFi: 'Naapuri on pysäköinyt autonsa väärään paikkaan. Pyydä häntä siirtämään sen.',
          seconds: 30,
        },
      ],
      opinionTasks: [
        {
          id: 'speaking-opinion-1',
          titleFi: 'Paras tapa asua',
          titleEn: 'The best way to live',
          prepSeconds: 120,
          speakSeconds: 120,
          questions: [
            'Mikä on mielestäsi paras tapa asua?',
            'Mitä hyviä ja huonoja puolia on kerrostalossa?',
            'Mitä hyviä ja huonoja puolia on omakotitalossa?',
            'Haluaisitko asua mieluummin maalla vai kaupungissa?',
          ],
        },
        {
          id: 'speaking-opinion-2',
          titleFi: 'Asumisen hinta',
          titleEn: 'The cost of housing',
          prepSeconds: 120,
          speakSeconds: 120,
          questions: [
            'Onko Suomessa asuminen mielestäsi liian kallista?',
            'Kuinka paljon rahaa itse haluaisit käyttää asumiseen kuukaudessa?',
            'Millaisia asumisen kulut ovat muissa sinulle tutuissa maissa?',
            'Pitäisikö ihmisten saada valtiolta asumistukea?',
          ],
        },
        {
          id: 'speaking-opinion-3',
          titleFi: 'Omistusasuminen ja lapsiperheiden asuminen',
          titleEn: 'Owner-occupied housing and families with children',
          prepSeconds: 120,
          speakSeconds: 120,
          questions: ['Valitse A tai B.'],
          subChoices: [
            {
              label: 'A. Kannattaako ostaa oma asunto?',
              questions: [
                'Mitä hyviä ja huonoja puolia on omistusasumisessa?',
                'Mitä hyviä ja huonoja puolia on vuokra-asumisessa?',
                'Asutko itse omistusasunnossa vai vuokralla?',
                'Missä elämäntilanteessa kannattaa ostaa oma asunto?',
              ],
            },
            {
              label: 'B. Lapsiperhe ei voi asua kaupungin keskustassa',
              questions: [
                'Millainen on hyvä asuinpaikka lapsiperheelle?',
                'Voiko lapsiperhe asua kaupungin keskustassa?',
                'Mitä hyviä ja huonoja puolia keskustassa asumisessa on lapsiperheelle?',
              ],
            },
          ],
        },
      ],
    },
    vocabSummary: [
      { fi: 'asuminen', en: 'living / housing', bn: 'বসবাস / আবাসন' },
      { fi: 'koti', en: 'home', bn: 'বাড়ি' },
      { fi: 'asunto', en: 'apartment', bn: 'অ্যাপার্টমেন্ট' },
      { fi: 'kerrostalo', en: 'apartment building', bn: 'বহুতল ভবন' },
      { fi: 'rivitalo', en: 'row house / townhouse', bn: 'টাউনহাউস' },
      { fi: 'omakotitalo', en: 'detached house', bn: 'একক বাড়ি' },
      { fi: 'vuokrata', en: 'to rent', bn: 'ভাড়া নেওয়া' },
      { fi: 'ostaa', en: 'to buy', bn: 'কেনা' },
      { fi: 'vuokra', en: 'rent', bn: 'ভাড়া' },
      { fi: 'vastike', en: 'maintenance fee', bn: 'রক্ষণাবেক্ষণ ফি' },
      { fi: 'isännöitsijä', en: 'property manager', bn: 'সম্পত্তি ব্যবস্থাপক' },
      { fi: 'huoltoyhtiö', en: 'maintenance company', bn: 'রক্ষণাবেক্ষণ কোম্পানি' },
      { fi: 'naapuri', en: 'neighbor', bn: 'প্রতিবেশী' },
      { fi: 'talkoot', en: 'volunteer work together', bn: 'সম্মিলিত স্বেচ্ছাশ্রম' },
      { fi: 'kellari', en: 'basement', bn: 'বেসমেন্ট' },
      { fi: 'parveke', en: 'balcony', bn: 'বারান্দা' },
      { fi: 'sauna', en: 'sauna', bn: 'সাউনা' },
      { fi: 'keittiö', en: 'kitchen', bn: 'রান্নাঘর' },
      { fi: 'olohuone', en: 'living room', bn: 'বসার ঘর' },
      { fi: 'makuuhuone', en: 'bedroom', bn: 'শোবার ঘর' },
      { fi: 'kylpyhuone', en: 'bathroom', bn: 'বাথরুম' },
      { fi: 'remontti', en: 'renovation', bn: 'সংস্কার' },
      { fi: 'hissi', en: 'elevator', bn: 'লিফট' },
      { fi: 'piha', en: 'yard', bn: 'উঠান' },
      { fi: 'autotalli', en: 'garage', bn: 'গ্যারেজ' },
      { fi: 'pesutupa', en: 'laundry room', bn: 'লন্ড্রি রুম' },
    ],
    usefulPhrases: [
      { fi: 'Asun...', en: 'I live in...', bn: 'আমি ... বাস করি।' },
      { fi: 'Olen muuttanut...', en: 'I have moved to...', bn: 'আমি ... চলে এসেছি।' },
      { fi: 'Minulla on asunto...', en: 'I have an apartment...', bn: 'আমার একটি অ্যাপার্টমেন্ট আছে...' },
      { fi: 'Haluaisin vuokrata...', en: 'I would like to rent...', bn: 'আমি ভাড়া নিতে চাই...' },
      { fi: 'Asunnossa on...', en: 'The apartment has...', bn: 'অ্যাপার্টমেন্টে আছে...' },
      { fi: 'Kotona on...', en: 'At home there is...', bn: 'বাসায় আছে...' },
      { fi: 'Naapurini on...', en: 'My neighbor is...', bn: 'আমার প্রতিবেশী...' },
      { fi: 'Taloyhtiössä on...', en: 'The housing company has...', bn: 'হাউজিং কোম্পানিতে আছে...' },
      { fi: 'Tarvitsen huoltomiehen.', en: 'I need a maintenance man.', bn: 'আমার একজন মেরামতকারী দরকার।' },
      { fi: 'Haluaisin ilmoittaa viasta.', en: 'I would like to report a fault.', bn: 'আমি একটি ত্রুটির কথা জানাতে চাই।' },
      { fi: 'Milloin pääsen katsomaan?', en: 'When can I come to view (it)?', bn: 'আমি কখন দেখতে আসতে পারি?' },
    ],
  },
  {
    id: 'yki-ch3',
    number: 3,
    titleFi: 'Kauppa ja palvelut',
    titleEn: 'Shops and Services',
    pages: '72-106',
    theme: 'Ostokset, asiakaspalvelu, valitukset, palaute, pankkiasiat ja erilaiset palvelut',
    grammarTopicIds: ['objektin-sijamuodot', 'komparointi', 'modaaliverbit', 'konditionaali', 'imperatiivi', 'verbien-rektio', 'asiointikieli'],
    reading: {
      vocabWarmup: {
        instructionsFi: 'Osaatko asiakaspalautteeseen liittyvää sanastoa? Ymmärrätkö seuraavat fraasit?',
        items: [
          { fi: 'Haluaisin antaa palautetta.', en: 'I would like to give feedback. (Neutral)', bn: 'আমি মতামত দিতে চাই। (নিরপেক্ষ)' },
          { fi: 'Olen erittäin tyytyväinen tuotteisiinne.', en: 'I am very satisfied with your products. (Positive)', bn: 'আমি আপনাদের পণ্যে অত্যন্ত সন্তুষ্ট। (ইতিবাচক)' },
          { fi: 'Ravintolailtamme meni pilalle.', en: 'Our restaurant evening was ruined. (Negative)', bn: 'আমাদের রেস্তোরাঁর সন্ধ্যাটি নষ্ট হয়ে গেল। (নেতিবাচক)' },
          { fi: 'Olen pettynyt asiakaspalveluun.', en: 'I am disappointed in the customer service. (Negative)', bn: 'আমি গ্রাহকসেবায় হতাশ। (নেতিবাচক)' },
          { fi: 'En ole koskaan ennen saanut näin loistavaa palvelua.', en: 'I have never received such great service before. (Positive)', bn: 'আমি আগে কখনো এত চমৎকার সেবা পাইনি। (ইতিবাচক)' },
          { fi: 'Uudet tilat ovat todella viihtyisät.', en: 'The new premises are really cozy. (Positive)', bn: 'নতুন জায়গাটি সত্যিই আরামদায়ক। (ইতিবাচক)' },
          { fi: 'Haluaisin keskustella esihenkilösi kanssa.', en: 'I would like to speak with your supervisor. (Negative)', bn: 'আমি আপনার ঊর্ধ্বতনের সাথে কথা বলতে চাই। (নেতিবাচক)' },
          { fi: 'Jouduimme odottamaan yli tunnin.', en: 'We had to wait over an hour. (Negative)', bn: 'আমাদের এক ঘণ্টার বেশি অপেক্ষা করতে হয়েছিল। (নেতিবাচক)' },
          { fi: 'Hotellihuone oli likainen.', en: 'The hotel room was dirty. (Negative)', bn: 'হোটেল রুমটি নোংরা ছিল। (নেতিবাচক)' },
          { fi: 'Myyjä oli töykeä.', en: 'The salesperson was rude. (Negative)', bn: 'বিক্রয়কর্মী রূঢ় ছিল। (নেতিবাচক)' },
        ],
        note: {
          title: 'VINKKI: Aloita avokysymyksistä ja vastaa omin sanoin',
          body: [
            'Lukemisen ymmärtämisen kokeessa kannattaa tehdä avoimet kysymykset ensin. Jos aika loppuu kesken, muihin tehtäviin voi arvata, mutta avoimiin kysymyksiin ei voi arvata.',
            'Kaksi tärkeää sääntöä: Etsi vastaus aina tekstistä – älä mieti, mitä itse ajattelet tai uskot, vaan katso, mitä teksti sanoo.',
            'Älä kopioi vastaustasi suoraan tekstistä – kerro se omin sanoin.',
          ],
        },
      },
      practicePassages: [
        {
          id: 'reading-practice-1',
          titleFi: 'Valitus ravintolakäynnistä',
          titleEn: 'Complaint about a Restaurant Visit',
          textFi:
            'Hei\n\nHaluaisin antaa palautetta ravintolanne toiminnasta. Olen yleensä saanut teillä syödessäni erinomaista palvelua, mutta tällä kertaa meni valitettavasti hiukan pieleen. Sain nimittäin oman annokseni vasta yli puoli tuntia sen jälkeen, kun muu pöytäseurue oli saanut omansa. Jouduin ensin odottamaan nälkäisenä paljon kauemmin kuin muut ja sitten syömään ruokani loppuun yksin, kun lounasseuralaiseni joutuivat jo lähtemään takaisin töihin. Kun mainitsin asiasta tarjoilijalle, hän vain kivahti minulle, että tänään on kauhea kiire, eikä tarjonnut mitään hyvitystä. Siispä lähestyn nyt teitä. Toivoisin, että voisitte vastata palautteeseeni ja varmistaa, että näin ei tapahtuisi jatkossa, sillä mielelläni ruokailisin ravintolassanne jatkossakin!\n\nYstävällisin terveisin Helena Kortelainen',
          open: [
            {
              id: 'rp1-o1',
              questionFi: 'Millaista palvelu on yleensä?',
              sampleAnswerFi: 'Hyvää / Erinomaista / Loistavaa.',
            },
            {
              id: 'rp1-o2',
              questionFi: 'Mikä on Helenan valituksen aihe? Mistä Helena valittaa ravintolalle?',
              sampleAnswerFi: 'Hän sai ruokansa myöhässä / puoli tuntia muita myöhemmin, ja tarjoilija oli töykeä.',
            },
            {
              id: 'rp1-o3',
              questionFi: 'Mitä ravintolan pitäisi Helenan mielestä tehdä? (2 asiaa)',
              sampleAnswerFi: 'Vastata palautteeseen ja varmistaa, ettei näin tapahdu jatkossa.',
            },
          ],
        },
        {
          id: 'reading-practice-2',
          titleFi: 'Ravintolan vastaus',
          titleEn: "Restaurant's Response",
          textFi:
            'Hei Helena\n\nKiitos viestistäsi! Pyrimme jatkuvasti kehittämään toimintaamme, ja siksi palautteesi on meille erittäin tärkeä.\n\nPahoittelen, että käyntinne meillä ei ollut onnistunut, emmekä tällä kertaa pystyneet palvelemaan teitä parhaalla mahdollisella tavalla. Todella ikävää, että annosten kanssa on nyt käynyt näin. Tarkoituksemme on toimia niin, että annokset valmistetaan ja tuodaan pöytään yhtä aikaa, jotta koko pöytäseurue voi ruokailla yhdessä. Kerron palautteesi henkilökunnallemme, ja yritämme huolehtia siitä, että näin ei käy enää uudelleen.\n\nKaunista syksyä!\n\nYstävällisin terveisin\nElina vuoropäällikkö\nRavintola Minnan muona',
          tip: {
            title: 'VINKKI: Reklamaatio',
            body: [
              'Reklamaatio on valitus, jossa asiakas kertoo yritykselle, mikä tuotteessa tai palvelussa on vialla ja miten sen voisi korjata tai hyvittää.',
            ],
          },
          open: [
            {
              id: 'rp2-o1',
              questionFi: 'Mitä Elina ajattelee Helenan palautteesta?',
              sampleAnswerFi: 'Hän pitää palautetta tärkeänä ja pahoittelee tapahtunutta.',
            },
            {
              id: 'rp2-o2',
              questionFi: 'Mitä Elina lupaa tehdä?',
              sampleAnswerFi: 'Kertoa palautteen henkilökunnalle ja huolehtia, ettei näin käy uudelleen.',
            },
          ],
        },
      ],
      testPassages: [
        {
          id: 'reading-test-1',
          titleFi: 'Reseptit ruokakassien helmenä',
          titleEn: 'Recipes as the Gem of Food Boxes',
          source: 'Jaakko Jokela, pointti.fi (lyhennetty ja muokattu)',
          textFi:
            'Ruokakassipalveluiden käyttö on yleistynyt nopeasti. Nyt markkinoilla on jo useampia yrityksiä, jotka toimittavat sekä ruoka-ainekset että reseptit suoraan asiakkaan kotiovelle. Kaupunkiuutiset testasi yhtä ruokakassipalvelua.\n\nRuokalaatikkopalvelun kautta nelihenkinen lahtelaisperhe tilasi perhelaatikon, jossa oli neljä eri ateriaa. Perheeseen kuuluu vanhempien lisäksi 3-vuotias poika ja 5-vuotias tyttö. Palvelun kautta voi tilata myös vegaani- tai kasvisruokalaatikon.\n\nRuokalaatikon annokset olivat uunilohta ja perunamuussia, hapanimeläkanaa ja riisiä, fetajuustopastaa sekä hampurilaiset bataattiranskalaisilla.\n\nAinekset ja ohjeet toimitetaan kätevästi kotiovelle asti. Ruokalaatikon annoksiin on merkitty muun muassa valmistusaika, mikä helpottaa sopivan ruoan valitsemista arjen kiireessä.\n\nLasten suosikkeja olivat uunilohi ja hapanimeläkana, joiden pääraaka-aineet olivat heille jo ennestään tuttuja. Molemmissa annoksissa oli lasten mielestä sopivasti makua, mutta ei liikaa mausteita.\n\nKasvisruoka-annos sisälsi pehmeäksi kypsennettyä fetajuustoa, kirsikkatomaatteja ja pastaa. Annos oli nopea valmistaa ja maistui koko perheelle. Hampurilaisistakin tykättiin, mutta ne olisivat maistuneet varmasti vielä paremmin vähän vanhemmille lapsille.\n\nRuokakassipalvelun etuna oli helppous. Eri vaihtoehdoista sai valita sopivan ruuan kullekin päivälle maun tai valmistusajan mukaan.\n\nRuokakassi säästi myös reilusti aikaa, kun ei tarvinnut käydä kaupassa eikä miettiä viikon ruokia.\n\nHienoa ruokakassipalvelussa oli myös se, että ainakin osa annoksista jäi pysyvästi asiakkaiden ruokalistalle. Selkeiden reseptien mukaan samat annokset voi valmistaa myöhemmin itse hankkimalla kaupasta tarvittavat raaka-aineet.\n\nRuoka-annokset olivat isoja. Ainekset olivat tuoreita ja pääosin kotimaisia. Miinuksena voidaan pitää sitä, että tiettyjä aineksia piti olla valmiiksi kaapissa. Jos nämä ainekset olisivat tiedossa ennen ruokien saapumista, ne voisi hankkia jo etukäteen.',
          mcq: [
            {
              id: 'rt1-q1',
              question: 'Mitä ruokakassipalveluyritykset toimittavat?',
              options: ['lääkereseptejä', 'ruokien raaka-aineita', 'kangaskasseja'],
              correctIndex: 1,
              explanation: 'Vastaus: ruokien raaka-aineita.',
            },
            {
              id: 'rt1-q2',
              question: 'Mistä ruoista lapset pitivät eniten?',
              options: ['kalasta ja broilerista', 'perunamuussista ja riisistä', 'fetajuustopastasta ja hampurilaisista'],
              correctIndex: 0,
              explanation: 'Vastaus: kalasta ja broilerista (uunilohi ja hapanimeläkana).',
            },
            {
              id: 'rt1-q3',
              question: 'Mitä huonoja puolia ruokakassipalveluissa oli?',
              options: [
                'Ruokakassi ei sisältänyt kaikkia ateriaan tarvittavia aineksia.',
                'Ruoka-ainekset eivät olleet riittävän kotimaisia.',
                'Annokset olivat liian isoja.',
              ],
              correctIndex: 0,
              explanation: 'Vastaus: Ruokakassi ei sisältänyt kaikkia ateriaan tarvittavia aineksia.',
            },
          ],
        },
        {
          id: 'reading-test-2',
          titleFi: 'Myynnissä vene',
          titleEn: 'Boat for Sale',
          textFi:
            'Myynnissä vene\n\nMyydään hyväkuntoinen, käytetty moottorivene ajanpuutteen vuoksi. Vene on vuosimallia 2021, mutta otettu käyttöön 2022. Kulkee nätisti kelissä kuin kelissä ja viihtyy niin merellä kuin sisävesissä. Veneessä on kaksitahdimoottori, joka on reilu 10 vuotta vanha, mutta toimii edelleen kuin uusi.\n\nLisähinnasta saa trailerin, joka on kolme vuotta vanha, ja jolla on vedetty venettä vain muutama sata kilometriä. Vene on ollut kahdella omistajalla.\n\nLisätietoa vain soittamalla.\n\nPasi Kanninen 050 123 3255',
          trueFalse: [
            {
              id: 'rt2-tf1',
              statementFi: 'Ilmoittajalla ei ole riittävästi aikaa veneilyyn.',
              answer: true,
              explanation: 'Teksti sanoo: "ajanpuutteen vuoksi".',
            },
            {
              id: 'rt2-tf2',
              statementFi: 'Veneellä on ajettu jo vuonna 2021.',
              answer: false,
              explanation: 'Teksti sanoo: "vuosimallia 2021, mutta otettu käyttöön 2022".',
            },
            {
              id: 'rt2-tf3',
              statementFi: 'Veneellä voi ajaa vain hyvällä säällä.',
              answer: false,
              explanation: 'Teksti sanoo: "Kulkee nätisti kelissä kuin kelissä".',
            },
            {
              id: 'rt2-tf4',
              statementFi: 'Moottori ei ole uusi.',
              answer: true,
              explanation: 'Teksti sanoo: "kaksitahdimoottori, joka on reilu 10 vuotta vanha".',
            },
            {
              id: 'rt2-tf5',
              statementFi: 'Kaupan päälle saa trailerin.',
              answer: false,
              explanation: 'Teksti sanoo: "Lisähinnasta saa trailerin" – siis se maksaa lisää, ei tule kaupan päälle.',
            },
            {
              id: 'rt2-tf6',
              statementFi: 'Myyjälle ei voi lähettää sähköpostia.',
              answer: true,
              explanation: 'Teksti sanoo: "Lisätietoa vain soittamalla".',
            },
          ],
        },
        {
          id: 'reading-test-3',
          titleFi: 'Lukukoirat',
          titleEn: 'Reading Dogs',
          source: 'Vaara-kirjastot (lyhennetty ja muokattu)',
          textFi:
            'Lukukoirat ovat kuuntelemisen ammattilaisia. Lukukoirille voivat käydä lukemassa juuri lukemaan oppineet, lukemista jännittävät tai muuten vain ääneenlukua treenaavat lukijat. Lukukoiria työskentelee useissa Lukemo-kirjastojen toimipisteissä. Kysy lisää lukukoirailusta kirjastostasi! Nyt esittelemme kaksi Lukemo-kirjastojen lukukoiraa:\n\nSuomenlapinkoira Hertta on Kennelliiton lukukoirakurssin käynyt lukukoira, joka tykkää ihmisistä ja rapsuttelusta. Hertta vastaanottaa lukijoita Pähkäneen pääkirjastossa parittomien viikkojen tiistaisin klo 15.00-16.30. Varaa lukuaika kirjastosta paikan päällä tai soittamalla numeroon 040 123 3132. Lukuaika on 20 min/lukija. Tervetuloa lukemaan!\n\nNukka on porokoirauros, joka toimii Järvelän kirjastossa lukukoirana. Luonteeltaan Nukka on ystävällinen, rauhallinen ja lapsirakas. Nukka rakastaa rapsutuksia. Nukan mukana on aina oma ohjaaja, joka huolehtii siitä, että koiran ja lukijoiden on turvallista työskennellä yhdessä. Nukalla on ruoka-aineallergioita, joten omia makupaloja sille ei voi tuoda, mutta ohjaajalla on sille sopivia herkkupaloja aina mukana. Nukalle voi varata noin 15 minuutin lukuaikoja kirjastosta puhelinnumerosta 040 542 9987 tai sähköpostitse osoitteesta jarvelan.kirjasto@jarvela.fi.',
          open: [
            {
              id: 'rt3-o1',
              questionFi: 'Kenelle lukukoirista on apua?',
              sampleAnswerFi: 'Juuri lukemaan oppineille, lukemista jännittäville tai ääneenlukua treenaaville lukijoille.',
            },
            { id: 'rt3-o2', questionFi: 'Kuinka kauan Hertalle voi lukea?', sampleAnswerFi: '20 minuuttia.' },
            {
              id: 'rt3-o3',
              questionFi: 'Mitä Nukalle ei saa antaa? Miksi?',
              sampleAnswerFi: 'Omia makupaloja, koska Nukalla on ruoka-aineallergioita.',
            },
            {
              id: 'rt3-o4',
              questionFi: 'Mitä täytyy tehdä, jos haluaa mennä lukemaan Nukalle?',
              sampleAnswerFi: 'Varata aika kirjastosta puhelimitse tai sähköpostitse.',
            },
          ],
        },
      ],
    },
    writing: {
      tip: {
        title: 'VINKKI: Muodollinen viesti',
        body: [
          'Muodollinen viesti on viesti, joka lähetetään jollekulle, jota et tunne.',
          'Muodollisen viestin piirteitä: Alku: Hei tai Hei! Loppu: Ystävällisin terveisin.',
          'Suomeksi ei käytetä titteleitä, arvonimiä tai hellittelynimiä.',
          '"Hei" on yksinään riittävän kohtelias aloitus.',
          'Verbit ovat usein konditionaalissa (-isi) – kohtelias verbimuoto: Haluaisin, Toivoisin, Voisitte.',
        ],
      },
      freewrite: {
        instructionsFi:
          'Etsi hyödyllisiä fraaseja aiemmista lukemisen ymmärtämisen teksteistä. Kirjoita ylös hyödyllisiä fraaseja näihin kysymyksiin:',
        rules: [
          'Miten kuvailet vikaa tai ongelmaa?',
          'Miten kerrot, että olet pettynyt?',
          'Miten ehdotat ratkaisua ongelmaan?',
        ],
        topics: [
          'Valitettavasti... (Unfortunately...)',
          'Huomasin, että... (I noticed that...)',
          'Olen pettynyt, koska... (I am disappointed because...)',
          'Toivoisin, että... (I would hope that...)',
          'Voisitteko... (Could you...)',
          'Pyydän, että... (I request that...)',
        ],
      },
      groupIntro: {
        instructionsFi: 'Keskustele luokkatovereiden kanssa löytämistäsi fraaseista.',
        questions: [
          'Lukekaa toistenne fraasit.',
          'Miettikää muita samankaltaisia fraaseja. Miten muuten saman asian voisi sanoa?',
          'Kirjoittakaa ylös fraasit, joista keskustelitte ja joita ette olleet vielä kirjoittaneet.',
        ],
      },
      practiceTasks: [
        {
          id: 'writing-practice-1',
          titleFi: 'Tutki muodollisia viestejä ja kirjoita valitus',
          instructionsFi:
            'a) Katso uudelleen tekstit "Valitus ravintolakäynnistä" ja ravintolan vastaus. b) Aseta ajastin 15 minuuttiin. Kirjoita valitusviesti seuraavasta aiheesta: Tilasit tuotteen verkosta. Kun avasit paketin, huomasit, että tuote on viallinen. Keksi itse, mikä vika on. Kerro ostopäivä, tuotteen nimi, merkki ja malli. Kuvaile ongelma ja ehdota ratkaisua.',
          bulletsFi: [
            'Millainen alkutervehdys viesteissä on?',
            'Millainen lopetus viesteissä on?',
            'Mitä muuta huomaat, mikä kertoo, että viesti on muodollinen?',
          ],
          exampleTitleFi: 'Havainnot:',
          exampleFi:
            'Alkutervehdys: "Hei" (muodollinen mutta ystävällinen). Lopetus: "Ystävällisin terveisin". Konditionaalin käyttö: "Haluaisin", "toivoisin", "voisitte". Kohtelias sävy koko viestissä.',
          sampleFi:
            'Hei!\n\nTilasin teidän verkkokaupastanne 15.3.2024 [product name], [brand] [model]. Valitettavasti kun avasin paketin, huomasin, että tuote on viallinen. [Describe the fault].\n\nOlen pettynyt, koska odotin laadukasta tuotetta. Toivoisin, että voisitte vaihtaa tuotteen uuteen toimivaan kappaleeseen tai palauttaa rahani.\n\nLiitän mukaan kuitin ja kuvat viasta.\n\nYstävällisin terveisin,\n[Your name]',
        },
      ],
      openingClosingTip: {
        title: 'VINKKI: Kohteliaisuus muodollisessa viestissä',
        body: [
          'Muista: muodollisessa viestissä ei käytetä titteleitä tai hellittelynimiä – "Hei" riittää yksinään.',
          'Käytä konditionaalia kohteliaisuuden merkkinä: Haluaisin, Toivoisin, Voisitte.',
          'Lopeta viesti fraasilla "Ystävällisin terveisin".',
        ],
      },
      informalTasks: [
        {
          id: 'writing-test-informal-1',
          titleFi: 'Suositteluviesti ystävälle',
          instructionsFi: 'Alueellesi on avattu uusi parturi-kampaamo. Kävit siellä ja olit todella tyytyväinen. Kirjoita viesti, jossa suosittelet sitä. Kerro, miksi pidit siitä.',
        },
        {
          id: 'writing-test-informal-2',
          titleFi: 'Kysymys perheenjäsenelle',
          instructionsFi:
            'Olet pyytänyt tarjouksia kotivakuutuksesta useilta vakuutusyhtiöiltä. Yllätyit isoista eroista. Kirjoita perheenjäsenelle, kerro mielipiteesi ja kysy hänen mielipidettään.',
        },
        {
          id: 'writing-test-informal-3',
          titleFi: 'Avunpyyntö sukulaiselle',
          instructionsFi: 'Olet vaihtanut puhelinta, etkä saa pankkisovellusta toimimaan. Kirjoita teknologiaa hyvin osaavalle sukulaiselle.',
        },
        {
          id: 'writing-test-informal-4',
          titleFi: 'Viesti kaverille',
          instructionsFi: 'Käyt usein uimahallissa kaverisi kanssa. Luit, että kertamaksu nousee merkittävästi. Kirjoita kaverille asiasta.',
        },
      ],
      formalTasks: [
        {
          id: 'writing-test-formal-1',
          titleFi: 'Reklamaatio ruokakauppaan',
          instructionsFi:
            'Ostit riisiä kaupasta. Viikko myöhemmin huomasit, että riisikoisia oli levinnyt kaappiisi. Nyt kaappi on täynnä hyönteisiä. Kirjoita valitus. Kerro, mitä ja milloin ostit. Kuvaile ongelma ja pyydä hyvitystä.',
        },
        {
          id: 'writing-test-formal-2',
          titleFi: 'Valitus verkkokauppaan',
          instructionsFi:
            'Ostit vaatteita verkosta. Kotona huomasit vian. Keksi itse, mikä vika on. Kerro, milloin ja mistä ostit, tuotteen nimi, merkki ja malli.',
        },
        {
          id: 'writing-test-formal-3',
          titleFi: 'Palaute hierojalle',
          instructionsFi:
            'Ikääntynyt sukulaisesi kävi hierojalla ja oli erittäin tyytyväinen. Hänellä on huono näkö ja hän liikkuu epävarmasti, mutta hieroja otti tämän hyvin huomioon. Kirjoita positiivinen palaute hänen puolestaan.',
        },
        {
          id: 'writing-test-formal-4',
          titleFi: 'Varausviesti ravintolaan',
          instructionsFi:
            'Teet varauksen isänpäivälounaalle. Yhdellä perheenjäsenellä on ruokarajoitteita. Kirjoita viesti, jossa kerrot, milloin tulette, kuinka monta ja rajoitteet.',
        },
      ],
      opinionTopics: [
        {
          id: 'writing-opinion-1',
          titleFi: 'Kauppojen asiakaspalvelu ja aukiolot',
          options: ['A. Itsepalvelukassojen hyödyt ja haitat', 'B. Pitääkö kauppojen olla yölläkin auki?'],
        },
        {
          id: 'writing-opinion-2',
          titleFi: 'Pankkipalvelut',
          options: ['Riittääkö verkkopankki, vai tarvitaanko vielä pankkikonttoreita?'],
        },
        {
          id: 'writing-opinion-3',
          titleFi: 'Muita aiheita',
          options: [
            'Kannattaako ottaa vakuutus?',
            'Pitääkö Suomessa saada palvelua suomeksi?',
            'Suomalaiset asiakaspalvelijat ovat epäkohteliaita',
          ],
        },
      ],
    },
    listening: {
      tip: {
        title: 'VINKKI: Sinun ei tarvitse ymmärtää kaikkea',
        body: [
          'Älä panikoi, jos et ymmärrä kaikkea. Sinun ei tarvitse ymmärtää jokaista sanaa. Jos kuulet uuden sanan, jota et ymmärrä, jatka vain kuuntelua. Yritä keskittyä pääasioihin.',
          'Yleensä sinun täytyy vastata perusarvokysymyksiin: Mitä? Missä? Milloin? Miksi? Miten?',
        ],
      },
      practicePassages: [
        {
          id: 'listening-practice-1',
          titleFi: 'Kuulutukset kauppakeskuksessa',
          titleEn: 'Announcements in a Shopping Center',
          textFi: NO_TRANSCRIPT_NOTE,
          open: [
            {
              id: 'lp1-o1',
              questionFi: 'Kenelle tämä kuulutus on tarkoitettu? Mitä heidän täytyy tehdä?',
              sampleAnswerFi: 'Asiakkaille / ostoksille. Heidän täytyy mennä kassalle.',
            },
            {
              id: 'lp1-mcq1',
              questionFi: 'Mitä tapahtuu kassalla kolme?',
              sampleAnswerFi: 'c) Kassa avautuu.',
            },
            {
              id: 'lp1-mcq2',
              questionFi: 'Mitä tapahtuu kassalla kaksi?',
              sampleAnswerFi: 'a) Kassa meni vahingossa lukkoon.',
            },
            {
              id: 'lp1-o4',
              questionFi: 'Keille tämä kuulutus on tarkoitettu? Mitä heidän täytyy tehdä?',
              sampleAnswerFi: 'Auton omistajille / asiakkaille. Heidän täytyy siirtää autonsa.',
            },
            {
              id: 'lp1-o5',
              questionFi: 'Mikä on ongelma? Mitä täytyy tehdä? Mikä on rekisterinumero?',
              sampleAnswerFi: 'Auto on väärällä paikalla. Se täytyy siirtää. Rekisterinumero kerrotaan äänitteellä.',
            },
            {
              id: 'lp1-o6a',
              questionFi: 'Minä päivänä kauppakeskus Stara on auki klo 10-20?',
              sampleAnswerFi: 'Tämä vastaus riippuu kuunneltavasta äänitteestä – kirjan oma malli ei anna tähän tarkkaa vastausta.',
            },
            {
              id: 'lp1-o6b',
              questionFi: 'Mihin aikaan kauppakeskuksen hypermarketit menevät kiinni aatonaattona?',
              sampleAnswerFi: 'Tämä vastaus riippuu kuunneltavasta äänitteestä – kirjan oma malli ei anna tähän tarkkaa vastausta.',
            },
            {
              id: 'lp1-o6c',
              questionFi: 'Mihin aikaan kauppakeskuksen kaupat aukeavat juhannusaattona?',
              sampleAnswerFi: 'Tämä vastaus riippuu kuunneltavasta äänitteestä – kirjan oma malli ei anna tähän tarkkaa vastausta.',
            },
            {
              id: 'lp1-o6d',
              questionFi: 'Mitkä kaupat ovat kiinni juhannuspäivänä?',
              sampleAnswerFi: 'Tämä vastaus riippuu kuunneltavasta äänitteestä – kirjan oma malli ei anna tähän tarkkaa vastausta.',
            },
            {
              id: 'lp1-o6e',
              questionFi: 'Millaiset aukioloajat hypermarketeilla on juhannuspäivänä?',
              sampleAnswerFi: 'Tämä vastaus riippuu kuunneltavasta äänitteestä – kirjan oma malli ei anna tähän tarkkaa vastausta.',
            },
            {
              id: 'lp1-o7a',
              questionFi: 'Millainen uusi liike kauppakeskukseen on avattu?',
              sampleAnswerFi: 'Tämä vastaus riippuu kuunneltavasta äänitteestä – kirjan oma malli ei anna tähän tarkkaa vastausta.',
            },
            {
              id: 'lp1-o7b',
              questionFi: 'Millainen tarjous siellä on juuri nyt?',
              sampleAnswerFi: 'Tämä vastaus riippuu kuunneltavasta äänitteestä – kirjan oma malli ei anna tähän tarkkaa vastausta.',
            },
            {
              id: 'lp1-o7c',
              questionFi: 'Missä päin kauppakeskusta liike on?',
              sampleAnswerFi: 'Tämä vastaus riippuu kuunneltavasta äänitteestä – kirjan oma malli ei anna tähän tarkkaa vastausta.',
            },
          ],
        },
        {
          id: 'listening-practice-2',
          titleFi: 'Vuotava venttiili',
          titleEn: 'Leaking Valve',
          textFi: NO_TRANSCRIPT_NOTE,
          open: [
            { id: 'lp2-o1', questionFi: 'Kuka soittaja on?', sampleAnswerFi: 'Lilli / Lilli soittaa.' },
            { id: 'lp2-o2', questionFi: 'Kenelle hän soittaa?', sampleAnswerFi: 'Kauppaan / asiakaspalveluun.' },
            { id: 'lp2-o3', questionFi: 'Mitä tuotetta puhelu koskee?', sampleAnswerFi: 'Venttiiliä / varaosaa.' },
            { id: 'lp2-o4', questionFi: 'Millainen vika tuotteessa on?', sampleAnswerFi: 'Se vuotaa.' },
            {
              id: 'lp2-o5',
              questionFi: 'Mitä maahantuoja on kertonut kaupalle?',
              sampleAnswerFi: 'Viallinen tuote vaihdetaan uuteen.',
            },
            {
              id: 'lp2-o6',
              questionFi: 'Millaista hyvitystä kauppa tarjoaa asiakkaalle?',
              sampleAnswerFi: 'Uuden tuotteen / hyvitystä.',
            },
            {
              id: 'lp2-o7',
              questionFi: 'Mitä asiakkaan täytyy tuoda mukanaan, kun hän tulee kauppaan?',
              sampleAnswerFi: 'Kuitin ja vanhan tuotteen.',
            },
            {
              id: 'lp2-o8',
              questionFi: 'Miten asiakas suhtautuu vaivaan, joka hänelle aiheutuu viallisesta tuotteesta?',
              sampleAnswerFi: 'Hän on ymmärtäväinen / pettynyt.',
            },
          ],
        },
      ],
      testPassages: [
        {
          id: 'listening-test-1',
          titleFi: 'Riittävän iso läppäri',
          titleEn: 'Big Enough Laptop',
          textFi: NO_TRANSCRIPT_NOTE,
          mcq: [
            {
              id: 'lt1-q1',
              question: 'Mitä asiakas on ostamassa?',
              options: ['ulkoista kovalevyä', 'kannettavaa tietokonetta', 'puhelinta'],
              correctIndex: 1,
              explanation: 'Vastaus: kannettavaa tietokonetta.',
            },
            {
              id: 'lt1-q2',
              question: 'Mikä ominaisuus tuotteessa on asiakkaan mielestä tärkeä?',
              options: ['näytön riittävä koko', 'hyvä muistikapasiteetti', 'iso, liikkuva kuva'],
              correctIndex: 0,
              explanation: 'Vastaus: näytön riittävä koko.',
            },
            {
              id: 'lt1-q3',
              question: 'Millaisia tiedostoja asiakas pääasiassa käsittelee laitteella?',
              options: ['valokuvia', 'videoita', 'tekstitiedostoja'],
              correctIndex: 0,
              explanation: 'Vastaus: valokuvia.',
            },
            {
              id: 'lt1-q4',
              question: 'Miksi laitteen saa nyt edullisesti?',
              options: ['Se on tarjouksessa.', 'Sitä ei ole juuri nyt varastossa.', 'Se on mallikappale.'],
              correctIndex: 2,
              explanation: 'Vastaus: Se on mallikappale.',
            },
            {
              id: 'lt1-q5',
              question: 'Mikä asia palvelussa on asiakkaan mielestä hyvä?',
              options: [
                'Muovipussin saa kaupan päälle.',
                'Kuitti lähetetään myös sähköisesti.',
                'Samalla pystyy liittymään kanta-asiakkaaksi.',
              ],
              correctIndex: 1,
              explanation: 'Vastaus: Kuitti lähetetään myös sähköisesti.',
            },
          ],
        },
        {
          id: 'listening-test-2',
          titleFi: 'Kauppakeskus',
          titleEn: 'Shopping Center',
          textFi: NO_TRANSCRIPT_NOTE,
          trueFalse: [
            {
              id: 'lt2-tf1',
              statementFi: 'Kauppakeskuksen kaikki palvelut avautuvat 5. lokakuuta.',
              answer: true,
              explanation: 'Kaikki palvelut avautuvat 5. lokakuuta.',
            },
            {
              id: 'lt2-tf2',
              statementFi: 'Kauppakeskuksessa on yksi pullonpalautusautomaatti.',
              answer: false,
              explanation: 'Kauppakeskuksessa on useampia pullonpalautusautomaatteja.',
            },
            {
              id: 'lt2-tf3',
              statementFi: 'Kauppakeskuksessa pääsee myöhemmin myös hammaslääkärille.',
              answer: true,
              explanation: 'Hammaslääkäripalvelut ovat tulossa myöhemmin.',
            },
            {
              id: 'lt2-tf4',
              statementFi: 'Terveysasemalla on kahdeksan lääkäriä.',
              answer: false,
              explanation: 'Terveysasemalla ei ole kahdeksaa lääkäriä – äänitteellä mainitaan eri määrä.',
            },
            {
              id: 'lt2-tf5',
              statementFi: 'Kaupunkikulttuurikeskus on toisessa kerroksessa.',
              answer: false,
              explanation: 'Kaupunkikulttuurikeskus ei ole toisessa kerroksessa.',
            },
            {
              id: 'lt2-tf6',
              statementFi: 'Kauppakeskuksella on yli 300 pysäköintipaikkaa.',
              answer: true,
              explanation: 'Kauppakeskuksella on yli 300 pysäköintipaikkaa.',
            },
          ],
        },
        {
          id: 'listening-test-3',
          titleFi: 'Asiamiespostin palvelut avautuvat Rantolassa',
          titleEn: 'Agency Post Services Opening in Rantola',
          textFi: NO_TRANSCRIPT_NOTE,
          open: [
            {
              id: 'lt3-o1',
              questionFi: 'Miten postin toiminta Rantolassa muuttuu?',
              sampleAnswerFi: 'Postin omat palvelut sulkeutuvat ja asiamiesposti avautuu.',
            },
            {
              id: 'lt3-o2',
              questionFi: 'Miksi asia ei ole uusi kauppiaspariskunnalle?',
              sampleAnswerFi: 'He ovat hoitaneet postiasioita jo aiemmin.',
            },
            {
              id: 'lt3-o3',
              questionFi: 'Mitä monille Postin omille toimipisteille on tapahtunut?',
              sampleAnswerFi: 'Ne ovat sulkeutuneet.',
            },
            {
              id: 'lt3-o4',
              questionFi: 'Millaisia palveluita asiamiespostissa on?',
              sampleAnswerFi: 'Postin peruspalvelut: kirjeet, paketit, maksupalvelut.',
            },
          ],
        },
      ],
    },
    speaking: {
      tip: {
        title: 'VINKKI: Kohteliaisuus asiakaspalvelutilanteessa',
        body: [
          'Ollaksesi kohtelias, voit käyttää konditionaalia (-isi): "Anteeksi, voisitko auttaa minua?", "Anteeks, mä tarvitsisin vähän apua.", "Ehtisiks sä auttaa mua vähän?"',
          '-han/-hän-liitepartikkeli: "Anteeks, onkohan teillä alkoholitonta viiniä?", "Anteeks, missähän täällä on vessa?"',
          'Muista sanat "anteeksi" ja "kiitos": "Anteeksi, onkohan teillä isompaa kokoa?", "Kiitos paljon! Paljon kiitoksia!"',
          'Imperfekti nykyhetken tilanteissa: "Missäs teillä olikaan...?"',
        ],
      },
      repeatPhrases: {
        instructionsFi: 'Harjoittele kohteliaita asiakaspalvelufraaseja. Kuuntele lause ja toista se.',
        phrases: [
          'Anteeksi, voisitko auttaa minua?',
          'Anteeks, mä tarvitsisin vähän apua.',
          'Onkohan teillä isompaa kokoa?',
          'Missä teillä olikaan kassat?',
          'Kiitos paljon avusta!',
        ],
      },
      groupIntro: {
        instructionsFi:
          'Tee asiakaspalveludialogi parin kanssa. Valitkaa yksi palvelupaikka. Toinen teistä on työntekijä, toinen asiakas. Esimerkkejä palvelupaikoista:',
        questions: [
          'ruokakauppa (grocery store)',
          'apteekki (pharmacy)',
          'kirjasto (library)',
          'pankki (bank)',
          'vakuutusyhtiö (insurance company)',
        ],
      },
      practiceConversationTasks: [
        {
          id: 'speaking-practice-conv-1',
          titleFi: 'Rikkinäinen puhelin',
          scenarioFi: 'Ostit uuden, kalliin puhelimen, mutta se ei toimi kunnolla. Soita elektroniikkaliikkeeseen.',
          turns: [
            { instructionFi: 'Esittäydy ja kuvaile ongelma.', seconds: 20 },
            { instructionFi: 'Vastaa kysymykseen.', seconds: 20 },
            { instructionFi: 'Vastaa kysymykseen.', seconds: 20 },
            { instructionFi: 'Vastaa myöntävästi ja kerro, milloin tulet käymään.', seconds: 15 },
            { instructionFi: 'Reagoi sopivalla tavalla ja hyvästele.', seconds: 15 },
          ],
        },
      ],
      testLongTasks: [
        {
          id: 'speaking-test-1',
          titleFi: 'Tärkeä palvelu tai yritys',
          titleEn: 'An Important Service or Business',
          prepSeconds: 60,
          speakSeconds: 90,
          questions: [
            'Missä se sijaitsee?',
            'Kuinka usein käyt siellä tai käytät palvelua?',
            'Miksi se on sinulle tärkeä?',
            'Mikä on paras asia tässä paikassa? Miksi?',
          ],
        },
        {
          id: 'speaking-test-2',
          titleFi: 'Huono kokemus asiakaspalvelusta',
          titleEn: 'Bad Experience with Customer Service',
          prepSeconds: 60,
          speakSeconds: 90,
          questions: ['Mitä tapahtui?', 'Miksi kokemus oli huono?', 'Mitä asiakaspalvelijan olisi pitänyt tehdä toisella tavalla?'],
        },
        {
          id: 'speaking-test-3',
          titleFi: 'Arkeni palvelut',
          titleEn: 'My Everyday Services',
          prepSeconds: 60,
          speakSeconds: 90,
          questions: [
            'Missä kaupoissa käyt tai mitä palveluita käytät säännöllisesti?',
            'Mitä palveluita asuinalueellasi on? Puuttuuko jotain?',
            'Mitä palveluita käytät verkossa?',
            'Mitkä palvelut ovat sinulle kaikkein tärkeimpiä?',
            'Mitä palveluita pitäisi olla jokaisen kodin lähellä?',
          ],
        },
      ],
      conversationTasks: [
        {
          id: 'speaking-conv-1',
          titleFi: 'Puhelu pankkiin',
          scenarioFi: 'Soitat pankkiin avataksesi uuden tilin.',
          turns: [
            { instructionFi: 'Kerro, kuka olet ja miksi soitat.', seconds: 15 },
            { instructionFi: 'Vastaa kysymykseen.', seconds: 10 },
            { instructionFi: 'Vastaa kysymykseen.', seconds: 15 },
            { instructionFi: 'Kysy hintaa.', seconds: 15 },
            { instructionFi: 'Reagoi sopivalla tavalla.', seconds: 10 },
            { instructionFi: 'Vastaa kieltävästi.', seconds: 10 },
            { instructionFi: 'Reagoi sopivalla tavalla.', seconds: 5 },
            { instructionFi: 'Hyvästele.', seconds: 5 },
          ],
        },
        {
          id: 'speaking-conv-2',
          titleFi: 'Kadonnut kirjaston kirja',
          scenarioFi: 'Lainasit kirjaston kirjan ja hukkasit sen. Mene kirjastoon.',
          turns: [
            { instructionFi: 'Kerro, mitä on tapahtunut.', seconds: 25 },
            { instructionFi: 'Vastaa kieltävästi ja kerro, miksi.', seconds: 25 },
            { instructionFi: 'Reagoi sopivalla tavalla.', seconds: 10 },
            { instructionFi: 'Vastaa myöntävästi.', seconds: 10 },
            { instructionFi: 'Vastaa kysymykseen.', seconds: 10 },
          ],
        },
      ],
      situationalTasks: [
        {
          id: 'speaking-situation-1-1',
          setLabel: 'Tilanteet 1',
          scenarioFi: 'Kadotit pankkikorttisi. Soita pankkiin ja selitä asia.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-1-2',
          setLabel: 'Tilanteet 1',
          scenarioFi: 'Haluat uuden matkavakuutuksen, koska vanha ei riitä. Soita vakuutusyhtiöön.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-1-3',
          setLabel: 'Tilanteet 1',
          scenarioFi: 'Haluat varata työtilan kirjastosta harrastustasi varten. Kerro kirjastonhoitajalle, millaisen tilan tarvitset ja kuinka monelle hengelle.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-1-4',
          setLabel: 'Tilanteet 1',
          scenarioFi: 'Haluat varata pöydän ravintolasta pientä juhlaa varten. Soita ravintolaan.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-1-5',
          setLabel: 'Tilanteet 1',
          scenarioFi: 'Olet erittäin tyytyväinen ravintolaan, jossa pidit juhlat. Anna palautetta.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-2-1',
          setLabel: 'Tilanteet 2',
          scenarioFi:
            'Olet ravintolassa kaverin kanssa. Pyydä tarjoilijaa tuomaan lasku. Kun sinulta kysytään, oliko ruoka hyvää, kerro, mikä oli hyvää ja mistä et pitänyt.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-2-2',
          setLabel: 'Tilanteet 2',
          scenarioFi: 'Haluat liittyä kaupan kanta-asiakasohjelmaan. Kysy infopisteeltä, miten se onnistuu.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-2-3',
          setLabel: 'Tilanteet 2',
          scenarioFi: 'Haluat ajokortin, mutta et voi maksaa autokoulua kerralla. Kysy osamaksusta.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-2-4',
          setLabel: 'Tilanteet 2',
          scenarioFi: 'Palautat pulloja pullonpalautusautomaattiin. Painat kuittinappia, mutta kuittia ei tule. Selitä asia kassalle.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-2-5',
          setLabel: 'Tilanteet 2',
          scenarioFi: 'Ostat ison huonekalun. Sinulla ei ole autoa. Kysy kotiinkuljetuksesta.',
          seconds: 30,
        },
      ],
      opinionTasks: [
        {
          id: 'speaking-opinion-1',
          titleFi: 'Hintataso',
          titleEn: 'Price Level',
          prepSeconds: 120,
          speakSeconds: 120,
          questions: [
            'Maksavatko vaatteet, tavarat ja ruoka mielestäsi liikaa, sopivasti vai liian vähän?',
            'Miksi ajattelet näin?',
            'Mihin sinulla kuluu eniten rahaa?',
            'Miten voit säästää rahaa?',
            'Mitä hyviä ja huonoja puolia on korkeissa hinnoissa? Matalissa hinnoissa?',
          ],
        },
        {
          id: 'speaking-opinion-2',
          titleFi: 'Uutta vai käytettyä?',
          titleEn: 'New or Used?',
          prepSeconds: 120,
          speakSeconds: 120,
          questions: [
            'Ostatko mieluummin tavarat ja vaatteet uusina vai käytettyinä?',
            'Mitä hyviä puolia on uuden tavaran ostamisessa?',
            'Mitä hyviä puolia on käytetyn tavaran ostamisessa?',
            'Onko sinun helppo löytää sopivia tavaroita käytettynä?',
          ],
        },
        {
          id: 'speaking-opinion-3',
          titleFi: 'Asiakaspalvelukulttuuri ja kirjastot',
          titleEn: 'Customer Service Culture and Libraries',
          prepSeconds: 120,
          speakSeconds: 120,
          questions: ['Valitse A tai B.'],
          subChoices: [
            {
              label: 'A. Asiakaspalvelu',
              questions: [
                'Millaisia kokemuksia sinulla on asiakaspalvelusta Suomessa?',
                'Millaista on mielestäsi hyvä palvelu? Entä huono?',
                'Mitä kieltä asiakaspalvelijoiden pitäisi puhua?',
                'Pitäisikö asiakaspalvelijoiden sinutella vai teititellä?',
              ],
            },
            {
              label: 'B. Kirjasto',
              questions: [
                'Käytkö kirjastossa? Onko sinulla kirjastokortti?',
                'Kirjastot ovat Suomessa maksuttomia. Pitäisikö niiden olla maksullisia?',
                'Suomessa kirjastoissa voi tehdä paljon muitakin asioita kuin lainata kirjoja. Onko tämä hyvä vai huono?',
                'Pitäisikö verorahoja käyttää kirjastojen kehittämiseen?',
              ],
            },
          ],
        },
      ],
    },
    vocabSummary: [
      { fi: 'kauppa', en: 'store/shop', bn: 'দোকান' },
      { fi: 'asiakas', en: 'customer', bn: 'গ্রাহক' },
      { fi: 'asiakaspalvelu', en: 'customer service', bn: 'গ্রাহকসেবা' },
      { fi: 'myyjä', en: 'salesperson', bn: 'বিক্রয়কর্মী' },
      { fi: 'palaute', en: 'feedback', bn: 'মতামত' },
      { fi: 'reklamaatio', en: 'complaint', bn: 'অভিযোগ' },
      { fi: 'kuitti', en: 'receipt', bn: 'রসিদ' },
      { fi: 'takuu', en: 'warranty', bn: 'ওয়ারেন্টি' },
      { fi: 'vaihto', en: 'exchange', bn: 'বিনিময়' },
      { fi: 'hyvitys', en: 'compensation', bn: 'ক্ষতিপূরণ' },
      { fi: 'tyytyväinen', en: 'satisfied', bn: 'সন্তুষ্ট' },
      { fi: 'pettynyt', en: 'disappointed', bn: 'হতাশ' },
      { fi: 'kassalla', en: 'at the checkout', bn: 'ক্যাশ কাউন্টারে' },
      { fi: 'tarjous', en: 'offer/sale', bn: 'অফার / ছাড়' },
      { fi: 'aukioloajat', en: 'opening hours', bn: 'খোলার সময়' },
      { fi: 'verkkokauppa', en: 'online store', bn: 'অনলাইন দোকান' },
      { fi: 'vakuutus', en: 'insurance', bn: 'বীমা' },
      { fi: 'pankki', en: 'bank', bn: 'ব্যাংক' },
      { fi: 'kirjasto', en: 'library', bn: 'গ্রন্থাগার' },
      { fi: 'apteekki', en: 'pharmacy', bn: 'ফার্মেসি' },
    ],
    usefulPhrases: [
      { fi: 'Haluaisin antaa palautetta.', en: 'I would like to give feedback.', bn: 'আমি মতামত দিতে চাই।' },
      { fi: 'Olen tyytyväinen/pettynyt.', en: 'I am satisfied/dissatisfied.', bn: 'আমি সন্তুষ্ট/হতাশ।' },
      { fi: 'Valitettavasti...', en: 'Unfortunately...', bn: 'দুর্ভাগ্যবশত...' },
      { fi: 'Toivoisin, että...', en: 'I would hope that...', bn: 'আমি আশা করি যে...' },
      { fi: 'Voisitteko...', en: 'Could you...', bn: 'আপনি কি পারবেন...' },
      { fi: 'Pyydän, että...', en: 'I request that...', bn: 'আমি অনুরোধ করছি যে...' },
      { fi: 'Kiitos paljon!', en: 'Thank you very much!', bn: 'অনেক ধন্যবাদ!' },
      { fi: 'Anteeksi, voisitko auttaa?', en: 'Excuse me, could you help?', bn: 'মাফ করবেন, আপনি কি সাহায্য করতে পারবেন?' },
      { fi: 'Onkohan teillä...', en: 'Do you happen to have...', bn: 'আপনাদের কাছে কি আছে...' },
      { fi: 'Paljonko tämä maksaa?', en: 'How much does this cost?', bn: 'এটার দাম কত?' },
    ],
  },
  {
    id: 'yki-ch4',
    number: 4,
    titleFi: 'Kulttuuri',
    titleEn: 'Culture',
    pages: '108-137',
    theme: 'Kulttuuri, taide, musiikki, kirjallisuus, teatteri, juhlat ja kulttuuritapahtumat',
    grammarTopicIds: ['relatiivilauseet', 'sivulauseet', 'referointi', 'argumentointi', 'nominalisointi', 'va-partisiippi'],
    reading: {
      practicePassages: [
        {
          id: 'reading-practice-1',
          titleFi: 'Jaottele sanat: keksityt lauseet',
          titleEn: 'Categorize words: made-up sentences',
          textFi:
            'Monet virpulit mällettävät lauantaisin konsia.\nHyvin usein sarottaja vaulaa serkin.\nKesäisin helsa karsoo tavallisesti molin.\n\nJaottele alleviivatut sanat: Tekijä (Doer) · Verbi (Verb) · Tekemisen kohde (Object)\nvirpulit – mällettävät – konsia\nsarottaja – vaulaa – serkin\nhelsa – karsoo – molin',
          tip: {
            title: 'VINKKI: Älä pelkää uusia sanoja',
            body: [
              'Tämän tehtävän tarkoitus: sinun ei tarvitse ymmärtää jokaista sanaa ymmärtääksesi pääasian!',
              'Sinun ei tarvitse ymmärtää kaikkia sanoja. Voit silti ymmärtää pääasian ja vastata kysymyksiin. Älä panikoi, jos näet uuden sanan, jota et ymmärrä. Jatka lukemista ja luota itseesi!',
            ],
          },
          open: [
            { id: 'rp1-o1', questionFi: 'Milloin useat virpulit mällettävät konsia?', sampleAnswerFi: 'Lauantaisin.' },
            { id: 'rp1-o2', questionFi: 'Mikä on sarottajalle tyypillistä toimintaa?', sampleAnswerFi: 'Vaulaa serkin.' },
            { id: 'rp1-o3', questionFi: 'Mitä helsa yleensä tekee kesäaikaan?', sampleAnswerFi: 'Karsoo molin.' },
          ],
        },
        {
          id: 'reading-practice-2',
          titleFi: 'Kulttuurin saivoaminen',
          titleEn: 'The Evolution of Culture',
          textFi:
            'Kulttuuri saivoaa koko ajan, hitaasti mutta varmasti. Kulttuurin saivoaminen näkyy jo muinaisten makorilaisten halena-maalauksissa. Makorilaiset elivät Möytissä noin 5 000 vuotta sitten.\n\nMakorilaiset olivat hyvin taitavia laappaiden juolimisessa ja sirveiden heistämisessä. He juolivat laappaita ja heistivät sirveitä enemmän kuin mikään muu kansa, mutta pikkuhiljaa uusi pasti, nimittäin näkälä, syrjäytti laappaat ja sirveet.\n\nNäkälää alettiin käyttää hiljalleen enemmän kuin laappaita ja sirveitä. Siksi myös makorilaisten keskuudessa alkoi uusi aikakausi, näkäläaika. Näkälää oli helpompi löytää kuin laappaita ja sirveitä, koska sitä kasvoi myös malojen lähellä, toisin kuin laappaita ja sirveitä. Näkälän käyttö teki makorilaisista entistä sahkempia ja väläkkäämpiä.',
          open: [
            { id: 'rp2-o1', questionFi: 'Mitä kulttuurille tapahtuu?', sampleAnswerFi: 'Se saivoaa (muuttuu / kehittyy).' },
            { id: 'rp2-o2', questionFi: 'Missä makorilaiset asuivat?', sampleAnswerFi: 'Möytissä.' },
            { id: 'rp2-o3', questionFi: 'Mitä makorilaiset osasivat tehdä hyvin?', sampleAnswerFi: 'Juolia laappaita ja heistää sirveitä.' },
            { id: 'rp2-o4', questionFi: 'Mikä pasti syrjäytti laappaat ja sirveet?', sampleAnswerFi: 'Näkälä.' },
            {
              id: 'rp2-o5',
              questionFi: 'Miksi näkälä oli helpompi löytää kuin laappaita ja sirveitä?',
              sampleAnswerFi: 'Koska sitä kasvoi myös malojen lähellä.',
            },
            {
              id: 'rp2-o6',
              questionFi: 'Miten makorilaiset muuttuivat, kun he alkoivat käyttää näkälää?',
              sampleAnswerFi: 'Heistä tuli sahkempia ja väläkkäämpiä.',
            },
          ],
        },
      ],
      testPassages: [
        {
          id: 'reading-test-1',
          titleFi: 'Koirakiven kesäteatterissa Katri Helena -musiikkinäytelmä',
          titleEn: 'Summer Theater Musical about Katri Helena',
          source: 'Koirakiven Nuorisoseura (lyhennetty)',
          textFi:
            'Koirakiven kesäteatterissa Katri Helena -musiikkinäytelmä\n\nElämänkerrallinen musiikkinäytelmä kertoo iskelmätaivaan tähdestä, sinivalkoisesta äänestämme, Katri Helenasta. Kesän näytelmä kertoo Katri Helenan elämästä, aina sota-ajan lapsuudesta tähän päivään asti, niin menestyksestä kuin henkilökohtaisen elämän menetyksistä.\n\nKulman Kundit -yhtye huolehtii musiikin laadusta ja äänentoistosta joka esityksessä. Näytelmä valottaa katsojille, miten iskelmälaulajana tunnettu Katri Helena on tehnyt uraa myös musikaali- ja operettiesiintyjänä. Hän on ollut mukana Danny-kiertueella ja edustanut maatamme kahdesti Euroviisuissa.\n\nMonien rakastama artisti on kulkenut kanssamme jo usean sukupolven ajan tunteidemme tulkkina. Kappaleet Puhelinlangat laulaa, Letkis, Katson sineen taivaan, Anna mulle tähtitaivas, Ei kauniimpaa, Mun sydämeni tänne jää sekä paljon muita tuttuja lauluja kuullaan kesän upeassa kesäteatteriesityksessä. Illan aikana yleisö pääsee kuulemaan myös muutamia hieman tuntemattomampia lauluja.\n\nLIPUT: ennakkoon 24 /13 € (5-12v) portilta 26 /15 €, ryhmäliput ennakkoon ja portilta 22 €/hlö (20 hlö minimi).\n\nNettilipun kautta voit maksaa ostoksesi Smartum- sekä ePassi-verkkomaksulla. Maksuvälineenä portilla käyvät myös Smartum- ja Edenred-kulttuurisetelit, ePassi sekä Eazybreak.',
          mcq: [
            {
              id: 'rt1-q1',
              question: 'Katri Helena, josta esitys kertoo, on',
              options: ['näyttelijä', 'laulaja', 'tulkki'],
              correctIndex: 1,
              explanation: 'Vastaus: laulaja.',
            },
            {
              id: 'rt1-q2',
              question: 'Esityksessä kuullaan pääasiassa',
              options: ['operetteja', 'euroviisuja', 'tunnettuja lauluja'],
              correctIndex: 2,
              explanation: 'Vastaus: tunnettuja lauluja.',
            },
            {
              id: 'rt1-q3',
              question: 'Ryhmälipun voi maksaa',
              options: ['ainoastaan portilla', 'myös etukäteen', 'vain käteisellä tai kulttuurisetelillä'],
              correctIndex: 1,
              explanation: 'Vastaus: myös etukäteen.',
            },
          ],
        },
        {
          id: 'reading-test-2',
          titleFi: 'Stand up -esityksen peruuntuminen',
          titleEn: 'Stand-up Show Cancellation',
          textFi:
            'Hei!\n\nValitettavasti stand up -esitys Elämäni sopulina tänään lauantaina 26.3. klo 19 on peruttu sairaustapauksen vuoksi. Toivottavasti tämä tieto tavoittaa teidät ajoissa!\n\nUusi korvaava esitys järjestetään lauantaina 16.4. klo 19. Tämänpäiväisen esityksen liput käyvät uuteen näytökseen sellaisenaan. Jos kuitenkin haluatte mieluummin rahat takaisin, voitte saada hyvityksen tämän päivän lippujen hinnasta tilisiirtona. Siinä tapauksessa pyydämme, että lähetätte sähköpostilla tilinumeronne IBAN-muodossa, niin palautamme lippujen hinnan tilillenne. Vastatkaahan tähän viestiin 10.4. mennessä, kummalla tavalla haluatte toimia.\n\nPahoittelemme kovasti peruuntumisesta aiheutuvaa vaivaa ja harmia!\n\nYstävällisin terveisin\nPaula Sipakko\nasiakaspalveluvastaava\nStand up -areena Nauraittamo',
          trueFalse: [
            {
              id: 'rt2-tf1',
              statementFi: 'Tämänpäiväinen esitys peruuntuu sairastumisen takia.',
              answer: true,
              explanation: 'Teksti sanoo: "peruttu sairaustapauksen vuoksi".',
            },
            {
              id: 'rt2-tf2',
              statementFi: 'Uuden näytöksen ajankohdasta päätetään asiakkaiden vastausten perusteella.',
              answer: false,
              explanation: 'Teksti sanoo, että uusi näytös on jo sovittu 16. huhtikuuta.',
            },
            {
              id: 'rt2-tf3',
              statementFi: 'Perutun esityksen lipuilla pääsee esitykseen 16. huhtikuuta.',
              answer: true,
              explanation: 'Teksti sanoo: "Tämänpäiväisen esityksen liput käyvät uuteen näytökseen".',
            },
            {
              id: 'rt2-tf4',
              statementFi: 'Lippujen hinnan voi halutessaan saada takaisin palauttamalla peruuntuneen esityksen liput 10. huhtikuuta mennessä.',
              answer: true,
              explanation: 'Teksti sanoo: "Vastatkaahan tähän viestiin 10.4. mennessä".',
            },
          ],
        },
        {
          id: 'reading-test-3',
          titleFi: 'Lasten harrastukset rytmittävät arkea',
          titleEn: "Children's Hobbies Structure Everyday Life",
          source: 'Ani Kettomäki, Pikka 08/2016 (lyhennetty ja muokattu)',
          textFi:
            'Lapsen harrastaminen on iso ilo, mutta lasten treenikalenterista voi tulla vanhemmille myös taakka. Moni vanhempi väsyy jatkuvassa kuskaamis- ja aikataulupaineessa. Onko pakko jaksaa ja milloin liika on liikaa?\n\nLiikuntatieteiden tohtori Arja Sääkslahti muistuttaa, ettei ohjattu harrastustoiminta suinkaan ole välttämätöntä.\n\n"Terveyden ja hyvinvoinnin kannalta tärkeä kokonaisliikkumisen määrä voi kertyä hyvin monella tavalla."\n\nArkiliikunnalla, kuten välimatkojen kävelemisellä, voi pitää hyvin kuntoa yllä. Riittää, jos päivään mahtuu tunti reipasta liikkumista. Moni vanhempi ottaa paineita lastensa harrastusten aloittamisesta jo hyvin varhain. Vauvauinnit, -muskarit ja muut leppoisat ryhmät ovat toki kivaa ajanvietettä, jos sekä lapsi että vanhempi niistä nauttii, mutta harrastamisen ei pidä olla pakkopullaa.\n\n"Alle kolmevuotiaalle lapselle riittää, että arjessa on mahdollista ulkoilla ja olla liikkeellä perheen kanssa."\n\nPienet retket lähellä, puistossa käyminen, pallopelit pihalla ja pyöräily riittävät hyvin vielä leikki-ikäisellekin. Pääasia on, että lapsi saa liikkua ja ulkoilla paljon.\n\nMannerheimin Lastensuojeluliiton ohjelmajohtaja, psykologi Marie Rautava kehottaa miettimään perheen harrastuksia ilon ja mielihyvän näkökulmasta.\n\nHänen mielestään on tärkeintä, että lapsi saa tehdä asioita, joista hän itse on kiinnostunut ja joiden pariin hän lähtee innolla.',
          open: [
            { id: 'rt3-o1', questionFi: 'Miksi vanhemmat väsyvät?', sampleAnswerFi: 'Jatkuvassa kuskaamis- ja aikataulupaineessa.' },
            {
              id: 'rt3-o2',
              questionFi: 'Millainen liikunta on sopivaa leikki-ikäiselle? Mainitse kolme asiaa.',
              sampleAnswerFi: 'Pienet retket lähellä, puistossa käyminen, pallopelit pihalla, pyöräily.',
            },
            {
              id: 'rt3-o3',
              questionFi: 'Millaisia asioita pitäisi ottaa huomioon, kun lapselle valitaan sopivaa harrastusta?',
              sampleAnswerFi: 'Lapsen oma kiinnostus ja ilo.',
            },
          ],
        },
      ],
    },
    writing: {
      tip: {
        title: 'VINKKI: Kerro mielipidetehtävässä oma mielipiteesi',
        body: [
          'Otsikko voi edustaa jonkun toisen vahvaa mielipidettä. Sinun ei tarvitse olla samaa mieltä – voit ajatella asiasta täysin eri tavalla.',
          'Tärkeintä on, että osaat ilmaista oman mielipiteesi ja perustella sen.',
        ],
      },
      freewrite: {
        instructionsFi:
          'Lue alla oleva mielipideteksti. Alleviivaa kaikki sanat ja fraasit, jotka kertovat, että kyseessä on kirjoittajan mielipide.\n\n"Pelailijat pois kaduilta!"\n\nAsun rauhallisella omakoti- ja rivitaloalueella, jolla näin kesäaikaan ovat riesana keskellä katua pelaavat lapset. Minusta on aivan käsittämätöntä, että pihoista raahataan tielle niin sählymaaleja kuin pyörillä siirrettäviä koripallokorejakin.\n\nVälillä omaan pihaan ajaminen on todella hidasta, kun joutuu odottamaan välineiden siirtämistä pois tieltä. Uskon, että tämä häiritsee muitakin autolla liikkujia.\n\nMielestäni katu ei ole oikea paikka pihapeleille. Olen sitä mieltä, että vanhempien kuuluu olla vastuullisia ja ohjata lapsensa harrastamaan pallopelejä niille tarkoitetuille paikoille.\n\nPertti Savola, Hyvinkää',
        rules: [],
        topics: [
          'Alleviivatut mielipidefraasit: Minusta (In my opinion)',
          'Mielestäni (In my opinion)',
          'Olen sitä mieltä, että (I am of the opinion that)',
          'Uskon (I believe)',
        ],
      },
      groupIntro: {
        instructionsFi: 'Keskustele luokkatovereiden kanssa:',
        questions: [
          'Alleviivasitko samat sanat?',
          'Millä muilla tavoilla mielipiteen voi ilmaista?',
          'Keskustelkaa, mistä olette samaa/eri mieltä. Käyttäkää mielipidefraaseja.',
          'Kirjoita kolme lausetta siitä, mistä olet samaa/eri mieltä.',
        ],
      },
      practiceTasks: [
        {
          id: 'writing-practice-1',
          titleFi: 'Analysoi mielipideteksti ja kirjoita oma mielipide',
          instructionsFi:
            'Lue teksti "Joululaulujen soittamista ei pitäisi aloittaa liian aikaisin", vastaa kysymyksiin ja kirjoita lopuksi oma mielipidetekstisi samasta aiheesta.\n\n"Olen ihmetellyt, miksi joululaulut eivät joulun aikaan enää kuulosta miltään. Ne eivät tuo enää samanlaista tunnelmaa kuin silloin, kun niiden soittamista odotettiin jouluun asti. Vähän sama kuin söisimme jäätelöä joka päivä. Eihän se sitten enää kesällä maistu miltään ihmeelliseltä, kun sitä on syönyt vuoden ympäri päivästä toiseen.\n\nEn käsitä, miksi kaunis musiikki pitää pilata soittamalla sitä jo paljon ennen itse juhlaa. Entä miltähän mahtaa tuntua joulumusiikki joulunaikaan liikkeiden henkilökunnasta, joka kuuntelee töissä näitä samoja rallatuksia viikkokausia? Samat joululevyt soivat tavarataloissa ja ostoskeskuksissa aamusta iltaan. Ne soitetaan siellä puhki ja pilalle, ja joulun tunnelma häviää.\n\nKauppahan on muutenkin varastanut meiltä joulun: osta, osta, osta joulukrääsää, vaikka velaksi, kunhan vain ostat. Myös joulutunnelman se on varastanut renkuttamalla joululauluja ihan liikaa ja vielä mitä kauheimpia versioita niistä.\n\nJoulumusiikki kuuluu mielestäni kyllä jouluun, mutta marraskuussa ei ole vielä joulu. Pidetään juhla juhlana ja arki arkena eikä sekoiteta niitä. Muuten kaikki on kohta vain samaa, harmaata arkea. Sitäkö me todella haluamme?\n\nPirkko, 78 v."',
          bulletsFi: [
            'Mikä kirjoittajan mielestä on epäkohta, eli huono asia?',
            'Mitä muutosta kirjoittaja toivoo?',
            'Miten kirjoittaja perustelee mielipiteensä?',
          ],
          exampleTitleFi: 'Vastaukset ja huomiot:',
          exampleFi:
            'Vastaukset kysymyksiin:\n1. Joululauluja aletaan soittaa liian aikaisin.\n2. Kirjoittaja toivoo, että joululauluja soitetaan vasta joulun aikaan.\n3. Kirjoittaja vertaa joululauluja jäätelön syömiseen joka päivä – se ei enää tunnu erityiseltä.\n\nKirjoittaja käyttää hyvin vähän selkeitä mielipidefraaseja. Silti mielipide käy ilmi: hän toteaa asioita faktoina, käyttää retorisia kysymyksiä, tekee vertailuja ja käyttää voimakasta kieltä ("pilata", "varastanut", "kauheimpia").\n\nSamaa mieltä kirjoittajan kanssa: Joululauluja soitetaan liian aikaisin. Kauppa on kaupallistanut joulun.\nEri mieltä kirjoittajan kanssa: Joulumusiikki ei pilaa joulua. Ihmiset voivat itse päättää, milloin kuuntelevat joululauluja.',
        },
      ],
      openingClosingTip: {
        title: 'VINKKI: Mielipidefraaseja',
        body: [
          'Kun olet samaa/eri mieltä: Olen samaa mieltä. En ole samaa mieltä. Olen eri mieltä. Olen osittain samaa / eri mieltä.',
          'Kun otsikko on neutraali: Mielestäni... Minusta... Minun mielipiteeni on, että... Ajattelen, että... Luulen, että... Minusta tuntuu, että...',
          'Kun asiassa on kaksi puolta: Toisaalta..., toisaalta... Positiivinen/negatiivinen puoli tässä on se, että...',
          'Kokemuksen käyttäminen: Kokemukseni mukaan... Olen huomannut, että...',
          'Muiden lähteiden käyttäminen: Tutkimusten mukaan... Suositusten mukaan...',
        ],
      },
      informalTasks: [
        {
          id: 'writing-test-informal-1',
          titleFi: 'Kysymys ystävälle',
          instructionsFi: 'Haluat järjestää naamiaisjuhlat halloweeniksi. Tiedät, että yksi ystävistäsi tykkää järjestää juhlia. Kysy, järjestäisikö hän ne kanssasi.',
        },
        {
          id: 'writing-test-informal-2',
          titleFi: 'Ehdotus sukulaiselle',
          instructionsFi: 'Ehdota sukulaiselle, että menisitte yhdessä katsomaan urheilutapahtumaa, teatteriesitystä tai konserttia. Keksi itse, mitä, missä ja milloin.',
        },
        {
          id: 'writing-test-informal-3',
          titleFi: 'Suosittelu ystävälle',
          instructionsFi: 'Olet juuri katsonut useita jaksoja tv-sarjasta, joka on todella hyvä. Keksi, millainen sarja se on, ja suosittele sitä.',
        },
        {
          id: 'writing-test-informal-4',
          titleFi: 'Viesti naapurille',
          instructionsFi:
            'Haluaisit antaa lapsesi opettajalle pienen joululahjan, mutta et tiedä, millaisia lahjoja opettajille yleensä annetaan. Kysy naapurilta, jolla on samanikäisiä lapsia.',
        },
      ],
      formalTasks: [
        {
          id: 'writing-test-formal-1',
          titleFi: 'Viesti tapahtumajärjestäjälle',
          instructionsFi: 'Kävit konsertissa ja olit pettynyt joihinkin järjestelyihin. Kirjoita järjestäjälle, kerro mitä tapahtui ja ehdota parannuksia.',
        },
        {
          id: 'writing-test-formal-2',
          titleFi: 'Kysymys kuntosalille',
          instructionsFi:
            'Sinulla on kuukausittainen kuntosalijäsenyys, mutta lääkäri on kieltänyt liikunnan kuudeksi viikoksi. Haluaisit siirtää jäsenyyden perheenjäsenelle. Kysy, onko se mahdollista.',
        },
        {
          id: 'writing-test-formal-3',
          titleFi: 'Poissaoloviesti opettajalle',
          instructionsFi: 'Olet ilmoittautunut suomalaisen perinneruoan kurssille, mutta et pääse ensimmäiselle kerralle. Kirjoita opettajalle.',
        },
        {
          id: 'writing-test-formal-4',
          titleFi: 'Viesti museon asiakaspalveluun',
          instructionsFi:
            'Olet menossa taidenäyttelyyn vanhaan museorakennukseen pyörätuolia käyttävän ystäväsi kanssa. Et tiedä, onko rakennus esteetön. Kysy asiakaspalvelusta.',
        },
      ],
      opinionTopics: [
        {
          id: 'writing-opinion-1',
          titleFi: 'Kulttuuri- ja liikuntasetelit',
          options: [
            'A. Kulttuuri- ja liikuntaseteleistä on paljon hyötyä',
            'B. Kulttuuri- ja liikuntasetelit ilahduttavat vain hyväosaisia',
          ],
        },
        {
          id: 'writing-opinion-2',
          titleFi: 'Elokuvateatterien ruoka- ja juomakulttuuri',
          options: ['Lopettakaa elokuvateatterissa syöminen!'],
        },
        {
          id: 'writing-opinion-3',
          titleFi: 'Muita aiheita',
          options: [
            'Suomalaisessa kulttuurissa ei uskalleta näyttää uskontoa',
            'Suomalaiset elokuvat ja sarjat - kannattaako niitä katsoa?',
            'Missä syödään maailman parasta ruokaa?',
            'E-urheilu: onko tietokonepelien pelaaminen urheilua?',
            'Yhteiskunnan pitäisi tukea taiteilijoita',
          ],
        },
      ],
    },
    listening: {
      tip: {
        title: 'VINKKI: Harjoittele ääntämistä',
        body: [
          'Yksi tapa ymmärtää puhetta paremmin on harjoitella ääntämistä. Ääntämisen harjoittelu auttaa sekä puhumaan paremmin että ymmärtämään paremmin.',
          'Kun kuuntelet ja toistat fraaseja, sekä kuunteleminen että puhuminen helpottuvat vähitellen.',
          'Yhteys: Kun kuulet selkeämmin, osaat ääntää paremmin. Kun ääntäminen sujuu paremmin, osaat kuulla selkeämmin.',
        ],
      },
      repeatSentences: {
        instructionsFi: 'Kuuntele nämä fraasit ja toista.',
        sentences: [
          'Kuulostaa tosi kiinnostavalta!',
          'Mä oon ymmärtäny, et...',
          'Ihan samat fiilikset!',
          'Hei, mä en tiennytkään, et...',
          'Oli kyl tosi kiinnostava.',
          'Musta tää on tosi outo juttu.',
          'Sekin vielä!',
          'Tällainen käsitys mullakin on.',
        ],
      },
      practicePassages: [
        {
          id: 'listening-practice-1',
          titleFi: 'Vieraanvaraisuus',
          titleEn: 'Hospitality',
          textFi: NO_TRANSCRIPT_NOTE,
          trueFalse: [
            {
              id: 'lp1-tf1',
              statementFi: 'Yksi keskustelijoista kertoo, että hän asui lapsena Belgiassa.',
              answer: true,
              explanation: '"Missä sä siis asuit ja millon? – Belgiassa, oikeestaan mun koko lapsuuden..."',
            },
            {
              id: 'lp1-tf2',
              statementFi: 'Suomeen muuttaneelle perheelle oli kulttuurishokki, että Suomessa ei aina tarjota vieraille ruokaa.',
              answer: true,
              explanation: 'Keskustelussa käydään läpi, miten Suomessa ei aina tarjota vieraille ruokaa.',
            },
            {
              id: 'lp1-tf3',
              statementFi: 'Kaikkien keskustelijoiden kotona tarjotaan aina vieraille ruokaa.',
              answer: false,
              explanation: 'Keskustelussa käydään läpi eroja vieraanvaraisuudessa.',
            },
            {
              id: 'lp1-tf4',
              statementFi: 'Keskustelijat vertailevat suomalaista ja ruotsalaista vieraanvaraisuutta keskenään.',
              answer: false,
              explanation: 'Keskustelussa vertaillaan suomalaista ja muiden kulttuurien vieraanvaraisuutta, ei nimenomaan ruotsalaista.',
            },
          ],
        },
      ],
      testPassages: [
        {
          id: 'listening-test-1',
          titleFi: 'Neulova mies',
          titleEn: 'A Man Who Knits',
          textFi: NO_TRANSCRIPT_NOTE,
          mcq: [
            {
              id: 'lt1-q1',
              question: 'Jukka aloitti neulomisen, koska',
              options: [
                'uuden luominen kaikissa sen muodoissa oli hänen äitinsä mielestä tärkeä taito',
                'hän ajatteli, että se olisi hieno taito oppia',
                'hän halusi oppia keskittymään',
              ],
              correctIndex: 0,
              explanation: 'Vastaus: uuden luominen kaikissa sen muodoissa oli hänen äitinsä mielestä tärkeä taito.',
            },
            {
              id: 'lt1-q2',
              question: 'Jukalta meni melkein vuosi siihen, että hän',
              options: ['oppi tekemään tilkkuja ja peruslapasia', 'löysi neulemallin, joka ei pelottanut', 'neuloi islantilaisneuleen'],
              correctIndex: 1,
              explanation: 'Vastaus: löysi neulemallin, joka ei pelottanut.',
            },
            {
              id: 'lt1-q3',
              question: 'Jukka tykkää neuloa',
              options: ['suurikokoisia neuleita', 'neulemalleja, joissa on jotain erikoista', 'sileitä ja yksinkertaisia perusneuleita'],
              correctIndex: 2,
              explanation: 'Vastaus: sileitä ja yksinkertaisia perusneuleita.',
            },
            {
              id: 'lt1-q4',
              question: 'Joskus Jukkaa ärsyttää, että',
              options: ['neulovia miehiä ihmetellään', 'ideoita ja vinkkejä jaetaan niin vähän', 'normeja haastetaan'],
              correctIndex: 0,
              explanation: 'Vastaus: neulovia miehiä ihmetellään.',
            },
          ],
        },
        {
          id: 'listening-test-2',
          titleFi: 'Lähetkö mun kaa teatteriin?',
          titleEn: 'Will You Come to the Theater with Me?',
          textFi: NO_TRANSCRIPT_NOTE,
          trueFalse: [
            {
              id: 'lt2-tf1',
              statementFi: 'Antti ehdottaa Sallalle, että he kävisivät katsomassa musikaalia.',
              answer: true,
              explanation: 'Antti ehdottaa musikaalia.',
            },
            {
              id: 'lt2-tf2',
              statementFi: 'Kun Antti kutsuu Sallan, tämä kieltäytyy tulemasta.',
              answer: false,
              explanation: 'Salla suostuu tulemaan.',
            },
            {
              id: 'lt2-tf3',
              statementFi: 'Antti ja Salla sopivat tapaavansa Stockmannilla.',
              answer: true,
              explanation: 'He sopivat tapaavansa Stockmannilla.',
            },
            {
              id: 'lt2-tf4',
              statementFi: 'Salla ja Antti tapaavat 18:30.',
              answer: false,
              explanation: 'He tapaavat kello 18:00 tai 19:00, ei 18:30.',
            },
            {
              id: 'lt2-tf5',
              statementFi: 'Antti pyytää Sallaa pyytämään anteeksi tämän veljeltä.',
              answer: false,
              explanation: 'Antti ei pyydä tätä Sallalta.',
            },
          ],
        },
        {
          id: 'listening-test-3',
          titleFi: 'Mummi soittaa Inkalle',
          titleEn: 'Grandma Calls Inka',
          textFi: NO_TRANSCRIPT_NOTE,
          open: [
            { id: 'lt3-o1', questionFi: 'Miksi mummi soittaa Inkalle?', sampleAnswerFi: 'Hän tarvitsee apua lipun ostamisessa.' },
            { id: 'lt3-o2', questionFi: 'Mitä mummi haluaa mennä katsomaan?', sampleAnswerFi: 'Jotain teatteriin / konserttiin / näytökseen.' },
            { id: 'lt3-o3', questionFi: 'Miksi nettisivuilla on kartta?', sampleAnswerFi: 'Näyttämään, missä paikka sijaitsee.' },
            { id: 'lt3-o4', questionFi: 'Minkä maksuvaihtoehdon mummi valitsee?', sampleAnswerFi: 'Laskun / maksun jälkikäteen.' },
            {
              id: 'lt3-o5',
              questionFi: 'Mitä mummi ajattelee siitä, kuinka helppo tai vaikea tehtävä oli?',
              sampleAnswerFi: 'Se oli helppo / vaikea.',
            },
          ],
        },
      ],
    },
    speaking: {
      repeatPhrases: {
        instructionsFi: 'Kuuntele nämä puhekieliset mielipidefraasit ja kirjoita, mitä kuulet.',
        phrases: [
          'Kuulostaa tosi kiinnostavalta!',
          'Mä oon ymmärtäny, et...',
          'Ihan samat fiilikset!',
          'Hei, mä en tiennytkään, et...',
          'Oli kyl tosi kiinnostava.',
          'Musta tää on tosi outo juttu.',
        ],
      },
      phraseTable: {
        titleFi: 'VINKKI: Puhekielisiä mielipidefraaseja',
        rows: [
          { spoken: 'Mun mielestä', written: 'Minun mielestäni', en: 'In my opinion' },
          { spoken: 'Mä ajattelen, että...', written: 'Ajattelen, että...', en: 'I think that...' },
          { spoken: 'Mä oon eri mieltä', written: 'Olen eri mieltä', en: 'I disagree' },
          { spoken: 'Mä oon samaa mieltä', written: 'Olen samaa mieltä', en: 'I agree' },
          { spoken: 'Mä oon sitä mieltä, että...', written: 'Olen sitä mieltä, että...', en: 'I am of the opinion that...' },
          { spoken: 'Toisaalt... toisaalt...', written: 'Toisaalta... toisaalta...', en: 'On one hand... on the other hand...' },
        ],
      },
      groupIntro: {
        instructionsFi: 'Keskustelkaa musiikista parin tai pienen ryhmän kanssa:',
        questions: [
          'Kuunteletteko paljon musiikkia?',
          'Millaisesta musiikista tykkäätte?',
          'Millaisesta musiikista ette tykkää?',
          'Kuunteletteko suomalaista musiikkia?',
          'Soitatteko itse jotain soitinta?',
          'Musiikkityylejä: klassinen, iskelmä, kansanmusiikki, kantri, blues, jazz, rock, hevi, pop, rap.',
        ],
      },
      practiceLongTask: {
        id: 'speaking-practice-1',
        titleFi: 'Suomalainen musiikki - outoa vai upeaa?',
        titleEn: 'Finnish Music - Weird or Wonderful?',
        prepSeconds: 120,
        speakSeconds: 120,
        questions: [
          'Kuunteletko suomalaista musiikkia?',
          'Millaisesta musiikista yleensä tykkäät?',
          'Mikä tekee musiikista mielestäsi hyvää tai huonoa?',
          'Oletko valmis maksamaan musiikista?',
          'Pitäisikö yhteiskunnan tukea musiikkia verorahoilla?',
        ],
        speakDontWriteTip: {
          title: 'VINKKI: Apukysymykset',
          body: [
            'YKI-taitotaso 3 (B1): riittää, että annat mielipiteesi konkreettisella tasolla ja perustelet sen hyvin. Aloita helpoimmasta apukysymyksestä ja vastaa niin moneen kuin pystyt. Helpoimmat kysymykset ovat yleensä alussa.',
            'YKI-taitotaso 4 (B2): tärkeää puhua aiheesta myös yhteiskunnallisella ja abstraktilla tasolla. Viimeiset apukysymykset auttavat tässä eniten. Älä käytä liikaa aikaa helppoihin kysymyksiin – aloita helposta, mutta siirry nopeasti vaikeampiin.',
          ],
        },
      },
      testLongTasks: [
        {
          id: 'speaking-test-1',
          titleFi: 'Julkkis',
          titleEn: 'Celebrity',
          prepSeconds: 60,
          speakSeconds: 90,
          questions: [
            'Kuka hän on?',
            'Mitä hän tekee?',
            'Miksi hän on kuuluisa?',
            'Ketkä ovat hänen fanejaan?',
            'Miksi hän on sinulle tärkeä?',
            'Pitäisikö muidenkin seurata häntä?',
          ],
        },
        {
          id: 'speaking-test-2',
          titleFi: 'Juhla',
          titleEn: 'Celebration',
          prepSeconds: 60,
          speakSeconds: 90,
          questions: [
            'Mikä juhla se on?',
            'Milloin, miten ja miksi tätä juhlaa vietetään?',
            'Miten itse vietät tätä juhlaa?',
            'Miksi se on sinulle tärkeä?',
            'Kenelle muulle se on tärkeä?',
            'Millainen historia ja yhteiskunnallinen merkitys tällä juhlalla on?',
          ],
        },
        {
          id: 'speaking-test-3',
          titleFi: 'Viihde',
          titleEn: 'Entertainment',
          prepSeconds: 60,
          speakSeconds: 90,
          questions: [
            'Millainen se on?',
            'Mistä se kertoo?',
            'Milloin katsot, kuuntelet tai luet sitä?',
            'Miksi se on sinulle tärkeä?',
            'Kenelle suosittelisit sitä?',
          ],
        },
      ],
      conversationTasks: [
        {
          id: 'speaking-conv-1',
          titleFi: 'Haastattelu matkamessuilla',
          scenarioFi: 'Sinua haastatellaan matkamessuilla.',
          turns: [
            { instructionFi: 'Tervehdi ja vastaa myöntävästi.', seconds: 10 },
            { instructionFi: 'Vastaa kysymykseen.', seconds: 5 },
            { instructionFi: 'Vastaa kysymykseen.', seconds: 10 },
            { instructionFi: 'Vastaa myöntävästi ja kerro, millaisissa tapahtumissa käyt.', seconds: 20 },
            { instructionFi: 'Vastaa kysymykseen.', seconds: 10 },
            { instructionFi: 'Vastaa kieltävästi.', seconds: 5 },
            { instructionFi: 'Vastaa kysymykseen. Keksi syy itse.', seconds: 20 },
            { instructionFi: 'Reagoi sopivalla tavalla.', seconds: 5 },
          ],
        },
        {
          id: 'speaking-conv-2',
          titleFi: 'Keskustelu kaverin kanssa',
          scenarioFi: 'Ystäväsi on yrittänyt tavoittaa sinua, mutta et ole vastannut. Soita hänelle takaisin.',
          turns: [
            { instructionFi: 'Tervehdi ja kerro, miksi soitat.', seconds: 10 },
            { instructionFi: 'Vastaa myöntävästi ja kysy, mitä hänelle kuuluu.', seconds: 10 },
            { instructionFi: 'Vastaa kysymykseen.', seconds: 20 },
            { instructionFi: 'Kerro, että olet kiinnostunut, mutta et vielä ole varma, pääsetkö. Kerro myös, miksi et vielä tiedä.', seconds: 20 },
            { instructionFi: 'Reagoi sopivalla tavalla.', seconds: 10 },
          ],
        },
      ],
      situationalTasks: [
        {
          id: 'speaking-situation-1-1',
          setLabel: 'Tilanteet 1',
          scenarioFi: 'Olet naapurisi ovella tuomassa joulukukkaa. He ovat iloisia ja kutsuvat sinut sisään kahville. Sinulla on kiire, joten kieltäydy kohteliaasti.',
          seconds: 15,
        },
        {
          id: 'speaking-situation-1-2',
          setLabel: 'Tilanteet 1',
          scenarioFi: 'Kutsu ystäväsi urheilutapahtumaan. Keksi itse, mitä, milloin ja missä.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-1-3',
          setLabel: 'Tilanteet 1',
          scenarioFi: 'Ystäväsi kysyy, millaisista elokuvista pidät. Vastaa.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-1-4',
          setLabel: 'Tilanteet 1',
          scenarioFi: 'Kutsu ystäväsi tupaantuliaisiin uuteen kotiisi. Kerro, millaiset juhlat ovat ja mitä he voisivat tuoda mukanaan.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-1-5',
          setLabel: 'Tilanteet 1',
          scenarioFi: 'Olet juhlissa, joissa tarjoillaan suomalaisia perinneruokia. Joku kysyy, mitä mieltä olet suomalaisesta ruokakulttuurista. Vastaa.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-2-1',
          setLabel: 'Tilanteet 2',
          scenarioFi: 'Työkaverisi on nähnyt kesäteatteriesityksen, joka kiinnostaa sinua. Kysy, kannattaako se nähdä.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-2-2',
          setLabel: 'Tilanteet 2',
          scenarioFi: 'Sinut on kutsuttu hautajaisiin, mutta et ole varma, miten kirkkoon kuuluu pukeutua. Kysy neuvoa ystävältä.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-2-3',
          setLabel: 'Tilanteet 2',
          scenarioFi: 'Kävit konsertissa, joka teki sinuun suuren vaikutuksen. Kuvaile sitä ystävälle.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-2-4',
          setLabel: 'Tilanteet 2',
          scenarioFi: 'Saat lahjakortin lippuihin tapahtumaan. Kiitä lahjan antajaa ja kerro, mihin tapahtumaan käytät sen.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-2-5',
          setLabel: 'Tilanteet 2',
          scenarioFi: 'Olet ravintolassa ystävän kanssa ja haluat maksaa molempien ateriat. Kun ystäväsi sanoo voivansa maksaa itse, selitä, miksi haluat maksaa.',
          seconds: 30,
        },
      ],
      opinionTasks: [
        {
          id: 'speaking-opinion-1',
          titleFi: 'Suomalaiset perhejuhlat ovat tylsiä',
          titleEn: 'Finnish Family Celebrations Are Boring',
          prepSeconds: 120,
          speakSeconds: 120,
          questions: [
            'Oletko ollut Suomessa perhejuhlissa?',
            'Jotkut sanovat, että suomalaiset perhejuhlat ovat tylsiä. Oletko samaa vai eri mieltä?',
            'Miten perhejuhlia juhlitaan muissa sinulle tutuissa maissa?',
            'Mitä ajattelet suomalaisesta juhlakulttuurista?',
            'Monissa perheissä uskonnolla on tärkeä rooli perhejuhlissa. Mitä ajattelet tästä?',
          ],
        },
        {
          id: 'speaking-opinion-2',
          titleFi: 'Ruokakulttuuri',
          titleEn: 'Food Culture',
          prepSeconds: 120,
          speakSeconds: 120,
          questions: [
            'Millaista ruokaa tavallisesti syöt?',
            'Millaista on mielestäsi hyvä ruoka?',
            'Pidätkö suomalaisesta ruoasta?',
            'Onko suomalainen ruokakulttuuri vaikuttanut sinun ruokailutottumuksiisi?',
            'Mitä eroja olet huomannut eri maiden ruokakulttuurien välillä?',
          ],
        },
        {
          id: 'speaking-opinion-3',
          titleFi: 'Urheilu ja museot',
          titleEn: 'Sports and Museums',
          prepSeconds: 120,
          speakSeconds: 120,
          questions: ['Valitse A tai B.'],
          subChoices: [
            {
              label: 'A. Maailman paras urheilulaji',
              questions: [
                'Mikä on mielestäsi paras urheilulaji?',
                'Mitä urheilua tykkäät itse harrastaa?',
                'Mitä urheilua tykkäät katsoa?',
                'Millainen yhteiskunnallinen merkitys urheilulla on?',
              ],
            },
            {
              label: 'B. Museoiden pitäisi olla ilmaisia',
              questions: [
                'Käytkö museoissa?',
                'Pitäisikö kaikkien käydä museoissa säännöllisesti?',
                'Pitäisikö taidemuseoiden olla ilmaisia?',
                'Pitäisikö yhteiskunnan tukea museoita?',
              ],
            },
          ],
        },
      ],
    },
    vocabSummary: [
      { fi: 'kulttuuri', en: 'culture', bn: 'সংস্কৃতি' },
      { fi: 'taide', en: 'art', bn: 'শিল্প' },
      { fi: 'musiikki', en: 'music', bn: 'সঙ্গীত' },
      { fi: 'kirjallisuus', en: 'literature', bn: 'সাহিত্য' },
      { fi: 'teatteri', en: 'theater', bn: 'থিয়েটার' },
      { fi: 'museo', en: 'museum', bn: 'জাদুঘর' },
      { fi: 'konsertti', en: 'concert', bn: 'কনসার্ট' },
      { fi: 'näyttely', en: 'exhibition', bn: 'প্রদর্শনী' },
      { fi: 'juhla', en: 'celebration', bn: 'উৎসব' },
      { fi: 'laulaja', en: 'singer', bn: 'গায়ক/গায়িকা' },
      { fi: 'näyttelijä', en: 'actor', bn: 'অভিনেতা/অভিনেত্রী' },
      { fi: 'kirjailija', en: 'writer/author', bn: 'লেখক' },
      { fi: 'elokuva', en: 'film/movie', bn: 'চলচ্চিত্র' },
      { fi: 'sarja', en: 'series', bn: 'সিরিজ' },
      { fi: 'runo', en: 'poem', bn: 'কবিতা' },
      { fi: 'maalaus', en: 'painting', bn: 'চিত্রকর্ম' },
      { fi: 'liput', en: 'tickets', bn: 'টিকিট' },
      { fi: 'esitys', en: 'performance', bn: 'পরিবেশনা' },
      { fi: 'peruuntua', en: 'to be canceled', bn: 'বাতিল হওয়া' },
      { fi: 'korvaava', en: 'replacement', bn: 'প্রতিস্থাপক' },
    ],
    usefulPhrases: [
      { fi: 'Mielestäni...', en: 'In my opinion...', bn: 'আমার মতে...' },
      { fi: 'Minusta...', en: 'I think...', bn: 'আমি মনে করি...' },
      { fi: 'Olen samaa mieltä.', en: 'I agree.', bn: 'আমি একমত।' },
      { fi: 'Olen eri mieltä.', en: 'I disagree.', bn: 'আমি দ্বিমত পোষণ করি।' },
      { fi: 'Toisaalta... toisaalta...', en: 'On one hand... on the other hand...', bn: 'একদিকে... অন্যদিকে...' },
      { fi: 'Kuulostaa kiinnostavalta!', en: 'Sounds interesting!', bn: 'শুনতে আকর্ষণীয় লাগছে!' },
      { fi: 'Suosittelen lämpimästi!', en: 'I warmly recommend!', bn: 'আমি আন্তরিকভাবে সুপারিশ করি!' },
      { fi: 'Kannattaako mennä?', en: 'Is it worth going?', bn: 'যাওয়া কি লাভজনক হবে?' },
      { fi: 'Millaisesta musiikista tykkäät?', en: 'What kind of music do you like?', bn: 'তুমি কেমন সঙ্গীত পছন্দ করো?' },
      { fi: 'Olen lukenut / nähnyt / kuullut...', en: 'I have read / seen / heard...', bn: 'আমি পড়েছি / দেখেছি / শুনেছি...' },
    ],
    learnEverywhereTip: {
      title: 'VINKKI: Lue paljon',
      body: [
        'Testissä ei ole paljon aikaa. Siksi on tärkeää osata lukea nopeasti ja sujuvasti suomeksi.',
        'Vinkkejä parempaan lukemiseen: lue paljon – sinun ei tarvitse ymmärtää kaikkea. Lue selkokirjoja ja selkokielisiä uutisia. Lue mainoksia.',
        'Kun katsot elokuvia, laita suomenkieliset tekstitykset päälle. Kun haet tietoa netistä, valitse suomenkielinen versio.',
        'Lue joka päivä vähän, älä paljon kerran viikossa. Tee lukemisesta päivittäinen tapa.',
      ],
    },
  },
  {
    id: 'yki-ch5',
    number: 5,
    titleFi: 'Matkustaminen',
    titleEn: 'Traveling',
    pages: '138-165',
    theme: 'Matkustaminen, liikenne, turismi, reitit ja matkailuun liittyvät palvelut',
    grammarTopicIds: ['postpositiot-prepositiot', 'ulkopaikallissijat', 'ma-infinitiivi', 'tulevaisuus', 'essiivi', 'translatiivi', 'konditionaali'],
    reading: {
      vocabWarmup: {
        instructionsFi: 'Osaatko liikenteeseen liittyvää sanastoa? Selvitä, mitä seuraavat sanat tarkoittavat.',
        items: [
          { fi: 'juna', en: 'train', bn: 'ট্রেন' },
          { fi: 'bussi', en: 'bus', bn: 'বাস' },
          { fi: 'lentokone', en: 'airplane', bn: 'বিমান' },
          { fi: 'laiva', en: 'ship/ferry', bn: 'জাহাজ / ফেরি' },
          { fi: 'auto', en: 'car', bn: 'গাড়ি' },
          { fi: 'polkupyörä', en: 'bicycle', bn: 'সাইকেল' },
          { fi: 'metro', en: 'subway', bn: 'মেট্রো' },
          { fi: 'raitiovaunu', en: 'tram', bn: 'ট্রাম' },
          { fi: 'lippu', en: 'ticket', bn: 'টিকিট' },
          { fi: 'aikataulu', en: 'schedule', bn: 'সময়সূচি' },
          { fi: 'asema', en: 'station', bn: 'স্টেশন' },
          { fi: 'lentokenttä', en: 'airport', bn: 'বিমানবন্দর' },
          { fi: 'satama', en: 'harbor/port', bn: 'বন্দর' },
          { fi: 'matkustaa', en: 'to travel', bn: 'ভ্রমণ করা' },
          { fi: 'matka', en: 'trip/journey', bn: 'ভ্রমণ' },
          { fi: 'reitti', en: 'route', bn: 'রুট' },
          { fi: 'vaihto', en: 'transfer/change', bn: 'পরিবর্তন / সংযোগ' },
          { fi: 'myöhässä', en: 'late/delayed', bn: 'বিলম্বিত' },
        ],
      },
      practicePassages: [
        {
          id: 'reading-practice-1',
          titleFi: 'Eksyminen vaelluksella tai retkellä',
          titleEn: 'Getting Lost While Hiking',
          textFi:
            'Jos huomaat, että olet eksynyt tai olet epävarma sijainnistasi, rauhoitu, syö ja juo ensin kunnolla ja varmista, että olet mahdollisimman hyvävointinen. Mikäli on pimeää tai huono ilma, leiriydy ja nuku hyvät yöunet ennen kuin yrität päästä takaisin kartalle. Levänneenä ja kylläisenä teet parempia päätöksiä.\n\nSiinä tapauksessa, ettet levon ja syömisenkään jälkeen löytäisi takaisin reitillesi, on tärkeää, että mahdollinen etsintäpartio tai pelastushenkilöstö tietää, mistä etsiä. Autiotupien vieraskirjat ovat tärkeitä tiedonlähteitä siitä, missä olet viimeksi varmuudella ollut. Muista siis merkitä vieraskirjaan oma nimesi ja päivämäärä, vaikka pysähtyisit vain kahville ja lämmittelemään etkä jäisi tupaan yöksi.\n\nOn myös tärkeää jutella mahdollisten vastaantulijoiden kanssa ja kertoa heille, mistä olet tulossa ja mihin olet menossa, jotta hekin voivat tarvittaessa auttaa etsinnöissä. Muista myös aina kertoa jollekin ihmiselle ennen matkaasi mahdollisimman tarkasti reittisi ja päivämäärä, jolloin oletat saapuvasi määränpäähän. Näin hän voi tarvittaessa hälyttää apua.',
          mcq: [
            {
              id: 'rp1-q1',
              question: 'Jos eksyy metsässä,',
              options: ['kannattaa levätä ja pitää evästauko', 'on syytä mennä nopeasti autiotupaan', 'on paras jatkaa matkaa pysähtymättä'],
              correctIndex: 0,
              explanation: '"rauhoitu, syö ja juo ensin kunnolla" (calm down, eat and drink properly first).',
            },
            {
              id: 'rp1-q2',
              question: 'Kun vierailee autiotuvassa, on tärkeää',
              options: ['syödä hyvin ja juoda kahvia', 'kuivata märät vaatteet', 'kirjoittaa vieraskirjaan'],
              correctIndex: 2,
              explanation: '"Muista siis merkitä vieraskirjaan oma nimesi" (remember to write your name in the guestbook).',
            },
            {
              id: 'rp1-q3',
              question: 'Jos retken aikana tapaat muita, kerro heille,',
              options: ['mitä sinulle kuuluu', 'mikä on lähtöpisteesi ja määränpääsi', 'mistä olet kotoisin'],
              correctIndex: 1,
              explanation: '"kertoa heille, mistä olet tulossa ja mihin olet menossa" (tell them where you\'re coming from and where you\'re going).',
            },
            {
              id: 'rp1-q4',
              question: 'Ennen matkalle lähtöä kerro jollekin,',
              options: ['mikä on matkasuunnitelmasi', 'millä ja miten matkustat', 'kenen kanssa olet matkalla'],
              correctIndex: 0,
              explanation: '"kertoa jollekin mahdollisimman tarkasti reittisi" (tell someone your route as precisely as possible).',
            },
          ],
        },
        {
          id: 'reading-practice-2',
          titleFi: 'Maaseudun bussiliikenne loppuu',
          titleEn: 'Rural Bus Traffic Is Ending',
          source: 'Outi Kokko, is.fi 24.10.2014 (lyhennetty ja muokattu)',
          textFi:
            'Maaseudun bussiliikenteen tulevaisuus on karu. Koiviston Auton johtaja Antti Norrlin uskoo, että bussiliikenne maaseudulla loppuu pikkuhiljaa kokonaan. Kuntaliiton insinöörin Silja Siltalan mukaan tulevaisuudessa bussireittejä ja -vuoroja karsitaan entistä enemmän ja yhä useammalla kylällä kulkevat pian vain koulukyydit ja palvelulinjat.\n\nKunnissa pyritään järjestämään kutsubusseja ja muuta joukkoliikennettä ainakin niille, joille se lakisääteisesti kuuluu. Näitä ovat esimerkiksi koululaiset, vanhemmat ja eräät muut vammaispalvelu- ja sosiaalihuoltolakien määrittelemät ryhmät. Muun muassa vanhuksia varten yli 250 kunnassa on järjestetty palvelulinjoja. Sen sijaan terveen, työikäisen aikuisen ihmisen kulkemista laki ei turvaa.\n\nPitkän matkan bussit kulkevat vastaisuudessakin, mutta reitit ja aikataulut hiotaan mahdollisimman kannattaviksi. Päätetäit huristavat pikavuorot eivät poikkea pikkuteille eivätkä pysähdy joka kirkonkylässä.\n\nKoska haja-asutusalueen maanteillä on vähän bussinkäyttäjiä, lipputulot eivät riitä kattamaan kustannuksia ja liikennettä on tuettu julkisin varoin. Kun kustannukset nousevat, rahat eivät enää riitä kaikkeen entiseen ja siksi palvelut ja liikenneyhteydet väkisinkin heikkenevät. Tämän vuoksi maalla ei enää kovin helposti pärjää ilman autoa.',
          mcq: [
            {
              id: 'rp2-q1',
              question: 'Mitkä vähenevät maaseudulla?',
              options: ['koulubussit', 'bussivuorot', 'palvelulinjat'],
              correctIndex: 1,
              explanation: '"bussireittejä ja -vuoroja karsitaan" (bus routes and schedules are being cut).',
            },
            {
              id: 'rp2-q2',
              question: 'Kenelle kunnat järjestävät joukkoliikennettä?',
              options: ['vanhemmille', 'työntekijöille', 'ikäihmisille'],
              correctIndex: 0,
              explanation: '"koululaiset, vanhemmat ja eräät muut... ryhmät" (pupils, the elderly and certain other groups).',
            },
            {
              id: 'rp2-q3',
              question: 'Pikavuorobussit kulkevat pääasiassa',
              options: ['pienillä teillä', 'kyläteillä', 'pääteillä'],
              correctIndex: 2,
              explanation: '"eivät poikkea pikkuteille" (don\'t deviate onto small roads).',
            },
            {
              id: 'rp2-q4',
              question: 'Miksi maaseudun liikenneyhteydet huononevat?',
              options: ['Matkustajia on liian vähän.', 'Kustannuksia on liian vähän.', 'Omia autoja on liian vähän.'],
              correctIndex: 0,
              explanation: '"haja-asutusalueen maanteillä on vähän bussinkäyttäjiä" (on rural roads there are few bus users).',
            },
          ],
        },
        {
          id: 'reading-practice-3',
          titleFi: 'Minna kiertää maailmaa junalla',
          titleEn: 'Minna Travels the World by Train',
          source: 'Marjoanne Zitting, iltalehti.fi 23.1.2021 (lyhennetty ja muokattu)',
          textFi:
            'Minna Perokorpi-Sulin ja hänen miehensä menettivät sydämensä junamatkailulle jokunen vuosi sitten. Nuorempana kumpikaan ei päässyt interreilaamaan, mutta nyt 54-vuotias Minna ja hänen melkein eläkeikäinen puolisonsa matkustavat paljon junalla.\n\nEnnen pariskunta reissasi toisella tavalla: lasten ollessa pieniä he kävivät rantalomilla ja vierastivat kaupunkikohteita. Nyt Minna kokee, että rantalomat on nähty.\n\n"Junalla matkustaessa pääsee kokemaan niin paljon enemmän", hän kertoo.\n\n"En halua ajaa itse autolla isoissa kaupungeissa, ja myös ekologisuus on yksi syy suosia junaa", hän sanoo.\n\nEnnen kaikkea junalla liikkuminen Euroopassa on Minnan mukaan helppoa. Yhteyksiä löytyy hyvin, eikä nopeuskaan häviä paljoa lentämiselle. Junalla pääsee kaupungin keskustaan, eikä asemalle tarvitse lentokentän tavoin tulla tunteja ennen lähtöä.\n\n"Matkustus junassa on mukavampaa kuin lentokoneessa, ja matkatavarollekin on hyvin tilaa. Aikataulut löytyvät hyvin netistä, lippujen ostaminen on helppoa ja junat ovat hyvässä kunnossa", Minna kertoo.\n\nMinnan mukaan junalla liikkuminen Euroopassa on siis edullista, helppoa ja mukavaa. Löytyykö matkustustavasta mitään moitittavaa?\n\n"Ravintolavaunujen tarjonta ei ole samalla tasolla kuin suomalaisissa junissa", hän myöntää.\n\n"Mukaan kannattaa siis aivan ehdottomasti pakata omat eväät!"',
          trueFalse: [
            {
              id: 'rp3-tf1',
              statementFi: 'Minna on harrastanut junamatkailua nuoresta asti.',
              answer: false,
              explanation: '"Nuorempana kumpikaan ei päässyt interreilaamaan" (neither of them got to Interrail when younger).',
            },
            {
              id: 'rp3-tf2',
              statementFi: 'Minna matkustaa junalla mieluiten rantalomille.',
              answer: false,
              explanation: '"Ennen pariskunta reissasi... rantalomilla... Nyt Minna kokee, että rantalomat on nähty."',
            },
            {
              id: 'rp3-tf3',
              statementFi: 'Minnalle on tärkeää, että matkailu on ympäristöystävällistä.',
              answer: true,
              explanation: '"ekologisuus on yksi syy suosia junaa" (ecology is one reason to prefer the train).',
            },
            {
              id: 'rp3-tf4',
              statementFi: 'Minnan mielestä junalla matkustaminen on yksinkertaista.',
              answer: true,
              explanation: '"junalla liikkuminen Euroopassa on Minnan mukaan helppoa" (traveling by train in Europe is easy in Minna\'s opinion).',
            },
            {
              id: 'rp3-tf5',
              statementFi: 'Minnan mielestä junassa saa aina hyvää ruokaa.',
              answer: false,
              explanation: '"Ravintolavaunujen tarjonta ei ole samalla tasolla kuin suomalaisissa junissa."',
            },
          ],
        },
        {
          id: 'reading-practice-4',
          titleFi: 'Hae tuetulle lomalle',
          titleEn: 'Apply for a Supported Holiday',
          source: 'Maaseudun Terveys- ja Lomahuolto ry',
          textFi:
            'Maaseudun Terveys- ja Lomahuolto ry järjestää tuettua lomatoimintaa eri kohderyhmille. Voit hakea tuettua lomaa, jos asut Suomessa vakituisesti eikä sinulla ole varaa maksaa koko lomaa itse. Jos sinulla on terveydellisiä tai sosiaalisia haasteita, ne ovat myös perusteita loman tarpeelle. Voit hakea tuettua lomaa yksin, perheen tai ystävän kanssa.\n\nTee hakemus verkossa tai täytä paperinen hakemus. Voit tilata paperisen hakemuksen ja lomaesitteen myös puhelinpalvelustamme.\n\nKenelle tuettu loma voidaan myöntää? Tuetut lomat on suunnattu ihmisille, joiden olisi muuten taloudellisesti haastavaa tai mahdotonta päästä lomalle. Taloudellisia perusteluita loman tarpeelle ovat esimerkiksi pienet tulot, isot velat, sairaudenhoitokulut tai asumiskulut.\n\nLoman myöntämiseen vaikuttaa myös aikaisempi myönnetty lomatuki. Tuettua lomaa ei myönnetä samalle hakijalle joka vuosi tai toistuvasti. Ensi kertaa lomaa hakevat ovat etusijalla.\n\nSosiaalisia perusteita loman tarpeelle ovat esimerkiksi työttömyys, lomautus, yksinäisyys, omaishoitajuus, perheongelmat tai vaikea elämäntilanne. Terveydellisiä perusteita ovat puolestaan vammaisuus tai fyysiset ja psyykkiset sairaudet.\n\nLoman omavastuuosuus aikuisilta ja 17 vuotta täyttäneiltä on 125 € / 5 vrk. Lomailija maksaa itse matkakulunsa lomakohteeseen. Alle 17-vuotiaat lomailevat maksutta. Erityistapauksissa on omavastuusta mahdollista saada huojennusta.\n\nLomaan sisältyy majoitus kahden hengen huoneissa tai perhelomilla perhekoon mukaisissa huoneissa/huoneistoissa, täysihoitoruokailut (aamainen, lounas, päivällinen sekä perhelomilla iltapala) ja lomaohjelma.',
          open: [
            {
              id: 'rp4-o1',
              questionFi: 'Ketkä voivat hakea tuettua lomaa? Mainitse kaksi asiaa.',
              sampleAnswerFi: 'Suomessa vakituisesti asuvat, joilla ei ole varaa maksaa lomaa itse, tai joilla on terveydellisiä/sosiaalisia haasteita.',
            },
            {
              id: 'rp4-o2',
              questionFi: 'Miten tuettua lomaa haetaan? Mainitse kaksi eri tapaa.',
              sampleAnswerFi: 'Verkossa tai paperisella hakemuksella. Paperisen voi tilata puhelinpalvelusta.',
            },
            {
              id: 'rp4-o3',
              questionFi: 'Millaisia taloudellisia ongelmia tuetun loman saajilla usein on? Mainitse kaksi asiaa.',
              sampleAnswerFi: 'Pienet tulot, isot velat, sairaudenhoitokulut tai asumiskulut.',
            },
            {
              id: 'rp4-o4',
              questionFi: 'Millaisia hakijan sosiaalisia tai terveydellisiä ongelmia lomapäätöksessä otetaan huomioon? Mainitse kolme asiaa.',
              sampleAnswerFi: 'Työttömyys, lomautus, yksinäisyys, omaishoitajuus, perheongelmat, vaikea elämäntilanne, vammaisuus, sairaudet.',
            },
            {
              id: 'rp4-o5',
              questionFi: 'Mitä kuluja yli 17-vuotias loman saaja joutuu maksamaan itse? Mainitse kaksi asiaa.',
              sampleAnswerFi: 'Omavastuuosuus (125 € / 5 vrk) ja matkakulut lomakohteeseen.',
            },
            {
              id: 'rp4-o6',
              questionFi: 'Mitä kaikkea lomaan kuuluu? Mainitse vähintään kaksi asiaa.',
              sampleAnswerFi: 'Majoitus, täysihoitoruokailut (aamiainen, lounas, päivällinen) ja lomaohjelma.',
            },
          ],
        },
      ],
      testPassages: [],
    },
    writing: {
      tip: {
        title: 'VINKKI: Luonnostelu',
        body: [
          'Kun luonnostelet, unohda itsekritiikki. Anna ajatusten virrata vapaasti. Kirjoita vain yksittäisiä sanoja ja keskeneräisiä ideoita.',
          'Luonnos on kuin muistilista siitä, mitä haluat sanoa ja mitä sanoja/fraaseja tarvitset.',
        ],
      },
      freewrite: {
        instructionsFi: 'Osaatko reklamaation tekemisen sanastoa? Selvitä, mitä seuraavat sanat tarkoittavat.',
        rules: [],
        topics: [
          'reklamaatio (complaint)',
          'valitus (complaint)',
          'hyvitys (compensation)',
          'korvaus (compensation)',
          'viallinen (faulty/defective)',
          'palautus (return)',
          'kuitti (receipt)',
          'takuu (warranty)',
          'asiakaspalvelu (customer service)',
          'virhe (error/mistake)',
          'pettymys (disappointment)',
          'haitta (inconvenience)',
        ],
      },
      groupIntro: {
        instructionsFi: 'Keskustele reklamaatiokokemuksista luokkatovereiden kanssa:',
        questions: [
          'Kertokaa toisillenne jostakin tilanteesta, jossa tuote tai palvelu ei ollut sellainen kuin olisi pitänyt.',
          'Valititteko asiasta? Miten valitukseen vastattiin?',
          'Jos ette valittaneet, kertokaa miten valittaisitte nyt.',
        ],
      },
      practiceTasks: [
        {
          id: 'writing-practice-1',
          titleFi: 'Luonnostele ja kirjoita valitusviesti lentoyhtiölle',
          instructionsFi:
            'Olet matkustanut lentokoneella lomamatkalle. Lentomatkalla sait tylyä ja huonoa palvelua, ja lisäksi lento oli myöhässä. Kirjoita valitusviesti lentoyhtiölle ja kerro, miten asia pitäisi sinun mielestäsi korjata.',
          bulletsFi: [
            'Millaisesta viestistä on kyse? (Valitusviesti)',
            'Miksi lähetät viestin ja kenelle? (Lentoyhtiölle)',
            'Mitä haluat ja ehdotat? (Korvausta)',
          ],
          exampleTitleFi: 'Luonnoksen tarkistuslista:',
          exampleFi:
            'Oma nimi ja yhteystiedot\nLennon tiedot (päivämäärä, numero, reitti)\nHuono palvelu\nMyöhästyminen\nToivottu korvaus\n\nAloita: "Hei, [yhtiön nimi]." Kerro selkeästi lennon tiedot ja ongelma. Ehdota, miten ongelma voitaisiin korjata. Lopeta: "Ystävällisin terveisin" tai "Terveisin".',
          sampleFi:
            'Hei!\n\nMatkustin lentoyhtiöllänne lennolla [flight number] [date] [route]. Valitettavasti lentomatkanne oli erittäin epämiellyttävä. Lennon henkilökunta oli tylyä ja palvelu oli huonoa. Lisäksi lento oli myöhässä yli kaksi tuntia, mikä aiheutti minulle ongelmia.\n\nToivoisin saavani hyvitystä huonosta palvelusta ja myöhästymisestä.\n\nYstävällisin terveisin,\n[Your name]',
        },
      ],
      informalTasks: [
        {
          id: 'writing-test-informal-1',
          titleFi: 'Viesti ystävälle',
          instructionsFi: 'Matkustit vahingossa ilman lippua ja sait sakon. Kerro ystävällesi, miten tämä tapahtui ja mitä sitten kävi.',
        },
        {
          id: 'writing-test-informal-2',
          titleFi: 'Avunpyyntö sukulaiselle',
          instructionsFi:
            'Olet menossa ulkomaille ja tarvitset matkavakuutuksen. Eri vakuutusten vertailu on vaikeaa, koska et ymmärrä ehtoja. Kirjoita ystävälle/sukulaiselle ja pyydä apua.',
        },
        {
          id: 'writing-test-informal-3',
          titleFi: 'Kiitosviesti naapurille',
          instructionsFi:
            'Lapsesi huomasi bussiin noustessa, ettei matkakortilla ollut saldoa. Samassa bussissa ollut naapuri osti ystävällisesti lapsellesi lipun. Kirjoita kiitosviesti.',
        },
        {
          id: 'writing-test-informal-4',
          titleFi: 'Kysymys kaverille',
          instructionsFi:
            'Matkustat viikonlopuksi toiseen kaupunkiin. Haluaisit kokeilla kotimajoituspalvelua, mutta et ole käyttänyt sitä aiemmin. Kysy neuvoa kaverilta, joka matkustaa paljon.',
        },
      ],
      formalTasks: [
        {
          id: 'writing-test-formal-1',
          titleFi: 'Viesti hotelliin',
          instructionsFi:
            'Yövyit hotellissa ja unohdit jotain tärkeää. Kirjoita viesti, jossa kerrot, milloin olit siellä ja mitä unohdit. Kuvaile esine ja miten haluaisit saada sen takaisin.',
        },
        {
          id: 'writing-test-formal-2',
          titleFi: 'Kysymys lentoyhtiölle',
          instructionsFi:
            'Olet varaamassa lentoja perheellesi, ja teillä on kissa. Nettisivulla ei voi varata lentoa lemmikille. Kysy, miten pitäisi toimia.',
        },
        {
          id: 'writing-test-formal-3',
          titleFi: 'Reklamaatio laivayhtiölle',
          instructionsFi: 'Olit viikonloppuristeilyllä ystävien kanssa. Et ollut tyytyväinen hyttiin. Kirjoita reklamaatio ja ehdota hyvitystä.',
        },
        {
          id: 'writing-test-formal-4',
          titleFi: 'Viesti bussiyhtiölle',
          instructionsFi:
            'Matkustat päivittäin kahdella eri bussilla. Aikataulut eivät kohtaa hyvin, mikä aiheuttaa pitkiä odotuksia. Ehdota aikataulumuutoksia.',
        },
      ],
      opinionTopics: [
        {
          id: 'writing-opinion-1',
          titleFi: 'Polttomoottori- ja sähköautot',
          options: ['A. Polttomoottoriautot pitäisi kieltää', 'B. Tavallisilla ihmisillä ei ole varaa ostaa sähköautoa'],
        },
        {
          id: 'writing-opinion-2',
          titleFi: 'Turismi',
          options: ['Tuhoaako turismi maapallon?'],
        },
        {
          id: 'writing-opinion-3',
          titleFi: 'Muita aiheita',
          options: [
            'Junaliput ovat liian kalliita Suomessa',
            'Yksityisautoilijoiden pitäisi maksaa ruuhkamaksuja',
            'Matkailu auttaa ymmärtämään muita kulttuureja',
            'Ratikoita saatava kaikkiin isoihin kaupunkeihin',
            'Autoilun verotuksessa ei huomioida maaseudulla asuvia',
          ],
        },
      ],
    },
    listening: {
      tip: {
        title: 'VINKKI: Synonyymejä',
        body: [
          'YKI-testin kuuntelu- ja lukutehtävissä oikea vastaus on yleensä muotoiltu hieman eri tavalla kuin tekstissä/äänitteellä. Sinun täytyy ymmärtää, mitkä asiat tarkoittavat samaa.',
          'Yleisiä synonyymejä: yleensä, tavallisesti, useimmiten. Aamuisin, joka aamu. Hienosti, hyvin. Alle 10 %, vähemmän kuin 10 %. Suurin osa, enemmistö. Joka toinen, puolet, 50 %.',
        ],
      },
      practicePassages: [
        {
          id: 'listening-practice-1',
          titleFi: 'Lyhyitä kuulutuksia',
          titleEn: 'Short Announcements',
          textFi: NO_TRANSCRIPT_NOTE,
          open: [
            {
              id: 'lp1-o1',
              questionFi: 'Mitä juna-asemalla tapahtuu pian? (a) Yöjuna numero 1 lähtee. b) Lippuautomaatti sulkeutuu. c) Matkakeskus menee kiinni.)',
              sampleAnswerFi: 'Tämä vastaus riippuu kuunneltavasta äänitteestä – kirjan oma malli ei anna tähän tarkkaa vastausta.',
            },
            {
              id: 'lp1-o2',
              questionFi: 'Kuinka kauan retki kestää? (a) kaksi tuntia b) koko päivän c) ruokailuun asti)',
              sampleAnswerFi: 'Tämä vastaus riippuu kuunneltavasta äänitteestä – kirjan oma malli ei anna tähän tarkkaa vastausta.',
            },
            {
              id: 'lp1-o3',
              questionFi:
                'Jos matkustajan täytyy päästä Lepokalliolle, hänen täytyy... (a) ajaa ensin Tenholaan b) vaihtaa kakkosen ratikkaan c) jäädä pois tällä tai seuraavalla pysäkillä)',
              sampleAnswerFi: 'Tämä vastaus riippuu kuunneltavasta äänitteestä – kirjan oma malli ei anna tähän tarkkaa vastausta.',
            },
            {
              id: 'lp1-o4',
              questionFi:
                'Jos lentomatkustaja on menossa Malagan lennolle, hänen pitää... (a) mennä pian portille 32 b) odottaa viimeistä kuulutusta c) olla portilla viimeistään kello 7.20)',
              sampleAnswerFi: 'Tämä vastaus riippuu kuunneltavasta äänitteestä – kirjan oma malli ei anna tähän tarkkaa vastausta.',
            },
            {
              id: 'lp1-o5',
              questionFi: 'Miten junamatkalla saa ruokaa? Mainitse kaksi asiaa.',
              sampleAnswerFi: 'Ravintolavaunusta tai omista eväistä.',
            },
            {
              id: 'lp1-o6',
              questionFi: 'Mitä matkustajia pyydetään tekemään ja miksi?',
              sampleAnswerFi: 'Siirtämään matkatavaroita, jotta muut pääsevät istumaan.',
            },
            {
              id: 'lp1-o7',
              questionFi: 'Mitä tässä junassa olevan täytyy tehdä, jos hän haluaa jatkaa matkaa Toukolaan?',
              sampleAnswerFi: 'Vaihtaa toiseen junaan.',
            },
            {
              id: 'lp1-o8',
              questionFi: 'Mitä bussinkuljettaja pyytää matkustajia tekemään ja miksi?',
              sampleAnswerFi: 'Istumaan, koska bussi lähtee.',
            },
          ],
        },
        {
          id: 'listening-practice-2',
          titleFi: 'Suomalaisten työmatkat',
          titleEn: 'Finnish Commutes',
          textFi: NO_TRANSCRIPT_NOTE,
          mcq: [
            {
              id: 'lp2-q1',
              question: 'Lähes puolet suomalaisista työmatkoista on pituudeltaan',
              options: ['enintään 7 kilometriä', 'keskimäärin 10-50 kilometriä', 'yli 50 kilometriä'],
              correctIndex: 0,
              explanation: 'Vastaus: enintään 7 kilometriä. Synonyymejä: lähes puolet = melkein 50 %; enintään = korkeintaan, alle; keskimäärin = noin, suunnilleen; yli = enemmän kuin.',
            },
            {
              id: 'lp2-q2',
              question: 'Jos työmatka on korkeintaan 7 kilometriä, kaupungissa sen',
              options: ['pyöräilee alle puolessa tunnissa', 'kulkee nopeimmin bussilla, metrolla tai ratikalla', 'voi matkustaa omalla autolla'],
              correctIndex: 0,
              explanation:
                'Vastaus: pyöräilee alle puolessa tunnissa. "korkeintaan" = enintään; bussi, metro, ratikka = joukkoliikenne.',
            },
            {
              id: 'lp2-q3',
              question: 'Tilastot kertovat, että jos työmatka on 10-50 kilometriä, se matkustetaan tavallisesti',
              options: ['polkupyörällä', 'joukkoliikenteellä', 'jalkaisin'],
              correctIndex: 1,
              explanation: 'Vastaus: joukkoliikenteellä. "tilastot kertovat" = tutkimusten mukaan; "tavallisesti" = yleensä.',
            },
          ],
        },
      ],
      testPassages: [
        {
          id: 'listening-test-1',
          titleFi: 'Interrail vireäille',
          titleEn: 'Interrail for the Active',
          textFi: NO_TRANSCRIPT_NOTE,
          mcq: [
            {
              id: 'lt1-q1',
              question: 'Kiinteähintaisella Interrail-lipulla voi',
              options: ['tehdä vain tietyn verran matkoja', 'matkustaa rajoittamattoman ajanjakson ajan', 'matkustaa Euroopassa'],
              correctIndex: 2,
              explanation: 'Vastaus: matkustaa Euroopassa.',
            },
            {
              id: 'lt1-q2',
              question: 'Alennukset koskevat',
              options: ['alle 27-vuotiaita ja yli 60-vuotiaita', 'kaikenikäisiä ihmisiä', 'vain nuoria'],
              correctIndex: 0,
              explanation: 'Vastaus: alle 27-vuotiaita ja yli 60-vuotiaita.',
            },
          ],
        },
        {
          id: 'listening-test-2',
          titleFi: 'Vietä viikonloppu Suur-Saimaalla',
          titleEn: 'Spend the Weekend on Lake Saimaa',
          textFi: NO_TRANSCRIPT_NOTE,
          trueFalse: [
            {
              id: 'lt2-tf1',
              statementFi: 'Lomakylä sijaitsee veden äärellä.',
              answer: true,
              explanation: 'Lomakylä sijaitsee veden äärellä.',
            },
            {
              id: 'lt2-tf2',
              statementFi: 'Ravintola tarjoaa kansainvälistä ruokaa ja musiikkia.',
              answer: false,
              explanation: 'Ravintola tarjoaa paikallista/alueellista ruokaa, ei kansainvälistä.',
            },
            {
              id: 'lt2-tf3',
              statementFi: 'Savusaunaa voi käyttää maksutta.',
              answer: true,
              explanation: 'Savusauna on maksuton.',
            },
            {
              id: 'lt2-tf4',
              statementFi: 'Koirat saavat majoittua kaikissa mökeissä.',
              answer: false,
              explanation: 'Koirat eivät saa majoittua kaikissa mökeissä.',
            },
          ],
        },
        {
          id: 'listening-test-3',
          titleFi: 'Marko ja Anna lomasta',
          titleEn: "Marko and Anna's Holiday",
          textFi: NO_TRANSCRIPT_NOTE,
          open: [
            {
              id: 'lt3-o1',
              questionFi: 'Mitä Marko teki lomalla? Mainitse vähintään kolme asiaa.',
              sampleAnswerFi: 'Esimerkiksi: kävi ulkona, tapasi ystäviä, rentoutui.',
            },
            {
              id: 'lt3-o2',
              questionFi: 'Miksi Markon perhe ei halunnut lähteä ulkomaille?',
              sampleAnswerFi: 'Esimerkiksi: halusivat säästää rahaa, kotimaassa oli nähtävää.',
            },
            {
              id: 'lt3-o3',
              questionFi: 'Miksi Anna halusi ulkomaille?',
              sampleAnswerFi: 'Esimerkiksi: halusi nähdä uusia paikkoja, kaipasi lämpöä.',
            },
            {
              id: 'lt3-o4',
              questionFi: 'Millainen Annan perheen lomapaikka oli? Mainitse kaksi asiaa.',
              sampleAnswerFi: 'Esimerkiksi: lähellä rantaa, rauhallinen.',
            },
            {
              id: 'lt3-o5',
              questionFi: 'Miksi Anna ei halua olla lomalla paljon kotona?',
              sampleAnswerFi: 'Esimerkiksi: haluaa vaihtelua, kotona on tylsää.',
            },
          ],
        },
      ],
    },
    speaking: {
      groupIntro: {
        instructionsFi: 'Keskustelkaa matkustamisesta parin tai pienen ryhmän kanssa:',
        questions: [
          'Mitä kulkuvälineitä käytätte arjessanne?',
          'Kuinka paljon matkustatte arjessanne?',
          'Matkustatteko vapaa-ajallanne?',
          'Miten matkustamisenne on muuttunut?',
          'Valitkaa yksi matka ja kertokaa siitä.',
        ],
      },
      phraseTable: {
        titleFi: 'VINKKI: -ko/-kö-kysymyksen eri versiot',
        rows: [
          { spoken: 'Voitsä toistaa? / Voiksä toistaa?', written: 'Voitko toistaa?', en: 'Can you repeat?' },
          { spoken: 'Voitsä toistaa?', written: 'Voit sinä toistaa?', en: 'Can you repeat? (literal)' },
        ],
      },
      practiceLongTask: {
        id: 'speaking-practice-1',
        titleFi: 'Harjoittele spontaania puhumista',
        titleEn: 'Practice Spontaneous Speaking',
        prepSeconds: 30,
        speakSeconds: 300,
        questions: [
          'Valitse yksi matka, jonka olet tehnyt. Se voi olla läheinen tai kaukainen: tavallinen matka kotoa töihin tai lomamatka jonnekin kauas.',
          'Yritä puhua koko ajan ja pysyä aiheessa. On normaalia, että syntyy pitkiä taukoja ja sanoja unohtuu. Kun näin käy, palaa aiheeseen mahdollisimman pian.',
        ],
      },
      practiceSituationalTasks: [
        {
          id: 'speaking-practice-situation-1',
          scenarioFi:
            'Olet vieraassa kaupungissa Suomessa ja haluat mennä linja-autoasemalle. Puhelimestasi on akku loppu, eikä sinulla ole kaupungin karttaa. Pyydä apua vastaantulijalta.',
          seconds: 30,
          modelAnswerFi:
            'Hei anteeks, tota, mä tarttisin niinku vähän apua. Mulla on tota noin niin puhelimesta akku loppu eikä mulla oo karttaa, ja tää kaupunki on mulle ihan vieras. Mun pitäis löytää toi linja-autoasema. Osaisitsä auttaa? Joo, öö, niin, tää on muuten aivan ihana kaupunki!',
        },
      ],
      dontMemorizeTip: {
        title: 'VINKKI: Täytesanat',
        body: [
          'Täytesanat ovat pieniä sanoja, jotka ovat hyödyllisiä, kun haluat puhua sujuvasti. Ne voi jättää pois muuttamatta merkitystä. Puhe kuulostaa luonnollisemmalta ja sujuvammalta, kun käytät täytesanoja.',
          'Yleisiä täytesanoja: öö, tota, niinku, no niin, tavallaan, tuota, tuota noin.',
        ],
      },
      testLongTasks: [
        {
          id: 'speaking-test-1',
          titleFi: 'Tärkeä matka',
          titleEn: 'Important Trip',
          prepSeconds: 60,
          speakSeconds: 90,
          questions: [
            'Mistä mihin matkustit ja milloin?',
            'Miksi matkustit?',
            'Kenen kanssa matkustit?',
            'Millainen matka oli?',
            'Miksi matka oli sinulle tärkeä?',
          ],
        },
        {
          id: 'speaking-test-2',
          titleFi: 'Matkustamisen merkitys minulle',
          titleEn: 'The Meaning of Travel for Me',
          prepSeconds: 60,
          speakSeconds: 90,
          questions: [
            'Matkustatko usein vapaa-ajalla tai töissä?',
            'Miksi yleensä matkustat?',
            'Millä kulkuvälineellä matkustat mieluiten?',
            'Pidätkö matkustamisesta? Miksi?',
            'Mitä hyviä ja huonoja puolia matkustamisessa on?',
          ],
        },
        {
          id: 'speaking-test-3',
          titleFi: 'Lomamatka, joka meni pieleen',
          titleEn: 'Vacation That Went Wrong',
          prepSeconds: 60,
          speakSeconds: 90,
          questions: [
            'Miksi lomamatka oli epäonnistunut?',
            'Milloin matkustit, mihin ja kenen kanssa?',
            'Mitä ongelmia matkalla oli?',
            'Miten ongelmat olisi voinut korjata?',
            'Matkustaisitko tähän paikkaan uudestaan?',
          ],
        },
      ],
      conversationTasks: [
        {
          id: 'speaking-conv-1',
          titleFi: 'Junalla Lappiin',
          scenarioFi:
            'Olet menossa Lappiin (Kolariin) perheesi kanssa ja haluat varata yöjunan isolle ryhmälle (4 aikuista, 4 lasta) ja kahdelle autolle.',
          turns: [
            { instructionFi: 'Kerro nimesi ja mihin kaupunkiin haluaisit matkustaa.', seconds: 15 },
            { instructionFi: 'Vastaa myöntävästi.', seconds: 5 },
            { instructionFi: 'Vastaa, keksi itse päivä.', seconds: 20 },
            { instructionFi: 'Vastaa kysymykseen.', seconds: 10 },
            { instructionFi: 'Vastaa: 4 aikuista ja 4 lasta.', seconds: 10 },
            { instructionFi: 'Vastaa myöntävästi.', seconds: 5 },
            { instructionFi: 'Vastaa myöntävästi ja kerro, että teillä on mukana kaksi autoa.', seconds: 10 },
            { instructionFi: 'Vastaa myöntävästi.', seconds: 5 },
            { instructionFi: 'Reagoi sopivalla tavalla.', seconds: 10 },
            { instructionFi: 'Vastaa kieltävästi ja hyvästele.', seconds: 10 },
          ],
        },
        {
          id: 'speaking-conv-2',
          titleFi: 'Valitus hotellihuoneesta',
          scenarioFi: 'Yövyit hotellissa etkä ole tyytyväinen huoneeseen. Mene vastaanottoon.',
          turns: [
            { instructionFi: 'Kerro, mikä ongelma huoneessasi on.', seconds: 30 },
            { instructionFi: 'Vastaa myöntävästi.', seconds: 10 },
            { instructionFi: 'Reagoi sopivalla tavalla.', seconds: 10 },
            { instructionFi: 'Kiitä.', seconds: 5 },
            { instructionFi: 'Vastaa kieltävästi.', seconds: 10 },
            { instructionFi: 'Reagoi sopivalla tavalla.', seconds: 5 },
          ],
        },
      ],
      situationalTasks: [
        {
          id: 'speaking-situation-1-1',
          setLabel: 'Tilanteet 1',
          scenarioFi:
            'Juoksit ehtiäksesi bussiin ja pääsit juuri ja juuri mukaan. Bussissa huomaat, ettet ole varma, oletko oikeassa bussissa, etkä pysty tarkistamaan sitä. Kysy toiselta matkustajalta.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-1-2',
          setLabel: 'Tilanteet 1',
          scenarioFi: 'Haluat käyttää kaupunkipyörää ensimmäistä kertaa. Et saa selvää, miten pyörän irrottaa. Kysy lähellä olevalta henkilöltä, joka on palauttamassa pyörää.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-1-3',
          setLabel: 'Tilanteet 1',
          scenarioFi: 'Ystäväsi lainasi autoasi. Kun saat sen takaisin, huomaat naarmun. Ystäväsi ei maininnut siitä. Kerro, mitä ajattelet.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-1-4',
          setLabel: 'Tilanteet 1',
          scenarioFi: 'Olet linja-autoasemalla odottamassa ja kuulet kuulutuksen. Vieressä oleva iäkäs henkilö kysyy, mitä siinä sanottiin. Selitä.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-1-5',
          setLabel: 'Tilanteet 1',
          scenarioFi: 'Ystäväsi suunnittelee matkaa Lappiin ja miettii, mikä vuodenaika olisi paras. Kerro, milloin itse menisit ja miksi.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-2-1',
          setLabel: 'Tilanteet 2',
          scenarioFi: 'Olet junassa matkalla Helsingistä Turkuun. Konduktööri tulee tarkistamaan liput. Sinulla on lippu, mutta et löydä sitä. Selitä tilanne.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-2-2',
          setLabel: 'Tilanteet 2',
          scenarioFi: 'Työkaverisi miettii, matkustaisiko Ouluun junalla vai lentäen. Anna neuvoja.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-2-3',
          setLabel: 'Tilanteet 2',
          scenarioFi: 'Ystäväsi haluaa lainata polkupyörääsi. Kieltäydy kohteliaasti ja anna syy.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-2-4',
          setLabel: 'Tilanteet 2',
          scenarioFi: 'Haluat lainata ystäväsi autoa. Pyydä sitä ja selitä, miksi tarvitset sitä.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-2-5',
          setLabel: 'Tilanteet 2',
          scenarioFi: 'Toisesta kaupungista tuleva ystävä haluaa vierailla kotikaupungissasi. Hän haluaa tietää, mitä nähdä ja tehdä. Anna neuvoja.',
          seconds: 30,
        },
      ],
      opinionTasks: [
        {
          id: 'speaking-opinion-1',
          titleFi: 'Turismin hyvät ja huonot puolet',
          titleEn: 'Pros and Cons of Tourism',
          prepSeconds: 120,
          speakSeconds: 120,
          questions: [
            'Käykö kotipaikkakunnallasi paljon turisteja?',
            'Haluaisitko, että siellä kävisi enemmän tai vähemmän?',
            'Mitä hyviä puolia turismissa on?',
            'Miten turismi vaikuttaa yhteiskuntaan?',
          ],
        },
        {
          id: 'speaking-opinion-2',
          titleFi: 'Joukkoliikenteen pitäisi olla ilmaista',
          titleEn: 'Public Transport Should Be Free',
          prepSeconds: 120,
          speakSeconds: 120,
          questions: [
            'Mitä kulkuvälineitä käytät itse?',
            'Kuinka paljon liput maksavat? Onko hinta sopiva?',
            'Mitä hyviä puolia ilmaisessa joukkoliikenteessä olisi?',
            'Mitä huonoja puolia siinä olisi?',
          ],
        },
        {
          id: 'speaking-opinion-3',
          titleFi: 'Omalla autolla vai polkupyörällä? / Suomi matkailumaana',
          titleEn: 'Car or Bicycle? / Finland as a Tourist Destination',
          prepSeconds: 120,
          speakSeconds: 120,
          questions: ['Valitse A tai B.'],
          subChoices: [
            {
              label: 'A. Omalla autolla vai polkupyörällä?',
              questions: [
                'Liikutko mieluummin autolla vai pyörällä?',
                'Mitä hyviä ja huonoja puolia autoilussa on?',
                'Mitä hyviä ja huonoja puolia pyöräilyssä on?',
              ],
            },
            {
              label: 'B. Suomi matkailumaana',
              questions: [
                'Oletko matkustanut Suomessa vapaa-ajalla tai työn takia?',
                'Mikä matkakohde Suomessa on tehnyt vaikutuksen?',
                'Mitä hyviä puolia Suomessa on matkailijan kannalta?',
                'Mitä suomalaista matkakohdetta suosittelisit?',
              ],
            },
          ],
        },
      ],
    },
    vocabSummary: [
      { fi: 'matkustaa', en: 'to travel', bn: 'ভ্রমণ করা' },
      { fi: 'matka', en: 'trip/journey', bn: 'ভ্রমণ' },
      { fi: 'juna', en: 'train', bn: 'ট্রেন' },
      { fi: 'bussi', en: 'bus', bn: 'বাস' },
      { fi: 'lentokone', en: 'airplane', bn: 'বিমান' },
      { fi: 'laiva', en: 'ship/ferry', bn: 'জাহাজ' },
      { fi: 'auto', en: 'car', bn: 'গাড়ি' },
      { fi: 'polkupyörä', en: 'bicycle', bn: 'সাইকেল' },
      { fi: 'lippu', en: 'ticket', bn: 'টিকিট' },
      { fi: 'aikataulu', en: 'schedule', bn: 'সময়সূচি' },
      { fi: 'asema', en: 'station', bn: 'স্টেশন' },
      { fi: 'lentokenttä', en: 'airport', bn: 'বিমানবন্দর' },
      { fi: 'satama', en: 'harbor', bn: 'বন্দর' },
      { fi: 'myöhässä', en: 'late/delayed', bn: 'বিলম্বিত' },
      { fi: 'reitti', en: 'route', bn: 'রুট' },
      { fi: 'vaihto', en: 'transfer/change', bn: 'সংযোগ' },
      { fi: 'matkavakuutus', en: 'travel insurance', bn: 'ভ্রমণ বীমা' },
      { fi: 'matkatavarat', en: 'luggage', bn: 'মালপত্র' },
      { fi: 'turismi', en: 'tourism', bn: 'পর্যটন' },
      { fi: 'loma', en: 'holiday/vacation', bn: 'ছুটি' },
    ],
    usefulPhrases: [
      { fi: 'Milloin juna lähtee?', en: 'When does the train leave?', bn: 'ট্রেনটি কখন ছাড়বে?' },
      { fi: 'Tämä on minun paikkani.', en: 'This is my seat.', bn: 'এটি আমার আসন।' },
      { fi: 'Olen eksynyt.', en: "I'm lost." },
      { fi: 'Voitteko auttaa minua?', en: 'Can you help me?', bn: 'আপনি কি আমাকে সাহায্য করতে পারবেন?' },
      { fi: 'Onko tämä oikea bussi?', en: 'Is this the right bus?', bn: 'এটি কি সঠিক বাস?' },
      { fi: 'Paljonko lippu maksaa?', en: 'How much does the ticket cost?', bn: 'টিকিটের দাম কত?' },
      { fi: 'Minulla on matkavakuutus.', en: 'I have travel insurance.', bn: 'আমার ভ্রমণ বীমা আছে।' },
      { fi: 'Haluaisin varata lipun.', en: 'I would like to book a ticket.', bn: 'আমি একটি টিকিট বুক করতে চাই।' },
      { fi: 'Lento oli myöhässä.', en: 'The flight was delayed.', bn: 'ফ্লাইট বিলম্বিত ছিল।' },
      { fi: 'Haluaisin tehdä reklamaation.', en: 'I would like to make a complaint.', bn: 'আমি একটি অভিযোগ করতে চাই।' },
    ],
    learnEverywhereTip: {
      title: 'VINKKI: Kuuntelun harjoittelu',
      body: [
        '1. Kuuntele kuin kuuntelisit musiikkia – anna sen virrata aivojesi läpi. Aivosi ovat kielenoppimiskone, joka kerää tietoa, vaikka et ymmärtäisi.',
        '2. Kuuntele suomalaista musiikkia. Sanojen ympärillä oleva musiikki auttaa muistamista.',
        '3. Kuuntele radiota tai podcasteja ruoanlaiton tai kotitöiden aikana.',
        '4. Katso lastenohjelmia – niissä puhutaan selkeästi.',
        '5. Katso suomalaisia elokuvia ja sarjoja suomenkielisillä tekstityksillä tai ilman.',
        '6. "Salakuuntele" ihmisiä bussissa, junassa tai kahvilassa. Yritä poimia avainsanoja.',
        '7. Tee monenlaisia asioita, joissa kuulet suomea – tapahtumia, harrastuksia.',
        '8. Harjoittele kuuntelemista meluisissa paikoissa, kuten kahviloissa. Testissäkin on taustamelua.',
        '9. Tee kuuntelemisesta luonnollinen osa päivittäistä rutiiniasi.',
        '10. Rentoudu! Kuuntele kuin kelluisit vedessä. Sinun ei tarvitse olla täydellinen.',
        'Muista: kun kuuntelet paljon, opit myös puhumaan paremmin. Lapsi oppii kuuntelemalla – niin voit sinäkin.',
      ],
    },
  },
  {
    id: 'yki-ch6',
    number: 6,
    titleFi: 'Terveys ja hyvinvointi',
    titleEn: 'Health and Wellbeing',
    pages: '166-196',
    theme: 'Terveys, hyvinvointi, terveydenhuollon palvelut, terveelliset elämäntavat, sairaudet ja lääketieteelliset tilanteet',
    grammarTopicIds: ['imperatiivi', 'perfekti', 'pluskvamperfekti', 'passiivi-imperfekti', 'kausatiiviverbit', 'nut-partisiippi', 'verbien-rektio'],
    reading: {
      vocabWarmup: {
        instructionsFi:
          'Valitse yksi seuraavista aiheista ja etsi siitä tietoa netistä. Käytä myös selkokielisiä sivustoja!',
        items: [
          {
            fi: 'Vaihtoehto 1: Terveellinen ruokavalio',
            en: 'Mistä terveellinen ruokavalio koostuu? Mitä hyötyä siitä on? Millaisia ongelmia epäterveellinen ruokavalio voi aiheuttaa?',
          },
          {
            fi: 'Vaihtoehto 2: Uni',
            en: 'Miksi ihmisen täytyy nukkua? Mitä hyötyä riittävästä unesta on? Millaisia ongelmia liian vähäinen uni voi aiheuttaa?',
          },
          {
            fi: 'Vaihtoehto 3: Liikunta',
            en: 'Kuinka paljon ihmisen pitäisi liikkua? Mitä hyötyä liikunnasta on? Millaisia ongelmia liikkumattomuus voi aiheuttaa?',
          },
        ],
        note: {
          title: 'VINKKI: Lue tekstejä ympärilläsi',
          body: [
            'Paras tapa oppia ymmärtämään tekstejä on lukea mahdollisimman paljon. Lue kylttejä, ilmoituksia, ohjeita, mainoksia, ilmaisjakelulehtiä ja verkkosivuja.',
            'Yksi tapa lisätä suomenkielistä lukemista on vaihtaa puhelimen tai laitteen kieli suomeksi.',
          ],
        },
      },
      practicePassages: [
        {
          id: 'reading-practice-1',
          titleFi: 'Selkä vetreäksi työergonomialla ja taukojumppalla',
          titleEn: 'Back Flexibility Through Work Ergonomics and Exercise Breaks',
          source: 'Verna Julkunen, Terveydeksi 2/2022',
          textFi:
            'Selkä ei tykkää paikallaolosta. Lyhyt taukojumppa pari kertaa päivässä pitää selän vetreänä niin kotikonttorissa kuin toimistollakin.\n\nKotona työskentely on heikentänyt monen toimistotyöläisen työergonomiaa. Etäpäivän jälkeen selkä saattaa olla normaaliakin jäykempi. Keho ei pidemmän päälle tykkää työnteosta läppärillä sohvalla tai keittiön pöydän ääressä.\n\nSäännöllistä etätyötä varten kannattaa tehdä pysyvä työpiste, jossa työtaso, näyttö ja työtuoli ovat sopivalla korkeudella ja työskentelyasento on hyvä. Hyvässä työasennossa hartiat ovat rennot, niska on suorassa ja työtuoli tukee ristiselkää.\n\nPidä taukoja työpäivän aikana. Keho jäykistyy nopeasti, jos koneen ääreltä ei päivän aikana liiku mihinkään. Hyväkään ergonomia ei korvaa liikettä. Nouse siis ylös kerran tunnissa, vaihda asentoa ja työskentele välillä seisten.\n\nVaikka istuminen on lihaksille lepotila, liittyy toimistotöissä istumiseen lihasten jännitystä. Istuminen hidastaa aineenvaihduntaa ja kuormittaa selkää. Tauot lisäävät aineenvaihduntaa lihasten ja nivelien lisäksi myös aivoissa. Tauon jälkeen ajatus kulkee usein paremmin ja keskittymiskykykin paranee.\n\nTaukojumppa on parasta lääkettä toimistotyöläisen jäykälle selälle ja niskalle. Jumit ja säryt johtuvat usein liiallisesta paikallaan olosta, jatkuvasta istumisesta tai seisomisesta johtuvasta yksipuolisesta kuormituksesta ja heikoista lihaksista. Lyhyt taukojumppa pari kertaa päivässä kuuluu jokaiseen työpäivään.',
          predictVocab: [
            { fi: 'selkä', en: 'back', bn: 'পিঠ' },
            { fi: 'ergonomia', en: 'ergonomics', bn: 'এরগোনমিক্স' },
            { fi: 'taukojumppa', en: 'exercise break', bn: 'বিরতির ব্যায়াম' },
            { fi: 'jäykkä', en: 'stiff', bn: 'শক্ত/আড়ষ্ট' },
            { fi: 'niska', en: 'neck', bn: 'ঘাড়' },
            { fi: 'hartiat', en: 'shoulders', bn: 'কাঁধ' },
            { fi: 'ristiselkä', en: 'lower back', bn: 'কোমর' },
            { fi: 'aineenvaihdunta', en: 'metabolism', bn: 'বিপাক' },
            { fi: 'jumit', en: 'stiffness/pain', bn: 'আড়ষ্টতা/ব্যথা' },
            { fi: 'säryt', en: 'aches', bn: 'ব্যথা' },
          ],
          tip: {
            title: 'VINKKI: Vastaa aina jotain',
            body: [
              'Sinun ei tarvitse ymmärtää kaikkea tekstistä – voit silti vastata kysymyksiin oikein. Jos et löydä vastausta, arvaa! Testissä on aina parempi arvata kuin jättää tyhjäksi.',
            ],
          },
          open: [
            {
              id: 'rp1-o1',
              questionFi: 'Miksi toimistotyöläisten työergonomia on huonontunut?',
              sampleAnswerFi: 'Kotona työskentely on heikentänyt sitä.',
            },
            {
              id: 'rp1-o2',
              questionFi: 'Miten toimistotyössä voi ehkäistä kehon jäykistymistä? Mainitse kaksi asiaa.',
              sampleAnswerFi: 'Tekemällä pysyvä työpiste ja pitämällä taukoja / nousemalla ylös kerran tunnissa.',
            },
            {
              id: 'rp1-o3',
              questionFi: 'Mitä haittaa istumisesta on?',
              sampleAnswerFi: 'Se hidastaa aineenvaihduntaa ja kuormittaa selkää.',
            },
            {
              id: 'rp1-o4',
              questionFi: 'Mitä hyötyä tauoista on?',
              sampleAnswerFi: 'Ne lisäävät aineenvaihduntaa, auttavat keskittymään ja ajatus kulkee paremmin.',
            },
            {
              id: 'rp1-o5',
              questionFi: 'Mistä toimistotyöläisten selkä- ja niskakivut usein johtuvat?',
              sampleAnswerFi:
                'Liiallisesta paikallaan olosta, jatkuvasta istumisesta tai seisomisesta johtuvasta yksipuolisesta kuormituksesta ja heikoista lihaksista.',
            },
          ],
        },
      ],
      testPassages: [
        {
          id: 'reading-test-1',
          titleFi: 'Apteekista kysyttyä',
          titleEn: 'Asked from the Pharmacy',
          textFi:
            'Mitä vanhentuneille lääkkeille pitäisi tehdä?\n\nVanhentuneiden lääkejätteiden kierrättäminen on ympäristön kannalta erittäin tärkeää. Vanhaksi menneet tai käyttämättä jääneet lääkkeet tulee aina palauttaa apteekkiin, josta ne toimitetaan hävitettäväksi. Lääkkeet voi tuoda apteekkiin esimerkiksi muovipussissa. Lääkejätteestä on eroteltava kuitenkin ruiskut ja neulat, elohopeaa sisältävät kuumemittarit sekä jodia sisältävät lääkeaineet. Myös syöpälääkkeet ja solunsalpaajat täytyy erotella muusta lääkejätteestä omaan pussiinsa. Apteekkiin ei tarvitse viedä vitamiineja, perusvoiteita ja tavallisia kuumemittareita ilman paristoa, vaan ne voi hävittää kotitalouden sekajätteen mukana.\n\nMiten lääkkeet tulee säilyttää?\n\nLääkkeet tulisi säilyttää niin, että ne ovat suojassa liialliselta lämmöltä ja kosteudelta. Säilytyspaikaksi kannattaa siis valita viileä ja kuiva paikka, johon aurinko ei paista suoraan. Tilapäinen lämpötilan nousu esimerkiksi kesähelteillä ei kuitenkaan vaikuta lääkkeiden tehoon tai turvallisuuteen. Lääkkeitä säilytetään jääkaapissa vain silloin, kun pakkauksessa näin ohjeistetaan.\n\nLähdin lomalla mökille kauas ihmisten ilmoilta ja unohdin lasten tulehduskipulääkkeet kotiin. Voinko antaa lapselle tarvittaessa pienen annoksen aikuisten kipulääkettä?\n\nPääsääntöisesti lapsille annetaan vain lasten lääkkeitä, mutta jos lääkkeen pakkausselosteessa on annostusohje lapsille iän ja painon mukaan, ne ovat ohjeita noudatettuina turvallisia. Jos lääke ei millään maistu lapselle, voi lääkkeen sekoittaa esim. pieneen määrään hedelmäsosetta.',
          mcq: [
            {
              id: 'rt1-q1',
              question: 'Vanhentuneet lääkkeet ja muu lääkejäte',
              options: [
                'viedään apteekkiin kaikki aina erikseen pussitettuina',
                'toimitetaan apteekkiin niin, että tietyt lääketyypit, ruiskut/neulat ja elohopealliset kuumemittarit on eroteltu',
                'hävitetään kotitalousjätteenä sekajätteen mukana',
              ],
              correctIndex: 1,
              explanation:
                'Vastaus: toimitetaan apteekkiin niin, että tietyt lääketyypit, ruiskut/neulat ja elohopealliset kuumemittarit on eroteltu.',
            },
            {
              id: 'rt1-q2',
              question: 'Lääkkeet tulee säilyttää',
              options: ['suojassa auringolta', 'suojattuna viileydeltä ja kuivuudelta', 'kesähelteillä jääkaapissa'],
              correctIndex: 0,
              explanation:
                'Vastaus: suojassa auringolta. Teksti sanoo "suojassa liialliselta lämmöltä ja kosteudelta" – mutta vaihtoehto a) on annetuista lähinnä oikea.',
            },
            {
              id: 'rt1-q3',
              question: 'Lapsille voi antaa',
              options: ['tarvittaessa hedelmänmakuista, sosemaista lääkettä', 'ainoastaan lasten lääkkeitä', 'aikuisten lääkkeitä, jos pakkausselosteessa on annostusohje myös lapsille'],
              correctIndex: 2,
              explanation: 'Vastaus: aikuisten lääkkeitä, jos pakkausselosteessa on annostusohje myös lapsille.',
            },
          ],
        },
        {
          id: 'reading-test-2',
          titleFi: 'Soita hätäkeskukseen 112',
          titleEn: 'Call the Emergency Center 112',
          source: 'sydanturva.fi (lyhennetty)',
          textFi:
            'Akuutin tai henkeä uhkaavan sairauden, sairaskohtauksen tai onnettomuuden yhteydessä soita aina yleiseen hätänumeroon 112. Soita hätänumeroon esimerkiksi seuraavissa tapauksissa, joissa tarvitset ambulanssia, palokuntaa tai poliisia:\n\nJoku on sairastunut äkillisesti.\n\nOlet itse joutunut onnettomuuteen tai huomaat onnettomuuden.\n\nRakennus on tulessa tai siitä tulee savua.\n\nHavaitset murron tai ryöstön.\n\nSoita hätänumeroon vain, jos tilanne on vakava. Kun soitat, käytä tervettä järkeä ja valmistaudu antamaan tietoja. Kun soitat hätänumeroon, kerro ensin, kuka olet, missä olet, mitä on tapahtunut ja kuinka monta henkilöä on sairastunut tai loukkaantunut.\n\nPuheluun vastaa hätäkeskuspäivystäjä, joka arvioi, tarvitsetko poliisia, palokuntaa vai ambulanssia. Hän arvioi myös lähetettävän avun kiireellisyyden. Hätäkeskuspäivystäjä ohjaa sinua myös tarvittaessa ensiavun antamisessa siihen asti, kunnes apu saapuu paikalle.',
          trueFalse: [
            {
              id: 'rt2-tf1',
              statementFi: 'Hätäkeskukseen saa soittaa vain, jos on tapahtunut onnettomuus.',
              answer: false,
              explanation: 'Teksti listaa useita syitä: äkillinen sairastuminen, onnettomuus, tulipalo, murto.',
            },
            {
              id: 'rt2-tf2',
              statementFi: 'Hätäkeskukseen täytyy soittaa, jos tarvitaan poliisia, ambulanssia tai palokuntaa.',
              answer: true,
              explanation: 'Teksti sanoo: "tarvitset ambulanssia, palokuntaa tai poliisia".',
            },
            {
              id: 'rt2-tf3',
              statementFi: 'Soittajan täytyy kertoa, miksi hän soittaa hätäkeskukseen.',
              answer: true,
              explanation: 'Teksti sanoo: "kerro ensin... mitä on tapahtunut".',
            },
            {
              id: 'rt2-tf4',
              statementFi: 'Soittajan täytyy arvioida hätäkeskukselle, kuinka kiireellisesti apua tarvitaan.',
              answer: false,
              explanation: 'Hätäkeskuspäivystäjä arvioi kiireellisyyden, ei soittaja.',
            },
          ],
        },
        {
          id: 'reading-test-3',
          titleFi: 'Nukkuminen vaikuttaa muistiin, aivoihin ja mielialaan',
          titleEn: 'Sleep Affects Memory, Brain, and Mood',
          textFi:
            'Jos haluat oppia uutta, muistaa hyvin ja pitää luovuuttasi yllä, huolehdi riittävästä yöunesta. Unen aikana aivosi lajittelevat ja tallentavat tietoa.\n\nSaatamme nukkua lyhyitä yöunia, jotta saisimme päivään lisää tunteja. Pidemmän päälle se ei kuitenkaan kannata. Hyvä yöuni edistää terveyttä ja kokonaisvaltaista hyvinvointia. Uni vaikuttaa esimerkiksi siihen, miten elimistö pitää yllä vastustuskykyä ja torjuu sairauksia, mutta unen merkitys on tärkeä myös aivoille, muistille ja mielialalle.\n\nUnen aikana elimistö lepää, mutta samaan aikaan aivot työskentelevät ahkerasti. Aivot tarvitsevat unta, jotta ne pystyvät käsittelemään edellisenä päivänä tapahtuneita asioita sekä lataamaan energiavarastojaan.\n\nKun nukkuu riittävästi, stressiä on vähemmän kuin väsyneenä. Uni myös auttaa käsittelemään tunteita. Voi sanoa, että hyvä uni palauttaa psyykkisen voiman ja vireyden. Jos nukkuu pitkään huonosti, se lisää monien sairauksien ja erilaisten tapaturmien riskiä, heikentää toimintakykyä ja huonontaa elämänlaatua.',
          open: [
            {
              id: 'rt3-o1',
              questionFi: 'Miksi uni on oppimisen kannalta tärkeää?',
              sampleAnswerFi: 'Unen aikana aivot lajittelevat ja tallentavat tietoa.',
            },
            {
              id: 'rt3-o2',
              questionFi: 'Miten uni vaikuttaa terveyteen?',
              sampleAnswerFi: 'Uni edistää terveyttä, vaikuttaa vastustuskykyyn ja auttaa torjumaan sairauksia.',
            },
            {
              id: 'rt3-o3',
              questionFi: 'Mitä aivot tekevät, kun ihminen nukkuu?',
              sampleAnswerFi: 'Ne käsittelevät edellisenä päivänä tapahtuneita asioita ja lataavat energiavarastoja.',
            },
            {
              id: 'rt3-o4',
              questionFi: 'Miten uni vaikuttaa mielenterveyteen?',
              sampleAnswerFi: 'Hyvä uni palauttaa psyykkisen voiman ja vireyden, vähentää stressiä ja auttaa käsittelemään tunteita.',
            },
          ],
        },
      ],
    },
    writing: {
      tip: {
        title: 'VINKKI: Kirjoita niin paljon kuin voit',
        body: [
          'Kirjoitustehtävissä on tärkeää kirjoittaa tarpeeksi. Vaikka tekstisi olisi virheetön, et voi saada hyvää arvosanaa, jos kirjoitat liian vähän. Kirjoita rohkeasti niin paljon kuin osaat ja tiedät.',
        ],
      },
      freewrite: {
        instructionsFi:
          'Harjoittele aloittamista ilman itsekritiikkiä. Älä käytä sanakirjaa tai muita apuvälineitä. Aseta ajastin ja valitse yksi aihe. Kirjoita 5 minuuttia mitä tahansa mieleen tulee.\n\nKirjoitettuasi mieti: Kuinka paljon tekstiä syntyi? Miltä tuntui kirjoittaa ilman suunnittelua?',
        rules: ['Älä mieti rakennetta.', 'Älä murehdi kielen oikeellisuudesta.', 'Älä poista mitään.'],
        topics: ['Terveelliset elämäntavat', 'Hyvinvointi', 'Mielenterveys', 'Sairastuminen', 'Hyvä kunto'],
      },
      groupIntro: {
        instructionsFi: 'Käykää läpi tekstejä luokkatovereiden kanssa:',
        questions: [
          'Lukekaa toistenne tekstit.',
          'Älä arvostele – ympyröi vain yksi kiinnostava sana tai fraasi. Mistä haluaisit kuulla lisää?',
          'Käytä ympyröityä sanaa/fraasia uutena otsikkona ja kirjoita vapaasti vielä 3 minuuttia.',
          'Vertaa uutta tekstiä ensimmäiseen. Miten se muuttui?',
        ],
      },
      practiceTasks: [
        {
          id: 'writing-practice-1',
          titleFi: 'Luonnostele tekstiä ja etsi uusia näkökulmia',
          instructionsFi:
            'Harjoittele tekstin tuottamista, vaikka aihe ei olisi tuttu tai kiinnostava. Ei sanakirjaa.\n\nValitse yksi aihe. Kirjoita 3 minuuttia kuvaillen aihetta: Mikä/mitä/millainen/millaista?\n\nKirjoita 3 minuuttia vertaillen aihetta: Mihin sitä voi verrata ja miten?\n\nKirjoita 3 minuuttia hyvistä ja/tai huonoista puolista: Mitä hyviä tai huonoja puolia asiassa on?\n\nLue kaikki kolmesta näkökulmasta kirjoittamasi. Muokkaa yhdeksi yhtenäiseksi tekstiksi.',
          bulletsFi: ['Terveellinen ruoka', 'Uni ja lepo', 'Liikunta'],
        },
      ],
      informalTasks: [
        {
          id: 'writing-test-informal-1',
          titleFi: 'Avunpyyntö ystävälle',
          instructionsFi: 'Olet sairas ja tarvitset apua. Kirjoita viesti, jossa kerrot, mikä on vialla ja miten ystäväsi voisi auttaa.',
        },
        {
          id: 'writing-test-informal-2',
          titleFi: 'Kysymys työkaverille',
          instructionsFi: 'Olet aloittanut uuden työpaikan etkä tiedä työterveyshuollosta. Kysy asiasta työkaverilta, joka työskentelee samassa yrityksessä.',
        },
        {
          id: 'writing-test-informal-3',
          titleFi: 'Viesti sairaalle naapurille',
          instructionsFi: 'Olet kuullut, että naapuri on sairaana kotona. Kirjoita ja kysy, miten hänellä menee, ja tarjoa apua.',
        },
        {
          id: 'writing-test-informal-4',
          titleFi: 'Kysymys sukulaiselle',
          instructionsFi: 'Sinulla on unihäiriöitä ja tiedät, että sukulaisesi kävi unipoliklinikalla. Kysy siitä.',
        },
        {
          id: 'writing-test-informal-5',
          titleFi: 'Viesti harrastuskaverille',
          instructionsFi: 'Kävit hierojalla, joka auttoi niska- ja hartiakipuihisi. Suosittele häntä ystävälle.',
        },
      ],
      formalTasks: [
        {
          id: 'writing-test-formal-1',
          titleFi: 'Viesti esihenkilölle',
          instructionsFi: 'Sinulla on tärkeä kokous, mutta olet sairas. Kirjoita ja selitä, miksi et pääse paikalle ja kuinka pitkään olet poissa.',
        },
        {
          id: 'writing-test-formal-2',
          titleFi: 'Viesti terveydenhuollon sähköiseen asiointiin',
          instructionsFi: 'Sinulla on ei-kiireellinen terveysongelma. Kuvaile oireet selkeästi, milloin ne alkoivat, ja kysy ainakin yksi kysymys.',
        },
        {
          id: 'writing-test-formal-3',
          titleFi: 'Valitus terveydenhuollon toiminnasta',
          instructionsFi: 'Sait huonoa hoitoa terveysasemalla. Kirjoita ja selitä, mitä tapahtui ja miten haluaisit asian korjattavan.',
        },
        {
          id: 'writing-test-formal-4',
          titleFi: 'Hammaslääkäriajan peruminen',
          instructionsFi: 'Sait muistutuksen hammaslääkäriajasta, joka ei sovi sinulle. Peru aika ja kerro haluavasi uuden ajan.',
        },
      ],
      opinionTopics: [
        {
          id: 'writing-opinion-1',
          titleFi: 'Terveydenhuollon palvelut',
          options: ['A. Suomalaisen terveydenhuollon hyvät ja huonot puolet', 'B. Hammaslääkärille pitäisi päästä nopeammin'],
        },
        {
          id: 'writing-opinion-2',
          titleFi: 'Terveellinen elämä',
          options: ['Terveelliset elämäntavat opitaan kotona'],
        },
        {
          id: 'writing-opinion-3',
          titleFi: 'Muita aiheita',
          options: [
            'Ihmisten täytyy syödä terveellisesti',
            'Liikunta on paras lääke',
            'Voiko mielenterveyden ongelmista puhua?',
            'Kaikkien ihmisten pitäisi viettää paljon aikaa luonnossa',
            'Kaikkien ihmisten pitäisi käydä kuntosalilla',
          ],
        },
      ],
    },
    listening: {
      tip: {
        title: 'VINKKI: Tunnista avainsanat',
        body: [
          'Avainsanat erottuvat muusta puheesta. Ne sanotaan selkeämmin, usein kovempaa ja usein korkeammalla äänenpainolla.',
        ],
      },
      repeatSentences: {
        instructionsFi: 'Kuuntele nämä lauseet kolme kertaa. Kiinnitä huomiota avainsanoihin.',
        sentences: [
          'Minkälaista vaivaa?',
          'Mua on huimannu aika lailla nyt tässä useemman päivän.',
          'Ihanko koko ajan?',
          'No pahinta se on aamulla, kun nousee sängystä.',
          'Onko oksentavaa oloa, päänsärkyä tai muuta sen tyyppistä?',
          'Ei oikeestaa.',
        ],
      },
      practicePassages: [
        {
          id: 'listening-practice-1',
          titleFi: 'Huimaus - lääkärin ja potilaan keskustelu',
          titleEn: 'Dizziness - Doctor and Patient Conversation',
          textFi: NO_TRANSCRIPT_NOTE,
          predictVocab: [
            { fi: 'huimaus', en: 'dizziness', bn: 'মাথা ঘোরা' },
            { fi: 'oire', en: 'symptom', bn: 'উপসর্গ' },
            { fi: 'päänsärky', en: 'headache', bn: 'মাথাব্যথা' },
            { fi: 'aamu', en: 'morning', bn: 'সকাল' },
            { fi: 'lääkäri', en: 'doctor', bn: 'ডাক্তার' },
            { fi: 'tutkimus', en: 'examination', bn: 'পরীক্ষা' },
            { fi: 'on huimannut', en: 'has been dizzy', bn: 'মাথা ঘুরেছে' },
            { fi: 'pahinta', en: 'the worst', bn: 'সবচেয়ে খারাপ' },
            { fi: 'aamulla', en: 'in the morning', bn: 'সকালে' },
            { fi: 'miltä tuntuu', en: 'how does it feel', bn: 'কেমন লাগছে' },
            { fi: 'ei se nyt varsinaisesti satu', en: "it doesn't really hurt" },
            { fi: 'mä en nyt näkis tässä mitään hälyttävää', en: "I don't see anything alarming here" },
            { fi: 'jos ei tällä mee ohi', en: "if this doesn't go away" },
            { fi: 'tuut sitten vaan uudestaan käymään', en: 'you just come back again', bn: 'তাহলে আবার এসো' },
          ],
        },
      ],
      testPassages: [
        {
          id: 'listening-test-1',
          titleFi: 'Ammattitaudit',
          titleEn: 'Occupational Diseases',
          textFi: NO_TRANSCRIPT_NOTE,
          mcq: [
            {
              id: 'lt1-q1',
              question: 'Kuinka moni työntekijä saa meluvamman vuosittain?',
              options: ['300', '400', '1000'],
              correctIndex: 0,
              explanation: 'Vastaus: 300.',
            },
            {
              id: 'lt1-q2',
              question: 'Miksi meluvamma on yleinen ammattitauti?',
              options: [
                'Työntekijät eivät käytä lainkaan kuulosuojaimia.',
                'Meluvamma syntyy aina hitaasti.',
                'Työntekijät eivät noudata työturvallisuusohjeita riittävän tarkasti.',
              ],
              correctIndex: 2,
              explanation: 'Vastaus: Työntekijät eivät noudata työturvallisuusohjeita riittävän tarkasti.',
            },
            {
              id: 'lt1-q3',
              question: 'Meluvammojen määrä on selvästi vähentynyt',
              options: ['rakennustyömailla', 'Puolustusvoimissa', 'paperitehtaissa'],
              correctIndex: 0,
              explanation: 'Vastaus: rakennustyömailla.',
            },
          ],
        },
        {
          id: 'listening-test-2',
          titleFi: 'Hammastapaturma',
          titleEn: 'Dental Accident',
          textFi: NO_TRANSCRIPT_NOTE,
          trueFalse: [
            {
              id: 'lt2-tf1',
              statementFi: 'Asiakas haluaa selvittää, kuuluuko hammashoito hänen työterveyshuoltoonsa.',
              answer: true,
              explanation: 'Asiakas haluaa selvittää tämän.',
            },
            {
              id: 'lt2-tf2',
              statementFi: 'Hammaslääkärikäynti ei onnistu työterveyshuoltoa tarjoavalla lääkäriasemalla.',
              answer: false,
              explanation: 'Hammashoito onnistuu työterveyshuoltoa tarjoavalla lääkäriasemalla.',
            },
            {
              id: 'lt2-tf3',
              statementFi: 'Asiakaspalvelija kyselee lisätietoja hammastapaturmasta ja sen synnystä.',
              answer: true,
              explanation: 'Asiakaspalvelija kysyy lisätietoja.',
            },
            {
              id: 'lt2-tf4',
              statementFi: 'Soittaja on satuttanut hampaansa työpaikalla.',
              answer: false,
              explanation: 'Soittaja ei satuttanut hammastaan työpaikalla.',
            },
            {
              id: 'lt2-tf5',
              statementFi: 'Lääkärikeskus varaa asiakkaan puolesta ajan hammasklinikalle.',
              answer: true,
              explanation: 'Lääkärikeskus varaa ajan asiakkaan puolesta.',
            },
          ],
        },
        {
          id: 'listening-test-3',
          titleFi: 'Suola ja verenpaine',
          titleEn: 'Salt and Blood Pressure',
          textFi: NO_TRANSCRIPT_NOTE,
          open: [
            {
              id: 'lt3-o1',
              questionFi: 'Mitä haittaa liiallisesta suolan käytöstä on?',
              sampleAnswerFi: 'Se nostaa verenpainetta ja lisää sairauksien riskiä.',
            },
            {
              id: 'lt3-o2',
              questionFi: 'Kuinka suurella osalla yli 30-vuotiaista suomalaisista on kohonnut verenpaine?',
              sampleAnswerFi: 'Tämä vastaus riippuu kuunneltavasta äänitteestä – kirjan oma malli ei anna tähän tarkkaa vastausta.',
            },
            {
              id: 'lt3-o3',
              questionFi: 'Miksi joissakin kulttuureissa ei esiinny verenpainetautia?',
              sampleAnswerFi: 'Koska ruokavalio on vähäsuolainen.',
            },
            {
              id: 'lt3-o4',
              questionFi: 'Mitä tapahtuisi, jos kaikki suomalaiset noudattaisivat suolankäyttösuosituksia?',
              sampleAnswerFi: 'Verenpainetautien määrä vähenisi merkittävästi.',
            },
            {
              id: 'lt3-o5',
              questionFi: 'Kuinka paljon suolaa saisi syödä päivässä?',
              sampleAnswerFi: 'Enintään 5 grammaa.',
            },
            {
              id: 'lt3-o6',
              questionFi: 'Kuinka paljon miehet syövät suolaa keskimäärin päivässä?',
              sampleAnswerFi: 'Noin 9-10 grammaa.',
            },
          ],
        },
      ],
    },
    speaking: {
      tip: {
        title: 'VINKKI: Puhu jotain, vaikka et ymmärtäisi',
        body: ['Jos et ymmärrä, on parempi sanoa "Anteeksi, en ymmärrä" kuin olla hiljaa. Mutta älä vastaa näin joka kysymykseen!'],
      },
      repeatPhrases: {
        instructionsFi: 'YKI-testissä et aina ymmärrä kaikkea. Harjoittele fraaseja, joita voit käyttää, kun et ymmärrä. Kuuntele ja toista jokainen fraasi kolme kertaa.',
        phrases: [
          'Anteeksi, nyt en ymmärrä.',
          'Anteeks, en ymmärtänyt.',
          'Anteeks, voitko toistaa?',
          'Anteeks, voiksä toistaa?',
          'Nyt en tainnu ihan ymmärtää. Selitätkö vielä?',
          'Hei nyt mä en tajunnu. Voitsä toistaa?',
          'Anteeks, mä olin ihan ajatuksissani. Sanotko vielä?',
        ],
      },
      groupIntro: {
        instructionsFi: 'Keskustelkaa ryhmissä tai pareittain:',
        questions: [
          'Mitä olet yleensä tehnyt näissä tilanteissa?',
          'Miten keskustelukumppanisi on reagoinut?',
          'Mikä olisi paras strategia?',
          'Mitä aiot sanoa tulevaisuudessa?',
        ],
      },
      practiceConversationTasks: [
        {
          id: 'speaking-practice-conv-1',
          titleFi: 'Mitä sanot, jos et ymmärrä',
          scenarioFi: 'Sinulla on todella paha selkäkipu. Olet fysioterapeutilla. Jos et ymmärrä jotain, käytä lämmittelytehtävän fraaseja.',
          turns: [
            { instructionFi: 'Vastaa kieltävästi.', seconds: 5 },
            { instructionFi: 'Vastaa myöntävästi.', seconds: 10 },
            { instructionFi: 'Kerro selkäkivusta.', seconds: 20 },
            { instructionFi: 'Vastaa. Keksi itse.', seconds: 20 },
            { instructionFi: 'Vastaa. Keksi itse.', seconds: 15 },
            { instructionFi: 'Vastaa kieltävästi.', seconds: 10 },
            { instructionFi: 'Vastaa. Keksi itse.', seconds: 20 },
            { instructionFi: 'Vastaa. Keksi itse.', seconds: 20 },
            { instructionFi: 'Vastaa.', seconds: 20 },
            { instructionFi: 'Vastaa.', seconds: 15 },
          ],
        },
      ],
      testLongTasks: [
        {
          id: 'speaking-test-1',
          titleFi: 'Hyvinvoinnista huolehtiminen',
          titleEn: 'Taking Care of Wellbeing',
          prepSeconds: 60,
          speakSeconds: 90,
          questions: ['Miten pidät huolta hyvinvoinnistasi?', 'Mikä auttaa sinua voimaan hyvin?', 'Haluaisitko muuttaa elämäntapojasi?'],
        },
        {
          id: 'speaking-test-2',
          titleFi: 'Suomalainen terveydenhuolto',
          titleEn: 'Finnish Healthcare',
          prepSeconds: 60,
          speakSeconds: 90,
          questions: [
            'Oletko käynyt Suomessa lääkärissä, neuvolassa tai apteekissa?',
            'Millainen kokemus se oli?',
            'Oletko huomannut eroja Suomen ja muiden maiden välillä?',
          ],
        },
        {
          id: 'speaking-test-3',
          titleFi: 'Hyvä lääkäri',
          titleEn: 'A Good Doctor',
          prepSeconds: 60,
          speakSeconds: 90,
          questions: [
            'Onko sinulla ollut erityisen hyvä lääkäri?',
            'Millainen on mielestäsi hyvä lääkäri?',
            'Mitä tarvitaan, jotta lääkäri voi tehdä työnsä hyvin?',
          ],
        },
      ],
      conversationTasks: [
        {
          id: 'speaking-conv-1',
          titleFi: 'Terveystarkastuksessa',
          scenarioFi: 'Olet terveystarkastuksessa.',
          turns: [
            { instructionFi: 'Reagoi sopivalla tavalla.', seconds: 10 },
            { instructionFi: 'Vastaa myöntävästi.', seconds: 5 },
            { instructionFi: 'Vastaa kysymykseen.', seconds: 30 },
            { instructionFi: 'Vastaa kysymykseen.', seconds: 15 },
            { instructionFi: 'Vastaa kysymykseen.', seconds: 20 },
            { instructionFi: 'Vastaa kysymykseen.', seconds: 20 },
            { instructionFi: 'Vastaa kysymykseen.', seconds: 20 },
          ],
        },
        {
          id: 'speaking-conv-2',
          titleFi: 'Soitto hätänumeroon',
          scenarioFi: 'Soitat numeroon 112, koska olet ensimmäisenä onnettomuuspaikalla - autokolarissa.',
          turns: [
            { instructionFi: 'Kerro, kuka olet, missä olet ja miksi soitat.', seconds: 20 },
            { instructionFi: 'Vastaa kysymykseen.', seconds: 10 },
            { instructionFi: 'Vastaa myöntävästi.', seconds: 5 },
            { instructionFi: 'Vastaa kieltävästi.', seconds: 10 },
            { instructionFi: 'Vastaa myöntävästi. Pyydä lisäohjeita.', seconds: 15 },
            { instructionFi: 'Vastaa myöntävästi.', seconds: 10 },
            { instructionFi: 'Vastaa myöntävästi.', seconds: 10 },
            { instructionFi: 'Sano, että ymmärsit, ja kysy vielä ohjeita verenvuodon suhteen.', seconds: 20 },
            { instructionFi: 'Reagoi sopivalla tavalla ja hyvästele.', seconds: 10 },
          ],
        },
      ],
      situationalTasks: [
        {
          id: 'speaking-situation-1-1',
          setLabel: 'Tilanteet 1',
          scenarioFi: 'Sinulla on työpäivä, mutta heräät sairaana. Soita töihin ja selitä.',
          seconds: 15,
        },
        {
          id: 'speaking-situation-1-2',
          setLabel: 'Tilanteet 1',
          scenarioFi:
            'Olet terveysasemalla. Sinulla on aika kello 9.20, mutta et tiedä lääkärin nimeä tai huonetta. Kysy työntekijältä.',
          seconds: 15,
        },
        {
          id: 'speaking-situation-1-3',
          setLabel: 'Tilanteet 1',
          scenarioFi: 'Odotat laboratoriossa. Vieressäsi istuva henkilö valittaa pitkästä jonotuksesta. Vastaa.',
          seconds: 10,
        },
        {
          id: 'speaking-situation-1-4',
          setLabel: 'Tilanteet 1',
          scenarioFi: 'Käyt hammaslääkärillä. Selitä ongelmasi.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-1-5',
          setLabel: 'Tilanteet 1',
          scenarioFi: 'Lääkäri kysyy, onko sinulla stressiä. Vastaa.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-2-1',
          setLabel: 'Tilanteet 2',
          scenarioFi: 'Sinulla on terveysongelma ja tarvitset lääkettä. Pyydä apua apteekista.',
          seconds: 15,
        },
        {
          id: 'speaking-situation-2-2',
          setLabel: 'Tilanteet 2',
          scenarioFi: 'Ystäväsi on juuri muuttanut Suomeen ja tarvitsee lääkäriajan. Hän ei tiedä, miten se onnistuu. Neuvo häntä.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-2-3',
          setLabel: 'Tilanteet 2',
          scenarioFi: 'Työkaveri kertoo kärsivänsä unettomuudesta. Hän pyytää vinkkejä. Neuvo häntä.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-2-4',
          setLabel: 'Tilanteet 2',
          scenarioFi: 'Ystäväsi kertoo olevansa raskaana. Onnittele ja kysy jokin kysymys.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-2-5',
          setLabel: 'Tilanteet 2',
          scenarioFi: 'Sinulla on kova hammassärky. Soita hammaslääkäripäivystykseen. Kerro, milloin se alkoi ja millaista se on.',
          seconds: 30,
        },
      ],
      opinionTasks: [
        {
          id: 'speaking-opinion-1',
          titleFi: 'Terveydenhoidon hinta',
          titleEn: 'The Cost of Healthcare',
          prepSeconds: 120,
          speakSeconds: 120,
          questions: [
            'Kuinka paljon itse maksat terveydenhoidosta?',
            'Onko terveydenhoito mielestäsi liian kallista?',
            'Pitäisikö terveydenhoidon olla ilmaista?',
            'Mitä palveluita yhteiskunnan pitäisi tarjota kaikille?',
          ],
        },
        {
          id: 'speaking-opinion-2',
          titleFi: 'Ihmiset viettävät liikaa aikaa puhelimella ja muilla älylaitteilla',
          titleEn: 'People Spend Too Much Time on Phones and Other Smart Devices',
          prepSeconds: 120,
          speakSeconds: 120,
          questions: [
            'Mitä hyötyjä ja haittoja älylaitteista on?',
            'Pitäisikö ruutuaikaa vähentää?',
            'Mikä on sopiva ruutuaika lapselle? Aikuiselle?',
          ],
        },
        {
          id: 'speaking-opinion-3',
          titleFi: 'Nukkuminen ja liikkuminen',
          titleEn: 'Sleep and Exercise',
          prepSeconds: 120,
          speakSeconds: 120,
          questions: ['Valitse A tai B.'],
          subChoices: [
            {
              label: 'A. Ihmisten pitäisi nukkua enemmän',
              questions: [
                'Kuinka paljon itse nukut?',
                'Mikä on sopiva määrä unta?',
                'Pitäisikö ihmisten nukkua enemmän?',
                'Arvostetaanko unta tarpeeksi?',
              ],
            },
            {
              label: 'B. Jokaisen pitäisi harrastaa liikuntaa vähintään tunti päivässä',
              questions: [
                'Kuinka paljon itse liikut?',
                'Mikä on sopiva määrä liikuntaa?',
                'Mitä yhteiskunta voi tehdä, jotta ihmiset liikkuisivat enemmän?',
              ],
            },
          ],
        },
      ],
    },
    vocabSummary: [
      { fi: 'terveys', en: 'health', bn: 'স্বাস্থ্য' },
      { fi: 'hyvinvointi', en: 'wellbeing', bn: 'সুস্থতা' },
      { fi: 'sairaus', en: 'illness', bn: 'অসুখ' },
      { fi: 'oire', en: 'symptom', bn: 'উপসর্গ' },
      { fi: 'lääkäri', en: 'doctor', bn: 'ডাক্তার' },
      { fi: 'hoito', en: 'treatment', bn: 'চিকিৎসা' },
      { fi: 'lääke', en: 'medicine', bn: 'ওষুধ' },
      { fi: 'apteekki', en: 'pharmacy', bn: 'ফার্মেসি' },
      { fi: 'uni', en: 'sleep', bn: 'ঘুম' },
      { fi: 'liikunta', en: 'exercise', bn: 'ব্যায়াম' },
      { fi: 'selkä', en: 'back', bn: 'পিঠ' },
      { fi: 'niska', en: 'neck', bn: 'ঘাড়' },
      { fi: 'pääkipu / päänsärky', en: 'headache', bn: 'মাথাব্যথা' },
      { fi: 'huimaus', en: 'dizziness', bn: 'মাথা ঘোরা' },
      { fi: 'verenpaine', en: 'blood pressure', bn: 'রক্তচাপ' },
      { fi: 'kipu', en: 'pain', bn: 'ব্যথা' },
      { fi: 'sairaala', en: 'hospital', bn: 'হাসপাতাল' },
      { fi: 'terveysasema', en: 'health center', bn: 'স্বাস্থ্যকেন্দ্র' },
      { fi: 'hätäkeskus', en: 'emergency center', bn: 'জরুরি কেন্দ্র' },
      { fi: 'ambulanssi', en: 'ambulance', bn: 'অ্যাম্বুলেন্স' },
      { fi: 'työterveys', en: 'occupational health', bn: 'কর্মস্থলের স্বাস্থ্যসেবা' },
    ],
    usefulPhrases: [
      { fi: 'Minulla on...', en: 'I have...', bn: 'আমার আছে...' },
      { fi: 'Minua särkee...', en: '...hurts (me)', bn: 'আমার ব্যথা করছে...' },
      { fi: 'Minulla on kipua...', en: 'I have pain in...', bn: 'আমার ব্যথা আছে...' },
      { fi: 'Minua huimaa.', en: 'I feel dizzy.', bn: 'আমার মাথা ঘুরছে।' },
      { fi: 'Minulla on kuumetta.', en: 'I have a fever.', bn: 'আমার জ্বর আছে।' },
      { fi: 'Olen sairas.', en: 'I am sick.', bn: 'আমি অসুস্থ।' },
      { fi: 'Tarvitsen lääkärin.', en: 'I need a doctor.', bn: 'আমার একজন ডাক্তার দরকার।' },
      { fi: 'Soita hätänumeroon!', en: 'Call the emergency number!', bn: 'জরুরি নম্বরে কল করো!' },
      { fi: 'Anteeksi, en ymmärrä.', en: "Sorry, I don't understand." },
      { fi: 'Voitko toistaa?', en: 'Can you repeat?', bn: 'আপনি কি আবার বলতে পারবেন?' },
    ],
    learnEverywhereTip: {
      title: 'Terveyteen liittyviä vinkkejä testipäivään',
      body: [
        'Terveelliset elämäntavat auttavat oppimisessa.',
        'Uni auttaa muistamaan: nuku riittävästi ennen testiä. Aivot toimivat paremmin hyvin nukuttuna.',
        'Tauot ja liikkuminen auttavat keskittymään: älä istu monta tuntia paikallasi. Pidä taukoja ja mene ulos.',
        'Ruoka auttaa jaksamaan: syö säännöllisesti, syö hyvä aamupala ja ota eväät mukaan testipäivänä.',
      ],
    },
  },
  {
    id: 'yki-ch7',
    number: 7,
    titleFi: 'Työ',
    titleEn: 'Work',
    pages: '198-215',
    theme: 'Työ, työllisyys, työnhaku, työpaikkaviestintä ja työelämä',
    grammarTopicIds: ['passiivi-preesens', 'konditionaali', 'relatiivilauseet', 'verbien-rektio', 'asiointikieli', 'nominalisointi', 'referointi'],
    reading: {
      vocabWarmup: {
        instructionsFi: 'Etsi verkosta oman alasi työpaikkailmoitus ja kirjoita ylös sen sanastoa. Tässä yleistä ja hyödyllistä sanastoa aloitukseksi – lisää mukaan myös oman alasi termejä.',
        items: [
          { fi: 'haetaan', en: 'we are looking for', bn: 'খোঁজা হচ্ছে' },
          { fi: 'työpaikka', en: 'job', bn: 'চাকরি' },
          { fi: 'hakemus', en: 'application', bn: 'আবেদন' },
          { fi: 'kokemus', en: 'experience', bn: 'অভিজ্ঞতা' },
          { fi: 'koulutus', en: 'education', bn: 'শিক্ষা' },
          { fi: 'palkka', en: 'salary', bn: 'বেতন' },
          { fi: 'työaika', en: 'working hours', bn: 'কর্মঘণ্টা' },
          { fi: 'tehtävät', en: 'duties', bn: 'দায়িত্ব' },
          { fi: 'vaatimukset', en: 'requirements', bn: 'প্রয়োজনীয়তা' },
          { fi: 'aikaisempi kokemus', en: 'previous experience', bn: 'পূর্ব অভিজ্ঞতা' },
          { fi: 'suositukset', en: 'references', bn: 'রেফারেন্স' },
          { fi: 'työsuhde', en: 'employment', bn: 'কর্মসম্পর্ক' },
          { fi: 'määräaikainen', en: 'fixed-term', bn: 'নির্দিষ্ট মেয়াদী' },
          { fi: 'vakituinen', en: 'permanent', bn: 'স্থায়ী' },
          { fi: 'osa-aikainen', en: 'part-time', bn: 'খণ্ডকালীন' },
          { fi: 'kokoaikainen', en: 'full-time', bn: 'পূর্ণকালীন' },
          { fi: 'etätyö', en: 'remote work', bn: 'দূরবর্তী কাজ' },
          { fi: 'työmatka', en: 'commute', bn: 'যাতায়াত' },
        ],
      },
      practicePassages: [
        {
          id: 'reading-practice-1',
          titleFi: 'Työpaikkailmoitusten vaatimukset ja palkkatiedot ärsyttävät: "Haetaan energiaa, hymyä ja yli-ihmistä"',
          textFi: NO_ARTICLE_NOTE,
          tip: {
            title: 'Kysymyssanat näissä kysymyksissä',
            body: [
              '1. Missä palkkatiedot pitäisi työnhakijoiden mielestä ilmoittaa selvästi? — kysymyssana: Missä',
              '2. Keitä työpaikkailmoitusten liian suuret vaatimukset ärsyttävät? — kysymyssana: Keitä',
              '3. Millaisia ihmisiä työnhakijan mukaan nykyään halutaan töihin? Mainitse vähintään kolme asiaa. — kysymyssana: Millaisia',
              '4. Miksi työnhakijan ja työnantajan mielestä työpaikkailmoituksessa on tärkeää ilmoittaa palkka? Mainitse kaksi asiaa. — kysymyssana: Miksi',
              '5. Mistä työnhakijat joutuvat nyt etsimään palkkatietoja? — kysymyssana: Mistä',
              'Harjoittele vastaamaan täsmälleen siihen, mitä kysytään – kysymyssana kertoo, millaista vastausta tarvitaan (paikka, henkilö, syy jne.).',
            ],
          },
        },
      ],
      testPassages: [],
    },
    writing: {
      freewrite: {
        instructionsFi: 'Osaatko työhön liittyvää sanastoa? Tutustu näihin sanoihin.',
        rules: [],
        topics: [
          'työpaikka (workplace)',
          'työnantaja (employer)',
          'työntekijä (employee)',
          'työhakemus (job application)',
          'työhaastattelu (job interview)',
          'palkka (salary)',
          'työaika (working hours)',
          'työsopimus (employment contract)',
          'loma (vacation)',
          'sairausloma (sick leave)',
          'irtisanoutua (to resign)',
          'irtisanominen (termination)',
          'vuorotyö (shift work)',
          'etätyö (remote work)',
          'suositus (recommendation/reference)',
        ],
      },
      groupIntro: {
        instructionsFi: 'Tässä luvussa harjoitellaan näitä viestityyppejä:',
        questions: [
          'Epämuodollinen viesti: viestit työkavereille työasioista, vuoronvaihtopyynnöt, sairauspoissaoloilmoitus esihenkilölle, onnittelu työkaverille.',
          'Muodollinen viesti: työhakemukset, kyselyt avoimista työpaikoista, viestit HR:lle palkasta tai sopimuksista, irtisanoutumiskirjeet.',
          'Mielipide: työn ja vapaa-ajan tasapaino, etätyön hyvät ja huonot puolet, urakehitys ja elinikäinen oppiminen, työkulttuurien erot.',
        ],
      },
      practiceTasks: [
        {
          id: 'writing-practice-1',
          titleFi: 'Viesti työkaverille',
          instructionsFi: 'Sinun täytyy vaihtaa työvuoroa. Kirjoita viesti työkaverille ja kysy, voisiko hän vaihtaa vuoroa kanssasi.',
          sampleFi:
            'Hei [name]!\n\nMulla olisi pyyntö. Onko mahdollista vaihtaa vuoroja? Mulla on tärkeä meno ensi perjantaina, enkä pääse töihin. Voisitko ottaa mun perjantaivuoron? Mä voin tehdä sun maanantain tilalle.\n\nKiitos paljon!\n\nTerveisin, [your name]',
        },
        {
          id: 'writing-practice-2',
          titleFi: 'Sairauspoissaolo',
          instructionsFi: 'Olet sairas etkä pääse töihin. Kirjoita viesti esihenkilöllesi.',
          sampleFi: 'Hei!\n\nOlen sairas enkä pääse tänään töihin. Menen lääkäriin ja ilmoitan, kuinka pitkä sairausloma tulee.\n\nTerveisin, [your name]',
        },
        {
          id: 'writing-practice-3',
          titleFi: 'Työhakemus',
          instructionsFi: 'Kirjoita muodollinen työhakemus.',
          sampleFi:
            'Hei!\n\nOlen kiinnostunut työpaikastanne, jonka näin [where you saw the ad]. Olen koulutukseltani [your profession] ja minulla on [X years] vuoden kokemus alalta.\n\nTällä hetkellä työskentelen [current employer], mutta etsin uusia haasteita. Olen ahkera, luotettava ja hyvä tiimityössä.\n\nLiitän mukaan ansioluetteloni ja suositukset. Toivottavasti voin tulla haastatteluun.\n\nYstävällisin terveisin,\n[Your name]',
        },
      ],
      informalTasks: [
        {
          id: 'writing-informal-1',
          titleFi: 'Epämuodolliset viestiaiheet',
          instructionsFi: 'Tämän luvun epämuodollisissa viesteissä harjoitellaan esimerkiksi:',
          bulletsFi: [
            'Viestit työkavereille työasioista',
            'Vuoronvaihtopyynnöt',
            'Sairauspoissaoloilmoitus esihenkilölle',
            'Onnittelu työkaverille',
          ],
        },
      ],
      formalTasks: [
        {
          id: 'writing-formal-1',
          titleFi: 'Muodolliset viestiaiheet',
          instructionsFi: 'Tämän luvun muodollisissa viesteissä harjoitellaan esimerkiksi:',
          bulletsFi: ['Työhakemukset', 'Kyselyt avoimista työpaikoista', 'Viestit HR:lle palkasta tai sopimuksista', 'Irtisanoutumiskirjeet'],
        },
      ],
      opinionTopics: [
        {
          id: 'writing-opinion-1',
          titleFi: 'Mielipideaiheita',
          options: ['Työn ja vapaa-ajan tasapaino', 'Etätyön hyvät ja huonot puolet', 'Urakehitys ja elinikäinen oppiminen', 'Työkulttuurien erot'],
        },
      ],
    },
    listening: {
      practicePassages: [
        {
          id: 'listening-practice-1',
          titleFi: 'Kuuntelutehtävien sanasto ja aiheet',
          titleEn: 'Listening Task Vocabulary and Topics',
          textFi:
            'Tämän luvun kuuntelutehtäviä ei sisältynyt saatuun lähdemateriaaliin äänitteineen ja vastauksineen. Harjoittele omatoimisesti kuuntelemalla työelämään liittyviä keskusteluja, esimerkiksi näistä aiheista: työhaastattelu, työpaikan esittely, keskustelu työkavereiden kanssa, työpaikkailmoitus, työterveyshuolto.',
          predictVocab: [
            { fi: 'työhaastattelu', en: 'job interview', bn: 'চাকরির সাক্ষাৎকার' },
            { fi: 'työtehtävät', en: 'job duties', bn: 'কাজের দায়িত্ব' },
            { fi: 'kokemus', en: 'experience', bn: 'অভিজ্ঞতা' },
            { fi: 'koulutus', en: 'education', bn: 'শিক্ষা' },
            { fi: 'palkkatoive', en: 'salary expectation', bn: 'প্রত্যাশিত বেতন' },
            { fi: 'työaika', en: 'working hours', bn: 'কর্মঘণ্টা' },
            { fi: 'työyhteisö', en: 'work community', bn: 'কর্মসম্প্রদায়' },
            { fi: 'esihenkilö / pomo', en: 'supervisor / boss', bn: 'ঊর্ধ্বতন / বস' },
            { fi: 'tiimi', en: 'team', bn: 'দল' },
            { fi: 'projekti', en: 'project', bn: 'প্রকল্প' },
            { fi: 'palaveri / kokous', en: 'meeting', bn: 'সভা' },
            { fi: 'työmatka', en: 'business trip', bn: 'কর্মভ্রমণ' },
            { fi: 'urakehitys', en: 'career development', bn: 'কর্মজীবনের উন্নতি' },
          ],
        },
      ],
      testPassages: [],
    },
    speaking: {
      groupIntro: {
        instructionsFi: 'Tässä luvussa harjoitellaan näitä puhumisen aihepiirejä:',
        questions: [
          'Kertominen: Kerro työstäsi/opiskelustasi; Millainen on hyvä työpaikka?; Kerro työmatkastasi.',
          'Keskustelu: Keskustelu työhaastattelussa; Keskustelu työkaverin kanssa; Keskustelu esihenkilön kanssa.',
          'Tilannetehtävät: Soita sairauspoissaolosta; Kysy työaikamuutoksesta; Pyydä palkankorotusta; Kerro uudesta työpaikasta.',
          'Mielipide: Työn ja vapaa-ajan tasapaino; Etätyö vs. toimistotyö; Pitäisikö työn olla hauskaa?; Miten löytää unelmien työ?',
        ],
      },
      practiceSituationalTasks: [
        {
          id: 'speaking-practice-situation-1',
          scenarioFi: 'Olet aloittanut uuden työpaikan. Lounastauolla työkaveri kysyy sinusta. Vastaa.',
          seconds: 20,
          modelAnswerFi:
            'Hei! Mä oon [name]. Mä aloitin täällä viime viikolla. Oon [your profession]. Tää on mun ensimmäinen viikko, ja mä oon tykännyt kovasti. Kaikki on ollut ystävällisiä.',
        },
      ],
      testLongTasks: [
        {
          id: 'speaking-test-1',
          titleFi: 'Kerro työstäsi',
          titleEn: 'Tell About Your Work',
          prepSeconds: 60,
          speakSeconds: 90,
          questions: ['Millainen on sinun työsi?', 'Mitä teet työssäsi?', 'Mistä pidät työssäsi? Mistä et?', 'Millaisia työkavereita sinulla on?'],
        },
      ],
      conversationTasks: [],
      sampleDialogues: [
        {
          id: 'speaking-dialogue-1',
          titleFi: 'Työhaastattelussa',
          titleEn: 'In a Job Interview',
          turns: [
            { speaker: 'Haastattelija', fi: 'Hei, tervetuloa haastatteluun. Kerro vähän itsestäsi.' },
            { speaker: 'Sinä', fi: 'Hei, kiitos! Olen [name]. Olen koulutukseltani [profession]. Olen työskennellyt alalla [X] vuotta.' },
            { speaker: 'Haastattelija', fi: 'Miksi haet tähän työhön?' },
            { speaker: 'Sinä', fi: 'Olen kiinnostunut tästä työstä, koska se vastaa hyvin osaamistani ja tarjoaa uusia haasteita.' },
            { speaker: 'Haastattelija', fi: 'Millaisia vahvuuksia sinulla on?' },
            { speaker: 'Sinä', fi: 'Olen ahkera, tarkka ja pystyn työskentelemään hyvin tiimissä.' },
            { speaker: 'Haastattelija', fi: 'Milloin voisit aloittaa?' },
            { speaker: 'Sinä', fi: 'Voisin aloittaa heti, jos sopii.' },
          ],
        },
        {
          id: 'speaking-dialogue-2',
          titleFi: 'Soitto sairauspoissaolosta',
          titleEn: 'Calling in Sick',
          turns: [
            { speaker: 'Esihenkilö', fi: 'Nieminen.' },
            { speaker: 'Sinä', fi: 'Hei, tässä [name]. Soitan, koska olen sairas enkä pääse töihin tänään.' },
            { speaker: 'Esihenkilö', fi: 'Oletko käynyt lääkärissä?' },
            { speaker: 'Sinä', fi: 'Menin lääkäriin ja sain sairauslomaa kolmeksi päiväksi.' },
            { speaker: 'Esihenkilö', fi: 'Ilmoita sitten, kun tiedät enemmän.' },
            { speaker: 'Sinä', fi: 'Kyllä, ilmoitan heti kun tiedän lisää.' },
          ],
        },
        {
          id: 'speaking-dialogue-3',
          titleFi: 'Avoimesta työpaikasta kysyminen',
          titleEn: 'Asking About a Job Opening',
          turns: [
            { speaker: 'HR', fi: 'Hyvää päivää, miten voin auttaa?' },
            { speaker: 'Sinä', fi: 'Hei, soitin kysyäkseni avoimesta työpaikasta.' },
            { speaker: 'HR', fi: 'Mihin tehtävään olette kiinnostunut?' },
            { speaker: 'Sinä', fi: 'Olen kiinnostunut [job title] -tehtävästä.' },
            { speaker: 'HR', fi: 'Onko teillä kokemusta alalta?' },
            { speaker: 'Sinä', fi: 'Kyllä, minulla on [X] vuoden kokemus.' },
            { speaker: 'HR', fi: 'Lähettäkää hakemus sähköpostilla.' },
            { speaker: 'Sinä', fi: 'Kiitos, lähetän sen tänään.' },
          ],
        },
      ],
      situationalTasks: [
        {
          id: 'speaking-situation-1',
          scenarioFi: 'Soita esihenkilöllesi sairauspoissaolosta.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-2',
          scenarioFi: 'Kysy esihenkilöltäsi mahdollisuudesta muuttaa työaikaasi.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-3',
          scenarioFi: 'Pyydä esihenkilöltäsi palkankorotusta.',
          seconds: 30,
        },
        {
          id: 'speaking-situation-4',
          scenarioFi: 'Kerro ystävällesi uudesta työpaikastasi.',
          seconds: 30,
        },
      ],
      opinionTasks: [
        {
          id: 'speaking-opinion-1',
          titleFi: 'Työn ja vapaa-ajan tasapaino',
          titleEn: 'Work-Life Balance',
          prepSeconds: 120,
          speakSeconds: 120,
          questions: [
            'Onko sinun mielestäsi tärkeää, että työ ja vapaa-aika ovat tasapainossa?',
            'Miten itse pidät huolta tasapainosta?',
            'Mitä tapahtuu, jos työtä on liikaa?',
            'Pitäisikö työnantajien auttaa työntekijöitä löytämään tasapaino?',
          ],
        },
        {
          id: 'speaking-opinion-2',
          titleFi: 'Muita mielipideaiheita',
          titleEn: 'Other Opinion Topics',
          prepSeconds: 120,
          speakSeconds: 120,
          questions: ['Etätyö vs. toimistotyö', 'Pitäisikö työn olla hauskaa?', 'Miten löytää unelmien työ?'],
        },
      ],
    },
    vocabSummary: [
      { fi: 'työ', en: 'work/job', bn: 'কাজ' },
      { fi: 'työpaikka', en: 'workplace', bn: 'কর্মস্থল' },
      { fi: 'työntekijä', en: 'employee', bn: 'কর্মী' },
      { fi: 'työnantaja', en: 'employer', bn: 'নিয়োগকর্তা' },
      { fi: 'työkaveri / kollega', en: 'colleague', bn: 'সহকর্মী' },
      { fi: 'esihenkilö / pomo', en: 'supervisor/boss', bn: 'ঊর্ধ্বতন / বস' },
      { fi: 'työhakemus', en: 'job application', bn: 'চাকরির আবেদন' },
      { fi: 'työhaastattelu', en: 'job interview', bn: 'চাকরির সাক্ষাৎকার' },
      { fi: 'ansioluettelo / CV', en: 'resume/CV', bn: 'জীবনবৃত্তান্ত (সিভি)' },
      { fi: 'palkka', en: 'salary', bn: 'বেতন' },
      { fi: 'työaika', en: 'working hours', bn: 'কর্মঘণ্টা' },
      { fi: 'työsopimus', en: 'employment contract', bn: 'কর্মচুক্তি' },
      { fi: 'loma', en: 'vacation', bn: 'ছুটি' },
      { fi: 'sairausloma', en: 'sick leave', bn: 'অসুস্থতাজনিত ছুটি' },
      { fi: 'irtisanoutua', en: 'to resign', bn: 'পদত্যাগ করা' },
      { fi: 'irtisanominen', en: 'termination', bn: 'চাকরিচ্যুতি' },
      { fi: 'työtön', en: 'unemployed', bn: 'বেকার' },
      { fi: 'kokemus', en: 'experience', bn: 'অভিজ্ঞতা' },
      { fi: 'koulutus', en: 'education', bn: 'শিক্ষা' },
      { fi: 'suositus', en: 'reference', bn: 'রেফারেন্স' },
      { fi: 'määräaikainen', en: 'fixed-term', bn: 'নির্দিষ্ট মেয়াদী' },
      { fi: 'vakituinen', en: 'permanent', bn: 'স্থায়ী' },
      { fi: 'osa-aikainen', en: 'part-time', bn: 'খণ্ডকালীন' },
      { fi: 'kokoaikainen', en: 'full-time', bn: 'পূর্ণকালীন' },
      { fi: 'vuorotyö', en: 'shift work', bn: 'শিফটে কাজ' },
      { fi: 'etätyö', en: 'remote work', bn: 'দূরবর্তী কাজ' },
      { fi: 'projekti', en: 'project', bn: 'প্রকল্প' },
      { fi: 'palaveri / kokous', en: 'meeting', bn: 'সভা' },
      { fi: 'koulutus (työssä)', en: '(job) training', bn: '(কর্মস্থলে) প্রশিক্ষণ' },
      { fi: 'urakehitys', en: 'career development', bn: 'কর্মজীবনের উন্নতি' },
      { fi: 'työterveys', en: 'occupational health', bn: 'কর্মস্থলের স্বাস্থ্যসেবা' },
      { fi: 'työmatka', en: 'commute / business trip', bn: 'যাতায়াত / কর্মভ্রমণ' },
    ],
    usefulPhrases: [
      { fi: 'Olen töissä...', en: 'I work at...', bn: 'আমি ... কাজ করি।' },
      { fi: 'Työskentelen...', en: 'I work as...', bn: 'আমি কাজ করি ... হিসেবে।' },
      { fi: 'Minulla on kokemusta...', en: 'I have experience in...', bn: 'আমার অভিজ্ঞতা আছে...' },
      { fi: 'Olen hakenut työtä...', en: 'I have applied for a job...', bn: 'আমি চাকরির আবেদন করেছি...' },
      { fi: 'Haluaisin hakea työpaikkaanne.', en: 'I would like to apply for your job.', bn: 'আমি আপনাদের চাকরির জন্য আবেদন করতে চাই।' },
      { fi: 'Milloin voin tulla haastatteluun?', en: 'When can I come for an interview?', bn: 'আমি কখন সাক্ষাৎকারে আসতে পারি?' },
      { fi: 'Olen sairas enkä pääse töihin.', en: "I am sick and can't come to work." },
      { fi: 'Haluaisin vaihtaa vuoroa.', en: 'I would like to change shifts.', bn: 'আমি শিফট পরিবর্তন করতে চাই।' },
      { fi: 'Paljonko palkka on?', en: 'How much is the salary?', bn: 'বেতন কত?' },
      { fi: 'Millaisia työtehtäviä on?', en: 'What are the job duties?', bn: 'কাজের দায়িত্ব কী কী?' },
      { fi: 'Onko työ määräaikainen vai vakituinen?', en: 'Is the job fixed-term or permanent?', bn: 'চাকরিটি কি নির্দিষ্ট মেয়াদী নাকি স্থায়ী?' },
      { fi: 'Tarvitsen työtodistuksen.', en: 'I need a work certificate.', bn: 'আমার একটি কর্ম-সনদ দরকার।' },
      { fi: 'Olen kiinnostunut...', en: 'I am interested in...', bn: 'আমি আগ্রহী...' },
      { fi: 'Hakemukseni on liitteenä.', en: 'My application is attached.', bn: 'আমার আবেদনপত্র সংযুক্ত আছে।' },
      { fi: 'Ansioluetteloni on liitteenä.', en: 'My CV is attached.', bn: 'আমার সিভি সংযুক্ত আছে।' },
      { fi: 'Odotan innolla haastattelua.', en: 'I look forward to the interview.', bn: 'আমি সাক্ষাৎকারের অপেক্ষায় আছি।' },
      { fi: 'Toivottavasti kuulen pian teistä.', en: 'I hope to hear from you soon.', bn: 'আশা করি শীঘ্রই আপনাদের কাছ থেকে শুনতে পাব।' },
      { fi: 'Olen myöhässä.', en: 'I am late.', bn: 'আমি দেরিতে আছি।' },
      { fi: 'Tulen kohta.', en: "I'll come soon." },
      { fi: 'Minulla on palaveri.', en: 'I have a meeting.', bn: 'আমার একটি সভা আছে।' },
      { fi: 'Lounastauko on klo 12.', en: 'Lunch break is at 12.', bn: 'দুপুরের খাবারের বিরতি ১২টায়।' },
      { fi: 'Tein työni valmiiksi.', en: 'I finished my work.', bn: 'আমি আমার কাজ শেষ করেছি।' },
      { fi: 'Tarvitsen apua.', en: 'I need help.', bn: 'আমার সাহায্য দরকার।' },
      { fi: 'Voisitko auttaa?', en: 'Could you help?', bn: 'আপনি কি সাহায্য করতে পারবেন?' },
    ],
  },
  {
    id: 'yki-ch8',
    number: 8,
    titleFi: 'Ympäristö',
    titleEn: 'Environment',
    pages: '216-243',
    theme: 'Ympäristö, luonto, kierrätys, ilmastonmuutos, kestävä kehitys ja ympäristönsuojelu',
    grammarTopicIds: ['passiivi-preesens', 'imperatiivi', 'konditionaali', 'nominalisointi', 'argumentointi', 'lauseenvastikkeet'],
    reading: {
      vocabWarmup: {
        instructionsFi: 'Osaatko ympäristöön liittyvää sanastoa? Selvitä, mitä seuraavat sanat tarkoittavat.',
        items: [
          { fi: 'ympäristö', en: 'environment', bn: 'পরিবেশ' },
          { fi: 'luonto', en: 'nature', bn: 'প্রকৃতি' },
          { fi: 'ilmasto', en: 'climate', bn: 'জলবায়ু' },
          { fi: 'ilmastonmuutos', en: 'climate change', bn: 'জলবায়ু পরিবর্তন' },
          { fi: 'saastuminen', en: 'pollution', bn: 'দূষণ' },
          { fi: 'jäte', en: 'waste', bn: 'বর্জ্য' },
          { fi: 'kierrättää', en: 'to recycle', bn: 'পুনর্ব্যবহার করা' },
          { fi: 'lajitella', en: 'to sort', bn: 'বাছাই করা' },
          { fi: 'biojäte', en: 'biowaste', bn: 'জৈব বর্জ্য' },
          { fi: 'sekajäte', en: 'mixed waste', bn: 'মিশ্র বর্জ্য' },
          { fi: 'energiansäästö', en: 'energy saving', bn: 'জ্বালানি সাশ্রয়' },
          { fi: 'uusiutuva energia', en: 'renewable energy', bn: 'নবায়নযোগ্য জ্বালানি' },
          { fi: 'kestävä kehitys', en: 'sustainable development', bn: 'টেকসই উন্নয়ন' },
          { fi: 'luonnonvarat', en: 'natural resources', bn: 'প্রাকৃতিক সম্পদ' },
          { fi: 'ympäristönsuojelu', en: 'environmental protection', bn: 'পরিবেশ সংরক্ষণ' },
          { fi: 'ekologinen', en: 'ecological', bn: 'পরিবেশগত' },
          { fi: 'hiilijalanjälki', en: 'carbon footprint', bn: 'কার্বন পদচিহ্ন' },
          { fi: 'jätteiden lajittelu', en: 'waste sorting', bn: 'বর্জ্য বাছাই' },
          { fi: 'pullonpalautus', en: 'bottle return', bn: 'বোতল ফেরত' },
          { fi: 'kierrätyspiste', en: 'recycling point', bn: 'পুনর্ব্যবহার কেন্দ্র' },
          { fi: 'komposti', en: 'compost', bn: 'কম্পোস্ট' },
          { fi: 'sähköauto', en: 'electric car', bn: 'বৈদ্যুতিক গাড়ি' },
          { fi: 'julkinen liikenne', en: 'public transport', bn: 'গণপরিবহন' },
          { fi: 'lähiruoka', en: 'local food', bn: 'স্থানীয় খাবার' },
          { fi: 'luomuruoka', en: 'organic food', bn: 'জৈব খাবার' },
          { fi: 'kertakäyttö', en: 'disposable', bn: 'একবার ব্যবহারযোগ্য' },
          { fi: 'muovipussi', en: 'plastic bag', bn: 'প্লাস্টিক ব্যাগ' },
          { fi: 'kangaskassi', en: 'cloth bag', bn: 'কাপড়ের ব্যাগ' },
          { fi: 'vedensäästö', en: 'water saving', bn: 'পানি সাশ্রয়' },
        ],
      },
      practicePassages: [
        {
          id: 'reading-practice-1',
          titleFi: 'Ympäristöteemat',
          titleEn: 'Environmental Themes',
          textFi: NO_ARTICLE_NOTE,
          open: [
            {
              id: 'rp1-o1',
              questionFi: 'Miksi jätteiden lajittelu on tärkeää?',
              sampleAnswerFi: 'Se vähentää ympäristön kuormitusta ja säästää luonnonvaroja.',
            },
            {
              id: 'rp1-o2',
              questionFi: 'Mitä hyötyä kierrättämisestä on?',
              sampleAnswerFi: 'Kierrättäminen vähentää jätteen määrää ja säästää energiaa.',
            },
            {
              id: 'rp1-o3',
              questionFi: 'Miten ihmiset voivat vähentää ilmastonmuutosta?',
              sampleAnswerFi: 'Käyttämällä vähemmän autoa, säästämällä energiaa ja kierrättämällä.',
            },
          ],
        },
      ],
      testPassages: [],
    },
    writing: {
      freewrite: {
        instructionsFi: 'Kertaa ympäristösanastoa ennen kirjoittamista.',
        rules: [],
        topics: [
          'ympäristö (environment)',
          'luonto (nature)',
          'ilmastonmuutos (climate change)',
          'jäte (waste)',
          'kierrättää (to recycle)',
          'lajitella (to sort)',
          'kestävä kehitys (sustainable development)',
          'hiilijalanjälki (carbon footprint)',
          'uusiutuva energia (renewable energy)',
          'kertakäyttö (disposable)',
        ],
      },
      groupIntro: {
        instructionsFi: 'Tässä luvussa harjoitellaan näitä viestityyppejä:',
        questions: [
          'Epämuodollinen viesti: viesti ystävälle ympäristöteoista; kierrätys- tai energiansäästövinkkien ehdottaminen.',
          'Muodollinen viesti: valitus ympäristöongelmista naapurustossa; ehdotus kaupungille ympäristöparannuksista.',
          'Mielipide: Pitäisikö kaikkien kierrättää? Ilmastonmuutos - mitä voimme tehdä? Ovatko sähköautot ratkaisu? Pitäisikö muovipussit kieltää?',
        ],
      },
      practiceTasks: [
        {
          id: 'writing-practice-1',
          titleFi: 'Viesti ystävälle',
          instructionsFi: 'Olet aloittanut jätteiden lajittelun ja kierrättämisen. Haluat kannustaa ystävääsi. Kirjoita viesti.',
          sampleFi:
            'Hei [name]!\n\nMä aloitin viime viikolla jätteiden lajittelun ja kierrättämisen. Se on tosi helppoa! Nyt mä lajittelen biojätteen, muovin, kartongin ja lasin. Suosittelen, että aloitat sinäkin. Se on hyväksi ympäristölle.\n\nTerveisin, [your name]',
        },
        {
          id: 'writing-practice-2',
          titleFi: 'Ehdotus kaupungille',
          instructionsFi: 'Olet sitä mieltä, että alueellasi pitäisi olla enemmän kierrätyspisteitä. Kirjoita kaupungille.',
          sampleFi:
            'Hei!\n\nAsun [area] ja olen huomannut, että tällä alueella on liian vähän kierrätyspisteitä. Asukkaita on paljon, mutta lähin kierrätyspiste on kaukana. Toivoisin, että kaupunki lisäisi kierrätyspisteitä tällä alueella.\n\nYstävällisin terveisin,\n[Your name]',
        },
        {
          id: 'writing-practice-3',
          titleFi: 'Mielipide: Muovin käyttöä pitäisi vähentää',
          instructionsFi: 'Kirjoita mielipideteksti aiheesta: muovin käyttöä pitäisi vähentää.',
          sampleFi:
            'Mielestäni muovin käyttöä pitäisi vähentää, koska muovi saastuttaa luontoa ja valtameriä. Muovi hajoaa hyvin hitaasti, ja se on vaarallista eläimille.\n\nVoimme vähentää muovin käyttöä monella tavalla: käyttämällä kangaskasseja muovipussien sijaan, ostamalla tuotteita, joissa on vähemmän pakkausta, ja kierrättämällä muovit.\n\nMyös kaupat ja yritykset voivat vähentää muovin käyttöä. Monet kaupat ovat jo vähentäneet muovipusseja, mutta vielä voitaisiin tehdä enemmän.\n\nMuovin vähentäminen on jokaisen vastuu. Pienet teot, kuten oman kahvikupin käyttö, voivat tehdä suuren eron.',
        },
      ],
      informalTasks: [
        {
          id: 'writing-informal-1',
          titleFi: 'Epämuodolliset viestiaiheet',
          instructionsFi: 'Tämän luvun epämuodollisissa viesteissä harjoitellaan esimerkiksi:',
          bulletsFi: ['Viesti ystävälle ympäristöteoista', 'Kierrätys- tai energiansäästövinkkien ehdottaminen'],
        },
      ],
      formalTasks: [
        {
          id: 'writing-formal-1',
          titleFi: 'Muodolliset viestiaiheet',
          instructionsFi: 'Tämän luvun muodollisissa viesteissä harjoitellaan esimerkiksi:',
          bulletsFi: ['Valitus ympäristöongelmista naapurustossa', 'Ehdotus kaupungille ympäristöparannuksista'],
        },
      ],
      opinionTopics: [
        {
          id: 'writing-opinion-1',
          titleFi: 'Mielipideaiheita',
          options: ['Pitäisikö kaikkien kierrättää?', 'Ilmastonmuutos - mitä voimme tehdä?', 'Ovatko sähköautot ratkaisu?', 'Pitäisikö muovipussit kieltää?'],
        },
      ],
    },
    listening: {
      practicePassages: [
        {
          id: 'listening-practice-1',
          titleFi: 'Kuuntelutehtävien sanasto ja aiheet',
          titleEn: 'Listening Task Vocabulary and Topics',
          textFi:
            'Tämän luvun kuuntelutehtäviä ei sisältynyt saatuun lähdemateriaaliin äänitteineen ja vastauksineen. Harjoittele omatoimisesti kuuntelemalla ympäristöaiheisia keskusteluja, esimerkiksi näistä aiheista: uutinen ilmastonmuutoksesta, keskustelu kierrätyksestä, mainos ympäristöystävällisistä tuotteista, haastattelu ympäristöaktivistin kanssa, kaupungin tiedote jätehuollosta.',
          predictVocab: [
            { fi: 'kierrätys', en: 'recycling', bn: 'পুনর্ব্যবহার' },
            { fi: 'ympäristöystävällinen', en: 'environmentally friendly', bn: 'পরিবেশবান্ধব' },
            { fi: 'saasteet', en: 'emissions/pollutants', bn: 'দূষক পদার্থ' },
            { fi: 'kasvihuoneilmiö', en: 'greenhouse effect', bn: 'গ্রিনহাউস প্রভাব' },
            { fi: 'luonnon monimuotoisuus', en: 'biodiversity', bn: 'জীববৈচিত্র্য' },
            { fi: 'ekosysteemi', en: 'ecosystem', bn: 'বাস্তুতন্ত্র' },
            { fi: 'ilmastopolitiikka', en: 'climate policy', bn: 'জলবায়ু নীতি' },
            { fi: 'hiilineutraali', en: 'carbon neutral', bn: 'কার্বন নিরপেক্ষ' },
          ],
        },
      ],
      testPassages: [],
    },
    speaking: {
      groupIntro: {
        instructionsFi: 'Tässä luvussa harjoitellaan näitä puhumisen aihepiirejä:',
        questions: [
          'Kertominen: Miten kierrätät kotona?; Millainen on sinun ympäristöystävällisyytesi?; Kerro suomalaisesta luonnosta.',
          'Keskustelu: Keskustelu ympäristöasioista; Keskustelu kierrätyksestä.',
          'Tilannetehtävät: Kerro naapurille, miten jätteet lajitellaan; Ehdota ystävälle, miten voi säästää energiaa.',
          'Mielipide: Pitäisikö kaikkien kierrättää?; Ilmastonmuutos - mitä voimme tehdä?; Ovatko sähköautot ratkaisu?',
        ],
      },
      testLongTasks: [
        {
          id: 'speaking-test-1',
          titleFi: 'Miten kierrätät kotona?',
          titleEn: 'How Do You Recycle at Home?',
          prepSeconds: 60,
          speakSeconds: 90,
          questions: [
            'Lajitteletko jätteitä kotona?',
            'Millaisia jätteitä lajittelet?',
            'Miksi kierrätys on tärkeää?',
            'Haluaisitko tehdä enemmän ympäristön hyväksi?',
          ],
        },
      ],
      conversationTasks: [],
      situationalTasks: [
        {
          id: 'speaking-situation-1',
          scenarioFi: 'Kerro naapurille, miten jätteet lajitellaan.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-2',
          scenarioFi: 'Ehdota ystävälle, miten voi säästää energiaa.',
          seconds: 20,
        },
      ],
      opinionTasks: [
        {
          id: 'speaking-opinion-1',
          titleFi: 'Ilmastonmuutos on suurin uhka maapallolle',
          titleEn: 'Climate Change Is the Biggest Threat to the Planet',
          prepSeconds: 120,
          speakSeconds: 120,
          questions: ['Oletko samaa mieltä?', 'Miksi ilmastonmuutos on vaarallinen?', 'Mitä ihmiset voivat tehdä?', 'Pitäisikö hallitusten tehdä enemmän?'],
        },
      ],
    },
    vocabSummary: [
      { fi: 'ympäristö', en: 'environment', bn: 'পরিবেশ' },
      { fi: 'luonto', en: 'nature', bn: 'প্রকৃতি' },
      { fi: 'ilmasto', en: 'climate', bn: 'জলবায়ু' },
      { fi: 'ilmastonmuutos', en: 'climate change', bn: 'জলবায়ু পরিবর্তন' },
      { fi: 'saastuminen', en: 'pollution', bn: 'দূষণ' },
      { fi: 'jäte', en: 'waste', bn: 'বর্জ্য' },
      { fi: 'kierrättää', en: 'to recycle', bn: 'পুনর্ব্যবহার করা' },
      { fi: 'lajitella', en: 'to sort', bn: 'বাছাই করা' },
      { fi: 'biojäte', en: 'biowaste', bn: 'জৈব বর্জ্য' },
      { fi: 'sekajäte', en: 'mixed waste', bn: 'মিশ্র বর্জ্য' },
      { fi: 'energia', en: 'energy', bn: 'জ্বালানি' },
      { fi: 'uusiutuva', en: 'renewable', bn: 'নবায়নযোগ্য' },
      { fi: 'kestävä', en: 'sustainable', bn: 'টেকসই' },
      { fi: 'suojella', en: 'to protect', bn: 'রক্ষা করা' },
      { fi: 'luonnonvarat', en: 'natural resources', bn: 'প্রাকৃতিক সম্পদ' },
      { fi: 'hiilijalanjälki', en: 'carbon footprint', bn: 'কার্বন পদচিহ্ন' },
      { fi: 'ekologinen', en: 'ecological', bn: 'পরিবেশগত' },
      { fi: 'ympäristöystävällinen', en: 'environmentally friendly', bn: 'পরিবেশবান্ধব' },
      { fi: 'komposti', en: 'compost', bn: 'কম্পোস্ট' },
      { fi: 'kertakäyttö', en: 'disposable', bn: 'একবার ব্যবহারযোগ্য' },
      { fi: 'lähiruoka', en: 'local food', bn: 'স্থানীয় খাবার' },
      { fi: 'luomuruoka', en: 'organic food', bn: 'জৈব খাবার' },
    ],
    usefulPhrases: [
      { fi: 'On tärkeää suojella luontoa.', en: "It's important to protect nature." },
      { fi: 'Kierrätys on helppoa.', en: 'Recycling is easy.', bn: 'পুনর্ব্যবহার করা সহজ।' },
      { fi: 'Lajittelen jätteet kotona.', en: 'I sort waste at home.', bn: 'আমি বাসায় বর্জ্য বাছাই করি।' },
      { fi: 'Meidän pitäisi vähentää muovin käyttöä.', en: 'We should reduce plastic use.', bn: 'আমাদের প্লাস্টিকের ব্যবহার কমানো উচিত।' },
      { fi: 'Olen ympäristötietoinen.', en: 'I am environmentally conscious.', bn: 'আমি পরিবেশ সচেতন।' },
      { fi: 'Käytän kangaskasseja.', en: 'I use cloth bags.', bn: 'আমি কাপড়ের ব্যাগ ব্যবহার করি।' },
      { fi: 'Säästän energiaa sammuttamalla valot.', en: 'I save energy by turning off lights.', bn: 'আমি বাতি বন্ধ করে জ্বালানি সাশ্রয় করি।' },
      { fi: 'Ilmastonmuutos on vakava ongelma.', en: 'Climate change is a serious problem.', bn: 'জলবায়ু পরিবর্তন একটি গুরুতর সমস্যা।' },
    ],
  },
  {
    id: 'yki-ch9',
    number: 9,
    titleFi: 'Yhteiskunta',
    titleEn: 'Society',
    pages: '244-273',
    theme: 'Yhteiskunta, kansalaisuus, hallitus, politiikka, sosiaalipalvelut ja yhteisö',
    grammarTopicIds: ['passiivi-preesens', 'sivulauseet', 'johtimet', 'asiointikieli', 'argumentointi', 'referointi', 'verbien-rektio'],
    reading: {
      vocabWarmup: {
        instructionsFi: 'Osaatko yhteiskuntaan liittyvää sanastoa? Selvitä, mitä seuraavat sanat tarkoittavat.',
        items: [
          { fi: 'yhteiskunta', en: 'society', bn: 'সমাজ' },
          { fi: 'kansalainen', en: 'citizen', bn: 'নাগরিক' },
          { fi: 'kansalaisuus', en: 'citizenship', bn: 'নাগরিকত্ব' },
          { fi: 'äänestäminen', en: 'voting', bn: 'ভোট দেওয়া' },
          { fi: 'vaalit', en: 'elections', bn: 'নির্বাচন' },
          { fi: 'politiikka', en: 'politics', bn: 'রাজনীতি' },
          { fi: 'poliitikko', en: 'politician', bn: 'রাজনীতিবিদ' },
          { fi: 'puolue', en: 'political party', bn: 'রাজনৈতিক দল' },
          { fi: 'hallitus', en: 'government', bn: 'সরকার' },
          { fi: 'eduskunta', en: 'parliament', bn: 'পার্লামেন্ট' },
          { fi: 'laki', en: 'law', bn: 'আইন' },
          { fi: 'oikeus', en: 'right / justice', bn: 'অধিকার / ন্যায়বিচার' },
          { fi: 'velvollisuus', en: 'duty / obligation', bn: 'দায়িত্ব / কর্তব্য' },
          { fi: 'tasa-arvo', en: 'equality', bn: 'সমতা' },
          { fi: 'oikeudenmukaisuus', en: 'fairness/justice', bn: 'ন্যায্যতা' },
          { fi: 'yhdenvertaisuus', en: 'equality', bn: 'সমতা / সমান অধিকার' },
          { fi: 'demokratia', en: 'democracy', bn: 'গণতন্ত্র' },
          { fi: 'verot', en: 'taxes', bn: 'কর' },
          { fi: 'sosiaaliturva', en: 'social security', bn: 'সামাজিক নিরাপত্তা' },
          { fi: 'Kela', en: 'Social Insurance Institution', bn: 'কেলা (সামাজিক বীমা প্রতিষ্ঠান)' },
          { fi: 'maahanmuutto', en: 'immigration', bn: 'অভিবাসন' },
          { fi: 'kotoutuminen', en: 'integration', bn: 'একীভূতকরণ / সমাজে অভিযোজন' },
          { fi: 'syrjintä', en: 'discrimination', bn: 'বৈষম্য' },
        ],
      },
      practicePassages: [
        {
          id: 'reading-practice-1',
          titleFi: 'Yhteiskunnalliset aiheet',
          titleEn: 'Societal Topics',
          textFi: NO_ARTICLE_NOTE,
          open: [
            {
              id: 'rp1-o1',
              questionFi: 'Mitä tarkoittaa demokratia?',
              sampleAnswerFi: 'Demokratia tarkoittaa, että kansalaiset saavat osallistua päätöksentekoon äänestämällä.',
            },
            {
              id: 'rp1-o2',
              questionFi: 'Miksi äänestäminen on tärkeää?',
              sampleAnswerFi: 'Äänestäminen on tärkeää, koska se on tapa vaikuttaa yhteiskuntaan ja päättää, kuka tekee päätöksiä.',
            },
            {
              id: 'rp1-o3',
              questionFi: 'Mitä yhteiskunnan palveluita Suomessa on?',
              sampleAnswerFi: 'Koulutus, terveydenhuolto, sosiaaliturva ja julkinen liikenne.',
            },
          ],
        },
      ],
      testPassages: [],
    },
    writing: {
      freewrite: {
        instructionsFi: 'Kertaa yhteiskuntaan liittyvää sanastoa ennen kirjoittamista.',
        rules: [],
        topics: [
          'kansalaisuus (citizenship)',
          'äänestäminen (voting)',
          'vaalit (elections)',
          'hallitus (government)',
          'laki (law)',
          'tasa-arvo (equality)',
          'demokratia (democracy)',
          'sosiaaliturva (social security)',
          'maahanmuutto (immigration)',
          'kotoutuminen (integration)',
        ],
      },
      groupIntro: {
        instructionsFi: 'Tässä luvussa harjoitellaan näitä viestityyppejä:',
        questions: [
          'Epämuodollinen viesti: viesti äänestämisestä tai poliittisista asioista; keskustelu sosiaalipalveluista.',
          'Muodollinen viesti: viesti Kelaan tai Migriin; valitus julkisista palveluista; hakemus kansalaisuudesta tai etuuksista.',
          'Mielipide: Pitäisikö äänestämisen olla pakollista? Onko Suomi tasa-arvoinen maa? Pitäisikö maahanmuuttoa helpottaa? Verot - liian korkeat vai tarpeellisia?',
        ],
      },
      practiceTasks: [
        {
          id: 'writing-practice-1',
          titleFi: 'Viesti ystävälle: Äänestäminen',
          instructionsFi: 'Kirjoita ystävällesi viesti äänestämisestä ja kutsu hänet mukaan äänestämään kanssasi.',
          sampleFi:
            'Hei [name]!\n\nTiedätkö, että meillä on pian vaalit? Mun mielestä on tärkeää, että jokainen äänestää. Se on tapa vaikuttaa yhteiskuntaan. Ajattelin mennä äänestämään ensi viikolla. Tuletko mukaan?\n\nTerveisin, [your name]',
        },
        {
          id: 'writing-practice-2',
          titleFi: 'Viesti Kelaan',
          instructionsFi: 'Sinulla on kysymys asumistuesta. Kirjoita viesti Kelaan.',
          sampleFi:
            'Hei!\n\nOlen [name], henkilötunnus [number]. Kirjoitan, koska minulla on kysymys asumistuesta. Olen muuttanut uuteen asuntoon, ja haluaisin tietää, vaikuttaako se asumistukeen.\n\nYstävällisin terveisin,\n[Your name]',
        },
        {
          id: 'writing-practice-3',
          titleFi: 'Mielipide: Tasa-arvo Suomessa',
          instructionsFi: 'Kirjoita mielipideteksti aiheesta: tasa-arvo Suomessa.',
          sampleFi:
            'Mielestäni Suomi on melko tasa-arvoinen maa. Täällä naisilla ja miehillä on samat oikeudet, koulutus on ilmaista, ja kaikilla on mahdollisuus terveydenhuoltoon.\n\nKuitenkin Suomessa on myös epätasa-arvoa. Esimerkiksi maahanmuuttajat voivat kohdata syrjintää työnhaussa. Myös palkkaerot naisten ja miesten välillä ovat olemassa.\n\nTasa-arvo ei ole itsestäänselvyys. Meidän kaikkien pitää tehdä töitä sen eteen, että yhteiskunta olisi oikeudenmukaisempi.',
        },
      ],
      informalTasks: [
        {
          id: 'writing-informal-1',
          titleFi: 'Epämuodolliset viestiaiheet',
          instructionsFi: 'Tämän luvun epämuodollisissa viesteissä harjoitellaan esimerkiksi:',
          bulletsFi: ['Viesti äänestämisestä tai poliittisista asioista', 'Keskustelu sosiaalipalveluista'],
        },
      ],
      formalTasks: [
        {
          id: 'writing-formal-1',
          titleFi: 'Muodolliset viestiaiheet',
          instructionsFi: 'Tämän luvun muodollisissa viesteissä harjoitellaan esimerkiksi:',
          bulletsFi: ['Viesti Kelaan tai Migriin', 'Valitus julkisista palveluista', 'Hakemus kansalaisuudesta tai etuuksista'],
        },
      ],
      opinionTopics: [
        {
          id: 'writing-opinion-1',
          titleFi: 'Mielipideaiheita',
          options: [
            'Pitäisikö äänestäminen olla pakollista?',
            'Onko Suomi tasa-arvoinen maa?',
            'Pitäisikö maahanmuuttoa helpottaa?',
            'Verot - liian korkeat vai tarpeellisia?',
          ],
        },
      ],
    },
    listening: {
      practicePassages: [
        {
          id: 'listening-practice-1',
          titleFi: 'Kuuntelutehtävien sanasto ja aiheet',
          titleEn: 'Listening Task Vocabulary and Topics',
          textFi:
            'Tämän luvun kuuntelutehtäviä ei sisältynyt saatuun lähdemateriaaliin äänitteineen ja vastauksineen. Harjoittele omatoimisesti kuuntelemalla yhteiskuntaan liittyviä keskusteluja, esimerkiksi näistä aiheista: uutinen vaaleista, keskustelu maahanmuutosta, mainos sosiaalipalveluista, haastattelu poliitikon kanssa.',
          predictVocab: [
            { fi: 'kansalainen', en: 'citizen', bn: 'নাগরিক' },
            { fi: 'ääni', en: 'vote', bn: 'ভোট' },
            { fi: 'vaalit', en: 'elections', bn: 'নির্বাচন' },
            { fi: 'puolue', en: 'political party', bn: 'রাজনৈতিক দল' },
            { fi: 'hallitus', en: 'government', bn: 'সরকার' },
            { fi: 'laki', en: 'law', bn: 'আইন' },
            { fi: 'oikeudet', en: 'rights', bn: 'অধিকারসমূহ' },
            { fi: 'velvollisuudet', en: 'obligations', bn: 'দায়িত্বসমূহ' },
            { fi: 'sosiaaliturva', en: 'social security', bn: 'সামাজিক নিরাপত্তা' },
            { fi: 'maahanmuuttaja', en: 'immigrant', bn: 'অভিবাসী' },
            { fi: 'kotoutuminen', en: 'integration', bn: 'একীভূতকরণ' },
          ],
        },
      ],
      testPassages: [],
    },
    speaking: {
      groupIntro: {
        instructionsFi: 'Tässä luvussa harjoitellaan näitä puhumisen aihepiirejä:',
        questions: [
          'Kertominen: Kerro suomalaisesta yhteiskunnasta; Millainen on hyvä yhteiskunta?',
          'Keskustelu: Keskustelu äänestämisestä; Keskustelu maahanmuutosta.',
          'Tilannetehtävät: Kysy tietoa Kelasta; Keskustele naapurin kanssa yhteiskunnallisista asioista.',
          'Mielipide: Pitäisikö äänestäminen olla pakollista?; Onko Suomi tasa-arvoinen maa?; Pitäisikö maahanmuuttoa helpottaa?',
        ],
      },
      testLongTasks: [
        {
          id: 'speaking-test-1',
          titleFi: 'Suomalainen yhteiskunta',
          titleEn: 'Finnish Society',
          prepSeconds: 60,
          speakSeconds: 90,
          questions: [
            'Mitä tiedät Suomesta yhteiskuntana?',
            'Millaisia palveluita Suomessa on?',
            'Mikä on mielestäsi hyvää Suomessa?',
            'Mikä voisi olla paremmin?',
          ],
        },
      ],
      conversationTasks: [],
      situationalTasks: [
        {
          id: 'speaking-situation-1',
          scenarioFi: 'Kysy tietoa Kelasta.',
          seconds: 20,
        },
        {
          id: 'speaking-situation-2',
          scenarioFi: 'Keskustele naapurin kanssa yhteiskunnallisista asioista.',
          seconds: 20,
        },
      ],
      opinionTasks: [
        {
          id: 'speaking-opinion-1',
          titleFi: 'Jokaisen pitäisi äänestää vaaleissa',
          titleEn: 'Everyone Should Vote in Elections',
          prepSeconds: 120,
          speakSeconds: 120,
          questions: ['Oletko samaa mieltä?', 'Miksi äänestäminen on tärkeää?', 'Mitä tapahtuu, jos ihmiset eivät äänestä?', 'Pitäisikö äänestämisen olla pakollista?'],
        },
      ],
    },
    vocabSummary: [
      { fi: 'yhteiskunta', en: 'society', bn: 'সমাজ' },
      { fi: 'kansalainen', en: 'citizen', bn: 'নাগরিক' },
      { fi: 'kansalaisuus', en: 'citizenship', bn: 'নাগরিকত্ব' },
      { fi: 'äänestäminen', en: 'voting', bn: 'ভোট দেওয়া' },
      { fi: 'vaalit', en: 'elections', bn: 'নির্বাচন' },
      { fi: 'politiikka', en: 'politics', bn: 'রাজনীতি' },
      { fi: 'poliitikko', en: 'politician', bn: 'রাজনীতিবিদ' },
      { fi: 'puolue', en: 'party', bn: 'দল' },
      { fi: 'hallitus', en: 'government', bn: 'সরকার' },
      { fi: 'eduskunta', en: 'parliament', bn: 'পার্লামেন্ট' },
      { fi: 'laki', en: 'law', bn: 'আইন' },
      { fi: 'oikeus', en: 'right/justice', bn: 'অধিকার/ন্যায়বিচার' },
      { fi: 'velvollisuus', en: 'duty', bn: 'দায়িত্ব' },
      { fi: 'tasa-arvo', en: 'equality', bn: 'সমতা' },
      { fi: 'yhdenvertaisuus', en: 'equality', bn: 'সমান অধিকার' },
      { fi: 'demokratia', en: 'democracy', bn: 'গণতন্ত্র' },
      { fi: 'verot', en: 'taxes', bn: 'কর' },
      { fi: 'sosiaaliturva', en: 'social security', bn: 'সামাজিক নিরাপত্তা' },
      { fi: 'maahanmuutto', en: 'immigration', bn: 'অভিবাসন' },
      { fi: 'kotoutuminen', en: 'integration', bn: 'একীভূতকরণ' },
      { fi: 'syrjintä', en: 'discrimination', bn: 'বৈষম্য' },
      { fi: 'oikeudenmukaisuus', en: 'fairness', bn: 'ন্যায্যতা' },
    ],
    usefulPhrases: [
      { fi: 'Olen Suomen kansalainen.', en: 'I am a Finnish citizen.', bn: 'আমি ফিনল্যান্ডের নাগরিক।' },
      { fi: 'Haluaisin hakea kansalaisuutta.', en: 'I would like to apply for citizenship.', bn: 'আমি নাগরিকত্বের জন্য আবেদন করতে চাই।' },
      { fi: 'Äänestän vaaleissa.', en: 'I vote in elections.', bn: 'আমি নির্বাচনে ভোট দিই।' },
      { fi: 'On tärkeää, että kaikki äänestävät.', en: "It's important that everyone votes." },
      { fi: 'Suomi on tasa-arvoinen maa.', en: 'Finland is an equal country.', bn: 'ফিনল্যান্ড একটি সমতাভিত্তিক দেশ।' },
      { fi: 'Yhteiskunnan pitäisi auttaa heikommassa asemassa olevia.', en: 'Society should help those in need.', bn: 'সমাজের উচিত দুর্বলদের সাহায্য করা।' },
      { fi: 'Tarvitsen apua Kelasta.', en: 'I need help from Kela.', bn: 'আমার কেলা থেকে সাহায্য দরকার।' },
      { fi: 'Maahanmuuttajat rikastuttavat yhteiskuntaa.', en: 'Immigrants enrich society.', bn: 'অভিবাসীরা সমাজকে সমৃদ্ধ করে।' },
    ],
  },
]

export function ykiChapter(id: string): YkiChapter | undefined {
  return YKI_CHAPTERS.find((c) => c.id === id)
}
