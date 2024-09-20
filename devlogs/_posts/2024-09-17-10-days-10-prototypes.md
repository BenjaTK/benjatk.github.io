---
layout: post
title: Prototyping for the sake of it
excerpt: I tried making 10 prototypes in 10-ish days, but failed.
tags: devlog gamedev challenge
comments_id: 8
---

I've been having a hard time lately getting myself to do some gamedev. I'd go in with the mindset of releasing something, then get overwhelmed by my idea, or just didn't have an idea I considered "good enough". This means I wasn't enjoying gamedev as much, and it seemed more like a chore than a hobby. So I decided to set myself a little challenge to prototype simple games, one each day, for the next 10-ish days (I was busy for one, so I just pushed it to the next day).

The rules are simple:
- **One day per prototype**. Not 24 hours, just one day. This means if for some reason I had less time (and I did), I would just have to manage scope.
- **No focus on art**. While I allowed myself to polish a bit (because I couldn't help myself), I couldn't work that much on the art.
- **Forget good coding practice**. 
- **Have fun!**

The second and third rules are just good prototyping tips in general, but I wanted to remind myself of them. 

# Prototype 1: Bomb sokoban... Sokobomb?

<video controls muted autoplay loop src="../../assets/images/2024-09-15-10-days-10-prototypes/2024-09-04_20-04-43.mp4" title="Title"></video>

I've been wanting to make a sokoban for a while, but never got around to it. So I took this opportunity to make it the first game. It's a pretty simple one where you have to use bombs to do puzzles. Bombs are activated when you push them, and when active, every time you move (or they're pushed by another object), they count down and explode after 3 ticks. 

I think this has some potential but I couldn't figure out that many interesting puzzle elements and level design (mainly because I didn't have time, but also because I wasn't sure what to do). I got to make a pretty expandable grid system for this though, using my [Criss-Cross addon](https://godotengine.org/asset-library/asset/2047).

# Prototype 2: Spell crafting

<video controls muted autoplay loop src="../../assets/images/2024-09-15-10-days-10-prototypes/2024-09-05_15-00-53.mp4" title="Title"></video>

This one has been on my mind for a while, too. Basically, those shapes are runes. You have 3 slots to place them in: movement, form and power. Each rune has different effects on the "spell" you cast, depending on the slot they're placed in. So for example:

- A red rune in the **movement** slot makes it work like a grenade, a blue one makes it follow the mouse, and a green one the nearest enemy.
- A red rune in the **power** slot makes it deal more damage but with really low fire rate, while a blue one makes it deal less damage but makes it automatic. 
- A blue rune in the **form** slot makes it shoot 3 projectiles at once, while a green one gives it the ability to pierce enemies.

I really like this prototype. It's fun. If I were to scale it to a proper game, though, I'd have to figure out a bunch of things: How many runes are there? How do you obtain them? How do I balance them, so there's no one right combination? How do I encourage the player to keep switching their loadout? These could be doable, just a lot more thought would have to be put into it. That last one is the most important, too.

# Prototype 3: Cave exploring

<p><video controls src="../../assets/images/2024-09-15-10-days-10-prototypes/2024-09-06_15-41-39.mp4" title="Title"></video><em>Listen carefully for this one.</em></p>


Now... I know what you're thinking. Rule #2. BUT. I've had this art as a mockup for a while now. And also, I make the rules.

This one's more of a "vibe" prototype.
 
I didn't have much time, so there's not a lot of gameplay, but I implemented a mechanic I've been thinking about for a while (a recurring theme this far): gauging how deep a hole is by throwing objects and listening to their landing sound. Near the end of the video you can hear how the hole to the right is very deep but still in listening radius, while in the one to the left you couldn't even hear the stick hit the ground.

If I had more time, I would've implemented procedural generation (I already ported Spelunky's system to Godot in another project, so it wouldn't be too hard).

# Prototype 4: Upwell

<video controls muted autoplay loop src="../../assets/images/2024-09-15-10-days-10-prototypes/2024-09-07_20-43-25.mp4" title="Title"></video>

Not much to say about this one. It's pretty fun, and a solid mechanic. Not sure how'd you expand on it, honestly. I do want to point something out:

While, as you saw, most of these prototypes have a fair bit of polish, I do recommend and it's common practice to make prototypes without game juice. This way you can test if the actual mechanic is fun, and it's not just the extra polish that's making it *feel* fun.

I've been testing these out without the polish aswell, it's just that they look better on video with it.

_Btw, play_ [Poinpy](https://www.devolverdigital.com/games/poinpy).

# Prototype 5: No idea what to call this one

<video controls src="../assets/images/2024-09-15-10-days-10-prototypes/2024-09-12_11-49-44.mp4" title="Title"></video>

This one took a while to get myself to make (which is kind of the problem I'm trying to solve with this challenge). After day 4 we started a Minecraft server with some friends, then I had a very busy day, then Satisfactory 1.0 came out. So...

Not sure how I feel about this prototype. It could be fun, but it'd have to have some sort of shield mechanic for it to not be hell. It's inspired by [DodgeKing](<https://store.steampowered.com/app/2086270/DodgeKing/?beta=1>) (which has a very cool parry mechanic) because I was watching [this](https://youtu.be/ZjOtwlgzKeg) video from the creator and was struggling with ideas. I liked the mechanic, so I tried to recreate it.

That's the good part about these being prototypes. I can just... steal! Recreating mechanics from other games as practice is basically some of the first advice you'll get when you start gamedev. Recreate Snake, recreate Breakout, etc. But even after a while of making games, it's still useful. Just check out [Mix and Jam](https://www.youtube.com/@mixandjam/videos), for example.

Of course, be transparent about it and don't just copy a whole game and release it as your own. Still, creativity is just remixing old ideas and combining them into something new. Don't be afraid to "steal"!

# Falling back into the same trap

After prototype 5 I kind of... gave up. I procrastinated the next one, unsure on what to do, and got a bit of burnout. It was probably because I was waiting for an idea to come out of nowhere, instead of actually working on brainstorming (a skill I still have to practice more).

But hey, at least I made 5 prototypes (and the start of another one[^1]). And I do think I have some cool ideas here that I could make into a full game. I'm still proud of the prototypes I managed to make, even if I couldn't make the other 5. Plus, I'm working on a secret project... 

---

# Footnotes

[^1]: A procedural animation system inspired by [this video](https://youtu.be/qlfh_rv6khY):<br><video autoplay loop muted src="../assets/images/2024-09-15-10-days-10-prototypes/2024-09-17_10-40-37.mp4" title="Title"></video>