import type { CefrLevel } from '../types'

type Row = [fi: string, en: string, bn: string, example: string, exampleEn: string, exampleBn: string, theme: string, level: CefrLevel]

// Real-life "dealing with adult life in Finland" vocabulary, in the same
// original-content style as src/data/vocab.ts. Covers Kela/benefits,
// banking, the renting process, a doctor visit, and a job interview —
// distinct from (and deliberately deeper than) the general 'housing',
// 'healthcare' and 'job search' themes already in vocab.ts.
export const SITUATION_ROWS: Row[] = [
  // kela and benefits
  ['etuus', 'benefit (social security benefit)', 'সুবিধা / ভাতা', 'Kela myöntää monenlaisia etuuksia.', 'Kela grants many kinds of benefits.', 'কেলা অনেক ধরনের সুবিধা/ভাতা প্রদান করে।', 'kela and benefits', 'B1'],
  ['hakemus', 'application', 'আবেদনপত্র', 'Täytin Kela-hakemuksen verkossa.', 'I filled in the Kela application online.', 'আমি অনলাইনে কেলার আবেদনপত্র পূরণ করেছি।', 'kela and benefits', 'A2'],
  ['päätös', 'decision', 'সিদ্ধান্ত', 'Sain Kelan päätöksen postissa.', "I received Kela's decision in the mail.", 'আমি ডাকযোগে কেলার সিদ্ধান্ত পেয়েছি।', 'kela and benefits', 'B1'],
  ['lapsilisä', 'child benefit', 'শিশু ভাতা', 'Lapsilisä maksetaan joka kuukausi.', 'Child benefit is paid every month.', 'শিশু ভাতা প্রতি মাসে প্রদান করা হয়।', 'kela and benefits', 'B1'],
  ['asumistuki', 'housing benefit', 'আবাসন ভাতা', 'Hain asumistukea uuteen asuntoon.', 'I applied for housing benefit for the new apartment.', 'আমি নতুন বাসার জন্য আবাসন ভাতার আবেদন করেছি।', 'kela and benefits', 'B1'],
  ['työttömyyskorvaus', 'unemployment benefit', 'বেকার ভাতা', 'Hän saa työttömyyskorvausta työn hakemisen aikana.', 'He/she receives unemployment benefit while looking for work.', 'চাকরি খোঁজার সময় সে বেকার ভাতা পায়।', 'kela and benefits', 'B2'],
  ['varata aika', 'to book an appointment', 'অ্যাপয়েন্টমেন্ট বুক করা', 'Varasin ajan Kelan asiakaspalveluun.', "I booked an appointment at Kela's customer service.", 'আমি কেলার গ্রাহক সেবায় অ্যাপয়েন্টমেন্ট বুক করেছি।', 'kela and benefits', 'A2'],
  ['tulot', 'income', 'আয়', 'Ilmoita tulosi hakemuksessa tarkasti.', 'Report your income accurately in the application.', 'আবেদনপত্রে সঠিকভাবে আপনার আয়ের তথ্য দিন।', 'kela and benefits', 'B1'],
  ['liite', 'attachment (document)', 'সংযুক্তি', 'Muista lisätä palkkatodistus liitteeksi.', 'Remember to add the salary certificate as an attachment.', 'মনে রাখবেন বেতনের সনদ সংযুক্তি হিসেবে যুক্ত করতে।', 'kela and benefits', 'A2'],
  ['käsittelyaika', 'processing time', 'প্রক্রিয়াকরণের সময়', 'Hakemuksen käsittelyaika on noin kuukausi.', "The application's processing time is about a month.", 'আবেদনের প্রক্রিয়াকরণের সময় প্রায় এক মাস।', 'kela and benefits', 'B2'],

  // banking
  ['pankkitili', 'bank account', 'ব্যাংক অ্যাকাউন্ট', 'Avasin pankkitilin heti Suomeen muutettuani.', 'I opened a bank account right after moving to Finland.', 'ফিনল্যান্ডে আসার সাথে সাথেই আমি একটি ব্যাংক অ্যাকাউন্ট খুলেছি।', 'banking', 'A2'],
  ['pankkikortti', 'bank/debit card', 'ব্যাংক কার্ড', 'Maksan yleensä pankkikortilla.', 'I usually pay with my bank card.', 'আমি সাধারণত ব্যাংক কার্ড দিয়ে পরিশোধ করি।', 'banking', 'A1'],
  ['verkkopankki', 'online bank', 'অনলাইন ব্যাংকিং', 'Hoidan kaikki laskut verkkopankissa.', 'I handle all my bills in the online bank.', 'আমি সব বিল অনলাইন ব্যাংকিংয়ে পরিশোধ করি।', 'banking', 'B1'],
  ['tunnusluvut', 'bank codes / credentials', 'ব্যাংকিং কোড', 'Älä koskaan anna tunnuslukujasi kenellekään.', 'Never give your bank codes to anyone.', 'আপনার ব্যাংকিং কোড কখনও কারও কাছে দেবেন না।', 'banking', 'B1'],
  ['siirtää rahaa', 'to transfer money', 'টাকা স্থানান্তর করা', 'Siirsin rahaa ystävälleni verkkopankissa.', 'I transferred money to my friend in the online bank.', 'আমি অনলাইন ব্যাংকিংয়ের মাধ্যমে বন্ধুর কাছে টাকা পাঠিয়েছি।', 'banking', 'A2'],
  ['lasku', 'bill / invoice', 'বিল', 'Sähkölasku tuli sähköpostiin tällä kertaa.', 'The electricity bill came by email this time.', 'এবার বিদ্যুৎ বিল ইমেইলে এসেছে।', 'banking', 'A2'],
  ['maksaa lasku', 'to pay a bill', 'বিল পরিশোধ করা', 'Maksan laskut aina eräpäivään mennessä.', 'I always pay my bills by the due date.', 'আমি সবসময় নির্ধারিত তারিখের মধ্যে বিল পরিশোধ করি।', 'banking', 'A2'],
  ['saldo', 'balance', 'ব্যালেন্স', 'Tarkistin tilin saldon puhelimella.', 'I checked the account balance on my phone.', 'আমি ফোনে অ্যাকাউন্টের ব্যালেন্স চেক করেছি।', 'banking', 'B1'],
  ['korko', 'interest', 'সুদ', 'Lainan korko nousi tänä vuonna.', "The loan's interest rate rose this year.", 'এই বছর ঋণের সুদের হার বেড়েছে।', 'banking', 'B1'],
  ['laina', 'loan', 'ঋণ', 'Haimme pankista lainaa asuntoa varten.', 'We applied for a loan from the bank for an apartment.', 'আমরা একটি বাসার জন্য ব্যাংক থেকে ঋণ নিয়েছি।', 'banking', 'A2'],

  // renting process
  ['vuokrasopimus', 'rental agreement', 'ভাড়া চুক্তি', 'Lue vuokrasopimus huolella ennen allekirjoitusta.', 'Read the rental agreement carefully before signing.', 'স্বাক্ষর করার আগে ভাড়া চুক্তিটি ভালোভাবে পড়ুন।', 'renting process', 'B1'],
  ['vuokranantaja', 'landlord', 'বাড়িওয়ালা', 'Vuokranantaja korjasi rikkoutuneen hanan nopeasti.', 'The landlord fixed the broken faucet quickly.', 'বাড়িওয়ালা দ্রুত ভাঙা কলটি মেরামত করে দিয়েছেন।', 'renting process', 'B1'],
  ['vuokralainen', 'tenant', 'ভাড়াটে', 'Uusi vuokralainen muuttaa taloon ensi viikolla.', 'The new tenant is moving into the building next week.', 'নতুন ভাড়াটে আগামী সপ্তাহে বাড়িতে উঠবেন।', 'renting process', 'B1'],
  ['takuuvuokra', 'rental deposit', 'জামানত (ভাড়ার)', 'Maksoin takuuvuokran kuukautta ennen muuttoa.', 'I paid the rental deposit a month before moving in.', 'স্থানান্তরের এক মাস আগে আমি জামানত পরিশোধ করেছি।', 'renting process', 'B1'],
  ['irtisanoa', 'to give notice / terminate a contract', 'চুক্তি বাতিল করা', 'Irtisanoin vuokrasopimuksen kirjallisesti kuukausi sitten.', 'I terminated the rental agreement in writing a month ago.', 'আমি এক মাস আগে লিখিতভাবে ভাড়া চুক্তি বাতিল করেছি।', 'renting process', 'B2'],
  ['muuttopäivä', 'moving day', 'স্থানান্তরের দিন', 'Muuttopäivä lähestyy, ja laatikoita on paljon.', 'Moving day is approaching, and there are lots of boxes.', 'স্থানান্তরের দিন কাছে আসছে, আর অনেক বাক্স রয়েছে।', 'renting process', 'A2'],
  ['asunnonhaku', 'apartment hunting', 'বাসা খোঁজা', 'Asunnonhaku pääkaupunkiseudulla on vaikeaa.', 'Apartment hunting in the capital region is difficult.', 'রাজধানী অঞ্চলে বাসা খোঁজা কঠিন।', 'renting process', 'B1'],
  ['näyttö', 'apartment viewing / showing', 'বাসা দেখা (ভিউয়িং)', 'Menin asunnon näyttöön eilen illalla.', 'I went to the apartment viewing yesterday evening.', 'আমি গতকাল সন্ধ্যায় বাসা দেখতে (ভিউয়িং) গিয়েছিলাম।', 'renting process', 'B1'],
  ['remontti', 'renovation', 'সংস্কারকাজ', 'Kylpyhuoneessa on remontti parhaillaan.', 'There is a renovation going on in the bathroom right now.', 'এই মুহূর্তে বাথরুমে সংস্কারকাজ চলছে।', 'renting process', 'A2'],
  ['naapurusto', 'neighborhood', 'পাড়া / এলাকা', 'Tutustuin naapurustoon ennen vuokrasopimuksen allekirjoittamista.', 'I got to know the neighborhood before signing the rental agreement.', 'ভাড়া চুক্তিতে সই করার আগে আমি এলাকাটি সম্পর্কে জেনে নিয়েছিলাম।', 'renting process', 'B1'],

  // doctor visit
  ['oire', 'symptom', 'লক্ষণ', 'Kerroin lääkärille kaikki oireeni tarkasti.', 'I told the doctor all my symptoms in detail.', 'আমি ডাক্তারকে আমার সব লক্ষণ বিস্তারিতভাবে বলেছি।', 'doctor visit', 'B1'],
  ['särky', 'ache / pain', 'ব্যথা', 'Polvessani on jatkuvaa särkyä.', 'I have constant pain in my knee.', 'আমার হাঁটুতে ক্রমাগত ব্যথা হচ্ছে।', 'doctor visit', 'A2'],
  ['kuume', 'fever', 'জ্বর', 'Lapsella oli eilen korkea kuume.', 'The child had a high fever yesterday.', 'গতকাল শিশুটির উচ্চ জ্বর ছিল।', 'doctor visit', 'A2'],
  ['tutkimus', 'examination / test', 'পরীক্ষা (চিকিৎসাগত)', 'Lääkäri määräsi verikokeen ja muita tutkimuksia.', 'The doctor ordered a blood test and other examinations.', 'ডাক্তার রক্ত পরীক্ষা এবং আরও কিছু পরীক্ষার নির্দেশ দিয়েছেন।', 'doctor visit', 'B1'],
  ['diagnoosi', 'diagnosis', 'রোগ নির্ণয়', 'Sain vihdoin diagnoosin pitkän odotuksen jälkeen.', 'I finally got a diagnosis after a long wait.', 'দীর্ঘ অপেক্ষার পর অবশেষে আমি রোগ নির্ণয় পেয়েছি।', 'doctor visit', 'B1'],
  ['sairausloma', 'sick leave', 'অসুস্থতাজনিত ছুটি', 'Sain lääkäriltä kolmen päivän sairausloman.', 'I got three days of sick leave from the doctor.', 'ডাক্তার আমাকে তিন দিনের অসুস্থতাজনিত ছুটি দিয়েছেন।', 'doctor visit', 'B1'],
  ['ajanvaraus', 'appointment booking', 'অ্যাপয়েন্টমেন্ট বুকিং', 'Ajanvaraus lääkärille onnistuu netin kautta.', "Booking a doctor's appointment can be done online.", 'অনলাইনে ডাক্তারের অ্যাপয়েন্টমেন্ট বুক করা যায়।', 'doctor visit', 'A2'],
  ['lähete', 'referral', 'রেফারেল', 'Lääkäri kirjoitti minulle lähetteen erikoislääkärille.', 'The doctor wrote me a referral to a specialist.', 'ডাক্তার আমাকে একজন বিশেষজ্ঞ ডাক্তারের কাছে রেফারেল লিখে দিয়েছেন।', 'doctor visit', 'B1'],
  ['toipua', 'to recover', 'সুস্থ হয়ে ওঠা', 'Toivun leikkauksesta pikkuhiljaa.', 'I am recovering from the surgery little by little.', 'আমি ধীরে ধীরে অস্ত্রোপচার থেকে সেরে উঠছি।', 'doctor visit', 'B1'],
  ['särkylääke', 'painkiller', 'ব্যথানাশক ওষুধ', 'Otin särkylääkettä hammassärkyyn.', 'I took a painkiller for my toothache.', 'দাঁতের ব্যথার জন্য আমি ব্যথানাশক ওষুধ খেয়েছি।', 'doctor visit', 'A2'],

  // job interview
  ['työhaastattelu', 'job interview', 'চাকরির সাক্ষাৎকার', 'Valmistauduin huolella työhaastatteluun.', 'I prepared carefully for the job interview.', 'আমি চাকরির সাক্ষাৎকারের জন্য যত্ন সহকারে প্রস্তুতি নিয়েছি।', 'job interview', 'A2'],
  ['vahvuus', 'strength', 'শক্তি / গুণ', 'Mikä on suurin vahvuutesi työntekijänä?', 'What is your greatest strength as an employee?', 'একজন কর্মী হিসেবে আপনার সবচেয়ে বড় গুণ কী?', 'job interview', 'B1'],
  ['heikkous', 'weakness', 'দুর্বলতা', 'Haastattelija kysyi myös heikkouksistani.', 'The interviewer also asked about my weaknesses.', 'সাক্ষাৎকার গ্রহণকারী আমার দুর্বলতা সম্পর্কেও জিজ্ঞাসা করেছিলেন।', 'job interview', 'B1'],
  ['työkokemus', 'work experience', 'কাজের অভিজ্ঞতা', 'Kerroin aiemmasta työkokemuksestani ravintola-alalla.', 'I talked about my previous work experience in the restaurant industry.', 'আমি রেস্তোরাঁ খাতে আমার আগের কাজের অভিজ্ঞতা সম্পর্কে বলেছি।', 'job interview', 'A2'],
  ['palkkatoive', 'salary expectation', 'প্রত্যাশিত বেতন', 'Haastattelija kysyi palkkatoivettani suoraan.', 'The interviewer asked directly about my salary expectation.', 'সাক্ষাৎকার গ্রহণকারী সরাসরি আমার প্রত্যাশিত বেতন সম্পর্কে জিজ্ঞাসা করেছিলেন।', 'job interview', 'B2'],
  ['suositus', 'reference / recommendation', 'সুপারিশপত্র', 'Liitin hakemukseen entisen esimieheni suosituksen.', 'I attached a recommendation from my former supervisor to the application.', 'আমি আবেদনপত্রের সাথে আমার সাবেক ব্যবস্থাপকের সুপারিশপত্র সংযুক্ত করেছি।', 'job interview', 'B1'],
  ['esitellä itsensä', 'to introduce oneself', 'নিজের পরিচয় দেওয়া', 'Haastattelu alkoi, kun sain esitellä itseni.', 'The interview began when I got to introduce myself.', 'সাক্ষাৎকার শুরু হয়েছিল যখন আমি নিজের পরিচয় দেওয়ার সুযোগ পেয়েছিলাম।', 'job interview', 'B1'],
  ['motivaatiokirje', 'cover letter', 'কভার লেটার', 'Kirjoitin motivaatiokirjeen jokaiseen hakemukseen erikseen.', 'I wrote a separate cover letter for every application.', 'আমি প্রতিটি আবেদনের জন্য আলাদাভাবে কভার লেটার লিখেছি।', 'job interview', 'B1'],
  ['soveltua tehtävään', 'to be suited for the role', 'পদের জন্য উপযুক্ত হওয়া', 'Uskon, että soveltuisin hyvin tähän tehtävään.', 'I believe I would be well suited for this role.', 'আমি বিশ্বাস করি যে আমি এই পদের জন্য ভালোভাবে উপযুক্ত হব।', 'job interview', 'B2'],
  ['rekrytoija', 'recruiter', 'নিয়োগকারী', 'Rekrytoija otti minuun yhteyttä puhelimitse.', 'The recruiter contacted me by phone.', 'রিক্রুটার ফোনে আমার সাথে যোগাযোগ করেছিলেন।', 'job interview', 'B1'],
]
