using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Background : MonoBehaviour 
{

	//スクロールするスピード
	public float speed = 0.1f;

	void Update () 
	{
		transform.Translate (0, speed, 0);
		if (transform.position.y < -11.0f) {
			transform.position = new Vector2 (0, 12.5f);
		}

	}
}
