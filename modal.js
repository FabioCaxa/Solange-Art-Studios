let images = document.querySelectorAll('.mini');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let modalButton = document.querySelector('#modal_button');
let srcVal="";

for (let i = 0; i < images.length; i++){
    images[i].addEventListener('click',function(){
        srcVal = images[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });
}

modalButton.addEventListener('click', function(){
    modal.classList.toggle('modal_active');
});

document.addEventListener('keydown', function(e) {
    let keyCode = e.keyCode;
    document.getElementById("escape").innerHTML;
        if (keyCode === 27) {
            modal.classList.remove('modal_active');
            document.getElementById("escape").innerHTML;
    }
});