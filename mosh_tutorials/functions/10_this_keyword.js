const out = document.querySelector(".out");

// method -> obj
// function -> global(window, global)

const video = {
    title: "a",
    tags: ["x", "y", "z"],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
    }
};

video.showTags();