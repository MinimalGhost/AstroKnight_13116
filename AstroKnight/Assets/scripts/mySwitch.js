#pragma strict

var OnEnterActive : boolean = false;
var OnEnterSetAttractor : myAttractor[];
var OnExitActive : boolean = false;
var OnExitSetAttractor : myAttractor[];
 
function OnTriggerEnter( other : Collider ) {
    if( OnEnterActive ){
        var fg = other.gameObject.GetComponent(myBody);
        if( fg ){
            fg.attractor = OnEnterSetAttractor;
//            Debug.Log("Gravity Enabled");
        }
    }
}
 
function OnTriggerExit( other : Collider ) {
    if( OnExitActive ){
        var fg = other.gameObject.GetComponent(myBody);
        if( fg ){
            fg.attractor = OnExitSetAttractor;
//            Debug.Log("Gravity Disabled");
        }
    }
}