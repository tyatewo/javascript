// 定数animalsに、指定された配列を代入してください
const animals = ["dog", "cat", "sheep"];

// 定数animalsを出力して下さい
console.log (animals);



//#########################
const animals = ["dog", "cat", "sheep"];

// 配列の1つ目の要素を出力してください
console.log (animals[0]);

// 配列の3つ目の要素を出力してください
console.log (animals[2]);



//#########################
const animals = ["dog", "cat", "sheep"];

// 配列animalsの3つ目の要素を「rabbit」に更新してください
animals[2] = "rabbit";

// 配列animalsの3つ目の要素をコンソールに表示して下さい
console.log (animals[2]);

// ・const animals[2] = "rabbit";とはできない。
// constだから性質上変更できない。元の3つの要素が入った配列を要素１つの配列（？）に上書きできないから。




// #########################
const animals = ["dog", "cat", "sheep"];

// for文を用いて、配列の値を順にコンソールに出力してください
for(let i = 0; i < 3; i++){
  console.log(animals[i]);
}




// #########################
const animals = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"];

// lengthを用いて配列の要素の数を出力してください
console.log(animals.length);

// lengthを用いて条件式を書き換えてください
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}




// #########################
// 定数characterを定義し、指定されたオブジェクトを代入してください
const character = {name: "にんじゃわんこ", age: 14};

// characterの値を出力してください
console.log (character);




// #########################
const character = {name: "にんじゃわんこ", age: 14};

// characterのnameの値を出力してください
console.log (character.name);

// characterのageの値を「20」に更新してください
character.age = 20;

// characterをコンソールに出力してください
console.log (character);





// #########################
const characters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 1000}
];

// charactersの1つ目の要素をコンソールに出力してください
console.log (characters[0]);

// charactersの2つ目の要素の「name」に対応する値をコンソールに出力してください
console.log (characters[1].name);





// #########################
const characters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 100},
  {name: "ベイビーわんこ", age: 5},
];




// for文を完成させてください
for (let i = 0; i < characters.length; i++) {
  console.log(characters[i]);
  
  // 定数characterを定義してください
  const character = characters[i];
  
  // 「名前は〇〇です」を出力してください
  
  console.log (`名前は${character.name}です`);
  // 「〇〇歳です」を出力してください
  console.log (`${character.age}歳です`);
  
}





// #########################
const characters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 100},
  {name: "ベイビーわんこ", age: 5},
  {name: "とりずきん"}
];

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  const character = characters[i];
  
  console.log(`名前は${character.name}です`);
  
  // if文を追加してください
  if(character.age==undefined){
    console.log("年齢は秘密です");
  }else{
    console.log(`${character.age}歳です`);
  }
  
  
}




// #########################
const cafe = {
  name: "Progateカフェ",
  businessHours: {
    // businessHoursの値に指定されたオブジェクトを代入してください
    opening: "10:00(AM)",
    closing: "8:00(PM)"
  }
};

// 「店名:〇〇」を出力してください
console.log(`店名:${cafe.name}`);

// 「営業時間:〇〇から△△」を出力してください
console.log(`営業時間: ${cafe.businessHours.opening}から${cafe.businessHours.closing}`);




// #########################
const cafe = {
  name: "Progateカフェ",
  businessHours: { 
    opening: "10:00(AM)",
    closing: "8:00(PM)"
  },
  // menusプロパティに配列を代入してください
  menus: ["コーヒー", "紅茶", "チョコレートケーキ"]
  
};

console.log(`店名: ${cafe.name}`);
console.log(`営業時間:${cafe.businessHours.opening}から${cafe.businessHours.closing}`);
console.log(`----------------------------`);
console.log("おすすめメニューはこちら");

// for文を用いて配列menusの中身を表示させてください
for(let i = 0; i < cafe.menus.length; i++) {
  console.log(cafe.menus[i]);
}