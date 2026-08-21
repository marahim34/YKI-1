export interface VerbTypeTableRow {
  type: string
  // Bangla name for the type label itself (e.g. "ধরন ১"), shown alongside
  // the Finnish/English "Tyyppi 1" — separate from ruleBn, which explains
  // the conjugation rule rather than naming the type.
  typeBn: string
  ending: string
  example: string
  minaForm: string
  rule: string
  ruleBn: string
  // The GrammarTopic (src/data/grammar.ts) with the full explanation and
  // examples — all six rows point at the same topic, since Finnish verb
  // types are taught together as one system rather than one topic each.
  topicId: string
}

// A single at-a-glance comparison of Finnish's six verb-conjugation types —
// same content as the 'verbityypit-tarkasti' grammar topic, condensed into a
// scannable table so a learner can quickly look up "how do I conjugate this
// infinitive ending" without opening the full explanation.
export const VERB_TYPE_TABLE: VerbTypeTableRow[] = [
  {
    type: 'Tyyppi 1',
    typeBn: 'ধরন ১',
    ending: 'vokaali + -a/-ä',
    example: 'puhua',
    minaForm: 'puhun',
    rule: 'Drop -a/-ä, add the personal ending directly. The largest, default group.',
    ruleBn: '-a/-ä বাদ দিয়ে সরাসরি ব্যক্তিবাচক প্রত্যয় যোগ করো। সবচেয়ে বড়, ডিফল্ট শ্রেণি।',
    topicId: 'verbityypit-tarkasti',
  },
  {
    type: 'Tyyppi 2',
    typeBn: 'ধরন ২',
    ending: '-da/-dä',
    example: 'syödä',
    minaForm: 'syön',
    rule: 'Drop -da/-dä the same way; the hän-form is just the bare stem.',
    ruleBn: '-da/-dä একইভাবে বাদ দাও; hän-রূপ শুধু মূল স্টেম।',
    topicId: 'verbityypit-tarkasti',
  },
  {
    type: 'Tyyppi 3',
    typeBn: 'ধরন ৩',
    ending: '-la/-lä, -na/-nä, -ra/-rä, -sta/-stä',
    example: 'tulla',
    minaForm: 'tulen',
    rule: 'Keep the whole stem and insert -e- before the personal ending.',
    ruleBn: 'পুরো স্টেম রেখে ব্যক্তিবাচক প্রত্যয়ের আগে -e- যোগ করো।',
    topicId: 'verbityypit-tarkasti',
  },
  {
    type: 'Tyyppi 4',
    typeBn: 'ধরন ৪',
    ending: '-ata/-ätä (vowel-final stem)',
    example: 'haluta',
    minaForm: 'haluan',
    rule: 'Drop -ta/-tä, add -a-/-ä- plus the ending, often lengthening the vowel.',
    ruleBn: '-ta/-tä বাদ দিয়ে -a-/-ä- ও প্রত্যয় যোগ করো, প্রায়ই স্বরধ্বনি দীর্ঘ হয়।',
    topicId: 'verbityypit-tarkasti',
  },
  {
    type: 'Tyyppi 5',
    typeBn: 'ধরন ৫',
    ending: '-ita/-itä',
    example: 'tarvita',
    minaForm: 'tarvitsen',
    rule: 'Insert -tse- before the personal ending.',
    ruleBn: 'ব্যক্তিবাচক প্রত্যয়ের আগে -tse- যোগ করো।',
    topicId: 'verbityypit-tarkasti',
  },
  {
    type: 'Tyyppi 6',
    typeBn: 'ধরন ৬',
    ending: '-eta/-etä',
    example: 'vanheta',
    minaForm: 'vanhenen',
    rule: 'Insert -ne- before the ending; almost always a "becoming X" change-of-state verb.',
    ruleBn: 'প্রত্যয়ের আগে -ne- যোগ করো; প্রায় সবসময় "কিছু হয়ে ওঠা" বোঝানো ক্রিয়া।',
    topicId: 'verbityypit-tarkasti',
  },
]
