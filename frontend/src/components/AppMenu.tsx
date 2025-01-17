import { Box, AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { Link, useLocation } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

export const AppMenu = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ marginBottom: "20px" }}>
                <Toolbar>
                    <IconButton
                        component={Link}
                        to="/"
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="school"
                        sx={{ mr: 2 }}>
                        <SchoolIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ mr: 5 }}>
                        HostCity management
                    </Typography>
                    <Button
                        variant={path.startsWith("/hostcity") ? "outlined" : "text"}
                        to="/hostcity"
                        component={Link}
                        color="inherit"
                        sx={{ mr: 5 }}
                        startIcon={<LocalLibraryIcon />}>
                        HostCities
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};