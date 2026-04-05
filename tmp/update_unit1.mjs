import fs from 'fs';
import path from 'path';

const unit1Data = {
  "consumer": {
    "turkishMeaning": "tüketici",
    "turkishDefinition": "Mal veya hizmet satın alan veya kullanan kişi.",
    "exampleSentence": "Most consumers today prefer organic products."
  },
  "cost": {
    "turkishMeaning": "maliyet",
    "turkishDefinition": "Bir şeyi satın almak veya yapmak için gereken para miktarı.",
    "exampleSentence": "The production cost of this car is very high."
  },
  "discount": {
    "turkishMeaning": "indirim",
    "turkishDefinition": "Bir malın fiyatında yapılan azalma veya eksiltme.",
    "exampleSentence": "Is there a discount for students in this store?"
  },
  "domestic": {
    "turkishMeaning": "yerli, iç",
    "turkishDefinition": "Bir kişinin kendi ülkesiyle veya ev yaşamıyla ilgili olan.",
    "exampleSentence": "Domestic flights are currently cheaper than international ones."
  },
  "export": {
    "turkishMeaning": "ihracat",
    "turkishDefinition": "Başka bir ülkeye satmak amacıyla mal göndermek.",
    "exampleSentence": "Turkey exports many high-quality textiles to Europe."
  },
  "goods": {
    "turkishMeaning": "eşya, mallar",
    "turkishDefinition": "Ticaret amacıyla üretilen ve satılan ürünler.",
    "exampleSentence": "The truck was carrying industrial goods."
  },
  "greenhouse": {
    "turkishMeaning": "sera",
    "turkishDefinition": "Bitkilerin sabit sıcaklıkta yetiştiği cam veya plastik bina.",
    "exampleSentence": "We grow our organic tomatoes in a greenhouse."
  },
  "import": {
    "turkishMeaning": "ithalat",
    "turkishDefinition": "Başka bir ülkeden satmak veya kullanmak amacıyla mal getirmek.",
    "exampleSentence": "The country needs to import more energy to meet demand."
  },
  "investigate": {
    "turkishMeaning": "araştırmak, incelemek",
    "turkishDefinition": "Gerçeği ortaya çıkarmak için bir şeyi dikkatle muayene etmek.",
    "exampleSentence": "The police are investigating the cause of the accident."
  },
  "labour": {
    "turkishMeaning": "iş gücü, emek",
    "turkishDefinition": "Özellikle el ile yapılan fiziksel çalışma veya işçiler.",
    "exampleSentence": "Manual labour is still important in some industries."
  },
  "multinational": {
    "turkishMeaning": "çok uluslu",
    "turkishDefinition": "Birden fazla ülkede aktif olarak faaliyet gösteren şirket.",
    "exampleSentence": "Coca-Cola is a successful multinational company."
  },
  "outsourcing": {
    "turkishMeaning": "dış kaynak kullanımı",
    "turkishDefinition": "Bir şirketin işinin bir kısmını başka bir şirkete yaptırması.",
    "exampleSentence": "Outsourcing IT services can save the company money."
  },
  "overseas": {
    "turkishMeaning": "yurt dışı, deniz aşırı",
    "turkishDefinition": "Kendi ülkesinin dışındaki ülkelerde veya ülkelere.",
    "exampleSentence": "Many students want to study overseas for a year."
  },
  "produce (n)": {
    "turkishMeaning": "tarım ürünü",
    "turkishDefinition": "Çiftçilik yoluyla yetiştirilen veya elde edilen yiyecekler.",
    "exampleSentence": "The farmer sells his fresh produce at the local market."
  },
  "produce (v)": {
    "turkishMeaning": "üretmek",
    "turkishDefinition": "Bir şeyi oluşturmak veya varlık kazanmasını sağlamak.",
    "exampleSentence": "This factory produces thousands of toys every day."
  },
  "production costs": {
    "turkishMeaning": "üretim maliyetleri",
    "turkishDefinition": "Bir şeyi üretmek için harcanan toplam para miktarı.",
    "exampleSentence": "High energy prices have increased production costs."
  },
  "profit": {
    "turkishMeaning": "kâr",
    "turkishDefinition": "Gelir ile gider arasındaki olumlu fark; kazanç.",
    "exampleSentence": "The company made a huge profit this year."
  },
  "prosperity": {
    "turkishMeaning": "refah, zenginlik",
    "turkishDefinition": "Başarılı olma ve çok paraya sahip olma durumu.",
    "exampleSentence": "Economic prosperity is the goal of every nation."
  },
  "purchase": {
    "turkishMeaning": "satın almak",
    "turkishDefinition": "Bir mülkü veya malı para karşılığı edinmek.",
    "exampleSentence": "You can purchase the tickets online or at the station."
  },
  "supply chain": {
    "turkishMeaning": "tedarik zinciri",
    "turkishDefinition": "Bir ürünün üretimden tüketiciye ulaşana kadarki süreci.",
    "exampleSentence": "Any break in the supply chain can cause delays."
  },
  "transport": {
    "turkishMeaning": "nakliyat, ulaşım",
    "turkishDefinition": "İnsanların veya malların bir yerden başka yere taşınması.",
    "exampleSentence": "Public transport is a great way to reduce traffic."
  },
  "confuse": {
    "turkishMeaning": "kafasını karıştırmak",
    "turkishDefinition": "Birinin zihnini karıştırmak veya bir şeyi zorlaştırmak.",
    "exampleSentence": "Too many options can confuse the customers."
  },
  "consumption": {
    "turkishMeaning": "tüketim",
    "turkishDefinition": "Birinin aşındırdığı, yediği veya kullandığı miktar.",
    "exampleSentence": "The consumption of electricity increases in winter."
  },
  "continue": {
    "turkishMeaning": "devam etmek",
    "turkishDefinition": "Bir şeyin olmaya, var olmaya veya yapılmaya sürmesi.",
    "exampleSentence": "We will continue our discussion after the break."
  },
  "convenience": {
    "turkishMeaning": "kolaylık, uygunluk",
    "turkishDefinition": "Bir şeyin amaçlarınıza uygun ve en az zorluktaki durumu.",
    "exampleSentence": "Online banking offers a lot of convenience to users."
  },
  "dominant": {
    "turkishMeaning": "baskın, egemen",
    "turkishDefinition": "Kendi türündeki her şeyden daha önemli veya güçlü olan.",
    "exampleSentence": "English is the dominant language in international business."
  },
  "ensure": {
    "turkishMeaning": "garantiye almak",
    "turkishDefinition": "Bir şeyin yapıldığından veya olduğundan emin olmak.",
    "exampleSentence": "Please ensure that all windows are closed before leaving."
  },
  "exclude": {
    "turkishMeaning": "hariç tutmak",
    "turkishDefinition": "Birinin bir yer girmesini veya aktiviteye katılmasını önlemek.",
    "exampleSentence": "The price excludes breakfast and other extra costs."
  },
  "exhaust": {
    "turkishMeaning": "tüketmek, bitirmek",
    "turkishDefinition": "Bir şeyi tamamen kullanmak veya bitirmek.",
    "exampleSentence": "We have exhausted all our options for this problem."
  },
  "experiment": {
    "turkishMeaning": "deney, deneme",
    "turkishDefinition": "Yeni bir yolu test etmek veya denemek için yapılan işlem.",
    "exampleSentence": "Scientists are conducting an experiment on new fuels."
  },
  "increase": {
    "turkishMeaning": "artırmak, çoğalmak",
    "turkishDefinition": "Bir şeyin daha büyük veya daha fazla hale gelmesi.",
    "exampleSentence": "The population of the city continues to increase."
  },
  "inflation": {
    "turkishMeaning": "enflasyon",
    "turkishDefinition": "Bir ekonomideki fiyatların sürekli olarak yükselmesi.",
    "exampleSentence": "High inflation reduces the purchasing power of people."
  },
  "influence": {
    "turkishMeaning": "etki",
    "turkishDefinition": "İnsanlar veya şeyler üzerinde etkili olma gücü.",
    "exampleSentence": "Social media has a big influence on young people."
  },
  "monopoly": {
    "turkishMeaning": "tekel",
    "turkishDefinition": "Bir iş alanının tamamına sahip olup başkasına yer bırakmamak.",
    "exampleSentence": "The state had a monopoly on the postal service."
  },
  "outlet": {
    "turkishMeaning": "satış noktası",
    "turkishDefinition": "Bir şirketin ürünlerini satan perakende mağazası.",
    "exampleSentence": "Apple has many retail outlets all around the world."
  },
  "refuse": {
    "turkishMeaning": "reddetmek",
    "turkishDefinition": "Bir şeyi yapmayı veya kabul etmeyi istemediğini söylemek.",
    "exampleSentence": "I had to refuse the invitation because I was busy."
  },
  "relatively": {
    "turkishMeaning": "nispeten, oldukça",
    "turkishDefinition": "Diğer benzer şeylerle karşılaştırıldığında oldukça iyi/kötü.",
    "exampleSentence": "The test was relatively easy compared to the last one."
  },
  "remove": {
    "turkishMeaning": "çıkarmak, kaldırmak",
    "turkishDefinition": "Bir şeyi veya birini bir yerden alıp başka yere götürmek.",
    "exampleSentence": "You must remove your shoes before entering the house."
  },
  "reputation": {
    "turkishMeaning": "itibar, ün",
    "turkishDefinition": "Birinin karakteri hakkında insanların sahip olduğu genel görüş.",
    "exampleSentence": "The hotel has a very good reputation for its service."
  },
  "selling point": {
    "turkishMeaning": "satış noktası, cazip özellik",
    "turkishDefinition": "İnsanları bir ürünü satın almaya ikna eden özellik.",
    "exampleSentence": "The long battery life is a big selling point for this phone."
  },
  "specialty": {
    "turkishMeaning": "uzmanlık alanı, özel ürün",
    "turkishDefinition": "Bir yerin veya kişinin özellikle tanındığı ürün veya konu.",
    "exampleSentence": "Seafood is the specialty of this local restaurant."
  },
  "study": {
    "turkishMeaning": "incelemek, çalışmak",
    "turkishDefinition": "Bir şeyi yeni bilgiler keşfetmek için dikkatle incelemek.",
    "exampleSentence": "Researchers are studying the effects of the new drug."
  },
  "supplier": {
    "turkishMeaning": "tedarikçi",
    "turkishDefinition": "Belirli bir tür mal sağlayan kişi veya şirket.",
    "exampleSentence": "We need to find a new supplier for office materials."
  }
};

