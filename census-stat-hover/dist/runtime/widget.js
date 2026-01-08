System.register(["jimu-core","jimu-arcgis","esri/core/reactiveUtils","esri/Graphic"],(function(e,t){var i={},a={},s={},l={};return{setters:[function(e){i.DataSourceComponent=e.DataSourceComponent,i.React=e.React,i.css=e.css,i.jsx=e.jsx},function(e){a.JimuMapViewComponent=e.JimuMapViewComponent},function(e){s.watch=e.watch},function(e){l.default=e.default}],execute:function(){e((()=>{var e={89:e=>{"use strict";e.exports=l},243:e=>{"use strict";e.exports=s},686:e=>{"use strict";e.exports=a},244:e=>{"use strict";e.exports=i}},t={};function r(i){var a=t[i];if(void 0!==a)return a.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,r),s.exports}r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var o={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(o),r.d(o,{__set_webpack_public_path__:()=>c,default:()=>n});var e=r(244),t=r(686),i=r(243),a=r(89),s=function(e,t,i,a){return new(i||(i=Promise))((function(s,l){function r(e){try{n(a.next(e))}catch(e){l(e)}}function o(e){try{n(a.throw(e))}catch(e){l(e)}}function n(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,o)}n((a=a.apply(e,t||[])).next())}))};const l=e.css`
  background-color: white;
  padding: 15px;
  height: 100%;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden; 

  .value-container {
    display: flex;
    align-items: baseline; 
    margin-bottom: 25px;
    margin-top: 5px;
  }

  .main-value {
    font-size: 40px; /* Increased by ~10% from 36px */
    font-weight: 700;
    color: #222;
    margin-right: 8px;
    line-height: 1;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .field-alias {
    font-size: 16px;
    color: #555;
    font-weight: 400;
  }

  .chart-container {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0; 
    margin-top: 5px;
    padding-bottom: 30px; 
    height: 50px; 
  }
  .bar {
    flex: 1;
    height: 18px; /* Increased from 15px */
    position: relative;
    opacity: 0.8;
    transition: opacity 0.2s;
    
    &:first-of-type { border-top-left-radius: 2px; border-bottom-left-radius: 2px; }
    &:last-of-type { border-top-right-radius: 2px; border-bottom-right-radius: 2px; }

    &:hover { opacity: 1; }
  }
  
  /* Shared indicator style */
  .indicator-line {
    position: absolute;
    top: 5px;
    bottom: 0px;
    height: 30px; /* Increased from 25px */
    width: 2px;
    pointer-events: none;
    transition: left 0.1s linear;
    z-index: 10;
    margin-left: -1px;
    box-shadow: 0 0 2px white;
  }

  .indicator-head {
    position: absolute;
    top: -16px; /* Adjusted for larger height */
    left: -9px; /* Center 18px width */
    width: 18px;
    height: 16px;
    filter: drop-shadow(0px 1px 1px rgba(0,0,0,0.3));
  }

  /* Hover: Solid Black Line, High Z */
  .indicator-line.hover {
    background-color: #000;
    z-index: 20;
  }

  /* Selected: Semi-transparent Black Line, Lower Z */
  .indicator-line.selected {
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }

  .indicator-line.selected .indicator-head {
    opacity: 0.6;
  }
  
  .labels-container {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    height: 20px;
    pointer-events: none;
  }
  
  .axis-label {
    position: absolute;
    font-size: 18px; /* Increased to 18px */
    color: #333;
    white-space: nowrap;
    font-weight: 500;
    top: 0;
    &.align-left { transform: translateX(0); }
    &.align-center { transform: translateX(-50%); }
    &.align-right { transform: translateX(-100%); }
  }

  .indicator-value-label {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 20px; /* Raised to clear the triangle (16px + gap) */
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0 4px;
    border-radius: 2px;
    font-size: 14px; /* Increased 15% (12px -> ~14px) */
    font-weight: bold;
    color: #000;
    white-space: nowrap;
    pointer-events: none;
    text-shadow: 0 0 2px white;
  }
`;class n extends e.React.PureComponent{constructor(t){super(t),this.highlightGraphic=null,this.dataSources={},this.onActiveViewChange=e=>{e&&(this.setState({jimuMapView:e}),this.setupVisibilityWatcher(e),this.checkActiveLayer(e))},this.onDataSourceCreated=e=>{e&&(this.dataSources[e.id]=e,this.state.jimuMapView&&!this.state.activeDataSourceId&&this.checkActiveLayer(this.state.jimuMapView))},this.setupVisibilityWatcher=e=>{this.visibilityWatchHandle&&this.visibilityWatchHandle.remove(),e.view&&e.view.map&&(this.visibilityWatchHandle=i.watch((()=>e.view.map.allLayers.filter((e=>e.visible)).map((e=>e.id)).join(",")),(()=>{this.checkActiveLayer(e)})))},this.checkActiveLayer=e=>{var t;if(!e||!e.view)return;const i=(null===(t=this.props.useDataSources)||void 0===t?void 0:t.map((e=>e.dataSourceId)))||[],a=e.view.map.allLayers;let s=null;for(const e of i){const t=this.dataSources[e];if(t&&t.layer){const i=a.find((e=>e.id===t.layer.id));if(i&&i.visible){s=e;break}}}s!==this.state.activeDataSourceId&&(this.clearHighlight(),this.setState({activeDataSourceId:s,hoverValue:null,selectedValue:null},(()=>{if(s){const t=this.dataSources[s];this.calculateStats(t),this.setupInteraction(e,t)}else this.setState({stats:null,status:"No active configured layer visible."})})))},this.clearHighlight=()=>{var e,t;this.highlightGraphic&&(null===(t=null===(e=this.state.jimuMapView)||void 0===e?void 0:e.view)||void 0===t?void 0:t.graphics)&&(this.state.jimuMapView.view.graphics.remove(this.highlightGraphic),this.highlightGraphic=null)},this.getNumericField=e=>{if(!e)return null;const t=this.props.config.layerFields;return t&&t[e.id]?t[e.id]:this.props.config.fieldName||null},this.getFieldAlias=(e,t)=>{if(!e||!t)return"";const i=e.getSchema();return i&&i.fields&&i.fields[t]&&i.fields[t].alias||t},this.calculateStats=e=>s(this,void 0,void 0,(function*(){if(!e)return;const t=this.getNumericField(e);if(t)try{const i=e.layer;let a=null;i&&i.renderer&&"class-breaks"===i.renderer.type&&(a=i.renderer.classBreakInfos);const s=yield e.query({where:"1=1",outStatistics:[{onStatisticField:t,outStatisticFieldName:"min_val",statisticType:"min"},{onStatisticField:t,outStatisticFieldName:"max_val",statisticType:"max"}]});if(!s||!s.records||0===s.records.length)return;const l=s.records[0].getData(),r=l.min_val,o=l.max_val;let n=[];if(a&&a.length>0)n=a.map((e=>({count:0,label:e.label,color:e.symbol.color?`rgba(${e.symbol.color.r}, ${e.symbol.color.g}, ${e.symbol.color.b}, ${e.symbol.color.a})`:"#ccc",minValue:e.minValue,maxValue:e.maxValue})));else{const e=(o-r)/10;for(let t=0;t<10;t++)n.push({count:0,label:"",color:"#e0e0e0",minValue:r+t*e,maxValue:r+(t+1)*e})}this.setState({stats:{min:r,max:o,avg:0,bins:n},status:""})}catch(e){console.error(e)}else this.setState({status:`No field configured for ${e.getLabel()}`})})),this.setupInteraction=(e,t)=>{if(!(null==e?void 0:e.view)||!t)return;const i=t.layer?t.layer.id:t.id,l=this.getNumericField(t);if(this.pointerListener&&this.pointerListener.remove(),this.clickListener&&this.clickListener.remove(),!l)return;const r=e=>{const t=null==e?void 0:e.graphic;if(t&&t.attributes){const e=t.attributes[l],i=isNaN(e)?"No Data":e%1!=0?e.toFixed(1):e.toString();return{val:e,label:i}}return null};this.pointerListener=e.view.on("pointer-move",(t=>s(this,void 0,void 0,(function*(){try{const a=yield e.view.hitTest(t);if(a.results.length>0){const e=a.results.find((e=>{const t=e.graphic;return t&&t.layer&&t.layer.id===i})),t=r(e);t?this.setState({hoverValue:t.val,hoverLabel:t.label}):this.setState({hoverValue:null,hoverLabel:""})}else this.setState({hoverValue:null,hoverLabel:""})}catch(e){}})))),this.clickListener=e.view.on("click",(t=>s(this,void 0,void 0,(function*(){try{this.clearHighlight();const s=yield e.view.hitTest(t);if(s.results.length>0){const t=s.results.find((e=>{const t=e.graphic;return t&&t.layer&&t.layer.id===i})),l=r(t);if(l){this.setState({selectedValue:l.val,selectedLabel:l.label});const i=t.graphic;i&&i.geometry&&(this.highlightGraphic=new a.default({geometry:i.geometry,symbol:{type:"simple-fill",color:[0,0,0,0],outline:{color:[0,0,0,255],width:2}}}),e.view.graphics.add(this.highlightGraphic))}else this.setState({selectedValue:null,selectedLabel:""})}else this.setState({selectedValue:null,selectedLabel:""})}catch(e){}}))))},this.calculateIndicatorPosition=(e,t)=>{if(!t||0===t.length)return 0;const i=t.findIndex((t=>e>=t.minValue&&e<=t.maxValue));if(-1===i)return e<t[0].minValue?0:e>t[t.length-1].maxValue?100:0;const a=t[i],s=a.maxValue-a.minValue,l=0===s?.5:(e-a.minValue)/s,r=100/t.length;return Math.min(Math.max(i*r+l*r,0),100)},this.formatLabelValue=e=>null==e?"":Math.abs(e%1)<.01?e.toFixed(0):e.toFixed(1),this.renderTriangle=()=>(0,e.jsx)("div",{className:"indicator-head"},(0,e.jsx)("svg",{width:"18",height:"16",viewBox:"0 0 18 16",style:{display:"block"}},(0,e.jsx)("path",{d:"M0 0 L18 0 L9 16 Z",fill:"black"}),(0,e.jsx)("path",{d:"M5 3 L13 3 L9 11 Z",fill:"white"}))),this.state={jimuMapView:null,activeDataSourceId:null,stats:null,hoverValue:null,hoverLabel:"Hover over map...",selectedValue:null,selectedLabel:"",status:"Loading..."}}componentWillUnmount(){this.pointerListener&&this.pointerListener.remove(),this.clickListener&&this.clickListener.remove(),this.visibilityWatchHandle&&this.visibilityWatchHandle.remove(),this.clearHighlight()}render(){var i;const{stats:a,hoverValue:s,hoverLabel:r,selectedValue:o,activeDataSourceId:n,selectedLabel:c}=this.state,h=this.props.useMapWidgetIds&&this.props.useMapWidgetIds.length>0,u=n?this.dataSources[n]:null,d=u?this.getNumericField(u):"",p=u?this.getFieldAlias(u,d):"";let m=0;a&&null!=s&&(m=this.calculateIndicatorPosition(s,a.bins));let g=0;a&&null!=o&&(g=this.calculateIndicatorPosition(o,a.bins));const v=null!=s?r:null!=o?c:"-";return(0,e.jsx)("div",{className:"widget-census-stat-hover",css:l},h&&(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:this.props.useMapWidgetIds[0],onActiveViewChange:this.onActiveViewChange}),null===(i=this.props.useDataSources)||void 0===i?void 0:i.map((t=>(0,e.jsx)(e.DataSourceComponent,{key:t.dataSourceId,useDataSource:t,onDataSourceCreated:this.onDataSourceCreated}))),u&&a?(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("div",{className:"value-container"},(0,e.jsx)("div",{className:"main-value"},v),(0,e.jsx)("div",{className:"field-alias"},p)),(0,e.jsx)("div",{className:"chart-container"},a.bins.map(((t,i)=>(0,e.jsx)("div",{key:i,className:"bar",title:`${t.label} (${t.minValue.toFixed(1)} - ${t.maxValue.toFixed(1)})`,style:{backgroundColor:t.color}}))),null!=o&&(0,e.jsx)("div",{className:"indicator-line selected",style:{left:`${g}%`}},(0,e.jsx)("div",{className:"indicator-value-label"},c),this.renderTriangle()),null!=s&&(0,e.jsx)("div",{className:"indicator-line hover",style:{left:`${m}%`}},this.renderTriangle()),(0,e.jsx)("div",{className:"labels-container"},(0,e.jsx)("span",{className:"axis-label align-left",style:{left:"0%"}},this.formatLabelValue(a.bins[0].minValue)),a.bins.map(((t,i)=>{const s=i===a.bins.length-1,l=(i+1)*(100/a.bins.length);return(0,e.jsx)("span",{key:i,className:"axis-label "+(s?"align-right":"align-center"),style:{left:`${l}%`}},this.formatLabelValue(t.maxValue))}))))):(0,e.jsx)("div",{className:"p-2 text-center text-muted",style:{fontSize:"12px"}},h?this.state.status||"Waiting for visible layer...":"\u26a0\ufe0f Select Map"))}}function c(e){r.p=e}})(),o})())}}}));