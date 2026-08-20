// A dedicated reference for the Finnish number system: cardinals 0 to a
// billion, ordinals, the number+noun singular/plural agreement rule (the
// part learners find genuinely confusing), and numbers in real contexts
// (dates, years, money, age, quantities, percentages). Original content.

export interface NumberRow {
  value: string
  fi: string
  note?: string
}

export const CARDINALS_BASIC: NumberRow[] = [
  { value: '0', fi: 'nolla' },
  { value: '1', fi: 'yksi' },
  { value: '2', fi: 'kaksi' },
  { value: '3', fi: 'kolme' },
  { value: '4', fi: 'neljä' },
  { value: '5', fi: 'viisi' },
  { value: '6', fi: 'kuusi' },
  { value: '7', fi: 'seitsemän' },
  { value: '8', fi: 'kahdeksan' },
  { value: '9', fi: 'yhdeksän' },
  { value: '10', fi: 'kymmenen' },
  { value: '11', fi: 'yksitoista', note: 'yksi + toista ("one of the second ten")' },
  { value: '12', fi: 'kaksitoista' },
  { value: '13', fi: 'kolmetoista' },
  { value: '14', fi: 'neljätoista' },
  { value: '15', fi: 'viisitoista' },
  { value: '16', fi: 'kuusitoista' },
  { value: '17', fi: 'seitsemäntoista' },
  { value: '18', fi: 'kahdeksantoista' },
  { value: '19', fi: 'yhdeksäntoista' },
  { value: '20', fi: 'kaksikymmentä' },
]

export const CARDINALS_TENS: NumberRow[] = [
  { value: '20', fi: 'kaksikymmentä' },
  { value: '30', fi: 'kolmekymmentä' },
  { value: '40', fi: 'neljäkymmentä' },
  { value: '50', fi: 'viisikymmentä' },
  { value: '60', fi: 'kuusikymmentä' },
  { value: '70', fi: 'seitsemänkymmentä' },
  { value: '80', fi: 'kahdeksankymmentä' },
  { value: '90', fi: 'yhdeksänkymmentä' },
  { value: '100', fi: 'sata' },
]

export const CARDINALS_LARGE: NumberRow[] = [
  { value: '21', fi: 'kaksikymmentäyksi', note: 'tens + units fuse into one written word' },
  { value: '34', fi: 'kolmekymmentäneljä' },
  { value: '99', fi: 'yhdeksänkymmentäyhdeksän' },
  { value: '100', fi: 'sata' },
  { value: '101', fi: 'satayksi' },
  { value: '150', fi: 'sataviisikymmentä' },
  { value: '200', fi: 'kaksisataa', note: 'sata → sataa (partitive-looking form) once a number precedes it' },
  { value: '999', fi: 'yhdeksänsataayhdeksänkymmentäyhdeksän' },
  { value: '1 000', fi: 'tuhat' },
  { value: '1 001', fi: 'tuhatyksi' },
  { value: '2 000', fi: 'kaksituhatta', note: 'tuhat also fuses into the compound word' },
  { value: '2 025', fi: 'kaksituhattakaksikymmentäviisi', note: 'years are read as ONE long number, unlike English "twenty twenty-five"' },
  { value: '10 000', fi: 'kymmenentuhatta' },
  { value: '100 000', fi: 'satatuhatta' },
  { value: '1 000 000', fi: 'miljoona', note: 'a true noun — does NOT fuse with the preceding number' },
  { value: '2 000 000', fi: 'kaksi miljoonaa', note: 'written as two words: number (nominative) + miljoona (partitive)' },
  { value: '1 000 000 000', fi: 'miljardi', note: 'Finnish "miljardi" = English "billion" (10⁹) — long-scale system' },
  { value: '3 000 000 000', fi: 'kolme miljardia' },
]

