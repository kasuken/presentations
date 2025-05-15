---
background: https://plus.unsplash.com/premium_photo-1718306013082-eb1c58ff973a
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
### Charlize Vogelsinger | Senior Expert Transformation & Engineering @Xebia

---

## Bigger ≠ Always Better
- AI race has focused on **ever-growing LLMs**.
- More **parameters = better**? Not always!
  - The newest Llama 4 has 2T parameters
- The **trade-offs** of large models:
  - High computational cost 💰
  - Slower inference ⚡

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
| **Model**                  | **Size**   | **Key Features**                                  |
| ---------------------- | ------ | --------------------------------------------- |
| **Phi-4-mini** | 3.8B | Microsoft’s small yet powerful model, advanced reasoning available |
| **DeepSeek R1 Distill** | 7B | Distilled from larger models, high accuracy |
| **II-Medical-8B** | 8B | specifically engineered to enhance AI-driven medical reasoning |
| **Mistral 7B** | 7B  | Open-weight, strong reasoning capabilities |
| **Hermes Llama 3 3B/13B** | 3B/13B | Balances efficiency and accuracy |
| **Gemma 2B/7B** | 2B/7B | Google’s efficient model series |
| **Falcon 7B** | 7B  | Open-source, optimized for speed |


---

## Why Choose an SLM?
✅ **Lower inference cost** 💰  
✅ **Faster responses** ⚡  
✅ **Easier fine-tuning & deployment** 🛠️  
✅ **Greater privacy & on-prem options** 🔒  
✅ **For on-device applications** 📱

---

## Benchmarks: Performance 🚀
When Do SLMs Outperform LLMs?
- **Edge computing & IoT** (limited resources)
- **On-premise AI** (privacy/security concerns)
- **Enterprise AI** (customized, fine-tuned models)
- **Low-latency AI assistants** (real-time responses)

---

## Benchmarks: Cost Efficiency 💰
- **SLMs reduce API costs by 50-80%** compared to LLMs.
- Cloud GPU consumption is **significantly lower**.
- Fine-tuning **costs 3-10x less** than LLMs.

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

# Demo
- LM Studio
- AnythingLLM

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
- **Privacy-First AI** for enterprises.
- **SLMs enabling "AI democratization".**


### <br><br>*"Sometimes, small is the smarter choice."* 🚀

---
transition: slide-up
layout: speaker-info

headerMessage: git commit -m "💩"
speakerName: Emanuele Bartolesi
imageSrc: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sdc2bpiftpadibi4h51c.gif
jobTitle: Senior Cloud Engineer
info1: Microsoft MVP & GitHub Star ⭐
info2: 
social1: kasuken
social2: emanuelebartolesi.com
social3: emanueleb@outolook.com
---

---
transition: slide-up
layout: speaker-info

headerMessage: Always be bold! And thanks for all the fish
speakerName: Charlize Vogelsinger
imageSrc: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sdc2bpiftpadibi4h51c.gif
jobTitle: Senior Expert Transformation & Engineering
info1: Checkout my Github Gist 👇
info2: https://gist.github.com/xyzcharlize/dc6b3e3b0ab6a1078cf7901ae1595ce5
social1: xyzcharlize
social2: xyzcharlize@proton.me
social3: charlize.vogelsinger@xebia.com
---