const out = document.querySelector(".out");

const video = {
    title: "a",
    tags: ["x", "y", "z"],
    showTags() {
        const self = this;
        this.tags.forEach(function(tag) {
            console.log(self.title, tag);
        });
    }
};

video.showTags();

function playVideo(a, b) {
    console.log(this);
}

playVideo();
playVideo.call({ name: "Mosh" }, 1, 2);
playVideo.apply({ name: "Mosh" }, [1, 2]);
playVideo.bind({ name: "Mosh" })();

const video2 = {
    title: "b",
    tags: ["u", "v", "w"],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }.bind(this));
    }
};

video2.showTags();

const video3 = {
    title: "c",
    tags: ["r", "s", "t"],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};
// arrow functions inherit "this" from the function they're 
// contained in

video3.showTags();