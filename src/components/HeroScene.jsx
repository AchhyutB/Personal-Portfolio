import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import gsap from "gsap";

const HeroScene = () => {
  const host = useRef(null);

  useEffect(() => {
    const container = host.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 9);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    const isCompactViewport = window.innerWidth < 1024;
    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, isCompactViewport ? 1 : 1.5),
    );
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloom = new UnrealBloomPass(
      new THREE.Vector2(1, 1),
      0.65,
      0.65,
      0.15,
    );
    composer.addPass(bloom);

    const universe = new THREE.Group();
    universe.position.set(1.8, 0, 0);
    scene.add(universe);
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.65, 4),
      new THREE.MeshBasicMaterial({
        color: 0xe7e5e4,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      }),
    );
    universe.add(core);
    const coreGlow = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.52, 3),
      new THREE.MeshBasicMaterial({
        color: 0x78716c,
        wireframe: true,
        transparent: true,
        opacity: 0.11,
      }),
    );
    universe.add(coreGlow);
    const orbitMaterial = new THREE.MeshBasicMaterial({
      color: 0xf5f5f4,
      transparent: true,
      opacity: 0.28,
    });
    const orbitA = new THREE.Mesh(
      new THREE.TorusGeometry(2.45, 0.012, 8, 180),
      orbitMaterial,
    );
    orbitA.rotation.set(1.16, 0.12, 0.42);
    const orbitB = new THREE.Mesh(
      new THREE.TorusGeometry(3.05, 0.009, 8, 180),
      orbitMaterial.clone(),
    );
    orbitB.rotation.set(-0.64, 0.78, -0.3);
    const orbitC = new THREE.Mesh(
      new THREE.TorusGeometry(1.98, 0.007, 8, 180),
      orbitMaterial.clone(),
    );
    orbitC.rotation.set(0.24, -0.95, 1.1);
    universe.add(orbitA, orbitB, orbitC);

    const pointCount = isCompactViewport ? 360 : 800;
    const pointPositions = new Float32Array(pointCount * 3);
    for (let i = 0; i < pointCount; i += 1) {
      const radius = 2.4 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pointPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pointPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pointPositions[i * 3 + 2] = radius * Math.cos(phi) * 0.52;
    }
    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(pointPositions, 3),
    );
    const points = new THREE.Points(
      pointsGeometry,
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.018,
        transparent: true,
        opacity: 0.66,
        sizeAttenuation: true,
      }),
    );
    universe.add(points);

    const target = { x: 0, y: 0, scroll: 0 };
    const quickX = gsap.quickTo(target, "x", {
      duration: 1.4,
      ease: "power3.out",
    });
    const quickY = gsap.quickTo(target, "y", {
      duration: 1.4,
      ease: "power3.out",
    });
    const pointerMove = (event) => {
      quickX((event.clientX / window.innerWidth - 0.5) * 0.85);
      quickY((event.clientY / window.innerHeight - 0.5) * 0.52);
    };
    const onScroll = () => {
      target.scroll = Math.min(window.scrollY / 750, 1);
    };
    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      composer.setSize(width, height);
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", pointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    const clock = new THREE.Clock();
    let frame;
    const render = () => {
      const elapsed = clock.getElapsedTime();
      universe.rotation.y +=
        (target.x + elapsed * 0.07 - universe.rotation.y) * 0.025;
      universe.rotation.x +=
        (target.y * 0.7 +
          Math.sin(elapsed * 0.35) * 0.08 -
          universe.rotation.x) *
        0.025;
      universe.position.y =
        Math.sin(elapsed * 0.65) * 0.16 - target.scroll * 0.6;
      core.rotation.y = elapsed * 0.16;
      core.rotation.z = elapsed * 0.09;
      coreGlow.rotation.y = -elapsed * 0.1;
      orbitA.rotation.z = elapsed * 0.18;
      orbitB.rotation.z = -elapsed * 0.12;
      orbitC.rotation.z = elapsed * 0.2;
      points.rotation.z = -elapsed * 0.028;
      composer.render();
      frame = requestAnimationFrame(render);
    };
    render();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", pointerMove);
      window.removeEventListener("scroll", onScroll);
      core.geometry.dispose();
      core.material.dispose();
      coreGlow.geometry.dispose();
      coreGlow.material.dispose();
      [orbitA, orbitB, orbitC].forEach((orbit) => {
        orbit.geometry.dispose();
        orbit.material.dispose();
      });
      pointsGeometry.dispose();
      points.material.dispose();
      composer.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={host}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 block overflow-hidden opacity-35 sm:opacity-55 lg:opacity-90"
    />
  );
};

export default HeroScene;
