import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { Galleria } from "primereact/galleria";
import { Image } from "primereact/image";
import React, { useEffect, useState } from "react";

import Dsc_Arbol from "./components/Dsc_Arbol";
import Dsc_CopoNieve from "./components/Dsc_CopoNieve";
import Dsc_CurvaKoch from "./components/Dsc_CurvaKoch";
import Dsc_Dragon from "./components/Dsc_Dragon";
import Dsc_Mandelbrot from "./components/Dsc_Mandelbrot";
import Dsc_Pitagoras from "./components/Dsc_Pitagoras";
import Dsc_PitagorasLinea from "./components/Dsc_PitagorasLinea";
import Dsc_Sierpinski from "./components/Dsc_Sierpinski";
import ArbolFractalCE from "./components/ArbolFractalCE";
import PitagorasCE from "./components/PitagorasCE";
import PitagorasSegmentosCE from "./components/PitagorasSegmentosCE";
import KochCE from "./components/KochCE";
import CopoKochCE from "./components/CopoKochCE";
import DragonCE from "./components/DragonCE";
import SierpinskiCE from "./components/SierpinskiCE";
import MandelbrotCE from "./components/MandelbrotCE";
interface Fractal {
	nombre: string;
	pasos: number;
	explicacion: React.ReactNode;
	codigo: React.ReactNode;
}

