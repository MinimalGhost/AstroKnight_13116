#pragma strict

var rb : Rigidbody;
var moveDirection : Vector2;
public var playerSpeed = 1f;
public var onPlanet = true;

function Start() {
	rb = GetComponent.<Rigidbody>();
}


function FixedUpdate () {
		rb.MovePosition(transform.position + transform.TransformDirection (moveDirection) * playerSpeed * Time.deltaTime);
}

function Update () {
	moveDirection = new Vector2 (Input.GetAxis ("Horizontal"), Input.GetAxis ("Vertical")).normalized;
}