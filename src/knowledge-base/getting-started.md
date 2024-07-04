# JS对象已经存在29个方法了，来看看你知道多少

> 作者：iceCode
链接：https://juejin.cn/post/7294072846129004585
来源：稀土掘金

# 前言
在js中，对象类型是非常重要的类型之一，也是项目中数据处理常用的类型之一，虽然这种类型我们经常使用，但是它的方法却不怎么用的到或者很少用到，**不知不觉js的对象方法已经来到了29个了**，今天就来看看这29个方法的使用。
还有当typeof Array的时候，会发现数组是一个对象类型，也可以说数组是一个特殊的对象，所以大多对象的方法都可以对数组使用，而且有些效果可能会使你大跌眼镜。
# 正文
## Object.defineProperty 劫持对象属性
了解vue的应该都比较熟悉这个方法了，因为在vue2中，底层的响应拦截就是使用的Object.defineProperty加观察者模式实现的。首先说这个是因为**描述对象**在后面一些方法中都会使用到。
Object.defineProperty方法接收三个参数，第一个为目标对象，第二个是要添加或修改的属性，三个为**描述对象**，返回传入的对象。
描述对象的属性：

- configurable是否可配置的：默认为false，当为false的时候，该属性无法被配置。
- enumerable是否可枚举：默认false,当为false的时候，该属性无法被枚举，也是就是使用in操作符，或者for in 的时候无法被找到。
- writable是否可写：默认false，当为false的时候，该属性无法被修改。
- value属性值：默认undefined，可以是js中的任何类型任何值
- get方法：返回值默认undefined。当访问该属性的时候会调用此方法，访问时，所得到的属性值是该方法的返回值。
- set方法：默认值为undefined。当修改该属性时会调用此方法。

