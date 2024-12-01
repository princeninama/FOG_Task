import { SearchIcon } from 'lucide-react';
import { useState } from 'react';

export function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative flex items-center gap-6 p-6 ml-12">
      {/* Music, Podcast, Live, Radio Tabs */}
      <div className="flex space-x-12 text-sm font-bold text-gray-200">
        <div className="cursor-pointer hover:text-white">Music</div>
        <div className="cursor-pointer hover:text-white">Podcast</div>
        <div className="cursor-pointer hover:text-white">Live</div>
        <div className="cursor-pointer hover:text-white">Radio</div>
      </div>

      {/* Search Input */}
      <div className="relative flex items-center w-full max-w-lg">
        <input
          type="text"
          placeholder="Michael Jackson"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-[80%]  rounded-2xl pr-10 p-3 bg-[#2C0000] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Search Icon positioned to the right */}
        <SearchIcon className="absolute right-32 top-1/2 h-5 w-5 -translate-y-1/2 text-white" />
      </div>
    </div>
  );
}
