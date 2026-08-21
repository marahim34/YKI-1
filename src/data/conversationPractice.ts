import type { ConversationChapter } from '../types'

// A new, richer practice format alongside Book Practice: full roleplay
// dialogues, quick-reaction scenarios, longer speaking/opinion prompts, and
// letter-writing tasks, organized into "chapters" the same way Book Practice
// is. Chapter 1 covers parties, compliments, weddings, and everyday social
// situations (kehuminen, häät, naapurit, ihmissuhteet). Original content —
// not copied from any textbook.
export const CONVERSATION_CHAPTERS: ConversationChapter[] = [
  {
    id: 'conv-ch1',
    titleFi: 'Luku 1: Juhlat, kehut ja ihmissuhteet',
    titleEn: 'Chapter 1: Parties, compliments and relationships',
    level: 'B1',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'stylish'?", options: ['tyylikäs', 'ruma', 'tylsä', 'vanha'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'hairstyle'?", options: ['kampaus', 'kampaamo', 'hiukset', 'kammata'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'necklace'?", options: ['kaulakoru', 'korvakoru', 'sormus', 'rannekoru'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'to compliment'?", options: ['kehua', 'moittia', 'unohtaa', 'arvostella'], correctIndex: 0 },
      { question: 'Tuo väri ___ sinulle todella hyvin.', options: ['sopii', 'näyttää', 'kuuluu', 'menee'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'smile'?", options: ['hymy', 'nauru', 'itku', 'ilme'], correctIndex: 0 },
    ],
    discussionQuestions: [
      { fi: 'Muistuttaako lemmikkieläin omistajaansa?', en: 'Does a pet resemble its owner?' },
      { fi: 'Entä muistuttavatko avioparit toisiansa?', en: 'Do married couples resemble each other?' },
      {
        fi: 'Kerro yksi sinulle tärkeä muisto. Mitä silloin tapahtui? Miksi muisto on sinulle tärkeä?',
        en: 'Tell one important memory. What happened? Why is it important to you?',
      },
      { fi: 'Kerro ensimmäinen muisto, joka sinulla on lapsuudesta.', en: 'Tell the first memory you have from childhood.' },
    ],
    crossword: [
      { prompt: 'Nainen, joka menee naimisiin on tällainen. Hänellä on tavallisesti valkoinen puku.', answer: 'morsian', hint: 'bride' },
      { prompt: 'Juhlan nimi, kun mennään naimisiin.', answer: 'häät', hint: 'wedding' },
      { prompt: 'Ennen juhlia vieraille täytyy kertoa, missä ja milloin juhlat ovat. Lähetät tällaisen postissa.', answer: 'kutsu', hint: 'invitation' },
      {
        prompt: 'Jos et halua viedä juhliin pakettia ja kaverilla on jo kaikkea, voit viedä hänelle tällaisen. Sen voi ostaa esimerkiksi hierontaan, kauppaan, elokuviin, teatteriin.',
        answer: 'lahjakortti',
        hint: 'gift card',
      },
      { prompt: "Kun sinä sanot: 'Paljon onnea!' tai 'Onneksi olkoon!', mitä sinä teet?", answer: 'onnittelet', hint: 'you congratulate (perusmuoto: onnitella)' },
      { prompt: 'Järjestät juhlat. Et halua tehdä itse ruokaa juhliin. Voit palkata tämän.', answer: 'pitopalvelu', hint: 'catering service' },
      { prompt: 'Juhla, joka järjestetään, kun lukio, ammattikoulu tai yliopisto on loppu.', answer: 'valmistujaiset', hint: 'graduation party' },
      { prompt: 'Juhla, joka järjestetään, kun joku muuttaa pois tai vaihtaa työpaikkaa.', answer: 'läksiäiset', hint: 'farewell party' },
      { prompt: 'Tämä on ihmisen viimeinen juhla.', answer: 'hautajaiset', hint: 'funeral' },
      { prompt: 'Ihmiset, jotka on kutsuttu juhliin, ovat tällaisia.', answer: 'vieraita', hint: 'guests (perusmuoto: vieras)' },
    ],
    dialogues: [
      {
        id: 'd1',
        titleFi: 'Ystävä tulee sinun luo kylään',
        titleEn: 'A friend comes to visit',
        turns: [
          { speaker: 'Ystävä', fi: 'Moi! Sori, että mä oon vähän myöhässä. Ihan hirvee keli ulkona.' },
          { speaker: 'Sinä', fi: 'Ei se mitään! Tule sisään. Kiva että pääsit.' },
          { speaker: 'Ystävä', fi: 'Kiitos hei kutsusta. Oli tosi kiva, että pyysit mut käymään.' },
          { speaker: 'Sinä', fi: 'Kiitos, että tulit. Haluatko jotain juotavaa?' },
          { speaker: 'Ystävä', fi: 'Kiitos, mä voisin ottaa vaikka kupin kahvia, jos sulla on.' },
          { speaker: 'Sinä', fi: 'Totta kai! Kahvia tulee. Istu vaan olohuoneeseen.' },
          { speaker: 'Ystävä', fi: 'Kiitos. Sulla on tosi kaunis koti. Paljonko tässä on neliöitä?' },
          { speaker: 'Sinä', fi: 'Kiitos! Tässä on noin 65 neliötä. Juuri sopiva minulle.' },
          { speaker: 'Ystävä', fi: 'Juu-u. Sori, nyt mä en muista, että millon sä muutitkaan tähän asuntoon?' },
          { speaker: 'Sinä', fi: 'Mä muutin tänne noin kaksi vuotta sitten.' },
          { speaker: 'Ystävä', fi: 'Niin niin, niinhän se olikin. Ootko sä ollut tyytyväinen tähän asuntoon?' },
          { speaker: 'Sinä', fi: 'Olen kyllä! Asunto on hyvä ja sijainti on erinomainen. Ainoastaan keittiö voisi olla vähän isompi.' },
        ],
      },
      {
        id: 'd2',
        titleFi: 'Ystävä on lähdössä',
        titleEn: 'A friend is leaving',
        turns: [
          { speaker: 'Ystävä', fi: 'Ai kamala, onks kello noin paljon? Kuule kyllä mun nyt on lähdettävä, huomenna on aikainen aamu.' },
          { speaker: 'Sinä', fi: 'Okei, ymmärrän. Mitä sinulla on huomenna suunnitelmissa?' },
          {
            speaker: 'Ystävä',
            fi: 'No mulla on huomenna aamuvuoro, että pitää mennä ajoissa sänkyyn. Mut kiitos sulle tosi paljon. Oli tosi kiva nähdä ja mahtavat tarjoilut sulla taas oli. Ens kerralla sitten sä tuut meille. Sopisko sulle jo ens lauantaina?',
          },
          { speaker: 'Sinä', fi: 'Valitettavasti ens lauantai ei sovi, koska mulla on muita suunnitelmia.' },
          { speaker: 'Ystävä', fi: 'Ai jaa, no ei se mitään. Joskus toiste sitten. Kuule, miten tästä meneekään busseja tähän aikaan tai millä mä pääsisin kaupunkiin?' },
          { speaker: 'Sinä', fi: 'Mä voin viedä sinut autolla kotiin.' },
          { speaker: 'Ystävä', fi: 'Ihan totta? Mut siitä on sulle ihan hirveesti vaivaa! Kyllä mä tästä voin ottaa vaikka taksinkin, jos en muuten pääse.' },
          { speaker: 'Sinä', fi: 'Ei se ole mikään vaiva. Otan mielelläni sinut kyytiin.' },
          { speaker: 'Ystävä', fi: 'Voi vitsi, sä oot kyllä ihan paras. Kiitos paljon.' },
          { speaker: 'Sinä', fi: 'Eipä kestä! Oli kiva nähdä. Nähdään pian!' },
        ],
      },
      {
        id: 'd3',
        titleFi: 'Onnittelet ystävää uudesta työpaikasta',
        titleEn: 'Calling to congratulate',
        turns: [
          { speaker: 'Ystävä', fi: '[Vastaat puheluun ja ystävä kuulee sinut]', en: 'You call and friend answers', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Hei! Täällä on [nimesi]. Soitan onnitellakseni sinua!' },
          { speaker: 'Ystävä', fi: '[Ystävä vastaa]', en: 'Friend responds', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Kuulin, että sait uuden työpaikan! Onneksi olkoon!' },
          { speaker: 'Ystävä', fi: '[Ystävä kiittää ja kommentoi]', en: 'Friend thanks and comments', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Millainen se uusi työ on? Mistä pidät siitä?' },
          { speaker: 'Ystävä', fi: '[Ystävä vastaa]', en: 'Friend responds', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Hyvä kuulla! Milloin voin soittaa sinulle uudelleen jutellakseni lisää?' },
          { speaker: 'Ystävä', fi: '[Ystävä vastaa]', en: 'Friend responds', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Selvä! Otan yhteyttä myöhemmin. Nähdään!' },
        ],
      },
      {
        id: 'd4',
        titleFi: 'Miten pukeutua hienoihin juhliin',
        titleEn: 'Dressing for formal parties',
        turns: [
          {
            speaker: 'Työkaveri',
            fi: 'Moi! Paniikki, auta! Ne firman juhlat… siinä kutsussa lukee, että tumma puku. Mä katoin Googlesta, että se tarkoittaa ihan parhaat vaatteet, mitä on. Mitä sä aiot laittaa päälle?',
          },
          { speaker: 'Sinä', fi: 'Mä aion laittaa pitkän iltapuvun ja korkokengät.' },
          { speaker: 'Työkaveri', fi: 'Voi ei! Niin just. Naisilla se tarkoittaa pitkää iltapukua ja ei mulla edes ole sellaista. Voinkohan mä laittaa ton lyhyen mekon?' },
          { speaker: 'Sinä', fi: 'Kyllä lyhyt mekkokin voi sopia, mutta tumma puku tarkoittaa yleensä juhlavampaa tyyliä.' },
          {
            speaker: 'Työkaveri',
            fi: 'Niin no, niin. En kuitenkaan haluais olla sitten ihan alipukeutunut. Täytyy näyttää, että kunnioittaa. Pakko varmaan lähteä ostoksille. Onneksi on vielä aikaa. Mutta mä en tunne tätä kaupunkia. Kerro mulle, mistä mä voisin mennä ostamaan sellaisen iltapuvun?',
          },
          { speaker: 'Sinä', fi: 'Suosittelen käymään Forumissa tai Stockmannilla. Siellä on hyvä valikoima iltapukuja.' },
          { speaker: 'Työkaveri', fi: 'No se kuulostaa hyvältä! Mä kokeilen sitä. Tuletko mukaan makutuomariksi? Kerrot, jos mä näytän ihan kamalalta niissä vaatteissa.' },
          { speaker: 'Sinä', fi: 'Totta kai! Voin tulla mukaan. Miten olisi lauantaina?' },
          { speaker: 'Työkaveri', fi: 'Okei, mut kiitos sulle! Nyt pitää mennä.' },
          { speaker: 'Sinä', fi: 'Eipä kestä! Tsemppiä ostoksille!' },
        ],
      },
      {
        id: 'd5',
        titleFi: 'Ystävä näyttää väsyneeltä',
        titleEn: 'Friend looks tired',
        turns: [
          { speaker: 'Ystävä', fi: '[Ystävä tulee sisään näyttäen väsyneeltä]', en: 'Friend enters, looking tired', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Hei! Sinä näytät todella väsyneeltä. Onko kaikki hyvin?' },
          { speaker: 'Ystävä', fi: '[Ystävä selittää]', en: 'Friend explains', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Sinun pitäisi nukkua enemmän. Kokeile mennä aikaisemmin nukkumaan ja vältä puhelinta ennen nukkumaanmenoa.' },
          { speaker: 'Ystävä', fi: '[Ystävä vastaa]', en: 'Friend responds', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Entä oletko kokeillut jotain rentoutumistekniikkaa? Meditaatio tai jooga voi auttaa.' },
          { speaker: 'Ystävä', fi: '[Ystävä vastaa]', en: 'Friend responds', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Voin auttaa sinua! Mennään vaikka yhdessä kävelylle tai voin tehdä sinulle rentouttavan teen.' },
        ],
      },
      {
        id: 'd6',
        titleFi: 'Tapaat uuden ihmisen',
        titleEn: 'Meeting someone new, not interested',
        turns: [
          { speaker: 'Tuttava', fi: '[Tapaamisen jälkeen]', en: 'After meeting', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Kiitos tapaamisesta. Oli kiva tavata.' },
          { speaker: 'Tuttava', fi: '[Tuttava ehdottaa uutta tapaamista]', en: 'Acquaintance suggests meeting again', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Kiitos kutsusta, mutta valitettavasti minulla on hyvin kiireistä juuri nyt.' },
          { speaker: 'Tuttava', fi: '[Tuttava painostaa]', en: 'Acquaintance insists', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'En valitettavasti voi tavata enää. Olen todella kiireinen töiden kanssa.' },
          { speaker: 'Tuttava', fi: '[Tuttava näyttää pettyneeltä]', en: 'Acquaintance looks disappointed', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Olet kyllä mukava ihminen, mutta minun elämäntilanne on nyt sellainen, että en ehdi tapaamaan uusia ihmisiä. Toivottavasti ymmärrät.' },
        ],
      },
      {
        id: 'd7',
        titleFi: 'Ystävä on eronnut',
        titleEn: 'Friend has broken up',
        turns: [
          { speaker: 'Ystävä', fi: 'Nyt se sitten tapahtui. Viikonloppuna Markku pakkas kamat ja lähti.' },
          { speaker: 'Sinä', fi: 'Voi ei! Olen niin pahoillani. Tämä on varmasti todella vaikeaa.' },
          {
            speaker: 'Ystävä',
            fi: 'No eihän tää yllätyksenä tullut. Onhan tää meidän suhde ollut jo kauan vähän on-off, mutta kyllä se silti sitten järkyttää, kun toinen lähtee.',
          },
          { speaker: 'Sinä', fi: 'Miten sinä voit nyt? Haluatko puhua asiasta?' },
          { speaker: 'Ystävä', fi: 'No suoraan sanoen ei kovin hyvältä tunnu. Nukuin tosi huonosti viime yönä, eikä itkusta tuu loppua.' },
          { speaker: 'Sinä', fi: 'Haluatko, että tulen luoksesi? Voimme jutella tai vain olla hiljaa yhdessä.' },
          { speaker: 'Ystävä', fi: 'Kiitos, se ois tosi kiva. On mun kuitenkin pakko jaksaa ihan jo lastenkin takia.' },
          { speaker: 'Sinä', fi: 'Entä lapset? Miten he voivat? Millaista heillä on?' },
          {
            speaker: 'Ystävä',
            fi: 'No ihan varmaksi me ei vielä sovittu, mutta kai ne sitten on viikon mun kanssa ja viikon isänsä kanssa. Markun pitää nyt vaan ensin löytää sellanen kämppä, että lapsetkin mahtuu sinne.',
          },
          { speaker: 'Sinä', fi: 'Minun täytyy nyt valitettavasti mennä, mutta soitan sinulle myöhemmin. Jaksamista!' },
          { speaker: 'Ystävä', fi: 'Joo ei haittaa. Kiitos, että kuuntelit.' },
          { speaker: 'Sinä', fi: 'Ole hyvä. Otan yhteyttä pian. Pidä huolta itsestäsi!' },
        ],
      },
      {
        id: 'd8',
        titleFi: 'Kutsut ystävän juhliin',
        titleEn: 'Inviting a friend to a party',
        turns: [
          { speaker: 'Ystävä', fi: '[Ystävä vastaa]', en: 'Friend answers', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Hei! Soitin, koska haluan kutsua sinut syntymäpäiväjuhliini.' },
          {
            speaker: 'Ystävä',
            fi: 'Oho! Vau! Kiitos kutsusta, kuulostaa hauskalta ja totta kai tuun, jos vaan pääsen. Missä ja milloin sä meinaat pitää nää juhlat?',
          },
          { speaker: 'Sinä', fi: 'Juhlat ovat ensi lauantaina kello 18.00 minun luonani.' },
          { speaker: 'Ystävä', fi: 'Joo, ei ainakaan nyt heti tuu mieleen, että olis joku este, että enköhän mä pääse. Milloin sä tarviiit vahvistuksen, että pääsenkö vai en?' },
          { speaker: 'Sinä', fi: 'Voisitko ilmoittaa viimeistään keskiviikkona?' },
          { speaker: 'Ystävä', fi: 'Selvä. Entä onko sulla jotain lahjatoiveita?' },
          { speaker: 'Sinä', fi: 'Ei ole erityisiä toiveita. Tärkeintä on, että tulet paikalle!' },
          { speaker: 'Ystävä', fi: 'Hahaa, selvä juttu! Entä voisinko mä auttaa sua jotenkin juhlien järjestelyissä?' },
          { speaker: 'Sinä', fi: 'Kiitos tarjouksesta, mutta kaikki on jo järjestetty. Kiitos kuitenkin!' },
          { speaker: 'Ystävä', fi: 'Kiitos paljon kutsusta vielä ja nähdään pian!' },
          { speaker: 'Sinä', fi: 'Kiitos, että tulet! Nähdään lauantaina!' },
        ],
      },
      {
        id: 'd9',
        titleFi: 'Tarjous keittiöremontista',
        titleEn: 'Calling for a kitchen renovation quote',
        turns: [
          { speaker: 'Myyjä', fi: '[Myyjä vastaa]', en: 'Salesperson answers', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Hei! Soitan kysyäkseni tarjousta keittiöremontista.' },
          { speaker: 'Myyjä', fi: '[Myyjä kysyy lisätietoja]', en: 'Salesperson asks for details', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Haluaisin remontoida keittiön kokonaan. Uudet kaapit, työtasot ja kodinkoneet.' },
          { speaker: 'Myyjä', fi: '[Myyjä ehdottaa aikaa]', en: 'Salesperson offers a time', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Milloin voisitte tulla katsomaan ja antamaan tarjouksen?' },
          { speaker: 'Myyjä', fi: '[Myyjä ehdottaa päivämäärää]', en: 'Salesperson suggests a date', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Valitettavasti se aika ei sovi. Entä ensi maanantaina kello 14?' },
          { speaker: 'Myyjä', fi: '[Myyjä suostuu]', en: 'Salesperson agrees', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Mahtavaa. Voisitteko kertoa suunnilleen, paljonko remontti maksaa?' },
          { speaker: 'Myyjä', fi: '[Myyjä antaa arvion]', en: 'Salesperson gives estimate', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Selvä, se kuulostaa hyvältä. Nähdään maanantaina.' },
          { speaker: 'Myyjä', fi: '[Myyjä sanoo hyvästit]', en: 'Salesperson says goodbye', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Kiitos ja nähdään!' },
        ],
      },
      {
        id: 'd10',
        titleFi: 'Paketin nouto',
        titleEn: 'Package delivery',
        turns: [
          { speaker: 'Lähetti', fi: 'Lähettipalvelu Jokinen, miten voin auttaa?' },
          { speaker: 'Sinä', fi: 'Hei! Tässä [nimesi]. Soitan paketista, jota en saanut.' },
          { speaker: 'Lähetti', fi: 'Vai niin, sanotko sun nimen ja osoitteen, niin katson täältä?' },
          { speaker: 'Sinä', fi: 'Minun nimeni on [nimi] ja asun [osoite].' },
          {
            speaker: 'Lähetti',
            fi: 'Selvä, kyllä löytyi. Joo, teillä on tuollainen vähän isompi paketti täällä ja ei mahdu postiluukusta, joten pitäisi olla kotona ottamassa sitä vastaan. Milloin voisimme toimittaa paketin?',
          },
          { speaker: 'Sinä', fi: 'Olen kotona huomenna kello 16 jälkeen. Voitteko tulla sitten?' },
          { speaker: 'Lähetti', fi: 'Juu ja, eiköhän se onnistu. Ja saako tästä numerosta kiinni ennen toimitusta?' },
          { speaker: 'Sinä', fi: 'Kyllä, tähän numeroon saa soittaa.' },
          { speaker: 'Lähetti', fi: 'Selvä homma. Mepä laitetaan paketti uudelleen matkaan.' },
          { speaker: 'Sinä', fi: 'Kiitos! Nähdään huomenna.' },
        ],
      },
      {
        id: 'd11',
        titleFi: 'Naapuri valitti metelistä',
        titleEn: 'Neighbor complained about noise',
        turns: [
          { speaker: 'Sinä', fi: '[Vastaat puhelimeen]', en: 'You answer the phone', isPlaceholder: true },
          {
            speaker: 'Isännöitsijä',
            fi: 'No isännöitsijä Virtanen täällä, terve. Lähdin soittelemaan, kun naapuri on valitellut teiltä toissapäivänä tulleesta metelistä. Oliko teillä jonkinlaiset juhlat siellä?',
          },
          { speaker: 'Sinä', fi: '[Vastaat kysymykseen]', en: 'You respond', isPlaceholder: true },
          { speaker: 'Isännöitsijä', fi: 'Joo, ymmärrän. Mihin aikaan teidän vieraat lähti?' },
          { speaker: 'Sinä', fi: '[Vastaat kysymykseen]', en: 'You respond', isPlaceholder: true },
          { speaker: 'Isännöitsijä', fi: 'Naapurin mukaan meteli oli jatkunut aamuviiteen asti. Mitäs olette siitä mieltä?' },
          { speaker: 'Sinä', fi: '[Olet eri mieltä]', en: 'You disagree', isPlaceholder: true },
          { speaker: 'Isännöitsijä', fi: 'Niin, minun on tietysti vaikea tietää, mikä on totuus. Onko teillä ollut jotain riitaa aiemmin naapurin kanssa?' },
          { speaker: 'Sinä', fi: '[Vastaat kysymykseen]', en: 'You respond', isPlaceholder: true },
          { speaker: 'Isännöitsijä', fi: 'Joo ja oliko teillä vuokra- vai omistusasunto?' },
          { speaker: 'Sinä', fi: '[Vastaat kysymykseen]', en: 'You respond', isPlaceholder: true },
          {
            speaker: 'Isännöitsijä',
            fi: 'No niin. Ei tästä nyt tällä kertaa tule kuin varoitus, mutta voisitteko ensi kerralla laittaa vaikka ilmoituksen käytävään ennen juhlia, niin säilyy sitten naapurirauha paremmin.',
          },
          { speaker: 'Sinä', fi: 'Kiitos. Kyllä, voimme tehdä niin. Pahoittelut metelistä.' },
          { speaker: 'Isännöitsijä', fi: 'Hyvä juttu. Kiitoksia ja hyvää päivänjatkoa.' },
        ],
      },
    ],
    reactions: [
      {
        id: 'r1',
        scenarioFi: 'Sinun kaukainen ystävä / sukulainen tulee sinun luoksesi ensimmäisen kerran. Kerro naapurille, mitä aiot näyttää hänelle sinun kotikaupungissasi.',
        scenarioEn: 'A distant friend/relative is visiting you for the first time. Tell your neighbor what you plan to show them in your hometown.',
        sampleFi:
          'Hei naapuri! Mun ystävä tulee käymään ensi viikolla. Aion näyttää hänelle Helsingin keskustan, Senaatintorin, Tuomiokirkon ja tietysti Kauppatorin. Viedään hänet myös Suomenlinnaan, jos sää on hyvä.',
      },
      {
        id: 'r2',
        scenarioFi: 'Sinun naapurin oven takana käy joku, mutta naapuri ei ole kotona. Kerro naapurille, miltä vieras näytti.',
        scenarioEn: "Someone visits your neighbor's door, but the neighbor isn't home. Tell the neighbor what the visitor looked like.",
        sampleFi:
          'Hei naapuri! Sinun ovellasi kävi eilen iltapäivällä nuori mies. Hänellä oli sininen takki ja hän kantoi isoa ruskeaa kirjekuorta. En tunnistanut häntä, mutta halusin kertoa.',
      },
      {
        id: 'r3',
        scenarioFi: 'Näet kadulla, että kaksi poikaa kiusaa koulukaveria. Mene väliin ja kerro pojille, miksi ei saa kiusata.',
        scenarioEn: 'You see two boys bullying a classmate on the street. Step in and tell them why bullying is wrong.',
        sampleFi:
          'Hei pojat! Lopettakaa heti! Kiusaaminen ei ole oikein. Jokaisella on oikeus olla rauhassa. Miten teistä tuntuisi, jos joku kiusaisi teitä? Menkää pois ja jättäkää hänet rauhaan.',
      },
      {
        id: 'r4',
        scenarioFi: 'Ystäväsi kertoo, että hänen isänsä on kuollut. Ystävä on todella surullinen. Mitä sanot?',
        scenarioEn: "Your friend tells you their father has died. What do you say?",
        sampleFi:
          'Voi ei! Olen niin pahoillani. Sydämeni on murtunut puolestasi. Olen täällä sinua varten. Jos haluat puhua, olen valmis kuuntelemaan. Voimme myös vain olla hiljaa yhdessä.',
      },
      {
        id: 'r5',
        scenarioFi: 'Olet ystävän luona kylässä. Ystävä tarjoaa sinulle ruokaa tai juomaa, jota et voi syödä / juoda. Kieltäydy kohteliaasti.',
        scenarioEn: "You're visiting a friend. They offer you food or drink you can't have. Decline politely.",
        sampleFi:
          'Kiitos tarjouksesta! Valitettavasti en voi syödä tätä, koska olen allerginen pähkinöille. Onko sinulla jotain muuta? Jos ei, se on ihan ok, otan vain vettä.',
      },
      {
        id: 'r6',
        scenarioFi: 'Ystävä tulee sinun luo kylään. Hänellä on sinulle todella iso ja kallis lahja. Mitä sanot?',
        scenarioEn: 'A friend visits with a very big, expensive gift for you. What do you say?',
        sampleFi:
          'Vau! Tämä on aivan liian paljon! Sinun ei olisi pitänyt. Olen todella kiitollinen, mutta tämä on liian kallis lahja. Olet todella ystävällinen. Kiitos paljon!',
      },
      {
        id: 'r7',
        scenarioFi: 'Sinulla ja ystävälläsi oli edellisenä päivänä riitaa jostain pienestä asiasta. Soitat ystävällesi ja haluat sopia. Jätä ääniviesti ystävälle.',
        scenarioEn: 'You had a small argument with a friend yesterday. Leave them a voicemail to make up.',
        sampleFi:
          'Hei, tässä [nimi]. Soitan, koska haluan pyytää anteeksi eilistä riitaa. Olin todella tyhmä ja pahoittelen käytöstäni. Toivottavasti voit antaa anteeksi. Haluaisin sopia asian. Soita minulle, kun voit.',
      },
      {
        id: 'r8',
        scenarioFi: 'Sinun auto on mennyt rikki ja tarvitset kyydin ystävältä.',
        scenarioEn: 'Your car has broken down and you need a ride from a friend.',
        sampleFi:
          'Hei! Anteeksi, että häiritsen. Mun auto on mennyt rikki ja mulla olisi tärkeä tapaaminen huomenna kello 10. Pääsisitkö viemään minut sinne? Ymmärrän, jos et ehdi.',
      },
      {
        id: 'r9',
        scenarioFi: 'Näet kaupungilla vanhan ystäväsi, jota et ole nähnyt pitkään aikaan. Mitä sanot hänelle?',
        scenarioEn: "You see an old friend downtown you haven't seen in a long time. What do you say?",
        sampleFi: 'Hei! Onko se sinä? Voi kun ihana nähdä! Miten sinulla menee? Niin kauan aikaa! Mitä sinulle kuuluu? Oletko muuttanut? Onko kaikki hyvin?',
      },
      {
        id: 'r10',
        scenarioFi: 'Työkaverisi kutsuu sinut kylään. Et halua mennä. Kieltäydy kohteliaasti ja kerro syy.',
        scenarioEn: "A colleague invites you over. You don't want to go. Decline politely and give a reason.",
        sampleFi: 'Kiitos kutsusta! Valitettavasti minulla on jo menoa sinä päivänä. Toivottavasti voimme tavata toisen kerran. Hauskaa iltaa teille!',
      },
      {
        id: 'r11',
        scenarioFi: 'Pieni lapsi itkee yksin kaupan parkkipaikalla. Et näe vanhempia. Mitä sanot hänelle?',
        scenarioEn: "A small child is crying alone in a parking lot. You don't see their parents. What do you say?",
        sampleFi:
          'Hei pieni! Miksi itket? Oletko eksynyt? Älä huoli, mä autan sinua. Mikä sinun nimesi on? Mennään yhdessä etsimään sinun vanhempiasi. Oletko nähnyt, mihin suuntaan he menivät?',
      },
      {
        id: 'r12',
        scenarioFi: 'Ystäväsi on tänään todella kaunis / komea ja pukeutunut hyvin. Kehu häntä.',
        scenarioEn: 'Your friend looks great and well-dressed today. Compliment them.',
        sampleFi: 'Vau! Sinä näytät tänään todella upealta! Tämä asu sopii sinulle täydellisesti. Oletpa sinä tyylikäs! Tämä väri on juuri sinun värisi.',
      },
      {
        id: 'r13',
        scenarioFi: 'Haluat kertoa jollekin, kuinka tärkeä hän on sinulle. Kerro myös, miksi hän on sinulle tärkeä.',
        scenarioEn: 'You want to tell someone how important they are to you, and why.',
        sampleFi:
          'Haluan sanoa, että olet todella tärkeä minulle. Olet aina tukenani ja olen saanut sinulta paljon iloa. Sinun kanssasi on helppo puhua ja naurua riittää. Kiitos, että olet olemassa.',
      },
      {
        id: 'r14',
        scenarioFi: 'Olet kuullut, että ystäväsi on puhunut sinusta pahaa selän takana. Mitä sanot hänelle?',
        scenarioEn: 'You heard your friend talked badly about you behind your back. What do you say?',
        sampleFi: 'Hei, olen kuullut, että olet puhunut minusta pahaa muille. Se satuttaa minua. Miksi teit niin? Olisit voinut puhua suoraan minulle. Toivottavasti voit selittää.',
      },
      {
        id: 'r15',
        scenarioFi: 'Ystäväsi kertoo, että hän saa pian lapsen.',
        scenarioEn: "Your friend tells you they're expecting a baby.",
        sampleFi: 'Voi, onneksi olkoon! Tämä on ihana uutinen! Olen todella iloinen puolestasi. Milloin vauva syntyy? Tiedättekö jo sukupuolta? Olet varmasti loistava vanhempi.',
      },
      {
        id: 'r16',
        scenarioFi: 'Ystäväsi on sairastunut vakavasti.',
        scenarioEn: 'Your friend has become seriously ill.',
        sampleFi: 'Voi ei! Olen todella pahoillani kuullessani tämän. Haluan tukea sinua. Onko sinulla kaikki hyvin? Tarvitsetko apua jossain? Olen täällä sinua varten.',
      },
      {
        id: 'r17',
        scenarioFi: 'Menet häihin, mutta unohdit ostaa häälahjan. Mitä sanot hääparille?',
        scenarioEn: "You go to a wedding but forgot to buy a gift. What do you say to the couple?",
        sampleFi: 'Onneksi olkoon! Olen todella iloinen puolestanne. Anteeksi, että unohdin lahjan kotiin. Toimitan sen teille viikonloppuna. Nauttikaa juhlasta!',
      },
      {
        id: 'r18',
        scenarioFi:
          'Sinun ystävä on kutsunut sinut juhannuksena hänen mökille. Et tiedä, mitä pitää pakata mukaan. Kysy neuvoa työkaverilta.',
        scenarioEn: "A friend invited you to their summer cottage for Midsummer. You don't know what to pack. Ask a colleague for advice.",
        sampleFi:
          'Hei! Mulla olis pieni kysymys. Mun ystävä on kutsunut mut juhannuksena mökille. En oo koskaan ollut mökillä Suomessa. Mitä mun pitäis pakata mukaan? Onko siellä hyttysiä? Pitääkö ottaa omat lakanat?',
      },
    ],
    longSpeaking: [
      {
        id: 'k-a',
        titleFi: 'Sitä ihmistä en unohda',
        titleEn: 'That person I will never forget',
        instructionsFi: 'Kerro ihmisestä, jota et koskaan unohda. Miksi et voi unohtaa häntä? Missä tutustuitte? Mitä tapahtui?',
        sampleFi:
          'Eräs ihminen, jota en koskaan unohda, on minun äidinkielenopettajani lukiossa. Hän oli nimeltään Raija. Tutustuin häneen, kun aloitin lukion. Hän oli aina kannustava ja uskoi minuun, vaikka en itse aina uskonut. Eräänä päivänä sain huonon arvosanan kokeesta, ja olin todella masentunut. Raija kutsui minut juttelemaan ja sanoi, että uskoo minun pystyvän parempaan. Hän antoi minulle lisätehtäviä ja auttoi minua. Lopulta sain hyvän arvosanan ja pääsin unelmaopistoon. En koskaan unohda häntä, koska hän muutti elämäni suuntaa.',
      },
      {
        id: 'k-b',
        titleFi: 'Riita puhdistaa ilmaa',
        titleEn: 'A fight clears the air',
        instructionsFi:
          'Miten sinä riitelet? Kenen kanssa riitelet? Mistä asioista? Onko sinun mielestä riita hyvä vai huono asia? Miksi? Mistä tietää, että sinä olet vihainen? Mistä asioista sinä suutut? Miksi?',
        sampleFi:
          'Minä riitelen harvoin, mutta kun riitelen, se johtuu yleensä siitä, että joku on epärehellinen tai epäoikeudenmukainen. Riitelen eniten perheenjäsenten kanssa, koska he ovat lähellä minua. Mielestäni riita on joskus hyvä asia, koska se puhdistaa ilmaa ja asiat tulevat selviksi. Tietysti riita on huono asia, jos siinä satutetaan toista. Kun olen vihainen, minulla on kireä olo ja en pysty puhumaan rauhallisesti. Suutun erityisesti siitä, jos joku valehtelee minulle tai puhuu pahaa selän takana.',
      },
      {
        id: 'k-c',
        titleFi: 'Minä ja pukeutumiseni',
        titleEn: 'Me and my dressing',
        instructionsFi:
          'Miten sinä pukeudut? Onko sinulla oma tyyli? Seuraatko muotia? Miksi / miksi et? Mihin olet tyytyväinen ulkonäössäsi? Mihin et? Olisitko valmis menemään kauneusleikkaukseen? Miksi / miksi et?',
        sampleFi:
          'Minä pukeudun yleensä rennosti ja mukavasti. Tykkään käyttää farkkuja, neuleita ja lenkkareita. Minulla on oma tyyli, mutta en seuraa muotia aktiivisesti. Ostan vaatteita, jotka näyttävät hyvältä ja tuntuvat mukavalta. Olen tyytyväinen ulkonäkööni, vaikka toivoisin olevani vähän pidempi. En ole valmis menemään kauneusleikkaukseen, koska mielestäni jokainen on kaunis omalla tavallaan. Ulkonäkö ei ole tärkein asia elämässä.',
      },
      {
        id: 'k-d',
        titleFi: 'Kerro ystäväsi tai sukulaisesi elämästä',
        titleEn: "Tell about a friend's or relative's life",
        instructionsFi:
          'Kerro esimerkiksi: Missä ja milloin hän on syntynyt? Millainen lapsuus hänellä oli? Mitä hän teki nuorena / aikuisena? Missä hän on nyt? Miksi halusit kertoa hänestä?',
        sampleFi:
          'Haluan kertoa minun isoäidistäni. Hän syntyi 1950-luvulla maaseudulla Pohjois-Suomessa. Hänen lapsuutensa oli vaatimaton, ja hän joutui auttamaan maatilan töissä koulun jälkeen. Nuorena hän muutti kaupunkiin opiskelemaan sairaanhoitajaksi. Aikuisena hän työskenteli sairaalassa yli 30 vuotta. Hän tapasi isoisäni sairaalassa ja he menivät naimisiin. He saivat kolme lasta. Nyt isoäiti on eläkkeellä, mutta hän on edelleen aktiivinen ja auttaa lapsenlapsiaan. Halusin kertoa hänestä, koska hän on esikuva minulle. Hän on aina auttanut muita ja ollut ystävällinen kaikille.',
      },
    ],
    opinions: [
      {
        id: 'm-a',
        titleFi: 'Suomalaiset juhlat ovat tylsiä',
        titleEn: 'Finnish parties are boring',
        instructionsFi: 'Mitä mieltä olet suomalaisista juhlista? Mitä suomalaisissa juhlissa tehdään? Miksi ne ovat / eivät ole tylsiä?',
        sampleFi:
          'Mielestäni suomalaiset juhlat eivät ole tylsiä. Niissä on paljon hyvää ruokaa, juomaa ja seuraa. Suomalaisissa juhlissa syödään, juodaan, jutellaan ja usein myös lauletaan. Esimerkiksi syntymäpäivillä ja häissä on aina mahtavat tarjoilut. Tietysti suomalaiset voivat olla aluksi vähän ujoja, mutta kun tunnelma lämpenee, juhlista tulee hauskoja. Jos vertaa suomalaisia juhlia muihin maihin, ne voivat olla rauhallisempia, mutta se ei tarkoita, että ne olisivat tylsiä. Itse pidän suomalaisista juhlista, koska niissä on lämmin tunnelma ja ihmiset ovat aitoja.',
      },
      {
        id: 'm-b',
        titleFi: 'Syntymäpäivää ei saa unohtaa',
        titleEn: 'Birthday must not be forgotten',
        instructionsFi:
          'Onko syntymäpäivä sinun mielestä tärkeä juhla? Miksi / miksi ei? Kenen syntymäpäivää et varmasti unohda? Millaisen lahjan ostat sinun läheisille syntymäpäivänä?',
        sampleFi:
          'Mielestäni syntymäpäivä on tärkeä juhla, koska se on yksi päivä vuodesta, jolloin voi juhlistaa omaa elämää. On mukava saada onnitteluja ja viettää aikaa perheen ja ystävien kanssa. Tietysti aikuisena syntymäpäivä ei ole niin jännittävä kuin lapsena, mutta silti se on tärkeä päivä. En varmasti unohda äitini ja isäni syntymäpäiviä, koska he ovat minulle tärkeitä. Ostan yleensä lahjaksi jotain henkilökohtaista, kuten kirjan, käsityön tai elämyslahjan, esimerkiksi hieronnan tai teatteriliput.',
      },
      {
        id: 'm-c',
        titleFi: 'Paras tapa asua',
        titleEn: 'The best way to live',
        instructionsFi: 'Mikä on mielestäsi paras tapa asua: omakotitalo, rivitalo, kerrostalo? Miksi? Kumpi on parempi? Omistus- vai vuokra-asunto? Miksi?',
        sampleFi:
          'Mielestäni paras tapa asua on omakotitalo, koska siinä on omaa rauhaa ja tilaa. Omakotitalossa on piha, jossa voi istua kesällä ja lapset voivat leikkiä. Toki omakotitalossa on enemmän työtä: pihan hoito, lumenluonti ja remontit. Rivitalo on hyvä kompromissi, koska siinä on vähän omaa pihaa mutta vähemmän ylläpitoa. Kerrostalossa asuminen on helppoa, mutta naapurit voivat olla äänekkäitä. Omistusasunto on parempi, koska se on oma sijoitus. Vuokra-asunnossa vuokra nousee usein ja raha menee hukkaan. Omistusasunnossa voi tehdä remontteja ja muuttaa asuntoa haluamakseen.',
      },
      {
        id: 'm-d',
        titleFi: 'Hyvä parisuhde vaatii töitä',
        titleEn: 'A good relationship requires work',
        instructionsFi:
          'Millainen on hyvä parisuhde? Miten voi pitää huolta parisuhteesta? Millainen on ideaali puoliso? Millaisia asioita rakkaassasi rakastat / inhoat / siedät / toivot / haluat?',
        sampleFi:
          'Hyvä parisuhde perustuu luottamukseen, kunnioitukseen ja avoimeen viestintään. Parisuhteessa pitää puhua asioista, myös vaikeista. On tärkeää viettää aikaa yhdessä, mutta myös antaa tilaa toiselle. Ideaali puoliso on ymmärtäväinen, luotettava, huumorintajuinen ja kannustava. Rakastan kumppanissani hänen lempeyttään, älykkyyttään ja huumorintajua. Joskus voin inhota sitä, että hän on liian itsepäinen, mutta siedän sitä, koska kukaan ei ole täydellinen. Toivon, että meillä on tulevaisuudessa enemmän aikaa yhdessä ja haluan, että meillä on hyvä ja onnellinen elämä yhdessä.',
      },
      {
        id: 'm-e',
        titleFi: 'Onnellisuus on oma valinta',
        titleEn: 'Happiness is a choice',
        instructionsFi:
          'Kuinka paljon ihminen voi itse vaikuttaa siihen, onko hän onnellinen vai ei? Mitä asioita ihminen ei voi itse muuttaa? Voiko positiivinen ajattelu muuttaa ihmisen? Miten? Miksi / miksi ei?',
        sampleFi:
          'Mielestäni ihminen voi vaikuttaa onnellisuuteensa aika paljon. Valitsemme asenteemme ja sen, miten suhtaudumme asioihin. Tietysti on asioita, joita emme voi muuttaa, kuten menneisyys, sairaudet tai se, miten muut kohtelevat meitä. Mutta me voimme valita, miten reagoimme näihin asioihin. Positiivinen ajattelu voi todella muuttaa ihmisen. Kun ajattelee positiivisesti, näkee enemmän mahdollisuuksia ja on helpompi selviytyä haasteista. Tietysti positiivinen ajattelu ei poista ongelmia, mutta se auttaa selviytymään niistä. Onnellisuus ei ole vain sitä, että kaikki on hyvin, vaan sitä, että osaa nauttia pienistä asioista.',
      },
      {
        id: 'm-f',
        titleFi: 'Sosiaalinen media pilaa ihmissuhteet',
        titleEn: 'Social media ruins relationships',
        instructionsFi:
          'Ihmiset viettävät aikaa enemmän sosiaalisessa mediassa kuin ystävien ja perheen kanssa. Ihmiset ovat yhdessä, mutta katsovat puhelinta. Miten sosiaalinen media muuttaa ystävyyttä ja ihmissuhteita? Mitä hyviä ja huonoja puolia siinä on?',
        sampleFi:
          'Sosiaalisella medialla on sekä hyviä että huonoja puolia. Se voi yhdistää ihmisiä, jotka asuvat kaukana toisistaan. On helppo pitää yhteyttä vanhoihin ystäviin ja sukulaisiin. Kuitenkin sosiaalinen media voi viedä aikaa oikeilta ihmissuhteilta. Ihmiset istuvat samassa huoneessa, mutta katsovat kännykkää eivätkä puhu toisilleen. Tämä on huono asia, koska oikea keskustelu on tärkeää. Sosiaalinen media voi myös aiheuttaa mustasukkaisuutta ja vertailua. Näemme vain toisten onnellisia hetkiä, emme arkea. Ystävyys voi kärsiä, jos luulemme tietävämme kaiken toisen elämästä some-postauksista, mutta emme oikeasti ole läsnä. Mielestäni sosiaalista mediaa pitäisi käyttää kohtuudella ja muistaa viettää aikaa oikeasti yhdessä.',
      },
      {
        id: 'm-g',
        titleFi: 'Käytännöllisyys on muotia tärkeämpää',
        titleEn: 'Practicality is more important than fashion',
        instructionsFi: 'Kumpi on sinulle tärkeämpää: tyyli vai mukavuus? Miksi? Mikä sinulle on tärkeää, kun ostat uusia vaatteita? Voiko talvella olla tyylikäs? Miten?',
        sampleFi:
          'Minulle mukavuus on tärkeämpää kuin tyyli. En jaksa käyttää vaatteita, jotka ovat epämukavia. Kun ostan uusia vaatteita, katson ensin materiaalia ja istuvuutta. Vaatteiden pitää olla mukavia ja sopia omaan tyyliin. Hinta on myös tärkeä tekijä. Talvella voi kyllä olla tyylikäs! Suomessa talvella pitää pukeutua lämpimästi, mutta se ei tarkoita rumasti. Nykyään on paljon kauniita talvitakkeja, neuleita ja asusteita. Hyvät kengät, tyylikäs pipo ja kaunis huivi tekevät talviasusta tyylikkään. Tärkeintä on, että vaatteet ovat lämpimät, mutta ne voivat myös näyttää hyvältä.',
      },
      {
        id: 'm-h',
        titleFi: 'Suomalaiset eivät osaa pukeutua',
        titleEn: "Finns don't know how to dress",
        instructionsFi:
          'Suomalaisia on joskus haukuttu "tuulipukukansaksi". Miten suomalaiset sinun mielestä pukeutuvat? Miten suomalaiset pukeutuvat muihin maihin verrattuna? Minkä maalaiset sinun mielestä pukeutuvat parhaiten? Miksi?',
        sampleFi:
          'Mielestäni suomalaiset pukeutuvat käytännöllisesti, mutta eivät rumasti. Suomessa sää on usein kylmä ja sateinen, joten on ymmärrettävää, että ihmiset pukeutuvat lämpimästi. Tuulipuvut ovat käteviä erityisesti lapsille ja ulkoiluun. Vertailuna muihin maihin, esimerkiksi Keski-Euroopassa ihmiset pukeutuvat usein tyylikkäämmin arkenakin. Suomalaiset pukeutuvat rennommin. Mielestäni italialaiset ja ranskalaiset pukeutuvat parhaiten, koska he ymmärtävät tyylin, värien ja asusteiden merkityksen. He osaavat yhdistellä vaatteita kauniisti. Mutta suomalaistenkin pukeutuminen on muuttunut, ja nykyään nuoret seuraavat muotia enemmän.',
      },
      {
        id: 'm-i',
        titleFi: 'Ihmiset stressaavat turhaan, miltä he näyttävät',
        titleEn: 'People stress unnecessarily about their appearance',
        instructionsFi:
          'Onko sillä väliä, mitä sinulla on päällä tai miltä näytät? Miksi / miksi ei? Mitä ongelmia voi tulla, jos miettii liian paljon ulkonäköä tai jos ei mieti?',
        sampleFi:
          'Mielestäni ulkonäöllä on väliä, mutta ei liikaa. On tärkeää pitää itsestään huolta ja pukeutua siististi, mutta ei kannata stressata liikaa. Jokainen on kaunis omalla tavallaan. Jos miettii liikaa ulkonäköä, voi tulla ahdistusta, syömishäiriöitä tai itsetunto-ongelmia. Voi olla vaikea nauttia elämästä, jos on koko ajan huolissaan siitä, miltä näyttää. Toisaalta, jos ei mieti ulkonäköä ollenkaan, voi vaikuttaa huolimattomalta. Tärkeintä on löytää tasapaino. Hyvä ulkonäkö voi antaa itsevarmuutta, mutta todellinen kauneus tulee sisältä.',
      },
      {
        id: 'm-j',
        titleFi: 'Sukulaiset ovat tärkeämpiä kuin ystävät',
        titleEn: 'Relatives are more important than friends',
        instructionsFi: 'Suomeksi sanotaan "Veri on vettä sakeampaa." Se tarkoittaa, että sukulaiset ovat tärkeämpiä kuin ystävät. Mitä mieltä olet?',
        sampleFi:
          'Tämä on vaikea kysymys. Sanonta "veri on vettä sakeampaa" tarkoittaa, että perhe on tärkein. Mielestäni sekä sukulaiset että ystävät ovat tärkeitä. Sukulaiset ovat aina taustalla, ja heidät on annettu, ei valittu. Ystävät voi valita itse, ja he ovat usein lähellä sydäntä. Joillekin ystävät ovat kuin perhe. Uskon, että tärkeintä on, että on ihmisiä, joihin voi luottaa, olivat he sitten sukulaisia tai ystäviä. Molemmat rikastuttavat elämää, eikä kumpaakaan kannata väheksyä.',
      },
      {
        id: 'm-k',
        titleFi: 'Uusperhe - hyvä vai huono asia?',
        titleEn: 'Stepfamily - good or bad?',
        instructionsFi:
          'Suomessa melkein 50% avioliitoista päätyy eroon. Miksi? Mitä pitäisi tehdä? Tai pitäisikö jotain tehdä? Miten lapsi kasvaa, jos hänellä on monta vanhempaa tai kaksi kotia?',
        sampleFi:
          'Suomessa avioerojen määrä on korkea, koska ihmisillä on vapaus valita ja eroaminen on helpompaa kuin ennen. Jotkut menevät naimisiin liian nuorina tai liian nopeasti, ja sitten huomaavat, etteivät sovi yhteen. En tiedä, pitäisikö tehdä jotain, mutta ehkä parisuhdetaitojen opettaminen voisi auttaa. Uusperhe voi olla sekä hyvä että haastava asia. Lapsi voi saada paljon rakkautta monelta aikuiselta, mutta voi myös olla vaikeaa, jos on kaksi kotia ja erilaiset säännöt. Tärkeintä on, että lapsi tuntee olevansa rakastettu ja turvassa. Avoin viestintä ja yhteistyö vanhempien välillä auttavat lasta sopeutumaan uuteen perhetilanteeseen.',
      },
    ],
    writingTasks: [
      {
        id: 'w1',
        titleFi: 'Viesti',
        instructionsFi: 'Ystävällesi on tapahtunut jotain tärkeää (keksi itse, mitä). Haluat onnitella häntä. Kirjoita hänelle viesti, jossa:',
        bulletsFi: [
          'kerrot, mitä on tapahtunut ja mistä kuulit siitä',
          'onnittele häntä ja kerro, mitä ajattelet tapahtuneesta',
          'kerro, miten haluat juhlia tapahtunutta hänen kanssaan',
        ],
        sampleFi:
          'Hei [nimi]!\n\nKuulin Maijalta, että olet saanut uuden työpaikan! Onneksi olkoon! Tämä on todella hieno uutinen. Tiedän, että olet etsinyt uutta haastetta pitkään, ja nyt se vihdoin löytyi. Olen todella iloinen puolestasi.\n\nHaluaisin juhlistaa tätä sinun kanssasi. Entä mennäänkö perjantaina syömään hyvään ravintolaan? Tai jos haluat, voimme järjestää pienet bileet minun luonani. Kerro, mikä sinulle sopii!\n\nOdotan innolla, että voimme juhlia.\n\nYstävällisin terveisin,\n[Nimesi]',
      },
      {
        id: 'w2',
        titleFi: 'Sähköposti',
        instructionsFi: 'Etsit uutta asuntoa. Olet löytänyt kiinteistönvälittäjän, joka voi auttaa sinua. Kirjoita hänelle sähköposti, jossa:',
        bulletsFi: [
          'kerrot, millaista asuntoa etsit',
          'mikä on tärkeää asunnon sijainnissa',
          'kuinka paljon vuokra / myyntihinta voi olla',
          'milloin haluaisit muuttaa ja miksi juuri silloin',
        ],
        sampleFi:
          'Hei,\n\nNimeni on [Nimi], ja etsin uutta asuntoa Helsingistä. Haluaisin löytää kaksion tai pienen kolmion. Asunnon pitäisi olla rauhallisella alueella, mutta hyvien kulkuyhteyksien varrella. Sijainti on minulle tärkeä: haluaisin asua lähellä metropysäkkiä tai rautatieasemaa, koska käyn töissä keskustassa.\n\nVuokra voisi olla enintään 1200 euroa kuussa tai myyntihinta noin 250 000 euroa. Olen valmis maksamaan enemmän, jos asunto on hyvässä kunnossa ja hyvällä paikalla.\n\nHaluaisin muuttaa mahdollisimman pian, mieluiten ensi kuun alussa, koska nykyinen vuokrasopimukseni päättyy.\n\nVoisitteko kertoa, millaisia asuntoja teillä on tällä hetkellä tarjolla? Voitte ottaa minuun yhteyttä sähköpostilla tai puhelimitse.\n\nYstävällisin terveisin,\n[Nimesi]',
      },
      {
        id: 'w3',
        titleFi: 'Valitus',
        instructionsFi: 'Kerrostalossa, jossa asut, on paljon ongelmia. Olet kyllästynyt ongelmiin ja haluat, että taloyhtiö korjaa asiat. Kirjoita taloyhtiön hallitukselle valitus, jossa kerrot:',
        bulletsFi: ['millaisia ongelmia talossa on', 'mitä ongelmille pitäisi tehdä ja millaisella aikataululla', 'mitä teet, jos asiat eivät muutu'],
        sampleFi:
          'Taloyhtiön hallitukselle\n\nOlen asukas osoitteessa [osoite], ja kirjoitan tämän valituksen, koska olen erittäin tyytymätön talon kuntoon.\n\nTalossa on seuraavia ongelmia:\n- Rappukäytävä on likainen ja valaistus on huono.\n- Hissi on ollut rikki jo kolme viikkoa.\n- Kellarissa on kosteusvaurio ja haju on epämiellyttävä.\n- Pihalla on roskia, eikä pihaa ole hoidettu pitkään aikaan.\n\nVaatimukseni:\n- Rappukäytävä tulisi siivota ja valaistus korjata viikon kuluessa.\n- Hissi pitää korjata mahdollisimman pian, koska iäkkäät asukkaat eivät pääse liikkumaan.\n- Kosteusvaurio tulee tutkia ja korjata kuukauden sisällä.\n- Piha tulee siivota ja hoitaa säännöllisesti.\n\nJos asiat eivät muutu kuukauden sisällä, aion ottaa yhteyttä vuokranantajaan ja harkita muuttamista pois. Tämä on vakava asia, ja toivon, että taloyhtiö ottaa sen tosissaan.\n\nToivon nopeaa reagointia.\n\nYstävällisin terveisin,\n[Nimesi]\nPuhelinnumero: [numero]',
      },
    ],
    vocabSummary: [
      { fi: 'lähipiiri', en: 'close circle / inner circle' },
      { fi: 'morsian', en: 'bride' },
      { fi: 'häät', en: 'wedding' },
      { fi: 'kutsu', en: 'invitation' },
      { fi: 'lahjakortti', en: 'gift card' },
      { fi: 'onnitella', en: 'to congratulate' },
      { fi: 'pitopalvelu', en: 'catering service' },
      { fi: 'valmistujaiset', en: 'graduation party' },
      { fi: 'läksiäiset', en: 'farewell party' },
      { fi: 'hautajaiset', en: 'funeral' },
      { fi: 'vieras', en: 'guest' },
      { fi: 'kehua', en: 'to compliment' },
      { fi: 'pukeutua', en: 'to dress' },
      { fi: 'remontti', en: 'renovation' },
      { fi: 'naapuri', en: 'neighbor' },
      { fi: 'meteli', en: 'noise' },
      { fi: 'isännöitsijä', en: 'property manager' },
      { fi: 'varoitus', en: 'warning' },
      { fi: 'erota', en: 'to break up / divorce' },
      { fi: 'riita', en: 'argument / fight' },
      { fi: 'anteeksi pyytää', en: 'to apologize' },
      { fi: 'kiusata', en: 'to bully' },
      { fi: 'ulkonäkö', en: 'appearance' },
      { fi: 'parisuhde', en: 'relationship' },
      { fi: 'puoliso', en: 'spouse / partner' },
      { fi: 'onnellisuus', en: 'happiness' },
      { fi: 'sosiaalinen media', en: 'social media' },
      { fi: 'uusperhe', en: 'stepfamily' },
      { fi: 'sukulainen', en: 'relative' },
    ],
  },
]

export function conversationChapter(id: string): ConversationChapter | undefined {
  return CONVERSATION_CHAPTERS.find((c) => c.id === id)
}
