import React, { useState } from "react";


export const TrafficLight = () => {
    const [color, setColor] = useState('')
    const [showPurple, setShowPurple] = useState('d-none');

    function aleatoryColor(){
        let colors =['red','yellow','green'];
        let ramdomColor = Math.floor(Math.random()*colors.length);
        console.log(colors[ramdomColor]);
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
            <div className="btn-group mt-3" role="group" aria-label="Basic example">
                <button type="button" onClick={aleatoryColor()} class="btn btn-primary">Random Light</button>
                <button type="button" onClick={() =>setShowPurple('d-block')} class="btn btn-primary">Appear new Light</button>
            </div>
        </div>
    );
};