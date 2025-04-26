# Grep Commands for Log Analysis and RCA

When investigating bugs, crashes, or unexpected behavior, **analyzing logs** becomes crucial.  
The `grep` command is one of the most powerful and essential tools in Linux for this purpose.

This guide covers **common `grep` use cases and examples** that every QA/SDET should know.

---

## Table of Contents

- [Introduction](#introduction)
- [Basic Syntax](#basic-syntax)
- [Most Useful `grep` Commands](#most-useful-grep-commands)
  - [1. Find a Specific Keyword](#1-find-a-specific-keyword)
  - [2. Case-Insensitive Search](#2-case-insensitive-search)
  - [3. Recursive Search](#3-recursive-search)
  - [4. Show Line Numbers](#4-show-line-numbers)
  - [5. Show Lines Before/After/Context](#5-show-lines-beforeaftercontext)
  - [6. Multiple Keywords (OR Search)](#6-multiple-keywords-or-search)
  - [7. Invert Match](#7-invert-match)
  - [8. Count Occurrences](#8-count-occurrences)
  - [9. Search Whole Words](#9-search-whole-words)
  - [10. Live Log Monitoring](#10-live-log-monitoring)
- [Save Results to a File](#save-results-to-a-file)
- [Piping with `grep`](#piping-with-grep)
- [Real-World RCA Examples](#real-world-rca-examples)
- [Quick Tips](#quick-tips)
- [Conclusion](#conclusion)

---

## Introduction

For any SDET engineer working with logs, mastering `grep` can drastically speed up logs analyzing (e.g., working with Android Logcat logs, reverse engineering, RCA etc).
Instead of scrolling endlessly through massive log files, you can **pinpoint issues in seconds**.

---

## Basic Syntax

```
grep [options] pattern [file...]
```

---

## Most Useful `grep` Commands

### 1. Find a Specific Keyword

```
grep "error" application.log
```
> Find lines containing `"error"` in `application.log`.

---

### 2. Case-Insensitive Search

```
grep -i "warning" application.log
```
> Match `"warning"`, `"Warning"`, `"WARNING"`, etc.

---

### 3. Recursive Search

```
grep -r "timeout" /var/log/
```
> Search **inside all files** under `/var/log/` directory.

---

### 4. Show Line Numbers

```
grep -n "exception" server.log
```
> Display matching lines **with line numbers**.

---

### 5. Show Lines Before/After/Context

- **Show 5 lines *after* match:**

  ```
  grep -A 5 "failed" backend.log
  ```

- **Show 5 lines *before* match:**

  ```
  grep -B 5 "failed" backend.log
  ```

- **Show 5 lines *before and after* match:**

  ```
  grep -C 5 "failed" backend.log
  ```

> Very useful to **understand surrounding context** of an error.

---

### 6. Multiple Keywords (OR Search)

```
grep -E "fatal|panic|critical" system.log
```
> Match any of the words: `fatal`, `panic`, or `critical`.

---

### 7. Invert Match

```
grep -v "INFO" app.log
```
> Show lines **excluding** `"INFO"`.  
> Helps to **filter out noise**.

---

### 8. Count Occurrences

```
grep -c "timeout" service.log
```
> Display **how many times** `"timeout"` appears.

---

### 9. Search Whole Words

```
grep -w "start" app.log
```
> Match `"start"` exactly — not `"restart"` or `"started"`.

---

### 10. Live Log Monitoring

```
tail -f app.log | grep "error"
```
> Monitor a log **in real-time** and only show new lines containing `"error"`.

---

## Save Results to a File

```
grep "database" app.log > database_errors.txt
```
> Redirect `grep` results into a file for later review.

---

## Piping with `grep`

When analyzing logs, you often deal with **large outputs** or want to **chain commands** together.  
That's where **piping** (`|`) becomes extremely powerful with `grep`.

Piping allows you to **take the output** of one command and **pass it directly** as input to `grep`, without needing intermediate files.

---

### Basic Syntax

```
command | grep [options] pattern
```

> `|` sends the **output** of the left-hand command to the **input** of the right-hand command.

---

### Common Piping Examples

#### 1. Filter `dmesg` Logs for USB Events

```
dmesg | grep "usb"
```
> Search for `"usb"` events in kernel logs.

---

#### 2. Find Running Processes

```
ps aux | grep "python"
```
> List all running processes and filter those related to `"python"`.

---

#### 3. Combine with `tail` for Real-Time Monitoring

```
tail -f app.log | grep "error"
```
> Monitor a growing log file and **only show lines** containing `"error"`.

---

#### 4. Chain Multiple Pipes

You can **chain pipes** for even more advanced filtering:

```
cat app.log | grep "timeout" | grep -v "retry"
```
> Find `"timeout"` entries but **exclude** lines mentioning `"retry"`.

---

#### 5. Use with `ls` to Search for Files

```
ls -l /var/log | grep "nginx"
```
> List only `nginx`-related files inside `/var/log`.

---

### Why Use Piping?

- **Efficiency**: No need to save intermediate results to a file.
- **Speed**: Instantly filter outputs without extra steps.
- **Flexibility**: Combine with other commands like `awk`, `sed`, `sort`, etc.

---

### Quick Tip: Grep Output Colors

You can enable **colored output** when using `grep` with pipes:

```
ps aux | grep --color=always "ssh"
```
> Highlight matching text for better visibility.

---

## Real-World RCA Examples

| Scenario                  | Command Example |
| -------------------------- | --------------- |
| Investigating login issues | `grep -i "login" app.log` |
| Backend timeouts           | `grep -i "timeout" backend.log` |
| Network disconnections     | `grep -E "disconnect|reset|timeout" network.log` |
| Memory crashes (OOM)       | `grep -i "out of memory" kernel.log` |

---

## Quick Tips

- Use `-i` to avoid missing case variations.
- Combine `grep` with `less` for easier scrolling:

  ```
  grep "error" app.log | less
  ```

- Learn `grep`'s **regex mode** with `-E` for more complex patterns.
- Save common commands into **bash aliases** for quicker usage.

---

## Conclusion

`grep` is an indispensable tool for QA and SDETs when diagnosing issues through logs.  
Learning a few key options will make your RCA process **faster, more precise, and much less frustrating**.

---

> _Next: You can level up further by learning `awk` and `sed` for advanced log analysis!_
