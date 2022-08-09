import React from "react";
import "./professionals.css";
import { Link } from "react-router-dom";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";

const Professionals = ({
  id,
  title,
  image,
  price,
  rating,
  specification,
  detail,
}) => {
  return (
    <div className="professional">
      <div className="info">
        <Link to='/singleProfessional' className="title">
          <p>{title}</p>
        </Link>
        <p className="price">
          <strong>$</strong>
          <strong>{price}</strong>
          <strong>/Hr</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
        </div>
        <img src={image} alt='' />
        <button>
          <i>
            <ContactMailOutlinedIcon />
          </i>
          Contact professional
        </button>
      
    </div>
  );
};

export default Professionals;
