#pragma strict

//power bar variables
 var barDisplay : float = 0;
 var pos : Vector2 = new Vector2(20,40);
 var size : Vector2 = new Vector2(60,20);
 var powerBarEmpty : Texture2D;
 var powerBarFull : Texture2D;
 var onSurface : boolean = true;

//set the maximum width of the bar to be used for the maths function below
var fullWidth : float = 1;
 
//create a private variable (not shown in inspector) to store the current set power
private var thePower : float;
 
//create a boolean flag we can use to stop and start the addition to power
var increasing : boolean = false;
 
//create a boolean flag we can use to stop the player shooting during the shot
var shooting : boolean = false;
 
//speed to increment the bar
var barSpeed : float = 0.05;
 
//create a slot to assign my cannonball prefab to.
var astroKnight : Rigidbody;
 
//create a blast particle slot to assign particle emitter to
//var blastPart : ParticleEmitter;
 
//create a light slot to assign a light prefab for when the blast occurs
//var cannonLight : Light;
 
//create a slot to assign an empty game object as the point to spawn from
var currentPos : Transform;
 
// create a number to multiply the force by as the value of up to 256 may not be enough to
// effectively shoot a ball forward
var shotForce : float = 1800;
 
//a prefab of some crates to shoot at
//var crates : GameObject;
 
//audio for the blast
//var cannonBlast : AudioClip;
 
//create a private variable to store currently created stack of crates
//private var currentCrates : GameObject;
 
function Start(){
 //set the power bar to zero at start
// GetComponent.<GUITexture>().pixelInset.width = 0;
 //create the target crate stack, and set currentCrates variable to represent this stack
// var someCrates : GameObject = Instantiate(crates, Vector3(10, 15, -8), transform.rotation);
// currentCrates = someCrates;
}

 function OnGUI()
 {
 
     // draw the background:
     GUI.BeginGroup (new Rect (pos.x, pos.y, size.x, size.y));
         GUI.Box (Rect (0,0, size.x, size.y),powerBarEmpty);
 
         // draw the filled-in part:
         GUI.BeginGroup (new Rect (0, 0, size.x * barDisplay, size.y));
             GUI.Box (Rect (0,0, size.x, size.y),powerBarFull);
         GUI.EndGroup ();
 
     GUI.EndGroup ();
 
 } 

 
function Update () {
	if(onSurface){
			  // for this example, the bar display is linked to the current time,
		     // however you would set this value based on your desired display
		     // eg, the loading progress, the player's health, or whatever.
			barDisplay = thePower;
		  //if we are not currently shooting and Jump key is pressed down
		  if(!shooting && Input.GetButtonDown("Jump")){
		   //play the sound set on the audio source
		//   GetComponent.<AudioSource>().Play();
		   //set the increasing part of Update() below to start adding power
		   increasing=true;
		  }
		 
		  // detect if Jump key is released and then call the Shoot function, passing current
		  // value of 'thePower' variable into its 'power' argument
		  if(!shooting && Input.GetButtonUp("Jump")){
		   //reset increasing to stop charge of the power bar
		   increasing = false;
		   //call the custom function below with current value of thePower fed to its argument
		   Shoot(thePower);
		  }
		 
		  if(increasing){
		   //add to thePower variable using Time.deltaTime multiplied by barSpeed
		   thePower += Time.deltaTime * barSpeed;
		   //stop (or 'fight') thePower from exceeding fullWidth using Clamp
		   thePower = Mathf.Clamp(thePower, 0, fullWidth);
		 
		   //set the width of the GUI Texture equal to that power value
		//   GetComponent.<GUITexture>().pixelInset.width = thePower;
		 
		   //set the pitch of the audio tone to the power var but step it down with division
		//   GetComponent.<AudioSource>().pitch = thePower/30;
		  }
	}
}
 
// start the 'Shoot' custom function, and establish a
// float argument to recieve 'thePower' when function is called
function Shoot(power : float){
 //stop shooting occuring whilst currently shooting with this boolean flag
 shooting  = true;
 
 //create a particle burst
// var pBlast : ParticleEmitter = Instantiate(blastPart, spawnPos.position, spawnPos.rotation);
 //base blast amount on power argument, and divide it to diminish power
// pBlast.maxEmission = power/4;
 
 //create a light to act as a flash for the blast, base its range &amp; intensity
 //upon the power variable and destroy it after 0.1 seconds
// var canLight : Light = Instantiate(cannonLight, spawnPos.position, spawnPos.rotation);
// canLight.intensity = power/7;
// canLight.range=power/7;
// Destroy(canLight.gameObject, 0.1);
 
 //stop the audio source on this object to cut off the tone build up to launch
// GetComponent.<AudioSource>().Stop();
 
 //play the sound of the cannon blast in a new object to avoid interfering
 //with the current sound assignment and loop setup
// AudioSource.PlayClipAtPoint(cannonBlast, transform.position);
 
 //create a ball, assign the newly created ball to a var called pFab
// var pFab : Rigidbody = Instantiate(astroKnight, currentPos.position, currentPos.rotation);
 
 //find the forward direction of the object assigned to the spawnPos variable
 var fwd : Vector2 = currentPos.up;
 astroKnight.AddForce(fwd * power * shotForce);
// Destroy(pFab.gameObject, 4);
 
 //pause before resetting everything
 yield WaitForSeconds(1);
 
 //reset the bar GUI width and our main power variable
// GetComponent.<GUITexture>().pixelInset.width = 0;
 thePower = 0;
 
 //destroy the existing crates and spawn a new stack
// Destroy(currentCrates);
// var someCrates : GameObject = Instantiate(crates, Vector3(8, 15, -11), transform.rotation);
// currentCrates = someCrates;
 
 //allow shooting to occur again
 shooting = false;
}