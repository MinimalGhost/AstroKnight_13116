#pragma strict

 var barDisplay : float = 0;
 var pos : Vector2 = new Vector2(20,40);
 var size : Vector2 = new Vector2(60,20);
 var powerBarEmpty : Texture2D;
 var powerBarFull : Texture2D;
 
 function OnGUI()
 {
 
     // draw the background:
     GUI.BeginGroup (new Rect (pos.x, pos.y, size.x, size.y));
         GUI.Box (Rect (0,0, size.x, size.y),powerBarEmpty);
 
         // draw the filled-in part:
         GUI.BeginGroup (new Rect (0, 0, size.x * barDisplay, size.y));
             GUI.Box (Rect (0,0, size.x, size.y),powerBarFull);
         GUI.EndGroup ();
 
     GUI.EndGroup ();
 
 } 
 
 function Update()
 {
     // for this example, the bar display is linked to the current time,
     // however you would set this value based on your desired display
     // eg, the loading progress, the player's health, or whatever.
     barDisplay = Time.time * 0.05;
 }