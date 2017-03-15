function findingMissing (arri, arr2){
	var a = [];
	diff = [];
if(arri.length == arr2.length) (
	return o;
	) else{
	for(var i = 0; i < arri.length; i++) {
		a[arr[i]] = true;
	}
	for(i = 0; i < arr2.length; i++) {
		if (a[arr2[i]]) {
			delete a[arr[i]];
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