particlesJS('hoge1',{
    "particles":{
    
  //--シェイプの設定----------
        "number":{
          "value":150, //シェイプの数
          "density":{
            "enable":true, //シェイプの密集度を変更するか否か
            "value_area":10000 //シェイプの密集度
          }
        },
        "color":{
          "value":"#0000ff" //シェイプの色
        },
        "opacity":{
          "value":1, //シェイプの透明度
          "random":false, //シェイプの透明度をランダムにするか否か
          "anim":{
            "enable":false, //シェイプの透明度をアニメーションさせるか否か
            "speed":10, //アニメーションのスピード
            "opacity_min":0.1, //透明度の最小値
            "sync":false //全てのシェイプを同時にアニメーションさせるか否か
          }
        },
        "size":{
          "value":2, //シェイプの大きさ
          "random":true, //シェイプの大きさをランダムにするか否か
          "anim":{
            "enable":false, //シェイプの大きさをアニメーションさせるか否か
            "speed":100, //アニメーションのスピード
            "size_min":0.1, //大きさの最小値
            "sync":false //全てのシェイプを同時にアニメーションさせるか否か
          }
        },
  //--------------------
   
  //--線の設定----------
        "line_linked":{
          "enable":true, //線を表示するか否か
          "distance":400, //線をつなぐシェイプの間隔
          "color":"#0000ff", //線の色
          "opacity":0.4, //線の透明度
          "width":5 //線の太さ
        },
  //--------------------
   
  //--動きの設定----------
        "move":{
          "speed":5, //シェイプの動くスピード
          "straight":false, //個々のシェイプの動きを止めるか否か
          "direction":"none", //エリア全体の動き(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-leftより選択)
          "out_mode":"out" //エリア外に出たシェイプの動き(out、bounceより選択)
        }
  //--------------------
   
      },
    
      "interactivity":{
        "detect_on":"canvas",
        "events":{
   
  //--マウスオーバー時の処理----------
          "onhover":{
            "enable":false, //マウスオーバーが有効か否か
            "mode":"repulse" //マウスオーバー時に発動する動き(下記modes内のgrab、repulse、bubbleより選択)
          },
  //--------------------
   
  //--クリック時の処理----------
          "onclick":{
            "enable":false, //クリックが有効か否か
            "mode":"push" //クリック時に発動する動き(下記modes内のgrab、repulse、bubble、push、removeより選択)
          },
  //--------------------
   
        },
    
        "modes":{
   
  //--カーソルとシェイプの間に線が表示される----------
          "grab":{
            "distance":400, //カーソルからの反応距離
            "line_linked":{
              "opacity":1 //線の透明度
            }
          },
  //--------------------
   

   
  //--シェイプが膨らむ----------
          "bubble":{
            "distance":400, //カーソルからの反応距離
            "size":40, //シェイプの膨らむ大きさ
            "opacity":8, //膨らむシェイプの透明度
            "duration":2, //膨らむシェイプの持続時間(onclick時のみ)
            "speed":3 //膨らむシェイプの速度(onclick時のみ)
          },

        }
      },
      "retina_detect":true, //Retina Displayを対応するか否か
      "resize":true //canvasのサイズ変更にわせて拡大縮小するか否か
    }
  );



  /*--------------------------profile画面-------------------------------------------*/
  particlesJS('hoge2',{
    "particles":{
    
  //--シェイプの設定----------
        "number":{
          "value":150, //シェイプの数
          "density":{
            "enable":true, //シェイプの密集度を変更するか否か
            "value_area":10000 //シェイプの密集度
          }
        },
        "color":{
          "value":"#88DE25" //シェイプの色
        },
        "opacity":{
          "value":1, //シェイプの透明度
          "random":false, //シェイプの透明度をランダムにするか否か
          "anim":{
            "enable":false, //シェイプの透明度をアニメーションさせるか否か
            "speed":10, //アニメーションのスピード
            "opacity_min":0.1, //透明度の最小値
            "sync":false //全てのシェイプを同時にアニメーションさせるか否か
          }
        },
        "size":{
          "value":2, //シェイプの大きさ
          "random":true, //シェイプの大きさをランダムにするか否か
          "anim":{
            "enable":false, //シェイプの大きさをアニメーションさせるか否か
            "speed":100, //アニメーションのスピード
            "size_min":0.1, //大きさの最小値
            "sync":false //全てのシェイプを同時にアニメーションさせるか否か
          }
        },
  //--------------------
   
  //--線の設定----------
        "line_linked":{
          "enable":true, //線を表示するか否か
          "distance":400, //線をつなぐシェイプの間隔
          "color":"#88DE25", //線の色
          "opacity":0.4, //線の透明度
          "width":5 //線の太さ
        },
  //--------------------
   
  //--動きの設定----------
        "move":{
          "speed":5, //シェイプの動くスピード
          "straight":false, //個々のシェイプの動きを止めるか否か
          "direction":"none", //エリア全体の動き(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-leftより選択)
          "out_mode":"out" //エリア外に出たシェイプの動き(out、bounceより選択)
        }
  //--------------------
   
      },
    
      "interactivity":{
        "detect_on":"canvas",
        "events":{
   
  //--マウスオーバー時の処理----------
          "onhover":{
            "enable":false, //マウスオーバーが有効か否か
            "mode":"repulse" //マウスオーバー時に発動する動き(下記modes内のgrab、repulse、bubbleより選択)
          },
  //--------------------
   
  //--クリック時の処理----------
          "onclick":{
            "enable":false, //クリックが有効か否か
            "mode":"push" //クリック時に発動する動き(下記modes内のgrab、repulse、bubble、push、removeより選択)
          },
  //--------------------
   
        },
    
        "modes":{
   
  //--カーソルとシェイプの間に線が表示される----------
          "grab":{
            "distance":400, //カーソルからの反応距離
            "line_linked":{
              "opacity":1 //線の透明度
            }
          },
  //--------------------
   
  //--シェイプがカーソルから逃げる----------
          // "repulse":{
          //   "distance":200 //カーソルからの反応距離
          // },
  //--------------------
   
  //--シェイプが膨らむ----------
          "bubble":{
            "distance":400, //カーソルからの反応距離
            "size":40, //シェイプの膨らむ大きさ
            "opacity":8, //膨らむシェイプの透明度
            "duration":2, //膨らむシェイプの持続時間(onclick時のみ)
            "speed":3 //膨らむシェイプの速度(onclick時のみ)
          },
  //--------------------
   
  //--シェイプが増える----------
  //         "push":{
  //           "particles_nb":4 //増えるシェイプの数
  //         },
  // //--------------------
   
  // //--シェイプが減る----------
  //         "remove":{
  //           "particles_nb":2 //減るシェイプの数
  //         }
  //--------------------
   
        }
      },
      "retina_detect":true, //Retina Displayを対応するか否か
      "resize":true //canvasのサイズ変更にわせて拡大縮小するか否か
    }
  );

  // /*--------------------------works画面-------------------------------------------*/
  particlesJS('hoge3',{
    "particles":{
    
  //--シェイプの設定----------
        "number":{
          "value":150, //シェイプの数
          "density":{
            "enable":true, //シェイプの密集度を変更するか否か
            "value_area":10000 //シェイプの密集度
          }
        },
        "color":{
          "value":"#D244C0" //シェイプの色
        },
        "opacity":{
          "value":1, //シェイプの透明度
          "random":false, //シェイプの透明度をランダムにするか否か
          "anim":{
            "enable":false, //シェイプの透明度をアニメーションさせるか否か
            "speed":10, //アニメーションのスピード
            "opacity_min":0.1, //透明度の最小値
            "sync":false //全てのシェイプを同時にアニメーションさせるか否か
          }
        },
        "size":{
          "value":2, //シェイプの大きさ
          "random":true, //シェイプの大きさをランダムにするか否か
          "anim":{
            "enable":false, //シェイプの大きさをアニメーションさせるか否か
            "speed":100, //アニメーションのスピード
            "size_min":0.1, //大きさの最小値
            "sync":false //全てのシェイプを同時にアニメーションさせるか否か
          }
        },
  //--------------------
   
  //--線の設定----------
        "line_linked":{
          "enable":true, //線を表示するか否か
          "distance":400, //線をつなぐシェイプの間隔
          "color":"#D244C0", //線の色
          "opacity":0.4, //線の透明度
          "width":5 //線の太さ
        },
  //--------------------
   
  //--動きの設定----------
        "move":{
          "speed":5, //シェイプの動くスピード
          "straight":false, //個々のシェイプの動きを止めるか否か
          "direction":"none", //エリア全体の動き(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-leftより選択)
          "out_mode":"out" //エリア外に出たシェイプの動き(out、bounceより選択)
        }
  //--------------------
   
      },
    
      "interactivity":{
        "detect_on":"canvas",
        "events":{
   
  //--マウスオーバー時の処理----------
          "onhover":{
            "enable":false, //マウスオーバーが有効か否か
            "mode":"repulse" //マウスオーバー時に発動する動き(下記modes内のgrab、repulse、bubbleより選択)
          },
  //--------------------
   
  //--クリック時の処理----------
          "onclick":{
            "enable":false, //クリックが有効か否か
            "mode":"push" //クリック時に発動する動き(下記modes内のgrab、repulse、bubble、push、removeより選択)
          },
  //--------------------
   
        },
    
        "modes":{
   
  //--カーソルとシェイプの間に線が表示される----------
          "grab":{
            "distance":400, //カーソルからの反応距離
            "line_linked":{
              "opacity":1 //線の透明度
            }
          },
  //--------------------
   
  //--シェイプが膨らむ----------
          "bubble":{
            "distance":400, //カーソルからの反応距離
            "size":40, //シェイプの膨らむ大きさ
            "opacity":8, //膨らむシェイプの透明度
            "duration":2, //膨らむシェイプの持続時間(onclick時のみ)
            "speed":3 //膨らむシェイプの速度(onclick時のみ)
          },
  //--------------------
   
        }
      },
      "retina_detect":true, //Retina Displayを対応するか否か
      "resize":true //canvasのサイズ変更にわせて拡大縮小するか否か
    }
  );

  /*--------------------------contact画面-------------------------------------------*/

  particlesJS('hoge4',{
    "particles":{
    
  //--シェイプの設定----------
        "number":{
          "value":150, //シェイプの数
          "density":{
            "enable":true, //シェイプの密集度を変更するか否か
            "value_area":10000 //シェイプの密集度
          }
        },
        "color":{
          "value":"#D7EE2A" //シェイプの色
        },
        "opacity":{
          "value":1, //シェイプの透明度
          "random":false, //シェイプの透明度をランダムにするか否か
          "anim":{
            "enable":false, //シェイプの透明度をアニメーションさせるか否か
            "speed":10, //アニメーションのスピード
            "opacity_min":0.1, //透明度の最小値
            "sync":false //全てのシェイプを同時にアニメーションさせるか否か
          }
        },
        "size":{
          "value":2, //シェイプの大きさ
          "random":true, //シェイプの大きさをランダムにするか否か
          "anim":{
            "enable":false, //シェイプの大きさをアニメーションさせるか否か
            "speed":100, //アニメーションのスピード
            "size_min":0.1, //大きさの最小値
            "sync":false //全てのシェイプを同時にアニメーションさせるか否か
          }
        },
  //--------------------
   
  //--線の設定----------
        "line_linked":{
          "enable":true, //線を表示するか否か
          "distance":400, //線をつなぐシェイプの間隔
          "color":"#D7EE2A", //線の色
          "opacity":0.4, //線の透明度
          "width":5 //線の太さ
        },
  //--------------------
   
  //--動きの設定----------
        "move":{
          "speed":5, //シェイプの動くスピード
          "straight":false, //個々のシェイプの動きを止めるか否か
          "direction":"none", //エリア全体の動き(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-leftより選択)
          "out_mode":"out" //エリア外に出たシェイプの動き(out、bounceより選択)
        }
  //--------------------
   
      },
    
      "interactivity":{
        "detect_on":"canvas",
        "events":{
   
  //--マウスオーバー時の処理----------
          "onhover":{
            "enable":false, //マウスオーバーが有効か否か
            "mode":"repulse" //マウスオーバー時に発動する動き(下記modes内のgrab、repulse、bubbleより選択)
          },
  //--------------------
   
  //--クリック時の処理----------
          "onclick":{
            "enable":false, //クリックが有効か否か
            "mode":"push" //クリック時に発動する動き(下記modes内のgrab、repulse、bubble、push、removeより選択)
          },
  //--------------------
   
        },
    
        "modes":{
   
  //--カーソルとシェイプの間に線が表示される----------
          "grab":{
            "distance":400, //カーソルからの反応距離
            "line_linked":{
              "opacity":1 //線の透明度
            }
          },
  //--------------------
   
  //--シェイプが膨らむ----------
          "bubble":{
            "distance":400, //カーソルからの反応距離
            "size":40, //シェイプの膨らむ大きさ
            "opacity":8, //膨らむシェイプの透明度
            "duration":2, //膨らむシェイプの持続時間(onclick時のみ)
            "speed":3 //膨らむシェイプの速度(onclick時のみ)
          },
  //--------------------
   
        }
      },
      "retina_detect":true, //Retina Displayを対応するか否か
      "resize":true //canvasのサイズ変更にわせて拡大縮小するか否か
    }
  );