<script>
import getTasks from "./api/get-tasks";
// import addTask from "./api/add-task";
// import updateTask from "./api/update-task";

export default {
  name: "App",
  data() {
    return {
      tasks: [],
      newTaskTitle: ""
    }
  },
  methods: {
    // Oppgave 1
    addNewTask() {

    },
    // Oppgave  4
    changeTask() {
    }
  },
  mounted() {
    return getTasks()
      .then(tasks => {
        this.tasks = tasks;
      });
  }
}
</script>

<template>
  <div id="app">
    <!-- Header -->
    <div id="header">
      <h1>To Do</h1>
    </div>

    <!-- Add new task -->
    <div id="addTaskForm" class="card">
      <input
        v-model="newTaskTitle"
        type="text"
        placeholder="Add new task"
        class="input"
      />
      <button>
        <i class="glyphicon glyphicon-plus"/>
      </button>
    </div>

    <!-- Tasks list -->
    <div class="card">
      <div
        v-for="(task, index) in tasks"
        :key="index"
        class="task"
      >
        <input
          :checked="task.completed"
          type="checkbox"
        />
        {{ task.title }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  font-family: "Tajawal", Avenir, Helvetica, Arial, sans-serif;
  background: rgb(11,38,32);
  background: linear-gradient(0deg, rgba(11,38,32,1) 0%, rgb(1, 112, 97) 100%);
  background-attachment: fixed;
  font-size: 18px;
  height:100%;
}
#app {
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
}

#header {
  flex: 100%;
  display: inline-block;
  text-align: center;
  h1 {
    font-size: 60px;
    text-transform: uppercase;
  }
}

.card {
  flex: 0 0 50%;
  margin: 5px;
  background-color: rgb(183, 193, 191);
  border-radius: 5px;
  box-shadow: 2px 2px 4px #2c3e5082;
  padding: 5px;
  border: 1px solid #2c3e5031;

  @media (max-width: 800px) {
    flex: 100%;
  }
}


.input {
  border-radius: 5px;
  padding: 6px;
  border: 1px solid #d8d8d8;
  &:focus-visible {
    outline: none;
    box-shadow: 0px 0px 3px #2c3e5082;
  }
}

#addTaskForm {
  display: flex;

  button {
    flex: 20%;
    border-radius: 5px;
    padding: 6px;
    background-color: transparent;
    border-color: transparent;
    margin-left: 4px;
  }
  .input {
    flex: 80%;
  }
}

.task {
  flex: 100%;
  padding: 5px;
  border-bottom: 1px solid #d8d8d8;
  background-color: transparent;
}


.fade-in {
  animation: fadeIn 2s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.bounce-in-right {
  animation: bounceInRight 1s ease forwards;
}

@keyframes bounceInRight {
  0% {
    opacity: 0;
    transform: translateX(2000px);
  }
  60% {
    opacity: 1;
    transform: translateX(-30px);
  }
  80% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
