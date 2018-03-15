/*
A、名称：加权递推平均滤波法
B、方法：
    是对递推平均滤波法的改进，即不同时刻的数据加以不同的权；
    通常是，越接近现时刻的数据，权取得越大。
    给予新采样值的权系数越大，则灵敏度越高，但信号平滑度越低。
C、优点：
    适用于有较大纯滞后时间常数的对象，和采样周期较短的系统。
D、缺点：
    对于纯滞后时间常数较小、采样周期较长、变化缓慢的信号；
    不能迅速反应系统当前所受干扰的严重程度，滤波效果差。
*/

function WeightedAverageRecursiveFilter(length) {
    this.length = length || 4;
    this.values = [];

    this.filtering = function (value) {
        this.values.push(value);

        var _len = this.values.length;
        if (_len > this.length) {
            this.values.shift();
            _len = this.length;
        }

        var _sum = 0;
        var _sum2 = 0;
        for (var i = 0; i < _len; i++) {
            _sum += this.values[i] * (i + 1);
            _sum2 += i + 1;
        }

        return _sum / _sum2;
    };
}

export {WeightedAverageRecursiveFilter};
