export interface VerbTypeTableRow {
  type: string
  ending: string
  example: string
  minaForm: string
  rule: string
  ruleBn: string
}

// A single at-a-glance comparison of Finnish's six verb-conjugation types —
// same content as the 'verbityypit-tarkasti' grammar topic, condensed into a
// scannable table so a learner can quickly look up "how do I conjugate this
// infinitive ending" without opening the full explanation.
export const VERB_TYPE_TABLE: VerbTypeTableRow[] = [
  {
    type: 'Tyyppi 1',
    ending: 'vokaali + -a/-ä',
    example: 'puhua',
    minaForm: 'puhun',
    rule: 'Drop -a/-ä, add the personal ending directly. The largest, default group.',
    ruleBn: '-a/-ä বাদ দিয়ে সরাসরি ব্যক্তিবাচক প্রত্যয় যোগ করো। সবচেয়ে বড়, ডিফল্ট শ্রেণি।',
  },
  {
    type: 'Tyyppi 2',
    ending: '-da/-dä',
    example: 'syödä',
    minaForm: 'syön',
    rule: 'Drop -da/-dä the same way; the hän-form is just the bare stem.',
    ruleBn: '-da/-dä একইভাবে বাদ দাও; hän-রূপ শুধু মূল স্টেম।',
  },
  {
    type: 'Tyyppi 3',
    ending: '-la/-lä, -na/-nä, -ra/-rä, -sta/-stä',
    example: 'tulla',
    minaForm: 'tulen',
    rule: 'Keep the whole stem and insert -e- before the personal ending.',
    ruleBn: 'পুরো স্টেম রেখে ব্যক্তিবাচক প্রত্যয়ের আগে -e- যোগ করো।',
  },
  {
    type: 'Tyyppi 4',
    ending: '-ata/-ätä (vowel-final stem)',
    example: 'haluta',
    minaForm: 'haluan',
    rule: 'Drop -ta/-tä, add -a-/-ä- plus the ending, often lengthening the vowel.',
    ruleBn: '-ta/-tä বাদ দিয়ে -a-/-ä- ও প্রত্যয় যোগ করো, প্রায়ই স্বরধ্বনি দীর্ঘ হয়।',
  },
  {
    type: 'Tyyppi 5',
    ending: '-ita/-itä',
    example: 'tarvita',
    minaForm: 'tarvitsen',
    rule: 'Insert -tse- before the personal ending.',
    ruleBn: 'ব্যক্তিবাচক প্রত্যয়ের আগে -tse- যোগ করো।',
  },
  {
    type: 'Tyyppi 6',
    ending: '-eta/-etä',
    example: 'vanheta',
    minaForm: 'vanhenen',
    rule: 'Insert -ne- before the ending; almost always a "becoming X" change-of-state verb.',
    ruleBn: 'প্রত্যয়ের আগে -ne- যোগ করো; প্রায় সবসময় "কিছু হয়ে ওঠা" বোঝানো ক্রিয়া।',
  },
]
