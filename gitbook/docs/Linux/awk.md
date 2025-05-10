---
icon: rectangle-terminal
---

# awk command

When basic text searching isn't enough, `awk` comes in — a **powerful text-processing tool** that can **filter, transform, and format** log data easily.

While `grep` helps you **find** text, `awk` helps you **analyze and format** it.\
You can think of `awk` as a **mini scripting language** for working with structured text like logs, CSVs, and outputs.

Knowing even **basic `awk`** gives you an edge when troubleshooting complex issues.

***

## Basic Syntax

```bash
awk 'pattern { action }' [file...]
```

* **pattern**: What to match.
* **action**: What to do when it matches (print, sum, format, etc).

> If no action is given, the default action is `{ print $0 }`, meaning print the entire line.

***

## Most Useful `awk` Commands

### 1. Print Specific Columns

```bash
awk '{print $1, $5}' server.log
```

> Print the **first** and **fifth** columns (words) of each line.

Example:

| $1 (Date)  | $5 (Status) |
| ---------- | ----------- |
| 2025-04-26 | 200         |

***

### 2. Filter by Condition

```bash
awk '$5 == 500' server.log
```

> Show lines where the **fifth column** equals `500` (Internal Server Error).

***

### 3. Print Matching Lines

```bash
awk '/timeout/' app.log
```

> Print lines that **contain** `"timeout"`.

Similar to `grep`, but with more flexibility if needed.

***

### 4. Count Matching Lines

```bash
awk '/error/ {count++} END {print count}' app.log
```

> Count how many lines **contain** `"error"`.

***

### 5. Custom Field Separator

If your logs use a delimiter other than space (like `,`, `|`, etc):

```bash
awk -F',' '{print $2}' csv_file.log
```

> `-F','` tells `awk` to use comma as **field separator**.\
> Print the **second column**.

***

### 6. Perform Calculations

Example: Sum all response times from column 7.

```bash
awk '{sum += $7} END {print sum}' access.log
```

> Add up all values from the **7th column** and print the total.

***

### 7. Highlight or Format Output

Example: Format and add labels manually.

```bash
awk '{print "Status: "$5", URL: "$7}' server.log
```

> Customize the printed output for better readability.

***

## Piping with `awk`

You can **pipe** any output into `awk` for instant filtering, just like with `grep`.

### Examples

#### 1. Monitor Running Processes and Extract Fields

```bash
ps aux | awk '{print $1, $2, $11}'
```

> Show **user**, **PID**, and **command name**.

***

#### 2. Filter Network Connections

```bash
netstat -an | awk '/LISTEN/ {print $4}'
```

> List only **listening ports**.

***

#### 3. Real-Time Log Analysis

```bash
tail -f app.log | awk '/error/ {print $0}'
```

> Monitor logs live, only show lines containing `"error"`.

***

#### 4. Combined Pipes for Advanced Filtering

```bash
dmesg | grep "usb" | awk '{print $1, $3, $5}'
```

> First filter by `"usb"`, then extract specific columns.

***

## awk Cheatsheet

<figure><img src="../.gitbook/assets/awk_cheatsheet.jpeg" alt=""><figcaption></figcaption></figure>
