 var cameraTarget : GameObject;
 var player : GameObject;
 
 var smoothTime : float = 0.1;
 var cameraFollowX : boolean = true;
 var cameraFollowY : boolean = true;
 var cameraFollowHeight : boolean = false;
 var cameraHeight : float = 2.5;
 var velocity : Vector2;
 private var thisTransform : Transform;
 
 function Start ()
 {
 thisTransform = transform;
 }
 
 function Update () 
 {
 
 if (cameraFollowX)
 {
 thisTransform.position.x = Mathf.SmoothDamp (thisTransform.position.x, cameraTarget.transform.position.x, velocity.x, smoothTime);
 }
 
 if (cameraFollowY)
 {
 thisTransform.position.y = Mathf.SmoothDamp (thisTransform.position.y, cameraTarget.transform.position.y, velocity.y, smoothTime);
 }
 
 if (!cameraFollowX && cameraFollowHeight)
 {
 GetComponent.<Camera>().transform.position.y = cameraHeight;
 }
 
 }