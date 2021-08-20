import { Typography } from '@material-ui/core'
import React from 'react'
import './Profile.css'
import logo from '../../assets/images/4.JPG';
import CustomTimeline, {CustomTimelineSeparator} from '../Timeline/Timeline'
import resumeData from '../../utils/resumeData';
import { PersonOutlined } from '@material-ui/icons';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
// import { Typography } from '@material-ui/core';
import CustomButton from '../Button/Button'
import GetAppIcon from '@material-ui/icons/GetApp';

const CustomTimelineItem = ({title,text,link})=>(
<TimelineItem>
    <CustomTimelineSeparator/>
    <TimelineContent className='timeline_content'>
        {link ? (<Typography className='timelineItem_text'>
            <span>{title}:</span>{" "}
            <a href={link} target='_blank'>
                {text}
                </a>
                </Typography>
                ) : (
            <Typography className='timelineItem_text'>
                <span>{title}: </span>{text}
                </Typography>
        )}

    </TimelineContent>   
</TimelineItem>
)

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
        <Typography className='name'>{resumeData.name}</Typography>
        <Typography className='title'>{resumeData.title}</Typography>
            </div>
        <figure className='profile_image'>
            <img src={logo} alt=''/>
        </figure>
        <div className='profile_information'>
            <CustomTimeline icon={<PersonOutlined/>}>
                <CustomTimelineItem title='Name' text={resumeData.name}/>
                <CustomTimelineItem title='Title' text={resumeData.title}/>
                <CustomTimelineItem title='Email' text={resumeData.email}/>
                {/* {Object.keys(resumeData.socials).map((key) => (
                    <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}/>
                ))} */}
                </CustomTimeline>
                <a  href='https://drive.google.com/file/d/1art7k4kgdRARuB6d40nY9LV4lMpAankc/view?usp=sharing' target='_blank'>
                <div className='button_container'>
            <CustomButton text='Download CV' icon={<GetAppIcon/>} />
                </div></a>
            
        </div>
        </div>
    )
}

export default Profile
