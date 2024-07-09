
const DragonCE = () => {
    return (
        <pre className="w-full">
                  <code className="w-full text-sm flex flex-column sm:text-base inline-flex text-left bg-gray-800 text-white rounded-lg p-2 pl-4">
                      <span>import Graphics.Gloss</span>
                      <span>import System.IO</span>
                      <br></br>

                      <span>main :: IO ()</span>
                      <span>main = do</span>
                      <span className="ml-4">hSetBuffering stdout NoBuffering</span>
                      <span className="ml-4">
                      putStr "Fractal Dragon Curve. Enter step [0..13]: "
                      </span>
                      <span className="ml-4">step &lt;- readLn</span>
                      <span className="ml-4">if step  &gt;= 0 && step &lt;= 13</span>
                      <span className="ml-8">then display (InWindow ("Fractal Dragon Curve - Step " ++ show step) (700, 700) (40, 40))</span>
                      <span className="ml-8">black (dragonDrawing step)</span>
                      <span className="ml-4">else putStrLn "Step must be in the range 0 to 13."</span>
                      <br></br>

                      <span>long :: Float</span>
                      <span>long = 160</span>
                      <br></br>
                      
                      <span>dragonDrawing :: Int -&gt; Picture</span>
                      <span>dragonDrawing step =</span>
                      <span className="ml-8">Color orange $</span>
                      <span className="ml-8">Translate (-long / 2) (-long / 2) $</span>
                      <span className="ml-8">dragon step</span>
                      <br></br>

                      <span>dragon :: Int -&gt; Picture</span>
                      <span>dragon 0 = Line [(-long, 0), (long, 0)]</span>
                      <span>dragon n = Pictures [rotatedDragon1, rotatedDragon2]</span>
                      <span className="ml-[4rem]">where</span>
                      <span className="ml-[8.8rem]">subDragon = Scale (1 / sqrt 2) (1 / sqrt 2) (dragon (n - 1))</span>
                      <span className="ml-[8.8rem]">rotatedDragon1 = Translate (-long / 2) (long / 2) (Rotate (-45) subDragon)</span>
                      <span className="ml-[8.8rem]">rotatedDragon2 = Translate (long / 2) (long / 2) (Rotate (-135) subDragon)</span>
                  </code>
              </pre>
    )
  }
  export default DragonCE;