const filePath = 'c:/Users/yunus/Desktop/Uygulama/src/data/b1b2-seed-words.ts';
let content = fs.readFileSync(filePath, 'utf8');

// We need to parse the array of objects
// This is a regex approach to find objects based on english word and Unit 1 tag
// Note: Some words might have different phonetic pronunciations (produce)

for (const [english, data] of Object.entries(unit1Data)) {
  // Try to find the block for this word with "Unit 1"
  // We match based on english name and ensure "Unit 1" is in tags
  const regex = new RegExp(`(\\{[^}]*?"english":\\s*"${english}"[^}]*?"tags":\\s*\\[[^\\]]*?"Unit 1"[^}]*?\\})`, 'g');
  
  content = content.replace(regex, (match) => {
    let updated = match;
    updated = updated.replace(/"turkishMeaning":\s*".*?"/, `"turkishMeaning": "${data.turkishMeaning}"`);
    updated = updated.replace(/"turkishDefinition":\s*".*?"/, `"turkishDefinition": "${data.turkishDefinition}"`);
    updated = updated.replace(/"exampleSentence":\s*".*?"/, `"exampleSentence": "${data.exampleSentence}"`);
    return updated;
  });
}

fs.writeFileSync(filePath, content);
console.log('Unit 1 words updated successfully.');
