<template>
  <div class="new-question">
    <div class="editor-wrapper">
      <input v-model="title" class="title" type="text" placeholder="title" />
      <select
        name="category-list"
        id="category-list"
        v-model="selectedCategory"
      >
        <option v-for="c in categories" :key="c.id" :value="c.id">
          {{ c.title }}
        </option>
      </select>
      <vue-editor v-model="editorContent" />
      <button class="send-btn" @click="sendQuestion">Gönder</button>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import QuestionService from "@/services/question";
import { mapGetters } from "vuex";
export default {
  name: "new-question",
  components: { VueEditor },
  data() {
    return {
      editorContent: "",
      title: "",
      categories: [],
      selectedCategory: 1,
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      QuestionService.getCategories()
        .then((resp) => (this.categories = resp.data))
        .catch((err) => console.log(err));
    },
    sendQuestion() {
      const body = {
        details: this.editorContent,
        title: this.title,
        created_at: new Date(),
        userId: this.user.id,
        categoryId: this.selectedCategory,
      };
      QuestionService.postQuestion(body)
        .then(() => this.$router.push({ name: "homepage" }))
        .catch((err) => console.log(err));
    },
  },
  computed: {
    ...mapGetters({
      user: "user/_getUser",
    }),
  },
};
</script>

<style lang="css">
select,
input {
  display: block;
}

select {
  margin-bottom: 20px;
}
.new-question {
  width: 100%;
  display: flex;
  justify-content: center;
}
.editor-wrapper {
  margin-top: 50px;
  max-width: 50%;
}

.title {
  margin-bottom: 20px;
}

.send-btn {
  margin-top: 20px;
  background: lightblue;
  padding: 10px 20px;
}

@import "~vue2-editor/dist/vue2-editor.css";
/* Import the Quill styles you want */
@import "~quill/dist/quill.core.css";
@import "~quill/dist/quill.bubble.css";
@import "~quill/dist/quill.snow.css";
</style>