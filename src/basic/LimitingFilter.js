/*
A、名称：限幅滤波法（又称程序判断滤波法）
B、方法：
    根据经验判断，确定两次采样允许的最大偏差值（设为A），
    每次检测到新值时判断：
    如果本次值与上次值之差<=A，则本次值有效，
    如果本次值与上次值之差>A，则本次值无效，放弃本次值，用上次值代替本次值。
C、优点：
    能有效克服因偶然因素引起的脉冲干扰。
D、缺点：
    无法抑制那种周期性的干扰。
    平滑度差。
*/

function LimitingFilter(limit) {
    this.limit = limit || 1;
    this.value;

    this.filtering = function (value) {
        if (this.value == undefined) this.value = value;

        if (((value - this.value) <= this.limit) && ((this.value - value) <= this.limit)) this.value = value;

        return this.value;
    };
}


export {LimitingFilter};