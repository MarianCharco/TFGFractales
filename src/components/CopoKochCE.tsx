
const CopoKochCE = () => {
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
                      putStr "Fractal Koch Snowflake. Enter step [0..7]: "
                      </span>
                      <span className="ml-4">step &lt;- readLn</span>
                      <span className="ml-4">if step  &gt;= 0 && step &lt;= 7</span>
                      <span className="ml-8">then display (InWindow ("Fractal Koch Snowflake - Step" ++ show step) (700,700) (40,40))</span>
                      <span className="ml-8">black (drawing step)</span>
                      <span className="ml-4">else putStrLn "Step must be in the range 0 to 7."</span>
                      <br></br>

                      <span>long :: Float</span>
                      <span>long = 360</span>
                      <br></br>
                      
                      <span>drawing :: Int -&gt; Picture</span>
                      <span>drawing step =</span>
                      <span className="ml-8">Color orange $</span>
                      <span className="ml-8">Translate (-long/2) (-(long * sqrt 3)/6) $</span>
                      <span className="ml-8">snowflake step</span>
                      <br></br>

                      <span>curve :: Int -&gt; Picture</span>
                      <span>curve 0 = Line [(0, 0), (long, 0)]</span>
                      <span>curve n =</span>
                      <span className="ml-[4rem]">Pictures [newCurve,</span>
                      <span className="ml-[8.8rem]">Translate (long/3) 0 (Rotate (-60) newCurve),</span>
                      <span className="ml-[8.8rem]">Translate (long/2) ((long * sqrt 3)/6)  (Rotate 60 newCurve),</span>
                      <span className="ml-[8.8rem]">Translate (2 * long/3) 0 newCurve]</span>
                      <span className="ml-[4rem]">where newCurve = Scale (1/3) (1/3) (curve (n-1))</span>
                      <br></br>

                      <span>snowflake :: Int -&gt; Picture</span>
                      <span>snowflake n =</span>
                      <span className="ml-[4rem]">Pictures [oneCurve,</span>
                      <span className="ml-[8.8rem]">Translate long 0 (Rotate   120  oneCurve),</span>
                      <span className="ml-[8.8rem]">Translate (long/2) (-((long * sqrt 3)/2)) (Rotate (-120) oneCurve)]</span>
                      <span className="ml-[4rem]">where oneCurve = curve n</span>
                  </code>
              </pre>
    )
  }
  export default CopoKochCE;