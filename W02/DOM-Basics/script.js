const selectElem = document.getElementById("webdevlist");
const topicsSection = document.getElementById("topics");
const tagline = document.getElementById("tagline");
const pageTitle = document.getElementById("pageTitle");
const trifectaImg = document.getElementById("trifectaImg");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");

const rule = document.querySelector("#rule");
const firstTopicCard = document.querySelector(".topic");

function hideAllTopics() {
  document.getElementById("topic-html").classList.add("hidden");
  document.getElementById("topic-css").classList.add("hidden");
  document.getElementById("topic-js").classList.add("hidden");
}

function showTopic(topic) {
  hideAllTopics();
  document.getElementById(`topic-${topic}`).classList.remove("hidden");
}

function showAllTopics() {
  document.getElementById("topic-html").classList.remove("hidden");
  document.getElementById("topic-css").classList.remove("hidden");
  document.getElementById("topic-js").classList.remove("hidden");
}

function applyTopicStyling(topic) {
  rule.style.backgroundColor = topic === "html" ? "#d35400"
                        : topic === "css"  ? "#2980b9"
                        : topic === "js"   ? "#f1c40f"
                        : "#035f9c";

  tagline.textContent = topic === "html" ? "HTML gives the page structure."
                    : topic === "css"  ? "CSS makes the page look good."
                    : topic === "js"   ? "JavaScript makes the page interactive."
                    : "The foundational technologies that power websites and web applications";

  if (topic === "choose" || topic === "all") {
    firstTopicCard.className = "topic";
  } else {
    firstTopicCard.className = "topic highlight";
  }

  const imgSrc = topic === "html"
    ? "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
    : topic === "css"
    ? "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
    : topic === "js"
    ? "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    : "https://wddbyui.github.io/wdd131/images/trifecta.png";

  trifectaImg.setAttribute("src", imgSrc);
  trifectaImg.setAttribute("alt", topic === "choose" || topic === "all" ? "JS, CSS, and HTML logos" : `${topic.toUpperCase()} logo`);

  trifectaImg.style.width = (topic === "js") ? "26%" : "50%";
}

const styleTag = document.createElement("style");
styleTag.textContent = `
  .highlight { border-color: #999; box-shadow: 0 6px 18px rgba(0,0,0,.08); }
`;
document.head.appendChild(styleTag);

selectElem.addEventListener("change", function () {
  const codeValue = selectElem.value;
  console.log("Selected:", codeValue);

  if (codeValue === "choose") {
    showAllTopics();
    applyTopicStyling("choose");
    pageTitle.textContent = "HTML, CSS, and JS";
    return;
  }

  if (codeValue === "all") {
    showAllTopics();
    applyTopicStyling("all");
    pageTitle.textContent = "HTML, CSS, and JS";
    return;
  }

  showTopic(codeValue);
  applyTopicStyling(codeValue);
  pageTitle.textContent = codeValue.toUpperCase();
});

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
