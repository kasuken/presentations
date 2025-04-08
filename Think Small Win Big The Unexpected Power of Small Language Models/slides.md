---
background: https://source.unsplash.com/collection/94734566/1920x1080
title: "Think Small, Win Big: The Unexpected Power of Small Language Models"
author: "Emanuele Bartolesi"
transition: slide-left
class: text-center
theme: slidev-theme-dotnet-junkie
highlighter: shiki
---

# Think Small, Win Big
## The Unexpected Power of Small Language Models
## ---
### Emanuele Bartolesi | Senior Cloud Engineer @Xebia
### Charlize Vogelsinger | Copilot and Engineer @Xebia

---

## Bigger ≠ Always Better
- AI race has focused on **ever-growing LLMs**.
- More **parameters = better**? Not always!
  - The newest Llama 4 has 2T parameters
- The **trade-offs** of large models:
  - High computational cost 💰
  - Slower inference ⚡
  - Privacy concerns 🔒

---

## The Rise of Small Language Models (SLMs)
- **What is an SLM?**
  - Trained on **fewer parameters** but still effective.
  - More **efficient, faster, and cheaper**.
  - Ideal for **specific use cases and targeted applications**.
  - Max size: **7B parameters**.
  - It runs on my machine! ¯\\_(ツ)_/¯

---

## The Most Common Small Language Models
| **Model**          | **Size** | **Key Features** |
|---------------|------|--------------|
| **Mistral 7B** | 7B  | Open-weight, strong reasoning capabilities |
| **Hermes Llama 3 3B/13B** | 3B/13B | Balances efficiency and accuracy |
| **Phi-3** | 3.8B | Microsoft’s small yet powerful model |
| **Gemma 2B/7B** | 2B/7B | Google’s efficient model series |
| **Falcon 7B** | 7B  | Open-source, optimized for speed |
| **DeepSeek R1 Distill** | 7B | Distilled from larger models, high accuracy |
| **Smallthinker** | 3B | Reasoning for resource-constrained devices |

---

## Why Choose an SLM?
✅ **Lower inference cost** 💰  
✅ **Faster responses** ⚡  
✅ **Easier fine-tuning & deployment** 🛠️  
✅ **Greater privacy & on-prem options** 🔒  
✅ **For on-device applications** 📱

---

## When Do SLMs Outperform LLMs?
- **Edge computing & IoT** (limited resources)
- **On-premise AI** (privacy/security concerns)
- **Enterprise AI** (customized, fine-tuned models)
- **Low-latency AI assistants**

---

## Benchmarks: LLM vs. SLM Performance
### Speed & Latency ⚡
- **SLMs process responses 2-5x faster** than LLMs.
- Lower parameter count = **less computational overhead**.
- Ideal for **real-time applications**.

---

## Benchmarks: Cost Efficiency 💰
- **SLMs reduce API costs by 50-80%** compared to LLMs.
- Cloud GPU consumption is **significantly lower**.
- Fine-tuning **costs 3-10x less** than LLMs.

#### <br><br>Example: A bank spends > CHF 40K per month on a "secure" chatbot (Azure OpenAI GPT-4o)

---

## Benchmarks: Accuracy & Fine-Tuning 🎯
- **SLMs match or exceed LLMs** in domain-specific tasks.
- Work better with **structured prompts**.
- **Trade-off:** LLMs still excel in **zero-shot generalization**.

---

## Supercharging SLMs with RAG 🏎
- **Retrieval-Augmented Generation (RAG) boosts context awareness.**
- Allows an **SLM to function like an LLM**.
- Uses **external knowledge sources dynamically**.

---

## But what exactly is Retrieval-Augmented Generation (RAG)? 🤔
- **RAG combines retrieval and generation** to enhance AI capabilities.
- **Retrieval:** Fetches relevant information from external knowledge sources.
- **Augmentation:** Provides the AI model with context-rich data at runtime.
- **Generation:** Produces accurate, context-aware responses

---

## Key Benefits of RAG
✅ **Improves accuracy** by grounding responses in real data.  
✅ **Reduces hallucinations** by relying on external sources.  
✅ **Dynamic adaptability** to new information without retraining.  
✅ **Enhances user experience** with more relevant and accurate responses.  
✅ **Enables real-time updates** to knowledge bases.  
✅ **Supports domain-specific applications** with tailored responses.  
✅ **Scalable and flexible** for various use cases.  
✅ **Cost-effective** by leveraging existing data sources.

---

# Real-World Use Cases for SLMs 🌍

### **Healthcare / MedTech** 🏥
- **Medical assistants** for doctors and patients.
- **Summarizing medical records** for faster diagnosis on device.
- **Privacy-focused on-premise AI** for sensitive data.

--

### **Finance** 💰
- **Fraud detection** with real-time analysis.
- **Personalized financial advice** for customers.
- **Automated compliance checks** for regulatory requirements.

---

# Real-World Use Cases for SLMs 🌍

### **Insurance** ⚖️
- **Automated claims assessment** for faster processing
- **Instant policy recommendations** based on risk exposure
- **Real-time policy underwriting** assistance

--

### **Customer Support** 📞
- **Chatbots** for faster and more accurate responses.
- **Ticket classification** to prioritize customer issues.
- **Multilingual support** with low latency.

---

# Real-World Use Cases for SLMs 🌍

### **Retail & E-commerce** 🛒
- **Personalized product recommendations**.
- **Inventory management** with predictive analytics.
- **Dynamic pricing models** based on market trends.

--

### **Manufacturing** 🏭
- **Predictive maintenance** for machinery.
- **Supply chain optimization** with real-time data.
- **Quality control** using AI-powered analysis.

---

# Yes, but there are disadvantages too!
- **Total Cost of Ownership**  
-- hardware (cloud/on prem)  
-- fine-tuning vs. compute or API calls  
-- initial deployment and integration  
-- ops and maintenance  
-- staff expertise  
- **Size of the brain**  
-- Reduced general knowledge  
-- Less robust instruction following  
-- Limited multimodal capabilities  
-- Performance ceiling on very complex tasks

---

## The Future of SLMs 🔮
- **Hybrid models:** LLMs + SLMs working together.
- **More open-source alternatives** gaining traction.
- **SLMs enabling AI democratization.**

---

## Final Takeaways & Q&A 🎤
- **SLMs = cost-effective, faster, and more private.**
- **RAG enhances SLMs to compete with LLMs.**
- **AI’s future isn’t just about size—it’s about efficiency.**

### <br><br>*"Sometimes, small is the smarter choice."* 🚀
