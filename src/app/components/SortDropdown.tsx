"use client";

interface SortDropdownProps {
  sortBy: string;
  setSortBy: (value: string) => void;
}

export default function SortDropdown({
  sortBy,
  setSortBy,
}: SortDropdownProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-500">
        Sort By
      </span>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="bg-black border border-[#292929] px-4 py-3 text-sm outline-none"
      >
        <option value="duration">Duration</option>
        <option value="calories">Calories</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}