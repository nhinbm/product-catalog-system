"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="inline-flex items-center border border-gray-300 rounded px-3 py-2">
      <span className="text-gray-500 text-sm whitespace-nowrap">Sort By</span>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="border-0 p-0 h-auto min-w-0 shadow-none focus:ring-0 focus:ring-offset-0 ml-2">
          <div className="flex items-center">
            <SelectValue className="font-medium text-sm" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="popular">Popular</SelectItem>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="price-low">Price: Low to High</SelectItem>
          <SelectItem value="price-high">Price: High to Low</SelectItem>
          <SelectItem value="rating">Highest Rated</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
