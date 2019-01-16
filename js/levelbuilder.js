function build() {
    var scianaG = new THREE.CubeGeometry(64, 128, 64);
    var scianaM = new THREE.MeshBasicMaterial({
        color: 0xff0000, side: THREE.DoubleSide, wireframe: true
    });
    var sciana = new THREE.Mesh(scianaG, scianaM);
    scene.add(sciana);
    sciana.position.y = -200;
}
build();