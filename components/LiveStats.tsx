import React, { useState, useEffect } from 'react';
import { Users, Eye, Clock, TrendingUp } from 'lucide-react';

const LiveStats: React.FC = () => {
  const [stats, setStats] = useState({
    visitors: 1247,
    pageViews: 3421,
    avgTime: '2:34',
    bounceRate: 34
  });

  // Simulation de statistiques en temps réel
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        visitors: prev.visitors + Math.floor(Math.random() * 3),
        pageViews: prev.pageViews + Math.floor(Math.random() * 5),
        avgTime: prev.avgTime,
        bounceRate: Math.max(25, Math.min(45, prev.bounceRate + (Math.random() - 0.5) * 2))
      }));
    }, 5000); // Mise à jour toutes les 5 secondes

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('fr-FR').format(num);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="glass rounded-2xl p-4 shadow-2xl border border-white/10 backdrop-blur-xl">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-400 font-medium">EN DIRECT</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Users size={14} className="text-indigo-400" />
              <span className="text-xs text-gray-400">Visiteurs</span>
            </div>
            <div className="text-lg font-bold text-white">{formatNumber(stats.visitors)}</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Eye size={14} className="text-indigo-400" />
              <span className="text-xs text-gray-400">Pages vues</span>
            </div>
            <div className="text-lg font-bold text-white">{formatNumber(stats.pageViews)}</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Clock size={14} className="text-indigo-400" />
              <span className="text-xs text-gray-400">Temps moyen</span>
            </div>
            <div className="text-lg font-bold text-white">{stats.avgTime}</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <TrendingUp size={14} className="text-indigo-400" />
              <span className="text-xs text-gray-400">Rebond</span>
            </div>
            <div className="text-lg font-bold text-white">{stats.bounceRate}%</div>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-white/10">
          <div className="text-xs text-gray-500 text-center">
            Statistiques mises à jour en temps réel
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStats;