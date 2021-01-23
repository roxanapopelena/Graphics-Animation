var scene = new THREE.Scene();

var gui = new dat.GUI({name: 'My GUI'});
// We use this class to pass to dat.gui
// so when it manipulates near or far
// near is never > far and far is never < near
class FogGUIHelper {
    constructor(fog) {
      this.fog = fog;
    }
    get near() {
      return this.fog.near;
    }
    set near(v) {
      this.fog.near = v;
      this.fog.far = Math.max(this.fog.far, v);
    }
    get far() {
      return this.fog.far;
    }
    set far(v) {
      this.fog.far = v;
      this.fog.near = Math.min(this.fog.near, v);
    }
  }

  class ColorGUIHelper {
    constructor(object, prop) {
      this.object = object;
      this.prop = prop;
    }
    get value() {
      return `#${this.object[this.prop].getHexString()}`;
    }
    set value(hexString) {
      this.object[this.prop].set(hexString);
    }
  }
  
const color = 0xFFFFFF;  // white
const near = 100; //change to 50 or to a lower value when done
const far = 250; //initially 200
scene.fog = new THREE.Fog(color, near, far);
scene.background = new THREE.Color(0xFFFFFF);

const fogGUIHelper = new FogGUIHelper(scene.fog);
var folder = gui.addFolder('Fog');
  gui.add(fogGUIHelper, 'near', near, far).listen();
  gui.add(fogGUIHelper, 'far', near, far).listen();

var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 ); // Perspective projection parameters
camera.position.x = 0;
camera.position.y = 50;
camera.position.z = 50;

var renderer = new THREE.WebGLRenderer({});
renderer.setPixelRatio( window.devicePixelRatio );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
renderer.setSize(window.innerWidth, window.innerHeight); // Size of the 2D projection
document.body.appendChild(renderer.domElement); // Connecting to the canvas

window.addEventListener( 'resize', onWindowResize, false );

var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.dampingFactor = 0.75;
controls.screenSpacePanning = false;

// controls restrictions - TO UNLOCK ONCE WORK DONE
controls.minDistance = 20;
controls.maxDistance = 200;
controls.minPolarAngle = Math.PI / 4; // radians
controls.maxPolarAngle = Math.PI / 2.2; // radians

// building block
var material_top = new THREE.MeshStandardMaterial( {
    map: new THREE.TextureLoader().load('textures/metal.jpg')
} );
var material_bottom = new THREE.MeshStandardMaterial( {
    map: new THREE.TextureLoader().load('textures/metal.jpg')
} );
var material_left = new THREE.MeshStandardMaterial( {
    map: new THREE.TextureLoader().load('textures/building.jpg')
} );
var material_right = new THREE.MeshStandardMaterial( {
    map: new THREE.TextureLoader().load('textures/building.jpg')
} );
var material_front = new THREE.MeshStandardMaterial( {
    map: new THREE.TextureLoader().load('textures/building.jpg')
} );
var material_back = new THREE.MeshStandardMaterial( {
    map: new THREE.TextureLoader().load('textures/building.jpg')
} );

var allMaterials = [
    material_left,        // Left side
    material_right,        // Right side
    material_top,         // Top side
    material_bottom,      // Bottom side
    material_front,       // Front side
    material_back         // Back side
];

var buildingGeometry = new THREE.BoxBufferGeometry( 12, 12, 15 );
building = new THREE.Mesh(buildingGeometry, allMaterials);  
building.position.set(5, 6, 0);
building.castShadow = true; //default is false
building.receiveShadow = false; //default

// building2 block
var material_top = new THREE.MeshStandardMaterial( {
  map: new THREE.TextureLoader().load('textures/metal.jpg')
} );
var material_bottom = new THREE.MeshStandardMaterial( {
  map: new THREE.TextureLoader().load('textures/metal.jpg')
} );
var material_left = new THREE.MeshStandardMaterial( {
  map: new THREE.TextureLoader().load('textures/building2.jpg')
} );
var material_right = new THREE.MeshStandardMaterial( {
  map: new THREE.TextureLoader().load('textures/building2.jpg')
} );
var material_front = new THREE.MeshStandardMaterial( {
  map: new THREE.TextureLoader().load('textures/building2.jpg')
} );
var material_back = new THREE.MeshStandardMaterial( {
  map: new THREE.TextureLoader().load('textures/building2.jpg')
} );

var allMaterials = [
  material_left,        // Left side
  material_right,        // Right side
  material_top,         // Top side
  material_bottom,      // Bottom side
  material_front,       // Front side
  material_back         // Back side
];

//building2
var buildingGeometry2 = new THREE.BoxBufferGeometry( 5, 10, 15 );
building2 = new THREE.Mesh(buildingGeometry2, allMaterials);  
building2.position.set(37.5, 5, 0);
building2.castShadow = true; //default is false
building2.receiveShadow = false; //default

//building3
building3 = building2.clone();  
building3.position.set(47.5, 5, 0);

