
import React, { useState } from 'react';
import { ErrandTask } from '../types';
import { Truck, MapPin, User, Package, ChevronRight, Clock, CheckCircle2, CircleDashed, ShieldAlert, ShoppingCart, Navigation, Info, X } from 'lucide-react';

const Errands: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'available' | 'my-tasks'>('available');
  const [selectedTask, setSelectedTask] = useState<ErrandTask | null>(null);

  const MOCK_ERRANDS: (ErrandTask & { distance: string; details: string })[] = [
    { id: '1', type: 'delivery', title: '代取顺丰快递：SF353 柜', reward: 15, status: 'pending', location: 'HKU MTR Exit A', anonymousName: '神秘考拉', distance: '350m', details: '包裹较轻，MTR 出口即达。' },
    { id: '2', type: 'purchase', title: 'Starbucks 代购：特大杯拿铁 (不加糖)', reward: 12, status: 'ongoing', location: 'Library Main Entrance', anonymousName: '闪电蜗牛', distance: '120m', details: '需要在图书馆前门交付。' },
    { id: '3', type: 'pickup', title: '图书馆打印资料代取 (15页)', reward: 8, status: 'pending', location: 'CUHK Pi-Chiu Building', anonymousName: '极地冰狐', distance: '800m', details: '已在线支付，凭二维码取件。' },
    { id: '4', type: 'purchase', title: '7-11 代买：三文治+维他奶', reward: 10, status: 'pending', location: 'PolyU Core S', anonymousName: '飞天袋鼠', distance: '450m', details: '维他奶要原味的。' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <CircleDashed className="w-4 h-4 text-blue-400 animate-pulse" />;
      case 'ongoing': return <Clock className="w-4 h-4 text-vibrant-orange animate-spin-slow" />;
      case 'completed': return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      default: return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Info Panel */}
        <div className="lg:col-span-4 space-y-8">
          <div>
            <h1 className="text-4xl font-black text-navy-900 mb-4 tracking-tight">同学互助 <span className="text-vibrant-orange">Helper</span></h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              利用顺路时间变现。发布取件、代购、代跑腿任务。
            </p>
          </div>

          <div className="bg-navy-900 rounded-[2rem] p-8 text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-vibrant-orange/20 rounded-full blur-3xl -translate-y-1/2"></div>
             <h3 className="text-xl font-bold mb-6 flex items-center">
                <ShieldAlert className="mr-3 text-vibrant-orange" /> 隐私保护系统
             </h3>
             <div className="space-y-6">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                   <p className="text-[10px] text-navy-300 font-black uppercase tracking-widest mb-2">当前随机生成的代号</p>
                   <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-vibrant-orange to-red-400 mr-3 shadow-inner"></div>
                      <span className="font-black text-lg">优雅的企鹅 #829</span>
                      <button className="ml-auto text-[10px] text-vibrant-orange font-bold hover:underline">刷新身份</button>
                   </div>
                </div>
             </div>
          </div>

          <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center space-x-4">
             <Navigation className="w-6 h-6 text-vibrant-orange" />
             <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">当前定位</p>
                <p className="text-sm font-bold text-navy-900">香港理工大学 Z Core 附近</p>
             </div>
          </div>
        </div>

        {/* Right Task List */}
        <div className="lg:col-span-8 space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="bg-navy-50 p-1.5 rounded-2xl flex border border-navy-100 w-full sm:w-auto">
              <button 
                onClick={() => setActiveTab('available')}
                className={`flex-1 sm:flex-none px-8 py-3 rounded-xl font-bold text-sm transition-all ${
                  activeTab === 'available' ? 'bg-white text-navy-900 shadow-sm' : 'text-gray-500 hover:text-navy-900'
                }`}
              >
                待领取任务
              </button>
              <button 
                onClick={() => setActiveTab('my-tasks')}
                className={`flex-1 sm:flex-none px-8 py-3 rounded-xl font-bold text-sm transition-all ${
                  activeTab === 'my-tasks' ? 'bg-white text-navy-900 shadow-sm' : 'text-gray-500 hover:text-navy-900'
                }`}
              >
                进行中 / 已发
              </button>
            </div>
            <button className="w-full sm:w-auto bg-vibrant-orange hover:bg-vibrant-hover text-white px-8 py-3 rounded-2xl font-black shadow-lg shadow-vibrant-orange/20 transition-all">
              发布新任务
            </button>
          </div>

          <div className="space-y-4">
            {MOCK_ERRANDS.map((task) => (
              <div key={task.id} className="bg-white p-6 sm:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:border-navy-900/10 hover:shadow-xl transition-all group">
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="flex-1 flex items-start space-x-5">
                    <div className={`p-4 rounded-2xl flex-shrink-0 ${
                      task.type === 'delivery' ? 'bg-blue-50 text-blue-600' : 
                      task.type === 'purchase' ? 'bg-orange-50 text-vibrant-orange' : 
                      'bg-purple-50 text-purple-600'
                    }`}>
                      {task.type === 'delivery' ? <Package className="w-6 h-6" /> : 
                       task.type === 'purchase' ? <ShoppingCart className="w-6 h-6" /> : 
                       <User className="w-6 h-6" />}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-xl font-bold text-navy-900 group-hover:text-vibrant-orange transition-colors">{task.title}</h3>
                        <span className="bg-vibrant-orange/10 text-vibrant-orange text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">
                          距离 {task.distance}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 items-center">
                        <div className="flex items-center text-xs text-gray-400 font-bold bg-gray-50 px-2 py-1 rounded-lg">
                          <User className="w-3 h-3 mr-1.5" /> {task.anonymousName}
                        </div>
                        <div className="flex items-center text-xs text-gray-500 font-medium">
                          <MapPin className="w-3.5 h-3.5 mr-1.5 text-navy-300" /> {task.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 w-full md:w-auto">
                    <div className="text-right">
                      <div className="text-3xl font-black text-navy-900">+{task.reward}</div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">豆豆豆</span>
                    </div>
                    <button 
                      onClick={() => setSelectedTask(task)}
                      className="flex-1 md:flex-none bg-navy-900 text-white px-8 py-4 rounded-2xl font-bold text-sm flex items-center justify-center transition-all hover:bg-vibrant-orange"
                    >
                      抢单详情
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grab Order Modal */}
      {selectedTask && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-navy-900/60 backdrop-blur-sm animate-in fade-in duration-300">
           <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
              <div className="p-8 space-y-8">
                 <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                       <div className="w-12 h-12 bg-navy-50 rounded-2xl flex items-center justify-center">
                          <Info className="w-6 h-6 text-navy-900" />
                       </div>
                       <h2 className="text-2xl font-black text-navy-900">任务详情</h2>
                    </div>
                    <button onClick={() => setSelectedTask(null)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                       <X className="w-6 h-6 text-gray-400" />
                    </button>
                 </div>

                 <div className="space-y-6">
                    <div className="bg-navy-50 p-6 rounded-3xl">
                       <h3 className="text-lg font-bold text-navy-900 mb-2">{selectedTask.title}</h3>
                       <div className="flex items-center text-vibrant-orange font-bold text-sm">
                          <Navigation className="w-4 h-4 mr-2" /> 距离您约 {selectedTask.distance}
                       </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-4 border border-gray-100 rounded-2xl">
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">取货地点</p>
                          <p className="text-sm font-bold text-navy-900">{selectedTask.location}</p>
                       </div>
                       <div className="p-4 border border-gray-100 rounded-2xl">
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">预计报酬</p>
                          <p className="text-sm font-bold text-vibrant-orange">{selectedTask.reward} 豆豆</p>
                       </div>
                    </div>

                    <div className="p-4 bg-orange-50 border border-orange-100 rounded-2xl">
                       <p className="text-[10px] font-black text-orange-800 uppercase tracking-widest mb-1">补充说明</p>
                       <p className="text-sm text-orange-900 leading-relaxed">
                          {(selectedTask as any).details}
                       </p>
                    </div>
                 </div>

                 <button 
                  onClick={() => {
                    alert('抢单成功！请尽快与对方联系。');
                    setSelectedTask(null);
                  }}
                  className="w-full bg-navy-900 hover:bg-vibrant-orange text-white py-5 rounded-3xl font-black text-lg transition-all shadow-xl shadow-navy-900/20 active:scale-95"
                 >
                    确认抢单
                 </button>
                 <p className="text-center text-[10px] text-gray-400 font-medium">抢单后请在 30 分钟内完成，超时将扣除个人信用分。</p>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default Errands;
