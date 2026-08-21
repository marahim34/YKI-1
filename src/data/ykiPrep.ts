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

export const YKI_CHAPTERS: YkiChapter[] = [
  {
    id: 'yki-ch1',
    number: 1,
    titleFi: 'Minä ja taustani',
    titleEn: 'Me and My Background',
    pages: '8-43',
    theme: 'Henkilötiedot, tausta, itsensä esittely, perhe ja identiteetti',
    reading: {
      vocabWarmup: {
        instructionsFi: 'Osaatko sanastoa perustiedoista? Selvitä lomakkeen sanat ja täytä lomake omilla tiedoillasi tai keksi itse.',
        items: [
          { fi: 'etunimet (kutsumanimi alleviivattuna)', en: 'first names (given name underlined)' },
          { fi: 'sukunimi', en: 'last name / surname' },
          { fi: 'syntymäpaikka ja -aika', en: 'place and date of birth' },
          { fi: 'sukupuoli (mies, nainen, muu, en halua sanoa)', en: 'gender (male, female, other, prefer not to say)' },
          { fi: 'lähiosoite', en: 'street address' },
          { fi: 'postinumero', en: 'postal code' },
          { fi: 'postitoimipaikka', en: 'post office / city' },
          { fi: 'sähköpostiosoite', en: 'email address' },
          { fi: 'puhelinnumero', en: 'phone number' },
          { fi: 'kansalaisuus', en: 'citizenship' },
          { fi: 'äidinkieli', en: 'mother tongue' },
          { fi: 'siviilisääty (yksin asuva, avoliitossa, avioliitossa, eronnut, leski)', en: 'marital status (single, cohabiting, married, divorced, widowed)' },
          { fi: 'alaikäisten lasten syntymävuodet', en: 'birth years of minor children' },
          { fi: 'koulutus', en: 'education' },
          { fi: 'ammatti', en: 'profession' },
          { fi: 'työnantaja', en: 'employer' },
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
            { fi: 'pakolainen', en: 'refugee' },
            { fi: 'Suomeen tulo', en: 'coming to Finland' },
            { fi: 'suomen kieli', en: 'Finnish language' },
            { fi: 'opiskelu', en: 'studying' },
            { fi: 'työ', en: 'work' },
            { fi: 'perhe', en: 'family' },
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
        { fi: 'Kehu.', en: 'Compliment.' },
        { fi: 'Keksi.', en: 'Make up / Invent.' },
        { fi: 'Kerro.', en: 'Tell.' },
        { fi: 'Kieltäydy.', en: 'Refuse / Say no.' },
        { fi: 'Kysy.', en: 'Ask.' },
        { fi: 'Kysy lisätietoa.', en: 'Ask for more information.' },
        { fi: 'Neuvo.', en: 'Advise.' },
        { fi: 'Onnittele.', en: 'Congratulate.' },
        { fi: 'Pahoittele.', en: 'Apologize.' },
        { fi: 'Rauhoittele.', en: 'Calm down / Reassure.' },
        { fi: 'Reagoi sopivalla tavalla.', en: 'React appropriately.' },
        { fi: 'Selitä.', en: 'Explain.' },
        { fi: 'Tervehdi.', en: 'Greet.' },
        { fi: 'Vastaa kieltävästi/myöntävästi.', en: 'Answer negatively/affirmatively.' },
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
      { fi: 'etunimi', en: 'first name' },
      { fi: 'sukunimi', en: 'last name / surname' },
      { fi: 'syntymäpaikka', en: 'place of birth' },
      { fi: 'syntymäaika', en: 'date of birth' },
      { fi: 'sukupuoli', en: 'gender' },
      { fi: 'kansalaisuus', en: 'citizenship' },
      { fi: 'äidinkieli', en: 'mother tongue' },
      { fi: 'siviilisääty', en: 'marital status' },
      { fi: 'koulutus', en: 'education' },
      { fi: 'ammatti', en: 'profession' },
      { fi: 'työnantaja', en: 'employer' },
      { fi: 'työpaikka', en: 'workplace' },
      { fi: 'perhe', en: 'family' },
      { fi: 'sukulainen', en: 'relative' },
      { fi: 'ystävä', en: 'friend' },
      { fi: 'harrastus', en: 'hobby' },
      { fi: 'ikä', en: 'age' },
      { fi: 'lapsuus', en: 'childhood' },
      { fi: 'nuoruus', en: 'youth' },
      { fi: 'aikuisuus', en: 'adulthood' },
      { fi: 'vanhuus', en: 'old age' },
    ],
    usefulPhrases: [
      { fi: 'Hei, olen...', en: 'Hi, I am...' },
      { fi: 'Olen kotoisin...', en: 'I come from...' },
      { fi: 'Asun...', en: 'I live in...' },
      { fi: 'Olen...vuotias.', en: 'I am... years old.' },
      { fi: 'Minulla on...', en: 'I have...' },
      { fi: 'Harrastan...', en: 'I do (as a hobby)...' },
      { fi: 'Tykkään...', en: 'I like...' },
      { fi: 'En tykkää...', en: "I don't like..." },
      { fi: 'Olen opiskellut suomea...', en: 'I have studied Finnish for...' },
      { fi: 'Kiitos!', en: 'Thank you!' },
      { fi: 'Näkemiin!', en: 'Goodbye!' },
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
    reading: {
      vocabWarmup: {
        instructionsFi:
          'Osaatko asumisen sanastoa? Selvitä, mitä seuraavat sanat tarkoittavat. Ovatko sanat tärkeitä, jos asut kerrostalossa, rivitalossa, omakotitalossa vai näissä kaikissa?',
        items: [
          { fi: 'hissi', en: 'elevator (kerrostalo)' },
          { fi: 'parveke', en: 'balcony (kerrostalo, rivitalo)' },
          { fi: 'piha', en: 'yard (kaikissa)' },
          { fi: 'autotalli', en: 'garage (omakotitalo, rivitalo)' },
          { fi: 'kellari', en: 'basement (kaikissa)' },
          { fi: 'sauna', en: 'sauna (kaikissa)' },
          { fi: 'keittiö', en: 'kitchen (kaikissa)' },
          { fi: 'olohuone', en: 'living room (kaikissa)' },
          { fi: 'makuuhuone', en: 'bedroom (kaikissa)' },
          { fi: 'kylpyhuone', en: 'bathroom (kaikissa)' },
          { fi: 'vuokra', en: 'rent (kaikissa)' },
          { fi: 'vastike', en: 'maintenance fee (omistusasunto)' },
          { fi: 'remontti', en: 'renovation (kaikissa)' },
          { fi: 'isännöitsijä', en: 'property manager (kerrostalo, rivitalo)' },
          { fi: 'taloyhtiö', en: 'housing company (kaikissa)' },
          { fi: 'naapuri', en: 'neighbor (kaikissa)' },
          { fi: 'talkoot', en: 'volunteer work together (kaikissa)' },
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
            { fi: 'kellari', en: 'basement' },
            { fi: 'komero', en: 'storage room' },
            { fi: 'murto', en: 'break-in' },
            { fi: 'rikosilmoitus', en: 'police report' },
            { fi: 'varkaat', en: 'thieves' },
            { fi: 'ovi', en: 'door' },
            { fi: 'lukko', en: 'lock' },
            { fi: 'poliisi', en: 'police' },
            { fi: 'kellarikomero', en: 'storage room in basement' },
            { fi: 'on murtauduttu', en: 'has been broken into' },
            { fi: 'rikosilmoitukset', en: 'police reports' },
            { fi: 'kätevästi', en: 'conveniently' },
            { fi: 'netissä', en: 'online' },
            { fi: 'saa', en: 'one can / is allowed' },
            { fi: 'jo', en: 'already' },
            { fi: 'siivota', en: 'to clean' },
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
      { fi: 'asuminen', en: 'living / housing' },
      { fi: 'koti', en: 'home' },
      { fi: 'asunto', en: 'apartment' },
      { fi: 'kerrostalo', en: 'apartment building' },
      { fi: 'rivitalo', en: 'row house / townhouse' },
      { fi: 'omakotitalo', en: 'detached house' },
      { fi: 'vuokrata', en: 'to rent' },
      { fi: 'ostaa', en: 'to buy' },
      { fi: 'vuokra', en: 'rent' },
      { fi: 'vastike', en: 'maintenance fee' },
      { fi: 'isännöitsijä', en: 'property manager' },
      { fi: 'huoltoyhtiö', en: 'maintenance company' },
      { fi: 'naapuri', en: 'neighbor' },
      { fi: 'talkoot', en: 'volunteer work together' },
      { fi: 'kellari', en: 'basement' },
      { fi: 'parveke', en: 'balcony' },
      { fi: 'sauna', en: 'sauna' },
      { fi: 'keittiö', en: 'kitchen' },
      { fi: 'olohuone', en: 'living room' },
      { fi: 'makuuhuone', en: 'bedroom' },
      { fi: 'kylpyhuone', en: 'bathroom' },
      { fi: 'remontti', en: 'renovation' },
      { fi: 'hissi', en: 'elevator' },
      { fi: 'piha', en: 'yard' },
      { fi: 'autotalli', en: 'garage' },
      { fi: 'pesutupa', en: 'laundry room' },
    ],
    usefulPhrases: [
      { fi: 'Asun...', en: 'I live in...' },
      { fi: 'Olen muuttanut...', en: 'I have moved to...' },
      { fi: 'Minulla on asunto...', en: 'I have an apartment...' },
      { fi: 'Haluaisin vuokrata...', en: 'I would like to rent...' },
      { fi: 'Asunnossa on...', en: 'The apartment has...' },
      { fi: 'Kotona on...', en: 'At home there is...' },
      { fi: 'Naapurini on...', en: 'My neighbor is...' },
      { fi: 'Taloyhtiössä on...', en: 'The housing company has...' },
      { fi: 'Tarvitsen huoltomiehen.', en: 'I need a maintenance man.' },
      { fi: 'Haluaisin ilmoittaa viasta.', en: 'I would like to report a fault.' },
      { fi: 'Milloin pääsen katsomaan?', en: 'When can I come to view (it)?' },
    ],
  },
  {
    id: 'yki-ch3',
    number: 3,
    titleFi: 'Kauppa ja palvelut',
    titleEn: 'Shops and Services',
    pages: '72-106',
    theme: 'Ostokset, asiakaspalvelu, valitukset, palaute, pankkiasiat ja erilaiset palvelut',
    reading: {
      vocabWarmup: {
        instructionsFi: 'Osaatko asiakaspalautteeseen liittyvää sanastoa? Ymmärrätkö seuraavat fraasit?',
        items: [
          { fi: 'Haluaisin antaa palautetta.', en: 'I would like to give feedback. (Neutral)' },
          { fi: 'Olen erittäin tyytyväinen tuotteisiinne.', en: 'I am very satisfied with your products. (Positive)' },
          { fi: 'Ravintolailtamme meni pilalle.', en: 'Our restaurant evening was ruined. (Negative)' },
          { fi: 'Olen pettynyt asiakaspalveluun.', en: 'I am disappointed in the customer service. (Negative)' },
          { fi: 'En ole koskaan ennen saanut näin loistavaa palvelua.', en: 'I have never received such great service before. (Positive)' },
          { fi: 'Uudet tilat ovat todella viihtyisät.', en: 'The new premises are really cozy. (Positive)' },
          { fi: 'Haluaisin keskustella esihenkilösi kanssa.', en: 'I would like to speak with your supervisor. (Negative)' },
          { fi: 'Jouduimme odottamaan yli tunnin.', en: 'We had to wait over an hour. (Negative)' },
          { fi: 'Hotellihuone oli likainen.', en: 'The hotel room was dirty. (Negative)' },
          { fi: 'Myyjä oli töykeä.', en: 'The salesperson was rude. (Negative)' },
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
      { fi: 'kauppa', en: 'store/shop' },
      { fi: 'asiakas', en: 'customer' },
      { fi: 'asiakaspalvelu', en: 'customer service' },
      { fi: 'myyjä', en: 'salesperson' },
      { fi: 'palaute', en: 'feedback' },
      { fi: 'reklamaatio', en: 'complaint' },
      { fi: 'kuitti', en: 'receipt' },
      { fi: 'takuu', en: 'warranty' },
      { fi: 'vaihto', en: 'exchange' },
      { fi: 'hyvitys', en: 'compensation' },
      { fi: 'tyytyväinen', en: 'satisfied' },
      { fi: 'pettynyt', en: 'disappointed' },
      { fi: 'kassalla', en: 'at the checkout' },
      { fi: 'tarjous', en: 'offer/sale' },
      { fi: 'aukioloajat', en: 'opening hours' },
      { fi: 'verkkokauppa', en: 'online store' },
      { fi: 'vakuutus', en: 'insurance' },
      { fi: 'pankki', en: 'bank' },
      { fi: 'kirjasto', en: 'library' },
      { fi: 'apteekki', en: 'pharmacy' },
    ],
    usefulPhrases: [
      { fi: 'Haluaisin antaa palautetta.', en: 'I would like to give feedback.' },
      { fi: 'Olen tyytyväinen/pettynyt.', en: 'I am satisfied/dissatisfied.' },
      { fi: 'Valitettavasti...', en: 'Unfortunately...' },
      { fi: 'Toivoisin, että...', en: 'I would hope that...' },
      { fi: 'Voisitteko...', en: 'Could you...' },
      { fi: 'Pyydän, että...', en: 'I request that...' },
      { fi: 'Kiitos paljon!', en: 'Thank you very much!' },
      { fi: 'Anteeksi, voisitko auttaa?', en: 'Excuse me, could you help?' },
      { fi: 'Onkohan teillä...', en: 'Do you happen to have...' },
      { fi: 'Paljonko tämä maksaa?', en: 'How much does this cost?' },
    ],
  },
  {
    id: 'yki-ch4',
    number: 4,
    titleFi: 'Kulttuuri',
    titleEn: 'Culture',
    pages: '108-137',
    theme: 'Kulttuuri, taide, musiikki, kirjallisuus, teatteri, juhlat ja kulttuuritapahtumat',
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
      { fi: 'kulttuuri', en: 'culture' },
      { fi: 'taide', en: 'art' },
      { fi: 'musiikki', en: 'music' },
      { fi: 'kirjallisuus', en: 'literature' },
      { fi: 'teatteri', en: 'theater' },
      { fi: 'museo', en: 'museum' },
      { fi: 'konsertti', en: 'concert' },
      { fi: 'näyttely', en: 'exhibition' },
      { fi: 'juhla', en: 'celebration' },
      { fi: 'laulaja', en: 'singer' },
      { fi: 'näyttelijä', en: 'actor' },
      { fi: 'kirjailija', en: 'writer/author' },
      { fi: 'elokuva', en: 'film/movie' },
      { fi: 'sarja', en: 'series' },
      { fi: 'runo', en: 'poem' },
      { fi: 'maalaus', en: 'painting' },
      { fi: 'liput', en: 'tickets' },
      { fi: 'esitys', en: 'performance' },
      { fi: 'peruuntua', en: 'to be canceled' },
      { fi: 'korvaava', en: 'replacement' },
    ],
    usefulPhrases: [
      { fi: 'Mielestäni...', en: 'In my opinion...' },
      { fi: 'Minusta...', en: 'I think...' },
      { fi: 'Olen samaa mieltä.', en: 'I agree.' },
      { fi: 'Olen eri mieltä.', en: 'I disagree.' },
      { fi: 'Toisaalta... toisaalta...', en: 'On one hand... on the other hand...' },
      { fi: 'Kuulostaa kiinnostavalta!', en: 'Sounds interesting!' },
      { fi: 'Suosittelen lämpimästi!', en: 'I warmly recommend!' },
      { fi: 'Kannattaako mennä?', en: 'Is it worth going?' },
      { fi: 'Millaisesta musiikista tykkäät?', en: 'What kind of music do you like?' },
      { fi: 'Olen lukenut / nähnyt / kuullut...', en: 'I have read / seen / heard...' },
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
]

export function ykiChapter(id: string): YkiChapter | undefined {
  return YKI_CHAPTERS.find((c) => c.id === id)
}
