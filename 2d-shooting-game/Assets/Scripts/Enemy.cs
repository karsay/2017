using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy : MonoBehaviour 
{
	//ヒットポイント
	public int hp = 1;

	//SpaceShipコンポーネント
	Spaceship spaceship;

	// Use this for initialization
	IEnumerator Start () 
	{
		spaceship = GetComponent<Spaceship> ();

		//ローカル座標のY軸のマイナス方向に移動する
		Move(transform.up * -1);

		//canShotがfalseの場合、ここでコルーチン終了
		if (spaceship.canShot == false) 
		{
			yield break;
		}

		while (true) 
		{
			//子要素を全て取得する
			for (int i = 0; i < transform.childCount; i++) {
				Transform shotPosition = transform.GetChild (i);

				spaceship.Shot (shotPosition);
			}

			//shotDelay秒待つ
			yield return new WaitForSeconds (spaceship.shotDelay);
		}
	}

	//機体の移動
	public void Move (Vector2 direction)
	{
		GetComponent<Rigidbody2D> ().velocity = direction * spaceship.speed;
	}

	void OnTriggerEnter2D(Collider2D col)
	{
		//レイヤー名を取得
		string layerName = LayerMask.LayerToName(col.gameObject.layer);

		//レイヤー名がBullet(player)以外の時は何も行わない
		if(layerName != "Bullet (Player)") return;

		//PlayerBulletのTransfromを取得
		Transform playerBulletTransform = col.transform.parent;

		//Bulletコンポーネントを取得
		Bullet bullet = playerBulletTransform.GetComponent<Bullet>();

		//hpを減らす
		hp = hp - bullet.power;

		//弾の削除
		Destroy(col.gameObject);

		//ヒットポイントが0以下の時
		if(hp <= 0)
		{
			//爆発
			spaceship.Explosion();

			//エネミーの削除
			Destroy(gameObject);

		} else {

			spaceship.GetAnimator ().SetTrigger ("Damage");

		}
			
	}
}
