import { Card, CardActionArea, CardContent, CardMedia, Grid, Tab, Typography ,Tabs,Grow,Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core'
import React, {useState} from 'react'
import './Portfolio.css'
import resumeData from '../../utils/resumeData'

const Portfolio = () => {
    const [tabValue,setTabValue] = useState('All')
    const [projectDialog, setProjectDialog] = useState(false)

    return (
        <Grid className='section pb_45 pt_45'>
            {/* Title */}
            <Grid item className='section_title mb_20'>
            <span></span>
            <h6 className='section_title_text'>Portfolio</h6>
            </Grid>

            {/* Tabs */}
            <Grid item xs={12}>
                <Tabs value={tabValue} indicatorColor='white' className='customTabs' onChange={(event, newValue) => setTabValue(newValue)}>
                    <Tab label='All' value='All' className={tabValue == 'All' ? 'customTabs_item_active' : 'customTabs_item'}/>
                    {[...new Set(resumeData.portfolio.map(item => item.tag))].map(tag => (
                        <Tab label={tag} value={tag} className={tabValue == tag ? 'customTabs_item_active' : 'customTabs_item'}/>
                    ))}
                </Tabs>
            </Grid>
        
        {/* Projects */}
        <Grid item xs={12} >
            <Grid container spacing={3} >
                {resumeData.portfolio.map(project => (
                    <>
                    {tabValue == project.tag || tabValue == 'All' ? (<Grid item xs={12} sm={6} md={4} lg={3}>
                        <Grow in timeout={1000}>
                        <Card className='customCard custom_card' onClick={()=> setProjectDialog(project)}>
                            <CardActionArea>
                                <CardMedia className='customCard_image' image={project.image} title={project.title}/>
                                <CardContent>
                                    <Typography className='customCard_title'>{project.title}</Typography>
                                    <Typography variant='body2' className='customCard_description'>{project.description}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        </Grow>
                    </Grid>) : null}
                    </>  
                ))}
            </Grid>
        </Grid>
        <Dialog open={projectDialog} onClose={()=> setProjectDialog(false)} className='projectDialog' fullWidth
  maxWidth="sm">
            <DialogTitle onClose={()=> setProjectDialog(false)}>
              {projectDialog.title}
            </DialogTitle>
            <img src={projectDialog.image} alt=''className='projectDialog_image'/>
            <DialogContent>
                <Typography className='projectDialog_description'> {projectDialog.description}</Typography>
            </DialogContent>
            <DialogActions className='projectDialog_description'>
                {projectDialog?.links?.map(link => (
                    <a href={link.link} target='_blank' className='projectDialog_icon'>{link.icon} </a>
                ))}
            </DialogActions>
        </Dialog>
        <iframe src=""></iframe>
        </Grid>
    )
}

export default Portfolio
