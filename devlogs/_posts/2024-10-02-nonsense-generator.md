---
layout: post
title: Using a Markov chain to generate readable nonsense
excerpt: Got inspired by a video and article to make a "readable nonsense generator".
tags: devlog gamedev experiment
comments_id: 12
---

I recently saw [this video](https://youtu.be/PcMua73C_94). In it, at [one point](https://youtu.be/PcMua73C_94?t=818) jdh shows off a level transition screen they made with randomly generated nonsense text. This immediately caught my attention, and after checking out [the article](https://benhoyt.com/writings/markov-chain/) in the description, I realized it was way easier than I imagined. I then started implementing it in Godot.

Like jdh, I also used Percy Shelley to start with (I'm not going to act as if I knew of Shelley before, tbh).

<video controls muted src="../assets/images/2024-10-02-nonsense-generator/2024-10-01_16-01-30.mp4" title="Percy Shelley input"></video>

It was really easy to setup, only taking less than an hour. I had to give it a LOT of input, though, since before it would mostly generate verbatim fragments from the texts. I was having a lot of fun with this toy, trying different inputs, such as María Elena Walsh, Borges, Homer, etc. 

<p><video controls muted src="../assets/images/2024-10-02-nonsense-generator/2024-10-01_16-17-58.mp4" title="Title"></video><em>This one was made using Sappho's works</em></p>

After this, I took a walk. There's a point near where I live where there a bunch of trees that look like they have eyes on them, and you feel watched going past it. 

![A tree with an eye](../assets/images/2024-10-02-nonsense-generator/tree.png)

It inspired me to make some pixel art based on it, and since I already had the generator, I decided to combine them. I wasn't sure if I was going to make an actual game, with gameplay and a game loop, or just a toy. I ended up choosing the latter, since I couldn't figure out a good idea for gameplay. The next day (today), I had this:

<video controls src="../assets/images/2024-10-02-nonsense-generator/2024-10-02_12-47-50.mp4" title="Title"></video>

This one's using a combined input of Percy Shelly, Sappho and Homer because those were the ones that gave the most interesting results. Most of the time, as the name suggests, it just generates... nonsense. But sometimes, very rarely, it creates some slightly beautiful sentences.

You can check it out [here](https://benjatk.itch.io/arbor). Drop a .txt file into the window to use it as input, or just generate stuff with the default input.