TheFoundryWebsite
=================

Website for CS 196. Uses Node.js and Express.js


## How to make new posts:

1. Navigate to ./views/partials/content/posts directory.
2. Create a new .json file. The naming convention is YYYYMMDD-title.ejs. This is to ensure that the files show up in the correct order.
3. JSON files must have these properties:
```
{
  "title": "Post Title",
  "author": "John Public",
  "timestamp": "2014/10/21",
  "preview": "Show the first paragraph in the preview page!",
  "content": "<p>Show the first paragraph in the preview page!</p>\n<p>And here is the rest of the post content. Enjoy the blog!</p>"
}
```
4. Posts are written using standard HTML syntax.