---
icon: rectangle-terminal
---

# cat command

## 🐱 `cat`, `tac`, and Piping Commands in Linux

### 📋 Command & Option Table

| Command / Option              | Description                                     |
| ----------------------------- | ----------------------------------------------- |
| `cat file.txt`                | View contents of a file                         |
| `cat file1 file2`             | Concatenate multiple files                      |
| `cat > file.txt`              | Create a file from input (overwrites if exists) |
| `cat >> file.txt`             | Append input to an existing file                |
| `cat -n file.txt`             | Number all lines                                |
| `cat -b file.txt`             | Number non-empty lines only                     |
| `cat -s file.txt`             | Squeeze multiple blank lines                    |
| `cat -E file.txt`             | Show `$` at end of each line                    |
| `tac file.txt`                | Output file with lines in reverse order         |
| `cat file.txt \| grep "term"` | Pipe output to `grep` for searching             |
| `cat file.txt \| sort`        | Pipe output to `sort` to order lines            |
| `cat file.txt \| less`        | Pipe output to `less` for scrollable view       |

***

### 📄 Basic Usage

#### View File Content

```bash
cat file.txt
```

#### View Multiple Files

```bash
cat file1.txt file2.txt
```

#### Create a File (from Input)

```bash
cat > newfile.txt
```

Type your content, then press `Ctrl+D` to save.

#### Append to an Existing File

```bash
cat >> existingfile.txt
```

***

### 🔢 Numbering Lines

#### Number All Lines

```bash
cat -n file.txt
```

#### Number Non-Empty Lines Only

```bash
cat -b file.txt
```

***

### 🧹 Clean Output

#### Squeeze Blank Lines

```bash
cat -s file.txt
```

#### Show End of Line Characters

```bash
cat -E file.txt
```

***

### 🔁 Reverse Output

#### Use `tac` to Reverse Lines

```bash
tac file.txt
```

***

### 📤 Piping with `cat`

#### Filter with `grep`

```bash
cat file.txt | grep "error"
```

#### Sort Lines

```bash
cat file.txt | sort
```

#### Scroll with `less`

```bash
cat file.txt | less
```

***

### 📎 Merge Files into One

#### Save Merged Output to a New File

```bash
cat file1.txt file2.txt > merged.txt
```

#### Append More Content to Merged File

```bash
cat file3.txt >> merged.txt
```

***

