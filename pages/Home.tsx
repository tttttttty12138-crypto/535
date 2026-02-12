
import React from 'react';
import { Page } from '../types';
import { UNIVERSITIES } from '../constants';
import { ArrowRight, ShoppingBag, BookOpen, Truck, ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: Page) => void;
  onVerify: () => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage, onVerify }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center overflow-hidden bg-navy-900">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-vibrant-orange/20 text-vibrant-orange px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8 border border-vibrant-orange/30 animate-pulse">
              Exclusive for HK Students
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-none mb-8 tracking-tighter">
              同学间的<br />
              <span className="text-vibrant-orange">资源流转</span> 枢纽
            </h1>
            <p className="text-xl text-navy-200 mb-10 leading-relaxed max-w-xl font-medium">
              不再局限于二手买卖。Sycle 连接全港高校，整合 <span className="text-white font-bold">AI 学术共享</span>、<span className="text-white font-bold">同学跑腿互助</span> 与 <span className="text-white font-bold">积分经济</span>，打造纯净的校园生态。
            </p>
            <div className="flex flex-wrap gap-5">
              <button 
                onClick={() => setCurrentPage(Page.Market)}
                className="bg-vibrant-orange hover:bg-vibrant-hover text-white px-10 py-5 rounded-3xl font-black transition-all flex items-center shadow-2xl shadow-vibrant-orange/30 hover:-translate-y-1 active:scale-95"
              >
                探索社区 <ArrowRight className="ml-3 w-6 h-6" />
              </button>
              <button 
                onClick={onVerify}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/20 px-10 py-5 rounded-3xl font-black transition-all flex items-center hover:-translate-y-1 active:scale-95"
              >
                <ShieldCheck className="mr-3 w-6 h-6 text-vibrant-orange" /> 学生认证
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Highlights */}
      <section className="py-24 bg-white relative -mt-20 z-20 rounded-[4rem] shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'AI 驱动的知识库',
                tag: 'Academic',
                desc: '上传笔记，AI 自动生成知识图谱与摘要。用“豆豆”换取学霸真传，让复习不再迷茫。',
                icon: <Sparkles className="w-10 h-10 text-vibrant-orange" />,
                action: () => setCurrentPage(Page.Knowledge),
                color: 'bg-orange-50'
              },
              {
                title: '同学跑腿互助',
                tag: 'Helper',
                desc: '代取顺丰、Starbucks 跑腿、代领外卖。利用碎片化时间，在顺便的路途中赚取豆豆。',
                icon: <HeartHandshake className="w-10 h-10 text-blue-500" />,
                action: () => setCurrentPage(Page.Errands),
                color: 'bg-blue-50'
              },
              {
                title: '无现金循环体系',
                tag: 'Economy',
                desc: '全程采用“豆豆积分”结算。避免同学间谈钱的尴尬，通过贡献资料或跑腿换取全港生活福利。',
                icon: <ShoppingBag className="w-10 h-10 text-green-500" />,
                action: () => setCurrentPage(Page.Points),
                color: 'bg-green-50'
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="p-10 rounded-[3rem] border border-gray-100 hover:shadow-2xl transition-all cursor-pointer group hover:-translate-y-4"
                onClick={feature.action}
              >
                <div className={`mb-8 inline-flex p-6 rounded-3xl ${feature.color} group-hover:bg-navy-900 group-hover:text-white transition-colors duration-500`}>
                  {feature.icon}
                </div>
                <div className="text-[10px] font-black text-vibrant-orange uppercase tracking-[0.3em] mb-4">{feature.tag}</div>
                <h3 className="text-2xl font-black text-navy-900 mb-6">{feature.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed font-medium">{feature.desc}</p>
                <div className="flex items-center text-navy-900 font-black text-sm group-hover:text-vibrant-orange">
                  进入板块 <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Trust */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-navy-900 mb-16">连接全港主流院校</h2>
          <div className="flex flex-wrap justify-center items-center gap-16 grayscale opacity-40 hover:opacity-100 transition-opacity">
            {UNIVERSITIES.map((uni, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <img src={uni.logo} alt={uni.name} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" />
                <span className="font-black text-navy-900 tracking-tight">{uni.name.split(' ')[0]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
