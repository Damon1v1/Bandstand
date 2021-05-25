import React, { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import "./style.css";




const  PaneSidebar = () => {

    const [state, setState] = useState({
      isPaneOpen: false,
      isPaneOpenLeft: false,
    });

    return (
        <div>
                       
            <div style={{ marginTop: "32px" }}>
                <button onClick={() => setState({ isPaneOpenLeft: true })}>
                    User profile
                </button>
            </div>
            <SlidingPane
                closeIcon={<div>Back</div>}
                isOpen={state.isPaneOpenLeft}
                title=""
                from="left"
                width="200px"
                onRequestClose={() => setState({ isPaneOpenLeft: false })}
                >
                <div>
                    <Image className="Image" src="coco1.jpg" width={150} height={150} roundedCircle/>

                    <div className="name"><strong>Name of User</strong></div><br />
                    <div>
                        <Link to="#">
                            <button type="submit" className="btn3 btn-block">Profile</button>
                        </Link> <br />
                        <Link to="#">
                            <button type="submit" className="btn3 btn-block">Settings</button>
                        </Link>
                    </div><br />
                    <div>
                        <Link to="/">
                            <button type="submit" className="btn3 btn-block ">Logout</button>
                        </Link>
                    </div>
                </div>
            </SlidingPane>
                
        </div>
    )
};

export default PaneSidebar;
     





 