function FractalesPage() {
	const [selectedFractal, setSelectedFractal] = useState<Fractal | null>(null);
	const [showDialog, setShowDialog] = useState<boolean>(false);
	const [activeIndexGalleria, setActiveIndexGalleria] = useState(0);
	const fractales: Fractal[] = [
		{
			nombre: "Árbol Fractal",
			pasos: 9,
			explicacion: <Dsc_Arbol />,
			codigo: <ArbolFractalCE />,
		},
		{
			nombre: "Árbol de Pitágoras",
			pasos: 13,
			explicacion: <Dsc_Pitagoras />,
			codigo: <PitagorasCE />,
		},
		{
			nombre: "Árbol de Pitágoras con Segmentos",
			pasos: 13,
			explicacion: <Dsc_PitagorasLinea />,
			codigo: <PitagorasSegmentosCE />,
		},
		{
			nombre: "Curva de Koch",
			pasos: 7,
			explicacion: <Dsc_CurvaKoch />,
			codigo: <KochCE />,
		},
		{
			nombre: "Copo de Nieve de Koch",
			pasos: 7,
			explicacion: <Dsc_CopoNieve />,
			codigo: <CopoKochCE/>,
		},
		{
			nombre: "Curva del Dragón",
			pasos: 13,
			explicacion: <Dsc_Dragon />,
			codigo: <DragonCE />,
		},
		{
			nombre: "Triángulo de Sierpinski",
			pasos: 9,
			explicacion: <Dsc_Sierpinski />,
			codigo: <SierpinskiCE/>,
		},
		{
			nombre: "Conjunto de Mandelbrot",
			pasos: 0,
			explicacion: <Dsc_Mandelbrot />,
			codigo: <MandelbrotCE/>,
		},
	];

	useEffect(() => {
		// setPasoFractal(null);
	}, [selectedFractal]);

	function getImages() {
		if (selectedFractal) {
			return Array.from({ length: selectedFractal.pasos + 1 }).map((_, i) => {
				const itemImageSrc = `./${selectedFractal?.nombre.replace(
					/ /g,
					"_"
				)}/Paso_${i}.PNG`;
				const alt = `Descripción de la imagen ${i + 1}`;
				const title = `Título ${i + 1}`;

				return {
					itemImageSrc,
					thumbnailImageSrc: itemImageSrc,
					alt,
					title,
				};
			});
		} else {
			return []; // Devolver un array vacío si no hay un fractal seleccionado
		}
	}

	interface ItemTemplate {
		itemImageSrc: string;
		alt: string;
	}

	const itemTemplate = (item: ItemTemplate) => {
		return (
			<img
				src={item.itemImageSrc}
				alt={item.alt}
				style={{
					width: "100%",
					display: "block",
					height: "fit-content",
					maxHeight: "29rem",
				}}
			/>
		);
	};

	interface ThumbnailTemplate {
		thumbnailImageSrc: string;
		alt: string;
	}
	const thumbnailTemplate = (item: ThumbnailTemplate) => {
		return (
			<img
				src={item.thumbnailImageSrc}
				alt={item.alt}
				style={{ display: "block", maxHeight: "30px", maxWidth: "30px" }}
			/>
		);
	};

	return (
		<div className="max-w-[1000px] m-auto mt-5 mb-5">
			<h2 className="mb-3">
			Bienvenido a nuestra página web didáctica sobre Geometría Fractal. Explora la belleza de estos patrones infinitamente complejos a través de las explicaciones detalladas de cada fractal, las imágenes de cómo se construyen paso a paso y su código en lenguaje Haskell. Descubre cómo las matemáticas y la programación recursiva se unen para crear estas sorprendentes figuras geométricas.
			</h2>
			<div className="flex justify-center gap-3">
				<div className="flex flex-column gap-1">
					<label>Selecciona un fractal</label>
					<Dropdown
						value={selectedFractal}
						onChange={(e: DropdownChangeEvent) => setSelectedFractal(e.value)}
						options={fractales}
						optionLabel="nombre"
						placeholder="Selecciona un Fractal"
						className=""
					/>
				</div>
			</div>

			{selectedFractal && (
				<>
					<article>
						<div className="flex align-items-center flex-column">
							<h5>
								<span className="font-bold text-[2.5rem]">{selectedFractal?.nombre}</span>
							</h5>
								<Image
										key={selectedFractal.pasos + 1 + selectedFractal.nombre}
										src={`./${selectedFractal?.nombre.replace(
											/ /g,
											"_"
										)}/Paso_${selectedFractal.pasos }.PNG`}
										alt="Image"
										width="350"
										className="rounded-lg overflow-hidden"
										loading="lazy"
									/>
						</div>
						<h3 className="text-2xl">
							<span className="font-bold">Explicación Teórica</span>
						</h3>
						<p>{selectedFractal?.explicacion}</p>
					</article>
					<figure className="max-h-fit mt-5 grid grid-flow-col auto-cols-max column-gap-3 row-gap-3">
						{Array.from({ length: selectedFractal.pasos + 1 }).map((_, i) => (
							<Card
								title={
									selectedFractal.nombre !== "Conjunto de Mandelbrot"
										? `Paso ${i}`
										: ""
								}
								key={i}
							>
								<Image
									key={i}
									src={`./${selectedFractal?.nombre.replace(
										/ /g,
										"_"
									)}/Paso_${i}.PNG`}
									onClick={() => {
										setShowDialog(true);
										setActiveIndexGalleria(i);
									}}
									alt="Image"
									width="200"
									className="rounded-lg overflow-hidden"
									loading="lazy"
								/>
							</Card>
						))}
					</figure>
				</>
			)}
			<Dialog
				visible={showDialog}
				onHide={() => {
					setShowDialog(false);
				}}
				header={
					<>
						<p className="text-center">{selectedFractal?.nombre}</p>
						{selectedFractal?.nombre !== "Conjunto de Mandelbrot" && (
							<>
								<p className="text-center">Paso {activeIndexGalleria}</p>
							</>
						)}
					</>
				}
			>
				<Galleria
					value={getImages()}
					item={itemTemplate}
					thumbnail={thumbnailTemplate}
					activeIndex={activeIndexGalleria}
					onItemChange={(e) => {
						setActiveIndexGalleria(e.index);
					}}
				/>
			</Dialog>
			<div><p>   </p></div>
			<div>
				{selectedFractal?.codigo && (
					<>
						<h3 className="text-2xl mt-4 mb-1">
							<span className="font-bold">Código en Haskell</span>
						</h3>
						{selectedFractal.codigo}
					</>
				)}
			</div>
			{/* <pre>
				<code className="text-sm flex flex-column sm:text-base inline-flex text-left bg-gray-800 text-white rounded-lg p-2 pl-4">
					<span>import Graphics.Gloss</span>
					<span>import System.IO</span>
					<span>main :: IO ()</span>
					<span>main = do</span>
					<span className="ml-2">hSetBuffering stdout NoBuffering</span>
					<span className="ml-2">
						putStr "Árbol fractal. Introduce el paso [0..6]: "
					</span>
					<span className="ml-2">paso &lt;- readLn</span>
					<span className="ml-2">
						display (InWindow "Arbol fractal" (700,800) (20,20)) black (dibujo
						paso)
					</span>
					<span>dibujo :: Int -&gt; Picture</span>
					<span>dibujo paso = Translate 0 (-300) (arbol paso marron)</span>
					<br></br>
					<span>tronco :: Color -&gt; Picture</span>
					<span>
						tronco color = Color color (Polygon [(30,0), (15,300), (-15,300),
						(-30,0)])
					</span>
					<br></br>
					<span>arbol :: Int -&gt; Color -&gt; Picture</span>
					<span>arbol 0 color = tronco color</span>
					<span>arbol n color = Pictures [tronco color,</span>
					<span className="ml-[8.8rem]">
						arbol n color = Pictures [tronco color,
					</span>
					<span className="ml-[8.8rem]">Translate 0 300 arbolMenor,</span>
					<span className="ml-[8.8rem]">
						Translate 0 240 (Rotate 20 arbolMenor),
					</span>
					<span className="ml-[8.8rem]">
						Translate 0 180 (Rotate (-20) arbolMenor),
					</span>
					<span className="ml-[8.8rem]">
						Translate 0 120 (Rotate 40 arbolMenor),
					</span>
					<span className="ml-[8.8rem]">
						Translate 0 60 (Rotate (-40) arbolMenor) ]
					</span>
					<span className="ml-[4rem]">
						where arbolMenor = Scale 0.5 0.5 (arbol (n-1) (masNaranja color))
					</span>
					<span>marron :: Color</span>
					<span>marron = makeColor 139 100 35 255</span>
					<br />
					<span>masNaranja :: Color -&gt; Color</span>
					<span>masNaranja color = mixColors 1.0 0.1 color orange</span>
				</code>
			</pre> */}
		</div>
	);
}

export default FractalesPage;
