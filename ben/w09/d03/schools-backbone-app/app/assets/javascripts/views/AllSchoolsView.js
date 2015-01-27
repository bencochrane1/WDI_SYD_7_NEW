var SchoolsApp =  SchoolsApp || {}

SchoolsApp.AllSchoolsView = Backbone.View.extend({
    tagName: 'div',
    className: 'alltheschools',

    initialize: function() {
        this.collection.on("add", this.addLookup, this);
        this.collection.on("reset", this.render, this);
    },

    addLookup: function(school) {
        var lookUpView = new SchoolsApp.LookUpView({ model: school });
        this.$el.append(lookUpView.render().el);
    },

    render: function() {
        this.collection.each(this.addLookup, this);
    }
});