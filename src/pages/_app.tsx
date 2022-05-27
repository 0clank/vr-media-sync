import Header from '@/config'
import '@/styles/index.css'
import {Canvas} from "@react-three/fiber";
import Index from "@/pages/index";

export default function App({ Component, pageProps = { title: 'index' } }) {
  return (
    <>
      <Header title={pageProps.title} />
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Index></Index>
      </Canvas>
    </>
  )
}
