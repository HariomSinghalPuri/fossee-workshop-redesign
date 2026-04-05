import React from 'react';
import { Filter } from 'lucide-react';

const FilterSidebar = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm w-full md:w-64 shrink-0">
      <div className="flex items-center space-x-2 mb-6">
        <Filter className="w-5 h-5 text-indigo-600" />
        <h3 className="font-semibold text-lg text-slate-800">Filters</h3>
      </div>
      
      <div className="space-y-5 flex flex-col">
        {/* State Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-slate-700 mb-1.5" htmlFor="state">State</label>
          <select 
            id="state"
            name="state"
            value={filters.state}
            onChange={handleFilterChange}
            className="w-full min-h-[44px] rounded-lg border-slate-200 bg-slate-50 text-slate-800 px-3 py-2 border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
          >
            <option value="">All States</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Delhi">Delhi</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
          </select>
        </div>

        {/* Type Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-slate-700 mb-1.5" htmlFor="type">Workshop Type</label>
          <select 
            id="type"
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="w-full min-h-[44px] rounded-lg border-slate-200 bg-slate-50 text-slate-800 px-3 py-2 border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
          >
            <option value="">All Types</option>
            <option value="Self-driven">Self-driven</option>
            <option value="Instructor-led">Instructor-led</option>
          </select>
        </div>

        {/* Status Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-slate-700 mb-1.5" htmlFor="status">Status</label>
          <select 
            id="status"
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            className="w-full min-h-[44px] rounded-lg border-slate-200 bg-slate-50 text-slate-800 px-3 py-2 border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
          >
            <option value="">All Statuses</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>
      
      <button 
        onClick={() => setFilters({ state: '', type: '', status: '' })}
        className="w-full mt-6 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-3 rounded-lg min-h-[44px] flex items-center justify-center transition-colors focus:ring-2 focus:ring-slate-400 outline-none"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
