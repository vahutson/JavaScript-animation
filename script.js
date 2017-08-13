var man = document.getElementsByTagName('div')[0];
window.addEventListener('keydown', go);
var position='';
function go (event) {
    if (event.keyCode === 39) {

        position = - Number(position.replace(/\D+/g, "")) - 200 + 'px';
        man.style.backgroundPositionY = -30 + 'px';
        man.style.backgroundPositionX = position;
        man.style.left = Number(man.style.left.replace(/\D+/g, "")) + 20 + 'px';

    }

    if (event.keyCode === 37 && position !== '0px') {
        position = - Number(position.replace(/\D+/g, "")) + 200 + 'px';
            man.style.backgroundPositionY = -230 + 'px';
        man.style.backgroundPositionX = position;
        man.style.left = Number(man.style.left.replace(/\D+/g, "")) - 20 + 'px';


    }

    if (event.keyCode === 38) {
        var pozz = man.style.transform;
        man.style.top = 100 + 'px';
        console.log(man.style.top);
        setTimeout(function () {
            man.style.top = 300 + 'px';
            console.log(man.style.top);

        }, 300);

    }

}

