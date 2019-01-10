var videoRemove = document.getElementById('myVideo');
var videoAdd = document.getElementById('myVideo');

window.onresize = window.onload = function () {
    if (window.innerWidth < 600) {

        videoRemove.setAttribute('src','');
    } else {

      videoAdd.setAttribute('src', 'https://res.cloudinary.com/lwsw18ldn/video/upload/q_auto:low/v1547115237/Contour/ContourMovie_1.mp4')
    }
};
