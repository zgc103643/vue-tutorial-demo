import { TaskCollection, foo, bar as bar1 } from './TaskCollection';

const tasks = new TaskCollection([
	'shop',
	'eat',
	'sleep'
]);

tasks.dump();
foo();
console.log(bar1); 