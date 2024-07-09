const Dsc_CurvaKoch = () => {
    return (
      <div>
        <p><span className="font-bold">Paso 0:</span></p>
        <p>Para el proceso de la Curva de Koch, el paso inicial (Paso 0), es construir un segmento horizontal.</p>
        <p><span className="font-bold">Paso 1:</span></p>
        <p>Para obtener el Paso 1, se divide el segmento en tres partes iguales. Y se reemplaza la parte central por dos segmentos del mismo tamaño que el segmento central.</p>
        <p>A continuación se cambia la ubicación de estos dos segmentos mediante traslaciones:</p>
        <p className="ml-4"> 
          Segmento 1: Traslación longitud/3 0</p>
        <p className="ml-4"> 
          Segmento 2: Traslación 2*(longitud/3) 0</p>
        <p>Por último, se quiere formar un triángulo equilátero (es decir que todos sus ángulos son de 60º), pero sin la base, por tanto se hacen las siguiente rotaciones:</p>
        <p className="ml-4">Segmento 1: Rotación (-60)</p>
        <p className="ml-4">Segmento 2: Rotación 60</p>
        <p>Se puede observar el resultado final de este paso, en la imagen del Paso 1.</p>
        <p><span className="font-bold">Paso n:</span></p>
        <p>Para obtener el Paso n, se aplica a cada uno de los segmentos el mismo procedimiento, ya que en este fractal, todos los segmentos van a medir siempre lo mismo.</p>
        </div>
    )
  }
  export default Dsc_CurvaKoch