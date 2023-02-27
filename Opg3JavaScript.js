function firstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
function lastLetter(word) {
  let lastLet = word.charAt(word.length - 1);
  let lastLetter = lastLet.toUpperCase();
  return word.slice(0, word.length - 1) + lastLetter;
}
function reverse(word) {
  return word.split("").reverse().join("");
}
Vue.createApp({
  data() {
    return {
      word: null, 
      words: [],
      lowerCase: null,
      upperCase: null,
      firstLetter: null,
      lastLetter: null, 
      capitalizedWord: null,
      reverseWord: null
    }
  },
  methods: {
    wordManipulation() {
      this.upperCase = this.word.toUpperCase();
      this.lowerCase = this.word.toLowerCase();
      this.capitalizedWord = firstLetter(this.word);
      this.lastLetter = lastLetter(this.word);
      this.reverseWord = reverse(this.word);

      this.words.push(
        this.word,
        this.lowerCase,
        this.upperCase,
        this.firstLetter,
        this.lastLetter,
        this.reverseWord)

      if (this.word = null){
        return;
      }
    }
  },
}).mount("#app")