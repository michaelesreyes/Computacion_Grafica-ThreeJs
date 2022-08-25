    /*
        Author(a): Michael Estiven Reyes Escobar
        Date of creation: 11/Agust/2022
        Date of last modification: 25/Agust/2022 -6:33 PM
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
    cube = null,
    box = null,
    sphere= null,
    cicle = null,
    cylinder = null,
    Bar = null,
    color = null; //El cubo que se utiliza para representar la escena (representar la escena)

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
    camera.position.set(-1,2,-1); //Posicion de la camara en el espacio

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

async function changeColor(){
    color = await document.querySelector('.changeColor').value;
    box.material.color.set(color);
    cicle.material.color.set(color);
    Bar.material.color.set(color);
}

function getValues(object2create) {

    switch (object2create) {
        case 'Box':
            let dataBox =  document.querySelectorAll('.createBox');
            color = dataBox[3].value
            const geometry = new THREE.BoxGeometry( dataBox[0].value, dataBox[1].value, dataBox[2].value );
            const material = new THREE.MeshBasicMaterial( { color: color } );
            cube = new THREE.Mesh( geometry, material );
            box = cube;
            scene.add( cube );
            break;

        case 'Cylinder':
            let datasCylinder=document.querySelectorAll('.dataCylinder');
            color = datasCylinder[4].value;
                const geometryCylinder = new THREE.CylinderGeometry( datasCylinder[0].value, datasCylinder[1].value, datasCylinder[2].value, datasCylinder[3].value );
                const materialCylinder = new THREE.MeshBasicMaterial( {color: color} );
                const cylinder = new THREE.Mesh( geometryCylinder, materialCylinder );
                Bar=cylinder;
                scene.add( cylinder );
    
                break;
    
        case 'Sphere':
            let dataSphere = document.querySelectorAll('.createSphere');
            color = dataSphere[3].value
            const geometrySphere = new THREE.SphereGeometry( dataSphere[0].value, dataSphere[1].value, dataSphere[2].value );
            const materialSphere = new THREE.MeshBasicMaterial( { color: color } );
            sphere = new THREE.Mesh( geometrySphere, materialSphere );
            circle = sphere;
            scene.add( sphere );
    
                // code block
            break;
        default:
            break;
    }
}

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

start();