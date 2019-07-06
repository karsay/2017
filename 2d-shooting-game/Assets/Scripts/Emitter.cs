using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Emitter : MonoBehaviour 
{
	//waveプレハブを格納
	public GameObject[] waves;

	//現在のwave
	private int currentWave;

	//Managerコンポネート
	private Manager manager;

	IEnumerator Start()
	{
		//waveが存在しなければコルーチンを終了する
		if (waves.Length == 0) {
			yield break;
		}

		//Managerコンポーネントをシーンから探し出して取得
		manager = FindObjectOfType<Manager>();

		while (true) 
		{
			//タイトル表示中は待機
			while(manager.IsPlaying() == false)
			{
				yield return new WaitForEndOfFrame ();
			}

			//waveを作成する
			GameObject wave = (GameObject)Instantiate(waves[currentWave],transform.position,Quaternion.identity);

			//waveをEmitterの子要素に
			wave.transform.parent = transform;

			//Waveの子要素が全て削除されるまで待機する
			while (wave.transform.childCount != 0) {
				yield return new WaitForEndOfFrame ();
			}

			//waveの削除
			Destroy (wave);

			// 格納されているWaveを全て実行したらcurrentWaveを0にする
			if (waves.Length <= ++currentWave) {
				currentWave = 0;
			}

		}
	}

	void Update () {
		
	}

}