//building 4
var buildingGeometry3 = new THREE.BoxBufferGeometry( 8, 12, 20 );
building4 = new THREE.Mesh(buildingGeometry3, allMaterials);  
building4.position.set(42.5, 6, -11);
building4.rotation.y=Math.PI/-2;
building4.castShadow = true; //default is false
building4.receiveShadow = false; //default

//building5
building5 = building4.clone();  
building5.position.set(42.5, 6, 11);

// skyscraper block
var material_top = new THREE.MeshStandardMaterial( {
  map: new THREE.TextureLoader().load('textures/metal.jpg')
} );
var material_bottom = new THREE.MeshStandardMaterial( {
  map: new THREE.TextureLoader().load('textures/metal.jpg')
} );
var material_left = new THREE.MeshStandardMaterial( {
  map: new THREE.TextureLoader().load('textures/skyscraper.jpg')
} );
var material_right = new THREE.MeshStandardMaterial( {
  map: new THREE.TextureLoader().load('textures/skyscraper.jpg')
} );
var material_front = new THREE.MeshStandardMaterial( {
  map: new THREE.TextureLoader().load('textures/skyscraper.jpg')
} );
var material_back = new THREE.MeshStandardMaterial( {
  map: new THREE.TextureLoader().load('textures/skyscraper.jpg')
} );

var allMaterials = [
  material_left,        // Left side
  material_right,        // Right side
  material_top,         // Top side
  material_bottom,      // Bottom side
  material_front,       // Front side
  material_back         // Back side
];

var skyscraperGeometry = new THREE.BoxBufferGeometry( 12, 30, 15 );
skyscraper = new THREE.Mesh(skyscraperGeometry, allMaterials);  
skyscraper.position.set(-50, 15, 0);
skyscraper.castShadow = true; //default is false
skyscraper.receiveShadow = false; //default

//skyscraper2
skyscraper2= skyscraper.clone();
skyscraper2.position.set(-45, 15, -20);

//house base
var houseBaseGeo = new THREE.BoxBufferGeometry( 15, 0.5, 25 );
const houseBaseMat = new THREE.MeshPhongMaterial( { color:0x472601 } );
houseBase = new THREE.Mesh(houseBaseGeo, houseBaseMat);  
houseBase.position.set(-5,0.3,47.5);
houseBase.rotation.y=Math.PI/-2;
houseBase.castShadow = true; //default is false
houseBase.receiveShadow = true; //default

//housebase
houseBase2= houseBase.clone();
houseBase2.position.set(-5,6.5,47.5);

//housePart
var housePartGeo = new THREE.BoxBufferGeometry( 12, 6, 25 );
const housePartMat = new THREE.MeshPhongMaterial( { color:0x472601 } );
housePart = new THREE.Mesh(housePartGeo, housePartMat);  
housePart.position.set(-5,3.5,49);
housePart.rotation.y=Math.PI/-2;
housePart.castShadow = true; //default is false
housePart.receiveShadow = true; //default

//Concrete plane to put at the base of buildings
const asphaltGeo = new THREE.PlaneGeometry( 20, 20, 38 );
const asphalt = new THREE.TextureLoader().load( 'textures/pavement.jpg' );
const asphaltMaterial = new THREE.MeshPhongMaterial( { map: asphalt } );
asphaltMaterial.bumpMap = new THREE.TextureLoader().load( 'textures/pavement_bump.jpg' );
const asphaltPlane = new THREE.Mesh( asphaltGeo, asphaltMaterial );
asphaltPlane.receiveShadow = true;
asphaltPlane.position.y=0.03;
asphaltPlane.position.x=5;
asphaltPlane.rotation.x=Math.PI/-2;

//concrete plane 2
const asphaltGeo2 = new THREE.PlaneGeometry( 25, 30, 80 );
const asphaltPlane2 = new THREE.Mesh( asphaltGeo2, asphaltMaterial );
asphaltPlane2.receiveShadow = true;
asphaltPlane2.position.y=0.03;
asphaltPlane2.position.x=42.5;
asphaltPlane2.rotation.x=Math.PI/-2;

//Concrete plane beneath the containers
const asphaltGeo3 = new THREE.PlaneGeometry( 35, 30, 80 );
const asphaltPlane3 = new THREE.Mesh( asphaltGeo3, asphaltMaterial );
asphaltPlane3.receiveShadow = true;
asphaltPlane3.position.set(45,0.03,42.5);
asphaltPlane3.rotation.x=Math.PI/-2;

//skyscraper concrete plane
const asphaltGeo4 = new THREE.PlaneGeometry( 30, 45, 80 );
const asphaltPlane4 = new THREE.Mesh( asphaltGeo4, asphaltMaterial );
asphaltPlane4.receiveShadow = true;
asphaltPlane4.position.set(-46,0.02,-10);
asphaltPlane4.rotation.x=Math.PI/-2;


