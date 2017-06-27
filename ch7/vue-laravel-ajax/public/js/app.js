Vue.prototype.$http = axios;

new Vue({
	el:'#root',
	data:{
		tasks:[]
	},
	mounted(){
		this.$http.get('/tasks')
			.then(response => this.tasks = response.data);
	}
});