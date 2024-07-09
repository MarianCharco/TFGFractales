import {InlineMath } from 'react-katex';
const Dsc_Pitagoras = () => {
    return (
      <div>
        <p><span className="font-bold">Paso 0:</span></p>
        <p>Para el proceso del Árbol de Pitágoras, el paso inicial (Paso 0), es construir un cuadrado.</p>
        <p>Las coordenadas para crear este cuadrado son: [(100,0), (100,200), (-100,200), (-100,0)]</p>
        <p><span className="font-bold">Paso 1:</span></p>
        <p>Para obtener el Paso 1, con el cuadrado anterior, se busca cumplir el Teorema de Pitágoras, y construir con dos cuadrados nuevos un triángulo isósceles, (cuyos ángulos son 45º, 45º y 90º).</p>
        <p>Es decir, con el lado del cuadrado incial, se busca conseguir un triángulo isósceles formado por otros dos cuadrados.</p>
        <p>Como tenemos los ángulos, el lado del cuadrado incial (la hipotenusa) y los catetos son iguales, se obtiene el lado de los nuevos cuadrados despejando en el Teorema de Pitágoras. </p> 
        <p>El lado de los nuevos cuadrados se obtiene multiplicando por la escala, la escala es: <InlineMath math="\sqrt{2}/2" /> </p>
        <p>A continuación, se cambia la ubicación de los 2 cuadrados mediante traslaciones aplicadas a este ejemplo:</p>
        <p className="ml-4"> 
          Cuadrado 1: Traslación (100/2) (200+200/4)</p>
        <p className="ml-4"> 
          Cuadrado 2: Traslación (100/2) (200+200/4)</p>
        <p>Por último, se rotan los cuadrados formando el triángulo del Teorema de Pitágoras y para ello se aplican las siguientes rotaciones:</p>
        <p className="ml-4">Cuadrado 1: Rotación 45</p>
        <p className="ml-4">Cuadrado 2: Rotación (-45)</p>
        <p>Se puede observar el resultado final de este paso en la imagen del Paso 1.</p>
        <p><span className="font-bold">Paso n:</span></p>
        <p>Para obtener el Paso n, se aplica a cada uno de los cuadrados generados en el paso anterior, el mismo proceso, crear 2 cuadrados con escala <InlineMath math="\sqrt{2}/2" /> respecto el cuadrado obtenido en el paso anterior y aplicarles las correspondientes traslaciones y rotaciones.</p>
      </div>
    )
  }
  export default Dsc_Pitagoras