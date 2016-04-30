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
//		yield WaitForSeconds(0.5);  // or however long you want it to wait
		Application.LoadLevel(Application.loadedLevel);
	}
}