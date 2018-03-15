/*
A、名称：限幅消抖滤波法
B、方法：
    相当于“限幅滤波法”+“消抖滤波法”；
    先限幅，后消抖。
C、优点：
    继承了“限幅”和“消抖”的优点；
    改进了“消抖滤波法”中的某些缺陷，避免将干扰值导入系统。
D、缺点：
    对于快速变化的参数不宜。
*/

function LimitingEliminateShakeFilter(limit, length) {
    this.limit = limit || 1;
    this.length = length || 4;
    this.count = 0;
    this.value;

    this.filtering = function (value) {
        if (this.value == undefined) this.value = value;

        if (((value - this.value) > this.limit) || ((this.value - value) > this.limit)) value = this.value;

        if (this.value != value) {
            this.count++;
            if (this.count >= this.length) {
                this.count = 0;
                this.value = value;
            }
        } else {
            this.count = 0;
        }

        return this.value;
    };
}

export {LimitingEliminateShakeFilter};
