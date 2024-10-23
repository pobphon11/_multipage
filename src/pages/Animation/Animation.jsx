import React, { useState, useEffect } from 'react';
import './Animation.css'; // Importing the CSS file

function Animation() {
  const [running, setRunning] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('/img/nonepic.png');
  
  const fieldWidth = 700;  // ความกว้างของฟิลด์
  const fieldHeight = 500; // ความสูงของฟิลด์
  const ballDiameter = 100; // ขนาดของลูกบอล
  const vx = 5; // ความเร็วแนวนอน
  const vy = 5; // ความเร็วแนวตั้ง
  const [goRight, setGoRight] = useState(true); // ทิศทาง X
  const [goDown, setGoDown] = useState(true); // ทิศทาง Y
  
  useEffect(() => {
    const calculate = () => {
      // logic to move the ball in X direction
      setX((prevX) => {
        if (goRight) {
          if (prevX >= fieldWidth - ballDiameter) {
            setGoRight(false);
            setRotation((prevRotation) => prevRotation + 360);
            return fieldWidth - ballDiameter; // หยุดที่ขอบขวา
          }
          return prevX + vx;
        } else {
          if (prevX <= 0) {
            setGoRight(true);
            setRotation((prevRotation) => prevRotation + 360);
            return 0; // หยุดที่ขอบซ้าย
          }
          return prevX - vx;
        }
      });

      // logic to move the ball in Y direction
      setY((prevY) => {
        if (goDown) {
          if (prevY >= fieldHeight - ballDiameter) {
            setGoDown(false);
            setRotation((prevRotation) => prevRotation + 360);
            return fieldHeight - ballDiameter; // หยุดที่ขอบล่าง
          }
          return prevY + vy;
        } else {
          if (prevY <= 0) {
            setGoDown(true);
            setRotation((prevRotation) => prevRotation + 360);
            return 0; // หยุดที่ขอบบน
          }
          return prevY - vy;
        }
      });
    };

    if (running) {
      const interval = setInterval(calculate, 25);
      return () => clearInterval(interval);
    }
  }, [running, goRight, goDown]);

  const handleRunClick = () => setRunning(!running);
  
  return (
    <div id="container">
      <div id="field" style={{ width: `${fieldWidth}px`, height: `${fieldHeight}px`, position: 'relative' }}>
        <div
          id="ball"
          style={{
            left: `${x}px`,
            top: `${y}px`,
            transform: `rotate(${rotation}deg)`,
            backgroundImage: `url(${backgroundImage})`,
            width: `${ballDiameter}px`, // ขนาดลูกบอล
            height: `${ballDiameter}px`, // ขนาดลูกบอล
            position: 'absolute', // ตั้งค่าเป็น absolute เพื่อจัดตำแหน่งภายในฟิลด์
          }}
        ></div>
      </div>
      <div id="control">
        <button className={`btn ${running ? 'btn-danger' : 'btn-success'}`} onClick={handleRunClick}>
          <i className="bi bi-play">
            <span>{running ? 'Stop' : 'Run'}</span>
          </i>
        </button>
        <button className="btn btn-primary" onClick={() => setBackgroundImage('/img/nonepic.png')}>NONE</button>
        <button className="btn btn-primary" onClick={() => setBackgroundImage('/img/ดาวน์โหลด.jfif')}>BASKETBALL</button>
        <button className="btn btn-primary" onClick={() => setBackgroundImage('./img/football.webp')}>FOOTBALL</button>
        <button className="btn btn-primary" onClick={() => setBackgroundImage('./img/volley.png')}>VOLLEYBALL</button>
        <button className="btn btn-primary" onClick={() => setBackgroundImage('./img/stdempimg.jpeg')}>HUMAN</button>
        <button className="btn btn-primary" onClick={() => setBackgroundImage('./img/images.jpeg')}>CARTOON</button>
      </div>
    </div>
  );
}

export default Animation;
