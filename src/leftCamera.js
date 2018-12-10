
const AFRAME = window.AFRAME;
var registerComponent = require('aframe/src/core/component').registerComponent;
var THREE = require('aframe/src/lib/three');
/*register left camera component */

module.exports.Component= registerComponent('leftcamera', {
  'schema': {
    canvas: {
      type: 'string',
      default: '#cameraleft;'
    },
    // desired FPS of spectator display
    fps: {
      type: 'number',
      default: '10.0'
    }
  },

  'init': function() {
    var targetEl = document.querySelector(this.data.canvas)
    this.counter = 0;
    this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( targetEl.offsetWidth, targetEl.offsetHeight );
    // creates spectator canvas
    targetEl.appendChild(this.renderer.domElement);
  },

  'tick': function(time, timeDelta) {
    var loopFPS = 1000.0 / timeDelta;
    var hmdIsXFasterThanDesiredFPS = loopFPS / this.data.fps;
    var renderEveryNthFrame = Math.round(hmdIsXFasterThanDesiredFPS);
    if(this.counter % renderEveryNthFrame === 0){
      this.render(timeDelta);
    }
    this.counter += 1;  
  },

  'render': function(){
    this.renderer.render( this.el.sceneEl.object3D , this.el.object3DMap.camera );
    console.log('====================================');
    console.log('here & queer');
    console.log('====================================');
  }
}
);