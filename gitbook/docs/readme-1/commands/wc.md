---
icon: rectangle-terminal
---

# wc command

## 🔢 `wc` Command in Linux

The `wc` (word count) command is used to count **lines**, **words**, **characters**, **bytes**, and **maximum line lengths** in text files or input streams.

***

### 📋 Common Options

| Option | Description                                  |
| ------ | -------------------------------------------- |
| `-l`   | Count lines                                  |
| `-w`   | Count words                                  |
| `-c`   | Count bytes                                  |
| `-m`   | Count characters (useful for multibyte text) |
| `-L`   | Print length of longest line                 |

***

### 🧪 Examples

#### Count Lines, Words, and Bytes in a File

```bash
wc file.txt
```

**Output format:**\
`<lines> <words> <bytes> file.txt`

***

### 🛠 Use Cases

* **Check file size quickly** by byte count: `wc -c filename`
* **Count lines of code**: `find . -name "*.py" | xargs wc -l`
* **Measure log file growth**: `wc -l logfile.log`

***

### 🔗 More Pipe Examples

Practical combinations of `wc` with other Linux commands using pipes:

#### Count files in a directory

```bash
ls | wc -l
```

#### Count non-empty lines in a file

```bash
grep -v '^$' file.txt | wc -l
```

#### Count how many `.txt` files contain the word "error"

```bash
grep -il "error" *.txt | wc -l
```

#### Count total words across multiple `.md` files

```bash
cat *.md | wc -w
```

#### Count active processes

```bash
ps aux | wc -l
```

#### Count users currently logged in

```bash
who | wc -l
```

#### Count open network connections

```bash
netstat -tun | tail -n +3 | wc -l
```

***
