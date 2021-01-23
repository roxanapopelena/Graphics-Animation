# Graphics-Animation Project
Project developed using Three.js and WebGL to create a graphic implementations of a town's section.<br/>
Main features:<br/>
- A setup for the environment of the app: a renderer, camera, camera controls & restrictions<br/>
- A spotlight to mimic the sun (placed far away in the scene) and ambient light<br/>
- Fog and a GUI to control the near and far parameters of the fog (using dat.GUI)<br/>
- Geometries that make up the world including box geometries that create different types of buildings, hedges around some areas of the city and the 3 containers; planes to create different types of ground in different parts of the city (a general plane that makes up the roads and the rest of the environment; on top of this plane were added other segments to create different environments ), planes to create a fence around the 3 containers; a torus geometry to create an arch, a torus knot to create a statue; cylinder geometries to create the trunk of all trees; sphere geometries to create the crown of a tree and a flower bush; cone geometries to create the fir trees located in the park area.<br/>
- Implemented the flag on top of the university building by creating a plane and then using an algorithm to create the wave animation (editUV function)<br/>
-	Custom textures were applied on these geometries to give them a more realistic look and create depth within the scene<br/>
- Repeating the texture on some geometries to avoid distortion using repeatWrapping<br/>
- Some textures have bump maps to control how the lights hits the objects and give the scene a more realistic look (containers, asphalt plane, torus knot)<br/>
- The fir cones that make up the trees in the park use a special algorithm when applying the Christmas texture in order to prevent distortion of the texture and preserve the pixel ration on both top and bottom of the cone<br/>
-	Implementation of different 3D objects using an object loader<br/>
-	Use of cloning to create the same object more than 1 time (pink buildings, skyscrapers, benches, light streets, clouds)<br/>
- Use of a for loop that facilitates the placing of the fir tree cones and trucks in order to make the code clear, short and efficient <br/>
-	Function to resize the scene appropriately when resizing the browser<br/>
-	Every street light has an appropriate spot light created to give the illusion of a light bulb being lit<br/>
-	Use of scene graph and grouping to make working with multiple elements syntactically clearer<br/>
-	Optional helper functions that are commented out to help visualize the positioning of the street light’s spotlight and to visualize the main spotlight that casts shadows<br/>
<br/>
![ ](Screenshots/Untitled.png)


