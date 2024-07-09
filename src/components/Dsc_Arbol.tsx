const Dsc_Arbol = () => {
    return (
      <div>
        <p><span className="font-bold">Paso 0:</span></p>
        <p>Para el proceso del Árbol Fractal, el paso inicial (Paso 0), es construir un trapecio.</p>
        <p>Las coordenadas para crear este polígono son: [(30,0), (15,300), (-15,300), (-30,0)]</p>
        <p><span className="font-bold">Paso 1:</span></p>
        <p>Para obtener el Paso 1, se crean cinco trapecios de escala 0,5 (la mitad de su tamaño), respecto al paso anterior.</p>
        <p>A continuación, se cambia la ubicación de los 5 trapecios mediante traslaciones:</p>
        <p className="ml-4"> 
          Trapecio 1: Traslación 0 300 (Se coloca arriba del trapecio del paso anterior)</p>
        <p className="ml-4"> 
          Trapecio 2: Traslación 0 240</p>
        <p className="ml-4"> 
          Trapecio 3: Traslación 0 180</p>
        <p className="ml-4"> 
          Trapecio 4: Traslación 0 120</p>
        <p className="ml-4"> 
          Trapecio 5: Traslación 0 60</p>
        <p>Por último, se quiere situar dos trapecios a la izquierda y dos a la derecha, mediante las siguientes rotaciones:</p>
        <p className="ml-4">Trapecio 2: Rotación 20</p>
        <p className="ml-4">Trapecio 3: Rotación (-20)</p>
        <p className="ml-4">Trapecio 4: Rotación 40</p>
        <p className="ml-4"> Trapecio 5: Rotación (-40)</p>
        <p>Se puede observar el resultado final de este paso en la imagen del Paso 1.</p>
        <p><span className="font-bold">Paso n:</span></p>
        <p>Para obtener el Paso n, se aplica a cada uno de los trapecios generados en el paso anterior, el mismo proceso, crear 5 trapecios de escala 0,5 del trapecio obtenido en el paso anterior y aplicarles las correspondientes traslaciones y rotaciones.</p>
      </div>
    )
  }
  export default Dsc_Arbol