const profile = {
    name: "John Doe",
    age: 30,
    profession: "Web Developer",
    hobbies: ["Reading", "Hiking", "Photography"],
};

const body = document.querySelector("body");

const div = document.createElement("div");
div.className = "profile-card";

const h2 = document.createElement("h2");
h2.innerText = profile.name;

const p1 = document.createElement("p");
p1.innerText = profile.age;

const p2 = document.createElement("p");
p2.innerText = profile.profession;

const lists = document.createElement("ul");
for (let i = 0; i < profile.hobbies.length; i++) {
    const list = document.createElement("li");
    list.textContent = profile.hobbies[i];
    lists.append(list);
}

div.append(h2, p1, p2, lists);
body.append(div);
