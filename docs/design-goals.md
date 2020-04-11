---
id: designGoals
title: Design Goals
sidebar_label: Design Goals
---

> This is a high level view of AraCred. It does not intend to define mechanisms in a granular way, nor does it include all the mechanisms that might be part of an AraCred instance. It does, however, intend to provide intuition as to how the pieces fit together. 

_Special thanks to mzargham, METADREAMER, and the entire SourceCred community for creating the work that AraCred builds on._

## Vision

AraCred intends to empower communities to collaborate in a way that is positive-sum. It is expected that they will modify, augment, and tune the AraCred system to their own preferences. This might look like modifying the SourceCred parameters, changing DAO architectures, or creating secondary markets and use cases for on-chain tokens. AraCred does not aim to put people in a box, but rather to support and empower them to do what they want to do. We strive to design, deploy, and support mechanisms that are interoperable and encourage freedom of choice.

For this to be possible the core game mechanics of AraCred need to be as minimal as possible. That's why we're integrating with [Aragon](https://aragon.org/), [SourceCred](https://sourcecred.io/), and many more cool technologies that are modular, interoperable, and offer maximum freedom for users and developers. While AraCred = Aragon + Sourcecred, the most important part is not Aragon or SourceCred: it's the +. It's the bridge that combines them to create something greater than their parts. We intend to build this bridge so that you can swap out the contrbution tracking algorithm from SourceCred to any other mechanism. You can also swap out any type of DAO design that you want. We will provide sane defaults that often work good enough out of the box, but we encourage experimentation and exploration.

## AraCred Mechanisms

Concretely, what does all of this look like? 

### Off-chain / Side-chain Algorithms

Contributions to community discussions and code will be tracked and computed off-chain. This might include the summation of chats, emoji reactions, bots interactions, Quests, and more. These will happen on centralized Web2 platforms and servers. This data will then be mined via a reputation algorithm (we recommend SourceCred) to create scores that can be used to recognize and reward contributors. 

### On-chain Activity

Once you have scores for contributors, you can mint tokens based on those scores. Once tokens are on-chain eople can do whatever they want with them. This might look like taking out loans on your tokens, trading them, pooling them together in a MolochDAO to fund the commons around a project, putting them in a Colony to reward tasks, and much more. Whatever you want.

By giving people choices, they are empowered. People can create all sorts of dynamic and interesting mechanisms around their community. Some on-chain, some off-chain, but all awesome. This is what we want to encourage: more awesomeness.

## AraCred Tokeneconomics

By separating concerns of off-chain vs on-chain mechansisms we can create robust systems that are interoperable and composable. In the current architecture of AraCred there are 3 main components:
- Off-chain contributor scores: SourceCred 
- Bridge: the + of AraCred 
- On-chain tokens: the world of Ethereum

The tokens you give people can have any properties you want and be part of any DAO or contract you want. To give them both economic and governance value we recommend minting them in a DAO and creating an automated market for token exchange. This way tokens will always have a price based on supply and demand, and they will also have intrinsic value due to governance powers. There are a few easy ways to do this such as [Uniswap](https://uniswap.exchange/) or [Aragon Fundraising](https://fundraising.aragon.black/).  

### Uniswap

The Uniswap route is nice because it provides the greatest degree of flexibility. You can [create any type of DAO you want](https://mainnet.aragon.org/#/create), put some of the tokens on Uniswap, add liquidity, and ta-da: you have a price. It's modern magic.

### Aragon Fundraising

The benfit of using Aragon Fundraising is that you have a true [DAICO](https://ethresear.ch/t/explanation-of-daicos/465) model. People can buy your project's token, then use it within the context of your project. As they do, some of the funds from collateral pool of the token market can be allocated to support maintenance of the project itself. This way people creating a project have the incentives and support required to make the tokens valuable and in high demand, and the people who want those tokens always have a market from which they can buy tokens. 

### Both

Regardless of the DAO mechanism you choose, contributors will be rewarded in the project token and people who want to engage contributors will be able to buy project tokens. This means that the supply of tokens that are minted for contributions must be in line with the market demand otherwise you'll flood the market. A flooded market does not a happy community make. Thus, figuring out the supply schedule for community contributors is a must. 

### TL;DR:

You earn points for conributions. (off-chain) 

This then earns you tokens according to a payout strategy. (on-chain) 

Token balances are tracked in an on-chain ledger. (DAO)

There is a market for people to buy and sell tokens. (a bonding curve as well as secondary exchanges) 

People can use their tokens for things on-chain. (Moloch, Colony, DeFi, etc...)

People may or may not also be able to use tokens for in game features/rewards, but to do they might have to burn, stake, or trade their tokens. (dependent on the use case of each project)