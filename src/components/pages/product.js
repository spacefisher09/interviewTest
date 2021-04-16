import React, { useState, useEffect } from 'react';

import Navbar_nbs from '../layouts/Navbar'

import Product_item from './product-item';
import Banner_slider from './slider';

import DATA from '../../data.json';


function Product() {

  //product list
  let [mainList,setmainList] = useState(DATA);
  //search list
  let [srhList,setsrhList] = useState([]);
  //countdown clock 
  let [clock, setclock] = useState([1,0,0]);

  useEffect(()=>{
    let totalSec = clock[0]*60*60+clock[1]*60+clock[2];
    (totalSec !== 0)?(
      totalSec-=1,
      setTimeout(()=>{
        const hour = Math.floor(totalSec / 60 / 60);
        const min = Math.floor(totalSec / 60) - (hour*60);
        const sec = totalSec % 60 ;
        setclock([hour,min,sec])
      },1000)
    ):(clock);

  },[clock]);

  const pdct_type = ['ALL','FGN','LOC'];

  //產出勾選產品
  const get_pdct = type => {
    (type!=='ALL')? setmainList(DATA.filter(itm=> itm.pdct_type==type)):setmainList(DATA)
  };

  const getSrhStr = str =>{
    setsrhList(str!==''? DATA.filter(itm=>itm.pdct_name.includes(str)): []);
  }


  return (
    <>
      <Navbar_nbs rtrnSrhStr={getSrhStr}/>

      <section className="ftco-section" id="top">
        <div className="container tea_list">
        <Banner_slider />
          
        <div className="alert alert-danger">
          <i className="fa fas fa-stopwatch fa-lg"></i>
          <span className="ml-3 d-inline-block">{`${clock[0]}`+"時"+`${clock[1]}`+"分"+`${clock[2]}`+"秒"}</span>
        </div>
        <div className="alert alert-primary mb-5 text-center">
            {srhList.length !== 0 ?<Product_item DATA={srhList} />: `${"商品不存在"}`}
        </div>
          {/* <!-- 列表 --> */}
          <ul className="list-group position-fixed" style={{ top: '30vh', left: '1em', zIndex: '10' }}>
            {pdct_type.map((type,index) => {
              return (
                  <li key={index} className="list-group-item">
                    <button className="btn btn-link p-0" onClick={()=>get_pdct(type)}>商品分類-{type}</button>
                  </li>
              )
            })
            }
        </ul>
          <Product_item DATA={mainList} />
    
        </div>
      </section>

    </>
  )
}

export default Product;