export const ORDINALS: NumberRow[] = [
  { value: '1.', fi: 'ensimmäinen', note: 'irregular' },
  { value: '2.', fi: 'toinen', note: 'irregular' },
  { value: '3.', fi: 'kolmas' },
  { value: '4.', fi: 'neljäs' },
  { value: '5.', fi: 'viides' },
  { value: '6.', fi: 'kuudes' },
  { value: '7.', fi: 'seitsemäs' },
  { value: '8.', fi: 'kahdeksas' },
  { value: '9.', fi: 'yhdeksäs' },
  { value: '10.', fi: 'kymmenes' },
  { value: '11.', fi: 'yhdestoista', note: 'not "yksitoista" + s — the teens have their own -toista pattern' },
  { value: '20.', fi: 'kahdeskymmenes' },
  { value: '21.', fi: 'kahdeskymmenesensimmäinen', note: 'BOTH parts of a compound ordinal become ordinal' },
  { value: '100.', fi: 'sadas' },
  { value: '1 000.', fi: 'tuhannes' },
]

export interface AgreementExample {
  fi: string
  en: string
  bn: string
  note?: string
}

// Pattern A: counting phrase in the nominative ("how many X are there")
export const AGREEMENT_PATTERN_A: AgreementExample[] = [
  { fi: 'Minulla on yksi kirja.', en: 'I have one book.', bn: 'আমার একটি বই আছে।', note: '1 → nominative singular noun' },
  { fi: 'Minulla on kaksi kirjaa.', en: 'I have two books.', bn: 'আমার দুটি বই আছে।', note: '2+ → PARTITIVE SINGULAR noun, not plural!' },
  { fi: 'Minulla on sata kirjaa.', en: 'I have a hundred books.', bn: 'আমার একশটি বই আছে।', note: 'still singular partitive, no matter how big the number' },
  { fi: 'Minulla on miljoona kirjaa.', en: 'I have a million books.', bn: 'আমার দশ লক্ষ বই আছে।', note: 'even a million — the noun never becomes plural here' },
  { fi: 'Pöydällä on monta kirjaa.', en: 'There are many books on the table.', bn: 'টেবিলে অনেক বই আছে।', note: 'monta behaves like a number: singular partitive' },
  { fi: 'Pöydällä on muutama kirja.', en: 'There are a few books on the table.', bn: 'টেবিলে কয়েকটি বই আছে।', note: 'muutama is the surprising exception: NOMINATIVE singular, like yksi' },
  { fi: 'Pöydällä on useita kirjoja.', en: 'There are several books on the table.', bn: 'টেবিলে বেশ কিছু বই আছে।', note: 'useita is already plural, so it takes PARTITIVE PLURAL' },
  { fi: 'Kaikki kirjat ovat pöydällä.', en: 'All the books are on the table.', bn: 'সব বই টেবিলে আছে।', note: 'kaikki (all, definite/total) takes normal NOMINATIVE PLURAL' },
]

// Pattern B: the whole number+noun phrase is case-marked for its role in
// the sentence — here the noun stays SINGULAR even though the meaning is
// plural, because it agrees with the number word, not with "how many" logic.
export const AGREEMENT_PATTERN_B: AgreementExample[] = [
  { fi: 'Asun kolmessa eri kaupungissa.', en: "I've lived in three different cities.", bn: 'আমি তিনটি ভিন্ন শহরে বাস করেছি।', note: 'inessive — kolme→kolmessa, kaupunki→kaupungissa, BOTH singular' },
  { fi: 'Annoin lahjan kolmelle ystävälle.', en: 'I gave a gift to three friends.', bn: 'আমি তিন বন্ধুকে উপহার দিয়েছি।', note: 'allative — again singular, not "ystäville" (plain plural, unspecified count)' },
  { fi: 'Tulimme kahdella autolla.', en: 'We came in two cars.', bn: 'আমরা দুটি গাড়িতে এসেছি।', note: 'adessive — kaksi→kahdella, auto→autolla, both singular' },
  { fi: 'Puhuin kahden kollegan kanssa.', en: 'I spoke with two colleagues.', bn: 'আমি দুই সহকর্মীর সাথে কথা বলেছি।', note: 'kanssa needs the genitive: kaksi→kahden, kollega→kollegan' },
]

