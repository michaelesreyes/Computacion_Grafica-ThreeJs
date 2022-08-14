    /*
        Author(a): Michael Estiven Reyes Escobar
        Date of creation: 11/Agust/2022
        Date of last modification: 11/Agust/2022 -12:03 AM
    */

//definiciones de los elementos que puedo crear

console.log(THREE);

// Var : variables globales (se Pueden declarar sin inicializar y se pueden inicializar despues de declararlas)
// let: variables locales (se declaran y se inicializan al momento de su declaracion)
// const: constantes (se declaran y se inicializan al momento de su declaracion)

//my principal elements: Scene, Camera, Render, Controls

var scene = null, //La composicion de todos los objetos de la escena (The compositon of diferrent elements)
    camera = null, //La camara que se utiliza para ver la escena (let met to see)
    renderer = null,//El renderizador que se utiliza para renderizar la escena (representar las imagenes), (let me represent with digital image)
    controls = null, //El controlador que se utiliza para controlar la camara (can movements)
    cube = null; //El cubo que se utiliza para representar la escena (representar la escena)

function start(){
    initScene();
    animate();
}

function initScene(){
    //Scene, Camera, Render
    //create Scene

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    //3D Camera
    camera = new THREE.PerspectiveCamera( 75 //FOV (Field of View)
        , window.innerWidth / window.innerHeight //Aspect Ratio (Ratio of the screen)
        , 0.1 //NEAR (Near clipping plane)
        , 1000 // FAR (Far clipping plane)
        );
    //TO RENDER
    const canvas = document.querySelector('.webgl');

    renderer = new THREE.WebGLRenderer({canvas: canvas});
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    scene.add(camera);

    //*********************************
    //*********************************

    const geometry = new THREE.BoxGeometry( 2, 2, 2 );
    const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    //*********************************
    //*********************************
}

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
}

start();