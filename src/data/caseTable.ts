export interface CaseTableRow {
  fi: string
  en: string
  ending: string
  example: string
  usage: string
  usageBn: string
}

// A single at-a-glance comparison of the Finnish case system, all inflected
// from the same base word (talo, "house") wherever that's natural, so the
// endings are easy to compare side by side. The three marginal cases use a
// more natural example word instead, per the grammarCases.ts topic notes.
export const CASE_TABLE: CaseTableRow[] = [
  { fi: 'Nominatiivi', en: 'Nominative', ending: '—', example: 'talo', usage: 'Subject; dictionary form', usageBn: 'কর্তা; শব্দের মূল রূপ' },
  { fi: 'Genetiivi', en: 'Genitive', ending: '-n', example: 'talon', usage: "Possession ('of'); base for postpositions", usageBn: 'মালিকানা; postposition-এর ভিত্তি' },
  { fi: 'Partitiivi', en: 'Partitive', ending: '-a/-ä, -ta/-tä', example: 'taloa', usage: 'Part/some of; after negation; after numbers >1', usageBn: 'আংশিক/কিছু পরিমাণ; নেতিবাচক বাক্যে; ১-এর বেশি সংখ্যার পরে' },
  { fi: 'Inessiivi', en: 'Inessive', ending: '-ssa/-ssä', example: 'talossa', usage: 'In / inside', usageBn: 'ভেতরে' },
  { fi: 'Elatiivi', en: 'Elative', ending: '-sta/-stä', example: 'talosta', usage: 'Out of / from inside', usageBn: 'ভেতর থেকে বের হওয়া' },
  { fi: 'Illatiivi', en: 'Illative', ending: '-Vn / -hVn / -seen', example: 'taloon', usage: 'Into', usageBn: 'ভেতরে প্রবেশ' },
  { fi: 'Adessiivi', en: 'Adessive', ending: '-lla/-llä', example: 'talolla', usage: 'On / at; also "having"; transport', usageBn: 'উপরে/কাছে; "থাকা" বোঝাতে; যানবাহনে' },
  { fi: 'Ablatiivi', en: 'Ablative', ending: '-lta/-ltä', example: 'talolta', usage: 'Off of / away from (a surface/person)', usageBn: 'উপর থেকে সরানো / থেকে দূরে' },
  { fi: 'Allatiivi', en: 'Allative', ending: '-lle', example: 'talolle', usage: 'Onto / to', usageBn: 'উপরে/দিকে' },
  { fi: 'Essiivi', en: 'Essive', ending: '-na/-nä', example: 'talona', usage: 'As / being (temporary state or role)', usageBn: 'সাময়িক অবস্থা বা ভূমিকা "হিসেবে"' },
  { fi: 'Translatiivi', en: 'Translative', ending: '-ksi', example: 'taloksi', usage: 'Becoming / turning into; "for, intended as"', usageBn: 'পরিণত হওয়া; "উদ্দেশ্যে/জন্য"' },
  { fi: 'Instruktiivi', en: 'Instructive', ending: '-in', example: 'käsin (by hand)', usage: 'Manner — mostly fixed adverbial expressions', usageBn: 'পদ্ধতি বোঝাতে — সাধারণত নির্দিষ্ট বাগধারায়' },
  { fi: 'Abessiivi', en: 'Abessive', ending: '-tta/-ttä', example: 'rahatta (without money)', usage: 'Without — rare, mostly fixed expressions', usageBn: '"ছাড়া" — বিরল, সাধারণত নির্দিষ্ট বাগধারায়' },
  { fi: 'Komitatiivi', en: 'Comitative', ending: '-ine- + possessive suffix', example: 'perheineen (with his/her family)', usage: 'Together with — formal/written register', usageBn: '"সাথে/সহ" — আনুষ্ঠানিক লিখিত ভাষায়' },
]