//general plane
const planeGeo = new THREE.PlaneGeometry( 500, 500, 500 );
const planeTexture = new THREE.TextureLoader().load( 'textures/road.jpg' );
const planeMaterial = new THREE.MeshStandardMaterial( { map: planeTexture } );
planeTexture.wrapS = THREE.RepeatWrapping;
planeTexture.wrapT = THREE.RepeatWrapping;
planeTexture.repeat.set( 50, 50 );
const generalPlane = new THREE.Mesh( planeGeo, planeMaterial );
generalPlane.receiveShadow = true;
generalPlane.position.set(0,0,0);
generalPlane.rotation.x=Math.PI/-2;
scene.add( generalPlane );

//tree trunk
const trunkGeo = new THREE.CylinderGeometry( .2, .2, 2, 32 );
const bark = new THREE.TextureLoader().load( 'textures/bark.jpg' );
const trunkMaterial = new THREE.MeshPhongMaterial( { map: bark } );
trunkMaterial.bumpMap = new THREE.TextureLoader().load( 'textures/bark_bump.jpg' );
const trunk = new THREE.Mesh( trunkGeo, trunkMaterial );
trunk.castShadow = true;
trunk.position.set(-10,0.8,-7);

//tree trunk park
const trunkGeo2 = new THREE.CylinderGeometry( 0.5, 0.5, 2, 32 );

for (var i=0;i<5;i++) {
          var trunk2 = new THREE.Mesh( trunkGeo2, trunkMaterial );
          trunk2.position.set(0,1,-35);
          trunk2.castShadow = true;
          trunk2.position.x = i*5+10;
          scene.add(trunk2);
      }

//fir tree cone 1
var coneGeo = new THREE.ConeGeometry( 2, 3, 20 );
const coneTexture = new THREE.TextureLoader().load( 'textures/xmas_tree.png' );
const coneMat = new THREE.MeshPhongMaterial( { map: coneTexture } );

for (var i=0;i<5;i++) {
  var cone = new THREE.Mesh( coneGeo, coneMat );
  cone.position.set(0,3,-35);
  cone.castShadow = true;
  cone.receiveShadow = true;
  cone.position.x = i*5+10;
  scene.add(cone);
  editUV(coneGeo);
}

//fir tree cone 2
var coneGeo2 = new THREE.ConeGeometry( 1.5, 3, 20 );

for (var i=0;i<5;i++) {
  var cone2 = new THREE.Mesh( coneGeo2, coneMat );
  cone2.position.set(0,4.5,-35);
  cone2.castShadow = true;
  cone2.receiveShadow = true;
  cone2.position.x = i*5+10;
  scene.add(cone2)
  editUV(coneGeo2);
}

//tree trunk park - back row
for (var i=0;i<8;i++) {
          var trunk3 = new THREE.Mesh( trunkGeo2, trunkMaterial );
          trunk3.position.set(0,1,-57.5);
          trunk3.castShadow = true;
          trunk3.position.x = i*5+3;
          scene.add(trunk3);
      }

//editUV function to avoid distortion of texture on cones
function editUV(geometry) {  
  var faces = geometry.faces;

  var coneHeight = geometry.parameters.height;
  var halfHeight = coneHeight/2;
  for (var i=0;i<faces.length;i++) {
      var v = [];
      v[0] = geometry.vertices[faces[i].a];
      v[1] = geometry.vertices[faces[i].b];
      v[2] = geometry.vertices[faces[i].c];

      for (var j=0;j<3;j++) {
        var xPos = geometry.faceVertexUvs[0][i][j].x;
        var diffX = xPos - 0.5; 
        var squeezeRatio = 1 - ((v[j].y + halfHeight) / coneHeight);

        var newUVxPos = (diffX*squeezeRatio) + 0.5;
        geometry.faceVertexUvs[0][i][j].x = newUVxPos;
      }
  }
  geometry.uvsNeedUpdate = true;
}

//fir tree cone 1 - back row
var coneGeo3 = new THREE.ConeGeometry( 2, 3, 20 );

for (var i=0;i<8;i++) {
  var cone = new THREE.Mesh( coneGeo3, coneMat );
  cone.position.set(0,3,-57.5);
  cone.castShadow = true;
  cone.receiveShadow = true;
  cone.position.x = i*5+3;
  editUV(coneGeo3);
  scene.add(cone);
}

//fir tree cone 2-back row
var coneGeo4 = new THREE.ConeGeometry( 1.5, 3, 20 );

for (var i=0;i<8;i++) {
  var cone2 = new THREE.Mesh( coneGeo4, coneMat );
  cone2.position.set(0,4.5,-57.5);
  cone2.castShadow = true;
  cone2.receiveShadow = true;
  cone2.position.x = i*5+3;
  editUV(coneGeo4);
  scene.add(cone2);
}

//tree crown
const crownGeo = new THREE.SphereBufferGeometry( 2, 32, 32 );
const crown = new THREE.TextureLoader().load( 'textures/crown.jpg' );
const crownMaterial = new THREE.MeshStandardMaterial( { map: crown } );
const treeCrown = new THREE.Mesh( crownGeo, crownMaterial );
treeCrown.castShadow = true;
treeCrown.position.set(-10,3.5,-7);

