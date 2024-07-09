
const PitagorasCE = () => {
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
                          putStr "Fractal Pythagoras Tree. Enter step [0..13]: "
                      </span>
                      <span className="ml-4">step &lt;- readLn</span>
                      <span className="ml-4">if step  &gt;= 0 && step &lt;= 13</span>
                      <span className="ml-8">then display (InWindow ("Fractal Pythagoras Tree - Step" ++ show step) (800, 800) (10, 10))</span>
                      <span className="ml-8">black (drawing step)</span>
                      <span className="ml-4">else putStrLn "Step must be in the range 0 to 13."</span>
                      <br></br>
                      
                      <span>drawing :: Int -&gt; Picture</span>
                      <span>drawing step =</span>
                      <span className="ml-8">Translate 0 (-200) $</span>
                      <span className="ml-8">pythagorasTree step white</span>
                      <br></br>

                      <span>trunk :: Color -&gt; Picture</span>
                      <span>trunk color = Color color (Polygon [(100,0), (100,200), (-100,200), (-100,0)])</span>
                      <br></br>

                      <span>pythagorasTree :: Int -&gt; Color -&gt; Picture</span>
                      <span>pythagorasTree 0 color = trunk color</span>
                      <span>pythagorasTree n color =</span>
                      <span className="ml-[4rem]">Pictures [trunk color,</span>
                      <span className="ml-[8.8rem]">Translate (100/2) (200+200/4) (Rotate (45) $ subTree),</span>
                      <span className="ml-[8.8rem]">Translate (-100/2) (200+200/4)  (Rotate (-45) $ subTree)</span>
                      <span className="ml-[8.8rem]">]</span>
                      <span className="ml-[4rem]">where subTree = Scale (sqrt 2 / 2) (sqrt 2 / 2) (pythagorasTree (n-1) (moreGreen color))</span>
                      <br></br>

                      <span>moreGreen :: Color -&gt; Color</span>
                      <span>moreGreen color = mixColors 1.0 0.1 color green</span>
                  </code>
              </pre>
    )
  }
  export default PitagorasCE;