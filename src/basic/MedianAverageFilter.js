/*
A、名称：中位值平均滤波法（又称防脉冲干扰平均滤波法）
B、方法：
    采一组队列去掉最大值和最小值后取平均值，
    相当于“中位值滤波法”+“算术平均滤波法”。
    连续采样N个数据，去掉一个最大值和一个最小值，
    然后计算N-2个数据的算术平均值。
    N值的选取：3-14。
C、优点：
    融合了“中位值滤波法”+“算术平均滤波法”两种滤波法的优点。
    对于偶然出现的脉冲性干扰，可消除由其所引起的采样值偏差。
    对周期干扰有良好的抑制作用。
    平滑度高，适于高频振荡的系统。
D、缺点：
    计算速度较慢，和算术平均滤波法一样。
    比较浪费RAM。
*/

function MedianAverageFilter(length) {
    this.length = length || 4;
    this.values = [];

    this.filtering = function (value) {
        this.values.push(value);

        var _len = this.values.length;
        if (_len > this.length) {
            this.values.shift();
            _len = this.length;
        }

        var _sum = 0, _min = this.values[0], _max = this.values[0];
        for (var i = 0; i < _len; i++) {
            var _value = this.values[i];
            if (_value < _min) _min = _value;
            if (_value > _max) _max = _value;
            _sum += this.values[i];
        }

        if (_len > 2) {
            _sum -= _min + _max;
            return _sum / (_len - 2);
        } else {
            return _sum / _len;
        }
    };
}

export {MedianAverageFilter};

