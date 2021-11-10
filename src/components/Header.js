import React from 'react'
import { makeStyles } from '@mui/styles';
import { HeaderStyles } from '../styles/HeaderStyles';

const useStyles = makeStyles(HeaderStyles)

function Header() {
    const classes = useStyles();
    return (
        <div className = {classes.head}>
            Header
        </div>
    )
}
export default Header
