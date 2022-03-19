import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { makeStyles } from "@mui/styles";

const loginIconButtonStyle = makeStyles({
  root: {
    color: "#332981",
    backgroundColor: "none",
    fontSize: "10px",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#968F73",
      border: "1px solid #968F73",
    },
  },
});

const SendMessages = () => {
  const URL = "https://web.whatsapp.com/send";

  const [input, setInput] = useState("");
  const [formData, setFormData] = useState({
    mobileNumber: "",
    message: "",
  });

  const { mobileNumber, message } = formData;

  const onChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // number = number.replace(/[^\w\s]/gi, '').replace(/ /g, '')

  // let url = `${URL}?phone=${number}`

  // if (message) {
  //     url += `&text=${encodeURI(message)}&app_absent=0`
  // }

  return (
    <div className='communication'>
      <div className='whatsapp-card'>
        <div className='title flex_middle'>
          <div style={{ marginRight: "0.5em" }}>
            <WhatsAppIcon />
          </div>
          <div>Send Message</div>
        </div>
        <div className='search_contact app'>
 
        </div>
        <div className='message'></div>
        <Button
          onClick={(e) => {
            // window.open(url)
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

SendMessages.propTypes = {
  number: PropTypes.string.isRequired,
  message: PropTypes.string,
};

export default SendMessages;
