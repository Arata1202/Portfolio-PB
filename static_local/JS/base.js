//　　　　　ハンバーガーメニュー
'use strict'
const btn = document.querySelector('.btn');
const block = document.querySelector('.block');
btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    block.classList.toggle('active');
});

//　　　　　内部リンク　ハンバーガーオフ
const link_top = document.querySelector('.link_top');
link_top.addEventListener('click', () => {
    btn.classList.remove('active');
    block.classList.remove('active');
});

const link_home = document.querySelector('.link_home');
link_home.addEventListener('click', () => {
    btn.classList.remove('active');
    block.classList.remove('active');
});

const link_about = document.querySelector('.link_about');
link_about.addEventListener('click', () => {
    btn.classList.remove('active');
    block.classList.remove('active');
});

const link_service = document.querySelector('.link_service');
link_service.addEventListener('click', () => {
    btn.classList.remove('active');
    block.classList.remove('active');
});

const link_skills = document.querySelector('.link_skills');
link_skills.addEventListener('click', () => {
    btn.classList.remove('active');
    block.classList.remove('active');
});

//途中までスクロール
function ScrollWindow(elem) {
    var element = document.getElementById(elem);
    var rect = element.getBoundingClientRect();
    var elemtop = rect.top + window.pageYOffset;
    document.documentElement.scrollTop = elemtop;
}

//一番上までスクロール
function scrollToTop() {
    scrollTo(0, 0);
}
