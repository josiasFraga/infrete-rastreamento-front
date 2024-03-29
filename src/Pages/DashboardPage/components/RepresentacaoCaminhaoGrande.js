
import * as React from 'react';


export default function RepresentacaoCaminhaoGrande(props) {

    const car_images = props.car_images;
    const opacity_standard = 0;

  return (
    <div style={{position: 'relative', margin: '0 auto', width: 600}}>
    <img src='/truck.png' width={600} style={{position: 'absolute', top: 20, left: 0}} />
  
    <div style={{ position: 'absolute', top: 23, left: 82 }}>
      <img src={car_images[1]} width={100} style={{ transform: 'rotate(11deg)', opacity: car_images[1] === 'car.png' || car_images[1] === 'car_disabled.png' ? opacity_standard : 1 }} />
      <span style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '4px 8px' }}>1</span>
    </div>

    <div style={{ position: 'absolute', top: 28, left: 185 }}>
      <img src={car_images[2]} width={105} style={{ transform: 'scaleX(-1)', opacity: car_images[2] === 'car.png' || car_images[2] === 'car_disabled.png' ? opacity_standard : 1 }} />
      <span style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '4px 8px' }}>2</span>
    </div>

    <div style={{ position: 'absolute', top: 30, left: 290 }}>
      <img src={car_images[3]} width={100} style={{ transform: 'rotate(1deg)', opacity: car_images[3] === 'car.png' || car_images[3] === 'car_disabled.png' ? opacity_standard : 1 }} />
      <span style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '4px 8px' }}>3</span>
    </div>

    <div style={{ position: 'absolute', top: 30, left: 390 }}>
      <img src={car_images[4]} width={100} style={{ transform: 'scaleX(-1) rotate(2deg)', opacity: car_images[4] === 'car.png' || car_images[4] === 'car_disabled.png' ? opacity_standard : 1 }} />
      <span style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '4px 8px' }}>4</span>
    </div>

    <div style={{ position: 'absolute', top: 37, left: 490 }}>
      <img src={car_images[5]} width={110} style={{ transform: 'rotate(7deg)', opacity: car_images[5] === 'car.png' || car_images[5] === 'car_disabled.png' ? opacity_standard : 1 }} />
      <span style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '4px 8px' }}>5</span>
    </div>

    <div style={{ position: 'absolute', top: 88, left: 118 }}>
      <img src={car_images[6]} width={113} style={{ transform: 'rotate(2deg)', opacity: car_images[6] === 'car.png' || car_images[6] === 'car_disabled.png' ? opacity_standard : 1 }} />
      <span style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '4px 8px' }}>6</span>
    </div>

    <div style={{ position: 'absolute', top: 74, left: 224 }}>
      <img src={car_images[8]} width={110} style={{ transform: 'rotate(6deg)', opacity: car_images[8] === 'car.png' || car_images[8] === 'car_disabled.png' ? opacity_standard : 1 }} />
      <span style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '4px 8px' }}>8</span>
    </div>

    <div style={{ position: 'absolute', top: 75, left: 355 }}>
      <img src={car_images[10]} width={110} style={{ transform: 'rotate(6deg)', opacity: car_images[10] === 'car.png' || car_images[10] === 'car_disabled.png' ? opacity_standard : 1 }} />
      <span style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '4px 8px' }}>10</span>
    </div>

    <div style={{ position: 'absolute', top: 98, left: 482 }}>
      <img src={car_images[11]} width={120} style={{ transform: 'rotate(9deg)', opacity: car_images[11] === 'car.png' || car_images[11] === 'car_disabled.png' ? opacity_standard : 1 }} />
      <span style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '4px 8px' }}>11</span>
    </div>

    <div style={{ position: 'absolute', top: 120, left: 218 }}>
      <img src={car_images[7]} width={120} style={{ transform: 'scaleX(-1)', opacity: car_images[7] === 'car.png' || car_images[7] === 'car_disabled.png' ? opacity_standard : 1 }} />
      <span style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '4px 8px' }}>7</span>
    </div>

    <div style={{ position: 'absolute', top: 120, left: 332 }}>
      <img src={car_images[9]} width={120} style={{ transform: 'scaleX(-1)', opacity: car_images[9] === 'car.png' || car_images[9] === 'car_disabled.png' ? opacity_standard : 1 }} />
      <span style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '4px 8px' }}>9</span>
    </div>

    </div>
  );
}