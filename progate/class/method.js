// メソッドはクラスの中で行う。

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // greetメソッドを追加してください
  greet() {
    console.log("こんにちは");
  }
  
}

const animal = new Animal("レオ", 3);

console.log(`名前: ${animal.name}`);
console.log(`年齢: ${animal.age}`);

// animalに対してgreetメソッドを呼び出してください
animal.greet();

// ###################################################
// クラス内のメソッドでプロパティを使うときは、this.ooにする。

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  // infoメソッドを追加してください
  info() {
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
  
}

const animal = new Animal("レオ", 3);
animal.greet();

// animalに対してinfoメソッドを呼び出してください
animal.info();

// ###################################################
// メソッド内で他のメソッドも呼び出すことができる。

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  info() {
    // greetメソッドを呼び出してください
    this.greet();
    
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

const animal = new Animal("レオ", 3);

animal.info();

// 出力は、
// こんにちは
// 名前はレオです
// 3歳です
// になる。