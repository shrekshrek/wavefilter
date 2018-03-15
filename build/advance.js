(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.WF = {})));
}(this, (function (exports) { 'use strict';

	/*
	名称：一阶互补滤波
	    加速度计数据比较震荡，含有较多高频分量，陀螺仪积分得到角度值，但是时间长了之后会有零漂，因此需要对两者数据进行融合。相当于低通滤波器，滤去加速度计得到的角度的高频分量，同时去除陀螺仪的零漂。
	*/

	function FirstOrderComplementaryFilter(ratio) {
	    this.ratio = ratio || 0.98;
	    this.angle = 0;

	    this.filtering = function (gyr, acc, dt) {
	        this.angle = this.ratio * (this.angle + gyr * dt) + (1 - this.ratio) * acc;
	        return this.angle;
	    };
	}

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

	exports.FirstOrderComplementaryFilter = FirstOrderComplementaryFilter;
	exports.TwoOrderComplementaryFilter = TwoOrderComplementaryFilter;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
