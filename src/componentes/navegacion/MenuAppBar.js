import { AppBar, Button, Container, Icon, Link, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../theme/useStyles';

const MenuAppBar = () => {
    const classes = useStyles()

    return (
        <div>
            <AppBar position="static" className={ classes.appBar }>
                <Container>
                    <Toolbar>
                        <div className={ classes.grow }>
                            <Link color="inherit" className={ classes.linkAppBarLogo } underline="none">
                                <Icon className={ classes.mr } fontSize="large">store</Icon>
                                <Typography variant="h5">VAXI SHOP</Typography>
                            </Link>
                        </div>
                        <div>
                            <Button color="inherit" className={ classes.linkAppBarDesktop }>
                                <Link color="inherit" classNaame={ classes.linkAppBarDesktop } underline="none">
                                    <Icon className={ classes.mr }>person</Icon>
                                    LOGIN
                                </Link>
                            </Button>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default MenuAppBar




