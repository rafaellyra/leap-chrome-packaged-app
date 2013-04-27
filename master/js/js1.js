var scene, camera, renderer, controls, stats;
var cube;
var projector, mouse = { x: 0, y: 0 }, INTERSECTED;
var cubeMouse;

// initialization
init();
animate();

function init(){
	scene = new THREE.Scene();
	////////////
	// CAMERA //
	////////////
	
	// set the view size in pixels (custom or according to window size)
	var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;	
	var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
	scene.add(camera);
	camera.position.set(0,150,400);
	camera.lookAt(scene.position);

	renderer = new THREE.CanvasRenderer();
	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
	//var container = document.createElement( "div" );
	container = document.getElementById("container");
	//document.body.appendChild( container );
	container.appendChild( renderer.domElement );

	THREEx.WindowResize(renderer, camera);

	// LIGHT
	var light = new THREE.PointLight(0xffffff);
	light.position.set(0,250,0);
	scene.add(light);

	///////////
	// STATS //
	///////////
	
	// displays current and past frames per second attained by scene
	// stats = new Stats();
	// stats.domElement.style.position = 'absolute';
	// stats.domElement.style.bottom = '0px';
	// stats.domElement.style.zIndex = 100;
	// container.appendChild( stats.domElement );

	////////////
	// CUSTOM //
	////////////
	var cubeGeometry = new THREE.CubeGeometry( 50, 50, 50 );
	var cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x000088 } );
	cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
	cube.position.set(0,50,0);
	
	//cube.rotation.set(0,0,90);
	scene.add(cube);

	// initialize object to perform world/screen calculations
	projector = new THREE.Projector();
	
	// when the mouse moves, call the given function
	//document.addEventListener( 'mousemove', onDocumentMouseMove, false );
}


function moveDedinho( dados )
{
	//console.log(dados);
	//var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;

	cube.position.set( dados[0], dados[1], -dados[2] );
	//cube.rotation.set(0,0,90);
}

var valorY = 0;
function rodaDedinhos(val)
{
	//min = -10;
	//max = 10;
	//cube.rotation.min(-300);
	//cube.rotation.max(300);
	console.log(val);
	cube.rotation.set( 0, val, 0);
	//console.log(dados);
}

function onDocumentMouseMove( event ) 
{
	// the following line would stop any other event handler from firing
	// (such as the mouse's TrackballControls)
	// event.preventDefault();
	var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
	// update sprite position
	cube.position.set( event.clientX-(SCREEN_WIDTH/2), (SCREEN_HEIGHT/2)-event.clientY, 0 );
	// console.log('x: '+ event.clientX + ' y: ' + (event.clientY-(SCREEN_HEIGHT/2)));
}

function animate() 
{
    requestAnimationFrame( animate );
	render();		
	update();
}

function update()
{
	//stats.update();
}

function render() 
{
	renderer.render( scene, camera );
}

function recebeDadosLeap(dados)
{
	console.log(dados);
}

