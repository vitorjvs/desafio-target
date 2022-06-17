const sp = 67826.43;
const rj = 36678.66;
const mg = 29229.88;
const es = 27165.48;
const outros = 19849.53;
let total = 0;

total = sp+rj+mg+es+outros;


const array = [sp,rj,mg,es,outros]
const array2 = ["SP","RJ","MG","ES","Outros estados"]

for(let i = 0; i<array.length; i++){
    
    console.log(`${array2[i]} obteve: ${parseFloat(((100*array[i])/total).toFixed(2))}% de representação no faturamento mensal da distribuidora`)

}