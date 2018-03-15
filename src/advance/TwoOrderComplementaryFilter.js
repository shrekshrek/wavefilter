/*
名称：二阶互补滤波
*/

function TwoOrderComplementaryFilter(ratio) {
    this.ratio = ratio || 10;
    this.angle = 0;

    var x1 = 0, y1 = 0, x2 = 0;
    this.filtering = function (gyr, acc, dt) {
        x1 = (acc - this.angle) * this.ratio * this.ratio;
        y1 = x1 * dt + y1;
        x2 = y1 + (acc - this.angle) * this.ratio * 2 + gyr;
        this.angle += x2 * dt;

        return this.angle;
    };
}


export {TwoOrderComplementaryFilter};
