
import React, { useState } from 'react';
import { generateKnowledgeSummary } from '../services/geminiService';
import { BookOpen, FileText, Upload, Filter, Star, Loader2, Sparkles, AlertCircle, Search, ShieldCheck } from 'lucide-react';

const Knowledge: React.FC = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [contentSnippet, setContentSnippet] = useState('');
  const [aiSummary, setAiSummary] = useState('');
  const [isSummarizing, setIsSummarizing] = useState(false);

  const handleSummarize = async () => {
    if (!contentSnippet) return;
    setIsSummarizing(true);
    const summary = await generateKnowledgeSummary(contentSnippet);
    setAiSummary(summary);
    setIsSummarizing(false);
  };

  const MOCK_DOCS = [
    { id: '1', title: 'ECON1001 历年真题精解 (2018-2023)', faculty: '商学院', major: 'Economics', rating: 4.9, price: 50, uploader: 'HKU_Elite' },
    { id: '2', title: 'COMP2113 Data Structures 满分笔记', faculty: '工程学院', major: 'CS', rating: 4.8, price: 35, uploader: 'CodeWizard' },
    { id: '3', title: 'CCCH9001 中国文化精要 论文范文', faculty: '通识教育', major: 'Common Core', rating: 4.7, price: 40, uploader: 'EssayMaster' },
    { id: '4', title: 'MATH1013 微积分重点整理 (Midterm)', faculty: '理学院', major: 'Math', rating: 4.5, price: 20, uploader: 'Calclover' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-black text-navy-900 mb-3 tracking-tight">
            虚拟知识共享 <span className="text-vibrant-orange">Cycle</span>
          </h1>
          <p className="text-gray-500 text-lg">
            全港高校最高质量的学习资料流转站。用“豆豆”换取知识，让学霸笔记造福更多人。
          </p>
        </div>
        <button 
          onClick={() => setIsUploading(true)}
          className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-2xl font-bold flex items-center shadow-xl transition-all hover:-translate-y-1"
        >
          <Upload className="mr-2 w-5 h-5" /> 我要贡献资料
        </button>
      </div>

      {/* AI Tool Spotlight */}
      <div className="mb-12 bg-gradient-to-br from-navy-900 to-navy-800 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-vibrant-orange/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-vibrant-orange/20 text-vibrant-orange px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-vibrant-orange/30">
              <Sparkles className="w-3 h-3 mr-2" /> AI Feature
            </div>
            <h2 className="text-3xl font-bold mb-4">学霸笔记 AI 智能摘要</h2>
            <p className="text-navy-200 mb-8 leading-relaxed">
              上传你的笔记片段，AI 将自动分析核心知识点并生成高质量摘要。这能让你的资料更具吸引力，显著提升被下载的概率。
            </p>
            <div className="space-y-4">
              <textarea 
                value={contentSnippet}
                onChange={(e) => setContentSnippet(e.target.value)}
                placeholder="粘贴你的笔记正文、讲义重点或作业要求..."
                className="w-full h-40 bg-white/5 border border-white/10 rounded-2xl p-5 text-sm outline-none focus:border-vibrant-orange transition-all placeholder:text-white/20 resize-none"
              />
              <button 
                onClick={handleSummarize}
                disabled={isSummarizing || !contentSnippet}
                className="w-full bg-vibrant-orange hover:bg-vibrant-hover text-white py-4 rounded-xl font-bold transition-all disabled:opacity-50 flex items-center justify-center shadow-lg shadow-vibrant-orange/20"
              >
                {isSummarizing ? <Loader2 className="animate-spin w-5 h-5" /> : '立即生成智能摘要'}
              </button>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 min-h-[300px] flex flex-col justify-center relative backdrop-blur-sm">
            {aiSummary ? (
              <div className="animate-in fade-in zoom-in duration-700">
                <div className="flex items-center mb-6">
                   <div className="w-10 h-10 rounded-xl bg-vibrant-orange/20 flex items-center justify-center mr-4">
                      <Sparkles className="w-5 h-5 text-vibrant-orange" />
                   </div>
                   <span className="font-bold text-lg">AI 分析结果</span>
                </div>
                <div className="prose prose-invert max-w-none text-gray-300 italic leading-relaxed text-lg">
                  “{aiSummary}”
                </div>
                <button className="mt-8 text-vibrant-orange text-sm font-bold hover:underline flex items-center">
                  应用此摘要到我的资料 <ShieldCheck className="ml-2 w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="text-center">
                <FileText className="w-16 h-16 mx-auto mb-6 text-white/10" />
                <p className="text-white/30 font-medium">在左侧输入内容，AI 摘要将在此处实时生成</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm sticky top-24">
            <h3 className="font-bold text-navy-900 mb-6 flex items-center">
              <Filter className="w-4 h-4 mr-2 text-vibrant-orange" /> 资料筛选
            </h3>
            <div className="space-y-4">
              {['商学院', '工程学院', '社会科学', '医学/生命科学', '通识教育 (CC)'].map((cat) => (
                <label key={cat} className="flex items-center group cursor-pointer">
                  <div className="w-5 h-5 rounded border-2 border-gray-200 flex items-center justify-center group-hover:border-navy-900 transition-colors">
                    <div className="w-2.5 h-2.5 rounded-sm bg-vibrant-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-600 group-hover:text-navy-900 transition-colors">{cat}</span>
                </label>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-gray-50">
               <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                  <h4 className="flex items-center text-xs font-bold text-orange-800 mb-2">
                    <AlertCircle className="w-3.5 h-3.5 mr-1.5" /> 知识版权声明
                  </h4>
                  <p className="text-[10px] text-orange-700/80 leading-relaxed">
                    Sycle 鼓励原创笔记分享。禁止直接上传未经授权的官方试卷扫描件。
                  </p>
               </div>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-3 space-y-6">
          <div className="relative group">
             <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-navy-900 transition-colors" />
             <input 
              type="text" 
              placeholder="搜索课程代码 (如 COMP2113)、关键词或文件名..."
              className="w-full pl-14 pr-6 py-5 rounded-3xl border border-gray-100 bg-white shadow-sm outline-none focus:ring-4 focus:ring-navy-900/5 focus:border-navy-900 transition-all text-lg"
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MOCK_DOCS.map((doc) => (
              <div key={doc.id} className="bg-white border border-gray-100 p-8 rounded-[2rem] hover:shadow-2xl hover:border-vibrant-orange/20 transition-all flex flex-col h-full group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-navy-50 rounded-2xl flex items-center justify-center text-navy-900 group-hover:bg-navy-900 group-hover:text-white transition-all duration-300">
                    <BookOpen className="w-7 h-7" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-navy-900">{doc.price}</div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">豆豆豆</div>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-vibrant-orange transition-colors leading-tight">
                  {doc.title}
                </h4>
                
                <div className="flex items-center space-x-2 text-xs text-gray-400 font-bold uppercase tracking-wider mb-8">
                  <span className="bg-gray-100 px-2 py-0.5 rounded-md text-gray-600">{doc.faculty}</span>
                  <span>•</span>
                  <span>{doc.major}</span>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-50 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex items-center bg-yellow-400/10 px-2 py-1 rounded-lg mr-3">
                       <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500 mr-1" />
                       <span className="text-xs font-black text-yellow-700">{doc.rating}</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-bold">by {doc.uploader}</span>
                  </div>
                  <button className="bg-navy-900 text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-vibrant-orange transition-all shadow-md">
                    解锁全文
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
