#pragma strict

var peepleHit : int;
var nextLevel = 2;

function Start () {

}

function OnTriggerEnter (c : Collider) {
    if( c.gameObject.layer == 11 ){
        peepleHit++;
    }
    
    if(peepleHit == 1){
		Debug.Log("CHAMPION OF THE PEEPLE");
//		yield WaitForSeconds(0.5);  // or however long you want it to wait
		Application.LoadLevel(nextLevel);
		nextLevel++;
	}
}