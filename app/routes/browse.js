import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    var uri = params.uri;

    if (uri === "root") {
      uri = null;
    } else {
      // Avoid differences when passing param through route and taken from url on refresh
      uri = encodeURI(decodeURI(uri));
    }

    return this.get("mop").browse(uri);
  }
});
