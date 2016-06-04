// http://www.codewars.com/kata/word-char-and-line-count/javascript

function DocumentParser(reader) {
  this.reader = reader;
  this.reset();
}

DocumentParser.prototype.reset = function() {
  this.wordCount = 0;
  this.charCount = 0;
  this.lineCount = 0;
}

DocumentParser.prototype.parse = function() {
  var completeText = '';
  var currentText = this.reader.getChunk();
  
  while(currentText !== "") {
    completeText += currentText;
    
    currentText = this.reader.getChunk();
  }
  
  var wordCount = completeText.length === 0 || completeText === ' ' ? 0 : completeText.split(' ').length;
  var completeText = completeText.replace('\n', '').length;
  var lineCount = completeText.length === 0 ? 0 : completeText.split('\n').length;

  this.wordCount = wordCount;
  this.charCount = charCount;
  this.lineCount = lineCount;
}
