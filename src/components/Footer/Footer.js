import { Typography } from '@material-ui/core'
import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <Typography class_name='footer_name'>Nurhaqim</Typography>
            </div>
            <div className='footer_right'>
            <Typography class_name='footer_copyright'>
                Designed and Developed by <a href='/' target='_blank' className='footer_link'>Nurhaqim</a>
                <br/>
            </Typography>
            </div>
        </div>
    )
}

export default Footer
