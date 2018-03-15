/*
A、名称：中位值滤波法
B、方法：
    连续采样N次（N取奇数），把N次采样值按大小排列，
    取中间值为本次有效值。
C、优点：
    能有效克服因偶然因素引起的波动干扰；
    对温度、液位的变化缓慢的被测参数有良好的滤波效果。
D、缺点：
    对流量、速度等快速变化的参数不宜。
*/

function MedianFilter() {
    this.filtering = function (values) {
        var _len = values.length;

        if (_len % 2 == 0) throw '传入的数组长度必须是奇数';

        var _temp;
        for (var j = 0; j < _len - 1; j++) {
            for (var i = 0; i < _len - 1 - j; i++) {
                if (values[i] > values[i + 1]) {
                    _temp = values[i];
                    values[i] = values[i + 1];
                    values[i + 1] = _temp;
                }
            }
        }

        return values[(_len - 1) / 2];
    };
}

export {MedianFilter};