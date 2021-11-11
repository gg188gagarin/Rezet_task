let text = [
    ["zdarova", "bandity"],
    ["nu","che","ti","sporish","?","tebe","govoryat","-","govno","tvoya","musika",",","a","ti","sporish"],
    ["v","chem","sila","brat","?"]
];
let rulls = [
    ["LEFT","RIGHT","LEFT"],
];
const str_len = 16 ; //еще два символа * по бокам
let k=0; //счетчик символов
let temporaryArr = [];  //временное хранилище
let q=0; // счетчик строк вывода

temporaryArr[q]= "******************";

for (let i = 0, len = text.length; i < len; i++) {
    for (let j = 0, leng = text[i].length; j < leng; j++) {

        k=temporaryArr[q].length;
        k=k + text[i][j].length;
        k++;
         if ( k < str_len){
             temporaryArr[q]= +" ";
             temporaryArr[q]= +(text[i][j]);
         }


         if ( k === str_len) {
             temporaryArr[q]='*'+temporaryArr[q];
             temporaryArr[q]= +'*';
             console.log( temporaryArr[q] );
             q++;
         }


         if ( k > str_len){
                 if ( rulls[i] === "LEFT"){

                     for (let p=0; p === str_len-temporaryArr[q].length;p++){
                         temporaryArr[q]= +' ';
                     }
                 }
                 else {
                     for (let p=0; p === str_len-temporaryArr[q].length;p++){
                         temporaryArr[q]= ' '+temporaryArr[q];
                     }
                 }
                 temporaryArr[q]='*'+temporaryArr[q];
                 temporaryArr[q]=+'*';
                 console.log( temporaryArr[q] );
                 temporaryArr [q]= +'';
         }

         k=0;



    }

    temporaryArr[q]='*'+temporaryArr[q];
    temporaryArr[q]= +'*';
    q++;
}


