        function buscar () {

            const articulos = ["Os últimos días de Terranova","Feliz Idade", "Cultura e Política na Galicia do século XX",  "Cráter", "Historia de Galicia", "Cultura e Política na Galicia do século XX", "Historia do mundo contemporáneo", "A Historia"]
    
            let texto = document.getElementById("textoUsuario").value;
            let resultado = document.getElementById("resultadoBusqueda");
            let resultado2 = ""
    
           // console.log(articulos[3].indexOf("toria de"))
            
            for (libro of articulos) {
    
        
            if (libro.toLowerCase().indexOf(texto.toLowerCase()) != "-1") {
                console.log(libro)
                resultado2 += `<li>${libro}</li>`;
                resultado.innerHTML = resultado2;
            }
            }
            }

            const articulosCarrusel = [{
    
                titulo: "Os últimos días de Terranova",
                autor: "Manuel Rivas",
                editora: "Edición Xerais",
                imaxe: "novidade1.jpg",
    
    
    
    
            }, {
                titulo: "Feliz Idade",
                autor: "Olga Novo",
                editora: "Edición Xerais",
                imaxe: "novidade2.jpg",
    
    
    
    
            }, 
            {
                titulo: "Cultura e Política na Galicia do século XX",
                autor: "Ramón Villares",
                editora: "Editorial Galaxia",
                imaxe: "novidade3.jpg",
            }]


    
            let posCarrusel1 = 0;

            function mostrar() {
    
            document.getElementById("novidade1").src=articulosCarrusel[posCarrusel1].imaxe;
            document.getElementById("tituloNov1").innerHTML=articulosCarrusel[posCarrusel1].titulo;
            document.getElementById("autorNov1").innerHTML=articulosCarrusel[posCarrusel1].autor;
            document.getElementById("editoraNov1").innerHTML=articulosCarrusel[posCarrusel1].editora;

    
            }
    
            function cambiarCarrusel(movimiento) {
                posCarrusel1 = posCarrusel1 + movimiento;
 if (posCarrusel1 == -1) {
                    posCarrusel1 = articulosCarrusel.length-1;
                }

                if (posCarrusel1 == articulosCarrusel.length) {
    
                    posCarrusel1 = 0
                }
                mostrar();
               /* posCarrusel2 = posCarrusel2 + movimiento;
    
               
    
                
                }
            }
    
            */
    
           

    
            /*
            function subir () {
            
                for (pos='0'; pos < articulosCarrusel.length; pos++) {
    
                    pos++;
                }
    
            }
    
            function bajar () {
            
            for (pos='0'; pos < articulosCarrusel.length; pos++) {
    
                pos--;
            }
    
        }
    
    */
            }