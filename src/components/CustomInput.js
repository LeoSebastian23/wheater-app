
import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../App.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CustomInput = ({
  label,
  value,
  onChange,
  onKeyDown,
  onButtonClick,
  modal,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <nav className="w-full flex items-center justify-between p-4 bg-slate-900 bg-opacity-80 mb-10 h-18 rounded-full max-md:flex-col">
      <div className="flex items-center max-md:mb-4">
        <div className="text-white text-3xl">
          <img
            src="/assets/climaIcono.png"
            width="40"
            height="40"
            className="inline-block align-top"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          WeatherApp
        </div>
      </div>
      <div className="flex items-center ">
        <input
          type="text"
          placeholder={label}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className="mr-2 p-2 border border-white rounded"
          style={{ marginRight: "10px" }}
        />
        <button onClick={() => { onButtonClick(); handleOpen(); }} className="buttonSearch">
          <img
            src="/assets/search.png"
            width="42"
            height="42"
            className="inline-block bg-yellow-300 rounded-lg hover:bg-yellow-100"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Se ha cambiado de ciudad.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Gracias por utilizarnos.
            </Typography>
          </Box>
        </Modal>
      </div>
    </nav>
  );
};

export default CustomInput;

