import fs from 'fs';

const unit3Data = {
  "aid": {
    "turkishMeaning": "yardım",
    "turkishDefinition": "İhtiyaç duyulan yardım veya destek.",
    "exampleSentence": "The organization provides humanitarian aid to war zones."
  },
  "antibiotic": {
    "turkishMeaning": "antibiyotik",
    "turkishDefinition": "Bakterileri öldüren veya çoğalmasını önleyen ilaç.",
    "exampleSentence": "The doctor prescribed an antibiotic for my throat infection."
  },
  "balance": {
    "turkishMeaning": "denge",
    "turkishDefinition": "Farklı şeylerin eşit ağırlığa veya öneme sahip olduğu durum.",
    "exampleSentence": "It's important to find a balance between work and life."
  },
  "clinical": {
    "turkishMeaning": "klinik",
    "turkishDefinition": "Tıbbi tedavi ve testlerle ilgili olan.",
    "exampleSentence": "Clinical trials are necessary to test a new drug's safety."
  },
  "contaminated": {
    "turkishMeaning": "kirlenmiş, mikrop bulaşmış",
    "turkishDefinition": "Zehirli, kirli veya saflığı bozulmuş olan.",
    "exampleSentence": "The well was contaminated with dangerous chemicals."
  },
  "data": {
    "turkishMeaning": "veri",
    "turkishDefinition": "Bir şey hakkında toplanan bilgiler veya gerçekler.",
    "exampleSentence": "We need to analyze the data before making a decision."
  },
  "in favour of": {
    "turkishMeaning": "-in lehine, destekleyen",
    "turkishDefinition": "Bir tarafta olmak veya bir şeyi desteklemek.",
    "exampleSentence": "Are you in favour of the new tax law?"
  },
  "infected": {
    "turkishMeaning": "enfekte, mikrop kapmış",
    "turkishDefinition": "Hastalık yapıcı bir organizmanın bulaştığı.",
    "exampleSentence": "The wound became infected and needed special care."
  },
  "occur": {
    "turkishMeaning": "meydana gelmek, oluşmak",
    "turkishDefinition": "Bir olayın veya durumun gerçekleşmesi.",
    "exampleSentence": "Earthquakes often occur without any warning."
  },
  "outbreak": {
    "turkishMeaning": "salgın",
    "turkishDefinition": "Bir hastalığın aniden ve geniş çapta ortaya çıkması.",
    "exampleSentence": "There has been an outbreak of flu in the local school."
  },
  "precaution": {
    "turkishMeaning": "önlem, tedbir",
    "turkishDefinition": "Kötü bir şeyin olmasını önlemek için alınan aksiyon.",
    "exampleSentence": "You should take every precaution to stay safe while driving."
  },
  "prescription": {
    "turkishMeaning": "reçete",
    "turkishDefinition": "Doktorun gerekli ilacı yazdığı yazılı kağıt.",
    "exampleSentence": "You can only get these pills with a doctor's prescription."
  },
  "prevention": {
    "turkishMeaning": "önleme",
    "turkishDefinition": "Bir şeyin olmasını engelleme eylemi.",
    "exampleSentence": "Disease prevention is better than finding a cure."
  },
  "prove": {
    "turkishMeaning": "kanıtlamak",
    "turkishDefinition": "Bir şeyin doğru olduğunu göstermek.",
    "exampleSentence": "Can you prove that you were at home last night?"
  },
  "recover": {
    "turkishMeaning": "iyileşmek, toparlanmak",
    "turkishDefinition": "Bir hastalık veya yaralanmadan sonra tamamen sağlığına kavuşmak.",
    "exampleSentence": "It took him three weeks to recover from the surgery."
  },
  "researcher": {
    "turkishMeaning": "araştırmacı",
    "turkishDefinition": "Yeni bilgiler keşfetmek için bir konuyu inceleyen kişi.",
    "exampleSentence": "The researcher presented her findings at the conference."
  },
  "therapy": {
    "turkishMeaning": "terapi",
    "turkishDefinition": "Hastalıktan sonra birinin kendini daha iyi hissetmesini sağlayan tedavi.",
    "exampleSentence": "Music therapy can help patients feel more relaxed."
  },
  "treat": {
    "turkishMeaning": "tedavi etmek",
    "turkishDefinition": "Hastaya tıbbi bakım sağlamak veya iyileştirmeye çalışmak.",
    "exampleSentence": "Doctors are learning new ways to treat cancer."
  },
  "treatment": {
    "turkishMeaning": "tedavi",
    "turkishDefinition": "Bir hastalığı veya yaralanmayı iyileştirmek için yapılan her şey.",
    "exampleSentence": "She is responding well to the new medical treatment."
  },
  "trial": {
    "turkishMeaning": "deneme, test",
    "turkishDefinition": "Bir şeyin ne kadar etkili veya güvenli olduğunu bulma testi.",
    "exampleSentence": "The new aircraft is undergoing flight trials this month."
  },
  "urgent": {
    "turkishMeaning": "acil",
    "turkishDefinition": "Derhal dikkat ve müdahale gerektiren durum.",
    "exampleSentence": "I have an urgent message for the manager."
  },
  "vaccine": {
    "turkishMeaning": "aşı",
    "turkishDefinition": "Vücudu hastalıklardan korumak için verilen madde.",
    "exampleSentence": "Children receive a vaccine to protect them against polio."
  },
  "virus": {
    "turkishMeaning": "virüs",
    "turkishDefinition": "Hastalıklara neden olan mikroorganizma.",
    "exampleSentence": "The computer was infected by a dangerous virus."
  },
  "wound": {
    "turkishMeaning": "yara",
    "turkishDefinition": "Vücuttaki bir kesik veya darbe sonucu oluşan hasar.",
    "exampleSentence": "The nurse cleaned and bandaged the soldier's wound."
  },
  "adequate": {
    "turkishMeaning": "yeterli, kafi",
    "turkishDefinition": "Belirli bir amaç için yeterli veya tatmin edici olan.",
    "exampleSentence": "Make sure you have adequate lighting in your study room."
  },
  "adverse": {
    "turkishMeaning": "olumsuz, ters",
    "turkishDefinition": "Bir şey üzerinde negatif veya zararlı etkisi olan.",
    "exampleSentence": "High doses of this medicine can have adverse effects."
  },
  "burden": {
    "turkishMeaning": "yük, külfet",
    "turkishDefinition": "Taşıması veya dayanması zor olan görev veya sorumluluk.",
    "exampleSentence": "Looking after elderly parents can be a heavy burden."
  },
  "chief": {
    "turkishMeaning": "baş, temel, ana",
    "turkishDefinition": "En önemli veya başlıca olan.",
    "exampleSentence": "Lack of funding is the chief cause of the project's delay."
  },
  "complex": {
    "turkishMeaning": "karmaşık",
    "turkishDefinition": "Birçok farklı parçaya sahip olduğu için anlaşılması güç olan.",
    "exampleSentence": "Modern society has many complex social problems."
  },
  "consultation": {
    "turkishMeaning": "danışma, görüşme",
    "turkishDefinition": "Bir konuyu tartışmak veya tavsiye almak için yapılan toplantı.",
    "exampleSentence": "You should have a consultation with a specialist."
  },
  "contribution": {
    "turkishMeaning": "katkı",
    "turkishDefinition": "Bir şeye yardım etmek için verilen para veya emek.",
    "exampleSentence": "Everyone made a small contribution to the charity fund."
  },
  "controversial": {
    "turkishMeaning": "tartışmalı",
    "turkishDefinition": "İnsanlar arasında anlaşmazlığa veya tartışmaya neden olan.",
    "exampleSentence": "The decision to build a new road was very controversial."
  },
  "conventional": {
    "turkishMeaning": "geleneksel, alışılagelmiş",
    "turkishDefinition": "Alışılmış olan uygulamaları veya yöntemleri takip eden.",
    "exampleSentence": "He prefers conventional medicine over alternative treatments."
  },
  "diabetes": {
    "turkishMeaning": "diyabet, şeker hastalığı",
    "turkishDefinition": "Vücudun kandaki şeker seviyesini kontrol edemediği hastalık.",
    "exampleSentence": "Regular exercise helps manage the symptoms of diabetes."
  },
  "drug": {
    "turkishMeaning": "ilaç",
    "turkishDefinition": "Tıbbi amaçla veya keyif verici olarak kullanılan kimyasal madde.",
    "exampleSentence": "The company is testing a new drug for heart disease."
  },
  "epidemic": {
    "turkishMeaning": "epidemi, salgın",
    "turkishDefinition": "Aynı anda çok sayıda insanı etkileyen hastalık.",
    "exampleSentence": "The flu epidemic spread quickly throughout the city."
  },
  "fund": {
    "turkishMeaning": "fon sağlamak",
    "turkishDefinition": "Bir şeyin bedelini ödemek için para sağlamak.",
    "exampleSentence": "The government decided to fund the new hospital project."
  },
  "illegal": {
    "turkishMeaning": "yasa dışı",
    "turkishDefinition": "Kanunlara ve yasalara aykırı olan.",
    "exampleSentence": "Selling these products without a license is illegal."
  },
  "labour": {
    "turkishMeaning": "iş gücü, emek",
    "turkishDefinition": "Pratik veya fiziksel iş yapan çalışanlar.",
    "exampleSentence": "The cost of labour is higher in developed countries."
  },
  "medical": {
    "turkishMeaning": "tıbbi",
    "turkishDefinition": "Hastalık ve yaralanmaların tedavisiyle ilgili.",
    "exampleSentence": "He needed urgent medical attention after the car crash."
  },
  "mobility": {
    "turkishMeaning": "hareketlilik",
    "turkishDefinition": "Kolayca ve rahatça hareket edebilme yeteneği.",
    "exampleSentence": "Regular swimming can help improve your joint mobility."
  },
  "obesity": {
    "turkishMeaning": "obezite, aşırı şişmanlık",
    "turkishDefinition": "Sağlığı tehlikeye atacak kadar aşırı kilolu olma durumu.",
    "exampleSentence": "Childhood obesity is a growing concern for health officials."
  },
  "patent": {
    "turkishMeaning": "patent",
    "turkishDefinition": "Bir icadın haklarını belirli süreyle koruyan resmi belge.",
    "exampleSentence": "The scientist applied for a patent for her new invention."
  },
  "pharmaceutical": {
    "turkishMeaning": "ilaçla ilgili, farmasötik",
    "turkishDefinition": "Tıbbi ilaç veya tedavi ile ilgili olan.",
    "exampleSentence": "The pharmaceutical industry is investing millions in research."
  },
  "physical": {
    "turkishMeaning": "fiziksel",
    "turkishDefinition": "Zihin yerine vücut ve beden ile bağlantılı olan.",
    "exampleSentence": "Physical education is an important part of the school curriculum."
  },
  "physiotherapy": {
    "turkishMeaning": "fizyoterapi",
    "turkishDefinition": "Kas, eklem veya sinir problemlerinin tedavi yöntemi.",
    "exampleSentence": "She had physiotherapy sessions to recover from her leg injury."
  },
  "precise": {
    "turkishMeaning": "kesin, tam",
    "turkishDefinition": "Çok net, doğru ve hatasız olan.",
    "exampleSentence": "We need a precise measurement of the room's dimensions."
  },
  "preventable illness": {
    "turkishMeaning": "önlenebilir hastalık",
    "turkishDefinition": "Kişinin kendine bakmasıyla kaçınılabilecek hastalık.",
    "exampleSentence": "Heart disease is often a preventable illness through diet."
  },
  "professional": {
    "turkishMeaning": "profesyonel",
    "turkishDefinition": "Eğitimli ve yetenekli kişilere özgü niteliklere sahip olan.",
    "exampleSentence": "She gave a very professional presentation to the board."
  },
  "proponent": {
    "turkishMeaning": "taraftar, savunucu",
    "turkishDefinition": "Belirli bir fikri veya planı destekleyen kişi.",
    "exampleSentence": "He is a strong proponent of renewable energy."
  },
  "regardless": {
    "turkishMeaning": "ne olursa olsun, bakmaksızın",
    "turkishDefinition": "Bir şeyden etkilenmeksizin, her şeye rağmen.",
    "exampleSentence": "The event will go ahead regardless of the weather."
  },
  "safety net": {
    "turkishMeaning": "güvenlik ağı",
    "turkishDefinition": "Birini olası zorluklara karşı koruyan sistem veya şey.",
    "exampleSentence": "Social security acts as a safety net for the unemployed."
  },
  "substances": {
    "turkishMeaning": "maddeler",
    "turkishDefinition": "Belirli fiziksel özelliklere sahip olan materyaller.",
    "exampleSentence": "The lab is testing some unknown chemical substances."
  },
  "surgeon": {
    "turkishMeaning": "cerrah",
    "turkishDefinition": "Tıbbi ameliyatlar yapmak üzere eğitilmiş doktor.",
    "exampleSentence": "The surgeon performed a successful heart bypass operation."
  },
  "surgery": {
    "turkishMeaning": "cerrahi müdahale, ameliyat",
    "turkishDefinition": "Hasarlı bir parçayı onarmak için vücudun açılması işlemi.",
    "exampleSentence": "He had to undergo emergency surgery after the accident."
  },
  "symptoms": {
    "turkishMeaning": "belirtiler",
    "turkishDefinition": "Bir hastalığın neden olduğu tepkiler veya hisler.",
    "exampleSentence": "The main symptoms of a cold are coughing and sneezing."
  },
  "tumour": {
    "turkishMeaning": "tümör, ur",
    "turkishDefinition": "Hastalık nedeniyle oluşan hücre kütlesi veya şişlik.",
    "exampleSentence": "Doctors found a small tumour in his lung during the scan."
  },
  "underfunding": {
    "turkishMeaning": "yetersiz finansman",
    "turkishDefinition": "Bir şey için sağlanan para veya bütçenin eksikliği.",
    "exampleSentence": "The education system is suffering from chronic underfunding."
  },
  "ward": {
    "turkishMeaning": "koğuş, hastane odası",
    "turkishDefinition": "Hastanenin yataklı bölümlerine veya büyük odalarına verilen ad.",
    "exampleSentence": "The patient was moved to the intensive care ward."
  }
};

const filePath = 'c:/Users/yunus/Desktop/Uygulama/src/data/b1b2-seed-words.ts';
let content = fs.readFileSync(filePath, 'utf8');

for (const [english, data] of Object.entries(unit3Data)) {
  const regex = new RegExp(`(\\{[^}]*?"english":\\s*"${english}"[^}]*?"tags":\\s*\\[[^\\]]*?"Unit 3"[^}]*?\\})`, 'g');
  
  content = content.replace(regex, (match) => {
    let updated = match;
    updated = updated.replace(/"turkishMeaning":\s*".*?"/, `"turkishMeaning": "${data.turkishMeaning}"`);
    updated = updated.replace(/"turkishDefinition":\s*".*?"/, `"turkishDefinition": "${data.turkishDefinition}"`);
    updated = updated.replace(/"exampleSentence":\s*".*?"/, `"exampleSentence": "${data.exampleSentence}"`);
    return updated;
  });
}

fs.writeFileSync(filePath, content);
console.log('Unit 3 words updated successfully.');
