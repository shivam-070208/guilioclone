
varying vec2 vUv;
uniform float uSpeed;
uniform float uTime;
void main() {
	vUv = uv;
	vec3 newPosition = position;
	newPosition.x+=smoothstep(0.0,0.2,sin(uSpeed));
	newPosition.z+= smoothstep(0.2,1.0,(uv.y+uv.x + uTime +uSpeed) *10.0)*sin(uSpeed+uTime * (vUv.y+vUv.x +0.4)*6.f);
	gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition*(1.0-uTime), 1.0 );
}

