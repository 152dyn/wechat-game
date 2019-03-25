const screenWidth  = window.innerWidth
const screenHeight = window.innerHeight

/**
 * 游戏背景类
 */
export default class BackGround {
  constructor(ctx) {
    this.render(ctx)
  }

  /**
   * 背景图重绘函数
   */
  render(ctx) {
	  const offScreenCanvas = wx.createCanvas()
	  const offContext = offScreenCanvas.getContext('2d')
	  offContext.fillStyle = 'white'
	  offContext.fillRect(0, 0, 100, 100)
    const screenContext = canvas.getContext('2d')
	  screenContext.drawImage(offScreenCanvas, 0, 0)
    // console.log(screenWidth, screenHeight);
    // ctx.fillStyle = '#FCC800';
    // ctx.fillRect(0, 0, screenWidth, screenHeight);
    // ctx.fill();
	  // const myCanvas = wx.createCanvas()
    // let ctx2 = myCanvas.getContext('2d');
	  // ctx.fillStyle = '#000000';
	  // ctx.fillRect(myCanvas, screenWidth, screenHeight);
	  // ctx.fill();
  }
}
