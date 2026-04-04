export interface SeedWord {
  english: string;
  phonetic: string;
  turkishMeaning: string;
  dictionaryDefinition: string;
  exampleSentence: string;
  level: "B1" | "B2";
  tags: string[];
}

export const seedWords: SeedWord[] = [
  // Unit 1: Business & Globalisation (B1)
  {
    english: "consumer",
    phonetic: "/kənˈsjuː.mər/",
    turkishMeaning: "tüketici",
    dictionaryDefinition: "a person who purchases goods and services for personal use",
    exampleSentence: "Consumers are increasingly concerned about environmental issues.",
    level: "B1",
    tags: ["Unit 1"]
  },
  {
    english: "cost",
    phonetic: "/kɒst/",
    turkishMeaning: "maliyet, bedel",
    dictionaryDefinition: "the amount that has to be paid or spent to buy or obtain something",
    exampleSentence: "The cost of raw materials has risen significantly.",
    level: "B1",
    tags: ["Unit 1"]
  },
  {
    english: "discount",
    phonetic: "/ˈdɪs.kaʊnt/",
    turkishMeaning: "indirim",
    dictionaryDefinition: "a deduction from the usual cost of something",
    exampleSentence: "They offer a 10% discount for cash payments.",
    level: "B1",
    tags: ["Unit 1"]
  },
  {
    english: "domestic",
    phonetic: "/dəˈmes.tɪk/",
    turkishMeaning: "yerel, evcil, iç",
    dictionaryDefinition: "relating to a person's own country or to their home",
    exampleSentence: "The domestic market is larger than the export market.",
    level: "B1",
    tags: ["Unit 1"]
  },
  {
    english: "export",
    phonetic: "/ˈek.spɔːt/",
    turkishMeaning: "ihracat",
    dictionaryDefinition: "the act of sending goods or services to another country for sale",
    exampleSentence: "Wheat is a major export for the region.",
    level: "B1",
    tags: ["Unit 1"]
  },
  {
    english: "goods",
    phonetic: "/ɡʊdz/",
    turkishMeaning: "mallar, eşya",
    dictionaryDefinition: "things that are produced to be sold",
    exampleSentence: "The shop sells a wide range of household goods.",
    level: "B1",
    tags: ["Unit 1"]
  },
  {
    english: "greenhouse",
    phonetic: "/ˈɡriːn.haʊs/",
    turkishMeaning: "sera",
    dictionaryDefinition: "a glass building in which plants are grown that need protection from cold weather",
    exampleSentence: "Greenhouse gases are contributing to global warming.",
    level: "B1",
    tags: ["Unit 1"]
  },
  {
    english: "import",
    phonetic: "/ˈɪm.pɔːt/",
    turkishMeaning: "ithalat",
    dictionaryDefinition: "the act of bringing goods or services into a country from abroad for sale",
    exampleSentence: "The country relies heavily on oil imports.",
    level: "B1",
    tags: ["Unit 1"]
  },
  {
    english: "investigate",
    phonetic: "/ɪnˈves.tɪ.ɡeɪt/",
    turkishMeaning: "araştırmak, incelemek",
    dictionaryDefinition: "to examine a crime, problem, statement, etc. carefully",
    exampleSentence: "Police are investigating the cause of the fire.",
    level: "B1",
    tags: ["Unit 1"]
  },
  {
    english: "labour",
    phonetic: "/ˈleɪ.bər/",
    turkishMeaning: "emek, iş gücü",
    dictionaryDefinition: "practical work, especially when it involves hard physical effort",
    exampleSentence: "The cost of labour is very high in this industry.",
    level: "B1",
    tags: ["Unit 1"]
  },
  {
    english: "multinational",
    phonetic: "/ˌmʌl.tiˈnæʃ.ən.əl/",
    turkishMeaning: "çok uluslu",
    dictionaryDefinition: "involving or operating in several nations",
    exampleSentence: "She works for a large multinational corporation.",
    level: "B1",
    tags: ["Unit 1"]
  },
  {
    english: "outsourcing",
    phonetic: "/ˈaʊtˌsɔː.sɪŋ/",
    turkishMeaning: "dış kaynak kullanımı",
    dictionaryDefinition: "the practice of having certain job functions done outside a company",
    exampleSentence: "Outsourcing can help reduce costs for some companies.",
    level: "B1",
    tags: ["Unit 1"]
  },
  {
    english: "overseas",
    phonetic: "/ˌəʊ.vəˈsiːz/",
    turkishMeaning: "yurtdışı, denizaşırı",
    dictionaryDefinition: "in or to a foreign country, especially one across the sea",
    exampleSentence: "He has lived and worked overseas for many years.",
    level: "B1",
    tags: ["Unit 1"]
  },
  {
    english: "produce (isim hali)",
    phonetic: "/ˈprɒd.juːs/",
    turkishMeaning: "ürün (tarım ürünü vb.)",
    dictionaryDefinition: "things that have been produced or grown, especially by farming",
    exampleSentence: "The market sells fresh local produce.",
    level: "B1",
    tags: ["Unit 1"]
  },
  {
    english: "produce (fiil hali)",
    phonetic: "/prəˈdʒuːs/",
    turkishMeaning: "üretmek",
    dictionaryDefinition: "to make or grow something as part of a natural process",
    exampleSentence: "The factory produces 500 cars a day.",
    level: "B1",
    tags: ["Unit 1"]
  },
  {
    english: "production costs",
    phonetic: "/prəˈdʌk.ʃən kɒsts/",
    turkishMeaning: "üretim maliyetleri",
    dictionaryDefinition: "the costs incurred by a business from manufacturing a product",
    exampleSentence: "Reducing production costs is essential for profitability.",
    level: "B1",
    tags: ["Unit 1"]
  },
  {
    english: "profit",
    phonetic: "/ˈprɒf.ɪt/",
    turkishMeaning: "kâr",
    dictionaryDefinition: "a financial gain, especially the difference between the amount earned and the amount spent",
    exampleSentence: "The company made a healthy profit last year.",
    level: "B1",
    tags: ["Unit 1"]
  },
  {
    english: "prosperity",
    phonetic: "/prɒsˈper.ə.ti/",
    turkishMeaning: "refah, zenginlik",
    dictionaryDefinition: "the state of being successful and having a lot of money",
    exampleSentence: "Education is the key to national prosperity.",
    level: "B1",
    tags: ["Unit 1"]
  },
  {
    english: "purchase",
    phonetic: "/ˈpɜː.tʃəs/",
    turkishMeaning: "satın almak",
    dictionaryDefinition: "to buy something",
    exampleSentence: "She purchased a new car last week.",
    level: "B1",
    tags: ["Unit 1"]
  },
  {
    english: "supply chain",
    phonetic: "/səˈplaɪ tʃeɪn/",
    turkishMeaning: "tedarik zinciri",
    dictionaryDefinition: "the sequence of processes involved in the production and distribution of a commodity",
    exampleSentence: "A disruption in the supply chain delayed the shipment.",
    level: "B1",
    tags: ["Unit 1"]
  },
  {
    english: "transport",
    phonetic: "/ˈtræn.spɔːt/",
    turkishMeaning: "taşımacılık",
    dictionaryDefinition: "the action of carrying or taking people or goods from one place to another",
    exampleSentence: "Public transport is very efficient in this city.",
    level: "B1",
    tags: ["Unit 1"]
  },

  // Unit 2: Education & Work (B1)
  {
    english: "adviser",
    phonetic: "/ədˈvaɪ.zər/",
    turkishMeaning: "danışman",
    dictionaryDefinition: "someone whose job is to give advice about a subject",
    exampleSentence: "He is the company's financial adviser.",
    level: "B1",
    tags: ["Unit 2"]
  },
  {
    english: "campus",
    phonetic: "/ˈkæm.pəs/",
    turkishMeaning: "kampüs",
    dictionaryDefinition: "the grounds and buildings of a university or college",
    exampleSentence: "The main university campus is located in the city center.",
    level: "B1",
    tags: ["Unit 2"]
  },
  {
    english: "complex",
    phonetic: "/ˈkɒm.pleks/",
    turkishMeaning: "karmaşık",
    dictionaryDefinition: "involving many different but related parts",
    exampleSentence: "The film has a very complex plot.",
    level: "B1",
    tags: ["Unit 2"]
  },
  {
    english: "emphasis",
    phonetic: "/ˈem.fə.sɪs/",
    turkishMeaning: "vurgu",
    dictionaryDefinition: "particular importance or attention given to something",
    exampleSentence: "Schools are putting more emphasis on written work.",
    level: "B1",
    tags: ["Unit 2"]
  },
  {
    english: "innovation",
    phonetic: "/ˌɪn.əˈveɪ.ʃən/",
    turkishMeaning: "yenilik",
    dictionaryDefinition: "a new idea or method",
    exampleSentence: "The company is known for its constant innovation.",
    level: "B1",
    tags: ["Unit 2"]
  },
  {
    english: "institution",
    phonetic: "/ˌɪn.stɪˈtʃuː.ʃən/",
    turkishMeaning: "kurum, kuruluş",
    dictionaryDefinition: "a large and important organization",
    exampleSentence: "A hospital is an important public institution.",
    level: "B1",
    tags: ["Unit 2"]
  },
  {
    english: "manual",
    phonetic: "/ˈmæn.ju.əl/",
    turkishMeaning: "el kitabı / fiziksel",
    dictionaryDefinition: "a book that gives instructions; or done with the hands",
    exampleSentence: "He does manual work in the fields.",
    level: "B1",
    tags: ["Unit 2"]
  },
  {
    english: "medical",
    phonetic: "/ˈmed.ɪ.kəl/",
    turkishMeaning: "tıbbi",
    dictionaryDefinition: "relating to the science of medicine",
    exampleSentence: "He needs urgent medical treatment.",
    level: "B1",
    tags: ["Unit 2"]
  },
  {
    english: "physical",
    phonetic: "/ˈfɪz.ɪ.kəl/",
    turkishMeaning: "fiziksel",
    dictionaryDefinition: "relating to the body as opposed to the mind",
    exampleSentence: "Physical exercise is good for your health.",
    level: "B1",
    tags: ["Unit 2"]
  },
  {
    english: "practical",
    phonetic: "/ˈpræk.tɪ.kəl/",
    turkishMeaning: "pratik",
    dictionaryDefinition: "relating to experience, real situations or actions",
    exampleSentence: "The course provides practical experience in teaching.",
    level: "B1",
    tags: ["Unit 2"]
  },
  {
    english: "professional",
    phonetic: "/prəˈfeʃ.ən.əl/",
    turkishMeaning: "profesyonel",
    dictionaryDefinition: "relating to a job that needs special training",
    exampleSentence: "She gives professional advice to many clients.",
    level: "B1",
    tags: ["Unit 2"]
  },
  {
    english: "reference",
    phonetic: "/ˈref.ər.əns/",
    turkishMeaning: "referans",
    dictionaryDefinition: "a mention of something; or a letter that describes your character",
    exampleSentence: "He made several references to his previous work.",
    level: "B1",
    tags: ["Unit 2"]
  },
  {
    english: "requirements",
    phonetic: "/rɪˈkwaɪə.mənts/",
    turkishMeaning: "gereksinimler",
    dictionaryDefinition: "something that you must have or do",
    exampleSentence: "What are the entry requirements for this course?",
    level: "B1",
    tags: ["Unit 2"]
  },
  {
    english: "secure",
    phonetic: "/sɪˈkjʊər/",
    turkishMeaning: "güvenli",
    dictionaryDefinition: "not likely to fail or be lost; protected",
    exampleSentence: "They live in a very secure apartment building.",
    level: "B1",
    tags: ["Unit 2"]
  },
  {
    english: "statement",
    phonetic: "/ˈsteɪt.mənt/",
    turkishMeaning: "ifade, beyan",
    dictionaryDefinition: "something that someone says or writes officially",
    exampleSentence: "The government issued a statement about the crisis.",
    level: "B1",
    tags: ["Unit 2"]
  },
  {
    english: "technical",
    phonetic: "/ˈtek.nɪ.kəl/",
    turkishMeaning: "teknik",
    dictionaryDefinition: "relating to a particular subject, art, or craft",
    exampleSentence: "The computer problem was very technical.",
    level: "B1",
    tags: ["Unit 2"]
  },

  // Unit 3: Health & Medicine (B1)
  {
    english: "aid",
    phonetic: "/eɪd/",
    turkishMeaning: "yardım",
    dictionaryDefinition: "help or support",
    exampleSentence: "The UN is sending humanitarian aid to the region.",
    level: "B1",
    tags: ["Unit 3"]
  },
  {
    english: "antibiotic",
    phonetic: "/ˌæn.ti.baɪˈɒt.ɪk/",
    turkishMeaning: "antibiyotik",
    dictionaryDefinition: "a medicine that kills bacteria",
    exampleSentence: "The doctor prescribed a course of antibiotics.",
    level: "B1",
    tags: ["Unit 3"]
  },
  {
    english: "balance",
    phonetic: "/ˈbæl.əns/",
    turkishMeaning: "denge",
    dictionaryDefinition: "a state in which different things are equal",
    exampleSentence: "You need a healthy balance between work and life.",
    level: "B1",
    tags: ["Unit 3"]
  },
  {
    english: "clinical",
    phonetic: "/ˈklɪn.ɪ.kəl/",
    turkishMeaning: "klinik",
    dictionaryDefinition: "relating to the observation and treatment of patients",
    exampleSentence: "The drug is undergoing clinical trials.",
    level: "B1",
    tags: ["Unit 3"]
  },
  {
    english: "contaminated",
    phonetic: "/kənˈtæm.ɪ.neɪ.tɪd/",
    turkishMeaning: "kirlenmiş, bulaşmış",
    dictionaryDefinition: "poisonous or not pure",
    exampleSentence: "The water supply was contaminated by sewage.",
    level: "B1",
    tags: ["Unit 3"]
  },
  {
    english: "data",
    phonetic: "/ˈdeɪ.tə/",
    turkishMeaning: "veri",
    dictionaryDefinition: "information, especially facts or numbers",
    exampleSentence: "The data shows a clear trend of rising temperatures.",
    level: "B1",
    tags: ["Unit 3"]
  },
  {
    english: "in favour of",
    phonetic: "/ɪn ˈfeɪ.vər əv/",
    turkishMeaning: "-in lehine, taraftarı",
    dictionaryDefinition: "supporting or agreeing with something",
    exampleSentence: "Are you in favour of the proposed changes?",
    level: "B1",
    tags: ["Unit 3"]
  },
  {
    english: "infected",
    phonetic: "/ɪnˈfek.tɪd/",
    turkishMeaning: "enfekte olmuş",
    dictionaryDefinition: "containing harmful bacteria or a virus",
    exampleSentence: "The wound became badly infected.",
    level: "B1",
    tags: ["Unit 3"]
  },
  {
    english: "occur",
    phonetic: "/əˈkɜːr/",
    turkishMeaning: "meydana gelmek",
    dictionaryDefinition: "to happen, especially unexpectedly",
    exampleSentence: "The accident occurred at about 3 PM.",
    level: "B1",
    tags: ["Unit 3"]
  },
  {
    english: "outbreak",
    phonetic: "/ˈaʊt.breɪk/",
    turkishMeaning: "salgın, patlak verme",
    dictionaryDefinition: "a sudden start of something unpleasant",
    exampleSentence: "There has been an outbreak of flu in the school.",
    level: "B1",
    tags: ["Unit 3"]
  },
  {
    english: "precaution",
    phonetic: "/prɪˈkɔː.ʃən/",
    turkishMeaning: "önlem",
    dictionaryDefinition: "something done to prevent something bad from happening",
    exampleSentence: "As a precaution, the building was evacuated.",
    level: "B1",
    tags: ["Unit 3"]
  },
  {
    english: "prescription",
    phonetic: "/prɪˈskrɪp.ʃən/",
    turkishMeaning: "reçete",
    dictionaryDefinition: "a piece of paper on which a doctor writes the medicine you need",
    exampleSentence: "The pharmacist filled the doctor's prescription.",
    level: "B1",
    tags: ["Unit 3"]
  },
  {
    english: "prevention",
    phonetic: "/prɪˈven.ʃən/",
    turkishMeaning: "önleme",
    dictionaryDefinition: "the act of stopping something from happening",
    exampleSentence: "Prevention is better than cure.",
    level: "B1",
    tags: ["Unit 3"]
  },
  {
    english: "prove",
    phonetic: "/pruːv/",
    turkishMeaning: "kanıtlamak",
    dictionaryDefinition: "to show that something is true",
    exampleSentence: "He could not prove his innocence.",
    level: "B1",
    tags: ["Unit 3"]
  },
  {
    english: "recover",
    phonetic: "/rɪˈkʌv.ər/",
    turkishMeaning: "iyileşmek",
    dictionaryDefinition: "to become well again after an illness",
    exampleSentence: "He is recovering from a heart attack.",
    level: "B1",
    tags: ["Unit 3"]
  },
  {
    english: "researcher",
    phonetic: "/rɪˈsɜː.tʃər/",
    turkishMeaning: "araştırmacı",
    dictionaryDefinition: "someone who studies a subject in detail",
    exampleSentence: "Researchers are looking for a cure for cancer.",
    level: "B1",
    tags: ["Unit 3"]
  },
  {
    english: "therapy",
    phonetic: "/ˈθer.ə.pi/",
    turkishMeaning: "terapi",
    dictionaryDefinition: "a treatment designed to help with a physical or mental problem",
    exampleSentence: "She is having therapy to help with her anxiety.",
    level: "B1",
    tags: ["Unit 3"]
  },
  {
    english: "treat",
    phonetic: "/triːt/",
    turkishMeaning: "tedavi etmek",
    dictionaryDefinition: "to use drugs, exercises, etc. to make someone well",
    exampleSentence: "They are treating him for a broken leg.",
    level: "B1",
    tags: ["Unit 3"]
  },
  {
    english: "treatment",
    phonetic: "/ˈtriːt.mənt/",
    turkishMeaning: "tedavi",
    dictionaryDefinition: "the use of medicine or social care to help someone get better",
    exampleSentence: "He needs regular medical treatment.",
    level: "B1",
    tags: ["Unit 3"]
  },
  {
    english: "trial",
    phonetic: "/traɪəl/",
    turkishMeaning: "deneme, test",
    dictionaryDefinition: "a test of something to see if it works",
    exampleSentence: "The new vaccine is in its final trial phase.",
    level: "B1",
    tags: ["Unit 3"]
  },
  {
    english: "urgent",
    phonetic: "/ˈɜː.dʒənt/",
    turkishMeaning: "acil",
    dictionaryDefinition: "needing attention very soon",
    exampleSentence: "The situation requires urgent action.",
    level: "B1",
    tags: ["Unit 3"]
  },
  {
    english: "vaccine",
    phonetic: "/ˈvæk.siːn/",
    turkishMeaning: "aşı",
    dictionaryDefinition: "a substance given to prevent a disease",
    exampleSentence: "Children are given a vaccine against polio.",
    level: "B1",
    tags: ["Unit 3"]
  },
  {
    english: "virus",
    phonetic: "/ˈvaɪə.rəs/",
    turkishMeaning: "virüs",
    dictionaryDefinition: "a very small living thing that causes disease",
    exampleSentence: "The computer was infected by a virus.",
    level: "B1",
    tags: ["Unit 3"]
  },
  {
    english: "wound",
    phonetic: "/wuːnd/",
    turkishMeaning: "yara",
    dictionaryDefinition: "an injury, especially one caused by a weapon",
    exampleSentence: "The wound took a long time to heal.",
    level: "B1",
    tags: ["Unit 3"]
  },

  // Unit 4: Nature & Environment (B1)
  {
    english: "adapt",
    phonetic: "/əˈdæpt/",
    turkishMeaning: "uyum sağlamak",
    dictionaryDefinition: "to change behavior to be successful in a new situation",
    exampleSentence: "It takes time to adapt to a new culture.",
    level: "B1",
    tags: ["Unit 4"]
  },
  {
    english: "affect",
    phonetic: "/əˈfekt/",
    turkishMeaning: "etkilemek",
    dictionaryDefinition: "to have an influence on someone or something",
    exampleSentence: "The weather affects our mood.",
    level: "B1",
    tags: ["Unit 4"]
  },
  {
    english: "apply",
    phonetic: "/əˈplaɪ/",
    turkishMeaning: "başvurmak, uygulamak",
    dictionaryDefinition: "to make a formal request; or to put into action",
    exampleSentence: "You should apply for the job.",
    level: "B1",
    tags: ["Unit 4"]
  },
  {
    english: "coastal",
    phonetic: "/ˈkəʊ.stəl/",
    turkishMeaning: "kıyı, sahil",
    dictionaryDefinition: "positioned on or near a coast",
    exampleSentence: "There are many beautiful coastal towns in Italy.",
    level: "B1",
    tags: ["Unit 4"]
  },
  {
    english: "wilderness",
    phonetic: "/ˈwɪl.də.nəs/",
    turkishMeaning: "yaban hayatı, ıssız yer",
    dictionaryDefinition: "an area of land that has not been used by people",
    exampleSentence: "They spent a week hiking in the Alaskan wilderness.",
    level: "B1",
    tags: ["Unit 4"]
  },

  // Unit 5: Architecture & Change (B2)
  {
    english: "abandon",
    phonetic: "/əˈbæn.dən/",
    turkishMeaning: "terk etmek",
    dictionaryDefinition: "to leave someone or something forever",
    exampleSentence: "They had to abandon the old house after the storm.",
    level: "B2",
    tags: ["Unit 5"]
  },
  {
    english: "acquire",
    phonetic: "/əˈkwaɪər/",
    turkishMeaning: "edinmek, kazanmak",
    dictionaryDefinition: "to get something",
    exampleSentence: "He has acquired a reputation for being difficult.",
    level: "B2",
    tags: ["Unit 5"]
  },
  {
    english: "adequate",
    phonetic: "/ˈæd.ə.kwət/",
    turkishMeaning: "yeterli",
    dictionaryDefinition: "enough or satisfactory for a particular purpose",
    exampleSentence: "The food was adequate but not delicious.",
    level: "B2",
    tags: ["Unit 5"]
  },
  {
    english: "ambitious",
    phonetic: "/æmˈbɪʃ.əs/",
    turkishMeaning: "hırslı, azimli",
    dictionaryDefinition: "having a strong wish to be successful",
    exampleSentence: "She is very ambitious and wants to be CEO.",
    level: "B2",
    tags: ["Unit 5"]
  },
  {
    english: "anticipate",
    phonetic: "/ænˈtɪs.ɪ.peɪt/",
    turkishMeaning: "beklemek, ummak",
    dictionaryDefinition: "to imagine or expect that something will happen",
    exampleSentence: "We don't anticipate any further problems.",
    level: "B2",
    tags: ["Unit 5"]
  },
  {
    english: "appreciate",
    phonetic: "/əˈpriː.ʃi.eɪt/",
    turkishMeaning: "takdir etmek",
    dictionaryDefinition: "to recognize how good someone or something is",
    exampleSentence: "I really appreciate all your help.",
    level: "B2",
    tags: ["Unit 5"]
  },
  {
    english: "appropriate",
    phonetic: "/əˈprəʊ.pri.ət/",
    turkishMeaning: "uygun",
    dictionaryDefinition: "suitable or right for a particular situation",
    exampleSentence: "Is this dress appropriate for a wedding?",
    level: "B2",
    tags: ["Unit 5"]
  },
  {
    english: "collapse",
    phonetic: "/kəˈlæps/",
    turkishMeaning: "çökmek",
    dictionaryDefinition: "to fall down suddenly",
    exampleSentence: "The building collapsed during the earthquake.",
    level: "B2",
    tags: ["Unit 5"]
  },
  {
    english: "concerned",
    phonetic: "/kənˈsɜːnd/",
    turkishMeaning: "ilgili, endişeli",
    dictionaryDefinition: "worried; or involved in something",
    exampleSentence: "Parents are concerned about the new school rules.",
    level: "B2",
    tags: ["Unit 5"]
  },
  {
    english: "contemporary",
    phonetic: "/kənˈtem.pə.rer.i/",
    turkishMeaning: "çağdaş, modern",
    dictionaryDefinition: "existing or happening now",
    exampleSentence: "Contemporary art can be difficult to understand.",
    level: "B2",
    tags: ["Unit 5"]
  },
  {
    english: "contribute",
    phonetic: "/kənˈtrɪb.juːt/",
    turkishMeaning: "katkıda bulunmak",
    dictionaryDefinition: "to give something, especially money or help",
    exampleSentence: "I'd like to contribute to the discussion.",
    level: "B2",
    tags: ["Unit 5"]
  },
  {
    english: "controversial",
    phonetic: "/ˌkɒn.trəˈvɜː.ʃəl/",
    turkishMeaning: "tartışmalı",
    dictionaryDefinition: "causing disagreement or discussion",
    exampleSentence: "The decision was very controversial.",
    level: "B2",
    tags: ["Unit 5"]
  },
  {
    english: "convert",
    phonetic: "/kənˈvɜːt/",
    turkishMeaning: "dönüştürmek",
    dictionaryDefinition: "to change from one form to another",
    exampleSentence: "We converted the garage into a bedroom.",
    level: "B2",
    tags: ["Unit 5"]
  },
  {
    english: "existing",
    phonetic: "/ɪɡˈzɪs.tɪŋ/",
    turkishMeaning: "mevcut, var olan",
    dictionaryDefinition: "that exists now",
    exampleSentence: "The existing law needs to be updated.",
    level: "B2",
    tags: ["Unit 5"]
  },
  {
    english: "expand",
    phonetic: "/ɪkˈspænd/",
    turkishMeaning: "genişlemek, büyümek",
    dictionaryDefinition: "to increase in size, number, or importance",
    exampleSentence: "The company plans to expand into Europe.",
    level: "B2",
    tags: ["Unit 5"]
  },
  {
    english: "feature",
    phonetic: "/ˈfiː.tʃər/",
    turkishMeaning: "özellik",
    dictionaryDefinition: "a typical quality or an important part of something",
    exampleSentence: "The main feature of the phone is its camera.",
    level: "B2",
    tags: ["Unit 5"]
  },
  {
    english: "maintain",
    phonetic: "/meɪnˈteɪn/",
    turkishMeaning: "sürdürmek, bakım yapmak",
    dictionaryDefinition: "to continue to have; to keep in good condition",
    exampleSentence: "It's hard to maintain a high level of fitness.",
    level: "B2",
    tags: ["Unit 5"]
  },
  {
    english: "obtain",
    phonetic: "/əbˈteɪn/",
    turkishMeaning: "elde etmek",
    dictionaryDefinition: "to get something, especially by asking for it",
    exampleSentence: "You must obtain permission before you leave.",
    level: "B2",
    tags: ["Unit 5"]
  },
  {
    english: "potential (sıfat hali)",
    phonetic: "/pəˈten.ʃəl/",
    turkishMeaning: "potansiyel (sıfat)",
    dictionaryDefinition: "possible when the necessary conditions exist",
    exampleSentence: "We have found a potential buyer for the house.",
    level: "B2",
    tags: ["Unit 5"]
  },
  {
    english: "potential (isim hali)",
    phonetic: "/pəˈten.ʃəl/",
    turkishMeaning: "potansiyel (isim)",
    dictionaryDefinition: "someone's or something's ability to develop",
    exampleSentence: "The region has enormous economic potential.",
    level: "B2",
    tags: ["Unit 5"]
  },
  {
    english: "renovate",
    phonetic: "/ˈren.ə.veɪt/",
    turkishMeaning: "yenilemek, restore etmek",
    dictionaryDefinition: "to repair and improve something, especially a building",
    exampleSentence: "They spent $20,000 renovating the kitchen.",
    level: "B2",
    tags: ["Unit 5"]
  },
  {
    english: "sympathetic",
    phonetic: "/ˌsɪm.pəˈθet.ɪk/",
    turkishMeaning: "sempatik, anlayışlı",
    dictionaryDefinition: "used about someone who shows that they understand and care about someone else's problems",
    exampleSentence: "She was very sympathetic to me when I lost my job.",
    level: "B2",
    tags: ["Unit 5"]
  },
  {
    english: "transform",
    phonetic: "/trænsˈfɔːm/",
    turkishMeaning: "dönüştürmek",
    dictionaryDefinition: "to change completely in form or appearance",
    exampleSentence: "The old factory has been transformed into an art gallery.",
    level: "B2",
    tags: ["Unit 5"]
  },

  // Unit 6: Industrial Development (B2)
  {
    english: "capacity",
    phonetic: "/kəˈpæs.ə.ti/",
    turkishMeaning: "kapasite",
    dictionaryDefinition: "the total amount that can be contained or produced",
    exampleSentence: "The stadium has a seating capacity of 50,000.",
    level: "B2",
    tags: ["Unit 6"]
  },
  {
    english: "challenge",
    phonetic: "/ˈtʃæl.ɪndʒ/",
    turkishMeaning: "meydan okuma, zorluk",
    dictionaryDefinition: "something that needs a lot of skill, energy, and determination to deal with",
    exampleSentence: "Solving the global climate crisis is a huge challenge.",
    level: "B2",
    tags: ["Unit 6"]
  },
  {
    english: "consistent",
    phonetic: "/kənˈsɪs.tənt/",
    turkishMeaning: "tutarlı, istikrarlı",
    dictionaryDefinition: "always behaving or happening in a similar, especially positive, way",
    exampleSentence: "Her performance has been consistent throughout the season.",
    level: "B2",
    tags: ["Unit 6"]
  },
  {
    english: "consumption",
    phonetic: "/kənˈsʌmp.ʃən/",
    turkishMeaning: "tüketim",
    dictionaryDefinition: "the act of using, eating, or drinking something",
    exampleSentence: "The consumption of fast food has increased significantly.",
    level: "B2",
    tags: ["Unit 6"]
  },
  {
    english: "cycle",
    phonetic: "/ˈsaɪ.kəl/",
    turkishMeaning: "döngü",
    dictionaryDefinition: "a series of events that are regularly repeated",
    exampleSentence: "The water cycle is an essential part of life on Earth.",
    level: "B2",
    tags: ["Unit 6"]
  },
  {
    english: "decline",
    phonetic: "/dɪˈklaɪn/",
    turkishMeaning: "düşüş, azalma",
    dictionaryDefinition: "to gradually become less, worse, or lower",
    exampleSentence: "The number of people living in poverty has declined.",
    level: "B2",
    tags: ["Unit 6"]
  },
  {
    english: "desalination",
    phonetic: "/ˌdiː.sæl.ɪˈneɪ.ʃən/",
    turkishMeaning: "tuzdan arındırma",
    dictionaryDefinition: "the process of removing salt from sea water",
    exampleSentence: "Desalination plants provide fresh water for many people.",
    level: "B2",
    tags: ["Unit 6"]
  },
  {
    english: "drawback",
    phonetic: "/ˈdrɔː.bæk/",
    turkishMeaning: "dezavantaj, engel",
    dictionaryDefinition: "a disadvantage or the negative part of a situation",
    exampleSentence: "The main drawback of the plan is its high cost.",
    level: "B2",
    tags: ["Unit 6"]
  },
  {
    english: "efficient",
    phonetic: "/ɪˈfɪʃ.ənt/",
    turkishMeaning: "verimli",
    dictionaryDefinition: "working or operating quickly and effectively",
    exampleSentence: "The new heating system is very efficient.",
    level: "B2",
    tags: ["Unit 6"]
  },
  {
    english: "element",
    phonetic: "/ˈel.ɪ.mənt/",
    turkishMeaning: "öge, unsur",
    dictionaryDefinition: "a part of something",
    exampleSentence: "Trust is a vital element in any relationship.",
    level: "B2",
    tags: ["Unit 6"]
  },
  {
    english: "establish",
    phonetic: "/ɪˈstæb.lɪʃ/",
    turkishMeaning: "kurmak, tesis etmek",
    dictionaryDefinition: "to start a company or organization that will continue for a long time",
    exampleSentence: "The company was established in 1895.",
    level: "B2",
    tags: ["Unit 6"]
  },
  {
    english: "experimental",
    phonetic: "/ɪkˌsper.ɪˈmen.təl/",
    turkishMeaning: "deneysel",
    dictionaryDefinition: "relating to scientific experiments",
    exampleSentence: "The drug is still in its experimental stage.",
    level: "B2",
    tags: ["Unit 6"]
  },
  {
    english: "function",
    phonetic: "/ˈfʌŋk.ʃən/",
    turkishMeaning: "işlev, fonksiyon",
    dictionaryDefinition: "the natural purpose of something or the duty of a person",
    exampleSentence: "The main function of the kidneys is to filter the blood.",
    level: "B2",
    tags: ["Unit 6"]
  },
  {
    english: "generate",
    phonetic: "/ˈdʒen.ə.reɪt/",
    turkishMeaning: "üretmek",
    dictionaryDefinition: "to produce energy in a particular form",
    exampleSentence: "The project generated a lot of new jobs.",
    level: "B2",
    tags: ["Unit 6"]
  },
  {
    english: "generation",
    phonetic: "/ˌdʒen.əˈreɪ.ʃən/",
    turkishMeaning: "nesil, kuşak",
    dictionaryDefinition: "all the people of about the same age within a society",
    exampleSentence: "The younger generation is more concerned about environmental issues.",
    level: "B2",
    tags: ["Unit 6"]
  },
  {
    english: "implement",
    phonetic: "/ˈɪm.plɪ.ment/",
    turkishMeaning: "uygulamak, hayata geçirmek",
    dictionaryDefinition: "to start using a plan or system",
    exampleSentence: "The new rules will be implemented next month.",
    level: "B2",
    tags: ["Unit 6"]
  },
  {
    english: "limitation",
    phonetic: "/ˌlɪm.ɪˈteɪ.ʃən/",
    turkishMeaning: "sınırlama",
    dictionaryDefinition: "the act of controlling or reducing something",
    exampleSentence: "The new law imposes limitations on the use of clean water.",
    level: "B2",
    tags: ["Unit 6"]
  },
  {
    english: "mainland",
    phonetic: "/ˈmeɪn.lænd/",
    turkishMeaning: "ana kara",
    dictionaryDefinition: "the main part of a country or continent, not including the islands around it",
    exampleSentence: "Italy is a country in Southern Europe, bordering France, Switzerland, Austria, and Slovenia to the north.",
    level: "B2",
    tags: ["Unit 6"]
  },
  {
    english: "maintenance",
    phonetic: "/ˈmeɪn.tə.nəns/",
    turkishMeaning: "bakım, onarım",
    dictionaryDefinition: "the work needed to keep something in good condition",
    exampleSentence: "The car needs regular maintenance to keep it running smoothly.",
    level: "B2",
    tags: ["Unit 6"]
  },
  {
    english: "network",
    phonetic: "/ˈnet.wɜːk/",
    turkishMeaning: "ağ",
    dictionaryDefinition: "a large system consisting of many similar parts that are connected together",
    exampleSentence: "He is part of a larger network of researchers.",
    level: "B2",
    tags: ["Unit 6"]
  },
  {
    english: "perform",
    phonetic: "/pəˈfɔːm/",
    turkishMeaning: "sergilemek, yapmak",
    dictionaryDefinition: "to do an action or piece of work",
    exampleSentence: "The experiment was performed in a laboratory.",
    level: "B2",
    tags: ["Unit 6"]
  },
  {
    english: "reservoir",
    phonetic: "/ˈrez.ə.vwɑːr/",
    turkishMeaning: "rezervuar, su birikintisi",
    dictionaryDefinition: "a large natural or artificial lake used as a source of water supply",
    exampleSentence: "The reservoir provides water for the whole city.",
    level: "B2",
    tags: ["Unit 6"]
  },
  {
    english: "source",
    phonetic: "/sɔːs/",
    turkishMeaning: "kaynak",
    dictionaryDefinition: "the place where something comes from or starts",
    exampleSentence: "Fish is a good source of protein.",
    level: "B2",
    tags: ["Unit 6"]
  },
  {
    english: "sufficient",
    phonetic: "/səˈfɪʃ.ənt/",
    turkishMeaning: "yeterli",
    dictionaryDefinition: "enough for a particular purpose",
    exampleSentence: "The water supply is sufficient for our needs.",
    level: "B2",
    tags: ["Unit 6"]
  },
  {
    english: "volume",
    phonetic: "/ˈvɒl.juːm/",
    turkishMeaning: "hacim, miktar",
    dictionaryDefinition: "the amount of space that is contained within an object or solid shape",
    exampleSentence: "The volume of traffic has increased significantly in recent years.",
    level: "B2",
    tags: ["Unit 6"]
  },

  // Unit 7: Art & Identity (B2)
  {
    english: "analyze",
    phonetic: "/ˈæn.əl.aɪz/",
    turkishMeaning: "analiz etmek",
    dictionaryDefinition: "to study or examine something in detail",
    exampleSentence: "Scientists are analyzing the data collected from the mission.",
    level: "B2",
    tags: ["Unit 7"]
  },
  {
    english: "comment",
    phonetic: "/ˈkɒm.ent/",
    turkishMeaning: "yorum",
    dictionaryDefinition: "something that you say or write that expresses your opinion",
    exampleSentence: "She made a favorable comment about the exhibition.",
    level: "B2",
    tags: ["Unit 7"]
  },
  {
    english: "composition",
    phonetic: "/ˌkɒm.pəˈzɪʃ.ən/",
    turkishMeaning: "kompozisyon",
    dictionaryDefinition: "the way in which something is put together or arranged",
    exampleSentence: "The composition of the painting is very balanced.",
    level: "B2",
    tags: ["Unit 7"]
  },
  {
    english: "creativity",
    phonetic: "/ˌkriː.eɪˈtɪv.ə.ti/",
    turkishMeaning: "yaratıcılık",
    dictionaryDefinition: "the ability to produce original and unusual ideas",
    exampleSentence: "Advertising needs a lot of creativity.",
    level: "B2",
    tags: ["Unit 7"]
  },
  {
    english: "criticism",
    phonetic: "/ˈkrɪt.ɪ.sɪ.zəm/",
    turkishMeaning: "eleştiri",
    dictionaryDefinition: "the act of giving your opinion or judgment about something",
    exampleSentence: "The film received a lot of criticism from the audience.",
    level: "B2",
    tags: ["Unit 7"]
  },
  {
    english: "display",
    phonetic: "/dɪˈspleɪ/",
    turkishMeaning: "sergilemek",
    dictionaryDefinition: "to show something in a public place",
    exampleSentence: "The museum displays many ancient artifacts.",
    level: "B2",
    tags: ["Unit 7"]
  },
  {
    english: "focus on",
    phonetic: "/ˈfəʊ.kəs ɒn/",
    turkishMeaning: "-e odaklanmak",
    dictionaryDefinition: "to give all your attention to something",
    exampleSentence: "The course focuses on the history of art.",
    level: "B2",
    tags: ["Unit 7"]
  },
  {
    english: "identity",
    phonetic: "/aɪˈden.tə.ti/",
    turkishMeaning: "kimlik",
    dictionaryDefinition: "the characteristics determining who or what a person or thing is",
    exampleSentence: "She lost her sense of identity after she lost her job.",
    level: "B2",
    tags: ["Unit 7"]
  },
  {
    english: "interpret",
    phonetic: "/ɪnˈtɜː.prɪt/",
    turkishMeaning: "yorumlamak",
    dictionaryDefinition: "to decide what the intended meaning of something is",
    exampleSentence: "How do you interpret the ending of the film?",
    level: "B2",
    tags: ["Unit 7"]
  },
  {
    english: "reflect",
    phonetic: "/rɪˈflekt/",
    turkishMeaning: "yansıtmak",
    dictionaryDefinition: "to show, express, or be a sign of something",
    exampleSentence: "The poll results reflect the opinions of the general public.",
    level: "B2",
    tags: ["Unit 7"]
  },
  {
    english: "reject",
    phonetic: "/rɪˈdʒekt/",
    turkishMeaning: "reddetmek",
    dictionaryDefinition: "to refuse to accept, use, or believe something",
    exampleSentence: "The committee rejected the proposal.",
    level: "B2",
    tags: ["Unit 7"]
  },
  {
    english: "restore",
    phonetic: "/rɪˈstɔːr/",
    turkishMeaning: "restore etmek, onarmak",
    dictionaryDefinition: "to return something to an earlier good condition",
    exampleSentence: "They are planning to restore the old church.",
    level: "B2",
    tags: ["Unit 7"]
  },
  {
    english: "reveal",
    phonetic: "/rɪˈviːl/",
    turkishMeaning: "açığa çıkarmak",
    dictionaryDefinition: "to make known or show something that is surprising or that was previously secret",
    exampleSentence: "The investigation revealed a lot of new information.",
    level: "B2",
    tags: ["Unit 7"]
  },
  {
    english: "right",
    phonetic: "/raɪt/",
    turkishMeaning: "hak",
    dictionaryDefinition: "the power or privilege to which one has a just claim",
    exampleSentence: "Everyone has the right to free speech.",
    level: "B2",
    tags: ["Unit 7"]
  },
  {
    english: "self-expression",
    phonetic: "/ˌself.ɪkˈspreʃ.ən/",
    turkishMeaning: "kendini ifade etme",
    dictionaryDefinition: "the expression of one's own personality, feelings, or ideas",
    exampleSentence: "Art is a form of self-expression for many people.",
    level: "B2",
    tags: ["Unit 7"]
  },
  {
    english: "vandalism",
    phonetic: "/ˈvæn.dəl.ɪ.zəm/",
    turkishMeaning: "vandalizm, kamu malına zarar verme",
    dictionaryDefinition: "the crime of intentionally damaging property belonging to other people",
    exampleSentence: "The museum is taking measures to prevent vandalism.",
    level: "B2",
    tags: ["Unit 7"]
  },

  // Unit 8: Global Issues (B2)
  {
    english: "alter",
    phonetic: "/ˈɒl.tər/",
    turkishMeaning: "değiştirmek",
    dictionaryDefinition: "to change something, usually slightly",
    exampleSentence: "We can alter the plans to suit your needs.",
    level: "B2",
    tags: ["Unit 8"]
  },
  {
    english: "asset",
    phonetic: "/ˈæs.et/",
    turkishMeaning: "varlık, değer",
    dictionaryDefinition: "something valuable belonging to a person or business",
    exampleSentence: "Knowledge of languages is a real asset.",
    level: "B2",
    tags: ["Unit 8"]
  },
  {
    english: "assist",
    phonetic: "/əˈsɪst/",
    turkishMeaning: "yardım etmek",
    dictionaryDefinition: "to help someone",
    exampleSentence: "The study was designed to assist people with disabilities.",
    level: "B2",
    tags: ["Unit 8"]
  },
  {
    english: "attempt",
    phonetic: "/əˈtempt/",
    turkishMeaning: "girişim, deneme",
    dictionaryDefinition: "to try to do something",
    exampleSentence: "He attempted to break the world record.",
    level: "B2",
    tags: ["Unit 8"]
  },
  {
    english: "calculate",
    phonetic: "/ˈkæl.kjə.leɪt/",
    turkishMeaning: "hesaplamak",
    dictionaryDefinition: "to judge the number or amount of something",
    exampleSentence: "We need to calculate the cost of the project.",
    level: "B2",
    tags: ["Unit 8"]
  },
  {
    english: "capable",
    phonetic: "/ˈkeɪ.pə.bəl/",
    turkishMeaning: "yetenekli, muktedir",
    dictionaryDefinition: "having the ability or power to do something",
    exampleSentence: "He is a very capable lawyer.",
    level: "B2",
    tags: ["Unit 8"]
  },
  {
    english: "cooperate",
    phonetic: "/kəʊˈɒp.ər.eɪt/",
    turkishMeaning: "işbirliği yapmak",
    dictionaryDefinition: "to act or work together for a share purpose",
    exampleSentence: "The two companies are cooperating on a new project.",
    level: "B2",
    tags: ["Unit 8"]
  },
  {
    english: "dependent (sıfat hali)",
    phonetic: "/dɪˈpen.dənt/",
    turkishMeaning: "bağımlı (sıfat)",
    dictionaryDefinition: "needing the help of someone or something in order to survive",
    exampleSentence: "He is still dependent on his parents.",
    level: "B2",
    tags: ["Unit 8"]
  },
  {
    english: "dependent (isim hali)",
    phonetic: "/dɪˈpen.dənt/",
    turkishMeaning: "bakmakla yükümlü olunan kişi (isim)",
    dictionaryDefinition: "a person who relies on another as a primary source of income",
    exampleSentence: "He has three dependents to provide for.",
    level: "B2",
    tags: ["Unit 8"]
  },
  {
    english: "devote",
    phonetic: "/dɪˈvəʊt/",
    turkishMeaning: "adamak",
    dictionaryDefinition: "to give all of something to a particular person or thing",
    exampleSentence: "She devotes all her time to her children.",
    level: "B2",
    tags: ["Unit 8"]
  },
  {
    english: "enable",
    phonetic: "/ɪˈneɪ.bəl/",
    turkishMeaning: "olanak sağlamak",
    dictionaryDefinition: "to make someone or something able to do something",
    exampleSentence: "The new technology enables faster communication.",
    level: "B2",
    tags: ["Unit 8"]
  },
  {
    english: "ensure",
    phonetic: "/ɪnˈʃɔːr/",
    turkishMeaning: "garantiye almak",
    dictionaryDefinition: "to make certain that something is done",
    exampleSentence: "Please ensure that all the lights are switched off.",
    level: "B2",
    tags: ["Unit 8"]
  },
  {
    english: "estimate",
    phonetic: "/ˈes.tɪ.meɪt/",
    turkishMeaning: "tahmin etmek",
    dictionaryDefinition: "to guess the cost, size, or value of something",
    exampleSentence: "It was difficult to estimate the number of people.",
    level: "B2",
    tags: ["Unit 8"]
  },
  {
    english: "generation",
    phonetic: "/ˌdʒen.əˈreɪ.ʃən/",
    turkishMeaning: "nesil, kuşak",
    dictionaryDefinition: "all the people of about the same age within a society",
    exampleSentence: "The younger generation is more concerned about environmental issues.",
    level: "B2",
    tags: ["Unit 8"]
  },
  {
    english: "indicate",
    phonetic: "/ˈɪn.dɪ.keɪt/",
    turkishMeaning: "belirtmek, göstermek",
    dictionaryDefinition: "to show, point, or make clear in another way",
    exampleSentence: "The signs indicate that the road is closed.",
    level: "B2",
    tags: ["Unit 8"]
  },
  {
    english: "participate",
    phonetic: "/pɑːˈtɪs.ɪ.peɪt/",
    turkishMeaning: "katılmak",
    dictionaryDefinition: "to take part in an activity",
    exampleSentence: "She participated in the meeting.",
    level: "B2",
    tags: ["Unit 8"]
  },
  {
    english: "pension",
    phonetic: "/ˈpen.ʃən/",
    turkishMeaning: "emekli maaşı",
    dictionaryDefinition: "an amount of money paid regularly to a person who is retired",
    exampleSentence: "He is living on his pension.",
    level: "B2",
    tags: ["Unit 8"]
  },
  {
    english: "permit",
    phonetic: "/pəˈmɪt/",
    turkishMeaning: "izin vermek, ruhsat",
    dictionaryDefinition: "to allow something occur; or an official document",
    exampleSentence: "You need a permit to fish here.",
    level: "B2",
    tags: ["Unit 8"]
  },
  {
    english: "phase",
    phonetic: "/feɪz/",
    turkishMeaning: "evre, aşama",
    dictionaryDefinition: "a stage in a process of change or development",
    exampleSentence: "The project is now in its final phase.",
    level: "B2",
    tags: ["Unit 8"]
  },
  {
    english: "property",
    phonetic: "/ˈprɒp.ə.ti/",
    turkishMeaning: "mülk, emlak",
    dictionaryDefinition: "an object or objects that belong to someone",
    exampleSentence: "The hotel is a private property.",
    level: "B2",
    tags: ["Unit 8"]
  },
  {
    english: "propose",
    phonetic: "/prəˈpəʊz/",
    turkishMeaning: "önermek",
    dictionaryDefinition: "to offer or suggest a possible plan",
    exampleSentence: "He proposed a new way of working.",
    level: "B2",
    tags: ["Unit 8"]
  },
  {
    english: "rate",
    phonetic: "/reɪt/",
    turkishMeaning: "oran, hız",
    dictionaryDefinition: "the speed at which something happens or changes",
    exampleSentence: "The interest rate has fallen.",
    level: "B2",
    tags: ["Unit 8"]
  },
  {
    english: "responsibility",
    phonetic: "/rɪˌspɒn.sɪˈbɪl.ə.ti/",
    turkishMeaning: "sorumluluk",
    dictionaryDefinition: "the state or fact of having a duty to deal with something",
    exampleSentence: "It's your responsibility to finish the work.",
    level: "B2",
    tags: ["Unit 8"]
  },
  {
    english: "retirement",
    phonetic: "/rɪˈtaɪə.mənt/",
    turkishMeaning: "emeklilik",
    dictionaryDefinition: "the act of leaving your job and stopping work",
    exampleSentence: "He is looking forward to his retirement.",
    level: "B2",
    tags: ["Unit 8"]
  }
];
