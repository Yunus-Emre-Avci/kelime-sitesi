import fs from 'fs';

const unit2Data = {
  "adviser": {
    "turkishMeaning": "danışman",
    "turkishDefinition": "Belirli bir konuda tavsiye veya bilgi veren uzman kişi.",
    "exampleSentence": "The student met with her academic adviser to plan her courses."
  },
  "campus": {
    "turkishMeaning": "kampüs, yerleşke",
    "turkishDefinition": "Bir üniversitenin veya kolejin binalarının ve arazisinin tamamı.",
    "exampleSentence": "Living on campus makes it easier to attend early morning lectures."
  },
  "complex": {
    "turkishMeaning": "karmaşık",
    "turkishDefinition": "Birçok farklı ama birbiriyle ilişkili parçadan oluşan, anlaşılması güç.",
    "exampleSentence": "The human brain is an incredibly complex organ."
  },
  "emphasis": {
    "turkishMeaning": "vurgu, önem",
    "turkishDefinition": "Bir şeye verilen özel önem veya dikkat.",
    "exampleSentence": "The course puts a strong emphasis on practical skills."
  },
  "innovation": {
    "turkishMeaning": "yenilik, inovasyon",
    "turkishDefinition": "Yeni bir fikir, yöntem veya icadın uygulanması.",
    "exampleSentence": "Technological innovation is key to any country's economic growth."
  },
  "institution": {
    "turkishMeaning": "kuruluş, kurum",
    "turkishDefinition": "Üniversite veya banka gibi büyük ve önemli bir organizasyon.",
    "exampleSentence": "Harvard is one of the oldest educational institutions in the US."
  },
  "manual": {
    "turkishMeaning": "el ile yapılan",
    "turkishDefinition": "Ellerin kullanıldığı, fiziksel güç gerektiren iş.",
    "exampleSentence": "Some people find manual jobs more satisfying than office work."
  },
  "medical": {
    "turkishMeaning": "tıbbi",
    "turkishDefinition": "Hastalık ve yaralanmaların tedavisi ile ilgili olan.",
    "exampleSentence": "She decided to go to medical school to become a doctor."
  },
  "physical": {
    "turkishMeaning": "fiziksel, bedensel",
    "turkishDefinition": "Zihin yerine vücut ile ilgili olan her şey.",
    "exampleSentence": "Regular physical exercise is essential for a healthy life."
  },
  "practical": {
    "turkishMeaning": "pratik, uygulamalı",
    "turkishDefinition": "Düşünceler veya hayaller yerine gerçek durumlar ve deneyimlerle ilgili.",
    "exampleSentence": "The workshop provided practical training for young engineers."
  },
  "professional": {
    "turkishMeaning": "profesyonel, mesleki",
    "turkishDefinition": "Özel eğitim veya eğitim gerektiren bir işle ilgili.",
    "exampleSentence": "It is important to maintain professional behavior at the workplace."
  },
  "reference": {
    "turkishMeaning": "referans",
    "turkishDefinition": "Birinin bir işe uygun olup olmadığını söyleyen tavsiye mektubu.",
    "exampleSentence": "He asked his former professor for a character reference."
  },
  "requirements": {
    "turkishMeaning": "gereksinimler, şartlar",
    "turkishDefinition": "İhtiyaç duyulan veya yapılması zorunlu olan şeyler.",
    "exampleSentence": "Applicants must meet all the entry requirements."
  },
  "secure": {
    "turkishMeaning": "güvenli, sağlam",
    "turkishDefinition": "Güvenilir olan ve değişmesi muhtemel olmayan durum.",
    "exampleSentence": "A secure job provides peace of mind for the future."
  },
  "statement": {
    "turkishMeaning": "açıklama, ifade",
    "turkishDefinition": "Resmi olarak söylenen veya yazılan bir görüş veya bilgi.",
    "exampleSentence": "The company issued an official statement regarding the new policy."
  },
  "technical": {
    "turkishMeaning": "teknik",
    "turkishDefinition": "Bilim ve sanayide kullanılan yöntemler veya makinelerle ilgili.",
    "exampleSentence": "The report was full of technical terms that were hard to understand."
  },
  "alternative": {
    "turkishMeaning": "alternatif, seçenek",
    "turkishDefinition": "Alışılmış olandan farklı olan bir başka seçenek.",
    "exampleSentence": "Solar energy is a clean alternative to fossil fuels."
  },
  "aspect": {
    "turkishMeaning": "yön, taraf, boyut",
    "turkishDefinition": "Bir şeyin belirli bir özelliği veya parçası.",
    "exampleSentence": "Safety is the most important aspect of car design."
  },
  "assignment": {
    "turkishMeaning": "ödev, görev",
    "turkishDefinition": "Üniversitede yazılan bir makale veya verilen bir görev.",
    "exampleSentence": "The students have to submit their history assignment by Friday."
  },
  "community": {
    "turkishMeaning": "topluluk, cemiyet",
    "turkishDefinition": "Aynı bölgede yaşayan veya aynı ilgileri paylaşan insanlar.",
    "exampleSentence": "The local community worked together to clean the park."
  },
  "concrete": {
    "turkishMeaning": "somut",
    "turkishDefinition": "Fikirler yerine gerçek şeylere ve örneklere dayanan.",
    "exampleSentence": "There is no concrete evidence to prove his theory yet."
  },
  "core": {
    "turkishMeaning": "çekirdek, temel",
    "turkishDefinition": "Bir şeyin en merkezi ve en temel olan kısmı.",
    "exampleSentence": "The core subjects in primary school are maths and language."
  },
  "core principles": {
    "turkishMeaning": "temel ilkeler",
    "turkishDefinition": "Bir şeyin temelini oluşturan en önemli değerler.",
    "exampleSentence": "Freedom and equality are the core principles of democracy."
  },
  "credible alternative": {
    "turkishMeaning": "güvenilir alternatif",
    "turkishDefinition": "İnanılabilir ve sağlam bir yedek seçenek.",
    "exampleSentence": "The new bus route is a credible alternative to driving to work."
  },
  "deadline": {
    "turkishMeaning": "son teslim tarihi",
    "turkishDefinition": "Bir şeyin yapılması gereken en son zaman veya gün.",
    "exampleSentence": "The deadline for the project is the end of the month."
  },
  "degree": {
    "turkishMeaning": "derece, üniversite diploması",
    "turkishDefinition": "Üniversiteyi bitiren öğrencilere verilen yeterlilik belgesi.",
    "exampleSentence": "She is going to university to get a degree in biology."
  },
  "discipline": {
    "turkishMeaning": "disiplin, bilim dalı",
    "turkishDefinition": "Üniversitede çalışılan belirli bir akademik alan.",
    "exampleSentence": "Sociology is a fascinating academic discipline."
  },
  "dissertation": {
    "turkishMeaning": "tez, bitirme ödevi",
    "turkishDefinition": "Üniversite derecesi için yazılan çok uzun bilimsel yazı.",
    "exampleSentence": "He is writing his dissertation on renewable energy sources."
  },
  "distance learning": {
    "turkishMeaning": "uzaktan eğitim",
    "turkishDefinition": "Genellikle internet üzerinden yapılan eğitim türü.",
    "exampleSentence": "Distance learning is ideal for people who work full-time."
  },
  "employability": {
    "turkishMeaning": "istihdam edilebilirlik",
    "turkishDefinition": "Birinin iş bulmasını sağlayan beceri ve yetenekleri.",
    "exampleSentence": "Internships are great for improving your employability."
  },
  "establishment": {
    "turkishMeaning": "kuruluş, tesis etme",
    "turkishDefinition": "Uzun süre kalıcı olacak bir şeyi başlatma veya kurma eylemi.",
    "exampleSentence": "The establishment of the new university took five years."
  },
  "examination": {
    "turkishMeaning": "sınav, inceleme",
    "turkishDefinition": "Bir yeterlilik almak için geçilmesi gereken resmi test.",
    "exampleSentence": "The students are busy preparing for their final examinations."
  },
  "in-depth": {
    "turkishMeaning": "derinlemesine, detaylı",
    "turkishDefinition": "Ciddi ve çok ayrıntılı bir şekilde yapılan araştırma.",
    "exampleSentence": "The professor gave an in-depth analysis of the economic situation."
  },
  "illiteracy": {
    "turkishMeaning": "okuma yazma bilmeme",
    "turkishDefinition": "Okuma ve yazma becerisine sahip olmama durumu.",
    "exampleSentence": "Illiteracy is a major barrier to modern education."
  },
  "journal": {
    "turkishMeaning": "akademik dergi",
    "turkishDefinition": "Araştırma makalelerinin toplandığı düzenli bilimsel yayın.",
    "exampleSentence": "His research was published in a leading medical journal."
  },
  "lecturer": {
    "turkishMeaning": "öğretim görevlisi",
    "turkishDefinition": "Üniversitede ders veren ve araştırma yapan kişi.",
    "exampleSentence": "The lecturer explained the theory very clearly."
  },
  "modern phenomenon": {
    "turkishMeaning": "modern fenomen, güncel olay",
    "turkishDefinition": "Son zamanlarda ortaya çıkan yeni bir trend veya durum.",
    "exampleSentence": "Influencer marketing is a modern phenomenon in advertising."
  },
  "motivation": {
    "turkishMeaning": "motivasyon, isteklilik",
    "turkishDefinition": "Bir şeyi yapma isteği veya hevesi.",
    "exampleSentence": "The secret to success is staying high on motivation."
  },
  "online degree": {
    "turkishMeaning": "online diploma",
    "turkishDefinition": "Tamamen internet üzerinden alınan akademik yeterlilik.",
    "exampleSentence": "She earned an online degree while working as a nurse."
  },
  "peer": {
    "turkishMeaning": "akran, eş",
    "turkishDefinition": "Bir gruptaki aynı yaş veya sosyal statüdeki kişi.",
    "exampleSentence": "Children are often influenced by their peers' opinions."
  },
  "plagiarism": {
    "turkishMeaning": "intihal",
    "turkishDefinition": "Başkasının eserini kaynak göstermeden kendininmiş gibi sunmak.",
    "exampleSentence": "Plagiarism is considered a serious academic offence."
  },
  "principle": {
    "turkishMeaning": "prensip, ilke",
    "turkishDefinition": "Bir şeyin nasıl çalıştığını açıklayan temel gerçek.",
    "exampleSentence": "The fundamental principle of justice is fairness to all."
  },
  "pursue": {
    "turkishMeaning": "peşinden koşmak, sürdürmek",
    "turkishDefinition": "Bir şeyi başarmaya veya gerçekleştirmeye çalışmak.",
    "exampleSentence": "She decided to pursue a career in international law."
  },
  "regard": {
    "turkishMeaning": "dikkate almak, saymak",
    "turkishDefinition": "Bir kişi veya şey hakkında belirli bir fikre sahip olmak.",
    "exampleSentence": "He is highly regarded by his colleagues for his honesty."
  },
  "semester": {
    "turkishMeaning": "dönem, sömestr",
    "turkishDefinition": "Üniversite yılının bölündüğü iki dönemden her biri.",
    "exampleSentence": "We will have two major projects this semester."
  },
  "seminar": {
    "turkishMeaning": "seminer",
    "turkishDefinition": "Bir grup insanın tartıştığı ve ders işlediği akademik toplantı.",
    "exampleSentence": "I attended a seminar on modern literature last week."
  },
  "significant": {
    "turkishMeaning": "önemli, anlamlı",
    "turkishDefinition": "Önemli, büyük veya dikkate değer olan.",
    "exampleSentence": "There is a significant difference between the two products."
  },
  "specific": {
    "turkishMeaning": "belirli, özel",
    "turkishDefinition": "Belirli bir şeye özgü olan; genel olmayan.",
    "exampleSentence": "Could you be more specific about what you need?"
  },
  "stigma": {
    "turkishMeaning": "damga, leke",
    "turkishDefinition": "Toplumun bir şeye karşı duyduğu haksız dışlama hissi.",
    "exampleSentence": "There is often a social stigma attached to mental illness."
  },
  "technological advances": {
    "turkishMeaning": "teknolojik ilerlemeler",
    "turkishDefinition": "Teknoloji alanındaki yeni gelişmeler ve iyileştirmeler.",
    "exampleSentence": "Technological advances have changed the way we communicate."
  },
  "term": {
    "turkishMeaning": "dönem, terim",
    "turkishDefinition": "Okul veya üniversite yılının bölündüğü üç dönemden biri.",
    "exampleSentence": "The exams are always at the end of the spring term."
  },
  "tutor": {
    "turkishMeaning": "özel öğretmen, danışman hoca",
    "turkishDefinition": "Öğrencilerin akademik gelişiminden sorumlu olan hoca.",
    "exampleSentence": "If you struggle with maths, you might need a private tutor."
  },
  "virtual": {
    "turkishMeaning": "sanal",
    "turkishDefinition": "Gerçek gibi olan ancak teknolojik ortamda var olan.",
    "exampleSentence": "The company offers virtual tours of their main headquarters."
  },
  "virtual classroom": {
    "turkishMeaning": "sanal sınıf",
    "turkishDefinition": "Öğrencilerin internet üzerinden katıldığı eğitim ortamı.",
    "exampleSentence": "Virtual classrooms are becoming more common in universities."
  }
};

const filePath = 'c:/Users/yunus/Desktop/Uygulama/src/data/b1b2-seed-words.ts';
let content = fs.readFileSync(filePath, 'utf8');

for (const [english, data] of Object.entries(unit2Data)) {
  const regex = new RegExp(`(\\{[^}]*?"english":\\s*"${english}"[^}]*?"tags":\\s*\\[[^\\]]*?"Unit 2"[^}]*?\\})`, 'g');
  
  content = content.replace(regex, (match) => {
    let updated = match;
    updated = updated.replace(/"turkishMeaning":\s*".*?"/, `"turkishMeaning": "${data.turkishMeaning}"`);
    updated = updated.replace(/"turkishDefinition":\s*".*?"/, `"turkishDefinition": "${data.turkishDefinition}"`);
    updated = updated.replace(/"exampleSentence":\s*".*?"/, `"exampleSentence": "${data.exampleSentence}"`);
    return updated;
  });
}

fs.writeFileSync(filePath, content);
console.log('Unit 2 words updated successfully.');
