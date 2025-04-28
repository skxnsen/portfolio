---
icon: terminal
---

# grep command

When investigating bugs, crashes, or unexpected behavior, **analyzing logs** becomes crucial.\
The `grep` command is one of the most powerful and essential tools in Linux for this purpose.

***

## Basic Syntax

```
grep [options] pattern [file...]
```

***

## Option Examples

<table><thead><tr><th width="92.33331298828125" align="center">Option</th><th align="center">Example</th><th>Description</th></tr></thead><tbody><tr><td align="center"><code>-i</code></td><td align="center"><pre class="language-bash"><code class="lang-bash">grep -i "data" demo.txt
</code></pre></td><td>Ignore case sensitivity.</td></tr><tr><td align="center"><code>-w</code></td><td align="center"><pre class="language-bash"><code class="lang-bash">grep -w "of" demo.txt
</code></pre></td><td>Search for the full word only.</td></tr><tr><td align="center"><code>-A</code></td><td align="center"><pre class="language-bash"><code class="lang-bash">grep -A 3 "Exception" error.log
</code></pre></td><td>Show 3 lines after the match.</td></tr><tr><td align="center"><code>-B</code></td><td align="center"><pre class="language-bash"><code class="lang-bash">grep -B 4 "Exception" error.log
</code></pre></td><td>Show 4 lines before the match.</td></tr><tr><td align="center"><code>-C</code></td><td align="center"><pre class="language-bash"><code class="lang-bash">grep -C 5 "Exception" error.log
</code></pre></td><td>Show 5 lines around the match.</td></tr><tr><td align="center"><code>-r</code></td><td align="center"><pre class="language-bash"><code class="lang-bash">grep -r "error" /var/log/
</code></pre></td><td>Recursive search in subdirectories.</td></tr><tr><td align="center"><code>-v</code></td><td align="center"><pre class="language-bash"><code class="lang-bash">grep -v "warning" syslog.log
</code></pre></td><td>Show lines that do not match.</td></tr><tr><td align="center"><code>-e</code></td><td align="center"><pre class="language-bash"><code class="lang-bash">grep -e "^start" filename.txt
</code></pre></td><td>Use regex (basic regular expressions).</td></tr><tr><td align="center"><code>-E</code></td><td align="center"><pre class="language-bash"><code class="lang-bash">"ja(s|cks)on" filename.txt
</code></pre></td><td>Use extended regex.</td></tr><tr><td align="center"><code>-c</code></td><td align="center"><pre class="language-bash"><code class="lang-bash">grep -c "error" syslog.log
</code></pre></td><td>Count the number of matches.</td></tr><tr><td align="center"><code>-l</code></td><td align="center"><pre class="language-bash"><code class="lang-bash">grep -l "robot" /var/log/*
</code></pre></td><td>Print filenames of matches.</td></tr><tr><td align="center"><code>-o</code></td><td align="center"><pre class="language-bash"><code class="lang-bash">grep -o "text" filename.txt
</code></pre></td><td>Only show the matching part.</td></tr><tr><td align="center"><code>-n</code></td><td align="center"><pre class="language-bash"><code class="lang-bash">grep -n "go" demo.txt
</code></pre></td><td>Show line numbers of matches.</td></tr></tbody></table>

***

## grep Regular Expressions

#### Wildcards

* `.` Any single character
* `?` Optional, occurs once
* `*` Optional, occurs multiple times
* `+` Required, occurs multiple times

#### Quantifiers

* `{n}` Exactly n times
* `{n,}` At least n times
* `{,m}` Up to m times
* `{n,m}` Between n and m times

#### POSIX Character Classes

* `[:alpha:]` Any letter (a-zA-Z)
* `[:digit:]` Any digit (0-9)
* `[:alnum:]` Any letter or digit
* `[:space:]` Any whitespace

#### Character Ranges

* `[A-Za-z]` Any letter
* `[0-9]` Any digit
* `[0-9A-Za-z]` Any letter or digit

#### Positions

* `^` Beginning of line
* `$` End of line
* `^$` Empty line
* `\<` Start of word
* `\>` End of word

## Most Useful `grep` Commands

### 1. Find a Specific Keyword

```
grep "error" application.log
```

> Find lines containing `"error"` in `application.log`.

***

### 2. Case-Insensitive Search

```
grep -i "warning" application.log
```

> Match `"warning"`, `"Warning"`, `"WARNING"`, etc.

***

### 3. Recursive Search

```
grep -r "timeout" /var/log/
```

> Search **inside all files** under `/var/log/` directory.

***

### 4. Show Line Numbers

```
grep -n "exception" server.log
```

> Display matching lines **with line numbers**.

***

### 5. Show Lines Before/After/Context

*   **Show 5 lines&#x20;**_**after**_**&#x20;match:**

    ```
    grep -A 5 "failed" backend.log
    ```
*   **Show 5 lines&#x20;**_**before**_**&#x20;match:**

    ```
    grep -B 5 "failed" backend.log
    ```
*   **Show 5 lines&#x20;**_**before and after**_**&#x20;match:**

    ```
    grep -C 5 "failed" backend.log
    ```

> Very useful to **understand surrounding context** of an error.

***

### 6. Multiple Keywords (OR Search)

```
grep -E "fatal|panic|critical" system.log
```

> Match any of the words: `fatal`, `panic`, or `critical`.

***

### 7. Invert Match

```
grep -v "INFO" app.log
```

> Show lines **excluding** `"INFO"`.\
> Helps to **filter out noise**.

***

### 8. Count Occurrences

```
grep -c "timeout" service.log
```

> Display **how many times** `"timeout"` appears.

***

### 9. Search Whole Words

```
grep -w "start" app.log
```

> Match `"start"` exactly — not `"restart"` or `"started"`.

***

### 10. Live Log Monitoring

```
tail -f app.log | grep "error"
```

> Monitor a log **in real-time** and only show new lines containing `"error"`.

***

## Save Results to a File

```
grep "database" app.log > database_errors.txt
```

> Redirect `grep` results into a file for later review.

***

## Piping with `grep`

When analyzing logs, you often deal with **large outputs** or want to **chain commands** together.\
That's where **piping** (`|`) becomes extremely powerful with `grep`.

Piping allows you to **take the output** of one command and **pass it directly** as input to `grep`, without needing intermediate files.

***

### Basic Syntax

```
command | grep [options] pattern
```

> `|` sends the **output** of the left-hand command to the **input** of the right-hand command.

***

### Common Piping Examples

#### 1. Filter `dmesg` Logs for USB Events

```
dmesg | grep "usb"
```

> Search for `"usb"` events in kernel logs.

***

#### 2. Find Running Processes

```
ps aux | grep "python"
```

> List all running processes and filter those related to `"python"`.

***

#### 3. Combine with `tail` for Real-Time Monitoring

```
tail -f app.log | grep "error"
```

> Monitor a growing log file and **only show lines** containing `"error"`.

***

#### 4. Chain Multiple Pipes

You can **chain pipes** for even more advanced filtering:

```
cat app.log | grep "timeout" | grep -v "retry"
```

> Find `"timeout"` entries but **exclude** lines mentioning `"retry"`.

***

#### 5. Use with `ls` to Search for Files

```
ls -l /var/log | grep "nginx"
```

> List only `nginx`-related files inside `/var/log`.

***

### Quick Tip: Grep Output Colors

You can enable **colored output** when using `grep` with pipes:

```
ps aux | grep --color=always "ssh"
```

> Highlight matching text for better visibility.

## Resources for Practicing

{% embed url="https://exercism.org/tracks/bash/exercises/grep" %}

{% embed url="https://www.hackerrank.com/domains/shell?filters%5Bsubdomains%5D%5B%5D=grep-sed-awk" %}

***

## grep Cheatsheet

<figure><img src="../.gitbook/assets/WSwj1pE-L.png" alt=""><figcaption></figcaption></figure>

***

> _Next: You can level up further by learning `awk` and `sed` for advanced log analysis!_
