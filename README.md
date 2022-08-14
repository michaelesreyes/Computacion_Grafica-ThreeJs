# Computacion_Grafica-ThreeJs

"Study Repository"

This repository is the most concrete way to collect the information seen in the graphical computing class, everything in this repository is for public use to learn how to manage and know the Three JS syntax

## Installation

Use the git clone [git](https://git-scm.com/docs/git-clone) to dowload Computacion_Grafica-ThreeJs.

```bash
gh repo clone michaelesreyes/Computacion_Grafica-ThreeJs
```

## Usage

```javascript

    //can you change this lines

    const geometry = new THREE.BoxGeometry( 2, 2, 2 );
    const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[GNU](https://choosealicense.com/licenses/gpl-3.0/#)