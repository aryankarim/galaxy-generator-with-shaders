uniform float uSize;
attribute float aSize;

void main()
{
    vec4 mPosition = modelMatrix * vec4(position, 1.0);
    vec4 mvPosition = viewMatrix * mPosition;
    vec4 mvpPosition = projectionMatrix * mvPosition;

    gl_Position = mvpPosition;

    gl_PointSize = uSize * aSize ;
    gl_PointSize *= -(1.0 / mvPosition.z);
}