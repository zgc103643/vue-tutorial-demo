class TaskCollection {
	constructor(tasks = []) {
		this.tasks = tasks;  // 获取任务列表
	}

	dump() {
		console.log(this.tasks);  // 打印任务列表
	}
}