#pragma strict

// Set to true for mono-directional gravity
var useLocalUpVector : boolean = false;
 
// Force applied along gravity up-vector (negative = down)
var fauxGravity = -10.0;
 
function Attract ( body : myBody ){
    var gravityUp : Vector2;
    var localUp: Vector2;
    var localForward : Vector2;
   
    var t : Transform = body.transform;
    var r : Rigidbody = body.GetComponent.<Rigidbody>();
 
    // Figure out the body's up vector
    if(useLocalUpVector){
        gravityUp = transform.up;  
    } else {
        gravityUp = t.position - transform.position;
        gravityUp.Normalize();
    }
     
    // Accelerate the body along its up vector
    r.AddForce( gravityUp * fauxGravity * r.mass );
    r.drag = body.grounded ? 1 : 0.1;
   
    // If the object's freezerotation is set, we force the object upright
    if(r.freezeRotation){
        // Orient relative to gravity
        localUp = t.up;
        var q = Quaternion.FromToRotation(localUp, gravityUp);
        q = q * t.rotation;
        t.rotation = Quaternion.Slerp(t.rotation, q, 0.1);
        localForward = t.forward;
    }
}