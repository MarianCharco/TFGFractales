import {InlineMath } from 'react-katex';
const Dsc_PitagorasLinea = () => {
    return (
        <div>
        <p><span className="font-bold">Paso 0:</span></p>
        <p>Para el proceso del Árbol de Pitágoras con Segmentos, el paso inicial (Paso 0), es un segmento vertical.</p>
        <p><span className="font-bold">Paso 1:</span></p>
        <p>Para obtener el Paso 1, se crean dos segmentos nuevos cuya escala viene dada por el Teorema de Pitágoras.</p>
        <p>La longitud de los nuevos segmentos se obtiene multiplicando por la escala, la escala es: <InlineMath math="\sqrt{2}/2" /> </p>
        <p>A continuación, se cambia la ubicación de los dos nuevos segmentos mediante traslaciones:</p>
        <p className="ml-4"> 
            Segmento 1: Traslación 0 altura</p>
        <p className="ml-4"> 
            Segmento 2: Traslación 0 altura</p>
        <p>Por último, se quiere rotar los dos nuevos segmentos para cumplir el Teorema de Pitágoras y para ello se aplican las siguientes rotaciones:</p>
        <p className="ml-4">Segmento 1: Rotación (-45)</p>
        <p className="ml-4">Segmento 2: Rotación -45</p>
        <p>Se puede observar el resultado final de este paso en la imagen del Paso 1.</p>
        <p><span className="font-bold">Paso n:</span></p>
        <p>Para obtener el Paso n, se aplica a cada uno de los segmentos generados en el paso anterior, el mismo proceso, crear dos segmentos con escala <InlineMath math="\sqrt{2}/2" /> respecto al segmento obtenido en el paso anterior y aplicarles las correspondientes traslaciones y rotaciones.</p>
      </div>
    )
  }
  export default Dsc_PitagorasLinea