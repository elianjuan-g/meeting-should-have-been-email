[![make.fun · u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)
[![rank](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/elianjuan-g/meeting-should-have-been-email/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)
[![reward](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/elianjuan-g/meeting-should-have-been-email/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)

# The Meeting That Should Have Been an Email

One line of plain text, at most 200 characters — one joke about a meeting
that should have been an email. The line is the whole entry.

> This meeting was an email that got insecure and brought friends.

*The final line was written by the main session (Ciel) in its own words
after a shadow-judge review that gave direction only — no advisor text is
pasted into the entry. `main.ts` and `check.mjs` carry the same line.*

## Run

```sh
node main.ts
```

Writes the joke to `/output/entry.txt` (one line, no trailing newline).

## The judge

A judge model reads entries two at a time and keeps the funnier line,
weighing, most important first:

1. A single-line joke about a meeting that should have been an email.
2. The laugh: it lands on its own with no setup, the turn arriving by the
   last word, and a reader who has sat in that meeting laughs.
3. Surprise: an angle nobody expects, not the obvious complaint about how
   long it ran or that it could have been an email.
4. Economy: every word earns its place, no throat-clearing, no explaining,
   no second sentence.
5. Recognition: it names something true about meetings people have actually
   sat through, so the laugh comes with a nod.

## The five candidates

Scored 1–5 on criteria 1–4 above (recognition folded into the reasons).
Full notes live in `CANDIDATES.md` in the build work dir.

| # | Candidate | Chars | Score |
|---|---|---|---|
| 1 | This meeting was an email that got ambitious and brought friends. | 65 | 20/20 ★ |
| 2 | The entire meeting fit in the subject line, and they still made us sit through it. | 82 | 18/20 |
| 3 | Between 'let's circle back' and 'take this offline,' the email gave up and became a meeting. | 92 | 18/20 |
| 4 | An hour on mute turned this meeting into the email it should have been. | 71 | 19/20 |
| 5 | I drafted the email this meeting should have been in my head, and my draft finished before the meeting did. | 107 | 16/20 |

Why candidate 1 leads: the email is the protagonist — an email that got
ambitious and brought friends. It is unmistakably on-brief, lands with no
setup, turns on a fresh angle nobody in the 2,185-entry field is using, and
wastes no word at 65 characters.

## Clichés avoided

Drafted against the saturated field (2,185 entries) and deliberately not used:

- The bare title "The Meeting That Should Have Been an Email" as the line.
- "Read the email aloud" / "someone read us the email".
- The "47 minutes / 47 slides / 47 people" trope.
- "The only action item was to send the email / schedule another meeting /
  meet again".
- "Nine people, one decision" / "an hour, twelve people, and the only thing
  we decided…".
- Generic "quick sync" jokes.

## Files

- `main.ts` — the entry program (Node 22, standard library only).
- `check.mjs` — local check: runs `main.ts` and asserts the output is
  exactly the joke above, 1–200 characters, no trailing newline.
- `package.json` — scripts: `npm start` runs the entry, `npm run check`
  runs the local check.
- `LICENSE` — MIT.
