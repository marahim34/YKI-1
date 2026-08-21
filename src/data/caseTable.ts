export interface CaseTableRow {
  fi: string
  en: string
  // Bangla name of the case, with its grammatical role in parentheses —
  // e.g. "নমিনেটিভ (কর্তৃকারক)" — so a Bangla-first reader can recognize
  // the term itself, not just its usage description (usageBn).
  termBn: string
  ending: string
  example: string
  usage: string
  usageBn: string
  // Which GrammarTopic (src/data/grammar.ts) has the full explanation,
  // examples and tips for this case — several rows intentionally point at
  // the same topic (e.g. inessive/elative/illative are taught together as
  // one group), matching how the grammar reference itself groups them.
  topicId: string
}

// A single at-a-glance comparison of the Finnish case system, all inflected
// from the same base word (talo, "house") wherever that's natural, so the
// endings are easy to compare side by side. The three marginal cases use a
// more natural example word instead, per the grammarCases.ts topic notes.
export const CASE_TABLE: CaseTableRow[] = [
  { fi: 'Nominatiivi', en: 'Nominative', termBn: 'নমিনেটিভ (কর্তৃকারক)', ending: '—', example: 'talo', usage: 'Subject; dictionary form', usageBn: 'কর্তা; শব্দের মূল রূপ', topicId: 'sijamuodot-perusteet' },
  { fi: 'Genetiivi', en: 'Genitive', termBn: 'জেনিটিভ (সম্বন্ধ কারক)', ending: '-n', example: 'talon', usage: "Possession ('of'); base for postpositions", usageBn: 'মালিকানা; postposition-এর ভিত্তি', topicId: 'genetiivi' },
  { fi: 'Partitiivi', en: 'Partitive', termBn: 'পার্টিটিভ (আংশিক কারক)', ending: '-a/-ä, -ta/-tä', example: 'taloa', usage: 'Part/some of; after negation; after numbers >1', usageBn: 'আংশিক/কিছু পরিমাণ; নেতিবাচক বাক্যে; ১-এর বেশি সংখ্যার পরে', topicId: 'sijamuodot-perusteet' },
  { fi: 'Inessiivi', en: 'Inessive', termBn: 'ইনেসিভ (অবস্থানবাচক — ভেতরে)', ending: '-ssa/-ssä', example: 'talossa', usage: 'In / inside', usageBn: 'ভেতরে', topicId: 'sisapaikallissijat' },
  { fi: 'Elatiivi', en: 'Elative', termBn: 'এলাটিভ (নির্গমনবাচক — ভেতর থেকে)', ending: '-sta/-stä', example: 'talosta', usage: 'Out of / from inside', usageBn: 'ভেতর থেকে বের হওয়া', topicId: 'sisapaikallissijat' },
  { fi: 'Illatiivi', en: 'Illative', termBn: 'ইল্লাটিভ (প্রবেশবাচক — ভেতরে)', ending: '-Vn / -hVn / -seen', example: 'taloon', usage: 'Into', usageBn: 'ভেতরে প্রবেশ', topicId: 'sisapaikallissijat' },
  { fi: 'Adessiivi', en: 'Adessive', termBn: 'আদেসিভ (অবস্থানবাচক — উপরে/কাছে)', ending: '-lla/-llä', example: 'talolla', usage: 'On / at; also "having"; transport', usageBn: 'উপরে/কাছে; "থাকা" বোঝাতে; যানবাহনে', topicId: 'ulkopaikallissijat' },
  { fi: 'Ablatiivi', en: 'Ablative', termBn: 'আবলাটিভ (নির্গমনবাচক — উপর থেকে)', ending: '-lta/-ltä', example: 'talolta', usage: 'Off of / away from (a surface/person)', usageBn: 'উপর থেকে সরানো / থেকে দূরে', topicId: 'ulkopaikallissijat' },
  { fi: 'Allatiivi', en: 'Allative', termBn: 'আল্লাটিভ (গন্তব্যবাচক — উপরে/দিকে)', ending: '-lle', example: 'talolle', usage: 'Onto / to', usageBn: 'উপরে/দিকে', topicId: 'ulkopaikallissijat' },
  { fi: 'Essiivi', en: 'Essive', termBn: 'এসিভ (অবস্থাবাচক — সাময়িক ভূমিকা)', ending: '-na/-nä', example: 'talona', usage: 'As / being (temporary state or role)', usageBn: 'সাময়িক অবস্থা বা ভূমিকা "হিসেবে"', topicId: 'essiivi' },
  { fi: 'Translatiivi', en: 'Translative', termBn: 'ট্রান্সলাটিভ (পরিণতিবাচক)', ending: '-ksi', example: 'taloksi', usage: 'Becoming / turning into; "for, intended as"', usageBn: 'পরিণত হওয়া; "উদ্দেশ্যে/জন্য"', topicId: 'translatiivi' },
  { fi: 'Instruktiivi', en: 'Instructive', termBn: 'ইনস্ট্রাক্টিভ (উপায়বাচক)', ending: '-in', example: 'käsin (by hand)', usage: 'Manner — mostly fixed adverbial expressions', usageBn: 'পদ্ধতি বোঝাতে — সাধারণত নির্দিষ্ট বাগধারায়', topicId: 'marginaalisijat' },
  { fi: 'Abessiivi', en: 'Abessive', termBn: 'আবেসিভ (বর্জনবাচক — "ছাড়া")', ending: '-tta/-ttä', example: 'rahatta (without money)', usage: 'Without — rare, mostly fixed expressions', usageBn: '"ছাড়া" — বিরল, সাধারণত নির্দিষ্ট বাগধারায়', topicId: 'marginaalisijat' },
  { fi: 'Komitatiivi', en: 'Comitative', termBn: 'কমিটাটিভ (সাহচর্যবাচক — "সহ/সাথে")', ending: '-ine- + possessive suffix', example: 'perheineen (with his/her family)', usage: 'Together with — formal/written register', usageBn: '"সাথে/সহ" — আনুষ্ঠানিক লিখিত ভাষায়', topicId: 'marginaalisijat' },
]
