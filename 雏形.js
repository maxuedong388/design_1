//创建一个棋盘的构造函数
function Mine(tr, td, mineNum, count) {
    this.tr = tr;//棋盘行数
    this.td = td;//棋盘列数
    this.mineNum = mineNum;//雷的数量
    this.squares = [];//用于存储每个方块的信息
    this.tds = [];//存储每一个td的dom对象；
    this.setMine = mineNum;
    this.surplusMine = this.setMine;//存储剩余雷的数量；
    this.allRight = false;//雷是否被全部找出来
    this.parent = document.getElementById("box");//棋盘容器
    this.count = count;//存储玩家允许踩雷的次数；
    this.num = this.count;//计算玩家允许踩雷的次数；
}
//获取随机数，随机定义雷的位置
Mine.prototype.randomNum = function () {
    //生成this.tr*this.td为长度的数组
    var square = new Array(this.tr * this.td);
    var len = square.length;
    for (var i = 0; i < len; i++) {
        square[i] = i
    }
    //随机打乱数组
    square.sort(function () {
        return .5 - Math.random()
    })

    return square.splice(0, this.setMine);


}