import React from 'react'
import {Box, CardContent, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {demoChannelTitle, demoProfilePicture} from "../../utils/constant";
import {CheckCircle} from "@mui/icons-material";

const ChannelCard = ({ channelDetail, marginTop = 0 }) => (
  <Box sx={{ boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '356px', md: '320px' }, height: '326px', m: 'auto', marginTop }}>
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
        <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title || demoChannelTitle}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
      </CardContent>
      <Typography variant="h6" color="white" textAlign="center">
        {channelDetail?.snippet?.title || demoChannelTitle}
        <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
      </Typography>
      {channelDetail?.statistics?.subscriberCount && (
          <Typography color="white" textAlign="center">
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>
      )}
    </Link>
  </Box>
)

export default ChannelCard