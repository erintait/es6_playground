export function add(x, y){
    return x + y;
}

export const subtract = (x, y) => {
    return x - y;
};

export const multiply = (x, y) => x * y;

export const divide = (x, y) => y ? x/y : "Can't divide by zero";

export default 'This is just a string';
//ES5

// export function multiply(x, y){
//     return x * y;
// }
//
// export function divide(x, y){
//     if(y){
//         return x / y;
//     }
//
//     return "Can't divide by zero";
// }