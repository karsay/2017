﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DestroyArea : MonoBehaviour 
{
	void OnTriggerExit2D (Collider2D col)
	{
		Destroy (col.gameObject);
	}

}
