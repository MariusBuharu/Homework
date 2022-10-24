export const totalSalaryCalculator=function (arr){
    return  arr.reduce((ac, el)=>ac + el.salary,0);
}