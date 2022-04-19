import React from 'react'

import {ReactComponent as Cake} from '../ui/cake-svgrepo-com.svg'


const Rightbar = () => {



  return (
    <div className="rightbar rel">
      <div className="section section-b rel">
        <h2 className="title s24 fontb">
          Ақпаратты<span className="fontn"> іздеу</span>{" "}
        </h2>
        <div className="serach-box rel flex">
          <input className="qry s15 fontb" type="text" placeholder="іздеу..." />
          <button className="go cff s15 fontb">Іздеу</button>
        </div>
      </div>

      <div className="section section-b rel">
        <h2 className="title s24 fontb">
          Жаңа <span className="fontn">сабақтар </span>{" "}
        </h2>
        <div className="special-offer rel flex">
          <div className="meta">
            <h2 className="h1 s20 fontb">Алдағы айда басталады!</h2>
            <h2 className="h2 s15 fontb">12.12.2022 дейін тіркеліп үлгер</h2>
            <button className="s15 fontb">learn More</button>
          </div>
          <div className="vector">
            <img src={Cake} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar; 
