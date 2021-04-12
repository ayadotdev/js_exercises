function countWords(str) {
    return str.length > 0 ? str.replace(/\s+/g," ").trim().split(" ").length : 0;
  }


  console.log(countWords(""))