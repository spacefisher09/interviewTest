import React, { useState, useEffect } from 'react';

import pic_1 from '../../pic/b1.jpg';
import pic_2 from '../../pic/b2.jpg';
import pic_3 from '../../pic/b3.jpg';
import pic_4 from '../../pic/b4.jpg';
import pic_5 from '../../pic/b5.jpg';
import pic_6 from '../../pic/b6.jpg';
import pic_7 from '../../pic/b7.jpg';
import pic_8 from '../../pic/b8.jpg';
import pic_9 from '../../pic/b9.jpg';
import pic_10 from '../../pic/b10.jpg';


function Banner_slider(props) {

    const [sliderList, setsliderList] = useState(
        [pic_1,pic_2,pic_3,pic_4,pic_5,pic_6,pic_7,pic_8,pic_9,pic_10]
    );

    const [count,setcount] = useState(0);
    const [pos,setpos] = useState(0);
    const [dot,setdot] = useState(false);

   useEffect(()=>{
       setpos(-count*818);       
   },[count])

    const sliderItems = sliderList.map((url,idx)=>{
        return(
            <img src={url} alt="" key={idx}/>
        )
    })
    const sliderDots = sliderList.map((url,idx)=>{
        return(
            <input type="radio" className="mr-3" onClick={()=>movePos(idx)} key={idx} name="dots"/>
        )
    })

    const moveRight=count=>{
        (count>=sliderList.length-1)?count:setcount(count+1);
    };
    const moveLeft=count=>{
        (count==0)? count:setcount(count-1);
    };
    const movePos=count=>{
        setcount(count);
        setdot(true);
    };

    return (
        <div className="slider border border-warning mb-3 p-2 mx-auto position-relative" style={{ width: '838px' }}>
            <div className="overflow-hidden" style={{ maxWidth: '818px' }}>
                <div className="d-flex" style={{marginLeft:`${pos}px`,transition:'1s margin-left'}}>
                    {sliderItems}
                </div>
            </div>
            <button className="btn btn-outline-danger rounded-circle position-absolute" style={{top:'48%',left:'-3em'}} onClick={()=>moveLeft(count)}>
                <i className="fa fas fa-arrow-left"></i>
            </button>
            <button className="btn btn-outline-danger rounded-circle position-absolute" style={{top:'48%',right:'-3em'}} onClick={()=>moveRight(count)}>
                <i className="fa fas fa-arrow-right"></i>
            </button>
            <div className="text-center">
                {sliderDots}
            </div>
        </div>
    )
}

export default Banner_slider;