// Displaying an object's properties on the console

// Displaying an object's properties on the console

var movie1;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

// Add a second movie and display the same info for it
var movie2;

movie2 = {
  title: "The Incredibles",
  actors: "Craig T. Nelson, Holly Hunter",
  directors: "Brad Bird"
};

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

// Create an object to represent a blog post
var blogPost;

blogPost = {
  title: "My First Blog Post",
  author: "John Doe",
  date: "2022-01-01",
  content: "This is my first blog post. I'm excited to share my thoughts with the world!"
};

console.log("Blog Post Information");
console.log("------------------------------");
console.log("Title: " + blogPost.title);
console.log("Author: " + blogPost.author);
console.log("Date: " + blogPost.date);
console.log("Content: " + blogPost.content);
console.log("------------------------------");

/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */