

uniform sampler2D uTexture;
uniform float uSpeed;
varying vec2 vUv;

void main() {
    vec2 uv = vUv;

    // Apply wave distortion
    uv.x += 0.03 * sin((uv.y-1.0+uv.x) * 6.0 + uSpeed);
	 uv.y += 0.03 * sin((uv.y+uv.x-1.0) * 6.0 + uSpeed);

    // Discard if UV goes outside [0.0, 1.0]
    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
        discard;
    }

    gl_FragColor = texture2D(uTexture, uv);
}
