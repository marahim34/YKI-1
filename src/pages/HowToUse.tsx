import { Link } from 'react-router-dom'

interface Section {
  icon: string
  title: string
  path?: string
  body: string
  bodyBn: string
}

const CORE_PATH_SECTIONS: Section[] = [
  {
    icon: '🏠',
    title: 'Koti (Dashboard)',
    path: '/',
    body:
      'Etusivu näyttää putkesi (peräkkäiset opiskelupäivät), XP-pisteet, kuinka monta sanaa odottaa kertausta tänään, ja suosituksen sille, mitä viikkoa kannattaa jatkaa seuraavaksi. Aloita opiskelupäiväsi aina täältä.',
    bodyBn:
      'হোম পেজে দেখতে পাবেন আপনার ধারাবাহিক অধ্যয়নের দিন (streak), XP পয়েন্ট, আজ কতগুলো শব্দ পুনরালোচনার জন্য অপেক্ষা করছে, এবং পরবর্তী কোন সপ্তাহে এগোনো উচিত তার পরামর্শ। প্রতিদিন এখান থেকেই শুরু করুন।',
  },
  {
    icon: '🗺️',
    title: 'Polku (32 viikon opintopolku)',
    path: '/roadmap',
    body:
      'Koko 32 viikon suunnitelma kolmessa vaiheessa (A1→A2, A2→B1, B1→B2). Klikkaa viikkoa nähdäksesi sen kieliopin, sanaston ja neljä taito-osiota (lukeminen, kuunteleminen, kirjoittaminen, puhuminen). Voit edetä omaan tahtiisi — viikko ei "lukitu", joten voit hypätä eteen- tai taaksepäin. Tämä on yleiskielitaidon runko: rakentaa suomen kielen A1:stä B2:een asti, viikko viikolta.',
    bodyBn:
      'তিনটি ধাপে (A1→A2, A2→B1, B1→B2) বিভক্ত সম্পূর্ণ ৩২ সপ্তাহের পরিকল্পনা। কোনো সপ্তাহে ক্লিক করলে সেই সপ্তাহের ব্যাকরণ, শব্দভাণ্ডার এবং চারটি দক্ষতা (পড়া, শোনা, লেখা, বলা) দেখতে পাবেন। নিজের গতিতে এগোতে পারবেন — কোনো সপ্তাহ "লক" করা নেই, তাই সামনে-পেছনে যেতে পারবেন। এটি সাধারণ ভাষাদক্ষতার মূল কাঠামো: A1 থেকে B2 পর্যন্ত সপ্তাহ ধরে ধরে তৈরি করে।',
  },
  {
    icon: '🎯',
    title: 'YKI-valmennus (koeteemat)',
    path: '/yki-valmennus',
    body:
      'Suora YKI-kokeeseen valmentava osio, järjestetty kokeen 9 virallisen teeman mukaan (Minä ja taustani, Koti ja asuminen, Kauppa ja palvelut, Kulttuuri, Matkustaminen, Terveys ja hyvinvointi, Työ, Ympäristö, Yhteiskunta). Jokainen teema etenee samalla kaavalla: lämmittele (sanasto ja tausta) → harjoittele (esimerkit ja mallit) → testaa (ajastettu, kokeen kaltainen tehtävä). Toisin kuin Polku, tämä ei etene viikko kerrallaan — voit hypätä suoraan siihen teemaan, joka tuntuu heikoimmalta tai on ajankohtaisin.',
    bodyBn:
      'সরাসরি YKI পরীক্ষার প্রস্তুতির অংশ, পরীক্ষার ৯টি অফিসিয়াল থিম অনুযায়ী সাজানো (আমি ও আমার পটভূমি, বাড়ি ও বসবাস, দোকান ও সেবা, সংস্কৃতি, ভ্রমণ, স্বাস্থ্য ও সুস্থতা, কাজ, পরিবেশ, সমাজ)। প্রতিটি থিম একই ধরনে এগোয়: লাম্মিত্তেলে (ওয়ার্ম-আপ: শব্দভাণ্ডার ও প্রেক্ষাপট) → হার্‌ইয়োইত্তেলে (অনুশীলন: উদাহরণ ও নমুনা) → তেস্তা (পরীক্ষা: সময়বদ্ধ, আসল পরীক্ষার মতো কাজ)। Polku-এর মতো সপ্তাহ ধরে না এগিয়ে, এখানে আপনি সরাসরি যে থিমে দুর্বল মনে করেন বা এখন প্রাসঙ্গিক মনে করেন, সেখানে যেতে পারবেন।',
  },
  {
    icon: '🧠',
    title: 'Sanasto (sanaston kertaus)',
    path: '/vocab',
    body:
      'Muistikorttiharjoittelu (flashcards) käyttäen tilavälein toistuvaa kertausta (spaced repetition) — sovellus näyttää sanan juuri sopivalla hetkellä, jotta se jää paremmin mieleen. Napauta korttia nähdäksesi käännöksen (englanniksi ja bengaliksi), ja käytä 🔊-painiketta kuullaksesi ääntämisen. Arvioi itseäsi rehellisesti (Uudelleen / Hyvä / Helppo) — se ohjaa, milloin sana näytetään seuraavan kerran.',
    bodyBn:
      'স্পেসড রিপিটিশন পদ্ধতি ব্যবহার করে ফ্ল্যাশকার্ড অনুশীলন — অ্যাপটি সঠিক সময়ে শব্দ দেখায়, যাতে তা মনে গেঁথে থাকে। কার্ডে ট্যাপ করলে অনুবাদ দেখা যাবে (ইংরেজি ও বাংলায়), এবং উচ্চারণ শুনতে 🔊 বাটন ব্যবহার করুন। সৎভাবে নিজেকে মূল্যায়ন করুন (আবার / ভালো / সহজ) — এটিই ঠিক করে দেবে পরের বার শব্দটি কখন দেখানো হবে।',
  },
  {
    icon: '📐',
    title: 'Kielioppiopas',
    path: '/grammar',
    body:
      'Koko suomen kielen kielioppi yhdellä sivulla, yli 50 aihetta A1-tasosta B2-tasolle: selitykset, runsaat esimerkit ja bengalinkieliset yhteenvedot. Ylhäällä on vertailutaulukoita (sijamuodot, verbityypit), jotka auttavat erottamaan samankaltaiset muodot toisistaan. Hae aiheita hakukentällä tai suodata tason/aihepiirin mukaan. Sekä Polku- että YKI-valmennus-sivuilla on suora "Kielioppi tässä luvussa" -linkki juuri niihin aiheisiin, jotka liittyvät kyseiseen viikkoon/teemaan.',
    bodyBn:
      'সম্পূর্ণ ফিনিশ ব্যাকরণ একটি পাতায়, A1 থেকে B2 পর্যন্ত ৫০+ বিষয়: ব্যাখ্যা, প্রচুর উদাহরণ এবং বাংলা সারসংক্ষেপ। উপরে তুলনা সারণি আছে (কারক, ক্রিয়ার ধরন), যা একই রকম দেখতে রূপগুলো আলাদা করতে সাহায্য করে। সার্চ বক্স দিয়ে বিষয় খুঁজুন অথবা লেভেল/বিষয়শ্রেণি অনুযায়ী ফিল্টার করুন। Polku ও YKI-valmennus উভয় পাতাতেই সরাসরি "এই অধ্যায়ের ব্যাকরণ" লিংক আছে, যা সরাসরি প্রাসঙ্গিক বিষয়ে নিয়ে যায়।',
  },
]

