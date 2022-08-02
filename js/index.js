const allTopicLinks = document.querySelectorAll(".topic-link");

allTopicLinks.forEach((link) => {
  link.addEventListener("click", () => {
    let fileName =
      "./html/topics/" + link.className.replace("topic-link ", "") + ".html";
    location.href = fileName;
  });
});

const allLinks = document.getElementsByTagName("a");
for (var i = 0; i < allLinks.length; i++) {
  allLinks[i].target = "_blank";
}

const homeBtn = document.querySelector(".home-btn");
if (homeBtn !== null) {
  homeBtn.children[0].target = "";
}
