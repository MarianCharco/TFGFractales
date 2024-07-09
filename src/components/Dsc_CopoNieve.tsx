const Dsc_CopoNieve = () => {
    return (
      <div>
        <p><span className="font-bold">Paso 0:</span></p>
        <p>Para el proceso del Copo de Nieve de Koch, el paso inicial (Paso 0), es construir un triángulo equilátero.</p>
        <p><span className="font-bold">Paso 1:</span></p>
        <p>Para obtener el Paso 1, para cada una de los tres segmentos que forman el triángulo, el segmento se divide en tres partes iguales. Y se reemplaza la parte central por dos segementos del mismo tamaño que el segmento central.</p>
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
        <p><span className="font-bold">Nota: </span></p>
        <p>El Copo de Nieve de Koch es idéntico al fractal de la Curva de Koch, pero para el Copo de Nieve se comienza con tres segmentos iniciales formando un triángulo equilátero.</p>
        </div>
    )
  }
  export default Dsc_CopoNieve