import type { SpeakingPattern, WritingTemplate } from '../types'

// Reusable writing task skeletons. The idea: YKI writing tasks fall into a
// small number of recurring TASK TYPES. Learn one skeleton per type, and you
// can answer almost any prompt of that type by swapping in the new topic's
// vocabulary — you don't need a brand new strategy for every single prompt.
export const WRITING_TEMPLATES: WritingTemplate[] = [
  {
    id: 'henkilokohtainen-viesti',
    taskType: 'Henkilökohtainen viesti / sähköposti',
    taskTypeBn: 'ব্যক্তিগত বার্তা / ইমেইল',
    whenUsed: 'Kun tehtävä pyytää kirjoittamaan ystävälle, sukulaiselle tai tutulle jostain arkisesta asiasta.',
    opening: 'Hei [NIMI]! / Moi [NIMI]! — ja yksi lause siitä, miksi kirjoitat juuri nyt (esim. "Kiitos viestistäsi", "Kauan aikaa!", "Halusin kertoa...").',
    body: 'Kerro pääasia 2-3 lauseessa: mitä on tapahtunut, mitä toivot, tai mistä haluat kertoa. Lisää yksi konkreettinen yksityiskohta (aika, paikka, syy) tekstin uskottavuuden vuoksi.',
    closing: 'Yksi lause, joka pyytää vastausta tai sopii tapaamisesta ("Vastaa pian!", "Nähdään pian!") + tervehdys ("Terveisin", "T. [NIMI]").',
    swaps: [
      {
        topic: 'Kutsu ystävän syntymäpäiväjuhliin',
        topicBn: 'বন্ধুকে জন্মদিনের পার্টিতে আমন্ত্রণ',
        filled:
          'Hei Liisa! Ensi lauantaina on syntymäpäiväni, ja järjestän pienet juhlat kotonani kello 18 alkaen. Toivottavasti pääset paikalle! Ota mukaan hyvä tuuli, ruoasta ja juomasta pidän itse huolen. Vastaa pian, jotta tiedän montako vierasta tulee! Terveisin, Amir',
      },
      {
        topic: 'Kerro uudesta työpaikasta',
        topicBn: 'নতুন চাকরির খবর জানানো',
        filled:
          'Moi Karim! Kauan aikaa siitä kun viimeksi juttelimme. Halusin kertoa, että aloitin uuden työn viime viikolla kahvilassa keskustassa. Työ on mukavaa, ja kollegat ovat ystävällisiä, vaikka olen vielä vähän hermostunut suomen kielen takia. Voisimmeko tavata kahvilla ensi viikolla? Nähdään pian! T. Amir',
      },
    ],
    tips: [
      'Aloitus ja lopetus voivat olla lähes identtiset joka kerta — vain väliosan sisältö vaihtuu aiheen mukaan.',
      'Yksi konkreettinen yksityiskohta (aika, paikka, määrä) tekee tekstistä uskottavamman kuin pelkkä yleinen toteamus.',
      'Epämuodollinen rekisteri (moi, terkuin) sopii ystävälle; muodollisempi (hyvä/kunnioittava tervehdys) sopii tuntemattomalle vastaanottajalle.',
    ],
  },
  {
    id: 'mielipidekirjoitus',
    taskType: 'Mielipidekirjoitus',
    taskTypeBn: 'মতামত রচনা',
    whenUsed: 'Kun tehtävä pyytää mielipidettä jostain aiheesta (esim. sanoma-/verkkolehteen, keskustelupalstalle).',
    opening: 'Ilmaise kantasi heti ensimmäisessä lauseessa: "Mielestäni [AIHE] on..." tai "Olen sitä mieltä, että...".',
    body: 'Anna 2 perustelua omalle kannallesi ("Ensinnäkin... Toiseksi..."). Ota sitten huomioon vastakkainen näkökulma yhdellä lauseella ("Toisaalta on totta, että...") ennen kuin palaat omaan kantaasi.',
    closing: 'Yhteenveto, joka palaa alun kantaan: "Näin ollen uskon, että..." tai "Kaiken kaikkiaan...".',
    swaps: [
      {
        topic: 'Onko etätyö parempi kuin toimistotyö?',
        topicBn: 'দূরবর্তী কাজ কি অফিস কাজের চেয়ে ভালো?',
        filled:
          'Mielestäni etätyö on monessa tilanteessa parempi vaihtoehto kuin toimistotyö. Ensinnäkin se säästää aikaa, koska työmatkoihin ei kulu tunteja. Toiseksi moni keskittyy paremmin kotona ilman jatkuvia keskeytyksiä. Toisaalta on totta, että toimisto tukee paremmin yhteisöllisyyttä. Kaiken kaikkiaan uskon, että joustava, molempia yhdistävä malli on useimmille paras ratkaisu.',
      },
      {
        topic: 'Pitäisikö koulujen aloittaa myöhemmin aamulla?',
        topicBn: 'স্কুল কি সকালে দেরিতে শুরু হওয়া উচিত?',
        filled:
          'Olen sitä mieltä, että koulujen pitäisi aloittaa myöhemmin aamulla. Ensinnäkin nuoret tarvitsevat enemmän unta kuin aikuiset. Toiseksi myöhäisempi alku vähentäisi aamuruuhkaa. Toisaalta ymmärrän, että se vaikeuttaisi vanhempien aikatauluja. Näin ollen ehdottaisin kompromissia: alku puoli tuntia myöhemmin nykyistä.',
      },
    ],
    tips: [
      'Sama rakenne (kanta → 2 perustelua → vastaväite → yhteenveto) toimii käytännössä mihin tahansa mielipideaiheeseen.',
      '"Toisaalta"-lause ei tarkoita, että vaihdat mieltä — se osoittaa, että olet ajatellut asiaa monelta kannalta, mikä on osa arviointikriteeriä.',
      'Vältä liian ehdotonta kieltä ("aina", "kaikki") — "monessa tilanteessa", "useimmille" kuulostaa kypsemmältä.',
    ],
  },
  {
    id: 'valitus',
    taskType: 'Valitus / reklamaatio',
    taskTypeBn: 'অভিযোগপত্র',
    whenUsed: 'Kun tehtävä pyytää valittamaan huonosta palvelusta, viallisesta tuotteesta tai virheestä.',
    opening: 'Kerro heti, mistä tilauksesta/palvelusta on kyse ja milloin ("Tilasin/Ostin/Varasin [ASIA] [PÄIVÄMÄÄRÄ]...").',
    body: 'Selitä täsmällisesti, mikä meni pieleen (1-2 konkreettista ongelmaa). Kerro myös, miten se vaikutti sinuun ("Tämän vuoksi...").',
    closing: 'Kerro selvästi, mitä toivot tapahtuvan ("Toivon, että saan hyvityksen / uuden tuotteen / rahat takaisin") + kohtelias mutta jämäkkä lopetus.',
    swaps: [
      {
        topic: 'Viallinen tuote verkkokaupasta',
        topicBn: 'অনলাইন দোকান থেকে ত্রুটিপূর্ণ পণ্য',
        filled:
          'Tilasin verkkokaupastanne pesukoneen 3.3. ja se toimitettiin viime viikolla. Valitettavasti kone ei käynnisty lainkaan, ja pakkaus oli myös vaurioitunut kuljetuksessa. Tämän vuoksi olen joutunut pesemään vaatteet käsin kaksi viikkoa. Toivon, että vaihdatte koneen uuteen mahdollisimman pian tai palautatte rahani kokonaisuudessaan.',
      },
      {
        topic: 'Huono kokemus ravintolassa',
        topicBn: 'রেস্তোরাঁয় খারাপ অভিজ্ঞতা',
        filled:
          'Vierailimme ravintolassanne lauantaina 14.6. varatulla pöydällä kello 19. Odotimme ruokaa yli tunnin, ja kun se lopulta tuli, se oli kylmää. Tämän vuoksi ilta, jonka piti olla juhla, muuttui pettymykseksi. Toivon, että otatte yhteyttä ja tarjoatte hyvitystä huonosta palvelusta.',
      },
    ],
    tips: [
      'Pidä sävy asiallisena, ei vihaisena — YKI-arvioinnissa hyvä sävy on osa tehtävää.',
      'Konkreettinen päivämäärä/tilausnumero tekee valituksesta uskottavan, vaikka keksisit sen tehtävää varten.',
      'Kerro AINA lopuksi selvästi, mitä haluat tapahtuvan — pelkkä valittaminen ei riitä.',
    ],
  },
  {
    id: 'kutsu',
    taskType: 'Kutsu',
    taskTypeBn: 'আমন্ত্রণপত্র',
    whenUsed: 'Kun tehtävä pyytää kutsumaan jonkun tapahtumaan (juhla, kokous, tapaaminen).',
    opening: 'Kerro heti mihin kutsut: "Kutsun sinut/teidät [TAPAHTUMA]:aan/:än".',
    body: 'Kerro käytännön tiedot: milloin (päivä + kellonaika), missä (paikka/osoite), ja mitä tapahtuu (lyhyt kuvaus ohjelmasta tai syy juhlaan).',
    closing: 'Pyydä vahvistusta osallistumisesta ("Ilmoitathan, tuletko mukaan") + ystävällinen lopetus.',
    swaps: [
      {
        topic: 'Kutsu naapureille pihatalkoisiin',
        topicBn: 'প্রতিবেশীদের জন্য উঠানের সহযোগিতামূলক কাজের আমন্ত্রণ',
        filled:
          'Kutsun teidät kaikki naapurit pihatalkoisiin! Talkoot pidetään lauantaina 10.5. kello 10 alkaen pihamme yhteisellä nurmikolla. Siivoamme pihaa yhdessä, ja lopuksi tarjoamme kahvia ja pullaa. Ilmoitathan, tuletko mukaan, jotta osaamme varata tarpeeksi tarjottavaa. Tervetuloa!',
      },
      {
        topic: 'Kutsu kollegoille tiimin illanviettoon',
        topicBn: 'সহকর্মীদের জন্য টিম সন্ধ্যা অনুষ্ঠানের আমন্ত্রণ',
        filled:
          'Kutsun teidät kaikki tiimin illanviettoon! Vietämme iltaa perjantaina 22.9. kello 17 alkaen ravintola Aallossa keskustassa. Ohjelmassa on yhteinen ruokailu ja rento jutustelu vuoden onnistumisista. Ilmoitathan osallistumisestasi 15.9. mennessä, jotta voimme varata pöydän oikealle määrälle. Tervetuloa mukaan!',
      },
    ],
    tips: [
      'Käytännön tiedot (aika, paikka) ovat tärkeämpiä kuin koristeellinen kieli — älä unohda niitä.',
      'Muodollisuus vaihtelee: naapureille/ystäville rennompi sävy, työpaikalle hieman muodollisempi.',
      'Osallistumisvahvistuksen pyytäminen ("ilmoitathan") on tyypillinen ja odotettu lopetus.',
    ],
  },
  {
    id: 'tiedote',
    taskType: 'Tiedote / ilmoitus',
    taskTypeBn: 'বিজ্ঞপ্তি / নোটিশ',
    whenUsed: 'Kun tehtävä pyytää kirjoittamaan virallisemman ilmoituksen (esim. taloyhtiölle, työpaikalle, ryhmälle).',
    opening: 'Kerro heti ilmoituksen aihe otsikkomaisesti tai ensimmäisessä lauseessa: "Tiedotamme, että..." / "Ilmoitamme teille, että...".',
    body: 'Kerro olennaiset yksityiskohdat selkeästi (mitä, milloin, missä, keitä koskee) — käytä tarvittaessa lyhyitä, listamaisia lauseita.',
    closing: 'Kerro, mistä saa lisätietoa tai keneen ottaa yhteyttä, + kohtelias lopetus ("Kiitos yhteistyöstä", "Ystävällisin terveisin").',
    swaps: [
      {
        topic: 'Taloyhtiön vesikatko',
        topicBn: 'অ্যাপার্টমেন্ট বিল্ডিংয়ে পানি বন্ধ থাকার নোটিশ',
        filled:
          'Ilmoitamme asukkaille, että talon vesijohtoja huolletaan keskiviikkona 12.4. Vesi on poikki kello 9-14 välisenä aikana koko rakennuksessa. Suosittelemme varaamaan tarvittavan veden etukäteen. Lisätietoja saa isännöitsijältä puhelimitse. Kiitos yhteistyöstä ja pahoittelemme häiriötä.',
      },
      {
        topic: 'Muutos työpaikan aukioloaikoihin',
        topicBn: 'কর্মস্থলের খোলার সময়ে পরিবর্তন',
        filled:
          'Tiedotamme henkilökunnalle, että toimiston aukioloajat muuttuvat 1.6. alkaen. Uudet ajat ovat arkisin kello 8-16, aiemman 9-17 sijaan. Muutos koskee kaikkia osastoja. Lisätietoja saa esimieheltä tai henkilöstöosastolta. Ystävällisin terveisin, johtoryhmä.',
      },
    ],
    tips: [
      'Tiedote on muodollisempi kuin viesti ystävälle — vältä puhekieltä (mä, sä).',
      'Kaikki neljä W-kysymystä (mitä, milloin, missä, ketä koskee) on hyvä käydä läpi.',
      'Passiivi ("ilmoitamme", "huolletaan") sopii tiedotteen sävyyn hyvin.',
    ],
  },
  {
    id: 'kysely',
    taskType: 'Kysely / tiedustelu',
    taskTypeBn: 'জিজ্ঞাসা / তথ্য অনুসন্ধান',
    whenUsed:
      'Kun tehtävä pyytää ottamaan yhteyttä viralliseen tahoon (Kela, työnantaja, koulu, palveluntarjoaja) saadaksesi tietoa — et valita etkä pyydä lupaa, vaan haluat vain vastauksen kysymykseen.',
    opening: 'Kerro lyhyesti, kuka olet ja miksi kirjoitat: "Kirjoitan, koska minulla on kysymys..." / "Haluaisin tiedustella...".',
    body: 'Anna yksi lause taustaa, joka auttaa vastaanottajaa ymmärtämään tilanteesi, ja esitä sitten kysymyksesi selvästi (1-2 kysymystä riittää — liian moni tekee vastaamisesta vaikeaa).',
    closing: 'Kiitä etukäteen ja kerro, että odotat vastausta: "Kiitos jo etukäteen vastauksestanne" / "Odotan vastaustanne mielenkiinnolla."',
    swaps: [
      {
        topic: 'Kysymys Kelalta asumistuesta',
        topicBn: 'কেলার কাছে বাসস্থান ভাতা সম্পর্কে প্রশ্ন',
        filled:
          'Kirjoitan, koska minulla on kysymys asumistuesta. Muutin viime kuussa uuteen, hieman kalliimpaan asuntoon, enkä ole varma, vaikuttaako se nykyiseen tukeeni. Pitääkö minun ilmoittaa muutosta erikseen, vai päivittyykö tieto automaattisesti? Kiitos jo etukäteen vastauksestanne.',
      },
      {
        topic: 'Kysymys koulusta lapsen aloittamisesta',
        topicBn: 'সন্তানের স্কুল শুরু সম্পর্কে বিদ্যালয়ে প্রশ্ন',
        filled:
          'Haluaisin tiedustella lapseni koulun aloittamisesta ensi syksynä. Olemme juuri muuttaneet alueelle, emmekä tunne vielä ilmoittautumiskäytäntöjä. Mihin mennessä ilmoittautuminen pitää tehdä, ja tarvitaanko siihen jokin tietty liite? Odotan vastaustanne mielenkiinnolla.',
      },
    ],
    tips: [
      'Rajaa kysymykset 1-2 kappaleeseen — silloin vastaanottajan on helpompi vastata täsmällisesti, ja tekstisi pysyy selkeänä.',
      'Yksi lause taustaa ennen kysymystä ("Muutin äskettäin...", "Olemme juuri muuttaneet...") auttaa vastaanottajaa antamaan osuvamman vastauksen.',
      'Tämä eroaa hakemuksesta siinä, ettet pyydä lupaa mihinkään — haluat vain tietoa. Vältä siis "pyydän lupaa" -tyyppisiä muotoiluja.',
    ],
  },
  {
    id: 'hakemus',
    taskType: 'Hakemus / anomus',
    taskTypeBn: 'আবেদনপত্র',
    whenUsed: 'Kun tehtävä pyytää pyytämään jotain viralliselta taholta (esim. vapaata työstä, lupaa, muutosta).',
    opening: 'Kerro heti, mitä pyydät ja keneltä: "Pyydän/Haen [ASIA]...".',
    body: 'Perustele pyyntösi 2-3 lauseessa: miksi tarvitset sitä, ja anna tarvittavat käytännön tiedot (ajankohta, kesto, syy).',
    closing: 'Pyydä kohteliaasti vastausta/päätöstä ("Toivon myönteistä vastausta", "Kiitän etukäteen") + muodollinen lopetus.',
    swaps: [
      {
        topic: 'Vapaan pyytäminen esimieheltä',
        topicBn: 'বসের কাছে ছুটির আবেদন',
        filled:
          'Pyydän lupaa kolmen päivän palkattomaan vapaaseen 5.-7.8. Tarvitsen vapaan hoitaakseni tärkeitä perheasioita ulkomailla. Olen jo sopinut kollegani kanssa, että hän hoitaa kiireellisimmät tehtäväni poissaolon aikana. Toivon myönteistä vastausta mahdollisimman pian, jotta voin järjestää matkani. Kiitän etukäteen, [NIMI]',
      },
      {
        topic: 'Muutoshakemus vuokrasopimukseen',
        topicBn: 'ভাড়া চুক্তিতে পরিবর্তনের আবেদন',
        filled:
          'Haen lupaa muuttaa vuokrasopimukseni maksupäivää kuun 1. päivästä kuun 15. päivään. Syynä on palkanmaksupäiväni muuttuminen uudessa työpaikassani. Olen maksanut vuokrani aina ajallaan enkä usko muutoksen aiheuttavan ongelmia. Toivon myönteistä vastausta ja kiitän jo etukäteen ymmärryksestänne.',
      },
    ],
    tips: [
      'Aloita aina suoraan pyynnöllä — älä hautaa sitä tekstin keskelle.',
      'Yksi hyvä perustelu riittää; liian moni syy voi kuulostaa epäuskottavalta.',
      'Muodollinen kieli ja kohteliaisuus ("toivon", "kiitän") ovat tärkeitä tässä tekstityypissä.',
    ],
  },
]

