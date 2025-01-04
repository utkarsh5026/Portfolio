import React from "react";
import { Button } from "@/components/ui/button";

interface ArticleCardProps {
  title: string;
  description: string;
  link: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <div className="bg-transparent rounded-lg transition-all duration-300 flex flex-col justify-between border-4 border-gray-500 p-8 h-full">
      <div className="bg-slate-950 p-4 rounded-lg">
        <h2 className="text-lg font-normal text-left">{title}</h2>
        <p className="text-gray-400 text-sm my-6 text-left  ">{description}</p>
        <Button
          onClick={() => window.open(link, "_blank")}
          className="bg-transparent w-fit text-white hover:border-orange-500 hover:bg-transparent hover:border-2"
        >
          Read more
        </Button>
      </div>
    </div>
  );
};

export default ArticleCard;