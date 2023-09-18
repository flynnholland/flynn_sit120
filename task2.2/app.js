const App = {
  data() {
    return {
      title: "GameHive",
      currentPage: "homepage",
      userName: "Flynn",
      gameName: "Halo",
      userStats: {
        level: 23,
        rank: "Silver",
        favoriteHero: "Master Chief",
      },
      leaderboards: [
        { name: 'Alice', score: 23 },
        { name: 'Bob', score: 18 },
        { name: 'Eve', score: 29 },
      ],
      newEntry: { name: '', score: '' }
    };
  },
  methods: {
    navigateTo(page) {
      this.currentPage = page;
    },
    sortLeaderboard() {
      this.leaderboards.sort((a, b) => b.score - a.score);
    },
    updateLeaderboard() {
      if (this.newEntry.name && this.newEntry.score) {
        this.leaderboards.push({ name: this.newEntry.name, score: parseInt(this.newEntry.score) });
        this.newEntry.name = '';
        this.newEntry.score = '';
        this.sortLeaderboard();
      }
    }
  },
  mounted() {
    this.sortLeaderboard();
  },
};

Vue.createApp(App).mount("#app");
