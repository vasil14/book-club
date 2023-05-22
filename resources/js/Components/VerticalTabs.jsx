import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Rating } from "@mui/material";

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
                    {children}
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
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs({ description }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                height: 500,
            }}
        >
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                    borderRight: 1,
                    borderColor: "divider",
                    width: 250,
                    paddingTop: 5,
                }}
                className="justify-items-start items-start"
            >
                <Tab label="Reviews" {...a11yProps(0)} className="font-semibold"  />
                <Tab label="Description" {...a11yProps(1)} className="font-semibold" />
                <Tab label="Item Three" {...a11yProps(2)} className="font-semibold" />
            </Tabs>
            <TabPanel value={value} index={0} style={{ width: "100%" }} className="">
                <div className="w-full">
                    <div className="border-b w-full flex flex-row justify-between items-baseline">
                        <div className="text-sm uppercase">Popular Reviews</div>
                        <div className="text-xs uppercase">MORE</div>
                    </div>
                    <div className="flex flex-row items-start gap-5 pt-5">
                        <Avatar className="items-start" />
                        <div className="flex flex-col">
                            <div className="flex flex-row gap-3">
                                <div>Review by User1</div>
                                <Rating value={3} readOnly={true} />
                                <div>3.0</div>
                            </div>
                            <div className="pt-5">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Nihil, corrupti sequi eaque,
                                dolorum officia veniam modi id dicta iusto,
                                aliquam corporis recusandae? Eligendi voluptas
                                reiciendis commodi facere aliquam saepe
                                veritatis! Dolorem voluptates ullam ipsum ipsa
                                voluptatibus, vel nihil corrupti sapiente, sint
                                exercitationem in dolores alias eum esse cum
                                minus quae tempora. Enim reiciendis amet modi
                                rem numquam illum molestiae magnam!
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1} style={{ width: "100%" }} className="">
                <div className="flex flex-col gap-5">
                    <div className="uppercase font-semibold">description</div>
                    <div>{description}</div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2} style={{ width: "100%" }}>
                Item Three
            </TabPanel>
        </Box>
    );
}
