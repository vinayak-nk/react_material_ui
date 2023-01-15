import { 
  Button, Typography, IconButton, Stack, ButtonGroup, ToggleButton, ToggleButtonGroup,
} from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';

import PhotoCamera from '@mui/icons-material/PhotoCamera'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import AlarmIcon from '@mui/icons-material/Alarm'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import Fingerprint from '@mui/icons-material/Fingerprint'
import SaveIcon from '@mui/icons-material/Save'

function MuiButtons() {
  return (
    <>
      <Stack direction='row' spacing={2} style={{ marginBottom: '10px' }}>
        <Typography variant='h4'>Text button</Typography>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
      </Stack>

      <Stack direction='row' spacing={2} style={{ marginBottom: '10px' }}>
        <Typography variant='h4'>Contained button</Typography>
        <Button variant="contained">Contained</Button>
        <Button variant="contained" disabled>Disabled</Button>
        <Button variant="contained" href="#contained-buttons">Link</Button>
        <Button variant="contained" disableElevation>Disable elevation</Button>
      </Stack>

      <Stack direction='row' spacing={2} style={{ marginBottom: '10px' }}>
        <Typography variant='h4'>Outlined button</Typography>
        <Button variant="outlined">Primary</Button>
        <Button variant="outlined" disabled>Disabled</Button>
        <Button variant="outlined" href="#outlined-buttons">Link</Button>
      </Stack>

      <Stack direction='row' spacing={2} style={{ marginBottom: '10px' }}>
        <Typography variant='h4'>Handling clicks</Typography>
        <Button onClick={() => { alert('clicked') }}>Click me</Button>
      </Stack>

      <Stack display='flex' direction='row' spacing={2} style={{ marginBottom: '10px' }}>
        <Typography variant='h4'>Color</Typography>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="primary">primary</Button>
        <Button variant="contained" color="secondary">secondary</Button>
        <Button variant="contained" color="success">Success</Button>
        <Button variant="contained" color="error">error</Button>
        <Button variant="contained" color="warning">warning</Button>
        <Button variant="contained" color="info">Info</Button>
      </Stack>

      <Stack direction='row' spacing={2} style={{ marginBottom: '10px' }}>
        <Typography variant='h4'>Upload button</Typography>
        <Button variant="contained" component="label">
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <IconButton color="primary" aria-label="upload picture" component="label">
          <input accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton>      
      </Stack>

      <Stack direction='row' spacing={2} style={{ marginBottom: '10px' }}>
        <Typography variant='h4'>Buttons with icons and label</Typography>
        <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
        <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
        <IconButton aria-label="delete"><DeleteIcon /></IconButton>
        <IconButton aria-label="delete" disabled color="primary"><DeleteIcon /></IconButton>
        <IconButton color="secondary" aria-label="add an alarm"><AlarmIcon /></IconButton>
        <IconButton color="primary" aria-label="add to shopping cart"><AddShoppingCartIcon /></IconButton>
      </Stack>

      <Stack direction='row' spacing={2} style={{ marginBottom: '10px' }}>
        <Typography variant='h4'>Fingerprint</Typography>
        <IconButton aria-label="fingerprint" color="secondary"><Fingerprint /></IconButton>
        <IconButton aria-label="fingerprint" color="success"><Fingerprint /></IconButton>
      </Stack>

      <Stack direction='row' spacing={2} style={{ marginBottom: '10px' }}>
        <Typography variant='h4'>Loading.....</Typography>
        <LoadingButton loading variant="outlined">Submit</LoadingButton>
        <LoadingButton loading loadingIndicator="Loading…" variant="outlined">Fetch data</LoadingButton>
        <LoadingButton
          loading
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="outlined"
        >
          Save
        </LoadingButton>      
      </Stack>
      <Stack direction='row' spacing={2} style={{ marginBottom: '10px' }}>
        <Typography color='info'>Button Groups</Typography>
        <ButtonGroup variant='contained' size='large'>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </>
  )
}

export default MuiButtons