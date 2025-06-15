---
background: https://source.unsplash.com/collection/94734566/1920x1080
title: "Think Small, Win Big: The Unexpected Power of Small Language Models"
author: "Emanuele Bartolesi"
transition: slide-left
class: text-center
theme: the-unnamed
highlighter: shiki
layout: cover

themeConfig:
  color: "#F3EFF5"
  background: "#161C2C"

  code-background: "#0F131E"
  code-border: "#242d34"

  accents-teal: "#44FFD2"
  accents-yellow: "#FFE45E"
  accents-red: "#FE4A49"
  accents-lightblue: "#15C2CB"
  accents-blue: "#5EADF2"
  accents-vulcan: "#0E131F"

  header-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  default-headingBg: var(--slidev-theme-accents-yellow)
  default-headingColor: var(--slidev-theme-accents-vulcan)
  default-background: var(--slidev-theme-background)

  center-headingBg: var(--slidev-theme-accents-blue)
  center-headingColor: var(--slidev-theme-accents-vulcan)
  center-background: var(--slidev-theme-background)

  cover-headingBg: var(--slidev-theme-accents-teal)
  cover-headingColor: var(--slidev-theme-accents-vulcan)
  cover-background: var(--slidev-theme-background)

  section-headingBg: var(--slidev-theme-accents-lightblue)
  section-headingColor: var(--slidev-theme-accents-vulcan)
  section-background: var(--slidev-theme-background)

  aboutme-h1: 'font-size: 2.5rem'

  aboutme-background: var(--slidev-theme-color)
  aboutme-color: var(--slidev-theme-background)
  aboutme-helloBg: var(--slidev-theme-accents-yellow)
  aboutme-helloColor: var(--slidev-theme-background)
  aboutme-nameColor: var(--slidev-theme-accents-red)
---

# Think Small, Win Big
## The Unexpected Power of Small Language Models
## ---
### Emanuele Bartolesi | Senior Cloud Engineer @Xebia

---

# Bigger ≠ Always Better
- AI race has focused on **ever-growing LLMs**.
- More **parameters = better**? Not always!
  - The newest Llama 4 has 2T parameters
- The **trade-offs** of large models:
  - High computational cost 💰
  - Slower inference ⚡

---

# The Rise of Small Language Models (SLMs)
- **What is an SLM?**
  - Trained on **fewer parameters** but still effective.
  - More **efficient, faster, and cheaper**.
  - Ideal for **specific use cases and targeted applications**.
  - Max size: **7B parameters**.
  - It runs on my machine! ¯\\_(ツ)_/¯

---

# The Most Common Small Language Models
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

# How Does an SLM Work? 🧠

- At its core, an SLM is a **smaller transformer model** trained on large text datasets.
- It **learns to predict the next word** based on context — just like LLMs.
- The key difference? ✂️ **Fewer layers and parameters** → faster inference, lower memory use.
- Often trained on **domain-specific or high-quality curated data**.

---

# Under the Hood: Anatomy of an SLM 🔍

- **Tokenizer**: Converts input text into numerical tokens  
- **Embedding Layer**: Transforms tokens into vector representations  
- **Transformer Blocks**: Attention mechanisms process context  
- **Output Layer**: Predicts next tokens or generates responses  

⚡ Fewer transformer blocks = **faster and lighter** execution.

---

# Training & Optimization Strategies 🎯

- **Distillation**: Compresses knowledge from a large model into a smaller one  
- **Quantization**: Uses lower-precision math (e.g., int4/int8) to reduce memory  
- **Fine-tuning**: Customizes the SLM on specific tasks or data  
- **RAG Integration**: Compensates for smaller model size with external knowledge retrieval

📦 Result: A model that’s efficient, targeted, and surprisingly capable.

---

# How Inference Works in an SLM ⚙️

- Inference = **“predict the next token”**, one step at a time.
- Each prediction depends on:
  - The **input prompt** (tokens already generated)
  - The model’s **internal state** (attention context)
- The output is a **token**, decoded back into a word or part of a word.
- Repeats until:
  - A stop token is reached 🛑
  - Max length is hit  
  - Or your app says “that’s enough”

🔁 This is why **token limits** matter — and why **latency scales with input length**.

---

# Inference Flow: Token by Token 🧠➕️📝

```mermaid
flowchart LR
    A[User Prompt] --> B[Tokenizer]
    B --> C[Token IDs]
    C --> D[Transformer Blocks (SLM)]
    D --> E[Next Token Prediction]
    E --> F[Decoder]
    F --> G[Updated Prompt with New Token]
    G --> H{Stop?}
    H -- No --> C
    H -- Yes --> I[Final Response]
```

* The model **loops** through this process for each new token.
* Output builds word by word, in real time.
* Faster with **smaller models** due to fewer transformer blocks.

---

# Why Choose an SLM?
✅ **Lower inference cost** 💰  
✅ **Faster responses** ⚡  
✅ **Easier fine-tuning & deployment** 🛠️  
✅ **Greater privacy & on-prem options** 🔒  
✅ **For on-device applications** 📱

---

# Benchmarks: Performance
When Do SLMs Outperform LLMs?
- **Edge computing & IoT** (limited resources)
- **On-premise AI** (privacy/security concerns)
- **Enterprise AI** (customized, fine-tuned models)
- **Low-latency AI assistants** (real-time responses)

---

# Benchmarks: Cost Efficiency 💰
- **SLMs reduce API costs by 50-80%** compared to LLMs.
- Cloud GPU consumption is **significantly lower**.
- Fine-tuning **costs 3-10x less** than LLMs.

---

# Benchmarks: Accuracy & Fine-Tuning 🎯
- **SLMs match or exceed LLMs** in domain-specific tasks.
- Work better with **structured prompts**.
- **Trade-off:** LLMs still excel in **zero-shot generalization**.

---

# Supercharging SLMs with RAG 🏎
- **Retrieval-Augmented Generation (RAG) boosts context awareness.**
- Allows an **SLM to function like an LLM**.
- Uses **external knowledge sources dynamically**.

---

# But what exactly is Retrieval-Augmented Generation (RAG)? 🤔
- **RAG combines retrieval and generation** to enhance AI capabilities.
- **Retrieval:** Fetches relevant information from external knowledge sources.
- **Augmentation:** Provides the AI model with context-rich data at runtime.
- **Generation:** Produces accurate, context-aware responses

---

# Key Benefits of RAG
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

# The Future of SLMs 🔮
- **Hybrid models:** LLMs + SLMs working together.
- **More open-source alternatives** gaining traction.
- **Privacy-First AI** for enterprises.
- **SLMs enabling "AI democratization".**


### <br><br>*"Sometimes, small is the smarter choice."* 🚀

---
layout: about-me

helloMsg: "git stash -m 💩"
name: Emanuele Bartolesi
imageSrc: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sdc2bpiftpadibi4h51c.gif
job: Senior Cloud Engineer
line1: "Microsoft MVP & GitHub Star ⭐"
line2: ""
social1: "@kasuken"
social2: emanuelebartolesi.com
social3: emanueleb@outolook.com
---