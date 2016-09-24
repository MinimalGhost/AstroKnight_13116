#pragma strict

var peepleHit : int;
var nextLevel = 2;

var targetObj: Transform; // drag the object with the Clips variable here
var targetScript: myBody = targetObj.GetComponent(myBody);



function Start () {

}


function onTriggerEnter(c : Collider) {
	if( c.gameObject.layer == 12) {
		targetScript.fancyFatCollected ++;
   		print("fancyFatCollected="+targetScript.fancyFatCollected);

	}
}

function OnTriggerEnter (c : Collider) {
    if( c.gameObject.layer == 11 ) {
        peepleHit++;
    }
    
    if(peepleHit == 1){
		Debug.Log("CHAMPION OF THE PEEPLE");
//		yield WaitForSeconds(0.5);  // or however long you want it to wait
		Application.LoadLevel(nextLevel);
		nextLevel++;
	}
}