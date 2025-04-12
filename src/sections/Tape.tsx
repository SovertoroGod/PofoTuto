import StarIcon from "@/assets/icons/star.svg";
const words = [
  "performative",
  "exhibition",
  "artistic",
  "intervention",
  "installation",
  "collaboration",
  "community",
  "experience",
  "engagement",
  "expression",
];

export const TapeSection = () => {
  return <div className="py-16 mt-10">
    <div className="bg-gradient-to-r from-emerald-500 to-sky-400 text-transparent overflow-x-clip -rotate-2 -mx-1">
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex  gap-4 flex-none text-gray-800 items-center py-3">
      {words.map(word => (
        <div key={word} className="inline-flex items-center gap-4 text-sm font-bold uppercase">
          <StarIcon className="size-6 -rotate-11"/>
          <span>{word}</span>
        </div>
      ))}
        </div>
        </div>
    </div>
    
  </div>
  ;
};
