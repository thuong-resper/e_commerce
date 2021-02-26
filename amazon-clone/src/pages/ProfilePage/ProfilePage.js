import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleBackdrop from "../../components/Backdrop/Backdrop";
import SimpleAlerts from "../../components/UI/Alerts/Alerts";
import {
  getUserDetails,
  updateUserProfile,
} from "../../store/actions/userActions";

const ProfilePage = ({ location, history }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <Grid
      container
      direction="row"
      spacing={3}
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={3} className={classes.bg}>
        <Typography variant="h5" gutterBottom>
          User Profile
        </Typography>
        {message && (
          <SimpleAlerts
            severity="error"
            title="Error"
            message={message}
          ></SimpleAlerts>
        )}
        {error && (
          <SimpleAlerts severity="error" title="Error" message={error} />
        )}
        {success && (
          <SimpleAlerts
            severity="info"
            title="Success"
            message={"Profile Updated"}
          ></SimpleAlerts>
        )}
        {loading && <SimpleBackdrop />}

        <form className={classes.form} noValidate onSubmit={submitHandler}>
          <TextField
            value={name}
            size="small"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            value={email}
            size="small"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            size="small"
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Enter Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            margin="normal"
            size="small"
            variant="outlined"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <Typography
              component="h1"
              variant="body1"
              className={classes.textLow}
            >
              <b>Update</b>
            </Typography>
          </Button>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          ></Grid>
        </form>
      </Grid>
      <Grid item xs={9}>
        <Typography variant="h5">My Orders</Typography>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textLow: {
    textTransform: "none",
  },
  bg: {
    backgroundColor: "#fff",
  },
}));

export default ProfilePage;
  