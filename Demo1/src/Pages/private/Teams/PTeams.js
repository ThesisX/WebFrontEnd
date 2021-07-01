/*ผู้จัดจำ*/

import React from "react";
import { Carousel } from "antd";
import img from "./cool1.jpg";
import "./PTeams.css";

const PTeams = () => {
  return (
    <div className="content-center">
      <div className="slider-card">
        <center>
          <Carousel autoplay>
            <div>
              <h3 className="slide-text">
                อาจารย์วิทยา ศรีกุล (อาจารย์ที่ปรึกษาโปรเจคต์)
              </h3>
              <img className="slide-img" src={img} alt="test" width="430" />
            </div>
            <div>
              <h3 className="slide-text">
                อาจารย์เกตกานณ์ (อาจารย์ที่ปรึกษาโปรเจคต์)
              </h3>
              <img className="slide-img" src={img} alt="test" width="430" />
            </div>
            <div>
              <h3 className="slide-text">นายสถาพร มณีบุญ</h3>
              <img className="slide-img" src={img} alt="test" width="430" />
            </div>
            <div>
              <h3 className="slide-text">นางสาวเบญจพร กิตติวิเชียรชัย</h3>
              <img className="slide-img" src={img} alt="test" width="430" />
            </div>
          </Carousel>
        </center>
      </div>
    </div>
  );
};

export default PTeams;
