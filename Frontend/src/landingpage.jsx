import { useState } from 'react';
import './App.css';
import venba from "./assets/venba_imge.svg";
import { Rating } from 'react-simple-star-rating';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const [rating, setRating] = useState(0);
  const Navigate = useNavigate()

  const handleRating = (rate) => {
    setRating(rate);
  };
  const handleSubmit=()=>{
    Navigate('/thankyou')
  };

  const onPointerEnter = () => console.log('Enter');
  const onPointerLeave = () => console.log('Leave');
  const onPointerMove = (value, index) => console.log(value, index);

  return (
    <>
      <div>
        <div className='img_container'>
          <img src={venba} alt="venba" id='image' />
        </div>
      </div>

      <div className='text-container'>
        <h3>Hi ! I'm</h3>
        <h1>I.D.Venba</h1>
        <p>Please Rate my fancy dress outfit!</p>
      </div>
      <div className='star_container'>
      <Rating
              initialValue={rating}
              onClick={handleRating}
              onPointerEnter={onPointerEnter}
              onPointerLeave={onPointerLeave}
              onPointerMove={onPointerMove}
            />
      </div>
      <div className='button_conatiner'>
        <button onClick={handleSubmit}>Submit !</button>
      </div>

    </>
  );
}
export default Landing;
