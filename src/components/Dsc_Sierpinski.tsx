const Dsc_Sierpinski = () => {
    return (
      <div>
        <p><span className="font-bold">Paso 0:</span></p>
        <p>Para el proceso del Triángulo de Sierpinski, el paso inicial (Paso 0), es construir un triángulo equilátero.</p>
        <p><span className="font-bold">Paso 1:</span></p>
        <p>Para obtener el Paso 1, para cada una de los tres segmentos que forman el triángulo, se calcula la mitad del segmento y se dibuja un punto.</p>
        <p>Después se unen los tres puntos, dividiendo el triángulo incial en cuatro triángulos idénticos y se borra el triángulo central.</p>
        <p>Se puede observar el resultado final de este paso, en la imagen del Paso 1.</p>
        <p><span className="font-bold">Paso n:</span></p>
        <p>Para obtener el Paso n, se aplica a cada uno de los triángulos el mismo procedimiento, ya que en este fractal, todos los triángulos van a medir siempre lo mismo.</p>
        </div>
    )
  }
  export default Dsc_Sierpinski