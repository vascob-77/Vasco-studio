import React, {useEffect} from 'react';
import gsap from "gsap";
import {useLocomotiveScroll} from "react-locomotive-scroll";
import ScrollTrigger from 'gsap/ScrollTrigger'

const ScrollTriggerProxy = () => {

    const {scroll} = useLocomotiveScroll();
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        if(scroll){
            const element = scroll?.el; // locomotive scroll element
            scroll.on('scroll',ScrollTrigger.update) // On Scroll update scrollTrigger

            ScrollTrigger.scrollerProxy(element, {
                scrollTop(value) {
                  return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
                }, 
                getBoundingClientRect() {
                  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
                },
                pinType: element.style.transform ? "transform" : "fixed"
              });
        }

        return () => {
            ScrollTrigger.addEventListener('refresh',() => scroll?.update())
            ScrollTrigger.refresh();
        }
    },[scroll])


    return (
        <div>

        </div>
    );
};

export default ScrollTriggerProxy;