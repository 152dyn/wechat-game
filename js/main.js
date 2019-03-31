import BackGround from './runtime/background'
import * as THREE from 'libs/three.js'
// import boxs from './base/box'
let ctx   = canvas.getContext('2d');
let boxs = [
    {
        boxId: 1,
        boxName: '起点',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },
    {
        boxId: 2,
        boxName: '海岸城全能店',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },
    {
        boxId: 3,
        boxName: '龙光天悦龙庭mini店',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },
    {
        boxId: 4,
        boxName: '宝安中心全能店',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },
    {
        boxId: 5,
        boxName: '高新园全能店',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },
    {
        boxId: 6,
        boxName: '威新全能店',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },
    {
        boxId: 7,
        boxName: '威新健身舱',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },
    {
        boxId: 8,
        boxName: '益田假日广场全能店',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },
    {
        boxId: 9,
        boxName: '来福士全能店',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },
    {
        boxId: 10,
        boxName: '华侨城loft店',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },
    {
        boxId: 11,
        boxName: '华侨城亲子店',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },
    {
        boxId: 12,
        boxName: '侨香店',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },
    {
        boxId: 13,
        boxName: '蛇口巨猩店',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },
    {
        boxId: 14,
        boxName: '东海普拉提店',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },
    {
        boxId: 15,
        boxName: '东海动静店',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },{
        boxId: 16,
        boxName: '上梅林全能店',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },
    {
        boxId: 17,
        boxName: '上梅林单车店',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },
    {
        boxId: 18,
        boxName: '深业上城全能店',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },
    {
        boxId: 19,
        boxName: '福民全能店',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },{
        boxId: 20,
        boxName: '华强北全能店',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },
    {
        boxId: 21,
        boxName: '华强北单词店',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },
    {
        boxId: 22,
        boxName: '燕南全能店',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },
    {
        boxId: 23,
        boxName: '燕南动静店',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },
    {
        boxId: 24,
        boxName: '圆领全能店',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },
    {
        boxId: 25,
        boxName: '1234space全能店',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    },
    {
        boxId: 26,
        boxName: '龙岗天安健身舱',
        price: 1000,
        pay: [200, 300, 500],
        leve: 0,
        boxHost: 'xxx',
        upLeve: [300, 500, 1000],
    }
]
/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    // 维护当前requestAnimationFrame的id
    this.restart()
  }

  restart() {
    // this.bg = new BackGround(ctx, boxs)
  }

  /**
   * 随着帧数变化的敌机生成逻辑
   * 帧数取模定义成生成的频率
   */
  enemyGenerate() {
  }

  // 全局碰撞检测
  collisionDetection() {
  }

  // 游戏结束后的触摸事件处理逻辑
  touchEventHandler(e) {
  }

  /**
   * canvas重绘函数
   * 每一帧重新绘制所有的需要展示的元素
   */
  render() {
  }

  // 游戏逻辑更新主函数
  update() {
  }

  // 实现游戏帧循环
  loop() {
  }
}
