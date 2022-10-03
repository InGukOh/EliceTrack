const posts = [
  { title: "Post 1", body: "첫번째 게시글입니다." },
  { title: "Post 2", body: "두번째 게시글입니다." },
  { title: "Post 3", body: "세번째 게시글입니다." },
  { title: "Post 4", body: "네번째 게시글입니다." },
  { title: "Post 5", body: "다섯번째 게시글입니다." },
];

function getPosts() {
  setTimeout(() => {
    let output = "";

    posts.forEach((post, index) => {
      output = output + `<li>${post.title}</li>`;
    });
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
  }, 2000);
}

getPosts();

createPost({ title: "Post N", body: "N번째 게시글입니다." })
  .then(getPosts)
  .catch((err) => console.log(err));
