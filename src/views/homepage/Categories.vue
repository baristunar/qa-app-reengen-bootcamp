<template>
  <div class="categories">
    <router-link class="new-question-btn" :to="{ name: 'new-question' }"
      >Yeni soru yaz</router-link
    >
    <ul class="categories__menu">
      <li v-for="(c, i) in categories" :key="c.id">
        <button @click="c.isSelected = !c.isSelected">
          <span :class="textColor(i)">{{ c.title }}</span>
          <svg
            v-if="c.isSelected"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="check-circle"
            class="svg-inline--fa fa-check-circle fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="green"
              d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
            ></path>
          </svg>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
      default: [],
    },
  },
  data() {
    return {
      colors: [
        "text-red-600",
        "text-blue-300",
        "text-yellow-400",
        "text-pink-400",
        "text-green-600",
        "text-blue-500",
        "text-yellow-700",
        "text-red-400",
      ],
    };
  },
  methods: {
    textColor(index) {
      return this.colors[index % this.colors.length];
    },
  },
  watch: {
    categories: {
      deep: true,
      handler(){}
    },
  },
};
</script>

<style>
</style>