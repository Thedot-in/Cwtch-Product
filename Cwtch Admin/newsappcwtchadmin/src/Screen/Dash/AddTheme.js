
import React,{useState} from 'react'
import {Form,Col,Row,Image} from 'react-bootstrap'
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Alert from '@material-ui/lab/Alert';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listitems';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

import firebase from 'firebase'
import 'firebase/storage'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
        marginTop: theme.spacing(2),
      },
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));


var firebaseConfig = {
    apiKey: "AIzaSyBeagiCj1g8Tpaup8EtD3nwRbUBHIvAyZc",
    authDomain: "cwtch-news.firebaseapp.com",
    projectId: "cwtch-news",
    storageBucket: "cwtch-news.appspot.com",
    messagingSenderId: "350416576934",
    appId: "1:350416576934:web:4fb7e356887c4d9f0baf67",
    measurementId: "G-1RB34ZW7PP"
  };

  // Initialize Firebase

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }







export default function AddTheme() {


    const [thmeTitle, setthmeTitle] = useState('');
    const [progress, setProgress] = useState(false);
    const [showFile, setshowFile] = useState(true)
    const [themeColor, setthemeColor] = useState('');

    const [logourl, setlogourl] = useState('');


    const [logo, setlogo] = useState(null);


    const handleThemeLogo = (e) => {
        setlogo(e.target.files[0])
    }

    const handleThemeTitle = (event) => {
        setthmeTitle(event.target.value);
    }
    const handleThemeColor = (event) => {
      setthemeColor(event.target.value);
  }

    const uploadPic = (e) => {
        e.preventDefault();
        setProgress(true)
        setshowFile(false)
        let file = logo;
        var storage = firebase.storage();
        var storageRef = storage.ref();
        var uploadTask = storageRef.child(`theme/logo/${file.name}`).put(file);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) =>{
              var progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes))*100

            },(error) =>{
              throw error
            },() =>{
              // uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{
        
              uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
                setlogourl(url)
                setProgress(false)
              })
        
           }
         ) 
    }

    const onSubmitTheme = (e) => {
        e.preventDefault();    
        console.log("Here");

        if(thmeTitle.length <= 1 && !logourl){
            return(
<Alert severity="warning">Fill all fields</Alert>
            )
        }


        firebase.database().ref(`/theme/${thmeTitle}`).set(
            {
                title: thmeTitle,
                logo: logourl,
                color:themeColor
            }
        ).then(() => {
            setthmeTitle('')
            setlogourl('')
            setlogo(null)
            setthemeColor('')

    setshowFile(true)
            console.log("Done");
            return <Alert severity="success">Done</Alert>
        }).catch(err => {
            console.log(err)
        })


    }
















  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);





  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Core Theme
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
        <Link to="/">
        <ListItem button >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </Link>
        </List>
        <List>
<Link to="/addt">
<ListItem button>
<ListItemIcon>
<DashboardIcon />
</ListItemIcon>
<ListItemText primary="Add Theme" />

</ListItem>
</Link>
</List>
<List>
<Link to="/adds">
<ListItem button>
<ListItemIcon>
<DashboardIcon />
</ListItemIcon>
<ListItemText primary="Add Suggested Topics" />
</ListItem>
</Link>
</List>
<Link to="/addnews">
<List>

<ListItem button>
<ListItemIcon>
<DashboardIcon />
</ListItemIcon>
<ListItemText primary="Add News" />
</ListItem>
</List>
</Link>
<Link to="/addvnews">
<List>

<ListItem button>
<ListItemIcon>
<DashboardIcon />
</ListItemIcon>
<ListItemText primary="Add Video News" />
</ListItem>
</List>
</Link>
<Link to="/impnews">
<ListItem button>
<ListItemIcon>
<DashboardIcon />
</ListItemIcon>
<ListItemText primary="Add Imp News" />
</ListItem>
</Link>
<Link to="/addquotes">
<ListItem button>
<ListItemIcon>
<DashboardIcon />
</ListItemIcon>
<ListItemText primary="Add Quotes" />
</ListItem>
</Link>
<Link to="/addheadings">
<ListItem button>
<ListItemIcon>
<DashboardIcon />
</ListItemIcon>
<ListItemText primary="Add Headings" />
</ListItem>
</Link>
<Link to="/addsignes">
<ListItem button>
<ListItemIcon>
<DashboardIcon />
</ListItemIcon>
<ListItemText primary="Add Signes" />
</ListItem>
</Link>
<Link to="/addhoroscope">
<ListItem button>
<ListItemIcon>
<DashboardIcon />
</ListItemIcon>
<ListItemText primary="Add Horoscope" />
</ListItem>
</Link>
<Link to="/addtheday">
<ListItem button>
<ListItemIcon>
<DashboardIcon />
</ListItemIcon>
<ListItemText primary="Add Day of" />
</ListItem>
</Link>

        <Divider />
       
      </Drawer>

        <div className={classes.appBarSpacer} />

            <div className={classes.root} style={{marginTop:100}}>
                <div>
        <TextField
          id="outlined-full-width"
          label="Enter the Theme Title"
          style={{ margin: 8,marginRight:500,marginLeft:200,marginTop:50 }}
          placeholder="Theme title"
          helperText="Theme title is important"
          fullWidth
          margin="normal"
          onChange={handleThemeTitle}
          value={thmeTitle}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
         <div>
        <TextField
          id="outlined-full-width"
          label="Enter the Theme Title"
          style={{ margin: 8,marginRight:500,marginLeft:200,marginTop:50 }}
          placeholder="Color for design"
          helperText="Theme color"
          fullWidth
          margin="normal"
          onChange={handleThemeColor}
          value={themeColor}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </div>
        <div style={{marginLeft:200,marginTop:50}}>

            {showFile ? (
<div>
<Form>
  <Form.Group>
    <Form.File type="file" id="file" label="Upload the logo for Theme" onChange={handleThemeLogo}/>
  </Form.Group>
</Form>
<Button variant="contained" color="secondary" onClick={uploadPic}>
  Upload
</Button>
    </div>
            ) : (
               (progress && !showFile) ? (
                <LinearProgress />

               ) : (
                    <div>
                        <Alert severity="success">Logo upload done</Alert>
                        </div>
               )

               
            )

            }
 
        </div>

        <div style={{marginLeft:500,marginTop:60}}>
        <Button variant="contained" color="primary"  onClick={onSubmitTheme}>
  Upload
</Button>
        </div>
                    </div>
            </div>

    </div>
  );
}