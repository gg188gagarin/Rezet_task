let text = [
    ["zdarova", "bandity"],
    ["nu","che","ti","sporish","?","tebe","govoryat","-","govno","tvoya","musika",",","a","ti","sporish"],
    ["v","chem","sila","brat","?"]
];
let rulls = [
    ["LEFT","RIGHT","LEFT"],
];
const str_len = 16-2 ; //еще два символа * по бокам
let k=0; //счетчик символов
let temporaryArr=0;  //временное хранилище




for (let i = 0, len = text.length; i < len; i++) {
    temporaryArr[0]="****************";
    for (let j = 0, len = text[i].length; j < len; j++) {
     k=k+text[i][j].length;

     // if ( rulls[i]==="LEFT"){
    //     temporaryArr=
    // }


     if (temporaryArr[i+1].length > 1) {
         k=temporaryArr[i+1].length+text[i][j].length+1;
         if ( k<str_len){
             temporaryArr[i+1].push(" ");
             temporaryArr[i+1].push(text[i][j]);
         }
     }

     temporaryArr[i].push('*');
     temporaryArr.unshift[i]('*');

     if ( temporaryArr.length>=str_len ){
         console.log('')

     }

    }
}

