    /*
        Author(a): Michael Estiven Reyes Escobar
        Date of creation: 11/Agust/2022
        Date of last modification: 18/Agust/2022 -12:03 AM
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

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
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

    controls = new THREE.OrbitControls(camera, renderer.domElement); //Controlador de la camara
    camera.position.set(1,2,0); //Posicion de la camara en el espacio

    const size = 100;
    const divisions = 100;

    const gridHelper = new THREE.GridHelper( size, divisions );
    scene.add( gridHelper ); //creacion del grid helper

    //----------------------------------------------
    //----------------------------------------------

    //----------------------------------------------
    //----------------------------------------------
    window.addEventListener( 'resize', onWindowResize, false );
}

function getValues(objects2Create){

    

    let datas = document.querySelectorAll('input');

    switch (objects2Create) {

        case 'Box':

            const geometry = new THREE.BoxGeometry( datas[0].value, datas[1].value, datas[2].value );
            const material = new THREE.MeshBasicMaterial( { color: datas[3].value } );
            cube = new THREE.Mesh( geometry, material );
            scene.add( cube );

            scene.add( cube );

            break;

        case 'Cylinder':

            geometry = new THREE.CylinderGeometry( datas[0].value, datas[1].value, datas[2].value, 1 );
            material = new THREE.MeshBasicMaterial( { color: datas[3].value } );
            const cylinder = new THREE.Mesh( geometry, material );
            scene.add( cylinder );

            break;

        case 'Sphere':

            geometry = new THREE.SphereGeometry( datas[0].value, datas[1].value, datas[2].value );
            material = new THREE.MeshBasicMaterial( { color: datas[3].value } );
            const sphere = new THREE.Mesh( geometry, material );
            scene.add( sphere );

            break;

        default:
            break;
    }
}

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}

start();