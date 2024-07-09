
const MandelbrotCE = () => {
    return (
        <pre className="w-full">
                  <code className="w-full text-sm flex flex-column sm:text-base inline-flex text-left bg-gray-800 text-white rounded-lg p-2 pl-4">
                      <span>import Graphics.Gloss</span>
                      <span>import System.IO</span>
                      <br></br>

                      <span>main :: IO ()</span>
                      <span>main = do</span>
                      <span className="ml-4">hSetBuffering stdout NoBuffering</span>
                      <span className="ml-4">display (InWindow "Mandelbrot Set" (1000, 1000) (20, 20)) black (mandelbrotDrawing 1000)</span>
                      <br></br>

                      <span>mandelbrotDrawing :: Int -&gt; Picture</span>
                      <span>mandelbrotDrawing resolution =</span>
                      <span className="ml-4">Pictures [Color (colorMandelbrot x y resolution) (Translate (fromIntegral x - fromIntegral resolution / 2) (fromIntegral y - fromIntegral resolution / 2) </span>
                      <span className="ml-4">(fromIntegral y - fromIntegral resolution / 2) (rectangleSolid 1 1))</span>
                      <span className="ml-8"> | x -&lt; [0..resolution-1], y -&lt; [0..resolution-1]]</span>
                      <br></br>

                      <span>colorMandelbrot :: Int -&gt; Int -&gt; Int -&gt; Color</span>
                      <span>colorMandelbrot x y resolution | mandelbrotSet x' y' = orange | otherwise = black</span>
                      <span className="ml-4">where</span>
                      <span className="ml-8">realPart = 3.0 * (fromIntegral x / fromIntegral resolution) - 2.0</span>
                      <span className="ml-8">imaginaryPart = 2.0 * (fromIntegral y / fromIntegral resolution) - 1.0</span>
                      <span className="ml-8">x' = realPart * 2</span>
                      <span className="ml-8">y' = imaginaryPart * 2</span>
                      <br></br>

                      <span>mandelbrotSet :: Float -&gt; Float -&gt; Bool</span>
                      <span>mandelbrotSet x y = mandelbrotSet' 0 0 0</span>
                      <span className="ml-4">where </span>
                      <span className="ml-8">mandelbrotSet' zr zi i</span>
                      <span className="ml-8">| i == 100 = True</span>
                      <span className="ml-8">| zr*zr + zi*zi &gt;= 4 = False</span>
                      <span className="ml-8">| otherwise = mandelbrotSet' (zr*zr - zi*zi + x) (2*zr*zi + y) (i+1)</span>
                  </code>
              </pre>
    )
  }
  export default MandelbrotCE;