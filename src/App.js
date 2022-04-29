import GlobalStyles from "./styles/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {dark} from './styles/Themes';
import {LocomotiveScrollProvider} from 'react-locomotive-scroll'
import {useEffect, useRef, useState} from "react";
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Home from "./sections/Home";
import {BrowserRouter} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import About from "./sections/About";
import Shop from "./sections/Shop";
import LocomotiveScrollProxy from './components/ScrollTriggerProxy';
import Banners from "./sections/Banners";
import { NewArrival } from "./sections/NewArrival";
import { Footer } from "./sections/Footer";
import Loader from "./components/Loader";

function App() {

    const containerRef = useRef(null)

    const [loader,setLoader] = useState(false);

    useEffect(() => {
        setTimeout(()=>{
            setLoader(true)
        },3000)
    },[])

    return (
        <>
            <GlobalStyles/>
            <ThemeProvider theme={dark}>
                <LocomotiveScrollProvider
                    options={
                        {
                            smooth: true,
                            smartphone:{
                                smooth:true,
                            },
                            tablette:{
                                smooth:true,
                            }
                            // ... all available Locomotive Scroll instance options
                        }
                    }
                    watch={
                        [
                            //..all the dependencies you want to watch to update the scroll.
                            //  Basicaly, you would want to watch page/location changes
                            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
                        ]
                    }
                    containerRef={containerRef}
                >
                
                    <AnimatePresence>
                    {loader ? null : <Loader /> }
                    </AnimatePresence>

                    <BrowserRouter>
                      
                    <LocomotiveScrollProxy/>
                        <AnimatePresence>
                            <main className="App" data-scroll-container ref={containerRef}>
                                <Home/>
                                <About/>
                                <Shop/>
                                <Banners/>
                                <NewArrival/>
                                <Footer />
                            </main>
                        </AnimatePresence>
                    </BrowserRouter>
                </LocomotiveScrollProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
