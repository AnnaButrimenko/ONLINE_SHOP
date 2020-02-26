import React from 'react'

import useStyles from './_video';

const Video = () => {
  const classes = useStyles()
  return (
    <div>
      <video
        className={classes.video}
        controls
        poster={`${process.env.PUBLIC_URL}/img/wmf.jpg`}
      >
        <source
          src={`${process.env.PUBLIC_URL}/video.mp4`}
        />
        <track
          kind="captions"
        />
        Sorry, your browser doesn&#8242;t support embedded videos.
      </video>
    </div>
  )
}

export default Video