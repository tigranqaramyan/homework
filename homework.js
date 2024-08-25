//task 1
//1.console.log(Number('0x77') === 0x77)//true
//2.console.log(Number('077') === 077)//false
//3.console.log(Number(' 12')) // 12
//4.console.log(isNaN(' '))//false
//5.console.log(+'')//0
//6.console.log(.1 + .2 == .3) //false
//7.console.log(9007199254740992 + 1 == 9007199254740992)//true
//8.console.log(9007199254740992 + 2 == 9007199254740992)//false
//9.console.log(0 === +0)//true
//10.console.log(+0 === -0)//true
//11.console.log(1 / '2')//0.5
//12.console.log(1 / 0)// infinity
//13.console.log(1 / -0)//-Infinity
//14.console.log(Infinity / 6)//Infinity
//15.console.log(Infinity / -256)//-Infinity
//16.console.log(Infinity / Infinity)//NaN
//17.console.log(0 / 0)//NaN
//18.console.log(+true)//1
//19.console.log(+false)//0
//20.console.log(+null)//0
//21.console.log(+undifined)//NaN
//22.console.log(parseInt('.2'))//NaN
//23.console.log(parseInt('077a')//77
//24.console.log(parseInt('0x77a')); // ?
//25.console.log(parseInt('I'm the best value - said Infinity.'))//NaN
//26.console.log(parseFloat('I'm the best value - said Infinity.'))//NaN
//27.console.log(parseInt('Infinity is the best value!'))//NaN
//28.console.log(parseFloat('Infinity is the best value!'))//Infinity
//29.console.log(parseFloat('12.78ff'))//12.78


//task 2
// console.log("" + 1 + 0 "" - 1 + 0 true + false 6 / "3" "2" * "3" 4 + 5 + "px" "$" + 4 + 5 "4" -
// 2 "4px" - 2 7 / 0 " -9 " + 5 " -9 " - 5 null + 1 undefined + 1)//Syntax Error


//task 3.1
// const obj = {
//     firstName: 'Davit',
//     lastName: 'Mkrtchyan',
//     age: 18
// }
//
// function stringName(object){
//     return `Name: ${object.firstName} ${object.lastName}, Age: ${object.age}`
// }
// console.log(stringName(obj))

//3.2

// const obj = {
//     price: 1000,
//     valueOf: function () {
//         return obj.price;
//     }
// }
// console.log(obj + 1000);



// Exercise 3.4: Array-like Object
// Objective: Create an object that mimics an array with elements like item1, item2, and item3.
// Expected Result: The object should produce the string "item1,item2,item3" when converted to
// a string.
const arrLikeObj = {
    '0': 'Item1',
    '1': 'Item2',
    '2': 'Item3',
    length: 3,
    string: function () {
        let result = '';
        for(let i = 0; i < arrLikeObj.length; i++){
            if(i > 0){
                result += ', '
            }
            result += arrLikeObj[i]
        }
        return result;
    }
}
console.log(arrLikeObj.string())