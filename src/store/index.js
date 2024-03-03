import { createStore } from "vuex";

const store = createStore({
    state: {
        modalAddTask: false,
        modalEditTask: false,
        selectedTask: null,
        taskList: []
    },
    mutations: {
        setTaskList(state, taskList) {
            state.taskList = taskList;
        },

        // remove task
        removeTask(state, taskId) {
            state.taskList = state.taskList.filter((task) => task.id !== taskId);
        },

        // add task modal control
        openModalAddTask(state) {
            state.modalAddTask = true
        },
        closeModalAddTask(state) {
            state.modalAddTask = false
        },

        // edit task modal controls
        openModalEditTask(state) {
            state.modalEditTask = true;

        },
        closeModalEditTask(state) {
            state.modalEditTask = false
        },
        setSelectedTask(state, taskId) {
            state.selectedTask = state.taskList.find(item => item.id === taskId)
        },
        clearSelectedtask(state) {
            state.selectedTask = null;
        },

        // add task
        addTask(state, newTask) {
            const index = state.taskList.length + 1; // get the id from task array index

            // push the new task
            state.taskList.push({
                id: index,
                ...newTask
            })
        },

        // updated the task
        updateTask(state, updatedTask) {
            const index = state.taskList.findIndex((task) => task.id === updatedTask.id);
            if (index !== -1) {
                state.taskList[index] = updatedTask;
            }
            state.selectedTask = null
        }
    },
    actions: {

        fetchTasks({ commit }) {
            const key = 'tasks_list';
            const taskList = JSON.parse(localStorage.getItem(key) || '[]');
            commit('setTaskList', taskList);
        },

        saveTasks({ state }) {
            const key = 'tasks_list';
            localStorage.setItem(key, JSON.stringify(state.taskList));
        },

        removeTask({ commit, dispatch }, taskId) {
            commit('removeTask', taskId);
            dispatch('saveTasks');
        },

        // add task modal
        openModalAddTask({ commit }) {
            commit('openModalAddTask');
        },

        closeModalAddTask({ commit }) {
            commit('closeModalAddTask');
        },

        // edit task modal
        openModalEditTask({ commit }) {
            commit('openModalEditTask');
        },

        closeModalEditTask({ commit }) {
            commit('closeModalEditTask');
            commit('clearSelectedtask');
        },

        setSelectedTask({ commit }, taskId) {
            commit('setSelectedTask', taskId)
        },

        // add new task
        addTask({ commit, dispatch }, newTask) {
            commit('addTask', newTask);
            dispatch('saveTasks');
            commit('closeModalAddTask');
        },
        
        editTask({ commit, dispatch }, updatedTask) {
            commit('updateTask', updatedTask);
            dispatch('saveTasks');
            commit('closeModalEditTask');
        }
    },
})

export default store;