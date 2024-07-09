const NotasPage = () => {
	return (
		<div>
			<h3 className="font-bold text-3xl text-center">Notas</h3>

			<p>
				{" "}
				<span className="font-bold">Nota:</span> <br />
				<span>La función Translate se usa para mover una figura a una nueva posición en el plano. También es parte del módulo Graphics.Gloss. La sintaxis básica es:</span><br />
				<span>Translate :: Float -&gt; Float -&gt; Picture -&gt; Picture</span><br />
				<span>Float: La distancia a mover en el eje X.</span><br />
				<span>Float: La distancia a mover en el eje Y.</span><br />
				<span>Picture: La figura a trasladar.</span><br />
				<span>Return Value: La figura trasladada.</span><br />
			</p>
			<p>
				{" "}
				<span className="font-bold">Nota:</span><br />
				<span>La función Rotate en Haskell se utiliza para rotar una figura en un ángulo específico. Esta función es parte del módulo Graphics.Gloss y permite rotar gráficos en el plano. La sintaxis básica es:</span><br />
				<span>Rotate :: Float -&gt; Picture -&gt; Picture</span><br />
				<span>Float: El ángulo de rotación en grados.</span><br />
				<span>Picture: La figura a rotar.</span><br />
				<span>Return Value: La figura rotada.</span><br />
			</p>
			<p>
				{" "}
				<span className="font-bold">Nota:</span> <br />
				<span>La función Scale se utiliza para cambiar el tamaño de una figura en el plano. También es parte del módulo Graphics.Gloss. La sintaxis básica es:</span><br />
				<span>Scale :: Float -&gt; Float -&gt; Picture -&gt; Picture</span><br />
				<span>Float: El factor de escala en el eje X.</span><br />
				<span>Float: El factor de escala en el eje Y.</span><br />
				<span>Picture: La figura a escalar.</span><br />
				<span>Return Value: La figura escalada.</span><br />
			</p>
		</div>
	);
};
export default NotasPage;
