(function () {
'use strict';

class TaskCollection {
	constructor(tasks = []) {
		this.tasks = tasks;
	}

	dump() {
		console.log(this.tasks);
	}
}

function foo(){
	console.log("foo");
}

let bar = 123;

const tasks = new TaskCollection([
	'shop',
	'eat',
	'sleep'
]);

tasks.dump();
foo();
console.log(bar);

}());
