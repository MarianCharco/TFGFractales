
const ArbolFractalCE = () => {
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
                          putStr "Fractal Tree. Enter step [0..9]: "
                      </span>
                      <span className="ml-4">step &lt;- readLn</span>
                      <span className="ml-4">if step  &gt;= 0 && step &lt;= 9</span>
                      <span className="ml-8">then display (InWindow ("Fractal Tree - Step" ++ show step) (700, 800) (20, 20)) black (drawing step)</span>
                      <span className="ml-4">else putStrLn "Step must be in the range 0 to 9."</span>
                      <br></br>
                      
                      <span>drawing :: Int -&gt; Picture</span>
                      <span>drawing step = Translate 0 (-300) (tree step white)</span>
                      <br></br>

                      <span>trunk :: Color -&gt; Picture</span>
                      <span>trunk color = Color color (Polygon [(30,0), (15,300), (-15,300), (-30,0)])</span>
                      <br></br>


                      <span>tree :: Int -&gt; Color -&gt; Picture</span>
                      <span>tree 0 color = trunk color</span>
                      <span>tree n color = Pictures [trunk color,</span>
                      <span className="ml-[8.8rem]">Translate 0 300 subTree,</span>
                      <span className="ml-[8.8rem]">Translate 0 240 (Rotate   20  subTree),</span>
                      <span className="ml-[8.8rem]">Translate 0 180 (Rotate (-20) subTree),</span>
                      <span className="ml-[8.8rem]">Translate 0 120 (Rotate   40  subTree),</span>
                      <span className="ml-[8.8rem]">Translate 0  60 (Rotate (-40) subTree) ]</span>
                      <span className="ml-[4rem]">where subTree = Scale 0.5 0.5 (tree (n-1) (moreOrange color))</span>
                      <br></br>

                      <span>moreOrange :: Color -&gt; Color</span>
                      <span>moreOrange color = mixColors 1.0 0.1 color orange</span>
                  </code>
              </pre>
    )
  }
  export default ArbolFractalCE;