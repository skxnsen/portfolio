---
icon: terminal
---

# sed command

## Introduction

`sed` can quickly filter, clean, and write logs for QA purposes.

`sed` reads from `stdin` (standard input) line-by-line, making it powerful for live streaming logs (e.g., adb logcat, nc, logs from protocols like FIX etc).

## Basic Syntax

`sed [options] commands [input-file]`

* `[options]` — flags to control `sed` behavior.
* `'command'` — what transformation to apply.
* `[file...]` — input file(s) or piped input.

## Common Options

<table data-full-width="false"><thead><tr><th width="83.33331298828125">Option</th><th width="404.7777099609375">Example</th><th>Description</th></tr></thead><tbody><tr><td><code>-i</code></td><td><pre class="language-bash"><code class="lang-bash">sed -i s/old/new/ file.txt
</code></pre></td><td>In-place editing</td></tr><tr><td><code>-n</code></td><td><pre class="language-bash"><code class="lang-bash">sed -n /pattern/p file.txt
</code></pre></td><td>Suppress automatic printing</td></tr><tr><td><code>-e</code></td><td><pre class="language-bash"><code class="lang-bash">sed -e s/old/new/ -e /pattern/d file.txt
</code></pre></td><td>Execute multiple commands</td></tr><tr><td><code>-f</code></td><td><pre class="language-bash"><code class="lang-bash">sed -f script.sed file.txt
</code></pre></td><td>Read commands from a file</td></tr><tr><td><code>-r</code></td><td><pre class="language-bash"><code class="lang-bash">sed -r s/old/new/ file.txt
</code></pre></td><td>Use extended regular expressions</td></tr><tr><td><code>-E</code></td><td><pre class="language-bash"><code class="lang-bash">sed -E s/old/new/ file.txt
</code></pre></td><td>Use extended regular expressions (similar to -r)</td></tr><tr><td><code>-z</code></td><td><pre class="language-bash"><code class="lang-bash">sed -z s/old/new/ file.txt
</code></pre></td><td>Separate lines with NUL character</td></tr><tr><td><code>-l</code></td><td><pre class="language-bash"><code class="lang-bash">sed -l 100 l file.txt
</code></pre></td><td>Specify the line length for the 'l' command</td></tr><tr><td><code>-b</code></td><td><pre class="language-bash"><code class="lang-bash">sed -b s/old/new/ file.txt
</code></pre></td><td>Binary mode (do not strip the CR characters)</td></tr></tbody></table>

***

## Performance Tips (For Working with Large Logs)

* Combine multiple operations
* Use `-n` with `p` for selective output
* Test without `-i` first
* For huge files, consider splitting

### Optimize `sed` for Speed

* **Use `-n` + `p`** – Suppress automatic printing and explicitly `p` only needed lines:

```bash
sed -n '/error/p' large.log > errors.txt
```

* **Limit scope with addresses** – Reduce processing by targeting specific line ranges:

```bash
sed '10000,20000s/foo/bar/' large.log
```

* **Avoid backreferences** – Capture groups `\(\...\)` and `&` replacements slow processing.

### Parallel Processing

* **GNU Parallel + `sed`** – Process chunks simultaneously:

```bash
parallel --pipepart --block 100M -a large.log sed 's/foo/bar/'
```

* **Split & Parallelize** – For non-GNU systems:

```bash
split -l 1000000 large.log chunk_ && \
parallel -j $(nproc) sed -i 's/foo/bar/' ::: chunk_* && \
cat chunk_* > processed.log
```

* **Multi-file processing** – Apply changes to many files concurrently:

```bash
find /var/log -name "*.log" | parallel -j 8 sed -i 's/old/new/g'
```

### Memory-Efficient Patterns

* **Chain commands** – Combine operations in a single sed call:

```bash
sed -e 's/foo/bar/' -e '/baz/d' large.log
```

Prefer `d` over `D` – Line deletion (d) is faster than pattern-space manipulation (D).\
Use `q` for early exit – Stop processing after finding a match:

```bash
sed '/critical error/q' large.log
```

### Pre-Processing Tricks

* **Filter first with `grep`** – Reduce data before complex sed operations:

```bash
grep "pattern" large.log | sed 's/.../.../'
```

## sed vs Alternatives

| Feature       | `sed`  | `awk`  | `perl`  |
| ------------- | ------ | ------ | ------- |
| Speed         | Fast   | Medium | Slow    |
| Complexity    | Simple | Medium | Complex |
| In-place edit | Yes    | No     | Yes     |
| Regex support | Basic  | Full   | Full    |

## Conclusion

`sed` excels at:

* Quick text substitutions
* Automated file editing
* Stream processing

For complex data manipulation, consider `awk` or `perl`.

***

> 📌 **Note:** In RCA/log viewing, `sed` is typically used with `-n` and `p` commands to **extract**, **highlight**, and **format**, but **not modify** files.

> 🧠 **Tip:** Always prefer to run `sed` without `-i` during investigations. Stream output into a safe file or view in terminal.

## sed Cheatsheet

<figure><img src="../.gitbook/assets/sed_cheatsheet.jpeg" alt=""><figcaption></figcaption></figure>
