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
              v-for="todo in filteredTodos"
              :key="todo.text"
            >
              <div class="todo-list-item-checkbox-wrapper">
                <label class="todo-list-item-checkbox-label">
                  <input type="checkbox" v-model="todo.completed" />
                  <span class="todo-completed-checkbox"></span>
                </label>
              </div>

              <div class="d-flex justify-content-start align-items-center">
                <span
                  class="todo-list-item-text"
                  :class="{ completed: todo.completed }"
                  >{{ todo.text }}</span
                >
              </div>
              <div
                class="
                  d-flex
                  justify-content-end
                  align-items-center align-content-end
                  todo-list-item-delete-icon-wrapper
                "
                @click="deleteTodo(todo)"
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
          <div class="d-flex justify-content-between">
            <div class="p-2">
              <span class="items-left-text"
                >{{ todos?.filter((td) => !td.completed).length }} items
                left</span
              >
            </div>
            <div
              class="d-flex flex-row justify-content-between align-items-center"
            >
              <div
                class="list-type-button"
                :class="{ active: activeView === 'All' }"
                @click="setActiveView('All')"
              >
                <span>All</span>
              </div>
              <div
                class="list-type-button"
                :class="{ active: activeView === 'Active' }"
                @click="setActiveView('Active')"
              >
                <span>Active</span>
              </div>
              <div
                class="list-type-button"
                :class="{ active: activeView === 'Completed' }"
                @click="setActiveView('Completed')"
              >
                <span>Completed</span>
              </div>
            </div>
            <div class="ml-auto p-2" @click="clearCompletedTodos()">
              <span class="items-left-text clear-completed"
                >Clear Completed</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="../components/AddTodo.ts"></script>
