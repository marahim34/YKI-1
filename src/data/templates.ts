import type { SpeakingPattern, VerbAnswerExample, WritingTemplate } from '../types'

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
    whenUsedBn: 'যখন কাজটি বন্ধু, আত্মীয় বা পরিচিতজনকে দৈনন্দিন কোনো বিষয়ে লিখতে বলে।',
    opening: 'Hei [NIMI]! / Moi [NIMI]! — ja yksi lause siitä, miksi kirjoitat juuri nyt (esim. "Kiitos viestistäsi", "Kauan aikaa!", "Halusin kertoa...").',
    openingBn: 'Hei [নাম]! / Moi [নাম]! — এবং এক বাক্যে বলুন কেন এখন লিখছেন (যেমন "তোমার বার্তার জন্য ধন্যবাদ", "অনেক দিন পর!", "আমি জানাতে চেয়েছিলাম...")।',
    body: 'Kerro pääasia 2-3 lauseessa: mitä on tapahtunut, mitä toivot, tai mistä haluat kertoa. Lisää yksi konkreettinen yksityiskohta (aika, paikka, syy) tekstin uskottavuuden vuoksi.',
    bodyBn: 'মূল বিষয়টি ২-৩ বাক্যে বলুন: কী ঘটেছে, কী চান, বা কী জানাতে চান। বিশ্বাসযোগ্যতার জন্য একটি নির্দিষ্ট বিবরণ (সময়, স্থান, কারণ) যোগ করুন।',
    closing: 'Yksi lause, joka pyytää vastausta tai sopii tapaamisesta ("Vastaa pian!", "Nähdään pian!") + tervehdys ("Terveisin", "T. [NIMI]").',
    closingBn: 'একটি বাক্য যা উত্তর চায় বা দেখা করার কথা বলে ("তাড়াতাড়ি উত্তর দিও!", "শীঘ্রই দেখা হবে!") + শুভেচ্ছা ("শুভেচ্ছান্তে", "তোমার [নাম]")।',
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
    tipsBn: [
      'শুরু ও শেষ প্রায় একই রকম রাখা যায় প্রতিবার — শুধু মাঝের অংশের বিষয়বস্তু পরিবর্তন হয় বিষয় অনুযায়ী।',
      'একটি নির্দিষ্ট বিবরণ (সময়, স্থান, সংখ্যা) সাধারণ বক্তব্যের চেয়ে লেখাকে বেশি বিশ্বাসযোগ্য করে তোলে।',
      'অনানুষ্ঠানিক ভাষা (moi, terkuin) বন্ধুর জন্য উপযুক্ত; আরও আনুষ্ঠানিক ভাষা (সম্মানজনক শুভেচ্ছা) অপরিচিত প্রাপকের জন্য উপযুক্ত।',
    ],
  },
  {
    id: 'mielipidekirjoitus',
    taskType: 'Mielipidekirjoitus',
    taskTypeBn: 'মতামত রচনা',
    whenUsed: 'Kun tehtävä pyytää mielipidettä jostain aiheesta (esim. sanoma-/verkkolehteen, keskustelupalstalle).',
    whenUsedBn: 'যখন কাজটি কোনো বিষয়ে মতামত চায় (যেমন সংবাদপত্র/অনলাইন পত্রিকা বা আলোচনা ফোরামের জন্য)।',
    opening: 'Ilmaise kantasi heti ensimmäisessä lauseessa: "Mielestäni [AIHE] on..." tai "Olen sitä mieltä, että...".',
    openingBn: 'প্রথম বাক্যেই নিজের অবস্থান জানান: "আমার মতে [বিষয়] হলো..." বা "আমি মনে করি যে...".',
    body: 'Anna 2 perustelua omalle kannallesi ("Ensinnäkin... Toiseksi..."). Ota sitten huomioon vastakkainen näkökulma yhdellä lauseella ("Toisaalta on totta, että...") ennen kuin palaat omaan kantaasi.',
    bodyBn: 'নিজের অবস্থানের পক্ষে ২টি যুক্তি দিন ("প্রথমত... দ্বিতীয়ত...")। এরপর এক বাক্যে বিপরীত দৃষ্টিভঙ্গি বিবেচনা করুন ("অন্যদিকে এটাও সত্য যে...") নিজের অবস্থানে ফিরে আসার আগে।',
    closing: 'Yhteenveto, joka palaa alun kantaan: "Näin ollen uskon, että..." tai "Kaiken kaikkiaan...".',
    closingBn: 'একটি সারসংক্ষেপ যা শুরুর অবস্থানে ফিরে যায়: "তাই আমি বিশ্বাস করি যে..." বা "সব মিলিয়ে...".',
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
    tipsBn: [
      'এই একই কাঠামো (অবস্থান → ২টি যুক্তি → বিপরীত মত → সারসংক্ষেপ) প্রায় যেকোনো মতামত বিষয়ে কাজ করে।',
      '"অন্যদিকে" বাক্যটির মানে এই নয় যে আপনি মত পরিবর্তন করছেন — এটি দেখায় যে আপনি বিষয়টি বিভিন্ন দিক থেকে চিন্তা করেছেন, যা মূল্যায়নের একটি অংশ।',
      'খুব নিরঙ্কুশ ভাষা এড়িয়ে চলুন ("সবসময়", "সবাই") — "অনেক ক্ষেত্রে", "বেশিরভাগের জন্য" শুনতে বেশি পরিণত মনে হয়।',
    ],
  },
  {
    id: 'valitus',
    taskType: 'Valitus / reklamaatio',
    taskTypeBn: 'অভিযোগপত্র',
    whenUsed: 'Kun tehtävä pyytää valittamaan huonosta palvelusta, viallisesta tuotteesta tai virheestä.',
    whenUsedBn: 'যখন কাজটি খারাপ সেবা, ত্রুটিপূর্ণ পণ্য বা কোনো ভুলের বিরুদ্ধে অভিযোগ জানাতে বলে।',
    opening: 'Kerro heti, mistä tilauksesta/palvelusta on kyse ja milloin ("Tilasin/Ostin/Varasin [ASIA] [PÄIVÄMÄÄRÄ]...").',
    openingBn: 'সঙ্গে সঙ্গে বলুন কোন অর্ডার/সেবার কথা এবং কখন ("আমি অর্ডার করেছিলাম/কিনেছিলাম/বুক করেছিলাম [জিনিস] [তারিখ]...")।',
    body: 'Selitä täsmällisesti, mikä meni pieleen (1-2 konkreettista ongelmaa). Kerro myös, miten se vaikutti sinuun ("Tämän vuoksi...").',
    bodyBn: 'ঠিক কী ভুল হয়েছে তা ব্যাখ্যা করুন (১-২টি নির্দিষ্ট সমস্যা)। এটি আপনাকে কীভাবে প্রভাবিত করেছে তাও বলুন ("এর ফলে...")।',
    closing: 'Kerro selvästi, mitä toivot tapahtuvan ("Toivon, että saan hyvityksen / uuden tuotteen / rahat takaisin") + kohtelias mutta jämäkkä lopetus.',
    closingBn: 'স্পষ্টভাবে বলুন আপনি কী চান ("আমি আশা করি ক্ষতিপূরণ / নতুন পণ্য / টাকা ফেরত পাব") + ভদ্র কিন্তু দৃঢ় সমাপ্তি।',
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
    tipsBn: [
      'সুর যুক্তিসঙ্গত রাখুন, রাগান্বিত নয় — YKI মূল্যায়নে ভালো সুর কাজের একটি গুরুত্বপূর্ণ অংশ।',
      'একটি নির্দিষ্ট তারিখ/অর্ডার নম্বর অভিযোগকে বিশ্বাসযোগ্য করে তোলে, এমনকি যদি সেটি কাজের জন্য বানানো হয়।',
      'শেষে সবসময় স্পষ্টভাবে বলুন আপনি কী হতে চান — শুধু অভিযোগ করাই যথেষ্ট নয়।',
    ],
  },
  {
    id: 'kutsu',
    taskType: 'Kutsu',
    taskTypeBn: 'আমন্ত্রণপত্র',
    whenUsed: 'Kun tehtävä pyytää kutsumaan jonkun tapahtumaan (juhla, kokous, tapaaminen).',
    whenUsedBn: 'যখন কাজটি কাউকে কোনো অনুষ্ঠানে (পার্টি, সভা, সাক্ষাৎ) আমন্ত্রণ জানাতে বলে।',
    opening: 'Kerro heti mihin kutsut: "Kutsun sinut/teidät [TAPAHTUMA]:aan/:än".',
    openingBn: 'সঙ্গে সঙ্গে বলুন কীসের জন্য আমন্ত্রণ জানাচ্ছেন: "আমি তোমাকে/আপনাদের [অনুষ্ঠান]-এ আমন্ত্রণ জানাচ্ছি"।',
    body: 'Kerro käytännön tiedot: milloin (päivä + kellonaika), missä (paikka/osoite), ja mitä tapahtuu (lyhyt kuvaus ohjelmasta tai syy juhlaan).',
    bodyBn: 'ব্যবহারিক তথ্য দিন: কখন (দিন + সময়), কোথায় (স্থান/ঠিকানা), এবং কী ঘটবে (অনুষ্ঠানের সংক্ষিপ্ত বিবরণ বা উদযাপনের কারণ)।',
    closing: 'Pyydä vahvistusta osallistumisesta ("Ilmoitathan, tuletko mukaan") + ystävällinen lopetus.',
    closingBn: 'অংশগ্রহণের নিশ্চয়তা চান ("জানিও তুমি আসছো কিনা") + বন্ধুত্বপূর্ণ সমাপ্তি।',
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
    tipsBn: [
      'ব্যবহারিক তথ্য (সময়, স্থান) সাজানো ভাষার চেয়ে বেশি গুরুত্বপূর্ণ — এগুলো ভুলে যাবেন না।',
      'আনুষ্ঠানিকতা পরিবর্তিত হয়: প্রতিবেশী/বন্ধুদের জন্য আরও স্বাচ্ছন্দ্যপূর্ণ সুর, কর্মস্থলের জন্য একটু বেশি আনুষ্ঠানিক।',
      'অংশগ্রহণ নিশ্চিতকরণ চাওয়া ("জানিও") এই ধরনের লেখার একটি সাধারণ ও প্রত্যাশিত সমাপ্তি।',
    ],
  },
  {
    id: 'tiedote',
    taskType: 'Tiedote / ilmoitus',
    taskTypeBn: 'বিজ্ঞপ্তি / নোটিশ',
    whenUsed: 'Kun tehtävä pyytää kirjoittamaan virallisemman ilmoituksen (esim. taloyhtiölle, työpaikalle, ryhmälle).',
    whenUsedBn: 'যখন কাজটি একটি আরও আনুষ্ঠানিক বিজ্ঞপ্তি লিখতে বলে (যেমন হাউজিং কোম্পানি, কর্মস্থল বা কোনো দলের জন্য)।',
    opening: 'Kerro heti ilmoituksen aihe otsikkomaisesti tai ensimmäisessä lauseessa: "Tiedotamme, että..." / "Ilmoitamme teille, että...".',
    openingBn: 'বিজ্ঞপ্তির বিষয় শিরোনামের মতো বা প্রথম বাক্যে বলুন: "আমরা জানাচ্ছি যে..." / "আমরা আপনাদের জানাচ্ছি যে...".',
    body: 'Kerro olennaiset yksityiskohdat selkeästi (mitä, milloin, missä, keitä koskee) — käytä tarvittaessa lyhyitä, listamaisia lauseita.',
    bodyBn: 'প্রয়োজনীয় বিবরণ স্পষ্টভাবে দিন (কী, কখন, কোথায়, কাদের সম্পর্কিত) — প্রয়োজনে সংক্ষিপ্ত, তালিকার মতো বাক্য ব্যবহার করুন।',
    closing: 'Kerro, mistä saa lisätietoa tai keneen ottaa yhteyttä, + kohtelias lopetus ("Kiitos yhteistyöstä", "Ystävällisin terveisin").',
    closingBn: 'কোথায় আরও তথ্য পাওয়া যাবে বা কার সাথে যোগাযোগ করতে হবে তা বলুন, + ভদ্র সমাপ্তি ("সহযোগিতার জন্য ধন্যবাদ", "শুভেচ্ছান্তে")।',
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
    tipsBn: [
      'বিজ্ঞপ্তি বন্ধুকে লেখা বার্তার চেয়ে বেশি আনুষ্ঠানিক — কথ্য ভাষা (mä, sä) এড়িয়ে চলুন।',
      'চারটি প্রশ্নই (কী, কখন, কোথায়, কাদের সম্পর্কিত) ভালোভাবে কভার করা উচিত।',
      'প্যাসিভ রূপ ("আমরা জানাচ্ছি", "রক্ষণাবেক্ষণ করা হবে") বিজ্ঞপ্তির সুরের সাথে ভালোভাবে মানানসই।',
    ],
  },
  {
    id: 'kysely',
    taskType: 'Kysely / tiedustelu',
    taskTypeBn: 'জিজ্ঞাসা / তথ্য অনুসন্ধান',
    whenUsed:
      'Kun tehtävä pyytää ottamaan yhteyttä viralliseen tahoon (Kela, työnantaja, koulu, palveluntarjoaja) saadaksesi tietoa — et valita etkä pyydä lupaa, vaan haluat vain vastauksen kysymykseen.',
    whenUsedBn:
      'যখন কাজটি কোনো তথ্য পাওয়ার জন্য একটি সরকারি সংস্থার (Kela, নিয়োগকর্তা, স্কুল, সেবা প্রদানকারী) সাথে যোগাযোগ করতে বলে — আপনি অভিযোগ করছেন না বা অনুমতি চাইছেন না, শুধু প্রশ্নের উত্তর চান।',
    opening: 'Kerro lyhyesti, kuka olet ja miksi kirjoitat: "Kirjoitan, koska minulla on kysymys..." / "Haluaisin tiedustella...".',
    openingBn: 'সংক্ষেপে বলুন আপনি কে এবং কেন লিখছেন: "আমি লিখছি কারণ আমার একটি প্রশ্ন আছে..." / "আমি জানতে চাই...".',
    body: 'Anna yksi lause taustaa, joka auttaa vastaanottajaa ymmärtämään tilanteesi, ja esitä sitten kysymyksesi selvästi (1-2 kysymystä riittää — liian moni tekee vastaamisesta vaikeaa).',
    bodyBn:
      'এক বাক্যে প্রেক্ষাপট দিন যা প্রাপককে আপনার পরিস্থিতি বুঝতে সাহায্য করে, তারপর স্পষ্টভাবে আপনার প্রশ্ন জিজ্ঞাসা করুন (১-২টি প্রশ্নই যথেষ্ট — বেশি প্রশ্ন উত্তর দেওয়া কঠিন করে তোলে)।',
    closing: 'Kiitä etukäteen ja kerro, että odotat vastausta: "Kiitos jo etukäteen vastauksestanne" / "Odotan vastaustanne mielenkiinnolla."',
    closingBn: 'আগেই ধন্যবাদ জানান এবং বলুন যে আপনি উত্তরের অপেক্ষায় আছেন: "আপনার উত্তরের জন্য আগাম ধন্যবাদ" / "আপনার উত্তরের অপেক্ষায় রইলাম।"',
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
    tipsBn: [
      'প্রশ্নগুলো ১-২টির মধ্যে সীমাবদ্ধ রাখুন — তাহলে প্রাপকের পক্ষে নির্দিষ্টভাবে উত্তর দেওয়া সহজ হয়, এবং আপনার লেখা স্পষ্ট থাকে।',
      'প্রশ্নের আগে এক বাক্যে প্রেক্ষাপট ("আমি সম্প্রতি স্থানান্তরিত হয়েছি...", "আমরা সম্প্রতি এলাকায় এসেছি...") প্রাপককে আরও সঠিক উত্তর দিতে সাহায্য করে।',
      'এটি আবেদনপত্র থেকে আলাদা কারণ আপনি কোনো অনুমতি চাইছেন না — শুধু তথ্য চান। তাই "আমি অনুমতি চাই" জাতীয় বাক্য এড়িয়ে চলুন।',
    ],
  },
  {
    id: 'hakemus',
    taskType: 'Hakemus / anomus',
    taskTypeBn: 'আবেদনপত্র',
    whenUsed: 'Kun tehtävä pyytää pyytämään jotain viralliselta taholta (esim. vapaata työstä, lupaa, muutosta).',
    whenUsedBn: 'যখন কাজটি কোনো সরকারি সংস্থার কাছে কিছু চাইতে বলে (যেমন কাজ থেকে ছুটি, অনুমতি, পরিবর্তন)।',
    opening: 'Kerro heti, mitä pyydät ja keneltä: "Pyydän/Haen [ASIA]...".',
    openingBn: 'সঙ্গে সঙ্গে বলুন আপনি কী চান এবং কার কাছে: "আমি অনুরোধ করছি/আবেদন করছি [বিষয়]...".',
    body: 'Perustele pyyntösi 2-3 lauseessa: miksi tarvitset sitä, ja anna tarvittavat käytännön tiedot (ajankohta, kesto, syy).',
    bodyBn: '২-৩ বাক্যে আপনার অনুরোধের কারণ ব্যাখ্যা করুন: কেন এটি প্রয়োজন, এবং প্রয়োজনীয় ব্যবহারিক তথ্য দিন (সময়কাল, মেয়াদ, কারণ)।',
    closing: 'Pyydä kohteliaasti vastausta/päätöstä ("Toivon myönteistä vastausta", "Kiitän etukäteen") + muodollinen lopetus.',
    closingBn: 'ভদ্রভাবে উত্তর/সিদ্ধান্ত চান ("আমি একটি ইতিবাচক উত্তরের আশা করি", "আগাম ধন্যবাদ") + আনুষ্ঠানিক সমাপ্তি।',
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
    tipsBn: [
      'সবসময় সরাসরি অনুরোধ দিয়ে শুরু করুন — এটি লেখার মাঝে লুকিয়ে রাখবেন না।',
      'একটি ভালো কারণই যথেষ্ট; খুব বেশি কারণ অবিশ্বাস্য শোনাতে পারে।',
      'আনুষ্ঠানিক ভাষা ও ভদ্রতা ("আশা করি", "ধন্যবাদ জানাই") এই ধরনের লেখায় গুরুত্বপূর্ণ।',
    ],
  },
]

