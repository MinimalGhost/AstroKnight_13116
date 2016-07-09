#pragma strict

var rb : Rigidbody;
var anim : Animator;
var moveDirection : Vector2;
var facingRight = true;
var theScale : Vector3;
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
		var h = Input.GetAxis("Horizontal");
		rb.MovePosition(transform.position + transform.TransformDirection (moveDirection) * playerSpeed * Time.deltaTime);

		if(h > 0 && !facingRight) {
			Flip();
		}
		else if(h < 0 && facingRight) {
			Flip();
		}
	}

	function Flip () {
	    // Switch the way the player is labelled as facing
	    facingRight = !facingRight;

	    // Multiply the player's x local scale by -1
	    theScale = transform.localScale;
	    theScale.x *= -1;
	    transform.localScale = theScale;
	}

	function Update () {
		moveDirection = new Vector2 (Input.GetAxis ("Horizontal"), Input.GetAxis ("Vertical")).normalized;

		if (Input.GetKeyDown(KeyCode.Space)) {
			changeState(stateJump);
		}

		if (Input.GetKeyUp(KeyCode.Space)) {
			changeState(stateLaunch);
		}

		if (Input.GetKeyDown("right")) {
			changeState(stateWalk);
		}

		if (Input.GetKeyUp("right")) {
			changeState(stateIdle);
		}

		if (Input.GetKeyDown("left")) {
			changeState(stateWalk);
		}

		if (Input.GetKeyUp("left")) {
			changeState(stateIdle);
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

			case stateWalk:
				anim.SetInteger ("state", stateWalk);
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