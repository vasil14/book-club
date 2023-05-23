import React from "react";
import { Rate, Avatar } from "antd";
import { avatar } from "../../../assets/images";

const ReviewTab = () => {
    return (
        <div className="w-full pt-5 max-w-[850px] pl-5">
            <div className="border-b w-full flex flex-row justify-between items-baseline">
                <div className="text-sm uppercase">Popular Reviews</div>
                <div className="text-xs uppercase">MORE</div>
            </div>
            <div className="flex flex-row  gap-5 pt-5">
                <Avatar
                    className="items-start w-32"
                    size="large"
                    src={avatar}
                />
                <div className="flex flex-col">
                    <div className="flex flex-row gap-3 items-center">
                        <div className="text-base align-baseline">Review by <span className="font-semibold">User1</span></div>
                        <Rate value={3} />
                        <div>3.0</div>
                    </div>
                    <div className="pt-5">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nihil, corrupti sequi eaque, dolorum officia
                        veniam modi id dicta iusto, aliquam corporis recusandae?
                        Eligendi voluptas reiciendis commodi facere aliquam
                        saepe veritatis! Dolorem voluptates ullam ipsum ipsa
                        voluptatibus, vel nihil corrupti sapiente, sint
                        exercitationem in dolores alias eum esse cum minus quae
                        tempora. Enim reiciendis amet modi rem numquam illum
                        molestiae magnam!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewTab;
