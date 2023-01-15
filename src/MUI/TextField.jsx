import {  Stack, TextField, Typography } from '@mui/material'
function MuiTextField() {
  return (
    <Stack direction='column' spacing={4} >
      <Stack direction='row' spacing={4}>
        <Typography color='info' variant='h4' >Variant</Typography>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />    
      </Stack>
      <Stack direction='row' spacing={4}>
        <Typography color='info' variant='h4'>Color</Typography>
        <TextField label="Outlined secondary" color="secondary" focused />
        <TextField label="Filled success" variant="filled" color="success" focused />
        <TextField
          label="Standard warning"
          variant="standard"
          color="warning"
          focused
        />
      </Stack>
      <Stack direction='row' spacing={4}>
        <Typography color='info' variant='h4'>Multi Line</Typography>
        <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            maxRows={3}
          />
      </Stack>
    </Stack>
  )
}

export default MuiTextField