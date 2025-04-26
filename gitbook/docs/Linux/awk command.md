# awk commands for log analysis

When basic text searching isn't enough, `awk` comes in — a **powerful text-processing tool** that can **filter, transform, and format** log data easily.

This guide focuses on **useful `awk` commands** for QA/SDETs during Root Cause Analysis (RCA).

---

## Table of Contents

- [Introduction](#introduction)
- [Basic Syntax](#basic-syntax)
- [Most Useful `awk` Commands](#most-useful-awk-commands)
  - [1. Print Specific Columns](#1-print-specific-columns)
  - [2. Filter by Condition](#2-filter-by-condition)
  - [3. Print Matching Lines](#3-print-matching-lines)
  - [4. Count Matching Lines](#4-count-matching-lines)
  - [5. Custom Field Separator](#5-custom-field-separator)
  - [6. Perform Calculations](#6-perform-calculations)
  - [7. Highlight or Format Output](#7-highlight-or-format-output)
- [Piping with `awk`](#piping-with-awk)
- [Real-World RCA Examples](#real-world-rca-examples)
- [Quick Tips](#quick-tips)
- [Conclusion](#conclusion)

---

## Introduction

While `grep` helps you **find** text, `awk` helps you **analyze and format** it.  
You can think of `awk` as a **mini scripting language** for working with structured text like logs, CSVs, and outputs.

Knowing even **basic `awk`** gives you an edge when troubleshooting complex issues.

---

## Basic Syntax

```
awk 'pattern { action }' [file...]
```

- **pattern**: What to match.
- **action**: What to do when it matches (print, sum, format, etc).

> If no action is given, the default action is `{ print $0 }`, meaning print the entire line.

---

## Most Useful `awk` Commands

### 1. Print Specific Columns

```
awk '{print $1, $5}' server.log
```
> Print the **first** and **fifth** columns (words) of each line.

Example:

| $1 (Date) | $5 (Status) |
| --------- | ----------- |
| 2025-04-26 | 200 |

---

### 2. Filter by Condition

```
awk '$5 == 500' server.log
```
> Show lines where the **fifth column** equals `500` (Internal Server Error).

---

### 3. Print Matching Lines

```
awk '/timeout/' app.log
```
> Print lines that **contain** `"timeout"`.

Similar to `grep`, but with more flexibility if needed.

---

### 4. Count Matching Lines

```
awk '/error/ {count++} END {print count}' app.log
```
> Count how many lines **contain** `"error"`.

---

### 5. Custom Field Separator

If your logs use a delimiter other than space (like `,`, `|`, etc):

```
awk -F',' '{print $2}' csv_file.log
```
> `-F','` tells `awk` to use comma as **field separator**.  
> Print the **second column**.

---

### 6. Perform Calculations

Example: Sum all response times from column 7.

```
awk '{sum += $7} END {print sum}' access.log
```
> Add up all values from the **7th column** and print the total.

---

### 7. Highlight or Format Output

Example: Format and add labels manually.

```
awk '{print "Status: "$5", URL: "$7}' server.log
```
> Customize the printed output for better readability.

---

## Piping with `awk`

You can **pipe** any output into `awk` for instant filtering, just like with `grep`.

### Examples

#### 1. Monitor Running Processes and Extract Fields

```
ps aux | awk '{print $1, $2, $11}'
```
> Show **user**, **PID**, and **command name**.

---

#### 2. Filter Network Connections

```
netstat -an | awk '/LISTEN/ {print $4}'
```
> List only **listening ports**.

---

#### 3. Real-Time Log Analysis

```
tail -f app.log | awk '/error/ {print $0}'
```
> Monitor logs live, only show lines containing `"error"`.

---

#### 4. Combined Pipes for Advanced Filtering

```
dmesg | grep "usb" | awk '{print $1, $3, $5}'
```
> First filter by `"usb"`, then extract specific columns.

---

## Real-World RCA Examples

| Scenario                  | Command Example |
| -------------------------- | --------------- |
| Find slow API calls        | `awk '$7 > 2000' api.log` |
| Extract HTTP status codes  | `awk '{print $9}' access.log` |
| Count server restarts      | `awk '/server restart/ {count++} END {print count}' system.log` |
| Identify high CPU usage    | `ps aux | awk '$3 > 70 {print $1, $2, $3}'` |

---

## Quick Tips

- `$0` = the **whole line**  
- `$1`, `$2`, ... = individual **columns (words)**
- Use `-F` option to **set custom delimiters**.
- `awk` scripts can be saved into files for **reusable automation**.
- Combine with `sort`, `uniq`, `head`, `tail` for powerful pipelines.

---

## Conclusion

`awk` is like a Swiss Army knife for text processing.  
In just a few lines, you can **filter**, **analyze**, **count**, and **format** logs during Root Cause Analysis without writing complex scripts.

If you're serious about becoming a faster QA/SDET investigator, **learn basic `awk` patterns** — it's a huge time saver!

---
