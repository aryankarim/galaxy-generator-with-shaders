varying vec3 vColor;

void main()
{
    vec2 vUv = gl_PointCoord;

    float strength = 0.15 / (distance(vec2(vUv.x, (vUv.y - 0.5) * 5.0 + 0.5), vec2(0.5)));
    strength *= 0.15 / (distance(vec2(vUv.y, (vUv.x - 0.5) * 5.0 + 0.5), vec2(0.5)));


    vec3 color = mix(vec3(0), vColor, strength);

    gl_FragColor = vec4(color, 1.0);
}