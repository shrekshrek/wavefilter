/*
A、名称：一阶滞后滤波法
B、方法：
    取a=0-1，本次滤波结果=(1-a)*本次采样值+a*上次滤波结果。
C、优点：
    对周期性干扰具有良好的抑制作用；
    适用于波动频率较高的场合。
D、缺点：
    相位滞后，灵敏度低；
    滞后程度取决于a值大小；
    不能消除滤波频率高于采样频率1/2的干扰信号。
*/

function FirstOrderLagFilter(ratio) {
    this.ratio = ratio || 0.5;
    this.value;

    this.filtering = function (value) {
        if (this.value == undefined) this.value = value;

        this.value = value * this.ratio + this.value * (1 - this.ratio);

        return this.value;
    };
}


export {FirstOrderLagFilter};