// Speaking question patterns: the "trick" is recognizing the SHAPE of the
// question (comparison, opinion, narration, description...) from a handful
// of recurring signal words, then reaching for the matching sentence frame —
// so you can produce a confident, well-structured answer even to a prompt
// whose specific vocabulary you don't fully understand yet.
export const SPEAKING_PATTERNS: SpeakingPattern[] = [
  {
    id: 'itsensa-esittely',
    patternName: 'Itsensä esittely',
    patternNameBn: 'নিজের পরিচয় দেওয়া',
    recognizeBy: ['Kerro itsestäsi', 'Esittele itsesi', 'Kuka olet?'],
    answerTemplate: 'Nimeni on... Olen ...vuotta vanha ja kotoisin... Asun nykyään... Työskentelen/Opiskelen... Vapaa-ajallani...',
    filledExample:
      'Nimeni on Amir. Olen 29-vuotias ja kotoisin Bangladeshista. Asun nykyään Tampereella. Opiskelen suomea kielikurssilla ja työskentelen osa-aikaisesti kaupassa. Vapaa-ajallani pidän lukemisesta ja kävelystä.',
    filledExampleBn: 'আমার নাম আমির। আমার বয়স ২৯ বছর এবং আমি বাংলাদেশ থেকে এসেছি। এখন আমি তামপেরেতে থাকি। আমি ফিনিশ ভাষার কোর্সে পড়াশোনা করি এবং একটি দোকানে খণ্ডকালীন কাজ করি। অবসর সময়ে আমার পড়া ও হাঁটতে ভালো লাগে।',
    tips: [
      'Tämä on lähes aina ensimmäinen kysymys — opettele tämä runko ulkoa niin ensimmäinen vastaus tulee automaattisesti.',
      'Sama runko toimii vaikka tarkka kysymyssana vaihtuisi ("Kerro itsestäsi" / "Kuka olet ja mistä tulet").',
    ],
  },
  {
    id: 'kuvailu',
    patternName: 'Kuvailu (kuva, paikka, henkilö)',
    patternNameBn: 'বর্ণনা (ছবি, স্থান, ব্যক্তি)',
    recognizeBy: ['Kuvaile...', 'Millainen ... on?', 'Mitä näet kuvassa?'],
    answerTemplate: '...ssa/llä on... Se näyttää... Minun mielestäni... Huomaan myös, että...',
    filledExample:
      'Kuvassa on kaupunkimaisema kesäpäivänä. Ihmiset kävelevät kadulla, ja aurinko paistaa. Se näyttää rauhalliselta ja kesäiseltä. Huomaan myös, että kadun varrella on kahviloita ja pyöräilijöitä.',
    filledExampleBn: 'ছবিতে গ্রীষ্মের একটি শহুরে দৃশ্য দেখা যাচ্ছে। মানুষ রাস্তায় হাঁটছে এবং রোদ উঠেছে। এটি শান্ত ও গ্রীষ্মকালীন মনে হচ্ছে। আমি এটাও লক্ষ্য করছি যে রাস্তার পাশে ক্যাফে ও সাইকেল আরোহী আছে।',
    tips: [
      'Etene systemaattisesti: yleiskuva ensin, sitten yksityiskohdat, lopuksi oma vaikutelma.',
      'Sanat "näyttää", "vaikuttaa", "huomaan" pitävät puheen käynnissä, vaikka et tietäisi kaikkia sanoja kuvassa.',
    ],
  },
  {
    id: 'vertailu',
    patternName: 'Vertailu',
    patternNameBn: 'তুলনা',
    recognizeBy: ['Vertaile X:ää ja Y:tä', 'Mitä eroa on...', 'Kumpi on mielestäsi parempi...'],
    answerTemplate: 'X ja Y ovat molemmat..., mutta ne eroavat toisistaan. X on..., kun taas Y on... Toisaalta... Kaiken kaikkiaan...',
    filledExample:
      'Juna ja bussi ovat molemmat käteviä matkustustapoja, mutta ne eroavat toisistaan. Juna on yleensä nopeampi, kun taas bussi on halvempi. Toisaalta juna-asemat eivät ole aina lähellä. Kaiken kaikkiaan valitsen yleensä junan pitkillä matkoilla.',
    filledExampleBn: 'ট্রেন এবং বাস উভয়ই সুবিধাজনক ভ্রমণের উপায়, কিন্তু তারা একে অপরের থেকে আলাদা। ট্রেন সাধারণত দ্রুত, অন্যদিকে বাস সস্তা। অন্যদিকে ট্রেন স্টেশন সবসময় কাছে থাকে না। সব মিলিয়ে, লম্বা যাত্রায় আমি সাধারণত ট্রেন বেছে নিই।',
    tips: [
      'Runko "X on..., kun taas Y on..." toimii minkä tahansa kahden asian vertailuun — vain sanat vaihtuvat.',
      'Lopeta aina henkilökohtaisella kannalla ("valitsen yleensä...", "pidän enemmän...") — se osoittaa, että osaat myös perustella.',
    ],
  },
  {
    id: 'mielipide-puhe',
    patternName: 'Mielipiteen ilmaiseminen',
    patternNameBn: 'মতামত প্রকাশ',
    recognizeBy: ['Mitä mieltä olet...', 'Pitäisikö...', 'Onko mielestäsi hyvä idea...'],
    answerTemplate: 'Mielestäni... koska... Esimerkiksi... Toisaalta ymmärrän, että... Kaiken kaikkiaan uskon, että...',
    filledExample:
      'Mielestäni etätyö on hyvä asia, koska se antaa enemmän joustavuutta arkeen. Esimerkiksi voin hoitaa lapseni koulukyydin helpommin. Toisaalta ymmärrän, että kaikki työt eivät sovi etätyöhön. Kaiken kaikkiaan uskon, että joustavuus on tulevaisuuden avainsana.',
    filledExampleBn: 'আমার মতে দূরবর্তী কাজ একটি ভালো বিষয়, কারণ এটি দৈনন্দিন জীবনে বেশি নমনীয়তা দেয়। উদাহরণস্বরূপ, আমি আমার সন্তানের স্কুল যাতায়াত সহজে সামলাতে পারি। অন্যদিকে আমি বুঝি যে সব কাজ দূরবর্তী কাজের জন্য উপযুক্ত নয়। সব মিলিয়ে, আমি বিশ্বাস করি নমনীয়তাই ভবিষ্যতের মূল কথা।',
    tips: [
      'Sama runko kuin mielipidekirjoituksessa (kanta → perustelu → vastaväite → yhteenveto) — vain puhuttuna.',
      '"Esimerkiksi..." pakottaa sinut antamaan konkreettisen syyn, mikä nostaa vastauksen tasoa huomattavasti.',
    ],
  },
  {
    id: 'kertominen-menneesta',
    patternName: 'Menneestä tapahtumasta kertominen',
    patternNameBn: 'অতীত ঘটনার বর্ণনা',
    recognizeBy: ['Kerro, mitä teit...', 'Kuvaile tilanne, jolloin...', 'Muistatko kerran, kun...'],
    answerTemplate: 'Muistan kerran, kun... Ensin... Sitten... Lopuksi... Se oli...',
    filledExample:
      'Muistan kerran, kun matkustin ensimmäistä kertaa yksin Suomeen. Ensin olin hyvin hermostunut lentokentällä. Sitten löysin onneksi ystävällisen ihmisen, joka auttoi minua junalipun kanssa. Lopuksi pääsin perille turvallisesti. Se oli jännittävä mutta opettavainen kokemus.',
    filledExampleBn: 'আমার মনে আছে যখন আমি প্রথমবার একা ফিনল্যান্ডে ভ্রমণ করেছিলাম। প্রথমে বিমানবন্দরে আমি খুব নার্ভাস ছিলাম। তারপর সৌভাগ্যক্রমে একজন বন্ধুত্বপূর্ণ মানুষ পেলাম যিনি আমাকে ট্রেনের টিকিটে সাহায্য করেছিলেন। শেষে আমি নিরাপদে পৌঁছেছিলাম। এটি ছিল রোমাঞ্চকর কিন্তু শিক্ষণীয় অভিজ্ঞতা।',
    tips: [
      '"Ensin... Sitten... Lopuksi..." on tarinan runko, joka toimii mihin tahansa muistoon aiheesta riippumatta.',
      'Käytä imperfektiä (menin, näin, oli) — tämä on juuri se tilanne, jossa mennyt aika on luonnollinen valinta.',
    ],
  },
  {
    id: 'neuvon-antaminen',
    patternName: 'Neuvon tai ehdotuksen antaminen',
    patternNameBn: 'পরামর্শ বা প্রস্তাব দেওয়া',
    recognizeBy: ['Mitä neuvoisit...', 'Anna vinkki...', 'Mitä suosittelisit tehtävän...'],
    answerTemplate: 'Suosittelisin, että... Kannattaa myös... koska... Lisäksi on hyvä muistaa, että...',
    filledExample:
      'Suosittelisin, että uusi opiskelija harjoittelisi puhumista päivittäin, vaikka vain vähän kerrallaan. Kannattaa myös katsoa suomalaisia ohjelmia tekstityksellä, koska se totuttaa korvan kieleen. Lisäksi on hyvä muistaa, että virheet kuuluvat oppimiseen.',
    filledExampleBn: 'আমি পরামর্শ দেব যে নতুন শিক্ষার্থীর প্রতিদিন কথা বলার অনুশীলন করা উচিত, এমনকি প্রতিবার অল্প সময়ের জন্য হলেও। সাবটাইটেলসহ ফিনিশ অনুষ্ঠান দেখাও ভালো, কারণ এটি কানকে ভাষার সাথে অভ্যস্ত করে তোলে। এছাড়াও এটা মনে রাখা ভালো যে ভুল করাটাই শেখার অংশ।',
    tips: [
      'Kolmen neuvon runko ("Suosittelisin... Kannattaa myös... Lisäksi...") tekee vastauksesta rakenteellisesti vahvan.',
      'Konditionaali ("suosittelisin", "kannattaisi") kuulostaa kohteliaammalta kuin suora käsky.',
    ],
  },
  {
    id: 'syyn-selittaminen',
    patternName: 'Syyn tai perustelun selittäminen',
    patternNameBn: 'কারণ বা যুক্তি ব্যাখ্যা করা',
    recognizeBy: ['Miksi...', 'Mistä syystä...', 'Mikä selittää sen, että...'],
    answerTemplate: 'Tämä johtuu siitä, että... Lisäksi... Sen vuoksi/Tämän takia...',
    filledExample:
      'Yhä useampi opiskelee suomea verkossa. Tämä johtuu siitä, että etäopiskelu sopii paremmin työn ja perheen ohella opiskeleville. Lisäksi verkkokurssit ovat usein edullisempia. Sen vuoksi monet valitsevat verkko-opiskelun perinteisen luokkahuoneen sijaan.',
    filledExampleBn: 'ক্রমবর্ধমান মানুষ অনলাইনে ফিনিশ ভাষা শিখছে। এর কারণ হলো দূরশিক্ষা কাজ ও পরিবারের পাশাপাশি পড়াশোনার জন্য বেশি উপযোগী। এছাড়াও অনলাইন কোর্স প্রায়ই সাশ্রয়ী। তাই অনেকে ঐতিহ্যগত শ্রেণিকক্ষের বদলে অনলাইন পড়াশোনা বেছে নেয়।',
    tips: [
      '"Tämä johtuu siitä, että..." on turvallinen, luonnollinen tapa aloittaa mikä tahansa syy-selitys.',
      'Kaksi syytä ("Lisäksi...") riittää hyvään vastaukseen — ei tarvitse keksiä montaa.',
    ],
  },
  {
    id: 'tilannetehtava',
    patternName: 'Tilannetehtävä (nopea reagointi)',
    patternNameBn: 'পরিস্থিতি অনুশীলন (দ্রুত প্রতিক্রিয়া)',
    recognizeBy: ['Kysy...', 'Pyydä...', 'Selitä tilanne...', 'Mitä sanot tässä tilanteessa?'],
    answerTemplate:
      'Aloita tilanteeseen sopivalla tervehdyksellä tai anteeksipyynnöllä ("Anteeksi, kun häiritsen..."). Kerro pääasia yhdessä-kahdessa lauseessa. Lisää yksi konkreettinen yksityiskohta. Päätä kohteliaasti ("Kiitos avusta", "Olisiko mahdollista?").',
    filledExample:
      'Anteeksi, kun häiritsen, mutta tarvitsisin apua. Olen etsimässä lähintä apteekkia enkä löydä sitä kartasta. Osaisitteko neuvoa, mihin suuntaan pitäisi mennä? Kiitos paljon avusta!',
    filledExampleBn: 'দুঃখিত, বিরক্ত করার জন্য, কিন্তু আমার একটু সাহায্য দরকার। আমি নিকটতম ফার্মেসি খুঁজছি কিন্তু মানচিত্রে খুঁজে পাচ্ছি না। আপনি কি বলতে পারবেন কোন দিকে যেতে হবে? সাহায্যের জন্য অনেক ধন্যবাদ!',
    tips: [
      'Tilannetehtävässä aikaa on vähän — älä mieti täydellistä lausetta, vaan aloita heti sopivalla fraasilla (pyyntö, anteeksipyyntö, kysymys sen mukaan, mitä tilanne vaatii).',
      'Sama nelivaiheinen runko (aloitus → pääasia → yksityiskohta → kohtelias lopetus) toimii pyynnöissä, valituksissa, neuvoissa ja tiedon antamisessa — vain sävy ja sanat vaihtuvat tilanteen mukaan.',
      'Jos et heti keksi täydellistä sanaa, käytä täytesanoja (öö, tota, niinku) ja jatka lausetta — katkonaisuus haittaa vähemmän kuin pitkä hiljaisuus.',
    ],
  },
  {
    id: 'keskustelutehtava',
    patternName: 'Keskustelutehtävä (vuoropuhelu)',
    patternNameBn: 'কথোপকথন অনুশীলন (সংলাপ)',
    recognizeBy: ['Vastaa myöntävästi', 'Vastaa kieltävästi', 'Vastaa kysymykseen', 'Reagoi sopivalla tavalla', 'Vastaa. Keksi itse.'],
    answerTemplate:
      'Vastaa suoraan siihen, mitä ohje pyytää (kyllä/ei/tieto), ja lisää yksi täydentävä lause, jotta vastaus ei jää liian lyhyeksi. Kun ohje sanoo "keksi itse", keksi rohkeasti uskottava yksityiskohta (aika, määrä, syy) — vastauksen ei tarvitse olla totta, vain sujuva.',
    filledExample:
      'Ohje: "Vastaa myöntävästi ja kerro yksi syy." → Kyllä, olen kiinnostunut asiasta. Se sopisi hyvin aikatauluuni ensi viikolla, joten voisimme sopia tapaamisen silloin.',
    filledExampleBn: 'নির্দেশ: "হ্যাঁ বলুন এবং একটি কারণ জানান।" → হ্যাঁ, আমি এতে আগ্রহী। এটি আগামী সপ্তাহে আমার সময়সূচির সাথে ভালোভাবে মানানসই, তাই আমরা তখন সাক্ষাতের সময় ঠিক করতে পারি।',
    tips: [
      'Keskustelutehtävässä jokainen ohje on eri kysymys — vastaa aina täsmälleen siihen, mitä juuri kyseinen ohje pyytää (myöntävästi/kieltävästi/tieto), älä palaa edelliseen vuoroon.',
      '"Keksi itse" -ohje on lupa improvisoida: yksi konkreettinen keksitty yksityiskohta (kellonaika, määrä, nimi) kuulostaa aina uskottavammalta kuin yleinen "en tiedä" tai pitkä tauko.',
      'Pidä vastaukset lyhyinä ja luontevina — tämä on nopeatempoinen osa, jossa sujuvuus ja tilanteeseen sopiva reagointi painavat enemmän kuin täydellinen kielioppi.',
    ],
  },
]

export function writingTemplate(id: string): WritingTemplate | undefined {
  return WRITING_TEMPLATES.find((t) => t.id === id)
}

export function speakingPattern(id: string): SpeakingPattern | undefined {
  return SPEAKING_PATTERNS.find((p) => p.id === id)
}
