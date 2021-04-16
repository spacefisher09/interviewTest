import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';



function Product_item(props) {
    
    const [pdctList,setpdctList] = useState(props.DATA);

    useEffect(()=>{
        setpdctList(props.DATA);
    },[props]);

    let [itemIntro,setitemIntro] = useState(['popup','','','']);

    const items = pdctList.map(
        (arr,index) => {
            return (
                <button className="property-wrap col-12 col-md-3 col-sm-6 btn btn-link" key={index} onClick={()=>getitemIntro(["popup open",arr.picture,arr.pdct_name,arr.pdct_info])}>
                    <span className="img overflow-hidden d-flex justify-content-center align-items-start">
                        <img referrerPolicy="no-referrer" src={arr.picture} alt="" className="img-fluid" style={{ width: `90%`, maxHeight: `100%`, maxWidth: `400px` }} />
                    </span>
                    <div className="text">
                        <h3 className="font-weight-bold">{arr.pdct_name}</h3>
                    </div>
                </button>
            )
        });
    
    const getitemIntro =(intro)=>{
        setitemIntro(intro);
    };
    const closeIntro =(closepop)=>{
        setitemIntro([closepop,'','','']);
    };



    return (
        <div className="d-flex flex-wrap pdct-row" key={props.index}>
            {items}
            <div className={itemIntro[0]} onClick={()=>closeIntro('popup')}>
                <i className="fa fas fa-times position-absolute" style={{top:'1em',right:'1em'}}></i>
                <img src={itemIntro[1]} alt="預設圖片" className="img-fluid border" />
                <div>
                <h3 className="px-2 w-100 text-center mb-3">{itemIntro[2]}</h3>
                <p className="px-2 text-center">{itemIntro[3]}</p>
                </div>
            </div>
        </div>
    )
}

export default Product_item;