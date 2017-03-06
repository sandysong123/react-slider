import React from 'react';
import ReactDOM from 'react-dom';
require('./css/slider.css');
import Slider from './components/Slider';
/*sliderObj是轮播图中传入的所有参数
* width:轮播图的宽度 ({1})
* items：轮播图所需要的图片：
*   src:图片地址({1})    href:链接地址(?)   alt:图片的alt描述 (?)   title:标题(?)
* dots：轮播图翻页(true:显示,false:隐藏，默认为false)
* arrow：左右按钮(true:显示,false:隐藏，默认为false)
* interval：轮播图的速度,单位(ms),如没有传值，默认为1000ms
* */
var sliderObj={
    width:800,
    items:[
        {
            src:require("./images/1.jpg"),
            href:"http://127.0.0.1/1.html",
            alt:"图片ALT1",
            title:"标题描述1"
        },
        {
            src:require("./images/2.jpg"),
            href:"http://127.0.0.1/2.html",
            alt:"图片ALT2",
            title:"标题描述2"
        },
        {
            src:require("./images/3.jpg"),
            href:"http://127.0.0.1/3.html",
            alt:"图片ALT3",
            title:"标题描述3"
        },
        {
            src:require("./images/4.jpg"),
            href:"http://127.0.0.1/4.html",
            alt:"图片ALT4",
            title:"标题描述4"
        }
    ],
    dots:true,
    arrow:true,
    interval:2000
};
ReactDOM.render(<Slider {...sliderObj} />,document.querySelector('#slider-box'));