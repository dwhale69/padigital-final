import React from 'react';

interface CardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  stats?: Array<{ label: string; value: string }>;
  address?: string;
  glowPosition?: 'top-right' | 'bottom-right';
}

const Card = ({ title, subtitle, icon, stats, address, glowPosition }: CardProps) => {
  return (
    <div className="relative group">
      {/* Glow Effect */}
      <div className={`absolute -inset-2 bg-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        glowPosition === 'top-right' ? 'bg-gradient-to-tr' :
        glowPosition === 'bottom-right' ? 'bg-gradient-to-br' :
        'bg-gradient-to-r'
      }`} />

      {/* Card Content */}
      <div className="relative bg-black/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-colors">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-1">{title}</h3>
            <p className="text-gray-400">{subtitle}</p>
          </div>
          <div className="bg-black/30 p-3 rounded-lg border border-primary/20">
            {icon}
          </div>
        </div>

        {stats && (
          <div className="grid grid-cols-2 gap-4 mt-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-black/30 p-3 rounded-lg">
                <div className="text-primary font-semibold">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {address && (
          <div className="mt-6 bg-black/30 p-3 rounded-lg">
            <div className="text-gray-400 text-sm">Wallet address</div>
            <div className="text-primary font-mono">{address}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;