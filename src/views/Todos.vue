<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-6">
      <input
        id="todoName"
        type="text"
        class=""
        v-model="taskText"
        placeholder="Add your next task here"
        @keyup.enter="addTodo()"
      />
      <button
        @click="addTodo()"
        type="button"
        class="button success btn-lg btn-block"
      >
        Add
      </button>
    </div>
  </div>
  <div class="d-flex justify-content-center">
    <div class="col-md-6">
      <table class="main-table">
        <thead>
          <tr>
            <th>To-do List</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <transition-group name="fade" mode="out-in" tag="tbody">
          <tr v-for="task in todos" :key="task.text">
            <td
              v-text="task.text"
              class="line"
              :class="{ 'text-line-through': task.completed }"
            ></td>
            <td class="text-right">
              <i
                class="fa fa-check"
                aria-hidden="true"
                @click="setTaskComplete(task)"
              ></i>
            </td>
            <td class="text-right">
              <i
                class="fa fa-times"
                aria-hidden="true"
                @click.prevent="deleteTask(task)"
              ></i>
            </td>
            <td></td>
          </tr>
        </transition-group>
      </table>
    </div>
  </div>
</template>

<script lang="ts" src="../components/AddTodo.ts">
import "@/assets/scss/todos.scss";
</script>