const EXTRA_PRACTICE_SECTIONS: Section[] = [
  {
    icon: '📖',
    title: 'Kirjaharjoitukset',
    path: '/books',
    body:
      'Alkuperäisiä lisäharjoituksia (sanastotestejä ja kielioppiaukkotehtäviä) Suomen mestari 1–3- ja Oma suomi 1–2 -kirjojen rinnalle, luku kerrallaan. Nämä eivät korvaa kirjaa — ne täydentävät sitä, kun luet omaa fyysistä kirjaasi.',
    bodyBn:
      'Suomen mestari 1–3 এবং Oma suomi 1–2 বইয়ের পাশাপাশি, অধ্যায় ধরে ধরে করার জন্য মূল অতিরিক্ত অনুশীলন (শব্দভাণ্ডার পরীক্ষা ও ব্যাকরণ ফাঁকা-পূরণ)। এগুলো বইয়ের বিকল্প নয় — আপনার নিজের বই পড়ার সময় সহায়ক হিসেবে কাজ করে।',
  },
  {
    icon: '📚',
    title: 'Omat kirjat',
    path: '/my-books',
    body:
      'Lisää tähän omia sanoja suoraan kirjoistasi tai mistä tahansa muualta: suomenkielinen sana, englanninkielinen ja bengalinkielinen käännös, esimerkkilause molemmilla kielillä, sekä mistä kirjasta/luvusta se on. Nämä sanat liittyvät automaattisesti samaan Sanasto-kertausjärjestelmään kuin sovelluksen valmis sanasto.',
    bodyBn:
      'আপনার বই থেকে বা অন্য যেকোনো জায়গা থেকে নিজের শব্দ এখানে যোগ করুন: ফিনিশ শব্দ, ইংরেজি ও বাংলা অনুবাদ, দুই ভাষায় উদাহরণ বাক্য, এবং কোন বই/অধ্যায় থেকে নেওয়া। এই শব্দগুলো স্বয়ংক্রিয়ভাবে অ্যাপের মূল সানাস্তো (শব্দভাণ্ডার) কার্ড-পুনরালোচনা ব্যবস্থার সাথে যুক্ত হয়ে যায়।',
  },
  {
    icon: '📋',
    title: 'Mallipohjat',
    path: '/templates',
    body:
      'Valmiit, uudelleenkäytettävät rungot kirjoitus- ja puhumistehtäviin: opit tunnistamaan tehtävätyypin (esim. valitusviesti, kutsu, mielipideteksti) ja käyttämään samaa rakennetta aina uudella aiheella. Sisältää myös lyhyen selityksen siitä, mitä YKI:n taitotasolla 4 tyypillisesti odotetaan.',
    bodyBn:
      'লেখা ও বলার কাজের জন্য প্রস্তুত, পুনঃব্যবহারযোগ্য কাঠামো: আপনি কাজের ধরন চিনতে শিখবেন (যেমন অভিযোগ বার্তা, দাওয়াত, মতামত রচনা) এবং একই কাঠামো নতুন বিষয়ে বারবার ব্যবহার করতে পারবেন। এতে YKI-এর taitotaso 4-এ সাধারণত কী আশা করা হয় তার সংক্ষিপ্ত ব্যাখ্যাও আছে।',
  },
  {
    icon: '🔢',
    title: 'Numerot',
    path: '/numbers',
    body:
      'Kattava numerot-osio: peruslukusanat, järjestysluvut, kellonajat, päivämäärät, rahasummat ja niiden taivutus. Hyvä tarkistuspiste, jos numerot tuntuvat vielä epävarmoilta.',
    bodyBn:
      'সম্পূর্ণ সংখ্যা বিভাগ: মূল সংখ্যা, ক্রমবাচক সংখ্যা, সময়, তারিখ, টাকার অংক এবং তাদের রূপ পরিবর্তন। সংখ্যা নিয়ে এখনো অনিশ্চিত থাকলে এটি ভালো একটি জায়গা যাচাই করার জন্য।',
  },
  {
    icon: '🌻',
    title: 'Perussanasto',
    path: '/basics',
    body:
      'Aivan perussanasto ryhmiteltynä aihepiireittäin (värit, ruoka, kehonosat, sää jne.) — hyvä paikka aloittaa, jos tunnet, että sanavarastossa on isoja aukkoja ennen kuin syvennyt viikkojen tai YKI-teemojen sanastoon.',
    bodyBn:
      'বিষয়ভিত্তিকভাবে সাজানো একদম মৌলিক শব্দভাণ্ডার (রং, খাবার, শরীরের অঙ্গ, আবহাওয়া ইত্যাদি) — সপ্তাহ বা YKI থিমের গভীর শব্দভাণ্ডারে যাওয়ার আগে শব্দভাণ্ডারে বড় ফাঁক মনে হলে শুরু করার ভালো জায়গা।',
  },
  {
    icon: '🎲',
    title: 'Sekoitettu harjoitus',
    path: '/daily',
    body:
      '20 satunnaista sanaa kaikista aihepiireistä sekaisin — hyvä nopea päivittäinen kertaus, kun et halua valita mitään tiettyä aihetta.',
    bodyBn:
      'সব বিষয় থেকে ২০টি এলোমেলো শব্দ মিশিয়ে — নির্দিষ্ট কোনো বিষয় বেছে নিতে না চাইলে দ্রুত দৈনিক পুনরালোচনার জন্য ভালো।',
  },
  {
    icon: '💬',
    title: 'Keskusteluharjoitukset',
    path: '/conversations',
    body:
      'Vapaamuotoista puhumisen ja kirjoittamisen harjoittelua — dialogeja, reagointitehtäviä, mielipidekirjoituksia — joka ei ole sidottu tiettyyn kokeen tehtävätyyppiin, toisin kuin YKI-valmennus. Hyvä lisä sujuvuuden kasvattamiseen sen jälkeen, kun perusrakenteet ovat jo tuttuja.',
    bodyBn:
      'মুক্ত-আকারের বলা ও লেখার অনুশীলন — সংলাপ, প্রতিক্রিয়ার কাজ, মতামত লেখা — যা YKI-valmennus-এর মতো নির্দিষ্ট পরীক্ষার কাজের ধরনে বাঁধা নয়। মূল কাঠামো পরিচিত হয়ে গেলে সাবলীলতা বাড়ানোর জন্য ভালো একটি সংযোজন।',
  },
]

