import React from 'react'
import { Grid, Icon, Paper, Typography } from '@material-ui/core'
import './Resume.css'
import resumeData from '../../utils/resumeData'
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline'
import WorkIcon from '@material-ui/icons/Work'
import SchoolIcon from '@material-ui/icons/School'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineItem from '@material-ui/lab/TimelineItem'

const Resume = () => {
    return (
        
        <>
        {/* About Me */}
        <Grid container className='section pb_45'>
            <Grid item className='section_title mb_30'>
            <span></span>
            <h6 className='section_title_text'>About Me</h6>
            </Grid>
            <Grid item  xs={12}>
            <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
            </Grid>
        </Grid>
        {/* Education */}
        <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
            <span></span>
            <h6 className='section_title_text'>Resume</h6>
            </Grid>
        <Grid item xs={12}>
            <Grid container className='resume_timeline'>
                {/* Experiences */}
                <Grid item sm={12} md={6}>
                    <CustomTimeline title='Work Experience' icon={<WorkIcon/>}>
                        {resumeData.experiences.map((experience) => (
                            <TimelineItem>
                                <CustomTimelineSeparator/>
                                <TimelineContent className='resume_content'>
                                    <Typography className='timeline_title'>{experience.title}</Typography>
                                    <Typography className='timeline_date' variant="caption">{experience.date}</Typography>
                                    <Typography className='timeline_description' variant="body2">{experience.description}</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </CustomTimeline>
                </Grid>
                {/* Education*/}
                <Grid item sm={12} md={6}>
                    <CustomTimeline title='Education' icon={<SchoolIcon/>}>
                        {resumeData.educations.map((education) => (
                            <TimelineItem>
                                <CustomTimelineSeparator/>
                                <TimelineContent className='resume_content'>
                                    <Typography className='timeline_title'>{education.title}</Typography>
                                    <Typography className='timeline_date' variant="caption">{education.date}</Typography>
                                    {education.description.map(element => (
                        <Typography variant='body2' className='timeline_description'>
                            {element}
                        </Typography>
                    ))}
                                    {/* <Typography className='timeline_description' variant="body2">{education.description}</Typography> */}
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </CustomTimeline>
                </Grid>
            </Grid>
        </Grid>
        </Grid>
        {/* Services */}
        <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
            <span></span>
            <h6 className='section_title_text'>Services</h6>
            </Grid>
        <Grid item xs={12}>
            <Grid container spacing={3} justify='space-around'>
                {resumeData.services.map(service => (
                    <Grid item xs={12} sm={6} md={3}>
                        <div className='service'>
                            <Icon className='service_icon'>{service.icon}</Icon>
                            <Typography className='service_title' variant='h6'>{service.title}</Typography>
                            <Typography className='service_description' variant='body2'>{service.description}</Typography>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Grid>
        </Grid>
        {/* Skills */}
        <Grid item className='section_title mb_30'>
            <span></span>
            <h6 className='section_title_text'>Skills</h6>
            </Grid>
        <Grid container spacing={4} justify='space-between' className='section pb_45'>
        
        {resumeData.skills.map(skill => (
            <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className='skill'>
                    <Typography variant='h6' className='skill_title'>
                {skill.title}
                    </Typography>
                    {skill.description.map(element => (
                        <Typography variant='body2' className='skill_description'>
                            <TimelineDot variant={'outlined'} className='timeline_dot'/>{element}
                        </Typography>
                    ))}
                </Paper>
            </Grid>
        ))}
        </Grid>
        </>
        
    )
}

export default Resume
