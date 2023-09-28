const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "New Image");
document.body.appendChild(newImage);

const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
const newPara = document.createElement("p");

newH2.innerText = "CSE 121b";
newPara.innerText = "Welcome to Javascript Language";

newSection.appendChild(newH2);
newSection.appendChild(newPara);
document.body.appendChild(newSection);