//pond
const pondGeo = new THREE.CircleBufferGeometry( 3, 32 );
const water = new THREE.TextureLoader().load( 'textures/water.jpg' );
const pondMaterial = new THREE.MeshStandardMaterial( { map: water } );
const pond = new THREE.Mesh( pondGeo, pondMaterial );
pond.receiveShadow = true;
pond.rotation.x=Math.PI/-2;
pond.position.set(-10,0.03,5);

//pond frame
const frameGeo = new THREE.RingBufferGeometry( 3, 3.5, 32 );
const frameMat = new THREE.MeshStandardMaterial( { color: 0xAFAFAF } );
const frame = new THREE.Mesh( frameGeo, frameMat );
frame.receiveShadow=true;
frame.rotation.x=Math.PI/-2;
frame.position.set(-10,.03,5);

//flower bush 
const flowerGeo = new THREE.SphereBufferGeometry( 1, 32, 32 );
const flowerImg = new THREE.TextureLoader().load( 'textures/flower.jpg' );
const flowerMaterial = new THREE.MeshStandardMaterial( { map: flowerImg } );
const flower = new THREE.Mesh( flowerGeo, flowerMaterial );
flower.castShadow=true;
flower.position.set(-12,1,12);

//soil
const soilGeo = new THREE.CircleBufferGeometry( 1.5, 32 );
const soilImg = new THREE.TextureLoader().load( 'textures/soil.jpg' );
const soilMaterial = new THREE.MeshPhongMaterial( { map: soilImg } );
soilMaterial.bumpMap = new THREE.TextureLoader().load( 'textures/soil_bump.jpg' );
const soil = new THREE.Mesh( soilGeo, soilMaterial );
soil.receiveShadow=true;
soil.rotation.x=Math.PI/-2;
soil.position.set(-12,.03,12);

//tree soil
const soil1 = new THREE.Mesh( soilGeo, soilMaterial );
soil1.receiveShadow=true;
soil1.rotation.x=Math.PI/-2;
soil1.position.set(-10,.03,-7);

//vertical hedge
var hedgeGeo = new THREE.BoxBufferGeometry (1,1.5,29);
const hedgeMaterial = new THREE.MeshStandardMaterial( {color:0x768D4A} );
hedge = new THREE.Mesh(hedgeGeo, hedgeMaterial);
hedge.castShadow=true;
hedge.receiveShadow=true;
hedge.position.set(-14.5,.7,-0.5)

//park hedge
var parkHedgeGeo = new THREE.BoxBufferGeometry (1,1.5,30);
var parkHedgeMaterial = new THREE.MeshStandardMaterial({color:0x024A0C});
hedgePark = new THREE.Mesh(parkHedgeGeo, parkHedgeMaterial);
hedgePark.castShadow=true;
hedgePark.receiveShadow=true;
hedgePark.position.set(-5,.7,-45.5)

//park hedge 2
hedgePark2 = new THREE.Mesh(parkHedgeGeo, parkHedgeMaterial);
hedgePark2.castShadow=true;
hedgePark2.receiveShadow=true;
hedgePark2.position.set(45,.7,-45.5)

//park hedge 3
var parkHedgeGeo = new THREE.BoxBufferGeometry (1,1.5,50);
hedgePark3 = new THREE.Mesh(parkHedgeGeo, parkHedgeMaterial);
hedgePark3.castShadow=true;
hedgePark3.receiveShadow=true;
hedgePark3.rotation.y=Math.PI/-2;
hedgePark3.position.set(20,.7,-60)

//park hedge segment
var parkHedgeGeo = new THREE.BoxBufferGeometry (1,1.5,30);
hedgePark4 = new THREE.Mesh(parkHedgeGeo, parkHedgeMaterial);
hedgePark4.castShadow=true;
hedgePark4.receiveShadow=true;
hedgePark4.rotation.y=Math.PI/-2;
hedgePark4.position.set(20,.7,-31)

//hedgeHouse
hedgeHouse= hedgePark.clone();
hedgeHouse.position.set(15,0.7,47.5);

//hedgeHouse2
hedgeHouse2 =hedgeHouse.clone();
hedgeHouse2.position.set(-25,0.7,47.5);

//hedgeHouse3
var hedgeHouse3Geo = new THREE.BoxBufferGeometry (1,1.5,40);
hedgeHouse3 = new THREE.Mesh(hedgeHouse3Geo, parkHedgeMaterial);
hedgeHouse3.castShadow=true;
hedgeHouse3.receiveShadow=true;
hedgeHouse3.rotation.y=Math.PI/-2;
hedgeHouse3.position.set(-5,0.7,62);

//hedgeHouseSegment
var hedgeHouse3Geo = new THREE.BoxBufferGeometry (1,1.5,15);
hedgeHouseSegment = new THREE.Mesh(hedgeHouse3Geo, parkHedgeMaterial);
hedgeHouseSegment.castShadow=true;
hedgeHouseSegment.receiveShadow=true;
hedgeHouseSegment.rotation.y=Math.PI/-2;
hedgeHouseSegment.position.set(7,0.7,33);

