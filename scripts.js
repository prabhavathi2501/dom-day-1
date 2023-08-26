// const element = document.createElement("div")
// element.innerHTML="<p>this is dynamic div</p>"
// document.body.append(element);



// const element2 = document.createElement("div")
// element2.innerHTML="<span>this dynamic span</span>"
// document.body.append(element2);

// const element = document.createElement("div")
// const element1 = document.createElement("div")
// const element2 = document.createElement("span")
// element2.innerHTML="this is prabha  span"
// element1.append(element2);
// element.append(element1);
// document.body.append(element)






//  const header = document.createElement("header")
// const section = document.createElement("section")
// const span = document.createElement("span")
// const article = document.createElement("article")
// const p = document.createElement("p")

// span.innerHTML="this is an span"
// p.innerHTML="this is a pragraph"
// section.append(span)
// article.append(p)
// header.append(section,article)
// document.body.append(header);
//============================
//***this is an above example give an child elements */
// const header = document.createElement("header")
// const section = document.createElement("section")
// const span = document.createElement("span")
// const article = document.createElement("article")
// const p = document.createElement("p")

// span.innerHTML="this is an span"
// p.innerHTML="this is a pragraph"
// section.appendChild(span)
// article.appendChild(p)
// header.appendChild(section)
// header.appendChild(article)
// document.body.append(header);

 










// task==2
// const div = document.createElement("div")
//  const header = document.createElement("header")
// const section = document.createElement("section")
// const span = document.createElement("span")
// const article = document.createElement("article")
// const p = document.createElement("p")
// const header1 = document.createElement("header")
// const section1 = document.createElement("section")
// const span1 = document.createElement("span")
// const article1 = document.createElement("article")
// const p1 = document.createElement("p")
// section.innerHTML="this span element"
// article.innerHTML="this is pragrap tag"
// section1.innerHTML="this is span1"
// article1.innerHTML="this is pragrap1"
// section.appendChild(span);
// article.appendChild(p);
// section1.appendChild(span1);
// article1.appendChild(p1);
// header.append(section,article);
// header1.append(section1,article1);
// div.append(header,header1);
// document.body.append(div);
//===================================
//this is innerHTML ex
// const ex1 = document.createElement("div")
//  ex1.innerHTML="<span>this is span</span>"
// document.body.append(ex1);


//this is innertext ex:
// const ex1 = document.createElement("div")
// ex1.innerText="<span>this is span</span>"
// document.body.append(ex1);
//=====================================

// const att = document.createElement("div")
//  att.setAttribute("class","container")
//  att.setAttribute("id","container")
 // att.innerHTML="this is attribute"
//  document.body.append(att);


const div = document.createElement("div")
 const header = document.createElement("header")
const section = document.createElement("section")
const span = document.createElement("span")
const article = document.createElement("article")
const p = document.createElement("p")
const header1 = document.createElement("header")
const section1 = document.createElement("section")
const span1 = document.createElement("span")
const article1 = document.createElement("article")
const p1 = document.createElement("p")
section.innerHTML="this span element"
article.innerHTML="this is pragrap tag"
section1.innerHTML="this is span1"
article1.innerHTML="this is pragrap1"
section.appendChild(span);
article.appendChild(p);
section1.appendChild(span1);
article1.appendChild(p1);
header.append(section,article);
header1.append(section1,article1);
div.append(header,header1);
document.body.append(div);
