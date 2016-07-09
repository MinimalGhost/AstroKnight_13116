#pragma strict

var rb : Rigidbody;
var anim : Animator;
var moveDirection : Vector2;
public var playerSpeed = 1f;
public var onPlanet = true;

var stateIdle 	= 0;
var stateWalk 	= 1;
var stateJump 	= 2;
var stateLaunch = 3;
var stateTurn 	= 4;

var currentAnimState = stateIdle;

	function Start() {
		rb = GetComponent.<Rigidbody>();
		anim = GameObject.Find("Astroknight_animations").GetComponent.<Animator>();
	}


	function FixedUpdate () {
			rb.MovePosition(transform.position + transform.TransformDirection (moveDirection) * playerSpeed * Time.deltaTime);
	}

	function Update () {
		moveDirection = new Vector2 (Input.GetAxis ("Horizontal"), Input.GetAxis ("Vertical")).normalized;

		if (Input.GetKeyDown(KeyCode.Space)) {
			changeState(stateJump);

		}

		if (Input.GetKeyUp(KeyCode.Space)) {
			changeState(stateLaunch);
		}
	}

	//--------------------------------------
    // Change the players animation state
    //--------------------------------------
    function changeState(state){
 
        if (currentAnimState == state)
        return;
 
        switch (state) {
    
	        case stateIdle:
	        	anim.SetInteger ("state", stateIdle);
	        	break;

	        case stateJump:
	            anim.SetInteger ("state", stateJump);
	            break;

	        case stateLaunch:
	        	anim.SetInteger ("state", stateLaunch);
	        	break;

 			case stateTurn:
 				anim.SetInteger ("state", stateTurn);
        }
 
        currentAnimState = state;
    }