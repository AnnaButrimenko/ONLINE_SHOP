import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  highlights: {
    fontSize: '1rem',
    textAlign: 'justify',
    lineHeight: '2',
    paddingBottom: theme.spacing(3)
  },
  description: {
    fontSize: '1rem',
    textAlign: 'justify',
    lineHeight: '2',
    paddingBottom: theme.spacing(3)
  },
  badge: {
    '& .MuiBadge-anchorOriginTopRightRectangle': {
      top: -12,
      right: -2
    }
  }
}));

export default useStyles;