const greet = function() {
  console.log("こんにちは！");
  console.log("関数を学習していきましょう！");
};

// 関数を呼び出してください

greet();

// ###############################

// 定数helloに関数を代入してください
const hello = function() {
  console.log("こんにちは！");
  console.log("私の名前はちゃーです");
}


// 定数helloに代入された関数を呼び出してください
hello();

// ###############################
//  解説
// 引数を持つ関数の定義
function sayHello(name) {
  console.log("こんにちは、" + name + "さん！");
}

// 関数を呼び出す
sayHello("太郎"); // 結果：こんにちは、太郎さん！
sayHello("花子"); // 結果：こんにちは、花子さん！
sayHello(); // 結果：こんにちは、undefinedさん！（引数が指定されていないためnameはundefinedとなる）


// ###############################
// 定数greetにアロー関数を代入してください
const greet = () => {
  console.log("こんにちは！");
}

// 定数greetを呼び出してください
greet();


// ###############################
// 関数の引数にnameを追加してください
const greet = (name) => {
  // 「こんにちは、〇〇さん」となるように出力してください
  console.log(`こんにちは、${name}さん`);
  
};

// greetの引数に「ひつじ仙人」を渡して呼び出してください
greet("ひつじ仙人");

// ###############################
// 関数の引数にnumber1とnumber2を追加してください
const add = (number1, number2) => {
  // number1とnumber2を足した値をコンソールに出力してください
  console.log(number1+number2);
};

// 引数に5と7を渡して関数を呼び出してください
add(5,7);

// ###############################


const half = (number) => {
  // numberを2で割った値を戻り値として返してください
  return number/2;
};

// 定数resultを定義してください
const result = half(130);

// 「130の半分は〇〇です」となるように出力してください
console.log(`130の半分は${result}です`);


// ###############################

const check = (number) => {
  // numberが3の倍数かどうかを戻り値として返してください
  return number % 3 === 0;
};

// if文の条件式で、checkを呼び出してください
if (check(123)) {
  console.log("3の倍数です");
} else {
  console.log("3の倍数ではありません");
}


// ###############################

// 関数の外側に定数nameを定義してください
const name= "ひつじ仙人";

const introduce = () => {
  // 関数の内側に定数nameを定義してください
  const name= "にんじゃわんこ";

  // 定数nameを出力してください
  console.log(name);
  
};

introduce();

// コードを貼り付けて、定数nameを出力してください。
console.log(name);

// ###############################

// toMinutes関数を定義してください
const toMinutes= (hour, minute) => {
  return hour*60+minute;
}

// 定数resultに、toMinutes関数の戻り値を代入してください
const result = toMinutes(3, 20);

// 「◯◯分」となるように、分に換算した結果を出力してください
console.log(`${result}分`);

