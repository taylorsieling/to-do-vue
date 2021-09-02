const app = new Vue({
    el: '#app',
    data: {
        title: 'Howdy, World!'
    },
    methods: {
        addTodo() {
            console.log('form submitted')
        }
    }
});