import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    const state = ref({
      count: 0
    })
    function increment() {
      count.value++
      state.value.count++
    }

    function decrement() {
      count.value--
      state.value.count--
    }

    return { count, state, doubleCount, increment, decrement }
  },
  {
    persist: true
  }
)
