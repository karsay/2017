﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Bullet : MonoBehaviour 
{
	//弾のスピード
	public int speed = 10;

	//ゲームオブジェクト生成から削除するまでの時間
	public float lifeTime;

	//攻撃力
	public int power = 1;

	// Use this for initialization
	void Start () 
	{
		//ローカル座標のY座標に移動する
		GetComponent<Rigidbody2D> ().velocity = transform.up.normalized * speed;

		//lifeTime秒後に削除
		Destroy(gameObject,lifeTime);
	}
}
