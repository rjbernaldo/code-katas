// http://www.codewars.com/kata/paginationhelper/javascript

function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length / this.itemsPerPage);
}

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  var max = this.itemsPerPage * (pageIndex + 1);
  var min = max - this.itemsPerPage;
  var currentCollection = this.collection.slice(min, max);
  
  return currentCollection.length ? currentCollection.length : -1;
}

PaginationHelper.prototype.pageIndex = function(itemIndex) {
  var isValid = this.collection.length > itemIndex && itemIndex >= 0;
  
  return isValid ? Math.floor(itemIndex/this.itemsPerPage) : -1;
}
