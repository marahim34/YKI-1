import { Link } from 'react-router-dom'

interface Section {
  icon: string
  title: string
  path?: string
  body: string
  bodyBn: string
}

const SECTIONS: Section[] = [
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
      'Koko 32 viikon suunnitelma kolmessa vaiheessa (A1→A2, A2→B1, B1→B2). Klikkaa viikkoa nähdäksesi sen kieliopin, sanaston ja neljä taito-osiota (lukeminen, kuunteleminen, kirjoittaminen, puhuminen). Voit edetä omaan tahtiisi — viikko ei "lukitu", joten voit hypätä eteen- tai taaksepäin.',
    bodyBn:
      'তিনটি ধাপে (A1→A2, A2→B1, B1→B2) বিভক্ত সম্পূর্ণ ৩২ সপ্তাহের পরিকল্পনা। কোনো সপ্তাহে ক্লিক করলে সেই সপ্তাহের ব্যাকরণ, শব্দভাণ্ডার এবং চারটি দক্ষতা (পড়া, শোনা, লেখা, বলা) দেখতে পাবেন। নিজের গতিতে এগোতে পারবেন — কোনো সপ্তাহ "লক" করা নেই, তাই সামনে-পেছনে যেতে পারবেন।',
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
      'Koko suomen kielen kielioppi yhdellä sivulla, 48 aihetta A1-tasosta B2-tasolle: selitykset, runsaat esimerkit ja bengalinkieliset yhteenvedot. Ylhäällä on myös sijamuotojen vertailutaulukko, joka auttaa erottamaan samankaltaiset sijat toisistaan. Hae aiheita hakukentällä tai suodata tason/aihepiirin mukaan.',
    bodyBn:
      'সম্পূর্ণ ফিনিশ ব্যাকরণ একটি পাতায়, A1 থেকে B2 পর্যন্ত ৪৮টি বিষয়: ব্যাখ্যা, প্রচুর উদাহরণ এবং বাংলা সারসংক্ষেপ। উপরে একটি সিজামুওতো (কারক) তুলনা সারণিও আছে, যা একই রকম দেখতে কারকগুলো আলাদা করতে সাহায্য করে। সার্চ বক্স দিয়ে বিষয় খুঁজুন অথবা লেভেল/বিষয়শ্রেণি অনুযায়ী ফিল্টার করুন।',
  },
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
    icon: '⏱️',
    title: 'Koekierros (mock-koe)',
    path: '/exam',
    body:
      'Harjoittele kaikki neljä YKI-osiota (lukeminen, kuunteleminen, kirjoittaminen, puhuminen) peräkkäin ajanotolla, aivan kuten oikeassa kokeessa. Valitse minkä viikon materiaalilla haluat harjoitella — mitä pidemmälle etenet polulla, sitä enemmän vaihtoehtoja on tarjolla.',
    bodyBn:
      'চারটি YKI বিভাগ (পড়া, শোনা, লেখা, বলা) পরপর, সময় ধরে অনুশীলন করুন — একদম আসল পরীক্ষার মতো। কোন সপ্তাহের বিষয়বস্তু দিয়ে অনুশীলন করতে চান তা বেছে নিন — যত বেশি এগোবেন, তত বেশি বিকল্প পাবেন।',
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

export default function HowToUse() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Näin käytät sovellusta</h1>
        <p className="text-sm text-slate-500">How to use this app · কীভাবে এই অ্যাপ ব্যবহার করবেন</p>
      </div>

      <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
        <h2 className="text-sm font-semibold text-blue-900">Suositeltu viikkorytmi · Suggested weekly rhythm</h2>
        <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-blue-800">
          <li>Kertaa Sanasto-kortit joka päivä (5–10 min) — pieni ja päivittäinen on tehokkaampaa kuin harvoin ja pitkään.</li>
          <li>Käy läpi viikon sivun kielioppipainotukset ja avaa "Kielioppi tällä viikolla" -paneeli syvempää selitystä varten.</li>
          <li>Tee viikon neljä harjoitusta (lukeminen, kuunteleminen, kirjoittaminen, puhuminen), kun aikaa on.</li>
          <li>Lue oman kirjasi vastaava luku ja tee samalla Kirjaharjoitukset-osion lisätehtävät.</li>
          <li>Kertausviikoilla (10, 22, 30) ja koeviikoilla (31–32): tee Koekierros ja kerrata koko vaiheen sanasto.</li>
        </ol>
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

      <div className="space-y-3">
        {SECTIONS.map((s) => (
          <section key={s.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-2">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <span className="text-lg">{s.icon}</span> {s.title}
              </h2>
              {s.path && (
                <Link to={s.path} className="text-xs font-semibold text-blue-700 hover:underline">
                  Avaa →
                </Link>
              )}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{s.body}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-emerald-700">{s.bodyBn}</p>
          </section>
        ))}
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
