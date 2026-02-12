
import React from 'react';
import { Coins, TrendingUp, Gift, History, Trophy, ArrowUpRight, CreditCard, Wallet, Users } from 'lucide-react';

const Points: React.FC = () => {
  const LEADERBOARD = [
    { rank: 1, name: 'Alex.H', points: 15420, university: 'HKU', impact: 'Top Contributor' },
    { rank: 2, name: 'Chloe.W', points: 12850, university: 'PolyU', impact: 'Kind Helper' },
    { rank: 3, name: 'Jason.K', points: 11200, university: 'CityU', impact: 'Resource Sharer' },
  ];

  const REWARDS = [
    { title: 'HKU Starbucks 8 折券', cost: 200, icon: '☕', stock: '热兑中' },
    { title: '百佳/惠康 $50 代金券', cost: 5000, icon: '🛒', stock: '12份剩余' },
    { title: 'Sycle 联名环保帆布袋', cost: 1500, icon: '👜', stock: '库存充足' },
    { title: '全平台免服务费月卡', cost: 1000, icon: '💎', stock: '官方推荐' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Dynamic Header */}
      <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden mb-12 shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="text-center lg:text-left">
            <span className="text-vibrant-orange font-black text-xs tracking-[0.3em] uppercase mb-4 block">您的资产总额</span>
            <div className="flex items-baseline justify-center lg:justify-start">
              <span className="text-8xl font-black tracking-tighter">1,248</span>
              <span className="text-2xl font-bold ml-4 text-navy-300">豆豆</span>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
              <button className="bg-vibrant-orange hover:bg-vibrant-hover px-10 py-4 rounded-2xl font-black text-sm transition-all flex items-center shadow-lg shadow-vibrant-orange/20">
                <CreditCard className="mr-2 w-5 h-5" /> 充值豆豆
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-4 rounded-2xl font-black text-sm transition-all flex items-center backdrop-blur-md">
                <History className="mr-2 w-5 h-5" /> 收支账单
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 w-full lg:w-auto">
             {[
               { label: '累计赚取', value: '5.2K', icon: <TrendingUp className="w-5 h-5 text-green-400" /> },
               { label: '社区贡献', value: 'TOP 5%', icon: <Users className="w-5 h-5 text-blue-400" /> },
               { label: '已兑换好礼', value: '14件', icon: <Gift className="w-5 h-5 text-purple-400" /> },
               { label: '信用等级', value: 'SSS', icon: <Trophy className="w-5 h-5 text-yellow-400" /> }
             ].map((stat, i) => (
               <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-md hover:bg-white/10 transition-colors">
                  <div className="bg-white/10 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <p className="text-[10px] text-navy-300 font-black uppercase tracking-widest">{stat.label}</p>
                  <p className="text-2xl font-black mt-1">{stat.value}</p>
               </div>
             ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Marketplace */}
        <div className="lg:col-span-8">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-black text-navy-900 flex items-center">
                豆豆商城 <span className="ml-4 text-vibrant-orange text-sm font-bold bg-vibrant-orange/10 px-3 py-1 rounded-full uppercase tracking-tighter italic">Bean Shop</span>
              </h2>
              <p className="text-gray-400 mt-2 text-sm font-medium">官方严选资源，仅限豆豆兑换</p>
            </div>
            <button className="text-navy-900 font-black text-sm hover:text-vibrant-orange transition-colors flex items-center">
              查看分类 <ArrowUpRight className="ml-1 w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REWARDS.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl transition-all flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-navy-50 rounded-full group-hover:bg-vibrant-orange/10 transition-colors"></div>
                <div className="relative z-10">
                   <div className="text-5xl mb-6">{item.icon}</div>
                   <h3 className="text-xl font-bold text-navy-900 mb-2 leading-tight">{item.title}</h3>
                   <div className="inline-block px-3 py-1 rounded-lg bg-gray-50 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                     {item.stock}
                   </div>
                </div>
                <div className="mt-12 flex justify-between items-center relative z-10">
                   <div className="flex items-baseline">
                      <span className="text-3xl font-black text-navy-900">{item.cost}</span>
                      <span className="text-xs font-bold text-gray-400 ml-1.5 uppercase">Beans</span>
                   </div>
                   <button className="bg-navy-900 text-white px-8 py-3 rounded-2xl font-black text-xs hover:bg-vibrant-orange transition-all shadow-lg active:scale-95">
                     立即兑换
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm">
             <h3 className="text-xl font-black text-navy-900 mb-8 flex items-center">
                <Wallet className="w-5 h-5 mr-3 text-vibrant-orange" /> 快速充值
             </h3>
             <div className="space-y-3 mb-8">
                {[
                  { beans: 500, price: 48 },
                  { beans: 1200, price: 98, tag: '最受欢迎' },
                  { beans: 3000, price: 198, tag: '超值' }
                ].map((plan, i) => (
                  <button key={i} className="w-full flex items-center justify-between p-4 rounded-2xl border border-gray-100 hover:border-navy-900 hover:bg-navy-50 transition-all text-left group">
                     <div>
                        <p className="font-black text-navy-900 text-lg group-hover:text-vibrant-orange transition-colors">{plan.beans} 豆豆</p>
                        {plan.tag && <span className="text-[8px] font-black uppercase text-vibrant-orange bg-vibrant-orange/10 px-2 py-0.5 rounded">{plan.tag}</span>}
                     </div>
                     <span className="font-bold text-navy-900 text-sm">HKD {plan.price}</span>
                  </button>
                ))}
             </div>
             <p className="text-[10px] text-gray-400 text-center leading-relaxed">
               通过充值获取豆豆可用于直接购买笔记资料或支付跑腿报酬。所有交易受 Sycle 平台担保。
             </p>
          </div>

          <div className="bg-navy-50 rounded-[2.5rem] p-8 border border-navy-100">
             <h3 className="text-xl font-black text-navy-900 mb-8 flex items-center">
                <Trophy className="w-5 h-5 mr-3 text-yellow-500" /> 贡献风云榜
             </h3>
             <div className="space-y-6">
                {LEADERBOARD.map((user) => (
                  <div key={user.rank} className="flex items-center group">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center font-black text-navy-900 mr-4 shadow-sm group-hover:bg-navy-900 group-hover:text-white transition-all">
                        {user.rank}
                      </div>
                      {user.rank === 1 && <div className="absolute -top-2 -left-2 text-xl">👑</div>}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-navy-900 group-hover:text-vibrant-orange transition-colors">{user.name}</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{user.impact}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-navy-900">{user.points}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Points;
