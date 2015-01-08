require(['src/web/blend','src/web/Layer.js','src/web/LayerGroup.js'], function (blend, layer,layergroup) {
    "use strict";

    blend = blend||{};
    
    //dialogs
    blend.dialog = {};
    blend.dialog.alert = alert;

    //components
    blend.component = {};
    // blend.component.slider = slider;
    blend.Slider = slider;

	//layer
    blend.Layer = layer;
    blend.LayerGroup = layergroup;
    
    // window.Blend = blend;
    window.Blend = window.Blend || {};//初始化window的blend 对象 ， 将 blend 作为模块 绑定到 Blend.ui 上
    window.Blend.ui = blend;


    
},null,true);
