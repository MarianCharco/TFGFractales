import {InlineMath } from 'react-katex';
const Dsc_Dragon = () => {
    return (
        <div>
        <p><span className="font-bold">Paso 0:</span></p>
        <p>Para el proceso de la Curva del Dragón, el paso inicial (Paso 0), es un segmento vertical.</p>
        <p><span className="font-bold">Paso 1:</span></p>
        <p>Para obtener el Paso 1, se crean dos segmentos nuevos cuya escala viene dada por el Teorema de Pitágoras.</p>
        <p>La longitud de los nuevos segmentos se obtiene multiplicando por la escala, la escala es: <InlineMath math="\sqrt{2}/2" /> </p>
        <p>A continuación, se cambia la ubicación de los dos segmentos mediante traslaciones:</p>
        <p className="ml-4"> 
          Segmento 1: Traslación (-long/2) (long/2)</p>
        <p className="ml-4"> 
          Segmento 2: Traslación (long/2) (long/2)</p>
        <p>Por último, se quiere situar los dos nuevos segmentos para cumplir el Teorema de Pitágoras y para ello se aplican las siguientes rotaciones:</p>
        <p className="ml-4">Segmento 1: Rotación (-45)</p>
        <p className="ml-4">Segmento 2: Rotación (-135)</p>
        <p>Se puede observar el resultado final de este paso en la imagen del Paso 1.</p>
        <p><span className="font-bold">Paso n:</span></p>
        <p>Para obtener el Paso n, se aplica a cada uno de los segmentos el mismo procedimiento, ya que en este fractal, todos los segmentos van a medir siempre lo mismo.</p>
      </div>
    )
  }
  export default Dsc_Dragon