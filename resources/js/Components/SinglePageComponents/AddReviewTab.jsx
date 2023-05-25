import { useState } from "react";
import { Rate } from "antd";
import { Heart } from "@phosphor-icons/react";

const AddReviewTab = ({ book }) => {
    const [rating, setRating] = useState(null);
    const ratignToggler = (value) => {
        setRating(value);
    };
    return (
        <div className="flex flex-col gap-5 pt-10 w-[750px] pl-10">
            <div>{book[0]?.title}</div>
            <form action="POST" className="flex flex-col gap-5">
                <div className="flex justify-between max-w-lg">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="read"
                            id="read"
                            className="mr-2"
                        />
                        <label htmlFor="read">Read it on</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="read"
                            id="read"
                            className="mr-2"
                        />
                        <label htmlFor="read">I've read it before</label>
                    </div>
                </div>
                <div>
                    <textarea
                        name="review"
                        id="review"
                        cols="30"
                        rows="10"
                        className="w-full"
                    ></textarea>
                </div>
                <div className="flex flex-row gap-5 items-center justify-between pr-14">
                    <input type="text" className="w-80"/>
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between">
                            <div>Rating</div>
                            {rating ? <div>{rating} out of 5</div> : ""}
                        </div>
                        <Rate
                            onChange={(value) => ratignToggler(value)}
                            allowHalf
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Heart size={30}/>
                        <div>Like</div>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" name="spoiler"/>
                        <label htmlFor="spolier">Contains spolier</label>
                    </div>
                    <input type="submit" value="Submit" className="px-10 py-2 bg-teal-400 text-white font-semibold rounded-sm"/>
                </div>
            </form>
        </div>
    );
};

export default AddReviewTab;
