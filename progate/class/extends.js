// 継承について
// すでにあるクラスをもとに新しくクラスを作ること。

// Animalクラスを継承してDogクラスを定義してください
class Dog extends Animal {
  
}

extends=借りる

// Animalクラスのすべての機能をDogクラスに引き継ぐことができる。

// ###################################################

// Animalクラスを丸々持ってきたため、何も書かなくても、引数を渡してあげると処理が実行される。

class Dog extends Animal {
}

// 定数dogにDogクラスのインスタンスを代入してください
const dog = new Dog("レオ", 4);

// dogに対してinfoメソッドを呼び出してください
dog.info();

// ###################################################
// 継承したものに追加設定もできる。
// メソッドの中でreturn(戻り値)も使える。

class Dog extends Animal {
  // getHumanAgeメソッドを追加してください
  getHumanAge() {
    return this.age * 7;
  }

}

const dog = new Dog("レオ", 4);
dog.info();

// 定数humanAgeを定義し、定数dogに対してgetHumanAgeメソッドを呼び出した値を代入してください
const humanAge = dog.getHumanAge();

// 「人間年齢で〇〇歳です」と出力してください
console.log(`人間年齢で${humanAge}歳です`);

// ###################################################

// 親クラスで設定したinfo()は
// 子クラスでも同じものが使われている。
// この時、子クラスの方で実行したとき、どっちが呼び出されるか。
// オーバーライドといって、子クラスで設定された内容が反映されるようになっている。
// そのため、子クラスで、info()の設定を追加していればその追加版を出力するようになっている。

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

class Dog extends Animal {
  // infoメソッドを追加してください
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
    
    const humanAge = this.getHumanAge();
    console.log(`人間年齢で${humanAge}歳です`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}

const dog = new Dog("レオ", 4);
dog.info();

// この場合、子クラスでは
// こんにちは
// 名前はレオです
// ４歳です
// 人間年齢で２８歳です
// と出力される。

// 引っ張ってきたまんま（設定追加前）では
// こんにちは
// 名前はレオです
// ４歳です
// となる

// ###################################################
// superは、親クラスで設定されているコンストラクタに変更や追加をした場合に、
// 親から持ってきたコンストラクタの引数を再度初期化する仕組みになっている。

// なのでこの場合、子クラスに追加でbreedという引数があるため、
// それ以外の親から来た、nameとageは再度初期化しなければならない。

// 逆に、親から持ってきたコンストラクタで特に変更や追加をしなければ、
// superで初期化する必要はない。


class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

class Dog extends Animal {
  // constructorを追加してください
  constructor(name,age,breed){
    super(name,age);
    
    this.breed=breed;
  }
  
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    // 「犬種は〇〇です」と出力してください
    console.log(`犬種は${this.breed}です`);
    
    console.log(`${this.age}歳です`);
    const humanAge = this.getHumanAge();
    console.log(`人間年齢で${humanAge}歳です`);
  }
  
  getHumanAge() {
    return this.age * 7;
  }
}

// 3つ目の引数に「"チワワ"」を渡してください
const dog = new Dog("レオ", 4, "チワワ");
dog.info();

