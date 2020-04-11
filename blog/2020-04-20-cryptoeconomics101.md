---
id: Cryptoeconomics 101 
title: Cryptoeoconomics 101 
author: burrrata
author_title: Yet Another Piece of Cheese on the Internets
author_url: https://github.com/burrrata
author_image_url: https://avatars0.githubusercontent.com/u/42473928?s=460&u=5c30827a25c0658dc276db71fe05ec92d8395cde&v=4  
tags: [cryptoeconomics, aracred, burrrata]
---

> Mechanisms = words

> Protocols = sentences

> Composing protocols = paragraphs

> Economies = books

Composability is the key. Often a mechanism is fine on it's own, but when it's combined with other mechanisms the interaction creates new (and often unexpected!) things. Looking at mechanisms in isolation within a closed system does not work. On Ethereum any contract or protocol can be composed into another. This is why, esp for DeFi protocols, the cryptoeconomic analysis is just as important as the solidity security review - as oversights in both can cause unintended side effects, esp due to reinforcing feedback loops.

The complexity of a system increases exponentially the more complex the mechanisms and the more of them there are. Our brains can think through lots of stuff, but we are not equipped to think through complex non-linear systems in our heads. This is why we need modeling: unknown unknowns are often the biggest cause of economic ruin.

While Ethereum contracts are deterministic, they are also state dependent and if the state changes in unintended ways the contracts will behave in unintended ways. Blockchains computer over context. You're writing deterministic code that is conditional on the context of the state of the blockchain.

> Design ⇒ Test ⇒ Iterate ⇒ Deploy ⇒ Analyze ⇒ Iterate ⇒ Analyze ⇒ Etc...

### 1: Define design goals

What do you want to have happen? The goals of your system may vary, but one goal that is nearly universal is to have users be indifferent to gaming the system because they know there's very little value in doing so.

### 2: Identify principles

You want to design mechanisms where certain properties hold under all conditions. You know you have a mechanism when it cannot be broken down further. These are often things that relate to rights and/or access controls (permissions). They can be state dependent, but they execute deterministically based on the state.

### 3: Compose mechanisms into design patterns

Design patterns are a series of actions that will produce consistent and reproducible results. A "protocol" is just a design patter that has been written down in a programming language. Thinking through mechanisms and composing them into design patterns is essential for good systems that people can use in a variety of use cases and contexts.

### 4: Model design patterns

The mechanisms are the words, and the design patterns are the sentences. The more you understand the language the more expressive you can be to deliver the message desired (design goals). It's like having tools in a toolbox so that you don't become a man with a hammer. 

### 5: Test IRL

Theory only gets us so far. We need to start dogfooding the system in controlled and low-risk experiments. Then we can recycle our learnings back into improving the design and trying a new experiment. Yay science.

> Special thanks to Michael Zargham for walking me through all of this!