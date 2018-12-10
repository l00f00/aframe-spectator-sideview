import React, { Component } from 'react';
//import axios from 'axios';
// axios.get('http://127.0.0.1:8888/products/get/2160000398') 

    class SideBar extends Component {
        render() { 
            return (
            <nav className="sidebar">
                <div id="cameraleft" className="cameraleft">left camera</div>
                <div id="cameraright" className="cameraright">right camera</div>
                <div id="cameraback" className="cameraback">back camera</div>
                <div id="cameratop" className="cameratop">top camera</div>
            </nav>  );
        }
    }
export default SideBar;