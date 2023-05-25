import { createContext, useState, useRef } from "react";

const BookContext = createContext({});

export const BookProvider = ({ children }) => {
    const reviewRef = useRef(null);
    const [tabKey, setTabKey] = useState("1");
    const executeScroll = () => {
        reviewRef.current.scrollIntoView({ behavior: 'smooth'});
        setTabKey('2');
    };
    const [readMore, setReadMore] = useState("1");

    const readMoreToggler = () => {
        setReadMore((previousstate) => !previousstate);
    };

    const test = "this is a test mesage";
    return (
        <BookContext.Provider
            value={{ readMoreToggler, readMore, reviewRef, executeScroll,tabKey ,setTabKey}}
        >
            {children}
        </BookContext.Provider>
    );
};

export default BookContext;
