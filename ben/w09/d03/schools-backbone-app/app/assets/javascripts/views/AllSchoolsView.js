var AllSchoolsView = Backbone.View.extend({
    tagName: 'div',
    className: 'alltheschools',

    initialize: function() {
        this.collection.fetch();
        this.collection.on("add", this.addLookup, this);
    },

    addLookup: function(school) {
        var lookUpView = new LookUpView({ model: school });
        this.$el.append(lookUpView.render().el);
    }
});