/*
A、名称：限幅平均滤波法
B、方法：
    相当于“限幅滤波法”+“递推平均滤波法”；
    每次采样到的新数据先进行限幅处理，
    再送入队列进行递推平均滤波处理。
C、优点：
    融合了两种滤波法的优点；
    对于偶然出现的脉冲性干扰，可消除由于脉冲干扰所引起的采样值偏差。
D、缺点：
    比较浪费RAM。
*/

function LimitingAverageFilter(limit, length) {
    this.length = length || 4;
    this.limit = limit || 1;
    this.values = [];

    this.filtering = function (value) {
        this.values.push(value);

        var _len = this.values.length;
        if (_len > this.length) {
            this.values.shift();
            _len = this.length;
        }

        if (_len > 1 && ((this.values[_len - 1] - this.values[_len - 2]) > this.limit) || ((this.values[_len - 2] - this.values[_len - 1]) > this.limit)) this.values[_len - 1] = this.values[_len - 2];

        var _sum = 0;
        for (var i = 0; i < _len; i++) {
            _sum += this.values[i];
        }

        return _sum / _len;
    };
}

export {LimitingAverageFilter};

