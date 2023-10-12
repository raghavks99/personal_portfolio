import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GitHub } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import '../Styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <LinkedInIcon onClick = {() => {
          window.open("https://www.linkedin.com/in/karthikeyan-raghav-6450601a0/", '_blank')
        }}/>
        <GitHub onClick = {() => {
          window.open("https://github.com/raghavks99", '_blank')
        }}/>
        <WhatsAppIcon onClick = {() => {
          window.open("https://api.whatsapp.com/send?phone=916203267074", '_blank')
        }}/>
        <MailIcon onClick = {() => {
          window.open("mailto:raghavks99@gmail.com", '_blank')
        }}/>
        <p>&copy; 2023</p>
      </div>
    </div>
  )
}

export default Footer
