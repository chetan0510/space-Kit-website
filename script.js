function makeanimate() {
    let t = document.querySelector(".downarrow-beta")
    t.style.animationName = "down-arrow"
    setTimeout(() => {
        t.style.animationName = "none"
        t.style.top = "50%"
    }, 300);
}

function phonenavbar() {
    document.getElementById("hamburger").classList.toggle("navpages-close")
}

function rightarrenter(c) {
    document.querySelector(c).style.gap = "5px"
}
function rightarrleave(c) {
    document.querySelector(c).style.gap = "0px"
}

function rightarr3enter() {
    document.querySelector(".morebagbtn").style.gap = "20px"
}
function rightarr3leave() {
    document.querySelector(".morebagbtn").style.gap = "15px"
}

function faq1data() {
    document.querySelector(".downcut-img").classList.toggle("downcut-toggle");
    document.querySelector(".faq-q1").classList.toggle("faq-q1-toggle");
}

function faq2data() {
    document.querySelector(".downcut2-img").classList.toggle("downcut-toggle");
    document.querySelector(".faq-q2").classList.toggle("faq-q2-toggle");
}

function faq3data() {
    document.querySelector(".downcut3-img").classList.toggle("downcut-toggle");
    document.querySelector(".faq-q3").classList.toggle("faq-q3-toggle");
}

function faq4data() {
    document.querySelector(".downcut4-img").classList.toggle("downcut-toggle");
    document.querySelector(".faq-q4").classList.toggle("faq-q4-toggle");
}

function faq5data() {
    document.querySelector(".downcut5-img").classList.toggle("downcut-toggle");
    document.querySelector(".faq-q5").classList.toggle("faq-q5-toggle");

}


