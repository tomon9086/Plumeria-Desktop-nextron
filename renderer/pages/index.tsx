import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing(4)
    }
  })
)

function Home () {
  const classes = useStyles({})
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleClick = () => setOpen(true)

  return (
    <>
      <Head>
        <title>Home - Nextron (with-typescript-material-ui)</title>
      </Head>
      <div className={classes.root}>
        <Dialog onClose={handleClose} open={open}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color='primary' onClick={handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography gutterBottom variant='h4'>
          Material-UI
        </Typography>
        <Typography gutterBottom variant='subtitle1'>
          with Nextron
        </Typography>
        <img src='/images/logo.png' />
        <Typography gutterBottom>
          <Link href='/next'>Go to the next page</Link>
        </Typography>
        <Button color='secondary' onClick={handleClick} variant='contained'>
          Super Secret Password
        </Button>
      </div>
    </>
  )
};

export default Home