const TEST_TRACK_SECTIONS: Section[] = [
  {
    icon: '⏱️',
    title: 'Koekierros (mock-koe)',
    path: '/exam',
    body:
      'Harjoittele kaikki neljä YKI-osiota (lukeminen, kuunteleminen, kirjoittaminen, puhuminen) peräkkäin ajanotolla, aivan kuten oikeassa kokeessa. Valitse minkä viikon materiaalilla haluat harjoitella, tai valitse yksi valmiista koepaketeista. Käytä tätä silloin tällöin koko matkan ajan, älä vain aivan lopussa.',
    bodyBn:
      'চারটি YKI বিভাগ (পড়া, শোনা, লেখা, বলা) পরপর, সময় ধরে অনুশীলন করুন — একদম আসল পরীক্ষার মতো। কোন সপ্তাহের বিষয়বস্তু দিয়ে অনুশীলন করতে চান তা বেছে নিন, অথবা প্রস্তুত কোনো কোয়েপাকেত্তি (মক পরীক্ষা সেট) বেছে নিন। পুরো যাত্রাজুড়ে মাঝে মাঝে এটি ব্যবহার করুন, শুধু একদম শেষে নয়।',
  },
  {
    icon: '📈',
    title: 'Edistyminen',
    path: '/progress',
    body:
      'Näet putken, XP:n, taitokohtaiset tilastot ja koekierrosten historian. Tärkeintä: kaikki tieto tallentuu vain tämän selaimen muistiin (localStorage) — vie tiedot säännöllisesti JSON-tiedostoksi ("Vie tiedot"), jotta et menetä edistymistäsi selainta vaihtaessa tai puhelinta resetoidessa. Voit palauttaa varmuuskopion "Tuo varmuuskopio" -painikkeella.',
    bodyBn:
      'এখানে দেখবেন স্ট্রিক, XP, দক্ষতাভিত্তিক পরিসংখ্যান এবং মক-পরীক্ষার ইতিহাস। সবচেয়ে গুরুত্বপূর্ণ: সব তথ্য শুধুমাত্র এই ব্রাউজারে (localStorage) সংরক্ষিত থাকে — নিয়মিত "Vie tiedot" (তথ্য রপ্তানি) দিয়ে JSON ফাইলে ব্যাকআপ নিন, যাতে ব্রাউজার পরিবর্তন বা ফোন রিসেট করলে অগ্রগতি হারিয়ে না যায়। "Tuo varmuuskopio" বাটন দিয়ে ব্যাকআপ ফিরিয়ে আনতে পারবেন।',
  },
]

