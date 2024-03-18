import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount, resetCount } from "../store/slices/counterSlices";

const Counter = () => {
  const values = useSelector((state) => state.counter);
  const dispatch = useDispatch()
  return (
    <>
    <Box sx={{background:"black",width:"250px",height:"300px",display:"flex",flexDirection:"column", justifyContent:"center",gap:"1rem",padding:"2rem"}}>
      <Typography variant="h1"sx={{fontWeight:"bold"}}>{values.count}</Typography>
      <Button variant="contained" onClick={()=>{
        dispatch(increaseCount())
      }}>Increase Count</Button>
      <Button variant="contained" color="error" onClick={()=>{
        dispatch(decreaseCount())
      }}>Decrease Count</Button>
      <Button variant="contained" color="success" onClick={()=>{
        dispatch(resetCount())
      }}>Reset</Button>
      </Box>
    </>
  );
};

export default Counter;
