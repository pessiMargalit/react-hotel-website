import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { LicenseInfo } from '@mui/x-license-pro';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
LicenseInfo.setLicenseKey('YOUR_LICENSE_KEY');
export default function Date() {
  const [value, setValue] = React.useState([null, null]);
  const [show, setShow] = useState(false);

  const handeClose = () => setShow(false);

  const handeShow = () => setShow(true);



  return (<>
  <i class="bi bi-calendar-event fa-sm" onClick={handeShow}></i>
  <Modal id="modal" show={show} onHide={handeClose}  style={{backgroundColor:"#978471",marginTop:"50vh",height:"10vh",width:'30vw',marginLeft:"37.01vw"}}>
      <div>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          localeText={{ start: 'Check-in', end: 'Check-out' }}
        >
          <DateRangePicker
            value={value} 
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box  sx={{ mx: 2 }}> to </Box>
                <TextField  {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
      </div>
    </Modal>
  </>
  );
}