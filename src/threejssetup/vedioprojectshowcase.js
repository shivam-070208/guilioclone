import gsap from "gsap";
import { init } from "./init";
import FragementShaderGlsl from "./shaders/FragementShader.glsl";
import VertexShaderGlsl from "./shaders/VertexShader.glsl";

export const Showcase = (elm = document.createElement('div')) => {
  const { scene, camera, THREE, renderer,resize } = new init();
camera.position.z = 5;
const meshxposition = {
    value:0.0
}
  const videoArray = elm.querySelectorAll('.vedio');
  let uniforms = {
    uTime:{
        value:0.0
    },
    uTexture:{
        value:null
    },
    uSpeed:{
        value:5.0
    }
  }
console.log(videoArray)
  const textureArray = Array.from(videoArray).map((video) => {
  video.muted = true;
  video.loop = true;
  video.autoplay = true;
  video.playsInline = true;
  video.crossOrigin = "anonymous"; // optional
  video.play(); 

  return new THREE.VideoTexture(video);
  });


  renderer.domElement.width = elm.clientWidth;
  renderer.domElement.height = elm.clientHeight;
  renderer.setSize(elm.clientWidth, elm.clientHeight);
  elm.appendChild(renderer.domElement);

  const meshes = textureArray.map((texture = new THREE.VideoTexture(), index) => {
    const geometry = new THREE.PlaneGeometry(4, 4);
    
    uniforms.uTexture.value = texture;
    const material = new THREE.ShaderMaterial({side: THREE.FrontSide,fragmentShader:FragementShaderGlsl,vertexShader:VertexShaderGlsl,uniforms:uniforms});
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = index * 4.0 + 5.0; // Offset each plane
    mesh.position.y = 0;
    scene.add(mesh);
   
    return mesh;
  });
  console.log(scene)
  window.addEventListener('resize',resize)
const animate =()=>{
  
    window.requestAnimationFrame(animate)

    renderer.render(scene, camera);
}
let going = false;
elm.addEventListener('wheel',()=>{
if(going)  return;
going = true;
gsap.fromTo(uniforms.uTime,{value:0},{
    value:0.5 ,
    duration:0.8,
  
  
    onComplete:()=>{
        gsap.to(uniforms.uTime,{
            value:0.0,
            duration:0.8,
            onComplete:()=>{

                going = false;
            }
        })
    }
})
})
animate();
gsap.to(uniforms.uSpeed,{
    value:10*Math.PI - 4.0,
    duration:20.0,
    repeat:-1,
    ease:'none'
})


  gsap.to(meshxposition, {
  value: meshes.length*-4.0,
  scrollTrigger: {
    trigger: '.www',
    scroller: 'body',
    scrub: true,
    pin: true,
    end: 'bottom 100',
    
    toggleActions: 'play none reset none',
  },
  onUpdate: () => {
    meshes.forEach((mesh, index) => {
      mesh.position.x = meshxposition.value + index * 6.0; 
    });
  },
});

};
