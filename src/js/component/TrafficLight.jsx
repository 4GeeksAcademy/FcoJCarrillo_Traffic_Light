import React, {useState} from "react";


export const TrafficLight = () => {
    const [color,setColor] =useState('')

    return(
        <div className="container d-flex justify-content-around mb-5 pt-2">
            <div className="semaforo">
                <div id="red" className={`light btn btn-danger ${color == '#red' ? 'glow-red':''}`} 
                onClick={() =>setColor('#red')}></div>
                <div id="yellow" className={`light btn btn-warning ${color == '#yellow' ? 'glow-yellow':''}`} 
                onClick={() =>setColor('#yellow')}></div>
                <div id="green" className={`light btn btn-success ${color == '#green' ? 'glow-green':''}`} 
                onClick={() =>setColor('#green')}
                ></div>
            </div>
        </div>
    );
};