TheFoundryWebsite
=================

Website for CS 196. Uses Node.js and Express.js


## How to make new posts:

1. Navigate to ./views/partials/content/posts directory.
2. Create a new .ejs file. The naming convention is YYYYMMDD-title.ejs
3. IMPORTANT: Note that the string ".ejs" can only appear at the end of the filename.
4. Insert title inside <div id="preview-title"></div> tags
5. After that, insert preview content -- usually the first paragraph of the post -- inside <div id="preview-text"></div> tags
6. IMPORTANT: The first and second divs must refer to title and preview content respectively.
7. Posts are written using standard EJS syntax and can access global variables.