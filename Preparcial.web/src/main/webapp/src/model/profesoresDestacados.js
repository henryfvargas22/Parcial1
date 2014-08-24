define(['model/profesoresDestacadosModel'], function() {
//Aquí se define la estructura de un ítem de la lista. Note que el modelo extiende el modelo estándar backbone.
    App.Model.ProfesoresDestacadosModel = Backbone.Model.extend({
        defaults: {
         'name' : '',
         'vinculacion' : ''
        },
        getDisplay: function(name) {
         return this.get(name);
        }
        });
//Aquí se define el modelo de la lista. El modelo de la lista extiende de Backbone.Collection. En el atributo ‘model’ se define el modelo  (definido arriba) que corresponde al molde de cada uno de los ítems de la lista.
    App.Model.ProfesoresDestacadosList = Backbone.Collection.extend({
        model: App.Model.ProfesoresDestacadosModel
    });
    return  App.Model.ProfesoresDestacadosModel;
});