function SectionCard({ s }: { s: Section }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
          <span className="text-lg">{s.icon}</span> {s.title}
        </h3>
        {s.path && (
          <Link to={s.path} className="text-xs font-semibold text-blue-700 hover:underline">
            Avaa →
          </Link>
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{s.body}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-emerald-700">{s.bodyBn}</p>
    </section>
  )
}

export default function HowToUse() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Näin käytät sovellusta</h1>
        <p className="text-sm text-slate-500">How to use this app · কীভাবে এই অ্যাপ ব্যবহার করবেন</p>
      </div>

      <section className="rounded-2xl border-2 border-blue-300 bg-blue-50 p-5">
        <h2 className="text-base font-bold text-blue-900">🚦 Aloita tästä, 3 askelta · Start here, 3 steps · এখান থেকে শুরু করুন, ৩ ধাপ</h2>
        <ol className="mt-3 space-y-3 text-sm text-blue-900">
          <li className="rounded-lg bg-white/70 p-3">
            <p className="font-semibold">1. Valitse polkusi — Choose your path — আপনার পথ বেছে নিন</p>
            <p className="mt-1 text-blue-800">
              Jos sinulla on aikaa rakentaa suomen kielesi pohjasta asti (A1→B2), aloita{' '}
              <Link to="/roadmap" className="font-semibold underline">
                Polku
              </Link>
              -sivulta, viikko 1. Jos YKI-koe on lähellä ja haluat harjoitella suoraan kokeen 9 teemaa, aloita{' '}
              <Link to="/yki-valmennus" className="font-semibold underline">
                YKI-valmennus
              </Link>
              -sivulta. Voit myös tehdä molempia rinnakkain — ne eivät sulje toisiaan pois.
            </p>
            <p className="mt-1 text-emerald-700">
              সময় থাকলে ফিনিশ ভাষা একদম মূল থেকে (A1→B2) গড়ে তুলতে চাইলে <span className="font-semibold">Polku</span>{' '}
              পাতা থেকে, সপ্তাহ ১ দিয়ে শুরু করুন। YKI পরীক্ষা কাছে চলে এসেছে এবং সরাসরি পরীক্ষার ৯টি থিম অনুশীলন করতে চাইলে{' '}
              <span className="font-semibold">YKI-valmennus</span> পাতা থেকে শুরু করুন। দুটোই একসাথে করাও সম্ভব — এরা
              একে অপরের বিকল্প নয়।
            </p>
          </li>
          <li className="rounded-lg bg-white/70 p-3">
            <p className="font-semibold">2. Kertaa sanastoa joka päivä, 5–10 minuuttia — Review vocab daily — প্রতিদিন শব্দ পুনরালোচনা করুন</p>
            <p className="mt-1 text-blue-800">
              Avaa <Link to="/vocab" className="font-semibold underline">Sanasto</Link> joka päivä, vaikka et tekisi
              muuta. Pieni ja päivittäinen voittaa aina harvoin tehdyn pitkän session.
            </p>
            <p className="mt-1 text-emerald-700">
              অন্য কিছু না করলেও প্রতিদিন <span className="font-semibold">Sanasto</span> খুলুন। ছোট কিন্তু প্রতিদিনের
              অনুশীলন সবসময় মাঝে মাঝে দীর্ঘ সময় ধরে করা অনুশীলনের চেয়ে ভালো ফল দেয়।
            </p>
          </li>
          <li className="rounded-lg bg-white/70 p-3">
            <p className="font-semibold">3. Etene lämmittele → harjoittele → testaa -kaavalla — Warm up → practice → test — ওয়ার্ম-আপ → অনুশীলন → পরীক্ষা</p>
            <p className="mt-1 text-blue-800">
              Jokaisessa viikossa ja YKI-teemassa on sama rakenne: opettele sanasto ja kielioppi ensin, harjoittele
              esimerkkien avulla, ja tee vasta sitten ajastettu testitehtävä. Älä hyppää suoraan testiin — se on
              tarkoitettu viimeiseksi askeleeksi, ei ensimmäiseksi.
            </p>
            <p className="mt-1 text-emerald-700">
              প্রতিটি সপ্তাহ ও YKI থিমে একই কাঠামো: প্রথমে শব্দভাণ্ডার ও ব্যাকরণ শিখুন, উদাহরণ দিয়ে অনুশীলন করুন, তারপর
              সময়বদ্ধ পরীক্ষার কাজ করুন। সরাসরি পরীক্ষায় লাফ দেবেন না — এটি শেষ ধাপের জন্য, প্রথম ধাপের জন্য নয়।
            </p>
          </li>
        </ol>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-900">🗺️ Polku vs. 🎯 YKI-valmennus — mitä eroa?</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-400">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">🗺️ Polku</th>
                <th className="py-2">🎯 YKI-valmennus</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-medium text-slate-500">Rakenne</td>
                <td className="py-2 pr-3">32 viikkoa, A1→B2, etenevä</td>
                <td className="py-2">9 YKI-teemaa, ei järjestystä</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-medium text-slate-500">Tavoite</td>
                <td className="py-2 pr-3">Yleinen kielitaito, pohjasta asti</td>
                <td className="py-2">Suora kokeeseen valmistautuminen</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-3 font-medium text-slate-500">Sopii, kun</td>
                <td className="py-2 pr-3">Aikaa on paljon, taso vielä matala</td>
                <td className="py-2">Koe on lähellä, taso jo B1+</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-medium text-slate-500">Kaava</td>
                <td className="py-2 pr-3" colSpan={2}>
                  Molemmissa sama: lämmittele → harjoittele → testaa
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Suositus: käytä Polkua rungoksi ja YKI-valmennusta viikoittaisena lisänä sitä mukaa kun etenet — esimerkiksi
          yksi YKI-teema joka toinen viikko, tai intensiivisesti kokeen lähestyessä.
        </p>
        <p className="mt-1 text-xs text-emerald-700">
          পরামর্শ: Polku-কে মূল কাঠামো হিসেবে ব্যবহার করুন এবং এগিয়ে যাওয়ার সাথে সাথে YKI-valmennus-কে সাপ্তাহিক
          সংযোজন হিসেবে যোগ করুন — যেমন প্রতি দুই সপ্তাহে একটি YKI থিম, অথবা পরীক্ষা কাছে এলে নিবিড়ভাবে।
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-900">🎯 Tavoitteena taitotaso 4</h2>
        <p className="mt-1 text-sm text-slate-600">
          Sovellus on kalibroitu tähtäämään YKI:n taitotasoon 4 (suunnilleen B1.2–B2) — se on yleisin vaadittu taso mm.
          työelämässä ja kansalaisuushakemuksissa. Katso <Link to="/templates" className="font-semibold text-blue-700 hover:underline">Mallipohjat</Link>-sivun
          alusta lyhyt selitys siitä, mitä taitotasolla 4 tyypillisesti odotetaan, ja vertaa omia vastauksiasi sovelluksen
          mallivastauksiin.
        </p>
      </section>

      <div>
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Ydinpolku · Core path · মূল পথ</h2>
        <div className="space-y-3">
          {CORE_PATH_SECTIONS.map((s) => (
            <SectionCard key={s.title} s={s} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
          Lisäharjoittelu · Extra practice · অতিরিক্ত অনুশীলন
        </h2>
        <div className="space-y-3">
          {EXTRA_PRACTICE_SECTIONS.map((s) => (
            <SectionCard key={s.title} s={s} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
          Koe ja seuranta · Testing &amp; tracking · পরীক্ষা ও অগ্রগতি
        </h2>
        <div className="space-y-3">
          {TEST_TRACK_SECTIONS.map((s) => (
            <SectionCard key={s.title} s={s} />
          ))}
        </div>
      </div>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
        <p className="font-semibold">Muista / মনে রাখবেন</p>
        <p className="mt-1">
          Kaikki edistymisesi tallentuu vain tähän selaimeen. Vie varmuuskopio ("Edistyminen" → "Vie tiedot") aina
          silloin tällöin, erityisesti ennen selaimen vaihtoa tai puhelimen resetointia.
        </p>
        <p className="mt-1">
          আপনার সব অগ্রগতি শুধু এই ব্রাউজারেই সংরক্ষিত থাকে। মাঝে মাঝে ব্যাকআপ নিন ("Edistyminen" → "Vie tiedot"), বিশেষ করে
          ব্রাউজার পরিবর্তন বা ফোন রিসেট করার আগে।
        </p>
      </section>
    </div>
  )
}
