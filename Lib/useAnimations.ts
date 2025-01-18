import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
CustomEase.create("in-out", "0.42,0,0.58,1");
import ScrollTrigger from "gsap/ScrollTrigger";

const useAnimations = () => {
  useGSAP(() => {
    gsap.registerPlugin(CustomEase);
    gsap.registerPlugin(ScrollTrigger);
    const elements = gsap.utils.toArray<HTMLElement>([".fadeIn"]);

    // Fade in on Scroll
    elements.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "center 90%",
          markers: true,
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "in-out",
        stagger: 0.1,
      });
    });

    // Need groups for items which are positioned close to each other and would trigger all at the same time since they enter the viewport simultaneously (e.g. instant entry of hero section, same position of feature cards)
    const fadeInGroups = [".fadeInHero", ".fadeInFeatureCards"];

    fadeInGroups.forEach((groupSelector) => {
      gsap.from(groupSelector, {
        scrollTrigger: {
          trigger: groupSelector,
          start: "top 80%",
          markers: false,
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "in-out",
        stagger: 0.1,
        autoAlpha: 0,
      });
    });

    // Hero company logos popup
    [".popHeroLeft", ".popHeroRight"].forEach((selector: string) => {
      gsap.from(selector, {
        scale: 0.9,
        x: selector.toLowerCase().endsWith("left") ? 60 : -60,
        y: 60,
        opacity: 0,
        duration: 0.9,
        delay: 0.4,
        ease: "elastic.out(1,0.9)",
        stagger: 0.1,
        autoAlpha: 0,
      });
    });

    [".popFooterLeft", ".popFooterRight"].forEach((selector: string) => {
      gsap.from(selector, {
        scrollTrigger: {
          trigger: selector, // Trigger the animation when the element comes into view
          start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport
          // end: "top 10%", // Optionally end the animation when the element goes past a certain point
          once: false, // Trigger the animation only once
          scrub: 2, // Smooth scrolling effect, optional
        },
        scale: 0.9,
        x: selector.toLowerCase().endsWith("left") ? 60 : -60,
        y: 60,
        opacity: 0,
        duration: 0.9,
        delay: 0.4,
        ease: "elastic.out(1,0.9)",
        stagger: 0.1,
      });
    });    
  });
};

export default useAnimations;
