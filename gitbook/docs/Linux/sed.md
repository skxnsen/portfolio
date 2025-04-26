# sed command

## Introduction
`sed` can quickly filter, clean, and write logs for QA purposes.

`sed` reads from `stdin` (standard input) line-by-line, making it powerful for live streaming logs (e.g., adb logcat, nc, logs from protocols like FIX etc).

## Basic Syntax
`sed [options] commands [input-file]`

* `[options]` — flags to control `sed` behavior.
* `'command'` — what transformation to apply.
* `[file...]` — input file(s) or piped input.

## 🔥 Essential Operations


## Common Options

| Option | Description | Example |
|--------|-------------|---------|
| `-i`     | In-place editing | `sed -i s/old/new/ file.txt` |
| `-n`     | Suppress automatic printing | `sed -n /pattern/p file.txt` |
| `-e`     | Execute multiple commands | `sed -e s/old/new/ -e /pattern/d file.txt` |
| `-f`     | Read commands from a file | `sed -f script.sed file.txt` |
| `-r`     | Use extended regular expressions | `sed -r s/old/new/ file.txt` |
| `-E`     | Use extended regular expressions (similar to -r) | `sed -E s/old/new/ file.txt` |
| `-z`     | Separate lines with NUL character | `sed -z s/old/new/ file.txt` |
| `-l`     | Specify the line length for the 'l' command | `sed -l 100 l file.txt` |
| `-b`     | Binary mode (do not strip the CR characters) | `sed -b s/old/new/ file.txt` |

---

## Performance Tips (For Working with Large Logs)

- Combine multiple operations
- Use `-n` with `p` for selective output
- Test without `-i` first
- For huge files, consider splitting

### Optimize `sed` for Speed

- **Use `-n` + `p`** – Suppress automatic printing and explicitly `p` only needed lines:
```bash
sed -n '/error/p' large.log > errors.txt
```

- **Limit scope with addresses** – Reduce processing by targeting specific line ranges:
```bash
sed '10000,20000s/foo/bar/' large.log
```

- **Avoid backreferences** – Capture groups `\(\...\)` and `&` replacements slow processing.

### Parallel Processing
- **GNU Parallel + `sed`** – Process chunks simultaneously:
```bash
parallel --pipepart --block 100M -a large.log sed 's/foo/bar/'
```

- **Split & Parallelize** – For non-GNU systems:
```bash
split -l 1000000 large.log chunk_ && \
parallel -j $(nproc) sed -i 's/foo/bar/' ::: chunk_* && \
cat chunk_* > processed.log
```

- **Multi-file processing** – Apply changes to many files concurrently:
```bash
find /var/log -name "*.log" | parallel -j 8 sed -i 's/old/new/g'
```

### Memory-Efficient Patterns
- **Chain commands** – Combine operations in a single sed call:
```bash
sed -e 's/foo/bar/' -e '/baz/d' large.log
```

Prefer `d` over `D` – Line deletion (d) is faster than pattern-space manipulation (D).
Use `q` for early exit – Stop processing after finding a match:
```bash
sed '/critical error/q' large.log
```

### Pre-Processing Tricks
- **Filter first with `grep`** – Reduce data before complex sed operations:
```bash
grep "pattern" large.log | sed 's/.../.../'
```

## Integration with Shell Scripts
The `sed` command is commonly used in shell scripts to automate repetitive text manipulation tasks.

Example with Real-Time FIX Protocol Parser with sed:
```bash
#!/bin/bash
# Monitor and extract critical FIX messages from trading gateway logs

tail -F /opt/trading/gateway/logs/fix_engine.log | \
grep --line-buffered '8=FIX.4.4' | \
sed -u -nE '
    # 1. Extract basic message info
    /35=[0-9]/ {
        s/.*35=([0-9]+).*/\1/; h
        s/.*/MsgType: \1/; p
    }

    # 2. Capture order-related messages (D=0, F=5, 8=8)
    /35=[DF8]/ {
        s/.*11=([^|]+).*/OrderID: \1/p
        s/.*55=([^|]+).*/Symbol: \1/p
        s/.*44=([^|]+).*/Price: \1/p
        s/.*38=([^|]+).*/Qty: \1/p
    }

    # 3. Flag errors
    /35=3/ {
        s/.*58=([^|]+).*/ERROR: \1/p
        s/.*371=([^|]+).*/ErrorCode: \1/p
    }

    # 4. Session heartbeat
    /35=0/ {
        s/.*/HEARTBEAT/p
    }
'
```

What This Solves in Production:
1. Real-time monitoring of FIX traffic (tail -F)

2. Message type filtering (only processes complete FIX messages)

3. Key field extraction from different message types:
   - New Orders (35=D): ClOrdID, Symbol, Price, Quantity
   - Execution Reports (35=8): OrderID, LastPx, LastQty
   - Rejects (35=3): Error text and code

## sed vs Alternatives

| Feature        | `sed`  | `awk`  | `perl` |
|---------------|------|------|------|
| Speed         | Fast | Medium| Slow |
| Complexity    | Simple| Medium| Complex |
| In-place edit | Yes  | No   | Yes  |
| Regex support | Basic| Full | Full |


## Conclusion

`sed` excels at:
- Quick text substitutions
- Automated file editing
- Stream processing

For complex data manipulation, consider `awk` or `perl`.

---

> 📌 **Note:** In RCA/log viewing, `sed` is typically used with `-n` and `p` commands to **extract**, **highlight**, and **format**, but **not modify** files.

> 🧠 **Tip:** Always prefer to run `sed` without `-i` during investigations. Stream output into a safe file or view in terminal.
