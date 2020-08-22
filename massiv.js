// const friends = ["Mango", "Kivi", "Poly", "Ajax"];
// // массивы удобно выводить следующим образом
// console.table(friends);

// //чтобы узнать длину массива

// const len = friends.length;
// console.log(len);

// //чтобы узнать длину массивапоследний индекс
// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// //чтобы обратиться к элементу массива
// console.log(friends[2]); //Poly

// //чтобы перезаписать значение в массиве
// friends[2] = "Lusy";
// console.log(friends); //"Mango", "Kivi", "Lusy", "Ajax"

//Примитивы и сложные типы
//передача по значению

// let a = 10;
// let b = a;

// console.log(a); //10
// console.log(b); //10

// let a = 20;

// console.log(a); //20
// console.log(b); //10 !!! - потому что переопределение не производилось!!! копии друг от друга не зависят

// //передача по ссылке
// const a1 = [1, 2, 3];
// const b1 = a1;

// // //для сложных типов(массивов, обьектов, функций) в ячейке хранится не значение, а ссылка на место в памяти, то есть две разные переменные могут указывать на одно и то же место в памяти

// console.log("a1", a1);
// console.log("b1", b1);

// a1[0] = 500;
// console.log("a1", a1);
// console.log("b1", b1);
//значение  в1 перезапишется, потому что в переменных а и в лежат ссылки на один и тот же массив-ячейку памяти

//*перебор итерации массива
//*for - если нужен индекс или нужно изменить элемент массива

const friends = ["Poly", "Lusy", "Helen", "Mary"];
console.table(friends);
for (let i = 0; i <= friends.length - 1; i += 1) {
  console.log(i);
  console.log(friends[i]); //обращение к каждому элементу массива на итерации
  friends[i] += "-1"; //если нужно изменить переменную
}

//*for...of если индекс не нужен и в массиве ничего менять не нужно
console.log("если индекс не нужен и в массиве ничего менять не нужно");
for (const friend of friends) {
  console.log(friend);
}
