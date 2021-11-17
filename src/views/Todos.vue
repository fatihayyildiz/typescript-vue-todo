<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-8 todo-main-container">
      <div
        class="d-flex justify-content-space-between add-todo-input-container"
      >
        <div class="d-flex flex-column justify-content-center add-todo-icon">
          <icon-base
            icon-name="down"
            icon-color="#D0D0D0"
            width="32"
            height="32"
            ><icon-down
          /></icon-base>
        </div>
        <input
          type="text"
          class="add-todo-input"
          v-model="taskText"
          placeholder="What needs to be done?"
          @keyup.enter="addTodo()"
        />
      </div>
      <div class="d-flex justify-content-center">
        <div class="col no-gutters">
          <transition-group name="fade" mode="out-in" tag="ul">
            <div class="todo-list-item-container">
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
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="../components/AddTodo.ts"></script>
