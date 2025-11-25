import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContext } from "react";
import { FiltersContext } from "@/contexts/FiltersContext";

function ShowSelect() {
  const { filters, setFilters } = useContext(FiltersContext);
  return (
    <div className="flex items-center gap-2 text-gray-500">
      <p className="text-sm">Show:</p>
      <Select
        onValueChange={(value) => setFilters({ ...filters, show: value })}
        value={filters.show}
      >
        <SelectTrigger className="w-18">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="12">12</SelectItem>
          <SelectItem value="24">24</SelectItem>
          <SelectItem value="36">36</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default ShowSelect;
