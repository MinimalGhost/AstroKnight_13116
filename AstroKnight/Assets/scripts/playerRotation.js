#pragma strict

public var turnSpeed : float = 100f;

function Update ()
{
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