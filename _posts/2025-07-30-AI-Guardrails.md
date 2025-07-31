---
layout: post
title: AI Guardrails
---

**AI Guardrails: What’s important and what could go wrong?**

Artificial Intelligence (AI) will transform how we work, shop, and solve problems in our daily lives However, there could be serious mistakes if not properly identified early on with appropriate mitigations in place to eliminate serious mistakes.

Without appropriate **AI guardrails**, AI systems can inflict real harm on humans i.e. by giving wrong answers/results, incorrect decisions that may sounds too good but make absolute non-sense or even getting stuck in loops (or infinite loops to drive you mad). 

Below are common scenarios reflecting practical real-world examples:

---

### **1. Hallucinations: Making up non-sense**

AI models could sometimes generate entirely false responses/results/information. This is categorised as a **hallucination**. It’s not a bud or glitch in the software but there are known limitations in the systems where words and patterns are not clearly defined in the brains of the AI model.

**Example 1 - Customer refund:**

A customer shops at Amazon and asks an AI customer service bot if they can receive a refund for a recent purchase. The bot says: “Yes, we can definitely perform a refund on all purchases in 100 days”. The refund policy states for electronic devices 30 days refund and devices 100 days refund with proof of receipt. However, in this example there may be conflicting or misinterpretations on the types of items purchased creating conflicting results (aka hallucinations).  

**How to catch Hallucinations?**

- Cross check AI responses with current business or organisational policies, data or reports.
- Conduct relevant reviews of policies on critical scenarios esp finance and communications
- Verify sources of information in alignment to AI model used

---

### **2. Loops: Going round in circles and getting stuck in the same loop**

There are situations where AI could fall into a state of endless loops - especially in chats/conversations or automated tasks. There could be a number of reasons in which this could happen - unclear or undefined requirements / rules / conditions or just purely poor prompt design rendering the conversation into an infinite loop.

**Example 2 - Conversations not keep going round in circles**

A customer support AI bot could repeat “One moment, please wait while I check the details for you…” each time a customer repeats or re-states their issue. This situation then ends up being repetitive and useless where it will frustrate the customer without a clear response to move forward.

**How to prevent continuous loops?**

- Design and structure clearly defined conditions and worse case scenarios for conversations.
- Define and implement detection of loops (e.g., repeated statements, phrases or intentions).
- Where the AI bot cannot close a conversation, send the customer to a human customer service officer to resolve.

---

### **3. Bad Decisions: No logic and unethical**

If an AI agent was requested to make a decision based on logic and reasoning and however provides a decision that may not be logical or unethical which could pose safety concerns. There are a number of reasons why this could occur e.g. poor LLM training data or human intervention or human handoff system. 

**Example:**

An bank fraud detection system rejects a refund request from a customer because the user’s behaviour on the phone was inappropriate or deemed high risk. In actual fact, the user made a valid refund request. There was no human intervention to review the edge case.

**Checklist to Avoid Bad Decisions:**

- Use human checkpoints for high risk decisions that involve finance or health.
- Perform regular tests on decision models using real-world scenarios (+edge cases).
- Continue to monitor false positive and false negative rates in conversations and customer feedback closely.

---

### **4. Over-generalisation: One size fits all for all responses**

There are cases where AI agents can generalise or over-generalise based on the application of general rules to specific cases where they can’t seem to reason or appropriately respond to a given question. This leads to decisions or mixed messages that may appear to be reasonable but are completely off topic or does not make sense.

**Example:**

A healthcare AI agent responds to a customer or user that has chest pain to drink more water and to get some rest or sleep. However, this general response for common symptoms may appear true but underlying symptoms may never be correctly identified which is quite dangerous.  

**Checklist to Reduce Overgeneralization:**

- Apply risk management to user or customer profile with relevant profiling attributes
- Continue to train models using diverse range and volume of data sets (real world data)
- Apply safety nets and guardrails for topics which may be deemed high risk (health, legal, finance).

---

### Conclusion

There are many scenarios and situations in which AI needs **guardrails.** This could be technical, ethical, logical and procedural. If these are left unchecked without human intervention, then these systems could make repetitive mistakes causing reputational or personal damage. 

For organisations looking to apply guardrails - consider detailed checklists for developers, real-time monitoring tools, and human oversight for sensitive or high risk cases.

For personal guardrails - be mindful of responses driven by AI agents/bots, always think critically, proof check and validate responses through additional authentic references, primary or secondary resources.
