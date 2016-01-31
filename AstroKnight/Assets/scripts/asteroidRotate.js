#pragma strict

public var speed = 10f;

function Update() {
	transform.Rotate(0, 0, speed*Time.deltaTime);
	}