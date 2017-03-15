
function findMissing (arr1, arr2){
	var a = [];
	diff = [];
if(arr1.length == arr2.length) {
	return 0;
	}else{
	for(var i = 0; i < arr1.length; i++) {
		a[arr1[i]] = true;
	}
	for(i = 0; i < arr2.length; i++) {
		if (a[arr2[i]]) {
			delete a[arr2[i]];
		} else {
			a[arr2[i]] = true;
		}
	}
	for (var k in a) {
		diff.push(k);
	}
	return parseInt(diff[0]);
}
}
module.exports = {findMissing}