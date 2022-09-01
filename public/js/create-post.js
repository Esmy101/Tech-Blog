const postHandler = async (event) => {
  event.preventDefault();

  const post_title = document.querySelector(".note-title").value.trim();
  const post_context = document.querySelector(".note-textarea").value.trim();

  console.log(post_title, post_context);

  if (post_context && post_title) {
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ post_title, post_context }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to post");
    }
  }
};

document.querySelector("#post-form").addEventListener("submit", postHandler);
