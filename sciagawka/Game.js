function Game() {
    var test = 10;

    function init() {
        alert("gra startuje, test = " + test);
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(
            45, // k¹t patrzenia kamery (FOV - field of view)
            4 / 3, // proporcje widoku, powinny odpowiadaæ proporjom naszego ekranu przegl¹darki
            0.1, // minimalna renderowana odleg³oœæ
            10000 // maxymalna renderowana odleg³oœæ
        );
        var renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(0x008000);
        renderer.setSize(1000, 800);
        var plansza = new THREE.PlaneGeometry(1024, 1024, 8, 8);      
        var material = new THREE.MeshBasicMaterial({
            color: 0x0000ff, side: THREE.DoubleSide, wireframe: true
        });
        var pmesh = new THREE.Mesh(plansza, material);
        pmesh.rotateX(Math.PI / 2);
        scene.add(pmesh);
        document.getElementById("plansza").appendChild(renderer.domElement);
        camera.position.y = 900;
        camera.position.z = 1200;
        camera.lookAt(pmesh.position);
        function animateScene() {
            renderer.render(scene, camera);
            requestAnimationFrame(animateScene);
            console.log("Animuje");
        }
        animateScene();
        
        Game.setCamera = function (type){
            switch (type) {
                case 'g':
                    camera.position.x = 0;
                    camera.position.y = 1500;
                    camera.position.z = 0;
                    camera.lookAt(pmesh.position);
                    break;
                case 'p':
                    camera.position.x = 0;
                    camera.position.y = 900;
                    camera.position.z = 1200;
                    camera.lookAt(pmesh.position);
                    break;
                case 't':
                    camera.position.x = 0;
                    camera.position.y = 900;
                    camera.position.z = -1200;
                    camera.lookAt(pmesh.position);
                    break;
                case 'b':
                    camera.position.x = 1200;
                    camera.position.y = 900;
                    camera.position.z = 0;
                    camera.lookAt(pmesh.position);
                    break;
            }
        }
        var Cube = new THREE.CubeGeometry(256, 128, 128, 1, 1, 1);
        var Cube2 = new THREE.CubeGeometry(256, 128, 128, 1, 1, 1);
        var CubeMaterial = new THREE.MeshBasicMaterial({
            color: 0xff00ff, side: THREE.DoubleSide
        });
        var CubeMaterial2 = new THREE.MeshBasicMaterial({
            color: 0x00ffff, side: THREE.DoubleSide
        });
        var cubeG = new THREE.Mesh(Cube, CubeMaterial);
        var cubeG2 = new THREE.Mesh(Cube2, CubeMaterial2);
        cubeG.position.y = 64;
        cubeG2.position.y = 64;
        cubeG.position.z = 448;
        cubeG2.position.z = -448;
        scene.add(cubeG);
        scene.add(cubeG2);
        var szach = [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
        ];

    }
    init();
    this.setTest = function (val) {
        test = val;
        alert("ustawiam test w klasie Game na: " + test)
    }
    this.getTest = function () {
        return test;
    }
}