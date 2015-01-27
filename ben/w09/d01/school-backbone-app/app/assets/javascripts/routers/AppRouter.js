var SchoolsApp = SchoolsApp || {};

SchoolsApp.Router = Backbone.Router.extend({

    schoolsCollection: new SchoolsApp.Schools();

// allows navigation to be triggered via an inputted url
    openPage: function(url) {
        this.navigate(url, { trigger: true });
    },

    routes: {
        "": "home",
        "about": "aboutPage",
        ":school": "filterSchool"
    },

    home: function() {
        var 
    }
});