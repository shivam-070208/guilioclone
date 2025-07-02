import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { init } from "./init";
import FragementShaderGlsl from "./shaders/FragementShader.glsl";
import VertexShaderGlsl from "./shaders/VertexShader.glsl";

gsap.registerPlugin(ScrollTrigger);

export const loadmodel = ({ elm }) => {
  const { renderer, THREE, scene, camera, resize, gltfloader, dracoloader } = new init({ elm });

  let model, mixer;

  const anima = {
    value: 0.3
  };
 
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.0); // global soft light
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
  directionalLight.position.set(5, 10, 7); // angled light for depth
  directionalLight.castShadow = true;
  scene.add(directionalLight);

  const pointLight = new THREE.PointLight(0xffffff, 2);
  pointLight.position.set(0, 0, 5); // front light
  scene.add(pointLight);
    const pointLight2 = new THREE.PointLight(0xffffff, 2);
  pointLight2.position.set(-1, 1, 3); 
  scene.add(pointLight2);

 


  camera.position.set(0, 1.9, 4.6);

  dracoloader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
  gltfloader.setDRACOLoader(dracoloader);
 


  gltfloader.load('/Man7.glb', (gltf) => {
    model = gltf.scene;

  
    const textureLoader = new THREE.TextureLoader();
    const env = textureLoader.load('/modeltexture.jpg');
    env.mapping = THREE.EquirectangularReflectionMapping
    const texture2 = textureLoader.load('/noise.jpeg')
    model.traverse((child) => {
      if (child.isMesh) {
       const material = new THREE.MeshStandardMaterial({
  color:new THREE.Color('blue'),
  metalness: 1.0,
  roughness: 0.0,
  envMap: env,
 map:texture2,

  envMapIntensity: 0.1
});

        if (child.morphTargetInfluences) material.morphTargets = true;

        child.material = material;
        child.material.needsUpdate = true;

        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    mixer = new THREE.AnimationMixer(model);
    gltf.animations.forEach((clip) => {
      mixer.clipAction(clip).play();
    });

    model.position.set(0, -1, 3); // place in view
    scene.add(model);

   const action = mixer._actions[0];
        const duration = action.getClip().duration;
        mixer.setTime(anima.value * duration);
    renderer.render(scene, camera);
  });
gsap.fromTo(anima, {
    value: 0.0
  }, {
    value: 0.4,
    duration: 5,
    yoyo: true,
    scrollTrigger: {
      trigger: '#home',
        end: 'bottom 300',
      toggleActions: 'play pause play pause',
    
    },
    repeat: -1,
   
    
    onUpdate: () => {
      if (mixer && mixer._actions.length > 0) {
        const action = mixer._actions[0];
        const duration = action.getClip().duration;
        mixer.setTime(anima.value * duration);
      }
    }
  });
gsap.fromTo(anima,{
    value:0.5
} ,{
    value: 0.6,
    ease: 'circ.inOut',
    duration:1.5,
    scrollTrigger: {
        trigger: '#projects',
        scrub:0.2,
        start: 'top 200',
        end: 'bottom bottom',
        toggleActions:'play none none reverse',
       
    },
    onUpdate: () => {
        if (mixer && mixer._actions.length > 0) {
            const action = mixer._actions[0];
            const duration = action.getClip().duration;
            mixer.setTime(anima.value * duration);
        }
    }
});
gsap.to(camera.position,{
    x:-0.8,
    y:1.4,
    z:4.,
    scrollTrigger: {
        trigger: '#projects',
        
        end: 'bottom bottom',
        toggleActions:'play none play play',
        scrub:true
       
    },
  
});
gsap.to(camera.position,{
    x:0,
    y:1.4,
    z:5,
    scrollTrigger: {
        trigger: '#skills',
        start: 'top 400',
        end: 'bottom bottom',
        toggleActions:'play none none reset',
        scrub:true
       
    },
  
});

 gsap.fromTo(anima,{
    value:0.6
} ,{
    value: 0.71,
    ease: 'circ.inOut',
    duration:2,
    scrollTrigger: {
        trigger: '#skills',
        start: 'top 200',
        end: 'bottom bottom',
        toggleActions:'play none none reverse',
       
    },
    onUpdate: () => {
        if (mixer && mixer._actions.length > 0) {
            const action = mixer._actions[0];
            const duration = action.getClip().duration;
            mixer.setTime(anima.value * duration);
        }
    }
});


  const animate = () => {
  if(model)  camera.lookAt(model.position.x,model.position.y+3.0,model.position.z)
   
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  animate();
  window.addEventListener('resize', resize);
};
