<template>
  <div class="category-view">
  <div >
  <div class="category-card">
    <i :class="icon"></i>
    <h2>{{ categoryName }} </h2>
     <p class="last-updated-text">{{ updated }} </p>
     <div class="bottom-div">
     <i class="fas fa-info-circle"></i>
     <div> some content</div>
    
     </div>
    </div>
    </div>
    <div>
    <div v-if="articles.length > 0" class="articles-list">
      <div v-for="article in articles" :key="article.id" class="article-card">
        <!-- Article Icon -->
        <i class="fas fa-file-alt article-icon"></i> 
        <div class="article-info">
          <h3>{{ article.title }}</h3>
          <p>Published on {{ article.publishDate }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No articles available in this category.</p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      
      categoryName: "Getting Started", // Example category name
      articles: [
        {
          id: 1,
          title: 'Creating a New Account',
          publishDate: 'Jun 15, 2019',
        },
        {
          id: 2,
          title: 'Adding a Widget to Your Website',
          publishDate: 'Jun 15, 2019',
        },
        {
          id: 3,
          title: 'How to Add Additional Websites to the Dashboard',
          publishDate: 'Jun 15, 2019',
        },
        {
          id: 4,
          title: 'Creating a New Account',
          publishDate: 'Jun 15, 2019',
        },
        {
          id: 5,
          title: 'Adding a Widget to Your Website',
          publishDate: 'Jun 15, 2019',
        },
        {
          id: 6,
          title: 'How to Add Additional Websites to the Dashboard',
          publishDate: 'Jun 15, 2019',
        },
      ],
    };
  },
   computed: {
    filteredArticles() {
      // Only show published articles
      return this.articles.filter((article) => article.published);
    },
  },
  methods: {
    fetchCategoryAndArticles() {
      // Simulating a backend call for category and its articles
      const categories = [
        { id: 1, name: 'Getting Started', articleCount: 5, enabled: true, order: 1 ,  icon: 'fas fa-comments',lastupdated:'last updated 5 days ago'},
        { id: 2, name: 'Chat Widget Customization', articleCount: 9, enabled: true, order: 2 , icon: 'fas fa-envelope',lastupdated:'last updated 2 days ago'},
        { id: 3, name: 'Using the Dashboard', articleCount: 12, enabled: true, order: 3, icon: 'fas fa-tachometer-alt',lastupdated:'last updated 1 days ago' },
        { id: 4, name: 'Advanced Features', articleCount: 5, enabled: true, order: 4, icon: 'fas fa-play',lastupdated:'last updated 2 days ago' },
        { id: 5, name: 'Integration', articleCount: 6, enabled: true, order: 5 , icon: 'fas fa-tachometer-alt',lastupdated:'last updated 3 days ago'},
        { id: 6, name: 'Integration Ecommerce', articleCount: 5, enabled: true, order: 6 , icon: 'fas fa-play',lastupdated:'last updated 2 days ago'},
        { id: 7, name: 'Desabled Features', articleCount: 7, enabled: false, order: 7 , icon: 'fas fa-play',lastupdated:'last updated 6 days ago'},
        // Add more categories here...
      ];
      const category1 = categories.find((cat) => cat.id === parseInt(this.id));

      if (category1) {
        this.categoryName = category1.name;
        this.icon = category1.icon;
        this.updated=category1.lastupdated;
        this.articles = [
          { id: 1, title: 'Creating a New Account', published: true ,  publishDate: 'Jun 15, 2019', },
          { id: 2, title: 'Adding a Widget to Your Website', published: true, publishDate: 'Jun 15, 2019', },
          { id: 3, title: 'How to Invite and Manage Agents', published: true, publishDate: 'Jun 15, 2019', },
          { id: 1, title: 'Creating a New Account', published: true, publishDate: 'Jun 15, 2019', },
          { id: 2, title: 'Adding a Widget to Your Website', published: true, publishDate: 'Jun 15, 2019', },
          { id: 3, title: 'How to Invite and Manage Agents', published: true, publishDate: 'Jun 15, 2019', },
          // Add more articles...
        ];
      }
    },
  },
  mounted() {
    this.fetchCategoryAndArticles();
  },
};

</script>

<style lang="scss" scoped>
	@import '../scss/_variables.scss';
.category-view {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
   padding:10px 200px;
  margin:20px;
 
 
   background-color: #F8F8F8;
}

h2 {
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
}

.articles-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
 
}

.article-card {
  display: flex;
  align-items: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
 
  transition: box-shadow 0.3s ease;
  cursor: pointer;
    background-color: white;
}

.article-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.article-icon {
  font-size: 24px;
  color: #4CAF50; /* Green color for article icons */
  margin-right: 15px;
}

.article-info {
  display: flex;
  flex-direction: column;
 

}

.article-info h3 {
  margin: 0;
  font-size: 18px;
  color: #333;
}

.article-info p {
  margin: 5px 0 0;
  font-size: 14px;
  color: #777;
}

p {
  font-size: 16px;
  color: #888;
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
.category-card i {
  font-size: 24px;
  color: #4CAF50; /* Green color */
}
.last-updated-text{
  font-size: 12px;
  color: #808080;
}
.bottom-div{
  cursor: pointer;
  padding:10px;
margin:1px ,0px;


  
  text-align: center;
   background-color: white;
   border-top: 1px solid #808080;
}
@media only screen and (max-width: 600px) {
 .category-view {
  padding: 20px;

  margin: 0 auto;
  display:flex;
  flex-direction:column;
  justify-content:space-between;

  margin:0px;
 
 
   background-color: #F8F8F8;
}
.category-card {
  cursor: pointer;
  padding: 20px;
  border: 1px solid #ddd;
  margin: 10px;
  border-radius: 8px;
  text-align: center;
   background-color: white;
}
}
</style>
