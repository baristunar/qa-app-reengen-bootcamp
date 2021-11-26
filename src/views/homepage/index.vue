<template>
  <div class="homepage">
    <Categories :categories="categories" />
    <Questions :questions="questions" />
  </div>
</template>

<script>
import Categories from "@/views/homepage/Categories";
import Questions from "@/views/homepage/Questions";
import CategoryService from "@/services/question";
export default {
  name: "homepage",
  components: {
    Categories,
    Questions,
  },
  data() {
    return {
      categories: [],
      questions: [],
    };
  },
  mounted() {
    this.fetchCategories();
    this.fetchQuestions();
  },
  methods: {
    fetchQuestions() {
      setTimeout(() => {
        this.$store.commit("loader/setLoading", true);
        CategoryService.getQuestions()
          .then((resp) => (this.questions = resp.data))
          .catch((err) => console.log(err))
          .finally(() => this.$store.commit("loader/setLoading", false));
      }, 1000);
    },
    fetchCategories() {
      this.$store.commit("loader/setLoading", true);
      setTimeout(() => {
        CategoryService.getCategories()
          .then(
            (resp) =>
              (this.categories = resp.data.map((item) => {
                return {
                  ...item,
                  isSelected: false,
                };
              }))
          )
          .catch((err) => console.log(err))
          .finally(() => this.$store.commit("loader/setLoading", false));
      }, 1000);
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>