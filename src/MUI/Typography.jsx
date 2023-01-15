import { Typography } from '@mui/material'

import React from 'react'

function MuiTypography() {
  return (
    <div>
      <Typography variant='h1' >H1 Heading</Typography>
      <Typography variant='h2' >H2 Heading</Typography>
      <Typography variant='h3' >H3 Heading</Typography>
      <Typography variant='h4' >H4 Heading</Typography>
      <Typography variant='h4' component='h1' gutterBottom >H4 Heading</Typography>
      <Typography variant='h5' >H5 Heading</Typography>
      <Typography variant='h6' >H6 Heading</Typography>

      <Typography variant='subtitle1' >sub title 1</Typography>
      <Typography variant='subtitle2' >sub title 2</Typography>
      
      <Typography variant='body1' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illum, placeat quidem facere distinctio perferendis totam veritatis ab debitis ut repellendus neque vel, minima voluptatum praesentium eveniet sint fuga. Doloribus!</Typography>
      <Typography variant='body2' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam modi nostrum eveniet deserunt labore magni omnis accusamus asperiores, praesentium expedita veritatis eius quae voluptatem ipsa libero ab vero at eos!</Typography>
    </div>
  )
}

export default MuiTypography
