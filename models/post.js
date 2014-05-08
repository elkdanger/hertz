var entity = require("./entity"),
    uuid = require("node-uuid");

/**
 * Constructs a new post
 */
var Post = function () {
    entity.configure(this, "post", uuid.v1());

    this.title = "A new blog post";
    this.slug = "a-new-blog-post";
    this.created = new Date();
    this.description = "An example of what you should and should not do with NodeJS";
    this.authorName = "elkdanger";

    //console.log(this);
}

Post.prototype = {

};

module.exports = Post;