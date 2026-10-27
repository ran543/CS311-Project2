const button = document.getElementById("loadButton");

const postsDiv = document.getElementById("posts");

const message = document.getElementById("message");


button.addEventListener("click", loadPosts);


async function loadPosts() {

    postsDiv.innerHTML = "";

    message.textContent = "Loading posts...";


    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );


        if (!response.ok) {

            throw new Error("Failed to fetch post data.");

        }


        const data = await response.json();

        message.textContent = "";


        const posts = data.slice(0, 20);


        posts.forEach(function(post) {

            const card = document.createElement("div");

            card.className = "card";


            const title = document.createElement("h2");

            title.textContent = post.title;


            const body = document.createElement("p");

            body.textContent = post.body;


            const user = document.createElement("p");

            user.textContent = "User ID: " + post.userId;


            const id = document.createElement("p");

            id.textContent = "Post ID: " + post.id;


            card.appendChild(title);

            card.appendChild(body);

            card.appendChild(user);

            card.appendChild(id);


            postsDiv.appendChild(card);

        });


    } catch (error) {

        message.textContent =
            "Error loading data: " +
            error.message;

    }

}