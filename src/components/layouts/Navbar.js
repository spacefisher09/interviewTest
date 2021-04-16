import React,{useState,useEffect} from 'react';
import {Navbar,Nav} from 'react-bootstrap';


function Navbar_nbs(props) {
    const [srhStr, setsrhStr] = useState('');

    const getStr = e =>{setsrhStr(e.target.value);}

    const submitSrh = () =>{
		props.rtrnSrhStr(srhStr);
	}

	return (
		<Navbar bg="dark" variant="dark" expand="lg" className="ftco_navbar ftco-navbar-light">
			<div className="container">				
			<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="navbar-nav w-100">
						<div className="input-group">
							<input type="text" className="form-control" placeholder="請輸入搜尋商品名稱" onChange={getStr}/>
							{/* 輸入字串完需點擊搜尋按鈕才可顯示結果 */}
								<button className="btn btn-info" onClick={submitSrh}>
									<i className="fa fas fa-search text-white"></i>
								</button>
                        </div>
					</Nav>
			</Navbar.Collapse>
			</div>
		</Navbar>
	);

}


export default Navbar_nbs;