//houseHedgeSegment2
hedgeHouseSegment2 = hedgeHouseSegment.clone();
hedgeHouseSegment2.position.set(-17,0.7,33);


//small vertical hedge
var smallHedgeGeo = new THREE.BoxBufferGeometry (1,1.5,5);
smallHedge = new THREE.Mesh(smallHedgeGeo, hedgeMaterial);
smallHedge.castShadow=true;
smallHedge.receiveShadow=true;
smallHedge.position.set(14.5,.7,12.5)

smallHedge2 = new THREE.Mesh(smallHedgeGeo, hedgeMaterial);
smallHedge2.castShadow=true;
smallHedge2.receiveShadow=true;
smallHedge2.position.set(14.5,.7,-12.5)

//horizontal hedge
hedgeHorizontal = new THREE.Mesh(hedgeGeo, hedgeMaterial);
hedgeHorizontal.receiveShadow=true;
hedgeHorizontal.castShadow=true;
hedgeHorizontal.position.set(-0.5,.7,14.5)
hedgeHorizontal.rotation.y=Math.PI/-2;

hedgeHorizontal1 = new THREE.Mesh(hedgeGeo, hedgeMaterial);
hedgeHorizontal1.receiveShadow=true;
hedgeHorizontal1.castShadow=true;
hedgeHorizontal1.position.set(0.5,.7,-14.5)
hedgeHorizontal1.rotation.y=Math.PI/-2;

//Grass plane
var plane = null;
var planeGeometry = new THREE.PlaneBufferGeometry( 30, 30, 80 );
const grass = new THREE.TextureLoader().load( 'textures/grass.jpg' );
const grassMaterial = new THREE.MeshPhongMaterial( { map: grass } );
plane = new THREE.Mesh(planeGeometry, grassMaterial); 
plane.receiveShadow = true;
plane.rotation.x=Math.PI/-2;
plane.position.set(0,0.02,0);

//park grass
var planeGeometry = new THREE.PlaneBufferGeometry( 50, 30, 80 );
const grass2 = new THREE.TextureLoader().load( 'textures/grass2.jpg' );
grass2.wrapS = THREE.RepeatWrapping;
grass2.wrapT = THREE.RepeatWrapping;
grass2.repeat.set( 6, 6 );
const grass2Material = new THREE.MeshStandardMaterial( { map: grass2 } );
park = new THREE.Mesh(planeGeometry, grass2Material); 
park.receiveShadow = true;
park.rotation.x=Math.PI/-2;
park.position.set(20,0.02,-45.5);
scene.add( park );

//house grass
var planeGeometry = new THREE.PlaneBufferGeometry( 40, 30, 80 );
houseGrass = new THREE.Mesh(planeGeometry, grass2Material); 
houseGrass.receiveShadow = true;
houseGrass.rotation.x=Math.PI/-2;
houseGrass.position.set(-5,0.03,47.5);

//sidewalk plane
var sidewalkGeometry = new THREE.PlaneBufferGeometry( 35, 35, 80 );
const sidewalk = new THREE.TextureLoader().load( 'textures/sidewalk.jpg' );
sidewalk.wrapS = THREE.RepeatWrapping;
sidewalk.wrapT = THREE.RepeatWrapping;
sidewalk.repeat.set( 9, 9 );
const sidewalkMaterial = new THREE.MeshStandardMaterial( { map: sidewalk } );
sidewalkPlane = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial); 
sidewalkPlane.receiveShadow = true;
sidewalkPlane.rotation.x=Math.PI/-2;
sidewalkPlane.position.set(0,0.01,0);
sidewalkPlane.receiveShadow = true;

//sidewalk 2
sidewalkGeometry = new THREE.PlaneBufferGeometry( 30, 37.5, 80 );
sidewalkPlane2 = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial); 
sidewalkPlane2.receiveShadow = true;
sidewalkPlane2.rotation.x=Math.PI/-2;
sidewalkPlane2.position.set(42,0.01,0);
sidewalkPlane2.receiveShadow = true;

//sidewalk 3
var sidewalkGeometry = new THREE.PlaneBufferGeometry( 55, 37.5, 80 );
sidewalkPlane3 = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial); 
sidewalkPlane3.receiveShadow = true;
sidewalkPlane3.rotation.x=Math.PI/-2;
sidewalkPlane3.position.set(20,0.01,-45);
sidewalkPlane3.receiveShadow = true;

//house sidewalk
sidewalkPlane4=sidewalkPlane3.clone();
sidewalkPlane4.position.set(-5,0.01,47);

//skyscraper sidewalk
sidewalkPlane5 = sidewalkPlane3.clone();
sidewalkPlane5.rotation.z=Math.PI/2;
sidewalkPlane5.position.set(-46,0.01,-10);


