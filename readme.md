Prueba de optimización de tienda en javascript

## Perspectiva

Debido a que en las instrucciones no se menciona la posibilidad de modificar el front el proyecto ha sido tratado como si solo se tuviese acceso al back. Es por ello que para la importacion del resto de ficheros js se ha utilizado una función que modifica el DOM añadiendo tags de importación de scripts dinámicamente. Este método, sin embargo, presenta algunos inconvenientes que serán explicados más adelante.

Asumiendo que el proyecto ha de estar desarrollado en js estandar se ha optado por no utilizar ningún paquete de js que actúe como transpilador. También se asume que la importación directa de módulos no estará disponible al no estar proyectado el despliegue de la página en servidor y esperar por tanto solo el acceso local

## Desarrollo

Inicialmente se optó por manejar el Producto inicial mediante una serie de funciones en el js principal pero a fin de estandarizar el tratamiento de cada tipo de Producto se han extendido esas funcionalidades a una clase ProductoGenerico en concordancia con el resto de clases derivadas.

## Problemas

Tras testear el método de importación adoptado se detectó un fallo en el proceso de carga de los scripts en
* IE 11
* Edge 42.17134.1.0
* Firefox 62.0 - *El fallo de carga se produce solo en la primera ejecución, posteriormente utiliza los scripts cacheados*
* Chrome 68.0.3440.106

Este error se producía porque los scripts asociados al front se ejecutaban antes de que la página acabase de cargar el resto de scripts. Para evitar este problema se sustituyó en el front el **$( document ).ready(** por un **$(window).on('load',** de forma que la página procese sus scripts siguiendo el orden de carga correcto.

Tras esta modificación el programa presenta un comportamiento correcto en todos los navegadores *(a excepción de IE, donde debido a las propias peculiaridades del navegador y a que la utilización de jQuery para esquivarlas provocaba el error de CORS que se intentaba evitar se ha optado finalmente por no considerarlo soportado)*

### Autor

* **Victor Hugo Fernandez Alvarez** - [Victorhfa](https://github.com/victorhfa)