var imagenes = ['../Galeria/imagenes/img1.jpg', '../Galeria/imagenes/img2.jpg', '../Galeria/imagenes/img3.jpg', '../Galeria/imagenes/img4.jpg'],
    cont = 0;

function carrusel(contenedor){
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            inicio = contenedor.querySelector('.inicio'),
            img = contenedor.querySelector('img'),
            tgt = e.target;

            if(tgt == atras){
                if(cont > 0){
                    img.src = imagenes[cont - 1];
                    cont--;
                }else {
                    
                }
            }else if(tgt == adelante){
                if(cont < imagenes.length - 1){
                    img.src = imagenes[cont + 1];
                    cont++;
                }else {
                     
                }
            }else if(tgt == inicio){
                img.src = imagenes[Math.round(Math.random()*3)];
                console.log(img.src);
            }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedor');
    carrusel(contenedor);
})