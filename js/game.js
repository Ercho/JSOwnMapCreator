var scene = new THREE.Scene();
function game()
{
    var obj = JSON.parse(localStorage.getItem("plansza"));
    var siz = obj.size;   
    var camera = new THREE.PerspectiveCamera(
            45, // k¹t patrzenia kamery (FOV - field of view)
            window.innerWidth / window.innerHeight, // proporcje widoku, powinny odpowiadaæ proporjom naszego ekranu przegl¹darki
            0.1, // minimalna renderowana odleg³oœæ
            10000 // maxymalna renderowana odleg³oœæ
        );
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x008000);
    renderer.setSize(window.innerWidth, window.innerHeight);
    var podlogaG = new THREE.PlaneGeometry(64*siz, 64*siz, siz, siz);
    var podlogaM = new THREE.MeshBasicMaterial({
        color: 0x0000ff, side: THREE.DoubleSide, wireframe: true
    });
    var podloga = new THREE.Mesh(podlogaG, podlogaM);
    podloga.rotateX(Math.PI / 2);
    scene.add(podloga);
    document.getElementById("body").appendChild(renderer.domElement);
    function animateScene()
    {
        renderer.render(scene, camera);
        requestAnimationFrame(animateScene);
        console.log("Animuje");
    }
    animateScene();
    camera.position.y = 900;
    camera.position.z = 1200;
    camera.lookAt(podloga.position);   
    var axisHelper = new THREE.AxisHelper(1000);
    scene.add(axisHelper);
}
game();