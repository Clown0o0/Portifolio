document.addEventListener('DOMContentLoaded', () => {

const root = document.documentElement
const skillsContainer = document.getElementById("skills-container")
const addBtn = document.getElementById("add-skill-btn")

let skills = JSON.parse(localStorage.getItem("skills")) || [

{
title:"Frontend",
items:"HTML5, CSS3, JavaScript (ES6+), React, TypeScript"
},

{
title:"Backend",
items:"Node.js, Python (Flask/Django), REST APIs"
},

{
title:"Banco de Dados",
items:"PostgreSQL, MySQL, MongoDB"
},

{
title:"Outros",
items:"Git, Docker, AWS, CI/CD"
},

{
title:"Competências linguísticas",
items:"Inglês avançado C1, Alemão Básico"
}

]

function saveSkills(){

localStorage.setItem("skills",JSON.stringify(skills))

}

function renderSkills(){

if(!skillsContainer) return

skillsContainer.innerHTML=""

skills.forEach((skill,index)=>{

const card=document.createElement("div")
card.className="skill"

const del=document.createElement("button")
del.textContent="✕"
del.className="delete-skill"

del.onclick=()=>{

skills.splice(index,1)

saveSkills()

renderSkills()

}

const title=document.createElement("h4")
title.textContent=skill.title

const text=document.createElement("p")
text.textContent=skill.items

card.appendChild(del)
card.appendChild(title)
card.appendChild(text)

skillsContainer.appendChild(card)

})

}

if(addBtn){

addBtn.onclick=()=>{

const title=prompt("Nome da competência")

if(!title) return

const items=prompt("Tecnologias / descrição")

if(!items) return

skills.push({

title:title,
items:items

})

saveSkills()

renderSkills()

}

}

const projectsData = [

{
title:"Banana Website",
category:"web",
tech:"Next.js · Vercel",
image:"assets/site_da_banana_placeholder.png.png",
links:[
{ text:"Abrir Site", href:"https://site-da-banana-qk1g.vercel.app", className:"btn small" }
]
},

{
title:"API de Processamento — Censo SJC",
category:"api",
tech:"Python · Flask · ETL",
image:"assets/sjc_ponto_turistico.png",
links:[
{ text:"Abrir Projeto", href:"https://github.com/FATCK06/ProjectAPI_FirstSemester", className:"btn small" }
]
}

]

function renderProjects(filter="all"){

const container=document.getElementById("projects-container")

if(!container) return

container.innerHTML=""

projectsData.forEach(project=>{

if(filter!=="all" && project.category!==filter) return

const article=document.createElement("article")
article.className="project-card"

const img=document.createElement("img")
img.src=project.image
img.style.width="100%"
img.style.height="200px"
img.style.objectFit="cover"

const title=document.createElement("h3")
title.textContent=project.title

const tech=document.createElement("p")
tech.className="muted"
tech.textContent=project.tech

article.appendChild(img)
article.appendChild(title)
article.appendChild(tech)

project.links.forEach(link=>{

const a=document.createElement("a")
a.className=link.className
a.href=link.href
a.target="_blank"
a.textContent=link.text

article.appendChild(a)

})

container.appendChild(article)

})

}

document.querySelectorAll('.filter-btn').forEach(btn=>{

btn.addEventListener('click',()=>{

document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'))

btn.classList.add('active')

renderProjects(btn.getAttribute('data-filter'))

})

})

document.querySelectorAll('#year').forEach(el=>el.textContent=new Date().getFullYear())

document.getElementById('nav-toggle')?.addEventListener('click',()=>{

document.getElementById('main-nav')?.classList.toggle('open')

})

const savedTheme = localStorage.getItem('theme')

if(savedTheme) root.setAttribute('data-theme', savedTheme)

document.querySelectorAll('.theme-toggle').forEach(toggle=>{

toggle.textContent=root.getAttribute('data-theme')==='dark'?'☀️':'🌙'

toggle.addEventListener('click',()=>{

const current=root.getAttribute('data-theme')

const next=current==='dark'?'light':'dark'

root.setAttribute('data-theme',next)

localStorage.setItem('theme',next)

toggle.textContent=next==='dark'?'☀️':'🌙'

})

})

renderSkills()
renderProjects("all")

})