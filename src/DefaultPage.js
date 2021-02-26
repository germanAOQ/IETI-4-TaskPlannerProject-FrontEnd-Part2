import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {Login} from "./Login"
import { useHistory } from "react-router-dom";
import {BrowserRouter as Router, Route, Link, useLocation} from 'react-router-dom'
import CardHeader from '@material-ui/core/CardHeader';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: "white",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
	align: "left",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  avatar: {
    backgroundColor: "red",
	alignSelf: "center",
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
}));

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function DefaultPage(props){
	const classes = useStyles();
	const historia = useHistory();
	
	const LoginView = () => (
		<Login />	
	);
	
	let query = useQuery();

	
	const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
	});
	
	
	const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
	  setState({ ...state, [anchor]: open });
	}
	
	const list = (anchor) => (
		<div
		  className={clsx(classes.list, {
			[classes.fullList]: anchor === 'top' || anchor === 'bottom',
		  })}
		  role="presentation"
		  onClick={toggleDrawer(anchor, false)}
		  onKeyDown={toggleDrawer(anchor, false)}
		>
		  <List>
			  <ListItem button>
				<ListItemAvatar>
				  <Avatar />
				</ListItemAvatar>
				<ListItemText
				  primary={query.get("username")}
				  secondary={
					<React.Fragment>
					  <Typography
						component="span"
						variant="body2"
						className={classes.inline}
						color="textPrimary"
					  >
					  {query.get("username")}@mail.escuelaing.edu.co
					  </Typography>
					</React.Fragment>
				  }
				/>
			  </ListItem>
		  </List>
		  <Divider />
		  <Divider />
		  <Divider />
		  <Divider />
		  <Divider />
		  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
		  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
		  <Router>
		  <List alignItems="bottom">
				  <div>
					  <ListItem alignItems="center" button onClick={handleLogOut}>
						<ListItemIcon><ExitToAppIcon /></ListItemIcon>
						<ListItemText primary="Logout" />
					  </ListItem>
				  </div>
			  </List>
		  </Router>
		</div>
	);

	
	function handleLogOut(){
		historia.push("/");
	}
	
	function handleClick(){
		historia.push("/newtask");
	}
	
	return (
		<React.Fragment>
				<CssBaseline />
						<div align="left">
						<Button onClick={toggleDrawer("left", true)}>Menú</Button>
							<SwipeableDrawer
							  anchor={"left"}
							  open={state["left"]}
							  onClose={toggleDrawer("left", false)}
							  onOpen={toggleDrawer("left", true)}
							>
								{list("left")}
							</SwipeableDrawer>
						</div>
					<div className={useStyles().heroContent}>
						<Container>
							<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
							  Tareas          
							</Typography>						
						</Container>
					</div>
						<Container className={useStyles().cardGrid} maxWidth="md">
							<Grid container spacing={4}>
								<Grid item key="1" xs={12} sm={6} md={4}>
									<Card className={useStyles().card} variant="outlined">
										<CardHeader
											avatar={
												<Avatar aria-label="recipe" className={useStyles().avatar}>
													R
												 </Avatar>
											}
										
										/>
										<CardContent className={useStyles().cardContent}>
											<Typography variant="h5" component="h2">
												Descripción
											</Typography>
											<Typography variant="body2" component="p">
												<br></br>
												status - dueDate
											</Typography>
												<br></br>
											<Typography variant="h5" component="h2">
												Responsable
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item key="1" xs={12} sm={6} md={4}>
									<Card className={useStyles().card} variant="outlined">
										<CardHeader
											avatar={
												<Avatar aria-label="recipe" className={useStyles().avatar}>
													R
												 </Avatar>
											}
										
										/>
										<CardContent className={useStyles().cardContent}>
											<Typography variant="h5" component="h2">
												Descripción
											</Typography>
											<Typography variant="body2" component="p">
												<br></br>
												status - dueDate
											</Typography>
												<br></br>
											<Typography variant="h5" component="h2">
												Responsable
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item key="1" xs={12} sm={6} md={4}>
									<Card className={useStyles().card} variant="outlined">
										<CardHeader
											avatar={
												<Avatar aria-label="recipe" className={useStyles().avatar}>
													R
												 </Avatar>
											}
										
										/>
										<CardContent className={useStyles().cardContent}>
											<Typography variant="h5" component="h2">
												Descripción
											</Typography>
											<Typography variant="body2" component="p">
												<br></br>
												status - dueDate
											</Typography>
												<br></br>
											<Typography variant="h5" component="h2">
												Responsable
											</Typography>
										</CardContent>
									</Card>
								</Grid>
							</Grid>
							<br></br>
							<Grid
								container
								direction="column"
								justify="flex-end"
								alignItems="flex-end">
								<Fab color="primary" aria-label="add" className="useStyles().fab" onClick={handleClick}>
								  <AddIcon />
								</Fab>
							</Grid>
						</Container>
			</React.Fragment>
	);
}

export default DefaultPage;