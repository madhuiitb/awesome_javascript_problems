const CapitalizeFirstLetter = (str)=>{
  
  const words = str.split(' ');
  const lenWords = words.length;
  let result = '';
  for(let i=0; i<lenWords;i++){
    const len = words[i].length;
    let res = words[i].charAt(0).toUpperCase();
    for(let j=1;j<len;j++){
      res = res + words[i].charAt(j).toLowerCase();
    }
    console.log(res);
    if(i===lenWords-1){
      result = result + res;
    }else{
      result = result + res+" ";
    }
  }
  return result;
}

const word = CapitalizeFirstLetter("123abc xyz")
console.log(word)