注意：当配置对象中存在value和writable属性时，不应该存在get和set方法，反之亦然。当value属性和get方法同时存在时，会报错。
```javascript
const obj = { name: "iceCode" };
//这里接不接收返回值都可以，因为返回也是传入的对象。
//age属性值不存在obj对象里，这里就会新增。
const newObj = Object.defineProperty(obj, "age", {
  value: "12",
  configurable: true,
  writable: true,
  enumerable: true,
});
console.log(newObj, obj, newObj === obj);
//{ name: 'iceCode', age: '12' }
//{ name: 'iceCode', age: '12' }
//true
```
如果非要在添加value的时候添加get和set方法则会报错。
```javascript
const obj = { name: "iceCode" };
//这里接不接收返回值都可以，因为返回也是传入的对象。
//age属性值不存在obj对象里，这里就会新增。
const newObj = Object.defineProperty(obj, "age", {
  value: "12",
  configurable: true,
  writable: true,
  enumerable: true,
  get() {
    return this.value;
  },
  set(val) {
    this.value = val;
  },
});
```
![](https://cdn.nlark.com/yuque/0/2024/webp/314561/1716180204238-31fc1a97-a7e2-4c4b-a7b7-1b8f092f6b49.webp#averageHue=%23f3f7ec&clientId=uf4be30f5-ddad-4&from=paste&id=u78cf6744&originHeight=47&originWidth=581&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uc32e3b1f-864e-4ae2-90d0-279262ea7a8&title=) 
使用get和set来改变对象属性，有些情况可能我们在vue的项目中见到过，当打印当前数据的时候发现控制台中显示的数据并不是最新的，但是展开之后，反而却显示最新的数据了。
这是因为 JavaScript 中的对象是动态的，随时可能发生变化。当你使用 console.log 打印对象时，实际上是获取了这个对象在打印时的状态，而不是实时状态。而当你展开一个对象时，实际上是重新获取了这个对象的所有属性值，因此你看到的是最新的状态。
```javascript
const obj = { name: "iceCode" };
let value = 12;
const newObj = Object.defineProperty(obj, "age", {
  enumerable: true,
  configurable: true,
  get() {
    return value;
  },
  set(val) {
    value = val;
  },
});
//在这里打印的数据可能在vue的项目见过
console.log(newObj, obj, newObj === obj);
```
![](https://cdn.nlark.com/yuque/0/2024/webp/314561/1716180204165-1d8bdefc-fa23-491f-85db-f700582af907.webp#averageHue=%23edece7&clientId=uf4be30f5-ddad-4&from=paste&id=ud89c89ea&originHeight=121&originWidth=521&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u3db18c34-00e2-4ca0-aedd-111f82a2369&title=)
 对象说完了，但是当目标对象是一个数组的时候呢，结果又是如何的。
```javascript
const arr: string[] = [];
const newObj = Object.defineProperty(arr, "age", {
  value: "iceCode",
  writable: true,
  enumerable: true,
  configurable: true,
});
//返回值和目标对象是同一个，所以打印哪个都是一样的
console.log(newObj);
```
猜到结果了吗？见过这种类型没。 
![](https://cdn.nlark.com/yuque/0/2024/webp/314561/1716180204156-ad152b8f-e028-42dc-850b-defed0b7c875.webp#averageHue=%23f8f8f4&clientId=uf4be30f5-ddad-4&from=paste&id=u44dfd97c&originHeight=80&originWidth=272&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=udb1b7f16-93fc-4221-a6d7-fef0addc1fc&title=) 
那么这种类型是数组还是对象，访问它里面的值得时候又该如何访问呢
```
//这里打印一下他们的结果
console.log(newObj);
console.log(Array.isArray(newObj));
console.log(newObj[0]);
console.log(newObj.age);
```
![](https://cdn.nlark.com/yuque/0/2024/webp/314561/1716180204245-c559149e-a0e1-4109-9a34-8d5becce1b14.webp#averageHue=%23fbfcf7&clientId=uf4be30f5-ddad-4&from=paste&id=u1d39bee6&originHeight=160&originWidth=565&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u5ee4cfbf-1e82-4498-a42e-874e434e2f1&title=) 
这时再看这个数组它能使用那种方法遍历呢？
```javascript
//这里为了更清晰得看出结果，数组中添加了一个数据
const arr: string[] = ["222"];
const newObj = Object.defineProperty(arr, "age", {
  value: "iceCode",
  writable: true,
  enumerable: true,//这里确定是可枚举得
  configurable: true,
});
//使用三种方法来遍历这个数组
for (const value of newObj) {
  console.log(value, "for of");
}
newObj.forEach((item) => {
  console.log(item, "forEach");
});
for (const key in newObj) {
  console.log(key, newObj[key], "for in");
}
```
![](https://cdn.nlark.com/yuque/0/2024/webp/314561/1716180204248-5573f411-48fc-43ad-ac8c-9513e2d3572b.webp#averageHue=%23fbfcf8&clientId=uf4be30f5-ddad-4&from=paste&id=u0f554c2b&originHeight=114&originWidth=566&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u0071b86c-91af-4fe8-bcdc-eb32236c806&title=) 
使用Object.defineProperty往数组中添加一个对象可以得到一个令人大跌眼镜得效果，但这个添加得对象也属于是身在曹营心在汉了，即便是在数组中，但想要访问它或者遍历它必须要使用对象得方式才能得到它。
那如果对这个数组添加元素或者修改元素，又或者使用属性名修改元素又是怎么样的呢？
```javascript
//看着有些奇怪的操作
newObj.push("123");
newObj.name = "不存在的";
newObj.age = 18;
newObj[2] = "以存在的";
console.log(newObj);
```
最后的结果是相互不影响的，属性值可被更改，没有的属性可以被添加，使用push添加的元素已索引的形式单独存在。 ![](https://cdn.nlark.com/yuque/0/2024/webp/314561/1716180204499-a63f061f-c1fb-4cba-ade2-348ce0209c90.webp#averageHue=%23f7f3ee&clientId=uf4be30f5-ddad-4&from=paste&id=u4ad7a4d7&originHeight=118&originWidth=444&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ud8fcbee6-6c9c-4792-807b-d1ccd549370&title=)
## Object.defineProperties 劫持对象
这个方法可以说是Object.defineProperty的强化版，相比较于Object.defineProperty每次只能劫持一个属性对其配置，这个方法可以一次性对多个属性进行劫持。
Object.defineProperties接收两个参数，第一个目标对象，第二个是一个对象，对象的每一个key就是要劫持属性值，对象的value是该属性值的**配置对象**。返回目标对象。
```javascript
const obj = { name: "iceCode" };
const newObj = Object.defineProperties(obj, {
  //对于已经有的属性，会修改当前值
  name: {
    value: "icedCode",
    writable: true,
    enumerable: true,
  },
  //对于没有的会新增
  age: {
    value: 18,
    writable: true,
    enumerable: true,
  },
});
console.log(newObj);//{name: 'icedCode', age: 18}
```
假如目标对象是一个数组的话和Object.defineProperty是一样的,获取修改和添加值也都是相同的操作。
![](https://cdn.nlark.com/yuque/0/2024/webp/314561/1716180204535-725a9625-af9a-432c-bd2a-2c8ec0b78956.webp#averageHue=%23fcfcfb&clientId=uf4be30f5-ddad-4&from=paste&id=ua93d8073&originHeight=99&originWidth=356&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ud2a45d9c-5204-476f-9773-c3aca3e4e88&title=)
## Object.assign 对对象的浅拷贝
Object.assign接收两个参数或以上的参数，第一个参数是目标对象，第二个或多是被拷贝的对象，返回目标对象本身。 **这里的浅拷贝是将被拷贝对象的属性赋值到目标对象上**
```javascript
const obj = { name: "iceCode" };
const age = { age: 18 };
const my= { interest: ["唱", "跳", "rap", "篮球"] }
const newObj = Object.assign(obj, age, my);
//这里返回值和目标对象是同一个对象
console.log(newObj, newObj === obj);//{name: 'iceCode', age: 18,  interest: ["唱", "跳", "rap", "篮球"]} true

//这里修改obj的age属性是不会影响到原对象的age，但是修改interest里数组的内容是会改变原对象的属性值的
obj.age = 24;
obj.interest.push("足球");
console.log(obj, age, my);
//{name: 'iceCode', age: 24,  interest: ["唱", "跳", "rap", "篮球","足球"]}
//{age:18}
//{interest: ['唱', '跳', 'rap', '篮球', '足球']}
```
假如目标对象是一个数组... 对，还是身在曹营心在汉的场景，并且类型是Array
![](https://cdn.nlark.com/yuque/0/2024/webp/314561/1716180204603-b779bc07-f85c-4890-957b-5019421a2fd6.webp#averageHue=%23f8f8f4&clientId=uf4be30f5-ddad-4&from=paste&id=u6374fbd1&originHeight=94&originWidth=434&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uc4031f38-3d84-42cd-b6e4-ea52bc8d967&title=)
## Object.create 以现有的对象作为原型创建一个新的对象
Object.create创建一个新的对象，接收两个参数，创建新对象的原型对象，第二个参数同Object.defineProperties第二个参数相同，里面的值作为创建新对象本身的属性和属性值
```javascript
const obj = { name: "iceCode" };
//obj作为原型对象，第二个参数作为新对象本身的参数
const newObj = Object.create(obj, {
  age: {
    value: 12,
    writable: true,
    enumerable: true,
    configurable: true,
  },
});
console.log(newObj);
```
![](https://cdn.nlark.com/yuque/0/2024/webp/314561/1716180204656-4f7debef-e83a-48ac-ac33-4647c35b53d0.webp#averageHue=%23f3f1ec&clientId=uf4be30f5-ddad-4&from=paste&id=u9bccd292&originHeight=98&originWidth=352&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u84f3aff2-a09a-4cf6-ab3d-895a8577e9d&title=) 
如果第一个参数是数组，那么这个新对象的原型就是数组
```javascript
const obj = { name: "iceCode" };
const interest = ["唱", "跳", "rap", "篮球"];
const newObj = Object.create(interest, {
  age: {
    value: 12,
    writable: true,
    enumerable: true,
  },
});
//显示这个新对象，判断是否是数组，判断一下类型
console.log(newObj, Array.isArray(newObj), Object.prototype.toString.call(newObj));
```
![](https://cdn.nlark.com/yuque/0/2024/webp/314561/1716180204623-3df59080-2432-4415-8aeb-b2263ba28dc7.webp#averageHue=%23f7f0eb&clientId=uf4be30f5-ddad-4&from=paste&id=u641bc59b&originHeight=175&originWidth=515&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u28239b35-a78c-43cc-9a2c-f089ce2d319&title=)
## Object.freeze 冻结对象
Object.freeze方法冻结对象，使目标对象不可配置（使用Object.defineProperty等方法修改对象的操作权限），不可扩展，不可删除，不可修改（包括改变原型）。接收一个要被冻结的对象，返回这个对象。
注意：一旦这个对象被冻结，那么这个操作就不可逆，该对象无法被解冻
```javascript
const obj = { name: "iceCode" };
const newObj = Object.freeze(obj);
//冻结之后，一下操作都是会报错的
newObj.name = "我是队长阿威呀";
delete newObj.name;
newObj.age = 18;
newObj.__proto__ = { age: 18 };
//但是修改或添加原型的属性是可以的，原型引用没有改变
newObj.__proto__.age = 18;
```
## Object.isFrozen 判断对象是否被冻结
Object.isFrozen判断一个对象是否被冻结，如果被冻结返回true，否则返回false。

1. 一个空的不可扩展对象会认为是冻结对象
2. 如果一个不可扩展的对象里有属性，且被删除了属性，会认为是冻结对象
3. 如果一个不可扩展的对象里有属性，且被配置为不可配置并且不可写（ configurable: false，writable: false,），会认为是冻结对象
4. 如果一个不可扩展的对象里有一个访问器属性，且被配置为不可配置并且不可写（ configurable: false，writable: false,），会认为是冻结对象
5. 使用Object.freeze冻结一个对象会被认为是冻结对象
```javascript
//不可扩展
const newObj1 = Object.preventExtensions({});
const newObj2 = Object.preventExtensions({ name: "iced" });
delete newObj2.name;
const newObj3 = Object.preventExtensions({ name: "iced" });
Object.defineProperty(newObj3, "name", {
  configurable: false,
  writable: false,
});
const newObj4 = Object.preventExtensions({
  get name() {
    return "iceCode";
  },
});
Object.defineProperty(newObj4, "name", {
  configurable: false,
  writable: false,
});

const newObj = Object.freeze(obj);
console.log(Object.isFrozen(newObj));//true
console.log(Object.isFrozen(newObj1));//true
console.log(Object.isFrozen(newObj2));//true
console.log(Object.isFrozen(newObj3));//true
console.log(Object.isFrozen(newObj4));//true
```
## Object.seal 密封一个对象
Object.seal密封一个对象，与Object.freeze相比可以更改对象中现有的属性，一样不可删除，不可添加等操作
```javascript
const obj = { name: "iceCode" };
const newObj = Object.seal(obj);
//等操作是会报错的 但可以修改
delete newObj.name;
newObj.age = 18;
```
## Object.isSealed 判断一个对象是否被密封
Object.isSealed判断一个对象是否被密封，如果被冻结返回true，否则返回false。判断基本如上,并且冻结的一定是密封的

1. 一个空的不可扩展对象会认为是密封对象
2. 如果一个不可扩展的对象里有属性，且被删除了属性，会认为是密封对象
3. 如果一个不可扩展的对象里有属性，且被配置为不可配置（ configurable: false），会认为是密封对象
4. 如果一个不可扩展的对象里有一个访问器属性，且被配置为不可配置（ configurable: false），会认为是密封对象
5. 使用Object.seal密封一个对象会被认为是密封对象
6. 使用Object.freeze冻结一个对象会被认为是密封对象
```javascript
//不可扩展
const newObj1 = Object.preventExtensions({});
const newObj2 = Object.preventExtensions({ name: "iced" });
delete newObj2.name;
const newObj3 = Object.preventExtensions({ name: "iced" });
Object.defineProperty(newObj3, "name", {
  configurable: false,
});
const newObj4 = Object.preventExtensions({
  get name() {
    return "iceCode";
  },
});
Object.defineProperty(newObj4, "name", {
  configurable: false,
});
const newObj5 = Object.seal(obj);
const newObj = Object.freeze(obj);
console.log(Object.isSealed(newObj));//true
console.log(Object.isSealed(newObj1));//true
console.log(Object.isSealed(newObj2));//true
console.log(Object.isSealed(newObj3));//true
console.log(Object.isSealed(newObj4));//true
console.log(Object.isSealed(newObj5));//true
```
## Object.preventExtensions 禁止对象扩展
Object.preventExtensions禁止对象的扩展操作，除了不可以添加新的属性以外其他的都可以，原型一样不可以被重新指定
```javascript
const obj = { name: "iceCode" };
const newObj = Object.preventExtensions(obj);
//修改删除操作都是可以的
newObj.name = "iced";
delete newObj.name;
```
## Object.isExtensible 判断一个对象是否可扩展
Object.isExtensible判断一个对象是否可扩展，返回要给布尔值。默认的普通对象是可扩展的所以为true，不可扩展的对象为false。

1. 当对象被冻结时是不可扩展的
2. 当对象被密封时是不可扩展的
3. 当对象被标记为不可扩展时是不可扩展的
```javascript
const obj = { name: "iceCode" };
const newObj = Object.preventExtensions(obj);
const newObj1 = Object.seal(obj);
const newObj2 = Object.freeze(obj);

console.log(Object.isExtensible({})); //true
console.log(Object.isExtensible(newObj)); //false
console.log(Object.isExtensible(newObj1)); //false
console.log(Object.isExtensible(newObj2)); //false
```
**另外：冻结、密封、不可扩展方法对数组都是可用的，同样无法添加新的属性或修改等一些操作，这里就不演示了**
## Object.fromEntries 将键值对列表转成对象
Object.fromEntries会将键值对格式的列表转化成对象，比如Map类型数据，或二维数组数据
```javascript
const arr: any[] = [
  ["2", "4"],
  ["name", "iceCdoe"],
  ["age", 18],
];
const map = new Map(arr);
const newObj = Object.fromEntries(map);
const newObj1 = Object.fromEntries(arr);
console.log(newObj);//{2: '4', name: 'iceCdoe', age: 18}
console.log(newObj1);//{2: '4', name: 'iceCdoe', age: 18}
```
## Object.prototype.hasOwnProperty 查找对象本身是否存在这个属性
Object.prototype.hasOwnProperty是一个原型方法，实例对象调用此方法会查找到自身是否存在这个属性，返回一个布尔值，如果自身存在返回true，如果不存在或或者原型上存在返回false
```javascript
const obj = { name: "iceCode" };
obj.__proto__ = { age: 18 };
//此方法与in 操作的差别就是in可以找到原型的属性，但是hasOwnProperty不会
console.log(obj.hasOwnProperty("name"));//true
console.log(obj.hasOwnProperty("age"));//false
console.log("age" in obj);//true

//另外 因为对象有方法这个概念，所以这个hasOwnProperty不受保护的
const obj = {
  name: "iceCode",
  hasOwnProperty() {
    return false;
  },
};
//这个时候不论如何访问这个方法，返回的都是false
console.log(obj.hasOwnProperty("name"));//false
console.log(obj.hasOwnProperty("age"));//false
```
## Object.hasOwn 检查对象本身是否存在这个属性
**此方法兼容性一般，如果需要使用，生产环境需谨慎 Node 16.9+ chrome 93+**
Object.hasOwn是Object.prototype.hasOwnProperty替代版，用来代替Object.prototype.hasOwnProperty。接收两个参数，第一个为目标对象，第二个是要查找的属性值。返回一个布尔值，结果与Object.prototype.hasOwnProperty相同。
```javascript
const obj = {
  name: "iceCode",
  hasOwnProperty() {
    return false;
  },
};
obj.__proto__ = { age: 18 };
console.log(Object.hasOwn(obj, "name"));//true
console.log(Object.hasOwn(obj, "age"));//false
console.log(Object.hasOwn(obj, "hasOwnProperty"));//true
console.log("age" in obj);//true


//这个还可以查找数组的值
const arr = [1, 2, 3, 4, 5];
//第二个参数为索引值
console.log(Object.hasOwn(arr, 0));//true
console.log(Object.hasOwn(arr, 10));//false
```
## Object.getOwnPropertyNames 返回一个包含自身属性（包括不可枚举）的数组
Object.getOwnPropertyNames接收一个目标对象，返回一个数组，包含**自身**不可枚举的属性，但是不包括Symbol属性
```javascript
const f = Symbol("f");
const obj = {
  name: "iceCode",
  age: 12,
  [f]: 1336444,
};
Object.defineProperty(obj, "age", {
  enumerable: false,
});
const objArr = Object.getOwnPropertyNames(obj);
//不可枚举的也可以返回出来
console.log(objArr);//['name', 'age']

//如果目标对象是一个数组，那将会返回索引和length
const arr = [1, 2, 3, 4, 5];
const objArr = Object.getOwnPropertyNames(arr);
console.log(objArr);//['0', '1', '2', '3', '4', 'length']
```
## Object.getOwnPropertySymbols 返回一个包含自身Symbol属性的数组
Object.getOwnPropertySymbols接收一个目标对象，返回一个数组，只包括目标对象的Symbol属性
```javascript
const f = Symbol("f");
const obj = {
  name: "iceCode",
  age: 12,
  [f]: 1336444,
};
Object.defineProperty(obj, "age", {
  enumerable: false,
});
const objArr = Object.getOwnPropertySymbols(obj);
console.log(objArr);//[Symbol(f)]
```
## Object.getPrototypeOf 获取对象的原型
Object.getPrototypeOf获取目标对象的原型，接收一个参数，返回该目标对象上的原型对象
```javascript
const obj = { name: "iceCode", age: 12 };
const objs = Object.create(obj);
const newObj = Object.getPrototypeOf(objs);
console.log(obj === newObj);//true
```
## Object.setPrototypeOf 修改对象的原型
Object.setPrototypeOf修改目标对象的原型，接收两个参数，第一个为目标对象，第二个为要设置的原型对象。
此方法不建议使用，使用该方法修改原型的速度非常慢，建议使用Object.create创建一个新的对象
```javascript
const obj = { name: "iceCode", age: 12 };
const a = { sex: "男" };
const newObj = Object.setPrototypeOf(obj, a);
//可以看出newObj的原型全等与a对象
console.log(a === newObj.__proto__);//true
```
## Object.prototype.isPrototypeOf 判断一个对象是否存在于另一个对象原型上
Object.prototype.isPrototypeOf作为Object的原型方法，一般用在构造函数上。正常对象也可以使用，同样该方法也是不被保护的。接收一个目标函数，返回一个布尔值。
```javascript
const obj = { name: "iceCode", age: 12 };
const a = { sex: "男" };
const newObj = Object.setPrototypeOf(obj, a);
//a对象使用该方法判断自己是否在newObj的原型上，与newObj的原型对象是否全等
console.log(a.isPrototypeOf(newObj));//true
```
## Object.getOwnPropertyDescriptor 获取自身属性值的描述对象
Object.getOwnPropertyDescriptor方法将会获取对象自身属性的**描述对象**，接收两个参数，第一个为目标对象，第二个属性名，返回一个对该属性的**描述对象**。描述对象上面有介绍的，修改返回**描述对象**的值不会改变原属性的值
```javascript
const obj = { name: "iceCode", age: 12 };
const newObj = Object.getOwnPropertyDescriptor(obj, "name");
newObj.value = "队长阿威";
console.log(newObj, obj);
//newObj:
//{
//configurable: true
//enumerable: true
//value: "队长阿威"
//writable: true
//}
//obj：{name: 'iceCode', age: 12}
```
## Object.getOwnPropertyDescriptors 获取自身所有属性值的描述对象
Object.getOwnPropertyDescriptors方法将会获取对象自身所有属性的**描述对象**，接收一个目标对象，返回一个该对象所有属性**描述对象**。描述对象上面有介绍的，修改返回**描述对象**的值不会改变原属性的值
```javascript
const obj = { name: "iceCode", age: 12 };
const newObj = Object.getOwnPropertyDescriptors(obj);
console.log(newObj);
// {
//  age: { configurable: true, enumerable: true, value: 12, writable: true },
//  name: { configurable: true, enumerable: true, value: "iceCode", writable: true },
//};
```
## Object.prototype.propertyIsEnumerable 表明指定属性是否可枚举
Object.prototype.propertyIsEnumerable原型方法，表明指定属性是否可枚举，接收一个指定属性的参数，返回要给布尔值
```javascript
const obj = { name: "iceCode", age: 12 };
Object.defineProperty(obj, "age", {
  enumerable: false,
});
const newObj = obj.propertyIsEnumerable("name");
const newObj1 = obj.propertyIsEnumerable("age");
console.log(newObj);//true
console.log(newObj1);//false

//虽然是对象上的原型方法，数组也是可以使用的
const arr = [1, 2, 3, 4, 5];
const newArr = arr.propertyIsEnumerable(0);
const newArr1 = arr.propertyIsEnumerable("length");//这里数组的length属性是不能被枚举的
console.log(newArr);//true
console.log(newArr1);//false
```
## Object.keys 返回自身可枚举属性的数组
Object.keys接收一个目标对象，返回一个包含自身可枚举属性的数组。就是如果属性被配置为不可枚举或者是Symbol属性都无法找到。
```javascript
const f = Symbol("f");
const obj = { name: "iceCode", age: 12, [f]: "666" };
Object.defineProperty(obj, "age", {
  enumerable: false,
});
const keys = Object.keys(obj);
//这里只能找到name属性
console.log(keys);//['name']

//如果传入的目标对象是一个数组，那么会返回它们的索引
const arr = [1, 2, 3, 4, 5];
const values = Object.keys(arr);
console.log(values);//['0', '1', '2', '3', '4']
```
## Object.values 返回自身可枚举属性值的数组
Object.values接收一个目标对象，返回一个包含自身可枚举属性值的数组。就是如果属性被配置为不可枚举或者是Symbol属性都无法获取到这个属性值。
```javascript
const arr = [1, 2, 3, 4, 5];
const f = Symbol("f");
const obj = { name: "iceCode", age: 12, [f]: "666" };
Object.defineProperty(obj, "age", {
  enumerable: false,
});
const keys = Object.values(obj);
console.log(keys);//['iceCode']

//如果目标对象是一个数组，那么会返回一个浅拷贝的新数组
const arr = [{ f: "666" }, 2, 3, 4, 5];
const values = Object.values(arr);
values[0].f = "777";
values[1] = 666;
console.log(values, arr);//[{ f: "777" }, 666, 3, 4, 5]   [{ f: "777" }, 2, 3, 4, 5]
```
## Object.entries 返回自身可枚举属性和属性值的数组
Object.entries接收一个目标对象，返回一个包含自身可枚举属性和属性值的二维数组。就是如果属性被配置为不可枚举或者是Symbol属性都无法获取到这个属性值。
```javascript
const f = Symbol("f");
const obj = { name: "iceCode", age: 12, [f]: "666" };
Object.defineProperty(obj, "age", {
  enumerable: false,
});
const entr = Object.entries(obj);
console.log(entr);//[['name','iceCode']]

//如果目标对象是一个数组，那么会返回包含索引和value的二维数组
const arr = [1, 2, 3, 4, 5];
const entr = Object.entries(arr);
console.log(entr);//[['0',1],['1',2],['2',3],['3',4],['4',5]]
```
## Object.is 对比两个值是否相同
Object.is会对比两个值是否相同，对比比较操作符更准确，接收两个参数，第一个对比的参数，第二个对比的参数。返回一个布尔值，为对比结果。
```javascript
//这里使用全等作为比较，因为相等操作符会隐式转换类型，对比的可信度大大降低
console.log(Object.is(+0, -0), +0 === -0);//false true
console.log(Object.is(0, +0), 0 === +0);//true true
console.log(Object.is(0, -0), 0 === -0);//false true
console.log(Object.is("iceCode", "iceCode"), "iceCode" === "iceCode");//true true
console.log(Object.is(undefined, undefined), undefined === undefined);//true true
console.log(Object.is(NaN, NaN), NaN === NaN);//true false
//引用类型比较的是引用之，本身就不会像等，这里比较的优点多余
console.log(Object.is({}, {}), {} === {});//false false
console.log(Object.is([], []), [] === []);//false false
console.log(Object.is(NaN, 0 / 0), NaN === 0 / 0);//true false
```
## valueOf toString toLocaleString
这三个方法都是Object原型上的方法，本身在Object对象上基本没有任何意义。valueOf方法旨在被派生对象重写，以实现自定义[类型转换](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FData_structures%23%25E5%25BC%25BA%25E5%2588%25B6%25E7%25B1%25BB%25E5%259E%258B%25E8%25BD%25AC%25E6%258D%25A2)逻辑。toSting方法旨在重写（自定义）派生类对象的[类型转换](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FData_structures%23%25E5%25BC%25BA%25E5%2588%25B6%25E7%25B1%25BB%25E5%259E%258B%25E8%25BD%25AC%25E6%258D%25A2)的逻辑。toLocaleString方法旨在由派生对象重写，以达到其特定于语言环境的目的。
因为js中所有类型（不包括null），都继承Object的原型，所有类型都有这三个派生方法，但它们的这三种方法都已经被重写，有着自身不同的效果。这里就不写了，只要知道在Object上这三个方法基本没有特殊效果就可以了。
## Object.groupBy 给定可迭代对象中的元素进行分组
**注意：此方法兼容性极差，作为了解即可，目前为止node完全不支持，chrome需要117版本以上**
Object.groupBy方法接收两个参数，第一个是元素分组可迭代的对象（Array等），第二个是一个回调函数，传递两个参数，第一个参数为当前迭代的元素，第二个为当前迭代的索引。返回的对象具有每个组的单独属性，其中包含组中的元素的数组。
```javascript
//说起来肯定不太好理解，直接上代码
//首先定义一个数组包对象的数据
const f = [
  { name: 'i', sex: '男', age: 12 },
  { name: 'ie', sex: '男', age: 12 },
  { name: 'iq', sex: '女', age: 12 },
  { name: 'iw', sex: '男', age: 12 },
  { name: 'ie', sex: '女', age: 12 },
  { name: 'ir', sex: '男', age: 12 },
  { name: 'it', sex: '女', age: 12 },
]
//这个时候有一个需求，将性别为要求，性别相同的分到一组，并且以对象的格式显示他们
//正常情况下我们会创建一个对象，然后遍历数组，在使用判断条件进行分组
//但是使用Object.groupBy只需要一行代码
//第二个回调需要返回要分组的属性
const newObj = Object.groupBy(arr, (v) => v.sex);
console.log(newObj);//这里打印一下看看
//{
//  女: [
//    { name: "iq", sex: "女", age: 12 },
//    { name: "ie", sex: "女", age: 12 },
//    { name: "it", sex: "女", age: 12 },
//  ],
//  男: [
//    { name: "i", sex: "男", age: 12 },
//    { name: "ie", sex: "男", age: 12 },
//    { name: "iw", sex: "男", age: 12 },
//    { name: "ir", sex: "男", age: 12 },
//  ],
//}
```
Object.groupBy方法的第二个回调返回的属性是什么，就以什么相同属性值分组，例如如果返回是v.name,得到的结果如下：
![](https://cdn.nlark.com/yuque/0/2024/webp/314561/1716180204887-5b0ba25b-ad2d-4a42-a406-86b3b627b016.webp#averageHue=%23fdfcfc&clientId=uf4be30f5-ddad-4&from=paste&id=u1fe8e884&originHeight=426&originWidth=590&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ue40f7bde-e613-4397-81ba-87671676d77&title=)
# 最后
js中对象的方法虽然有众多，但是业务项目中几乎很少能够用到，如果是比较，感觉还是对比运算符会比Object.is更方便一些。如果是对对象进行冻结、密封、禁止扩展的场景更是少之又少，访问原型链在业务需求里也是比较少的。访问对象中是否存在这个属性使用in 操作符更方便些，但也不乏会有极少数场景可以使用到Object.hasOwn等方法
感觉使用Object.groupBy对数据进行分组是比较好的方法，但是**兼容性可谓是一言难尽**。目前使用最多的就是Object.keys来对对象进行判断或者遍历
