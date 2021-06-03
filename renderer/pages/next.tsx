import { } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing(4)
    }
  })
)

function Next () {
  const classes = useStyles({})

  return (
    <>
      <Head>
        <title>Next - Nextron (with-typescript-material-ui)</title>
      </Head>
      <div className={classes.root}>
        <Typography gutterBottom variant='h4'>
          Material-UI
        </Typography>
        <Typography gutterBottom variant='subtitle1'>
          with Nextron
        </Typography>
        <Typography gutterBottom>
          <Link href='/'>Go to the home page</Link>
        </Typography>
        <Button color='primary' variant='contained'>
          Do nothing button
        </Button>
      </div>
    </>
  )
};

export default Next
