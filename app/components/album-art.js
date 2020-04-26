import Ember from "ember";
import layout from "../templates/components/album-art";

export default Ember.Component.extend({
  layout: layout,
  classNames: ["album-art"],

  getImage: function () {
    const album = this.get("album");
    if ("images" in album && album.images.length) {
      this.set("imageURL", album.images[0]);
    } else {
      $.getJSON(`http://itunes.apple.com/search?term=${encodeURIComponent(album.name)}&limit=1&entity=album&callback=?`)
      .done((response) => {
        if (response.results[0]) {
          this.set("imageURL", response.results[0].artworkUrl100);
        }
      });
    }
  }.on("init"),
});
