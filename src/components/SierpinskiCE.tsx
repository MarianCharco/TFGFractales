
const SierpinskiCE = () => {
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
                      putStr "Fractal Sierpinski Triangle. Enter step [0..9]: "
                      </span>
                      <span className="ml-4">step &lt;- readLn</span>
                      <span className="ml-4">if step  &gt;= 0 && step &lt;= 9</span>
                      <span className="ml-8">then display (InWindow ("Fractal Sierpinski Triangle - Step " ++ show step) (700,700) (40,40))</span>
                      <span className="ml-8">black (drawing step)</span>
                      <span className="ml-4">else putStrLn "Step must be in the range 0 to 9."</span>
                      <br></br>

                      <span>long :: Float</span>
                      <span>long = 300</span>
                      <br></br>
                      
                      <span>drawing :: Int -&gt; Picture</span>
                      <span>drawing step = Color orange (Translate (-150) (-125) (sierpinski step))</span>
                      <br></br>

                      <span>sierpinski :: Int -&gt; Picture</span>
                      <span>sierpinski 0 = Polygon [(0,0), (long/2, long * sqrt 3 /2), (long, 0)]</span>
                      <span>sierpinski n =</span>
                      <span className="ml-[4rem]">Pictures [newSierpinski,</span>
                      <span className="ml-[8.8rem]">Translate (long/2) 0 newSierpinski,</span>
                      <span className="ml-[8.8rem]">Translate (long/4) (long * sqrt 3 /4) newSierpinski]</span>
                      <span className="ml-[4rem]">where newSierpinski = Scale 0.5 0.5 (sierpinski (n-1))</span>
                  </code>
              </pre>
    )
  }
  export default SierpinskiCE;