// ============================================
// CARROSSEL
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelector(".slides");
    const imagens = document.querySelectorAll(".slides img");

    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    if (!slides || imagens.length === 0) return;

    let indice = 0;
    let intervalo;

    function larguraSlide() {
        return document.querySelector(".carrossel").clientWidth;
    }

    function atualizarSlides() {

        slides.style.width = `${larguraSlide() * imagens.length}px`;

        imagens.forEach(img => {

            img.style.width = `${larguraSlide()}px`;

        });

    }

    function mostrarSlide(i) {

        indice = (i + imagens.length) % imagens.length;

        slides.style.transform =
        `translateX(-${indice * larguraSlide()}px)`;

    }

    function proximo() {

        mostrarSlide(indice + 1);

    }

    function anterior() {

        mostrarSlide(indice - 1);

    }

    function iniciarAutoSlide() {

        intervalo = setInterval(() => {

            proximo();

        }, 4000);

    }

    function pararAutoSlide() {

        clearInterval(intervalo);

    }

    function reiniciar() {

        pararAutoSlide();

        iniciarAutoSlide();

    }

    next.addEventListener("click", () => {

        proximo();

        reiniciar();

    });

    prev.addEventListener("click", () => {

        anterior();

        reiniciar();

    });

    const carrossel = document.querySelector(".carrossel");

    carrossel.addEventListener("mouseenter", pararAutoSlide);

    carrossel.addEventListener("mouseleave", iniciarAutoSlide);

    window.addEventListener("resize", () => {

        atualizarSlides();

        mostrarSlide(indice);

    });

    atualizarSlides();

    mostrarSlide(0);

    iniciarAutoSlide();

});

// ============================================
// HEADER AO ROLAR
// ============================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#ffffff";

        header.style.boxShadow =
        "0 8px 25px rgba(0,0,0,.12)";

        header.style.transition = ".3s";

    }

    else{

        header.style.background = "#ffffff";

        header.style.boxShadow =
        "0 5px 18px rgba(0,0,0,.08)";

    }

});

// ============================================
// ANIMAÇÃO AO APARECER
// ============================================

const elementos = document.querySelectorAll(

".card-servico, .card-diferencial, .avaliacao, .galeria-grid img"

);

const observador = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},

{

threshold:0.15

}

);

elementos.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(60px)";

item.style.transition=".7s";

observador.observe(item);

});

// ============================================
// BOTÃO VOLTAR AO TOPO
// ============================================

const botaoTopo = document.createElement("div");

botaoTopo.innerHTML = "↑";

botaoTopo.className = "topo";

document.body.appendChild(botaoTopo);

botaoTopo.style.position = "fixed";

botaoTopo.style.bottom = "190px";

botaoTopo.style.right = "30px";

botaoTopo.style.width = "55px";

botaoTopo.style.height = "55px";

botaoTopo.style.background = "#1565C0";

botaoTopo.style.color = "#fff";

botaoTopo.style.display = "flex";

botaoTopo.style.alignItems = "center";

botaoTopo.style.justifyContent = "center";

botaoTopo.style.borderRadius = "50%";

botaoTopo.style.cursor = "pointer";

botaoTopo.style.fontSize = "26px";

botaoTopo.style.boxShadow = "0 12px 25px rgba(0,0,0,.20)";

botaoTopo.style.opacity = "0";

botaoTopo.style.pointerEvents = "none";

botaoTopo.style.transition = ".3s";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

botaoTopo.style.opacity="1";

botaoTopo.style.pointerEvents="all";

}

else{

botaoTopo.style.opacity="0";

botaoTopo.style.pointerEvents="none";

}

});

botaoTopo.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ============================================
// SCROLL SUAVE MENU
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",(e)=>{

const destino=document.querySelector(link.getAttribute("href"));

if(destino){

e.preventDefault();

destino.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ============================================
// EFEITO NOS BOTÕES
// ============================================

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});