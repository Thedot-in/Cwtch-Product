
import React,{useState,useEffect} from 'react'
import {Form,Col,Row,Image} from 'react-bootstrap'
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid'
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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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







export default function AddHoroscope() {

    
    
    useEffect(() => {
     
        getCoreTheme()
        getSuggestedTopic()
        getPartners()

    }, [])

    const [partners, setpartners] = useState('');
    
    const getPartners = () => {
      firebase.database().ref('/partnership').on( 'value' , snapshot => {
        const snap = snapshot.val();
        console.log(snap);
        setpartners(Object.values(snap))
    })
    }


    const [coretheme, setcoretheme] = useState('');
    const [suggtheme, setsuggtheme] = useState('');


    const getCoreTheme = () => {
        firebase.database().ref('/signs').on( 'value' , snapshot => {
            const snap = snapshot.val();
            console.log(snap);
            setcoretheme(Object.values(snap))
        })
    }
    
    const getSuggestedTopic = () => {
        firebase.database().ref('/suggested').on( 'value' , snapshot => {
            const sugg = snapshot.val();    
            console.log(sugg);
            setsuggtheme(Object.values(sugg))
        })
    }
    const [thmeTitle, setthmeTitle] = useState('');
    const [thmeTitle1, setthmeTitle1] = useState('');

    const [progress, setProgress] = useState(false);
    const [showFile, setshowFile] = useState(true)

    const [logourl, setlogourl] = useState('');


    const [logo, setlogo] = useState(null);


    const [newsTitle, setnewsTitle] = useState('');
    const [newsContent, setnewsContent] = useState('');

    const handleThemeLogo = (e) => {
        setlogo(e.target.files[0])
    }

    const uploadPic = (e) => {
        e.preventDefault();
        setProgress(true)
        setshowFile(false)
        let file = logo;
        var storage = firebase.storage();
        var storageRef = storage.ref();
        var uploadTask = storageRef.child(`news/pic/${file.name}`).put(file);

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
        const id = uuidv4();
        firebase.database().ref(`/news/${id}`).set({
            id,
            type:'news',
            time:Date.now(),
            opnion:[],
            newsTitle: thmeTitle,
            newsDetails:thmeTitle1,
            core:age,
            category: agee,
            suggested: ageee,
            pic:logourl,
            url:url,

            polling,
            yespoll:0,
            nopoll:0,
            
            from:page,
            location:ageeo
        }).then(() => {
            setthmeTitle('')
            setthmeTitle1('')
            setlogourl('')
            setProgress(false)
            setshowFile(true)
            setAge('')
            seturl('')
            setAgee('')
            setAgeee('')
            setAgeeo('')
            setpAge('')
            setpolling('')
            setIsPolling(false)

            return <Alert severity="warning">Uploaded</Alert>
        }).catch(err => {

        })
    }


    

    const handleThemeTitle = (event) => {
        setthmeTitle(event.target.value);
    }

    const handleThemeTitle1 = (event) => {
        setthmeTitle1(event.target.value);
    }



    const [opene, setopene] = useState(false)
    const [popene, setpopene] = useState(false)

    const [oopenee, setoopenee] = useState(false)
    const [openee, setopenee] = useState(false)
    const [openeee, setopeneee] = useState(false)
    const [age, setAge] = useState('');
    const [page, setpAge] = useState('');

    const [agee, setAgee] = useState('');
    const [ageee, setAgeee] = useState('');
    const [ageeo, setAgeeo] = useState('');

    const [url, seturl] = useState('');

    const [polling, setpolling] = useState('');

    const handleChange1 = (event) => {
        setAge(event.target.value);
      };
    
      const handleClose1 = () => {
        setopene(false);
      };
        
      const phandleClose1 = () => {
        setpopene(false);
      };
      const handleChange2o = (event) => {
        setAgeeo(event.target.value);
      };
      const handleClose2o = () => {
        setoopenee(false);
      };
      const phandleChange1 = (event) => {
        setpAge(event.target.value);
      };
       
      const handleOpen2o = () => {
        setoopenee(true);
      };
      const handleURL = (e) => {
        seturl(e.target.value)
      }
      const handlePolling = (e) => {
        setpolling(e.target.value)
      }
    
      const handleOpen1 = () => {
        setopene(true);
      };
      
      const phandleOpen1 = () => {
        setpopene(true);
      };
      const handleChange2 = (event) => {
        setAgee(event.target.value);
      };
    
      const handleClose2 = () => {
        setopenee(false);
      };
    
      const handleOpen2 = () => {
        setopenee(true);
      };
      const handleChange3 = (event) => {
        setAgeee(event.target.value);
      };
    
      const handleClose3 = () => {
        setopeneee(false);
      };
    
      const handleOpen3 = () => {
        setopeneee(true);
      };

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

const [IsPolling, setIsPolling] = useState(false)

const [addHoroscpe, setaddHoroscpe] = useState([]);
const onAddHoros = () => {
  console.log(age);
  const Horos = {age,thmeTitle};
  let y = addHoroscpe;
  y.push(Horos);
  setaddHoroscpe(y);
  setAge('');
  setthmeTitle('');
}


const onSubmitHoros = (e) => {
  e.preventDefault();
  const id = uuidv4();
  firebase.database().ref(`/news/${id}`).set({
      id,
      type:'horos',
      time:Date.now(),
      horos:addHoroscpe,



  }).then(() => {
      setthmeTitle('')
      setthmeTitle1('')
      setlogourl('')
      setProgress(false)
      setshowFile(true)
      setAge('')
      seturl('')
      setAgee('')
      setAgeee('')
      setAgeeo('')
      setpAge('')
      setpolling('')
      setIsPolling(false)

      return <Alert severity="warning">Uploaded</Alert>
  }).catch(err => {

  })
}

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
            Add Horoscope
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

<ListItem button>
<ListItemIcon>
<DashboardIcon />
</ListItemIcon>
<ListItemText primary="Add Suggested Topics" />
</ListItem>
</List>
<List>

<ListItem button>
<ListItemIcon>
<DashboardIcon />
</ListItemIcon>
<ListItemText primary="Dashboard" />
</ListItem>
</List>


        <Divider />
       
      </Drawer>

        <div className={classes.appBarSpacer} />

        <div>
        <div style={{margin: 8,marginRight:500,marginLeft:200,marginTop:150,width:500}}>
                <FormControl className={classes.formControl}>
                    <div className={classes.root} component="h2">
                    Add Core Theme to the News
                    </div> 
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={opene}
          onClose={handleClose1}
          onOpen={handleOpen1}
          value={age}
          onChange={handleChange1}
        >
            {coretheme && coretheme.map((item,index) => {
                    return(
                        <MenuItem value={item}>
                        <em>{item.title}</em>
                        {/* <em>{item.logo}</em> */}
                      </MenuItem>
                    )
            })

            }
    
        </Select>

      </FormControl>
                </div>
                <div>
                <TextField
          id="outlined-full-width"
          label="Enter Today's Happening"
          style={{ margin: 5,marginRight:200,marginLeft:50,marginTop:200 }}
          placeholder="Topic"
          helperText="Enter the Sign description"
          fullWidth
          margin="normal"
          onChange={handleThemeTitle}
          value={thmeTitle}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
                </div>
        </div>
        <div style={{marginLeft:500,marginTop:60}}>
        <Button variant="contained" color="scuccess"  onClick={onAddHoros}>
  Next
</Button>
        </div>
        <div style={{marginLeft:500,marginTop:60}}>
        <Button variant="contained" color="scuccess"  onClick={onSubmitHoros}>
  Submit
</Button>
        </div>
    </div>
  );
}