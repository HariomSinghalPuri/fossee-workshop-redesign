import React, { useState } from 'react';
import { BookOpen, Users, UserCheck } from 'lucide-react';
import DashboardLayout from './components/DashboardLayout';
import StatCard from './components/StatCard';
import FilterSidebar from './components/FilterSidebar';
import DataCharts from './components/DataCharts';
import ResponsiveDataTable from './components/ResponsiveDataTable';
import { workshops, instructors, coordinators, chartData } from './mockData';

function App() {
  const [activeView, setActiveView] = useState('overview');
  const [filters, setFilters] = useState({ state: '', type: '', status: '' });

  // Apply filters to workshop data
  const filteredWorkshops = workshops.filter(ws => {
    return (
      (filters.state === '' || ws.state === filters.state) &&
      (filters.type === '' || ws.type === filters.type) &&
      (filters.status === '' || ws.status === filters.status)
    );
  });

  const workshopColumns = [
    { header: 'Title', accessor: 'title' },
    { header: 'Date', accessor: 'date' },
    { header: 'State', accessor: 'state' },
    { header: 'Type', accessor: 'type' },
    { header: 'Status', accessor: 'status' }
  ];

  const instructorColumns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Workshops Taken', accessor: 'workshopsTaken' },
    { header: 'Rating', accessor: 'rating' }
  ];

  return (
    <DashboardLayout activeView={activeView} setActiveView={setActiveView}>
      
      {/* Sidebar - only show on Overview for filters */}
      {activeView === 'overview' && (
        <FilterSidebar filters={filters} setFilters={setFilters} />
      )}

      {/* Main Panel Content */}
      <div className="flex-1 w-full space-y-6">
        
        {/* Dynamic Headers based on View */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            {activeView === 'overview' && 'Dashboard Overview'}
            {activeView === 'workshops' && 'Manage Workshops'}
            {activeView === 'instructors' && 'Instructor Directory'}
          </h1>
          <p className="text-slate-500 mt-1">
            {activeView === 'overview' && 'Platform statistics and recent workshop activities.'}
            {activeView === 'workshops' && 'View and manage all registered workshops.'}
            {activeView === 'instructors' && 'List of active instructors and their performance.'}
          </p>
        </div>

        {/* Global Statistics Cards - Only on Overview */}
        {activeView === 'overview' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <StatCard 
              title="Total Workshops" 
              value={workshops.length} 
              icon={BookOpen} 
              colorClass="bg-indigo-100 text-indigo-600" 
            />
            <StatCard 
              title="Active Instructors" 
              value={instructors.length} 
              icon={Users} 
              colorClass="bg-emerald-100 text-emerald-600" 
            />
            <StatCard 
              title="Total Coordinators" 
              value={coordinators.length} 
              icon={UserCheck} 
              colorClass="bg-amber-100 text-amber-600" 
            />
          </div>
        )}

        {/* Dynamic Main Body Content */}
        {activeView === 'overview' && (
          <>
            <DataCharts chartData={chartData} />
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h2 className="text-lg font-bold text-slate-800 mb-4">Filtered Workshops</h2>
              <ResponsiveDataTable 
                columns={workshopColumns} 
                data={filteredWorkshops} 
                keyExtractor={(row) => row.id} 
              />
            </div>
          </>
        )}

        {activeView === 'workshops' && (
          <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <ResponsiveDataTable 
              columns={workshopColumns} 
              data={workshops} 
              keyExtractor={(row) => row.id} 
            />
          </div>
        )}

        {activeView === 'instructors' && (
          <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <ResponsiveDataTable 
              columns={instructorColumns} 
              data={instructors} 
              keyExtractor={(row) => row.id} 
            />
          </div>
        )}

      </div>
    </DashboardLayout>
  );
}

export default App;
