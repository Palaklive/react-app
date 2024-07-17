import { decrement, increment } from "@/store/common-features";
import { Button, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1" sx={{ textAlign: "center" }}>
          {count}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>
            <Button variant="outlined" onClick={() => dispatch(increment())}>
              Increment
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => dispatch(decrement())}>
              Decrement
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
