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

export {TaskCollection, foo, bar};