var SchoolsApp = SchoolsApp || {};

SchoolsApp.Schools = Backbone.Collection.extend({
    model: SchoolsApp.School,
    url: '/schools',
    previousModels: [],

   initialize: function() {
        this.on("sync", this.saveCopy, this);
   },

   filterBySchool: function(name) {    
        var matchedSchools = _.filter(this.previousModels, function(school){
            return school.get("name") === name;
        });
        this.reset(matchedSchools);
   },

   saveCopy: function() {
        this.previousModels = [];
        this.each(function(school){
            this.previousModels.push(school);
        }, this);
   }
});