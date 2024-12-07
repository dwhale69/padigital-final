import React from 'react';

interface StatCardProps {
  name: string;
  value: string;
}

const StatCard = ({ name, value }: StatCardProps) => (
  <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-primary/10 hover:border-primary/30 hover:bg-black/40 transition-all group">
    <div className="text-primary text-xl sm:text-2xl font-bold mb-1">{value}</div>
    <div className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
      {name}
    </div>
  </div>
);

const StatsGrid = () => {
  const stats = [
    { name: 'Total Farms', value: '1,234' },
    { name: 'Hectares', value: '5,678' },
    { name: 'Investors', value: '3,456' },
    { name: 'Rice Tokens', value: '789K' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
      {stats.map((stat) => (
        <StatCard key={stat.name} {...stat} />
      ))}
    </div>
  );
};

export default StatsGrid;