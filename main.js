/*
程序入口

*/
// import {a,b,c,hello,add} from './src/test.js';


var React=require('react');
var ReactDOM=require('react-dom');

var Sure=require('./src/Sure.js').Sure;
var List=require('./src/List.js');
var oData=require('./src/json/list.json');
var Button=require('./src/Button');
var Wrap=require('./src/wrap.js');
var Btn = require('./src/lxy/Btn.js');
var Fbtn = require('./src/lxy/Fbtn');
var FileFload=require('./src/filefload.js');
var List = require('./src/lxy/list.js');
var Hello = require('./src/Hello.js');
var Group = require('./src/Group.js');
var ConfigDatabase=require('./src/ConfigDatabase.js');
ReactDOM.render(<div>
 <ConfigDatabase />


  </div>,document.getElementById('app'));
