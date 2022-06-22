import { Box, Stack } from "@mui/material";
import React from "react";
import Icon from "../assets/icons/gym.png"



const BodyPart = ({ item,setBodyPart,bodyPart }) => {
  return (
    <Box>
<Stack
type = "button"
alignItems="center"
justifyContent="center"
className="bodyPart-card"
sx={
    bodyPart === item?{
        borderTop: "4px solid #ff2625",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
    } : {
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",

    }
}
>
    <img src={Icon} alt="sumble" 
    style={{
        width: "40px",
        height: "40px",
    }}
    />
</Stack>
      
    </Box>
  );
};

export default BodyPart;
 