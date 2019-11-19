var imagenes = ['../Galeria/imagenes/img1.jpg', '../Galeria/imagenes/img2.jpg', '../Galeria/imagenes/img3.jpg', '../Galeria/imagenes/img4.jpg', '../Galeria/imagenes/img5.jpg', '../Galeria/imagenes/img6.jpg', '../Galeria/imagenes/img7.jpg', '../Galeria/imagenes/img8.jpg', '../Galeria/imagenes/img9.jpg', '../Galeria/imagenes/img10.jpg'],
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
                img.src = imagenes[Math.round(Math.random()*10)];
            }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedor');
    carrusel(contenedor);
})