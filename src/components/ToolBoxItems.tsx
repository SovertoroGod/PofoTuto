import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";

export const ToolBoxItems = ({
    items,
    className,
    itemWraperClassName,
}: {
        items: {
            title: string,
            iconType: React.ElementType,
        }[];
        className?: string;
        itemWraperClassName?: string;
}) => {
    return (
        <div className={twMerge("flex [mask-image : linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
            <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemWraperClassName)}>
                {
                    items.map((item, index) => (
                        <div key={index} className="inline-flex items-center px-2 py-3 gap-4 outline outline-2 outline-white/10 rounded-lg" >
                        <TechIcon component={item.iconType} />
                        <span className="font-semibold">{ item.title }</span>
                        </div>
                    ))
                }
            </div>
           
        </div>
    );
}