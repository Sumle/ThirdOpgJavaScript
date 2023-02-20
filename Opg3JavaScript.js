Vue.createApp({
  el: '#app',
  data: {
    searchQuery: '',
    searchResults: []
  },
  methods: {
    search() {
      // Generate variations of the search query
      const variations = [
        this.searchQuery,
        this.searchQuery.toLowerCase(),
        this.searchQuery.toUpperCase(),
        this.searchQuery.charAt(0).toUpperCase() + this.searchQuery.slice(1),
        this.searchQuery.charAt(0).toLowerCase() + this.searchQuery.slice(1),
        this.searchQuery.split('').reverse().join('')
      ];

      // Filter the variations to remove duplicates and empty strings
      const filteredVariations = [...new Set(variations)].filter(v => v.trim() !== '');

      // Update the searchResults array with the filtered variations
      this.searchResults = filteredVariations;
    }
  }
});