//flag
var flag = null;
var flagGeom = new THREE.PlaneGeometry(5, 5, 7, 7);
const NU_logo = new THREE.TextureLoader().load( 'textures/NU_logo.png');
const m = new THREE.MeshPhongMaterial( { map: NU_logo } );
flag = new THREE.Mesh(flagGeom, m);
flag.material.side = THREE.DoubleSide;
flag.rotation.y=Math.PI/3;
flag.position.set(0,14.5,7);
wave(flagGeom, 2, 3);

function wave(geometry, cycle, height, frmOffset) {
  for (var i = 0; i < geometry.vertices.length; i++) {
  const width = 2*geometry.parameters.width;
  const xPos =
  (((geometry.vertices[i].x+frmOffset)*cycle) /
  width)*(2*Math.PI);
  // compute z-pos using sine function
  var zPos = Math.sin(xPos)*height/2;
  geometry.vertices[i].z = zPos;
  }
  geometry.verticesNeedUpdate = true;
  geometry.computeVertexNormals();
  }

//containers
var loader = new THREE.TextureLoader();

// load a resource
loader.load(
    // resource URL
    'textures/rusty_iron.jpg',
    // Function when resource is loaded
    function ( texture ) {
        // do something with the texture
        var material = new THREE.MeshPhongMaterial( {
            map: texture,
            shininess: 100,
            specular: 0x222200,
            bumpMap: new THREE.TextureLoader().load('textures/rusty_iron_bump.jpg')
         } );

         box1 = new THREE.Mesh(new THREE.BoxGeometry(6,7,10), material);
         box2 = new THREE.Mesh(new THREE.BoxGeometry(6,7,10), material);
         box3 = new THREE.Mesh(new THREE.BoxGeometry(6,7,10), material);
         box1.castShadow = true;
         box2.castShadow = true;
         box3.castShadow = true;
         box1.position.set(35,3.5,50);
         box2.position.set(45,3.5,50);
         box3.position.set(55,3.5,50);
         scene.add(box1, box2, box3);

    },
    // Function called when download progresses
    function ( xhr ) {
        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    },
    // Function called when download errors
    function ( xhr ) {
        console.log( 'An error happened' );
    }
);

//fence
var fenceGeometry = new THREE.PlaneBufferGeometry( 35, 5, 10 );
const fenceTexture = new THREE.TextureLoader().load( 'textures/fence.jpeg' );
const fenceMaterial = new THREE.MeshPhongMaterial( { map: fenceTexture } );
fenceMaterial.bumpMap = new THREE.TextureLoader().load( 'textures/fence_bump.jpg' );
fenceMaterial.side = THREE.DoubleSide;
fence = new THREE.Mesh(fenceGeometry, fenceMaterial);
fence.castShadow = true;
fence.position.set(45,2,57.5);

//fence2
fence2 = new THREE.Mesh(fenceGeometry, fenceMaterial);
fence2.castShadow = true;
fence2.position.set(45,2,27.5);

//fence3
var fenceGeometry3 = new THREE.PlaneBufferGeometry( 30, 5, 10 );
fence3 = new THREE.Mesh(fenceGeometry3, fenceMaterial);
fence3.castShadow = true;
fence3.rotation.y=Math.PI/-2;
fence3.position.set(27.5,2,42.5);

//fence 4
fence4 = new THREE.Mesh(fenceGeometry3, fenceMaterial);
fence4.castShadow = true;
fence4.rotation.y=Math.PI/-2;
fence4.position.set(62.5,2,42.5);

//bench material
var benchMat = null;
benchMat= new THREE.MeshStandardMaterial( {color:0x514343} );

//ObjectLoader
var bench;
// instantiate a loader
var objloader = new THREE.OBJLoader();
objloader.load(
'obj/bench.obj',
function ( object ) {
bench = object;
if (benchMat!=null) {
  bench.traverse( function ( child ) {
  if ( child instanceof THREE.Mesh ) { child.material = benchMat; }
  });
  }

bench.position.set(20,-1.2,-47);
bench.scale.set(0.6,0.6,0.6);
bench.rotation.y=Math.PI/-2;

bench2 = bench.clone();
bench2.position.set(17.5,-1.2,-47);
bench2.rotation.y=Math.PI/2;

bench3 = bench.clone();
bench3.position.set(15,-1.2,-47);
bench3.rotation.y=Math.PI/-2;

bench4 = bench.clone();
bench4.position.set(12.5,-1.2,-47);
bench4.rotation.y=Math.PI/2;

bench5 = bench.clone();
bench5.position.set(25,-1.2,-47);
bench5.rotation.y=Math.PI/-2;

bench6 = bench.clone();
bench6.position.set(22.5,-1.2,-47);
bench6.rotation.y=Math.PI/2;

scene.add( bench, bench2, bench3, bench4, bench5, bench6);
},
function ( xhr ) {
    console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
},
function ( xhr ) {
    console.log( 'An error happened' );
}
);

//plane material
var airplaneMat = null;
airplaneMat= new THREE.MeshStandardMaterial( {color:0x737373, shininess:100} );

var airplane;

