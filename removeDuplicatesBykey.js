let inputArr = [
	{ id: 1, name: 'Tomas' },
	{ id: 2, name: 'Mantas' },
	{ id: 3, name: 'Julius' },
	{ id: 1, name: 'Mindaugas' },
	{ id: 4, name: 'Justas' },
	{ id: 2, name: 'Mantas' },
	{ 		 name: 'Ignas' }];

Array.prototype.removeDuplicatesBy = function(filterKey) {
	let compare = [];
	let results = [];
	if (this.length > 1) {
		for (let i=0 ; i < this.length; i++) {
			if (this[i][filterKey]!=null && compare.indexOf(this[i][filterKey])<0) {
			compare.push(this[i][filterKey]) && results.push(this[i]);
			}
		}
		return results;
	}
	return this;
};
const resultArr = inputArr.removeDuplicatesBy('id');
console.log(resultArr);
