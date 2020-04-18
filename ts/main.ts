// We have included PixiJs 5 JavaScript library without exports.
// We do not need the following line:
// import * as PIXI from 'pixi.js'

import { MyModuleClass } from 'my-module'

function main() {
  console.log('pixijs5-ts-dev started!');
  var myModuleInstance = new MyModuleClass();
  myModuleInstance.SomeMethod();

  let app = new PIXI.Application({width: 256, height: 256});
  let gameCanvasContainer = document.getElementById('gameCanvasContainer');
  gameCanvasContainer.appendChild(app.view);
}

main();
