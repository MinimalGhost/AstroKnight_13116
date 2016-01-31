#pragma strict

//test variables to set player rotation to parent planet
//public var theParent : Transform;
//public var theChild : Transform;

var rotator : Transform;
var player : Transform;

function Start () {
    //test script to set player rotation to parent planet
//     theChild.rotation = theParent.rotation;
//     theChild.rotation = Quaternion.identity;
}

//function Update () {
//    if(grounded == 1) {
//        //Makes the GameObject "newParent" the parent of the GameObject "player".
//        theChild.transform.parent = theParent.transform;
//    } else {
//        theChild.rotation = Quaternion.identity;
//    }
//}
  
 function OnTriggerEnter( other : Collider){
//     if(collider.tag == "Trig"){
//     	
//         Debug.Log("Parented");
//          player.transform.parent = rotator.transform;
//     }
		var pop = other.gameObject.GetComponent(myBody);
        if( pop ){
//        	Debug.Log("Parented");
        	player.transform.parent = rotator.transform;
//            Debug.Log("Gravity Enabled");
        }
 }
  
 function OnTriggerExit( other : Collider){
//     if(collider.tag == "Trig"){
//         Debug.Log("Un-Parented");
//         var pop = other.gameObject.GetComponent(myBody);       
//         player.transform.parent = null;          
//     }
		var pop = other.gameObject.GetComponent(myBody);
        if( pop ){
//        	Debug.Log("Un-Parented");
            player.transform.parent = null; 
//            Debug.Log("Gravity Disabled");
        }
 }