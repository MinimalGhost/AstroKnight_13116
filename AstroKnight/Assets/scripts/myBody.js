#pragma strict

// this is the thing we're gravitationally attracted to
var attractor : myAttractor[];
var planet : playerMovement;
var powerUI : powerMax;
 
// are we touching the surface?
var grounded : int;
var attract : boolean = true; 
 
function Start () {
    GetComponent.<Rigidbody>().WakeUp();
    GetComponent.<Rigidbody>().useGravity = false;
    
}

// obviously this is crude since we might want to be able to stand on (and jump off) random objects
// should probably filter based on tag in future
function OnCollisionEnter (c : Collision) {
    if( c.gameObject.layer == 10 ){
        grounded ++;
    }
    
    if(grounded == 1){
    	GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.FreezeRotation;
		GetComponent(playerMovement).enabled = true;
		GetComponent(playerRotation).enabled = false;
		powerUI.onSurface = true;
//		Debug.Log("PLANETARY CONTROLS ENABLED");
	}
	
}
 
function OnCollisionExit (c : Collision) {
    if( c.gameObject.layer == 10 && grounded > 0 ){
        grounded --;
    }
    
    if(grounded == 0){
    	GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.None;
		GetComponent(playerMovement).enabled = false;
		GetComponent(playerRotation).enabled = true;
		powerUI.onSurface = false;
//    	Debug.Log("PLANETARY CONTROLS DISABLED");
    }
    
}

function FixedUpdate () {
 	var i = 0;
    if (attract)
    {
        for ( i=0; i < attractor.length; i++){
   
            if(attractor[i]){
                attractor[i].Attract(this);
            }
        }
    }
   
}

function OnTriggerEnter( other : Collider ) {
    if (other.tag == "food") {
        //switch arrow to peeple
        Destroy(other.gameObject);
    }
}