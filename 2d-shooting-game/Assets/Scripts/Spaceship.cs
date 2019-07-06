using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Rigidbody2D))]
public class Spaceship : MonoBehaviour 
{
	//移動スピード
	public float speed;

	//弾を撃つ間隔
	public float shotDelay;

	//弾のprefab
	public GameObject bullet;

	//弾を撃つかどうか
	public bool canShot;

	//爆発のprefab
	public GameObject explosion;

	//アニメーターコンポーネント
	private Animator animator;

	void Start()
	{
		//アニメーターコンポーネントを取得
		animator = GetComponent<Animator>();
	}

	//機体の爆発
	public void Explosion()
	{
		Instantiate (explosion,transform.position,transform.rotation);
	}

	//弾の作成
	public void Shot(Transform origin)
	{
		Instantiate (bullet, origin.position, origin.rotation);
	}

	//アニメーターコンポーネントの取得
	public Animator GetAnimator()
	{
		return animator;
	}
}
