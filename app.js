const app = new Vue({
    el: '#app',
    data: {
        title: 'Howdy, World!',
        newTodo: '',
        todos: [],
    },
    methods: {
        addTodo() {
            console.log(this.newTodo);
            this.todos.push({
                title: this.newTodo,
                done: false
            });
            this.newTodo = '';
        }
    }
});