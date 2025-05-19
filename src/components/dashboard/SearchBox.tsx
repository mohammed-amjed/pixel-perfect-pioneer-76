import React from "react";

const SearchBox: React.FC = () => {
  return (
    <div
      className="items-center border border-[color:var(--Stroke-Base,#EAECF0)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04)] flex min-h-10 gap-2 overflow-hidden bg-white pl-3.5 pr-4 py-[9px] rounded-lg border-solid max-md:max-w-full"
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/286cd95ac9a9e883d430d3546e306edfc01f620f?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
        alt="Search icon"
      />
      <input
        type="text"
        placeholder="Search"
        className="text-[#68727D] flex-1 shrink basis-[0%] self-stretch min-w-60 gap-2 my-auto bg-transparent border-none outline-none"
      />
    </div>
  );
};

export default SearchBox;
