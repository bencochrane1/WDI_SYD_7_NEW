var School = Backbone.Model.extend({
    urlRoot: '/schools',

    defaults: {
        name: 'UQ',
        description: 'Where I went uni'
    }
});