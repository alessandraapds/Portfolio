// CSS description
let cssButton = document.querySelector("#css");

function showCssText() {
  let cssText = document.querySelector("#css-text");
  cssText.innerHTML =
    "CSS stands for Cascading Style Sheets, and it's used to add style to a web page by dictating how a site is displayed on a browser.";
}
cssButton.addEventListener("mouseover", showCssText);

function hideCssText() {
  let cssText = document.querySelector("#css-text");
  cssText.innerHTML = " ";
}
cssButton.addEventListener("mouseout", hideCssText);

// HTML description
let htmlButton = document.querySelector("#html");

function showHtmlText() {
  let htmlText = document.querySelector("#html-text");
  htmlText.innerHTML =
    "HTML is the language for describing the structure of Web pages. ";
}
htmlButton.addEventListener("mouseover", showHtmlText);

function hideHtmlText() {
  let htmlText = document.querySelector("#html-text");
  htmlText.innerHTML = " ";
}
htmlButton.addEventListener("mouseout", hideHtmlText);

// JS description
let jsButton = document.querySelector("#js");

function showJsText() {
  let jsText = document.querySelector("#js-text");
  jsText.innerHTML =
    "Javascript is used by programmers to create dynamic and interactive web content. ";
}
jsButton.addEventListener("mouseover", showJsText);

function hideJsText() {
  let jsText = document.querySelector("#js-text");
  jsText.innerHTML = "";
}
jsButton.addEventListener("mouseout", hideJsText);

// Editor description
let editorButton = document.querySelector("#editor");

function showEditorText() {
  let editorText = document.querySelector("#editor-text");
  editorText.innerHTML =
    "Code editors or source code editors are software that is designed specifically to help developers with coding.";
}
editorButton.addEventListener("mouseover", showEditorText);

function hideEditorText() {
  let editorText = document.querySelector("#editor-text");
  editorText.innerHTML = " ";
}
editorButton.addEventListener("mouseout", hideEditorText);

// Github description
let githubButton = document.querySelector("#github");

function showGithubText() {
  let githubText = document.querySelector("#github-text");
  githubText.innerHTML =
    "GitHub is a code hosting platform for version control and collaboration.";
}
githubButton.addEventListener("mouseover", showGithubText);

function hideGithubText() {
  let githubText = document.querySelector("#github-text");
  githubText.innerHTML = " ";
}
githubButton.addEventListener("mouseout", hideGithubText);

// API description
let apiButton = document.querySelector("#api");

function showApiText() {
  let apiText = document.querySelector("#api-text");
  apiText.innerHTML =
    "API is a intermediary software that allows two applications to talk to each other.";
}
apiButton.addEventListener("mouseover", showApiText);

function hideApiText() {
  let apiText = document.querySelector("#api-text");
  apiText.innerHTML = " ";
}
apiButton.addEventListener("mouseout", hideApiText);

// Responsive description
let respButton = document.querySelector("#responsive");

function showRespText() {
  let respText = document.querySelector("#responsive-text");
  respText.innerHTML =
    "Responsive web design (RWD) is a web development approach that creates dynamic changes to the appearance of a website, depending on the screen size and view orientation.";
}
respButton.addEventListener("mouseover", showRespText);

function hideRespText() {
  let respText = document.querySelector("#responsive-text");
  respText.innerHTML = " ";
}
respButton.addEventListener("mouseout", hideRespText);

// React description
let reactButton = document.querySelector("#react");

function showReactText() {
  let reactText = document.querySelector("#react-text");
  reactText.innerHTML =
    "React is a JavaScript library that allows developers to easily create fast user interfaces for websites and applications alike.";
}
reactButton.addEventListener("mouseover", showReactText);

function hideReactText() {
  let reactText = document.querySelector("#react-text");
  reactText.innerHTML = " ";
}
reactButton.addEventListener("mouseout", hideReactText);

window.addEventListener("scroll", () => {
  let scrolled = window.scrollY;
  let skillsTag = document.querySelector("#skills-tag");

  if (scrolled > 900 && scrolled < 1150) {
    skillsTag.innerHTML =
      '<font size=4 ><i class="fa-solid fa-screwdriver-wrench"></i> Skills (Place your mouse over the skills to see what they stand for!)</font>';
  } else {
    skillsTag.innerHTML =
      '<i class="fa-solid fa-screwdriver-wrench"></i> Skills';
  }
});
