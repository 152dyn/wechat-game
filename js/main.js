import BackGround from './runtime/background'
let ctx   = canvas.getContext('2d');

/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    // 维护当前requestAnimationFrame的id
    this.restart()
  }

  restart() {
	  this.bg = new BackGround(ctx)
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
