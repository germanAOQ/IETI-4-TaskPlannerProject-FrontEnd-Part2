import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(3),
    minWidth: 120,
  },
}));

const lista = [];

function NewTask() {
  const classes = useStyles();
  const [description, setDescription] = useState(0);
  const [responsable, setResponsable] = useState(0);
  const [status, setStatus] = React.useState("");
  const [fecha, setFecha] = React.useState("");
  const [open, setOpen] = React.useState(false);
  
  const [elementos, setElementos] = React.useState([]);
	
  const historia = useHistory();

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  function handleTextChange(e) {
    setDescription(e.target.value);
  }

  function handleResponsableChange(e) {
    setResponsable(e.target.value);
  }

  function handleDateChange(e) {
    setFecha(e.target.value);
  }
  
  function handleListChange(e) {
	  lista.push({descripcion:description, respons:responsable, stat:status, fech:fecha	})
	  historia.push({
		pathname: "/inicio",
		state : { detail: lista }
	  });
	  
  }

  return (
    <Container maxWidth="sm">
      <div>
        <h1 style={{ fontSize: "100px" }}>New Task</h1>
        <div>
          <Grid
            container
            direction="column"
            justify="space-evenly"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12}>
              <TextField
                required
                id="standard-required"
                style={{ margin: 8 }}
                placeholder="Description"
                onChange={handleTextChange}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="standard-required"
                style={{ margin: 8 }}
                placeholder="Responsable"
                onChange={handleResponsableChange}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">
                Status
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={status}
                onChange={handleStatusChange}
              >
                <MenuItem value={"Ready"}>Ready</MenuItem>
                <MenuItem value={"In Progress"}>In Progress</MenuItem>
                <MenuItem value={"Done"}>Done</MenuItem>
              </Select>
            </FormControl>
            <Grid item xs={12}>
              <TextField
                id="date"
                label="Due date"
                type="date"
                className={classes.textField}
                onChange={handleDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
			<Grid	
								container
								direction="column"
								justify="flex-end"
								alignItems="flex-end">
								<Fab color="primary" aria-label="add" className="useStyles().fab" onClick={handleListChange}>
								  <CheckCircleIcon />
								</Fab>
							</Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}

export default NewTask;
