// 定数animalを定義してください
const animal = {
  name: "レオ",
  age: 3,
  greet: () => {
    console.log("こんにちは");
  }
};

// animalのnameプロパティの値を出力してください
console.log(animal.name);

// animalのgreetプロパティの関数を実行してください
animal.greet();

// ###################################################
// アロー関数は独立した関数としてみたほうがいい。
// アロー関数はthisは使えない。
// ###################################################
// functionを使えばthisが使える。

const animal = {
  name: "レオ",
  age: 3,
  greet: function() {
    console.log("こんにちは、私は" + this.name + "です！");
  }
};

animal.greet();

// 出力は、「こんにちは、私はレオです！」と出力される。
// function（通常）関数を使ったgreetプロパティでは、this.nameがanimalオブジェクトのnameプロパティを指す。


// ###################################################
// アロー関数の場合

// 定数animalを定義してください
const animal = {
  name: "レオ",
  age: 3,
  greet: () => {
    console.log("こんにちは、私は" + animal.name + "です！");
  }
};

// animalのgreetプロパティの関数を実行してください
animal.greet();


// 出力は、「こんにちは、私はレオです！」と出力される。

// アロー関数ではthisが使えないため、名前を持ってくるにはanimal.nameとしなければいけない。
// そのため、アロー関数は独立した関数としてみなければいけない。

// ###################################################