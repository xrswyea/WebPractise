<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <TodoHeaderVue :addTodo="addTodo"></TodoHeaderVue>
                <TodoListVue
                    :todo="todo"
                    :changeDone="changeDone"
                    :deleteTodo="deleteTodo"
                ></TodoListVue>
                <TodoFooterVue
                    v-if="todo.length"
                    :todo="todo"
                    :doneAll="doneAll"
                    :clearAll="clearAll"
                ></TodoFooterVue>
            </div>
        </div>
    </div>
</template>

<script>
import TodoHeaderVue from "./components/TodoHeader.vue";
import TodoListVue from "./components/TodoList.vue";
import TodoFooterVue from "./components/TodoFooter.vue";
export default {
    name: "App",
    components: {
        TodoHeaderVue,
        TodoListVue,
        TodoFooterVue,
    },
    data() {
        return {
            todo: JSON.parse(localStorage.getItem("todo")) || [],
        };
    },
    methods: {
        addTodo(todoItemObj) {
            console.log(todoItemObj);
            this.todo.unshift(todoItemObj);
        },
        changeDone(id) {
            this.todo.forEach(element => {
                if (element.id === id) {
                    element.done = !element.done;
                    return;
                }
            });
        },
        deleteTodo(id) {
            this.todo = this.todo.filter(item => item.id !== id);
        },
        doneAll(checked) {
            this.todo.forEach(item => {
                item.done = checked;
            });
        },
        clearAll() {
            this.todo = [];
        },
    },
    watch: {
        todo: {
            deep: true,
            handler(val) {
                localStorage.setItem("todo", JSON.stringify(val));
            },
        },
    },
};
</script>

<style>
/*base*/
body {
    background: #fff;
}

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;
}

.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>
