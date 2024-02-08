"use client";
import React, { useEffect } from "react";
import { LandingPage, About, Gallery, Detail } from "../components";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <LandingPage />
      <About />
      <Gallery />
      <Detail />
    </>
  );
}
