// CSS description
let cssButton = document.querySelector("#css");

function showCssText() {
  let cssText = document.querySelector("#css-text");
  cssText.innerHTML = "CSS text tex";
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
  htmlText.innerHTML = "CSS text tex";
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
  jsText.innerHTML = "CSS text tex";
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
  editorText.innerHTML = "CSS text tex";
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
  githubText.innerHTML = "CSS text tex";
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
  apiText.innerHTML = "CSS text tex";
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
  respText.innerHTML = "CSS text tex";
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
  reactText.innerHTML = "CSS text tex";
}
reactButton.addEventListener("mouseover", showReactText);

function hideReactText() {
  let reactText = document.querySelector("#react-text");
  reactText.innerHTML = " ";
}
reactButton.addEventListener("mouseout", hideReactText);
