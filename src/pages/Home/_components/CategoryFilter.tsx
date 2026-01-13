import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flame, TrendingUp } from "lucide-react";
import filterImage from "@/assets/images/home/filter.svg";

const categories = [
  { id: "all", label: "All" },
  { id: "fashion", label: "Fashion" },
  { id: "food", label: "Food & Drinks" },
  { id: "tech", label: "Tech" },
  { id: "lifestyle", label: "Lifestyle" },
  { id: "beauty", label: "Beauty" },
  { id: "fitness", label: "Fitness" },
  { id: "entertainment", label: "Entertainment" },
  { id: "gaming", label: "Gaming" },
  { id: "travel", label: "Travel" },
];

export default function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="w-full">
      {/* FILTER CARD */}
      <div className="rounded-3xl md:rounded-[30px] border border-primary bg-[#55A1F20F] p-4 md:p-5 lg:p-6 space-y-4 mx-3 md:mx-0">
        {/* TOP ROW – BADGES */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 lg:gap-4">
          <Badge
            className="
              flex items-center gap-1.5 md:gap-2
              bg-primary text-white
              px-2.5 py-1.5
              md:px-4 md:py-2
              lg:px-5 lg:py-2.5
              text-[10px] md:text-sm lg:text-base
              font-semibold
            "
          >
            <Flame className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
            High Confidence
          </Badge>

          <Badge
            variant="outline"
            className="
              flex items-center gap-1.5 md:gap-2
              border-slate-700 text-slate-300
              px-2.5 py-1.5
              md:px-4 md:py-2
              lg:px-5 lg:py-2.5
              text-[10px] md:text-sm lg:text-base
              font-semibold
            "
          >
            <Flame className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
            Fresh
          </Badge>

          <Badge
            variant="outline"
            className="
              flex items-center gap-1.5 md:gap-2
              border-slate-700 text-slate-300
              px-2.5 py-1.5
              md:px-4 md:py-2
              lg:px-5 lg:py-2.5
              text-[10px] md:text-sm lg:text-base
              font-semibold
            "
          >
            <TrendingUp className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
            Top Boosted
          </Badge>
        </div>

        {/* BOTTOM ROW – CATEGORY FILTER */}
        {/* BOTTOM ROW – CATEGORY FILTER */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          <img src={filterImage} alt="Filter Icon" className="w-6 h-6" />
          {categories.map((category) => {
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                            text-sm md:text-base lg:text-lg
                            px-3 md:px-4 py-1 rounded-full
                            transition-colors duration-200
          ${isActive
                    ? "bg-[#55A1F229] text-white border border-primary hover:bg-[#55A1F244]"
                    : "bg-[#080e14] text-white border border-gray-700 hover:bg-[#0a111c]"
                  }
        `}
              >
                {category.label}
              </button>
            );
          })}
        </div>


      </div>
    </div>
  );
}
