
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Account from '../../Account/Account';
import Drag from '../../Drag&Drop/Drag';
import { Link } from '@mui/material';
import { FavoriteIcon } from '@mui/icons-material/Favorite'
import Counter from '../../Counting doc/Counter';
import Drags from '../../DragInAccount/Drags';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function UserDashboard() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Account></Account>
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', width: "BiFullscreen", height: 624 }}
            >
                <Tabs
                    orientation="vertical"
                    // variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    // aria-label="Vertical tabs example"
                    // sx={{ borderRight: 1, borderColor: 'divider' }}
                    textColor='secondary'
                    indicatorColor='secondary'
                    className='mb-6'
                    centered

                >

                    <Tab label="Create Document" {...a11yProps(0)} icon={FavoriteIcon} />
                    <Tab label="Inbox" {...a11yProps(1)} />
                    <Tab label="Sent" {...a11yProps(2)} />
                    <Tab label="Save Document" {...a11yProps(3)} />
                    <Tab label="Template" {...a11yProps(4)} />
                    <Tab label="FAQ" {...a11yProps(5)} />
                </Tabs>
                <TabPanel value={value} index={0} >
                    <div className='flex justify-around gap-5 w-full'>
                        <Drags></Drags>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Inbox
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Sent
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Save Document
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Template
                </TabPanel>
                <TabPanel value={value} index={5}>
                    FAQ
                </TabPanel>
               
            </Box>
        </>
    );
}