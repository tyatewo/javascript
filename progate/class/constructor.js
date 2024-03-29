// コンストラクタについて

// クラスにある機能でコンストラクタはインスタンスを生成するときに、実行したい処理や設定を追加するための機能。

class Animal {
  // コンストラクタを追加してください
  constructor(){
    console.log("インスタンスを生成しました");
  }

}

const animal = new Animal();

// 出力は、インスタンスを生成しましたとなる。

// ###################################################

// コンストラクタ内に設定を追加

class Animal {
  constructor() {
    // nameの値に文字列「レオ」を代入してください
    this.name="レオ";

    // ageの値に数値の「3」を代入してください
    this.age=3;
  }
}

const animal = new Animal();

// 「名前: 〇〇」となるように出力してください
console.log(`名前：${animal.name}`);

// 「年齢: 〇〇」となるように出力してください
console.log(`年齢：${animal.age}`);

// ###################################################

// 引数を受け取れるようにする

class Animal {
  // 引数に「name」と「age」を追加してください
  constructor(name,age) {
    // 「"レオ"」の代わりに引数nameの値を代入してください
    this.name = name;

    // 「3」の代わりに引数ageの値を代入してください
    this.age = age;
  }
}

// 引数に「"モカ"」と「8」を渡してください
const animal = new Animal("モカ", 8);

console.log(`名前: ${animal.name}`);
console.log(`年齢: ${animal.age}`);
