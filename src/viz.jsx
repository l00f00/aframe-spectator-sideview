import leftcamera from './leftCamera.js';
import 'aframe';
import aframe from 'aframe';
import {Entity, Scene} from 'aframe-react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import registerClickDrag from 'aframe-click-drag-component';
//registerClickDrag(aframe);

/*plain html normal aframe to test*/

class viz extends Component {

    render() { 
        return (

        <div className="aframecontainer">
            <div>
            </div>
           
                <a-scene embedded>
                    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
                    <a-box position="-2 2 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
                    <a-plane position="0 0 -4" rotation="-90 0 0" width="400" height="400" color="#7BC8A4"></a-plane>
                    <a-sky color="#ECECEC"></a-sky>
                    <a-camera position="1 2 1" active="true"></a-camera>
                    
                    <a-entity id="cameraleft" position="-3 2 1" ><a-camera spectator leftcamera></a-camera></a-entity>
                    
                </a-scene>
        
        </div>

        );
    }
}
 
export default viz;