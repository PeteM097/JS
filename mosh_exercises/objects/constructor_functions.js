const out = document.querySelector(".out");

const blogPost = {
    title: "To Massage a Kasowari",
    body: "blah blah blah",
    author: "Larper Hee",
    views: 250000,
    comments: [{author: "Joe Blogs", comment: "Great book!" },
    {author: "Nancy Pelosi", comment: "Eh, it's alright."}],
    isLive: false
}

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.live = false;
}

let post = new Post('a', 'b', 'c');

console.log(post);