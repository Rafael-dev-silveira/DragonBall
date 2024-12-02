'use strict'

const botao = document.querySelector('.botao');
const video = document.querySelector('video');

botao.onclick = () => video.muted = !video.muted