export interface UsageContext {
  context: string
  contextBn: string
  fi: string
  en: string
  bn: string
  note: string
}

export const USAGE_CONTEXTS: UsageContext[] = [
  {
    context: 'Päivämäärä (date)',
    contextBn: 'তারিখ',
    fi: 'Tänään on kahdeskymmenes elokuuta.',
    en: 'Today is the 20th of August.',
    bn: 'আজ আগস্টের বিশতম দিন।',
    note: 'ordinal number + month in partitive; written short form "20. elokuuta"',
  },
  {
    context: 'Vuosiluku (year)',
    contextBn: 'সাল',
    fi: 'Synnyin vuonna kaksituhattakaksi.',
    en: 'I was born in the year two thousand two.',
    bn: 'আমি দুই হাজার দুই সালে জন্মগ্রহণ করেছি।',
    note: 'read as one continuous cardinal number, not split like English',
  },
  {
    context: 'Kellonaika (clock time)',
    contextBn: 'সময়',
    fi: 'Kokous alkaa kello neljätoista.',
    en: 'The meeting starts at 14:00.',
    bn: 'সভা চৌদ্দটায় শুরু হয়।',
    note: 'see the kellonajat grammar topic for the full time-telling system',
  },
  {
    context: 'Hinta (price)',
    contextBn: 'দাম',
    fi: 'Se maksaa kaksikymmentä euroa.',
    en: 'It costs twenty euros.',
    bn: 'এটার দাম বিশ ইউরো।',
    note: 'number + currency in partitive singular, same rule as any counted noun',
  },
  {
    context: 'Ikä (age)',
    contextBn: 'বয়স',
    fi: 'Olen kolmekymmentäviisi vuotta vanha.',
    en: 'I am thirty-five years old.',
    bn: 'আমার বয়স পঁয়ত্রিশ বছর।',
    note: '"vuotta" is the partitive singular of vuosi — also usable as one word: kolmekymmentäviisivuotias',
  },
  {
    context: 'Määrä/mitta (quantity)',
    contextBn: 'পরিমাণ',
    fi: 'Ostin kaksi kiloa perunoita.',
    en: 'I bought two kilos of potatoes.',
    bn: 'আমি দুই কেজি আলু কিনেছি।',
    note: 'double partitive: kaksi kiloa (singular) + perunoita (partitive plural of the substance)',
  },
  {
    context: 'Prosentti (percentage)',
    contextBn: 'শতকরা হার',
    fi: 'Noin viisikymmentä prosenttia vastasi kyllä.',
    en: 'About fifty percent answered yes.',
    bn: 'প্রায় পঞ্চাশ শতাংশ হ্যাঁ উত্তর দিয়েছে।',
    note: 'prosentti → prosenttia, same partitive-after-number rule',
  },
  {
    context: 'Puhelinnumero (phone number)',
    contextBn: 'ফোন নম্বর',
    fi: 'Numero on nolla neljäkymmentä, viisi, kolme, kaksi...',
    en: 'The number is 040 532...',
    bn: 'নম্বরটি হলো ০৪০ ৫৩২...',
    note: 'phone numbers are normally read digit-by-digit or in short groups, not as one giant number',
  },
]

export interface PluraliaTantum {
  fi: string
  en: string
  bn: string
}

// Words that are grammatically ALWAYS plural in Finnish, even where English
// uses a singular — worth memorizing as exceptions to "singular unless counted."
export const PLURALIA_TANTUM: PluraliaTantum[] = [
  { fi: 'häät', en: 'wedding', bn: 'বিয়ে' },
  { fi: 'kasvot', en: 'face', bn: 'মুখ' },
  { fi: 'housut', en: 'trousers/pants', bn: 'প্যান্ট' },
  { fi: 'sakset', en: 'scissors', bn: 'কাঁচি' },
  { fi: 'silmälasit', en: 'glasses (eyewear)', bn: 'চশমা' },
  { fi: 'rahat', en: 'money (one\'s funds, colloquially)', bn: 'টাকাপয়সা' },
]