// A handful of common verbs, each shown answered both affirmatively and
// negatively — makes the very frequent "vastaa myöntävästi / vastaa
// kieltävästi" speaking-task instruction concrete instead of abstract.
export const POSITIVE_NEGATIVE_VERBS: VerbAnswerExample[] = [
  {
    verb: 'olla (olen / en ole)',
    verbEn: 'to be',
    positiveFi: 'Kyllä, olen valmis lähtemään.',
    negativeFi: 'En, en ole vielä valmis.',
    en: 'Yes, I am ready. / No, I am not ready yet.',
    bn: 'হ্যাঁ, আমি প্রস্তুত। / না, আমি এখনো প্রস্তুত নই।',
  },
  {
    verb: 'mennä (menen / en mene)',
    verbEn: 'to go',
    positiveFi: 'Kyllä, menen mielelläni mukaan.',
    negativeFi: 'En, en mene tänään.',
    en: 'Yes, I will gladly come along. / No, I am not going today.',
    bn: 'হ্যাঁ, আমি আনন্দের সাথে যাবো। / না, আমি আজ যাচ্ছি না।',
  },
  {
    verb: 'haluta (haluan / en halua)',
    verbEn: 'to want',
    positiveFi: 'Kyllä, haluan osallistua.',
    negativeFi: 'En, en halua osallistua tällä kertaa.',
    en: 'Yes, I want to take part. / No, I do not want to take part this time.',
    bn: 'হ্যাঁ, আমি অংশগ্রহণ করতে চাই। / না, আমি এবার অংশ নিতে চাই না।',
  },
  {
    verb: 'voida (voin / en voi)',
    verbEn: 'can / to be able to',
    positiveFi: 'Kyllä, voin auttaa sinua.',
    negativeFi: 'En, en voi auttaa juuri nyt.',
    en: 'Yes, I can help you. / No, I cannot help right now.',
    bn: 'হ্যাঁ, আমি তোমাকে সাহায্য করতে পারি। / না, আমি এখন সাহায্য করতে পারছি না।',
  },
  {
    verb: 'osata (osaan / en osaa)',
    verbEn: 'to know how to',
    positiveFi: 'Kyllä, osaan vastata tähän kysymykseen.',
    negativeFi: 'En, en osaa vielä vastata tähän.',
    en: 'Yes, I know how to answer this. / No, I do not know how to answer this yet.',
    bn: 'হ্যাঁ, আমি এই প্রশ্নের উত্তর দিতে জানি। / না, আমি এখনো এর উত্তর দিতে জানি না।',
  },
  {
    verb: 'tietää (tiedän / en tiedä)',
    verbEn: 'to know',
    positiveFi: 'Kyllä, tiedän missä paikka sijaitsee.',
    negativeFi: 'En, en tiedä tarkkaa osoitetta.',
    en: 'Yes, I know where the place is. / No, I do not know the exact address.',
    bn: 'হ্যাঁ, আমি জানি জায়গাটা কোথায়। / না, আমি সঠিক ঠিকানা জানি না।',
  },
  {
    verb: 'ehtiä (ehdin / en ehdi)',
    verbEn: 'to have time / to make it in time',
    positiveFi: 'Kyllä, ehdin tulla kello kymmeneen mennessä.',
    negativeFi: 'En, en ehdi tänään ollenkaan.',
    en: 'Yes, I can arrive by ten. / No, I have no time at all today.',
    bn: 'হ্যাঁ, আমি দশটার মধ্যে আসতে পারবো। / না, আজ আমার একদমই সময় নেই।',
  },
  {
    verb: 'pitää (pidän / en pidä)',
    verbEn: 'to like',
    positiveFi: 'Kyllä, pidän tästä ideasta.',
    negativeFi: 'En, en pidä tästä vaihtoehdosta.',
    en: 'Yes, I like this idea. / No, I do not like this option.',
    bn: 'হ্যাঁ, আমার এই ধারণাটা পছন্দ। / না, আমার এই বিকল্পটা পছন্দ নয়।',
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
    recognizeByBn: ['নিজের সম্পর্কে বলো', 'নিজের পরিচয় দাও', 'তুমি কে?'],
    answerTemplate: 'Nimeni on... Olen ...vuotta vanha ja kotoisin... Asun nykyään... Työskentelen/Opiskelen... Vapaa-ajallani...',
    answerTemplateBn: 'আমার নাম... আমার বয়স ...বছর এবং আমি ...থেকে এসেছি। এখন আমি ...-তে থাকি। আমি কাজ করি/পড়াশোনা করি... অবসর সময়ে আমি...',
    filledExample:
      'Nimeni on Amir. Olen 29-vuotias ja kotoisin Bangladeshista. Asun nykyään Tampereella. Opiskelen suomea kielikurssilla ja työskentelen osa-aikaisesti kaupassa. Vapaa-ajallani pidän lukemisesta ja kävelystä.',
    filledExampleBn: 'আমার নাম আমির। আমার বয়স ২৯ বছর এবং আমি বাংলাদেশ থেকে এসেছি। এখন আমি তামপেরেতে থাকি। আমি ফিনিশ ভাষার কোর্সে পড়াশোনা করি এবং একটি দোকানে খণ্ডকালীন কাজ করি। অবসর সময়ে আমার পড়া ও হাঁটতে ভালো লাগে।',
    tips: [
      'Tämä on lähes aina ensimmäinen kysymys — opettele tämä runko ulkoa niin ensimmäinen vastaus tulee automaattisesti.',
      'Sama runko toimii vaikka tarkka kysymyssana vaihtuisi ("Kerro itsestäsi" / "Kuka olet ja mistä tulet").',
    ],
    tipsBn: [
      'এটি প্রায় সবসময় প্রথম প্রশ্ন — এই কাঠামোটি মুখস্থ করে নিন যাতে প্রথম উত্তরটি স্বয়ংক্রিয়ভাবে আসে।',
      'একই কাঠামো কাজ করে যদিও নির্দিষ্ট প্রশ্নের শব্দ পরিবর্তন হয় ("নিজের সম্পর্কে বলো" / "তুমি কে এবং কোথা থেকে এসেছো")।',
    ],
  },
  {
    id: 'kuvailu',
    patternName: 'Kuvailu (kuva, paikka, henkilö)',
    patternNameBn: 'বর্ণনা (ছবি, স্থান, ব্যক্তি)',
    recognizeBy: ['Kuvaile...', 'Millainen ... on?', 'Mitä näet kuvassa?'],
    recognizeByBn: ['বর্ণনা করো...', '...কেমন?', 'ছবিতে তুমি কী দেখছো?'],
    answerTemplate: '...ssa/llä on... Se näyttää... Minun mielestäni... Huomaan myös, että...',
    answerTemplateBn: '...-তে আছে... এটি দেখতে... আমার মতে... আমি এটাও লক্ষ্য করছি যে...',
    filledExample:
      'Kuvassa on kaupunkimaisema kesäpäivänä. Ihmiset kävelevät kadulla, ja aurinko paistaa. Se näyttää rauhalliselta ja kesäiseltä. Huomaan myös, että kadun varrella on kahviloita ja pyöräilijöitä.',
    filledExampleBn: 'ছবিতে গ্রীষ্মের একটি শহুরে দৃশ্য দেখা যাচ্ছে। মানুষ রাস্তায় হাঁটছে এবং রোদ উঠেছে। এটি শান্ত ও গ্রীষ্মকালীন মনে হচ্ছে। আমি এটাও লক্ষ্য করছি যে রাস্তার পাশে ক্যাফে ও সাইকেল আরোহী আছে।',
    tips: [
      'Etene systemaattisesti: yleiskuva ensin, sitten yksityiskohdat, lopuksi oma vaikutelma.',
      'Sanat "näyttää", "vaikuttaa", "huomaan" pitävät puheen käynnissä, vaikka et tietäisi kaikkia sanoja kuvassa.',
    ],
    tipsBn: [
      'পদ্ধতিগতভাবে এগোন: প্রথমে সামগ্রিক দৃশ্য, তারপর বিস্তারিত, সবশেষে নিজের ধারণা।',
      '"দেখতে", "মনে হয়", "লক্ষ্য করছি" শব্দগুলো কথা চালু রাখে, এমনকি যদি ছবির সব শব্দ না জানেন।',
    ],
  },
  {
    id: 'vertailu',
    patternName: 'Vertailu',
    patternNameBn: 'তুলনা',
    recognizeBy: ['Vertaile X:ää ja Y:tä', 'Mitä eroa on...', 'Kumpi on mielestäsi parempi...'],
    recognizeByBn: ['X এবং Y তুলনা করো', '...মধ্যে পার্থক্য কী', 'তোমার মতে কোনটি ভালো...'],
    answerTemplate: 'X ja Y ovat molemmat..., mutta ne eroavat toisistaan. X on..., kun taas Y on... Toisaalta... Kaiken kaikkiaan...',
    answerTemplateBn: 'X এবং Y উভয়েই..., কিন্তু তারা একে অপরের থেকে ভিন্ন। X হলো..., অন্যদিকে Y হলো... অন্যদিকে... সব মিলিয়ে...',
    filledExample:
      'Juna ja bussi ovat molemmat käteviä matkustustapoja, mutta ne eroavat toisistaan. Juna on yleensä nopeampi, kun taas bussi on halvempi. Toisaalta juna-asemat eivät ole aina lähellä. Kaiken kaikkiaan valitsen yleensä junan pitkillä matkoilla.',
    filledExampleBn: 'ট্রেন এবং বাস উভয়ই সুবিধাজনক ভ্রমণের উপায়, কিন্তু তারা একে অপরের থেকে আলাদা। ট্রেন সাধারণত দ্রুত, অন্যদিকে বাস সস্তা। অন্যদিকে ট্রেন স্টেশন সবসময় কাছে থাকে না। সব মিলিয়ে, লম্বা যাত্রায় আমি সাধারণত ট্রেন বেছে নিই।',
    tips: [
      'Runko "X on..., kun taas Y on..." toimii minkä tahansa kahden asian vertailuun — vain sanat vaihtuvat.',
      'Lopeta aina henkilökohtaisella kannalla ("valitsen yleensä...", "pidän enemmän...") — se osoittaa, että osaat myös perustella.',
    ],
    tipsBn: [
      '"X হলো..., অন্যদিকে Y হলো..." কাঠামোটি যেকোনো দুটি জিনিসের তুলনায় কাজ করে — শুধু শব্দ পরিবর্তন হয়।',
      'সবসময় ব্যক্তিগত মতামত দিয়ে শেষ করুন ("আমি সাধারণত বেছে নিই...", "আমার বেশি পছন্দ...") — এটি দেখায় যে আপনি যুক্তি দিতেও জানেন।',
    ],
  },
  {
    id: 'mielipide-puhe',
    patternName: 'Mielipiteen ilmaiseminen',
    patternNameBn: 'মতামত প্রকাশ',
    recognizeBy: ['Mitä mieltä olet...', 'Pitäisikö...', 'Onko mielestäsi hyvä idea...'],
    recognizeByBn: ['তুমি এই বিষয়ে কী মনে করো...', '...উচিত কি', 'তোমার মতে এটা কি ভালো ধারণা...'],
    answerTemplate: 'Mielestäni... koska... Esimerkiksi... Toisaalta ymmärrän, että... Kaiken kaikkiaan uskon, että...',
    answerTemplateBn: 'আমার মতে... কারণ... উদাহরণস্বরূপ... অন্যদিকে আমি বুঝি যে... সব মিলিয়ে আমি বিশ্বাস করি যে...',
    filledExample:
      'Mielestäni etätyö on hyvä asia, koska se antaa enemmän joustavuutta arkeen. Esimerkiksi voin hoitaa lapseni koulukyydin helpommin. Toisaalta ymmärrän, että kaikki työt eivät sovi etätyöhön. Kaiken kaikkiaan uskon, että joustavuus on tulevaisuuden avainsana.',
    filledExampleBn: 'আমার মতে দূরবর্তী কাজ একটি ভালো বিষয়, কারণ এটি দৈনন্দিন জীবনে বেশি নমনীয়তা দেয়। উদাহরণস্বরূপ, আমি আমার সন্তানের স্কুল যাতায়াত সহজে সামলাতে পারি। অন্যদিকে আমি বুঝি যে সব কাজ দূরবর্তী কাজের জন্য উপযুক্ত নয়। সব মিলিয়ে, আমি বিশ্বাস করি নমনীয়তাই ভবিষ্যতের মূল কথা।',
    tips: [
      'Sama runko kuin mielipidekirjoituksessa (kanta → perustelu → vastaväite → yhteenveto) — vain puhuttuna.',
      '"Esimerkiksi..." pakottaa sinut antamaan konkreettisen syyn, mikä nostaa vastauksen tasoa huomattavasti.',
    ],
    tipsBn: [
      'মতামত রচনার মতোই একই কাঠামো (অবস্থান → যুক্তি → বিপরীত মত → সারসংক্ষেপ) — শুধু কথা বলে।',
      '"উদাহরণস্বরূপ..." আপনাকে একটি নির্দিষ্ট কারণ দিতে বাধ্য করে, যা উত্তরের মান অনেক বাড়িয়ে দেয়।',
    ],
  },
  {
    id: 'kertominen-menneesta',
    patternName: 'Menneestä tapahtumasta kertominen',
    patternNameBn: 'অতীত ঘটনার বর্ণনা',
    recognizeBy: ['Kerro, mitä teit...', 'Kuvaile tilanne, jolloin...', 'Muistatko kerran, kun...'],
    recognizeByBn: ['তুমি কী করেছিলে বলো...', 'সেই পরিস্থিতির বর্ণনা দাও, যখন...', 'মনে আছে কি একবার যখন...'],
    answerTemplate: 'Muistan kerran, kun... Ensin... Sitten... Lopuksi... Se oli...',
    answerTemplateBn: 'আমার মনে আছে একবার যখন... প্রথমে... তারপর... শেষে... সেটা ছিল...',
    filledExample:
      'Muistan kerran, kun matkustin ensimmäistä kertaa yksin Suomeen. Ensin olin hyvin hermostunut lentokentällä. Sitten löysin onneksi ystävällisen ihmisen, joka auttoi minua junalipun kanssa. Lopuksi pääsin perille turvallisesti. Se oli jännittävä mutta opettavainen kokemus.',
    filledExampleBn: 'আমার মনে আছে যখন আমি প্রথমবার একা ফিনল্যান্ডে ভ্রমণ করেছিলাম। প্রথমে বিমানবন্দরে আমি খুব নার্ভাস ছিলাম। তারপর সৌভাগ্যক্রমে একজন বন্ধুত্বপূর্ণ মানুষ পেলাম যিনি আমাকে ট্রেনের টিকিটে সাহায্য করেছিলেন। শেষে আমি নিরাপদে পৌঁছেছিলাম। এটি ছিল রোমাঞ্চকর কিন্তু শিক্ষণীয় অভিজ্ঞতা।',
    tips: [
      '"Ensin... Sitten... Lopuksi..." on tarinan runko, joka toimii mihin tahansa muistoon aiheesta riippumatta.',
      'Käytä imperfektiä (menin, näin, oli) — tämä on juuri se tilanne, jossa mennyt aika on luonnollinen valinta.',
    ],
    tipsBn: [
      '"প্রথমে... তারপর... শেষে..." গল্পের কাঠামো, যা বিষয় নির্বিশেষে যেকোনো স্মৃতিতে কাজ করে।',
      'ইমপারফেক্ট কাল ব্যবহার করুন (গিয়েছিলাম, দেখেছিলাম, ছিল) — এটাই সেই পরিস্থিতি যেখানে অতীতকাল স্বাভাবিক পছন্দ।',
    ],
  },
  {
    id: 'neuvon-antaminen',
    patternName: 'Neuvon tai ehdotuksen antaminen',
    patternNameBn: 'পরামর্শ বা প্রস্তাব দেওয়া',
    recognizeBy: ['Mitä neuvoisit...', 'Anna vinkki...', 'Mitä suosittelisit tehtävän...'],
    recognizeByBn: ['তুমি কী পরামর্শ দেবে...', 'একটি টিপ দাও...', 'তুমি কী সুপারিশ করবে...'],
    answerTemplate: 'Suosittelisin, että... Kannattaa myös... koska... Lisäksi on hyvä muistaa, että...',
    answerTemplateBn: 'আমি সুপারিশ করবো যে... এটাও ভালো হবে... কারণ... এছাড়াও মনে রাখা ভালো যে...',
    filledExample:
      'Suosittelisin, että uusi opiskelija harjoittelisi puhumista päivittäin, vaikka vain vähän kerrallaan. Kannattaa myös katsoa suomalaisia ohjelmia tekstityksellä, koska se totuttaa korvan kieleen. Lisäksi on hyvä muistaa, että virheet kuuluvat oppimiseen.',
    filledExampleBn: 'আমি পরামর্শ দেব যে নতুন শিক্ষার্থীর প্রতিদিন কথা বলার অনুশীলন করা উচিত, এমনকি প্রতিবার অল্প সময়ের জন্য হলেও। সাবটাইটেলসহ ফিনিশ অনুষ্ঠান দেখাও ভালো, কারণ এটি কানকে ভাষার সাথে অভ্যস্ত করে তোলে। এছাড়াও এটা মনে রাখা ভালো যে ভুল করাটাই শেখার অংশ।',
    tips: [
      'Kolmen neuvon runko ("Suosittelisin... Kannattaa myös... Lisäksi...") tekee vastauksesta rakenteellisesti vahvan.',
      'Konditionaali ("suosittelisin", "kannattaisi") kuulostaa kohteliaammalta kuin suora käsky.',
    ],
    tipsBn: [
      'তিনটি পরামর্শের কাঠামো ("আমি সুপারিশ করবো... এটাও ভালো হবে... এছাড়াও...") উত্তরকে কাঠামোগতভাবে শক্তিশালী করে।',
      'কন্ডিশনাল রূপ ("সুপারিশ করবো", "ভালো হবে") সরাসরি আদেশের চেয়ে বেশি ভদ্র শোনায়।',
    ],
  },
  {
    id: 'syyn-selittaminen',
    patternName: 'Syyn tai perustelun selittäminen',
    patternNameBn: 'কারণ বা যুক্তি ব্যাখ্যা করা',
    recognizeBy: ['Miksi...', 'Mistä syystä...', 'Mikä selittää sen, että...'],
    recognizeByBn: ['কেন...', 'কী কারণে...', 'কী ব্যাখ্যা করে যে...'],
    answerTemplate: 'Tämä johtuu siitä, että... Lisäksi... Sen vuoksi/Tämän takia...',
    answerTemplateBn: 'এটি এই কারণে হয় যে... এছাড়াও... তাই/এই কারণে...',
    filledExample:
      'Yhä useampi opiskelee suomea verkossa. Tämä johtuu siitä, että etäopiskelu sopii paremmin työn ja perheen ohella opiskeleville. Lisäksi verkkokurssit ovat usein edullisempia. Sen vuoksi monet valitsevat verkko-opiskelun perinteisen luokkahuoneen sijaan.',
    filledExampleBn: 'ক্রমবর্ধমান মানুষ অনলাইনে ফিনিশ ভাষা শিখছে। এর কারণ হলো দূরশিক্ষা কাজ ও পরিবারের পাশাপাশি পড়াশোনার জন্য বেশি উপযোগী। এছাড়াও অনলাইন কোর্স প্রায়ই সাশ্রয়ী। তাই অনেকে ঐতিহ্যগত শ্রেণিকক্ষের বদলে অনলাইন পড়াশোনা বেছে নেয়।',
    tips: [
      '"Tämä johtuu siitä, että..." on turvallinen, luonnollinen tapa aloittaa mikä tahansa syy-selitys.',
      'Kaksi syytä ("Lisäksi...") riittää hyvään vastaukseen — ei tarvitse keksiä montaa.',
    ],
    tipsBn: [
      '"এটি এই কারণে হয় যে..." যেকোনো কারণ ব্যাখ্যা শুরু করার একটি নিরাপদ, স্বাভাবিক উপায়।',
      'দুটি কারণই ("এছাড়াও...") একটি ভালো উত্তরের জন্য যথেষ্ট — অনেকগুলো বানানোর দরকার নেই।',
    ],
  },
  {
    id: 'tilannetehtava',
    patternName: 'Tilannetehtävä (nopea reagointi)',
    patternNameBn: 'পরিস্থিতি অনুশীলন (দ্রুত প্রতিক্রিয়া)',
    recognizeBy: ['Kysy...', 'Pyydä...', 'Selitä tilanne...', 'Mitä sanot tässä tilanteessa?'],
    recognizeByBn: ['জিজ্ঞাসা করো...', 'অনুরোধ করো...', 'পরিস্থিতি ব্যাখ্যা করো...', 'এই পরিস্থিতিতে তুমি কী বলবে?'],
    answerTemplate:
      'Aloita tilanteeseen sopivalla tervehdyksellä tai anteeksipyynnöllä ("Anteeksi, kun häiritsen..."). Kerro pääasia yhdessä-kahdessa lauseessa. Lisää yksi konkreettinen yksityiskohta. Päätä kohteliaasti ("Kiitos avusta", "Olisiko mahdollista?").',
    answerTemplateBn:
      'পরিস্থিতির সাথে মানানসই শুভেচ্ছা বা ক্ষমা প্রার্থনা দিয়ে শুরু করুন ("দুঃখিত, বিরক্ত করছি বলে...")। এক-দুই বাক্যে মূল বিষয় বলুন। একটি নির্দিষ্ট বিবরণ যোগ করুন। ভদ্রভাবে শেষ করুন ("সাহায্যের জন্য ধন্যবাদ", "এটা কি সম্ভব হবে?")।',
    filledExample:
      'Anteeksi, kun häiritsen, mutta tarvitsisin apua. Olen etsimässä lähintä apteekkia enkä löydä sitä kartasta. Osaisitteko neuvoa, mihin suuntaan pitäisi mennä? Kiitos paljon avusta!',
    filledExampleBn: 'দুঃখিত, বিরক্ত করার জন্য, কিন্তু আমার একটু সাহায্য দরকার। আমি নিকটতম ফার্মেসি খুঁজছি কিন্তু মানচিত্রে খুঁজে পাচ্ছি না। আপনি কি বলতে পারবেন কোন দিকে যেতে হবে? সাহায্যের জন্য অনেক ধন্যবাদ!',
    tips: [
      'Tilannetehtävässä aikaa on vähän — älä mieti täydellistä lausetta, vaan aloita heti sopivalla fraasilla (pyyntö, anteeksipyyntö, kysymys sen mukaan, mitä tilanne vaatii).',
      'Sama nelivaiheinen runko (aloitus → pääasia → yksityiskohta → kohtelias lopetus) toimii pyynnöissä, valituksissa, neuvoissa ja tiedon antamisessa — vain sävy ja sanat vaihtuvat tilanteen mukaan.',
      'Jos et heti keksi täydellistä sanaa, käytä täytesanoja (öö, tota, niinku) ja jatka lausetta — katkonaisuus haittaa vähemmän kuin pitkä hiljaisuus.',
    ],
    tipsBn: [
      'পরিস্থিতি অনুশীলনে সময় কম থাকে — নিখুঁত বাক্য নিয়ে ভাববেন না, বরং পরিস্থিতি অনুযায়ী উপযুক্ত বাক্যাংশ দিয়ে সঙ্গে সঙ্গে শুরু করুন (অনুরোধ, ক্ষমা প্রার্থনা, প্রশ্ন)।',
      'একই চার-ধাপের কাঠামো (শুরু → মূল বিষয় → বিবরণ → ভদ্র সমাপ্তি) অনুরোধ, অভিযোগ, পরামর্শ এবং তথ্য দেওয়ার ক্ষেত্রেও কাজ করে — শুধু সুর ও শব্দ পরিবর্তিত হয়।',
      'যদি সঙ্গে সঙ্গে সঠিক শব্দ মনে না আসে, তাহলে ভরাট শব্দ ব্যবহার করুন (öö, tota, niinku) এবং বাক্য চালিয়ে যান — খেই হারানো দীর্ঘ নীরবতার চেয়ে কম ক্ষতিকর।',
    ],
  },
  {
    id: 'keskustelutehtava',
    patternName: 'Keskustelutehtävä (vuoropuhelu)',
    patternNameBn: 'কথোপকথন অনুশীলন (সংলাপ)',
    recognizeBy: ['Vastaa myöntävästi', 'Vastaa kieltävästi', 'Vastaa kysymykseen', 'Reagoi sopivalla tavalla', 'Vastaa. Keksi itse.'],
    recognizeByBn: [
      'ইতিবাচক উত্তর দাও',
      'নেতিবাচক উত্তর দাও',
      'প্রশ্নের উত্তর দাও',
      'উপযুক্তভাবে প্রতিক্রিয়া জানাও',
      'নিজে থেকে ভেবে উত্তর দাও',
    ],
    answerTemplate:
      'Vastaa suoraan siihen, mitä ohje pyytää (kyllä/ei/tieto), ja lisää yksi täydentävä lause, jotta vastaus ei jää liian lyhyeksi. Kun ohje sanoo "keksi itse", keksi rohkeasti uskottava yksityiskohta (aika, määrä, syy) — vastauksen ei tarvitse olla totta, vain sujuva.',
    answerTemplateBn:
      'নির্দেশনা যা চায় তার সরাসরি উত্তর দিন (হ্যাঁ/না/তথ্য), এবং একটি সম্পূরক বাক্য যোগ করুন যাতে উত্তর খুব ছোট না হয়ে যায়। যখন নির্দেশনায় "নিজে থেকে ভেবে বলো" লেখা থাকে, সাহসের সাথে একটি বিশ্বাসযোগ্য বিবরণ (সময়, সংখ্যা, কারণ) বানিয়ে নিন — উত্তর সত্যি হতে হবে না, শুধু স্বাভাবিক শোনাতে হবে।',
    filledExample:
      'Ohje: "Vastaa myöntävästi ja kerro yksi syy." → Kyllä, olen kiinnostunut asiasta. Se sopisi hyvin aikatauluuni ensi viikolla, joten voisimme sopia tapaamisen silloin.',
    filledExampleBn: 'নির্দেশ: "হ্যাঁ বলুন এবং একটি কারণ জানান।" → হ্যাঁ, আমি এতে আগ্রহী। এটি আগামী সপ্তাহে আমার সময়সূচির সাথে ভালোভাবে মানানসই, তাই আমরা তখন সাক্ষাতের সময় ঠিক করতে পারি।',
    tips: [
      'Keskustelutehtävässä jokainen ohje on eri kysymys — vastaa aina täsmälleen siihen, mitä juuri kyseinen ohje pyytää (myöntävästi/kieltävästi/tieto), älä palaa edelliseen vuoroon.',
      '"Keksi itse" -ohje on lupa improvisoida: yksi konkreettinen keksitty yksityiskohta (kellonaika, määrä, nimi) kuulostaa aina uskottavammalta kuin yleinen "en tiedä" tai pitkä tauko.',
      'Pidä vastaukset lyhyinä ja luontevina — tämä on nopeatempoinen osa, jossa sujuvuus ja tilanteeseen sopiva reagointi painavat enemmän kuin täydellinen kielioppi.',
    ],
    tipsBn: [
      'কথোপকথন অনুশীলনে প্রতিটি নির্দেশনা একটি আলাদা প্রশ্ন — সবসময় ঠিক সেই নির্দেশনা যা চায় তার উত্তর দিন (ইতিবাচক/নেতিবাচক/তথ্য), আগের পালায় ফিরে যাবেন না।',
      '"নিজে থেকে ভেবে বলো" নির্দেশনা মানে ইম্প্রোভাইজ করার অনুমতি — একটি নির্দিষ্ট বানানো বিবরণ (সময়, সংখ্যা, নাম) সবসময় সাধারণ "জানি না" বা দীর্ঘ বিরতির চেয়ে বেশি বিশ্বাসযোগ্য শোনায়।',
      'উত্তর সংক্ষিপ্ত ও স্বাভাবিক রাখুন — এটি দ্রুতগতির অংশ, যেখানে সাবলীলতা ও পরিস্থিতির সাথে মানানসই প্রতিক্রিয়া নিখুঁত ব্যাকরণের চেয়ে বেশি গুরুত্বপূর্ণ।',
    ],
    verbTable: POSITIVE_NEGATIVE_VERBS,
  },
]

export function writingTemplate(id: string): WritingTemplate | undefined {
  return WRITING_TEMPLATES.find((t) => t.id === id)
}

export function speakingPattern(id: string): SpeakingPattern | undefined {
  return SPEAKING_PATTERNS.find((p) => p.id === id)
}
