import React, { useState } from "react";


export const TrafficLight = () => {
    const [color, setColor] = useState('')
    const [showPurple, setShowPurple] = useState('d-none');

    function aleatoryColor(){
        let colors =['red','yellow','green'];
        let ramdomColor = Math.floor(Math.random()*colors.length);
        return document.getElementById(colors[ramdomColor]).click();
    }

    return (
        <div className="container d-flex flex-column align-items-center mt-5">
            <div className="semaforo">
                <div id="red" className={`light btn btn-danger ${color == '#red' ? 'glow-red' : ''}`}
                    onClick={() => setColor('#red')}></div>
                <div id="yellow" className={`light btn btn-warning ${color == '#yellow' ? 'glow-yellow' : ''}`}
                    onClick={() => setColor('#yellow')}></div>
                <div id="green" className={`light btn btn-success ${color == '#green' ? 'glow-green' : ''}`}
                    onClick={() => setColor('#green')}
                ></div>
                <div id="purple" className={`light btn btn-primary ${showPurple} ${color == '#purple' ? 'glow-purple' : ''}`}
                    onClick={() => setColor('#purple')}
                ></div>
            </div>
            <div className="btn-group mt-3 col-sm-6 col-md-6 col-xl-4" role="group" aria-label="Basic example">
                <button type="button" onClick={aleatoryColor} className="btn btn-primary">Random Light</button>
                <button type="button" onClick={() =>setShowPurple('d-block')} className="btn btn-primary">Appear new Light</button>
            </div>
        </div>
    );
};