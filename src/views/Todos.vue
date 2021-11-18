<template>
  <div class="d-flex justify-content-center">
    <div
      class="col-xl-8 col-lg-8 col-md-8 col-sm-10 col-12 todo-main-container"
    >
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
        <div class="col no-gutters todo-list-container">
          <transition-group name="todo-list" mode="in-out">
            <div
              class="d-flex no-gutters"
              v-for="task in todos"
              :key="task.text"
            >
              <div class="todo-list-item-checkbox-wrapper">
                <label class="todo-list-item-checkbox-label">
                  <input type="checkbox" v-model="task.completed" />
                  <span class="todo-completed-checkbox"></span>
                </label>
              </div>

              <div class="d-flex justify-content-start align-items-center">
                <span
                  class="todo-list-item-text"
                  :class="{ completed: task.completed }"
                  >{{ task.text }}</span
                >
              </div>
              <div
                class="
                  d-flex
                  justify-content-end
                  align-items-center align-content-end
                  todo-list-item-delete-icon-wrapper
                "
              >
                <icon-base
                  icon-name="close"
                  icon-color="#D0D0D0"
                  width="12"
                  height="12"
                  ><icon-close
                /></icon-base>
              </div>
            </div>
          </transition-group>
          <div class="d-flex">
            <div class="p-2">Flex item</div>
            <div class="p-2">Flex item</div>
            <div class="ml-auto p-2">Flex item</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="../components/AddTodo.ts"></script>
