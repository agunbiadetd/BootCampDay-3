Array.prototype.toTwenty = function() {
var myarr = [];
var firstArr = new Array(20);
for(var i= 1; i<= firstArr.length; i++){
	myarr.push(i);
} return myarr;
}

Array.prototype.toForty = function(){
	var myarr = [];
	var secondArr = new Array(40);
	for(var i= 2; i<=secondArr.length; i++){
		if(i%2 == 0){
		myarr.push(i);
	}
	} return myarr;
	}

Array.prototype.toOneThousand = function() {
	var myarr = [];
	var thirdArray = new Array(1000);
	for(var i= 10; i<=thirdArray.length; i++){
		if(i%10 == 0){
			myarr.push(i);
		}
		} return myarr;
	}

Array.prototype.search = function(n) {
	var minIndex = 0;
	var count = 0;
	var no = 0;
	maxIndex = this.length -1;
	len = this.length;
	midIndex = Math.floor((maxIndex + minIndex)/2);
	while(this[midIndex] !== n && minIndex < maxIndex){
          if (n < this[midIndex]){
              maxIndex = midIndex- 1;
          } else if (n == this[minIndex]){
            return count;
          } else if (n > this[midIndex]){
              minIndex = midIndex + 1;
          }
          midIndex = Math.floor((maxIndex + minIndex)/2);
      }
      if (this[midIndex] == n){
        return {'count':count,'index': midIndex,'length':len};
      }
      else{
        return {'count':count++,'index': -1,'length': len};
      }
}

module.exports = {Array}
