
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateKnowledgeSummary = async (content: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an academic assistant for Hong Kong university students. 
      Analyze the following course note fragment and provide a concise, professional summary (around 100 words) in Chinese. 
      Highlight the key concepts and potential exam value.
      
      Content: ${content}`,
      config: {
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    });
    return response.text || "无法生成摘要，请检查输入内容。";
  } catch (error) {
    console.error("AI Summary Error:", error);
    return "摘要生成失败，请稍后重试。";
  }
};

export const getAcademicSellingAdvice = async (academicStatus: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `你是一名专注香港港硕留学生生活的AI管家“Sycle助手”。根据当前学期进度：${academicStatus}，
      给出一条针对性的“闲置变现”建议。例如：期末将至，建议整理笔记出售；学期结束，建议处理大件家具。
      语言要亲切、有活力，带有香港留学生常用词汇，字数在60字以内。`,
      config: {
        temperature: 0.8,
        maxOutputTokens: 150,
      }
    });
    return response.text || "学期繁忙，记得劳逸结合哦！";
  } catch (error) {
    return "快去整理你的学霸笔记换取豆豆吧！";
  }
};

export const getAIAssistantMessage = async (context: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `你是一个可爱的数字人小助手，名字叫“豆豆”。你生活在Sycle留学生社区。
      当前情景：${context}。
      请说一句话来鼓励用户或者提醒用户。字数控制在40字以内，语气活泼友好。`,
      config: {
        temperature: 0.9,
        maxOutputTokens: 100,
      }
    });
    return response.text || "哈喽！今天也是努力的一天呢！";
  } catch (error) {
    return "加油同学，有什么我可以帮你的吗？";
  }
};
