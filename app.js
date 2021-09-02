const app = new Vue({
    el: '#app',
    data: {
        title: 'Howdy, World!',
        newTodo: '',
    },
    methods: {
        addTodo() {
            console.log(this.newTodo)
        }
    }
});