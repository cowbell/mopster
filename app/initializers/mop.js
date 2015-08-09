import Mop from "../services/mop";

export function initialize(container, application) {
  var mop = Mop.create();

  application.register("service:mopidy", mop, {instantiate: false});
  application.inject("controller", "mop", "service:mopidy");
  application.inject("route", "mop", "service:mopidy");
  application.inject("component", "mop", "service:mopidy");
}

export default {
  name: "mop",
  initialize: initialize
};