
import React, { useState, useEffect } from 'react';
import { ShieldCheck, Mail, CreditCard, Bell, Lock, History, Bookmark, Settings, CheckCircle, Calendar, Sparkles, TrendingUp, Info, Clock, CheckCircle2 } from 'lucide-react';
import { getAcademicSellingAdvice } from '../services/geminiService';

const Profile: React.FC = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [aiAdvice, setAiAdvice] = useState('正在为您分析学期进度...');

  useEffect(() => {
    const fetchAdvice = async () => {
      // Current context: End of Semester 1
      const advice = await getAcademicSellingAdvice("当前为第1学期末，期末考 (Final Exams) 即将开始，学生普遍压力大，需要复习资料，且部分人准备离港短休");
      setAiAdvice(advice);
    };
    fetchAdvice();
  }, []);

  const TIMELINE_EVENTS = [
    { date: '9月1日', title: '入学与注册 (Registration)', status: 'completed', desc: '开启港硕生活！初到香港，适应期。' },
    { date: '10月20日', title: 'Midterm 爆发期 (Quiz & Project)', status: 'completed', desc: 'Group Project 压力最大的时期。' },
    { date: '11月15日', title: '作业截止潮 (Assignments Deadline)', status: 'completed', desc: '熬夜赶 Deadline 的日子。' },
    { date: '12月10日', title: '期末考 & 结课 (Finals)', status: 'current', desc: 'Final Season，资料交易需求最高峰！', advice: '建议发布：复习笔记、历年试题。' },
    { date: '1月15日', title: '第2学期开课 (Sem 2 Start)', status: 'upcoming', desc: '新学期，书本换购季。' },
    { date: '5月20日', title: '毕业季/退房潮 (Graduation & Moving)', status: 'upcoming', desc: '离港前的大件家具处理黄金期。', advice: '预热：处理加湿器、移动空调。' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Profile Summary */}
        <div className="lg:col-span-4 space-y-6">
           <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 text-center shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-navy-900 to-navy-700"></div>
              <div className="relative z-10 mt-8">
                 <div className="relative inline-block mb-4">
                    <div className="w-28 h-28 rounded-full bg-navy-100 border-4 border-white shadow-xl overflow-hidden mx-auto">
                       <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=LiMing" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    {isVerified && <CheckCircle className="absolute bottom-0 right-0 text-vibrant-orange bg-white rounded-full w-8 h-8 p-1 shadow-lg" />}
                 </div>
                 <h2 className="text-2xl font-black text-navy-900">Li Ming</h2>
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">香港理工大学 • 设计系 (港硕)</p>
                 <div className="flex justify-around py-6 border-y border-gray-50">
                    <div className="text-center">
                       <p className="font-black text-navy-900 text-xl">12</p>
                       <p className="text-[10px] text-gray-400 font-bold uppercase">交易</p>
                    </div>
                    <div className="text-center border-x border-gray-50 px-8">
                       <p className="font-black text-navy-900 text-xl">8</p>
                       <p className="text-[10px] text-gray-400 font-bold uppercase">互助</p>
                    </div>
                    <div className="text-center">
                       <p className="font-black text-navy-900 text-xl">1,248</p>
                       <p className="text-[10px] text-gray-400 font-bold uppercase">豆豆</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* AI Selling Advisor Widget */}
           <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-vibrant-orange/10 rounded-full blur-3xl -translate-y-1/2"></div>
              <div className="flex items-center mb-6">
                 <div className="p-3 bg-vibrant-orange/20 rounded-2xl mr-4 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-6 h-6 text-vibrant-orange" />
                 </div>
                 <h3 className="text-xl font-bold">AI 智能管家</h3>
              </div>
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl mb-6 backdrop-blur-sm">
                 <div className="text-xs font-black text-vibrant-orange uppercase tracking-widest mb-3">学期流转建议：</div>
                 <p className="text-sm leading-relaxed italic text-gray-200">
                   “{aiAdvice}”
                 </p>
              </div>
              <button className="w-full bg-vibrant-orange hover:bg-vibrant-hover text-white py-4 rounded-2xl font-black text-sm transition-all shadow-lg active:scale-95 flex items-center justify-center">
                 立即同步至交易区 <TrendingUp className="ml-2 w-4 h-4" />
              </button>
           </div>
        </div>

        {/* Right Details */}
        <div className="lg:col-span-8 space-y-10">
           {/* AI Academic Timeline */}
           <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 sm:p-12 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
                 <div>
                    <h3 className="text-2xl font-black text-navy-900 flex items-center">
                       <Calendar className="w-7 h-7 mr-3 text-vibrant-orange" /> 港硕学研日志 (AI 整理)
                    </h3>
                    <p className="text-sm text-gray-400 font-medium mt-1">自动同步学校教务日历，智能预测资源需求</p>
                 </div>
                 <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-navy-900"></div>
                    <span className="text-[10px] font-bold text-gray-400">已结课</span>
                    <div className="w-3 h-3 rounded-full bg-vibrant-orange ml-4"></div>
                    <span className="text-[10px] font-bold text-gray-400">进行中</span>
                 </div>
              </div>
              
              <div className="relative">
                 {/* Vertical line with gradient */}
                 <div className="absolute left-[19px] top-2 bottom-2 w-1 bg-gradient-to-b from-navy-900 via-navy-200 to-gray-100 rounded-full"></div>
                 
                 <div className="space-y-12">
                    {TIMELINE_EVENTS.map((event, i) => (
                       <div key={i} className="relative flex items-start space-x-12 pl-12">
                          {/* Circle indicator */}
                          <div className={`absolute left-0 w-10 h-10 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center transition-all ${
                             event.status === 'completed' ? 'bg-navy-900 text-white' :
                             event.status === 'current' ? 'bg-vibrant-orange text-white animate-pulse scale-110' : 'bg-white border-gray-100 text-gray-300'
                          }`}>
                             {event.status === 'completed' ? <CheckCircle2 className="w-5 h-5" /> : 
                              event.status === 'current' ? <Clock className="w-5 h-5" /> : null}
                          </div>
                          
                          <div className={`flex-1 p-8 rounded-[2rem] border transition-all hover:-translate-x-1 ${
                             event.status === 'current' ? 'bg-navy-50 border-vibrant-orange shadow-xl' : 'bg-white border-gray-50'
                          }`}>
                             <div className="flex justify-between items-center mb-4">
                                <span className={`text-[10px] font-black uppercase tracking-widest ${
                                   event.status === 'current' ? 'text-vibrant-orange' : 'text-gray-400'
                                }`}>
                                   {event.date}
                                </span>
                             </div>
                             <h4 className={`text-xl font-bold mb-3 ${
                                event.status === 'completed' ? 'text-gray-400' : 'text-navy-900'
                             }`}>
                                {event.title}
                             </h4>
                             <p className="text-sm text-gray-500 font-medium leading-relaxed">{event.desc}</p>
                             
                             {event.advice && (
                                <div className="mt-6 flex items-center p-3 bg-white rounded-xl border border-gray-100">
                                   <div className="p-1.5 bg-orange-100 rounded-lg mr-3">
                                      <Sparkles className="w-3.5 h-3.5 text-vibrant-orange" />
                                   </div>
                                   <span className="text-xs font-bold text-navy-800">{event.advice}</span>
                                </div>
                             )}
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Account Settings */}
           <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-navy-900 mb-8 flex items-center">
                 <Settings className="w-6 h-6 mr-3 text-vibrant-orange" /> 偏好设置
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 <div className="space-y-6">
                    <div className="flex items-center justify-between">
                       <span className="text-sm font-bold text-navy-800">AI 智能推送</span>
                       <div className="w-10 h-5 bg-vibrant-orange rounded-full relative p-1 cursor-pointer">
                          <div className="w-3 h-3 bg-white rounded-full ml-auto"></div>
                       </div>
                    </div>
                    <div className="flex items-center justify-between">
                       <span className="text-sm font-bold text-navy-800">任务自动抢单(Beta)</span>
                       <div className="w-10 h-5 bg-gray-200 rounded-full relative p-1 cursor-pointer">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                       </div>
                    </div>
                 </div>
                 <div className="space-y-6">
                    <div className="flex items-center justify-between">
                       <span className="text-sm font-bold text-navy-800">匿名发布模式</span>
                       <div className="w-10 h-5 bg-vibrant-orange rounded-full relative p-1 cursor-pointer">
                          <div className="w-3 h-3 bg-white rounded-full ml-auto"></div>
                       </div>
                    </div>
                    <button className="text-xs font-bold text-vibrant-orange hover:underline">查看所有隐私协议...</button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
