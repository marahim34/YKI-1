export interface GrammarTableCell {
  fi: string
  bn?: string
}

export interface GrammarTableRow {
  cells: GrammarTableCell[]
}

export interface GrammarMiniTable {
  id: string
  title: string
  titleBn: string
  intro: string
  introBn: string
  columns: string[]
  rows: GrammarTableRow[]
  // The GrammarTopic (src/data/grammar.ts) with the full explanation for
  // this whole mini-table's subject.
  topicId: string
}

function cell(fi: string, bn?: string): GrammarTableCell {
  return { fi, bn }
}

// A batch of small paradigm tables covering the remaining major grammar
// systems that have a natural table shape (a fixed, comparable set of
// forms) — complementing CASE_TABLE, VERB_TYPE_TABLE and VERB_TENSE_TABLE.
// Each links to its existing full-depth GrammarTopic via topicId.
export const GRAMMAR_MINI_TABLES: GrammarMiniTable[] = [
  {
    id: 'pronominit-olla',
    title: 'Persoonapronominit ja olla-verbi',
    titleBn: 'ব্যক্তিবাচক সর্বনাম ও olla-ক্রিয়া',
    intro:
      'Persoonapronominit ja "olla"-verbin taivutus myönteisenä ja kielteisenä — opettele tämä ensimmäisenä, sillä sama persoonakaava toistuu lähes kaikissa muissa aikamuodoissa ja tapaluokissa.',
    introBn:
      'ব্যক্তিবাচক সর্বনাম এবং "olla" ক্রিয়ার ইতিবাচক ও নেতিবাচক রূপ — এগুলো প্রথমে শিখুন, কারণ একই ব্যক্তি-কাঠামো প্রায় সব অন্যান্য কাল ও ভাবেও পুনরাবৃত্তি হয়।',
    columns: ['Pronomini', 'Olla (myönteinen)', 'Olla (kielteinen)', 'Esimerkki'],
    rows: [
      { cells: [cell('minä', 'আমি'), cell('olen'), cell('en ole'), cell('Minä olen opiskelija.', 'আমি একজন শিক্ষার্থী।')] },
      { cells: [cell('sinä', 'তুমি'), cell('olet'), cell('et ole'), cell('Sinä olet ystävällinen.', 'তুমি বন্ধুত্বপূর্ণ।')] },
      { cells: [cell('hän', 'সে (he/she)'), cell('on'), cell('ei ole'), cell('Hän on Suomesta.', 'সে ফিনল্যান্ড থেকে।')] },
      { cells: [cell('me', 'আমরা'), cell('olemme'), cell('emme ole'), cell('Me olemme kotona.', 'আমরা বাড়িতে আছি।')] },
      { cells: [cell('te', 'তোমরা / আপনি'), cell('olette'), cell('ette ole'), cell('Te olette ystäviä.', 'তোমরা বন্ধু।')] },
      { cells: [cell('he', 'তারা'), cell('ovat'), cell('eivät ole'), cell('He ovat töissä.', 'তারা কাজে আছে।')] },
    ],
    topicId: 'persoonapronominit-olla',
  },
  {
    id: 'omistusliitteet',
    title: 'Omistusliitteet',
    titleBn: 'অধিকারবাচক প্রত্যয়',
    intro: 'Kuka-omistaa-liite kiinnittyy sanan loppuun kaikkien sijapäätteiden jälkeen: talo-ssa-ni ("minun talossani").',
    introBn: '"কার" তা বোঝাতে প্রত্যয়টি শব্দের শেষে যুক্ত হয়, সব সিজা-প্রত্যয়ের পরে: talo-ssa-ni ("আমার বাড়িতে")।',
    columns: ['Liite', 'Merkitys', 'Esimerkki (koti)', 'Käännös'],
    rows: [
      { cells: [cell('-ni'), cell('minun', 'আমার'), cell('kotini'), cell('my home', 'আমার বাড়ি')] },
      { cells: [cell('-si'), cell('sinun', 'তোমার'), cell('kotisi'), cell('your home', 'তোমার বাড়ি')] },
      {
        cells: [
          cell('-nsa/-nsä'),
          cell('hänen / heidän', '3. persoona: তার / তাদের'),
          cell('kotinsa'),
          cell('his/her/their (own) home — ambiguous, spoken Finnish usually adds hänen/heidän for clarity', 'অস্পষ্ট — কথ্য ভাষায় সাধারণত hänen/heidän যোগ করা হয় স্পষ্টতার জন্য'),
        ],
      },
      { cells: [cell('-mme'), cell('meidän', 'আমাদের'), cell('kotimme'), cell('our home', 'আমাদের বাড়ি')] },
      { cells: [cell('-nne'), cell('teidän', 'তোমাদের'), cell('kotinne'), cell('your (pl.) home', 'তোমাদের বাড়ি')] },
    ],
    topicId: 'omistusliitteet',
  },
  {
    id: 'kieltomuoto-taulukko',
    title: 'Kieltomuoto: preesens ja imperfekti',
    titleBn: 'নেতিবাচক রূপ: বর্তমান ও অতীত কাল',
    intro:
      'Vain kieltosana taipuu persoonan mukaan. Preesensissä pääverbi pysyy muuttumattomana (puhu), mutta imperfektissä konnegatiivi on NUT-partisiippi, joka taipuu luvun mukaan (puhunut / puhuneet).',
    introBn:
      'শুধু নেতিবাচক শব্দটি ব্যক্তি অনুযায়ী পরিবর্তিত হয়। বর্তমান কালে মূল ক্রিয়া অপরিবর্তিত থাকে (puhu), তবে অতীত কালে কনেগেটিভ হলো NUT-partisiippi, যা সংখ্যা অনুযায়ী পরিবর্তিত হয় (puhunut / puhuneet)।',
    columns: ['Pronomini', 'Kieltosana', 'Preesens (puhua)', 'Imperfekti (puhua)'],
    rows: [
      { cells: [cell('minä'), cell('en'), cell('en puhu'), cell('en puhunut')] },
      { cells: [cell('sinä'), cell('et'), cell('et puhu'), cell('et puhunut')] },
      { cells: [cell('hän'), cell('ei'), cell('ei puhu'), cell('ei puhunut')] },
      { cells: [cell('me'), cell('emme'), cell('emme puhu'), cell('emme puhuneet', 'বহুবচনে participle-ও বহুবচন হয়')] },
      { cells: [cell('te'), cell('ette'), cell('ette puhu'), cell('ette puhuneet')] },
      { cells: [cell('he'), cell('eivät'), cell('eivät puhu'), cell('eivät puhuneet')] },
    ],
    topicId: 'kieltomuoto',
  },
  {
    id: 'astevaihtelu-taulukko',
    title: 'Astevaihtelu: vahva ja heikko aste',
    titleBn: 'ব্যঞ্জনধ্বনির পরিবর্তন: শক্তিশালী ও দুর্বল রূপ',
    intro:
      'Yleisimmät konsonanttivaihtelut vahvan (avoin tavu) ja heikon (suljettu tavu) asteen välillä — sääntöä sovelletaan sekä sijamuodoissa että verbitaivutuksessa.',
    introBn: 'সবচেয়ে সাধারণ ব্যঞ্জনধ্বনি পরিবর্তনগুলো শক্তিশালী (খোলা শব্দাংশ) ও দুর্বল (বন্ধ শব্দাংশ) রূপের মধ্যে — এই নিয়ম সিজা ও ক্রিয়া উভয়ের রূপান্তরেই প্রযোজ্য।',
    columns: ['Vahva → Heikko', 'Esimerkki', 'Käännös'],
    rows: [
      { cells: [cell('kk → k'), cell('loppu → lopussa'), cell('end → at the end')] },
      { cells: [cell('pp → p'), cell('kauppa → kaupassa'), cell('shop → in the shop')] },
      { cells: [cell('tt → t'), cell('tyttö → tytön'), cell("girl → girl's")] },
      { cells: [cell('k → (katoaa)', 'k → বিলুপ্ত হয়'), cell('joki → joessa'), cell('river → in the river')] },
      { cells: [cell('p → v'), cell('leipä → leivän'), cell("bread → bread's")] },
      { cells: [cell('t → d'), cell('katu → kadun'), cell("street → street's")] },
      { cells: [cell('nk → ng'), cell('Helsinki → Helsingissä'), cell('Helsinki → in Helsinki')] },
      { cells: [cell('mp → mm'), cell('kampa → kamman'), cell("comb → comb's")] },
      { cells: [cell('nt → nn'), cell('ranta → rannalla'), cell('beach → at the beach')] },
    ],
    topicId: 'astevaihtelu',
  },
  {
    id: 'komparointi-taulukko',
    title: 'Komparatiivi ja superlatiivi',
    titleBn: 'তুলনামূলক ও সর্বোচ্চ রূপ',
    intro: 'Perusmuoto, komparatiivi (-mpi) ja superlatiivi (-in) rinnakkain — sekä yleisimmät epäsäännölliset adjektiivit.',
    introBn: 'মূল রূপ, তুলনামূলক (-mpi) এবং সর্বোচ্চ (-in) রূপ পাশাপাশি — এবং সবচেয়ে সাধারণ অনিয়মিত বিশেষণ।',
    columns: ['Perusmuoto', 'Komparatiivi', 'Superlatiivi', 'Huomio'],
    rows: [
      { cells: [cell('iso', 'বড়'), cell('isompi'), cell('isoin'), cell('säännöllinen', 'নিয়মিত')] },
      { cells: [cell('nopea', 'দ্রুত'), cell('nopeampi'), cell('nopein'), cell('säännöllinen', 'নিয়মিত')] },
      { cells: [cell('pieni', 'ছোট'), cell('pienempi'), cell('pienin'), cell('säännöllinen', 'নিয়মিত')] },
      { cells: [cell('hyvä', 'ভালো'), cell('parempi'), cell('paras (parhain)'), cell('epäsäännöllinen', 'অনিয়মিত')] },
      { cells: [cell('paha', 'খারাপ'), cell('pahempi'), cell('pahin'), cell('epäsäännöllinen', 'অনিয়মিত')] },
      {
        cells: [
          cell('huono', 'খারাপ'),
          cell('huonompi'),
          cell('huonoin'),
          cell('epäsäännöllinen, kilpailee sanan "paha" kanssa', 'অনিয়মিত, "paha" শব্দের সাথে প্রতিযোগিতা করে'),
        ],
      },
    ],
    topicId: 'komparointi',
  },
  {
    id: 'modaaliverbit-taulukko',
    title: 'Modaaliverbit',
    titleBn: 'সহায়ক ক্রিয়া (Modal verbs)',
    intro: 'Kyky, mahdollisuus/lupa, halu ja pakko — huomaa erityisesti ei tarvitse vs. ei saa, jotka kääntävät merkityksen täysin päinvastaiseksi.',
    introBn: 'সামর্থ্য, সম্ভাবনা/অনুমতি, ইচ্ছা ও প্রয়োজনীয়তা — বিশেষভাবে লক্ষ্য করুন ei tarvitse ও ei saa, যা অর্থ সম্পূর্ণ বিপরীত করে দেয়।',
    columns: ['Verbi', 'Merkitys', 'Esimerkki', 'Kielteinen'],
    rows: [
      { cells: [cell('osata'), cell('to know how to (opittu taito)', 'জানা/দক্ষতা (শেখা)'), cell('Osaan uida.'), cell('En osaa uida.')] },
      { cells: [cell('voida'), cell('can/may (mahdollisuus, lupa)', 'পারা/অনুমতি'), cell('Voitko auttaa?'), cell('En voi auttaa.')] },
      { cells: [cell('haluta'), cell('to want', 'চাওয়া'), cell('Haluan oppia.'), cell('En halua oppia.')] },
      {
        cells: [
          cell('täytyy / pitää'),
          cell('must/have to (persoona genetiivissä)', 'অবশ্যই করতে হবে (কর্তা genetiivi-তে)'),
          cell('Minun täytyy lähteä.'),
          cell('Minun ei tarvitse lähteä. (ei velvoitetta!)', 'কোনো বাধ্যবাধকতা নেই!'),
        ],
      },
      {
        cells: [
          cell('saada'),
          cell('may/allowed to (lupa)', 'অনুমতি'),
          cell('Saanko kysyä?'),
          cell('Et saa tupakoida. (kielto!)', 'নিষেধ!'),
        ],
      },
    ],
    topicId: 'modaaliverbit',
  },
  {
    id: 'kysymyssanat-taulukko',
    title: 'Kysymyssanat',
    titleBn: 'প্রশ্নবাচক শব্দ',
    intro: 'Yleisimmät kysymyssanat lauseen alussa, sekä -ko/-kö-kysymyspääte silloin kun kysymyssanaa ei tarvita.',
    introBn: 'বাক্যের শুরুতে সবচেয়ে সাধারণ প্রশ্নবাচক শব্দগুলো, এবং -ko/-kö প্রত্যয় যখন প্রশ্নবাচক শব্দের প্রয়োজন হয় না।',
    columns: ['Kysymyssana', 'Merkitys', 'Esimerkki'],
    rows: [
      { cells: [cell('kuka'), cell('who (henkilö)', 'কে (ব্যক্তি)'), cell('Kuka soitti?')] },
      { cells: [cell('mikä / mitä'), cell('what', 'কী'), cell('Mikä tämä on? / Mitä sinä teet?')] },
      { cells: [cell('missä'), cell('where (at)', 'কোথায় (অবস্থান)'), cell('Missä sinä asut?')] },
      { cells: [cell('mistä'), cell('where from', 'কোথা থেকে'), cell('Mistä sinä olet kotoisin?')] },
      { cells: [cell('mihin'), cell('where to', 'কোথায় (গন্তব্য)'), cell('Mihin sinä menet?')] },
      { cells: [cell('milloin'), cell('when', 'কখন'), cell('Milloin kurssi alkaa?')] },
      { cells: [cell('miksi'), cell('why', 'কেন'), cell('Miksi sinä itket?')] },
      { cells: [cell('miten / kuinka'), cell('how', 'কীভাবে'), cell('Miten menee?')] },
      { cells: [cell('kuinka monta / paljonko'), cell('how many / how much', 'কতগুলো / কত'), cell('Kuinka monta lasta sinulla on?')] },
      { cells: [cell('kumpi'), cell('which (of two)', 'কোনটি (দুটির মধ্যে)'), cell('Kumpi on parempi?')] },
      { cells: [cell('-ko/-kö'), cell('kyllä/ei-kysymyspääte', 'হ্যাঁ/না প্রশ্ন-প্রত্যয়'), cell('Puhutko sinä suomea?')] },
    ],
    topicId: 'kysymyslauseet',
  },
]
