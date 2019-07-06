using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour 
{	
	Spaceship spaceship;

	IEnumerator Start()
	{
		this.spaceship = GetComponent<Spaceship> ();

		while (true)
		{
			//弾をプレイヤーと同じ位置、角度で作成
			spaceship.Shot(transform);

			//撃つたびに音お鳴らす
			GetComponent<AudioSource>().Play();

			//shotDelay秒待つ
			yield return new WaitForSeconds(spaceship.shotDelay);
		}
	}
		
	void Update () 
	{
		//左右
		float x = Input.GetAxisRaw ("Horizontal");
		//上下
		float y = Input.GetAxisRaw("Vertical");

		//移動する向きを求める
		Vector2 direction = new Vector2(x,y).normalized;

		//移動の制限
		Move(direction);
	}
		
	void Move (Vector2 direction)
	{
		//画面左下のワールド座標をビューポートから取得
		Vector2 min = Camera.main.ViewportToWorldPoint(new Vector2(0,0));

		//画面右上のワールド座標をビューポイントから取得
		Vector2 max = Camera.main.ViewportToWorldPoint(new Vector2(1,1));

		//プレイヤーの座標を取得
		Vector2 pos = transform.position;

		//移動量を加える
		pos += direction * spaceship.speed * Time.deltaTime;

		//プレイヤーの位置が画面内に収まるように制限をかける
		pos.x = Mathf.Clamp (pos.x,min.x,max.x);
		pos.y = Mathf.Clamp (pos.y, min.y, max.y);

		//制限をかけた値をプレイヤーの位置とする
		transform.position = pos;

	}

	void OnTriggerEnter2D(Collider2D col)
	{

		//レイヤー名を取得
		string layerName = LayerMask.LayerToName(col.gameObject.layer);

		//レイヤー名がBullet (Enemy)の時は弾を削除
		if (layerName == "Bullet (Enemy)") {
			//弾の削除
			Destroy (col.gameObject);
		}

		if(layerName == "Bullet (Enemy)" || layerName == "Enemy") 
		{
			//Managerコンポネートをシーンから探し出して取得し、GameOverメソッドを実行
			FindObjectOfType<Manager>().GameOver();

			//爆発アニメーション
			spaceship.Explosion();

			//プレイヤーを削除
			Destroy(gameObject);
		}
	}
}
