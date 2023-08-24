
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Account from '../../Account/Account';
import HomeIcon from '@mui/icons-material/Home';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
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

export default function AdminDashboard() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className='bg-[#93B1A6]'>
                <Account></Account>
                <Box
                    sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', width: "BiFullscreen", height: "100vh" }}
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

                        <Tab label="Dashboard" {...a11yProps(0)} sx={{ fontSize: 18, width: 'BiFullscreen' }} icon={<HomeIcon color="primary" />} iconPosition='start' />
                        <Tab label="Inbox" {...a11yProps(1)} sx={{ fontSize: 18, width: 'BiFullscreen' }} icon={<SendOutlinedIcon />} iconPosition='start' />
                        <Tab label="Sent" {...a11yProps(2)} sx={{ fontSize: 18, }} icon={<ForwardToInboxIcon />} iconPosition='start' />
                        <Tab label="Save Document" {...a11yProps(3)} sx={{ fontSize: 18, }} icon={<DocumentScannerIcon />} iconPosition='start' />
                        <Tab label="Template" {...a11yProps(4)} sx={{ fontSize: 18, }} icon={<ArticleTwoToneIcon />} iconPosition='start' />
                        <Tab label="Setting" {...a11yProps(5)} sx={{ fontSize: 18, }} icon={<SettingsOutlinedIcon />} iconPosition='start' />
                    </Tabs>
                    <TabPanel value={value} index={0} >
                        <div className='flex justify-around gap-5 w-full'>
                            <Drags></Drags>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className='w-full'>
                            <Counter></Counter>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item Four
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        Item Five
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        Item Six
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        Item Seven
                    </TabPanel>
                </Box>
            </div>
        </>
    );
}
