import React, { useContext, useState } from "react";
import { Tabs } from "antd";
import ReviewTab from "./ReviewTab";
import DescriptionsTab from "./DescriptionsTab";
import BookContext from "@/Context/BookContext";
import AddReviewTab from "./AddReviewTab";

const BookTabs = ({ book }) => {
    const { reviewRef, tabKey, setTabKey } = useContext(BookContext);
    // const [activeKey, setActiveKey] = useState("1")
    console.log(tabKey);
    return (
        <div ref={reviewRef} >
            <Tabs
            className="h-[1000px]"
                tabPosition="left"
                size="large"
                activeKey={tabKey}
                // onClick={(key) => setTabKey(key)} // Update the active tab key when a tab is clicked 
                items={[
                    {
                        key: "1",
                        label: (
                            <span className="py-5" onClick={() => setTabKey("1")}>
                                Reviews
                            </span>
                        ), // Example of adding an event to the label
                        children: <ReviewTab />,
                    },
                    {
                        key: "2",
                        label: (
                            <span
                                onClick={() => setTabKey("2")}
                            >
                                Description
                            </span>
                        ), // Example of adding an event to the label
                        children: (
                            <DescriptionsTab
                                description={book[0]?.description}
                            />
                        ),
                    },
                    {
                        key: "3",
                        label: (
                            <span
                                onClick={() => setTabKey("3")}
                            >
                                Add a Review
                            </span>
                        ), // Example of adding an event to the label
                        children: (
                            <AddReviewTab book={book} />
                        ),
                    },
                ]}
            />
        </div>
    );
};

export default BookTabs;
