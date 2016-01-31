#pragma strict

var hazardHit : int;

function Start () {

}

function OnTriggerEnter (c : Collider) {
    if( c.gameObject.layer == 10 ){
        hazardHit++;
    }
    
    if(hazardHit == 1){
		Debug.Log("THOU HATH PERISHED");
		
	}
}