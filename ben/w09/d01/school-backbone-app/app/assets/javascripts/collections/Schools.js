var SchoolsApp = SchoolsApp || {};

SchoolsApp.Schools = Backbone.Collection.extend({
    model: School,
    url: '/schools',
    previousModels: [],


    // when you initially load the collection data, save a copy of it so you can use it for later rather than needing to re-render the collection data from the database
    initialize: function() {
        this.on("sync", this.saveCopy, this);
    },

    filterBySchool: function(schoolName) {
        var matchedSchools = _.filter(this.previousModels, function(school){
            return school.get("schoolName") === schoolName;
        });
        this.reset(matchedSchools);
    },

    saveCopy: function() {
        this.previousModels = [];
        this.each(function(school) {
            this.previousModels.push(school);
        }, this);
    }


});