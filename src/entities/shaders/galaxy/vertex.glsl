uniform float uSize;
uniform float uTime;

attribute float aSize;
attribute vec3 aRandom;

varying vec3 vColor;

void main()
{
    vec4 mPosition = modelMatrix * vec4(position, 1.0);


    // Spin

    float angle = atan(mPosition.x,mPosition.z);
    float distanceToCenter = length(mPosition.xz);
    float angleOffset = (1.0 / distanceToCenter) * uTime * 0.09;
    angle += angleOffset;
    mPosition.x = cos(angle) * distanceToCenter;
    mPosition.z = sin(angle) * distanceToCenter;

    // Randomness
    mPosition.xyz += aRandom;


    vec4 mvPosition = viewMatrix * mPosition;
    vec4 mvpPosition = projectionMatrix * mvPosition;
    

    gl_Position = mvpPosition;

    gl_PointSize = uSize * aSize ;
    gl_PointSize *= -(1.0 / mvPosition.z);

    vColor = color;
}