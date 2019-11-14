import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import history from '../History'
export default function Student() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        // setAnchorEl(null);
        history.push('/studentheader');
    };
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Button color="blue" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Student Profile
               </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}> Add Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Applied Job</MenuItem>
                    <MenuItem onClick={handleClose}>Log Out</MenuItem>
                </Menu>
            </div>
        </nav>
    );
}
