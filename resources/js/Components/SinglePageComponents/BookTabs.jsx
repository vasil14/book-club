import React from "react";
import { Tabs } from "antd";
import ReviewTab from "./ReviewTab";
import DescriptionsTab from "./DescriptionsTab";

const BookTabs = ({ book }) => {
    return (
        <Tabs
            tabPosition="left"
            size="large"
            items={[
                {
                    key: "1",
                    label: "Reviews",
                    children: <ReviewTab />,
                },
                {
                    key: "2",
                    label: "Description",
                    children: (
                        <DescriptionsTab description={book[0]?.description} />
                    ),
                },
            ]}
        />
    );
};

export default BookTabs;