// instantiate a loader
var objloader = new THREE.OBJLoader();
objloader.load(
'obj/airplane.obj',
function ( object ) {
airplane = object;
if (airplaneMat!=null) {
  airplane.traverse( function ( child ) {
  if ( child instanceof THREE.Mesh ) { child.material = airplaneMat; }
  });
  }
airplane.position.set(20,20,-27);
airplane.scale.set(0.2,0.2,0.2);
scene.add( airplane );
},
function ( xhr ) {
    console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
},
function ( xhr ) {
    console.log( 'An error happened' );
}
);





//car material
var carMat = null;
carMat= new THREE.MeshStandardMaterial( {color:0x4E064C, shininess:100} );

var car;

// instantiate a loader
var objloader = new THREE.OBJLoader();
objloader.load(
'obj/sportcar.obj',
function ( object ) {
car = object;
if (carMat!=null) {
  car.traverse( function ( child ) {
  if ( child instanceof THREE.Mesh ) { child.material = carMat; }
  });
  }
car.position.set(20,0.5,-17);
car.scale.set(2,2,2);
scene.add( car );
},
function ( xhr ) {
    console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
},
function ( xhr ) {
    console.log( 'An error happened' );
}
);






//cloud material
var cloudMat = null;
cloudMat= new THREE.MeshPhongMaterial( {color:0xFFFFFF} );

//cloud objects
var cloud;
// instantiate a loader
var objloader = new THREE.OBJLoader();
objloader.load(
'obj/cloud.obj',
function ( object ) {
cloud = object;
if (cloudMat!=null) {
  cloud.traverse( function ( child ) {
  if ( child instanceof THREE.Mesh ) { child.material = cloudMat; }
  });
  }
  cloud.scale.set(0.05,0.05,0.05);
  cloud.position.set(0,15,0);

  cloud2=cloud.clone();
  cloud.position.set(50,15,0);

  cloud3=cloud.clone();
  cloud3.position.set(20,15,50);

  cloud4=cloud.clone();
  cloud4.position.set(20,10,-50);

  scene.add(cloud, cloud2, cloud3, cloud4);
},
function ( xhr ) {
    console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
},
function ( xhr ) {
    console.log( 'An error happened' );
}
);

const archGeo = new THREE.TorusBufferGeometry( 4, 0.5, 16, 100 );
const archMat = new THREE.MeshBasicMaterial( { color: 0x08390F } );
const arch = new THREE.Mesh( archGeo, archMat );
arch.position.set(-5,0,33);

const statueGeo = new THREE.TorusKnotGeometry( 3, 0.7, 50, 16 );
const rock = new THREE.TextureLoader().load( 'textures/rock.jpg' );
const statueMat = new THREE.MeshPhongMaterial( { map: rock } );
statueMat.bumpMap = new THREE.TextureLoader().load( 'textures/rock_bump.jpg' );
const torusKnot = new THREE.Mesh( statueGeo, statueMat );
torusKnot.position.set(-37, 2, 0);
torusKnot.castShadow=true;
torusKnot.rotation.x=Math.PI/2;


//light material
var lightMat = null;
lightMat= new THREE.MeshPhongMaterial( {color:0x4E4E4E} );

//street lights
var light;
// instantiate a loader
var objloader = new THREE.OBJLoader();
objloader.load(
'obj/lightPost.obj',
function ( object ) {
light = object;
if (lightMat!=null) {
  light.traverse( function ( child ) {
  if ( child instanceof THREE.Mesh ) { child.material = lightMat; }
  });
  }
light.scale.set(0.3,0.3,0.3);
light.rotation.y=Math.PI/-3;
light.position.set(17,0,-16.5);

light2= light.clone();
light2.rotation.y=Math.PI*2/-3;
light2.position.set(17,0,16.5);

light3= light.clone();
light3.position.set(-5,0,-28);
light3.rotation.y=Math.PI/-1;

light4= light.clone();
light4.position.set(45,0,-28);
light4.rotation.y=Math.PI/-1;

light5= light.clone();
light5.position.set(-28,0,10);
light5.rotation.y=Math.PI*2/-4;

scene.add( light, light2, light3, light4, light5 );
},
function ( xhr ) {
    console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
},
function ( xhr ) {
    console.log( 'An error happened' );
}
);

//street lights
const streetLight = new THREE.SpotLight( 0xffffff, 0.5 );
streetLight.decay=9;
streetLight.position.set( 20 , 6 , -18.5 );
streetLight.angle = Math.PI/8;
streetLight.target.position.x = -100;
streetLight.target.position.y = -400;
streetLight.target.position.z = 0;
scene.add( streetLight );
scene.add( streetLight.target );

streetLight2= streetLight.clone();
streetLight2.position.set( 18,6,17.5 );
streetLight2.target.position.x = -100;
streetLight2.target.position.y = -5000;
streetLight2.target.position.z = 0;
scene.add( streetLight2 );
scene.add( streetLight2.target );

streetLight3= streetLight.clone();
streetLight3.position.set( -5,6,-26 );
streetLight3.target.position.x = -100;
streetLight3.target.position.y = -5000;
streetLight3.target.position.z = 0;
scene.add( streetLight3 );
scene.add( streetLight3.target );

