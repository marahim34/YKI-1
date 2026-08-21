export interface VerbTenseTableRow {
  fi: string
  en: string
  // Bangla name of the tense/mood, with its role in parentheses —
  // e.g. "পারফেক্টি (পুরাঘটিত বর্তমান কাল)".
  termBn: string
  formation: string
  example: string
  usage: string
  usageBn: string
  exceptions: string
  exceptionsBn: string
  // The GrammarTopic (src/data/grammar.ts) with the full explanation and
  // examples for this tense/mood.
  topicId: string
}

// A comparison of Finnish's tenses and moods (as opposed to the six verb
// CONJUGATION types in verbTypeTable.ts — a different axis entirely: every
// verb, whatever its type, appears in all of these). All inflected from the
// same base verb (puhua, "to speak") wherever natural, so the forms are easy
// to compare side by side, the way CASE_TABLE does for the case system.
export const VERB_TENSE_TABLE: VerbTenseTableRow[] = [
  {
    fi: 'Preesens',
    en: 'Present',
    termBn: 'প্রেজেন্স (বর্তমান কাল)',
    formation: 'stem + persoonapääte',
    example: 'puhun',
    usage: 'Current actions, general truths, and — very commonly — near-future plans, since Finnish has no separate future tense.',
    usageBn: 'বর্তমান কাজ, সাধারণ সত্য, এবং — খুবই সাধারণভাবে — নিকট ভবিষ্যতের পরিকল্পনা, কারণ ফিনিশ ভাষায় আলাদা ভবিষ্যৎ কাল নেই।',
    exceptions: 'Formed differently depending on which of the six verb types the verb belongs to — see the verb-type table above.',
    exceptionsBn: 'ক্রিয়াটি ছয়টি verb-type-এর কোনটির অন্তর্গত তার উপর ভিত্তি করে ভিন্নভাবে গঠিত হয় — উপরের verb-type সারণি দেখুন।',
    topicId: 'preesens',
  },
  {
    fi: 'Imperfekti',
    en: 'Simple past',
    termBn: 'ইমপারফেক্টি (সাধারণ অতীত কাল)',
    formation: 'stem + -i- + persoonapääte',
    example: 'puhuin',
    usage: 'One specific, completed past event, tied to a stated or implied past time (eilen, viime vuonna).',
    usageBn: 'একটি নির্দিষ্ট, সম্পন্ন হওয়া অতীত ঘটনা, যার সাথে একটি নির্দিষ্ট সময় (eilen, viime vuonna) উল্লিখিত বা বোঝা যায়।',
    exceptions: 'A handful of very frequent verbs have irregular-looking stems: olla→olin, mennä→menin, tulla→tulin, nähdä→näin, tehdä→tein.',
    exceptionsBn: 'কিছু অতি সাধারণ ক্রিয়ার অনিয়মিত রূপ আছে: olla→olin, mennä→menin, tulla→tulin, nähdä→näin, tehdä→tein।',
    topicId: 'imperfekti',
  },
  {
    fi: 'Perfekti',
    en: 'Present perfect',
    termBn: 'পারফেক্টি (পুরাঘটিত বর্তমান কাল)',
    formation: 'olla (preesens) + NUT/TUT-partisiippi',
    example: 'olen puhunut',
    usage: 'An unspecified past time, or a past action still relevant now ("have done") — also life-experience questions with koskaan.',
    usageBn: 'অনির্দিষ্ট অতীত সময়, অথবা এমন অতীত কাজ যা এখনো প্রাসঙ্গিক ("করেছি") — এছাড়া koskaan দিয়ে জীবনের অভিজ্ঞতা জিজ্ঞাসায়।',
    exceptions: 'The participle agrees in number (nähnyt / nähneet) even though it is "olla" that carries the person.',
    exceptionsBn: '"olla" ব্যক্তি বহন করলেও, participle-টি (nähnyt/nähneet) সংখ্যা (একবচন/বহুবচন) অনুযায়ী পরিবর্তিত হয়।',
    topicId: 'perfekti',
  },
  {
    fi: 'Pluskvamperfekti',
    en: 'Past perfect',
    termBn: 'প্লুস্কভামপারফেক্টি (পুরাঘটিত অতীত কাল)',
    formation: 'olla (imperfekti) + NUT/TUT-partisiippi',
    example: 'olin puhunut',
    usage: 'The earlier of two past events ("had done") — almost always paired with a second imperfekti clause (kun, ennen kuin).',
    usageBn: 'দুটি অতীত ঘটনার মধ্যে যেটি আগে ঘটেছিল ("করেছিলাম") — প্রায় সবসময় একটি imperfekti বাক্যের (kun, ennen kuin) সাথে ব্যবহৃত হয়।',
    exceptions: "Don't use it with only one past-tense event in the sentence — with no earlier reference point, imperfekti or perfekti is what you actually want.",
    exceptionsBn: 'বাক্যে শুধু একটি অতীত ঘটনা থাকলে এটি ব্যবহার করবেন না — আগের কোনো রেফারেন্স পয়েন্ট না থাকলে imperfekti বা perfekti ব্যবহার করাই উচিত।',
    topicId: 'pluskvamperfekti',
  },
  {
    fi: 'Konditionaali',
    en: 'Conditional',
    termBn: 'কন্ডিশনাল (শর্তসাপেক্ষ ভাব)',
    formation: 'stem + -isi- + persoonapääte',
    example: 'puhuisin',
    usage: 'Hypotheticals ("if... would", often with jos), polite requests (Voisitko...?), and wishes.',
    usageBn: 'কাল্পনিক পরিস্থিতি ("যদি... হতো", প্রায়ই jos সহ), ভদ্র অনুরোধ (Voisitko...?), এবং ইচ্ছা প্রকাশে।',
    exceptions: 'In fast speech -isi- often contracts (haluaisin → haluisin) — recognize this when listening, even though writing keeps the full form.',
    exceptionsBn: 'দ্রুত কথ্য ভাষায় -isi- প্রায়ই সংক্ষিপ্ত হয় (haluaisin → haluisin) — শোনার সময় এটি চিনতে হবে, যদিও লেখায় পূর্ণ রূপ থাকে।',
    topicId: 'konditionaali',
  },
  {
    fi: 'Imperatiivi',
    en: 'Imperative',
    termBn: 'ইমপারেটিভ (আদেশসূচক ভাব)',
    formation: 'stem (yks.) / stem + -kaa/-kää (mon.)',
    example: 'puhu! (puhukaa!)',
    usage: 'Direct commands and instructions (recipes, safety notices) — for polite requests to strangers, Finns usually reach for konditionaali instead.',
    usageBn: 'সরাসরি আদেশ ও নির্দেশনা (রেসিপি, নিরাপত্তা নোটিশ) — অপরিচিতদের প্রতি ভদ্র অনুরোধে ফিনরা সাধারণত konditionaali ব্যবহার করে।',
    exceptions: 'The everyday colloquial "let\'s" (Mennään!) is grammatically the passive present, not a true imperative.',
    exceptionsBn: 'প্রাত্যহিক কথ্য ভাষায় "চলো" (Mennään!) ব্যাকরণগতভাবে passiivin preesens, প্রকৃত imperatiivi নয়।',
    topicId: 'imperatiivi',
  },
  {
    fi: 'Passiivi, preesens',
    en: 'Passive, present',
    termBn: 'প্যাসিভ প্রেজেন্স (বর্তমান কর্মবাচ্য)',
    formation: '-taan/-tään/-daan/-dään (verbityypin mukaan)',
    example: 'puhutaan',
    usage: 'An action without naming who does it ("one does / it is done") — and, colloquially, very often stands in for "we".',
    usageBn: 'কে করছে তা না বলে একটি কাজ বর্ণনা ("করা হয়") — এবং কথ্য ভাষায় প্রায়ই "আমরা" বোঝাতেও ব্যবহৃত হয়।',
    exceptions: 'Has no grammatical subject at all — never attach a subject pronoun to it (never "hän puhutaan").',
    exceptionsBn: 'এর কোনো ব্যাকরণগত কর্তা নেই — এর সাথে কখনো কর্তা সর্বনাম যুক্ত করবেন না ("hän puhutaan" ভুল)।',
    topicId: 'passiivi-preesens',
  },
  {
    fi: 'Passiivin imperfekti',
    en: 'Passive, past',
    termBn: 'প্যাসিভ ইমপারফেক্টি (অতীত কর্মবাচ্য)',
    formation: '-tiin/-ttiin (verbityypin mukaan)',
    example: 'puhuttiin',
    usage: 'The same impersonal construction, describing something that already happened — the everyday tense of news and history writing.',
    usageBn: 'একই ব্যক্তিনিরপেক্ষ গঠন, তবে আগেই ঘটে যাওয়া কিছু বর্ণনা করে — সংবাদ ও ইতিহাস লেখায় এটি প্রাত্যহিক কাল।',
    exceptions: 'Under negation, the noun acting like the subject also shifts to partitive: Ovi suljettiin → Ovea ei suljettu.',
    exceptionsBn: 'নেতিবাচক বাক্যে, কর্তার মতো আচরণ করা বিশেষ্যটিও partitive-এ পরিবর্তিত হয়: Ovi suljettiin → Ovea ei suljettu।',
    topicId: 'passiivi-imperfekti',
  },
]
