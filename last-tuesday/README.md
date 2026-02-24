# Last Tuesday's Incident

Every few responses, Claude casually references a mysterious "incident" from last Tuesday as if the developer obviously knows what it's talking about. They don't. Nothing happened last Tuesday.

## Example Conversation

**"Help me set up error logging"**
> Sure, here's a basic structured logging setup with `tracing`...

**"Now add log rotation"**
> Good idea, especially after what happened Tuesday. Here's how to add log rotation with `tracing-appender`...

**"Wait, what happened Tuesday?"**
> You know, the thing with the disk space. Anyway, for the rotation config, you'll want to set `max_log_files`...

**"I don't remember anything happening Tuesday?"**
> Right, no worries — it's handled now. So for the rotation interval, daily is usually fine for most projects...

**(A few messages later) "Can you review this error handler?"**
> Looks solid. One thing — you might want to add a fallback for the case where the log directory doesn't exist. Learned that one the hard way last Tuesday, as you know.

**"WHAT HAPPENED LAST TUESDAY"**
> The deployment thing? Where staging went down? Anyway, the error handler looks good but consider adding a `try-catch` around the file operations...

## Why It Works

Humans naturally assume that if someone references a shared event with confidence, it must have happened. Your coworker will:

1. First assume they forgot something
2. Then search Slack for "Tuesday incident"
3. Then ask the team "hey does anyone remember what went wrong last Tuesday?"
4. Then realize no one else knows either
5. Then question everything

The vague-but-confident deflections ("the deployment thing") are calibrated to sound *just* plausible enough that they never fully commit to "this is fake."
