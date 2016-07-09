#pragma strict

public var turnSpeed : float = 100f;
var anim : Animator;
var stateIdle 	= 0;
var stateWalk 	= 1;
var stateJump 	= 2;
var stateLaunch = 3;
var stateTurn 	= 4;

var currentAnimState = stateIdle;

function Start() {
	anim = GameObject.Find("Astroknight_animations").GetComponent.<Animator>();
}

function Update () {
//    if(Input.GetKey(KeyCode.UpArrow))
//        transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
//    
//    if(Input.GetKey(KeyCode.DownArrow))
//        transform.Translate(-Vector3.forward * moveSpeed * Time.deltaTime);
    
    if(Input.GetKey(KeyCode.RightArrow))
        transform.Rotate(Vector3.forward, -turnSpeed * Time.deltaTime);
    
    if(Input.GetKey(KeyCode.LeftArrow))
        transform.Rotate(Vector3.forward, turnSpeed * Time.deltaTime);
}