streetLight4= streetLight.clone();
streetLight4.position.set( 45,6,-26 );
streetLight4.target.position.x = -100;
streetLight4.target.position.y = -5000;
streetLight4.target.position.z = 0;
scene.add( streetLight4 );
scene.add( streetLight4.target );

streetLight5= streetLight.clone();
streetLight5.position.set (-26.5,6,10);
streetLight5.target.position.x = -100;
streetLight5.target.position.y = -5000;
streetLight5.target.position.z = 0;
scene.add( streetLight5 );
scene.add( streetLight5.target );

//Groups

//Hedge around the university field
const university_hedge= new THREE.Group();
  university_hedge.add(hedge);
  university_hedge.add(smallHedge);
  university_hedge.add(smallHedge2);
  university_hedge.add(hedgeHorizontal);
  university_hedge.add(hedgeHorizontal1);

const university_group = new THREE.Group();
 university_group.add(building);
 university_group.add(asphaltPlane);
 university_group.add(trunk);
 university_group.add(treeCrown);
 university_group.add(pond);
 university_group.add(frame);
 university_group.add(soil);
 university_group.add(soil1);
 university_group.add(university_hedge);
 university_group.add(plane);
 university_group.add(sidewalkPlane);
 university_group.add(flower);
 university_group.add(flag);

 scene.add( university_group);

//pink building group
const pink_building_group = new THREE.Group();
  pink_building_group.add(building2);
  pink_building_group.add(building3);
  pink_building_group.add(building4);
  pink_building_group.add(building5);
  pink_building_group.add(asphaltPlane2);
  pink_building_group.add(sidewalkPlane2);

scene.add(pink_building_group);

//park group
const park_group = new THREE.Group();
park_group.add(park);
park_group.add(sidewalkPlane3);
park_group.add(hedgePark);
park_group.add(hedgePark2);
park_group.add(hedgePark3);
park_group.add(hedgePark4);

scene.add(park_group);

//container fence group
const container_fence = new THREE.Group();
container_fence.add(fence);
container_fence.add(fence2);
container_fence.add(fence3);
container_fence.add(fence4);

//container section
const container_group = new THREE.Group();
container_group.add(container_fence);
container_group.add(asphaltPlane3);

scene.add(container_group);

//Hedge around the university house
  const house_hedge= new THREE.Group();
  house_hedge.add(hedgeHouse);
  house_hedge.add(hedgeHouse2);
  house_hedge.add(hedgeHouse3);
  house_hedge.add(hedgeHouseSegment);
  house_hedge.add(hedgeHouseSegment2);

//House area
const house_group= new THREE.Group();
  house_group.add(house_hedge);
  house_group.add(houseGrass);
  house_group.add(sidewalkPlane4);
  house_group.add(houseBase);
  house_group.add(houseBase2);
  house_group.add(housePart);
  house_group.add(arch);

  scene.add(house_group);

//Skyscraper group
const skyscraper_group = new THREE.Group();
  skyscraper_group.add(sidewalkPlane5);
  skyscraper_group.add(asphaltPlane4);
  skyscraper_group.add(torusKnot);
  skyscraper_group.add(skyscraper);
  skyscraper_group.add(skyscraper2);

  scene.add(skyscraper_group);

//street light helper
//const streetLightHelper = new THREE.SpotLightHelper( streetLight5 );
//scene.add( streetLightHelper );

// Add the ambient light
var lightAmbient = new THREE.AmbientLight( 0x222222, 2.0 ); 
scene.add(lightAmbient);

// Add the spot light
var lightThis = new THREE.SpotLight(0xffffff);
lightThis.castShadow = true; // default false

//Set up shadow properties for the light
lightThis.shadow.mapSize.width = 512; // default
lightThis.shadow.mapSize.height = 512; // default
lightThis.shadow.camera.near = 0.5; // default
lightThis.shadow.camera.far = 500; // default
lightThis.shadow.focus = 1; // default

lightThis.position.x = -20;
lightThis.position.y = 200;
lightThis.position.z = 50;
lightThis.intensity = 0.7; // initially 1.0
lightThis.penumbra = 0.50;
lightThis.angle = Math.PI/6;
scene.add(lightThis);
lightThis.target.position.x = 0;
lightThis.target.position.y = -50;
lightThis.target.position.z = 0;
scene.add(lightThis.target);

//Create a helper for the shadow camera (optional)
//const helper = new THREE.CameraHelper( lightThis.shadow.camera );
//scene.add( helper );


function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}

var iFrame = 0;
var ratio = 20;
function animate() 
{
    requestAnimationFrame(animate);

    iFrame ++;
    frmOffset =
    iFrame%(flagGeom.parameters.width*ratio
    );
    if (plane!=null) {
      wave(flagGeom, 2, 3,
      frmOffset/ratio);
      }
      
    
    controls.update();


    renderer.render(scene, camera);

}
animate();

