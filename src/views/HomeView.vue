<template>
  <div>
    <div class="search-container">
    <div class="search-box">
      <input v-model="searchQuery" type="text" placeholder="Search for answers" />
      <i class="fas fa-search search-icon"></i>
    </div>
  </div>

    <div v-if="filteredCategories.length > 0" class="categories">
      <div
        v-for="category in filteredCategories"
        :key="category.id"
        class="category-card"
        @click="goToCategory(category.id)"
      >
        <i :class="category.icon"></i>
        <h3>{{ category.name }}</h3>
        <p class="comment">{{ category.articleCount }} articles</p>
         <p class="last-updated-text">{{ category.lastupdated }} </p>
      </div>
    </div>
    <p v-else>No categories available.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      categories: [],
    };
  },
  computed: {
    filteredCategories() {
      // Only enabled categories and filter by search
      return this.categories
        .filter((category) => category.enabled)
        .filter((category) =>
          category.name.toLowerCase().includes(this.search.toLowerCase())
        )
        .sort((a, b) => a.order - b.order); // Order by the order number
    },
  },
  methods: {
    fetchCategories() {
      // This is where you'd query the backend for categories
      // Simulating a backend call with hardcoded data
      this.categories = [
        { id: 1, name: 'Getting Started', articleCount: 5, enabled: true, order: 1 ,  icon: 'fas fa-comments',lastupdated:'last updated 5 days ago'},
        { id: 2, name: 'Chat Widget Customization', articleCount: 9, enabled: true, order: 2 , icon: 'fas fa-envelope',lastupdated:'last updated 2 days ago'},
        { id: 3, name: 'Using the Dashboard', articleCount: 12, enabled: true, order: 3, icon: 'fas fa-tachometer-alt',lastupdated:'last updated 1 days ago' },
        { id: 4, name: 'Advanced Features', articleCount: 5, enabled: true, order: 4, icon: 'fas fa-play',lastupdated:'last updated 2 days ago' },
        { id: 5, name: 'Integration', articleCount: 6, enabled: true, order: 5 , icon: 'fas fa-tachometer-alt',lastupdated:'last updated 3 days ago'},
        { id: 6, name: 'Integration Ecommerce', articleCount: 5, enabled: true, order: 6 , icon: 'fas fa-play',lastupdated:'last updated 2 days ago'},
        { id: 7, name: 'Desabled Features', articleCount: 7, enabled: false, order: 7 , icon: 'fas fa-play',lastupdated:'last updated 6 days ago'},
        // Add more categories here...
      ];
    },
    goToCategory(id) {
      this.$router.push(`/category/${id}`);
    },
  },
  mounted() {
    this.fetchCategories();
  },
};
</script>

<style lang="scss" scoped>
	@import '../scss/_variables.scss';
.categories {
  display: flex;
  flex-wrap: wrap;
  padding:10px 200px;
  margin:20px;
 
   background-color: #F8F8F8;
   
}
.category-card {
  cursor: pointer;
  padding: 20px;
  border: 1px solid #ddd;
  margin: 10px;
  border-radius: 8px;
  width: 200px;
  text-align: center;
   background-color: white;
}
.search-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.search-box {
  position: relative;
  width: 300px;
}

.search-box input {
  width: 100%;
  padding: 10px 40px 10px 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 25px;
  outline: none;
}

.search-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
}
.category-card i {
  font-size: 24px;
  color: #4CAF50; /* Green color */
}
.comment{
  font-size: 16px;
  color: #4CAF50; /* Green color */
}
.last-updated-text{
  font-size: 12px;
  color: #808080; 
}
@media only screen and (max-width: 600px) {
  .categories {
    padding: 10px;
  }

  .search-box {
    width:200px;
    padding:10px;
  }
}
</style>
