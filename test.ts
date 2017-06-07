const val = () => {
  return Object.assign({}, {a:2})
}

class TestClass {
  private hoge: number = 234;
  private privateMethod() {
    return this.hoge;
  }
  public publicMethod() {
    return this.hoge;
  }
}

const testClass = new TestClass();
console.log(testClass.publicMethod())
// console.log(testClass.privateMethod())    // error!


interface TestVueObj {
  readonly hoge: number;
}

const testVueObj: TestVueObj = {
  hoge: 13
};

console.log(testVueObj.hoge)

// private property
// testVueObj.hoge = 431234;   // error!

/*
  TypeScriptはsyntaxのみ変更する Object.assignは変更されない
  babelを使ってたから前職ではIEで動いていた
*/ 
