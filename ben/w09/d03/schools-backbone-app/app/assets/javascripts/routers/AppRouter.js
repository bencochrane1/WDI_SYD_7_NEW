var SchoolsApp =  SchoolsApp || {}

SchoolsApp.AppRouter = Backbone.Router.extend({

    schoolsCollection: new SchoolsApp.Schools(),

    openPage: function(url) {
            this.navigate(url, { trigger: true });
        },

    routes: {
        "": "home",
        "about": "aboutPage",
        ":schoolName": "filterSchool"
    },

    home: function() {
        var allSchoolsView = new SchoolsApp.AllSchoolsView({ collection: this.schoolsCollection });
        $("#container").html(allSchoolsView.el);
        this.schoolsCollection.fetch();
    },

    aboutPage: function() {
        $("#container").html(JST['about']())
    },

    filterSchool: function(schoolName) {
        var allSchoolsView = new SchoolsApp.AllSchoolsView({ collection: this.schoolsCollection });
        $("#container").html(allSchoolsView.el);
        this.schoolsCollection.filterBySchool(schoolName);
    }

});