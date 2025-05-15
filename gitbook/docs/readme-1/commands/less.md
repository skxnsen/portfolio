---
icon: rectangle-terminal
---

# less command

## 📖 `less` Command in Linux

The `less` command lets you **view large files** or outputs one screen at a time — ideal for scrolling through long content.

***

### 🧰 Basic Usage

#### Open a file with `less`

```bash
less filename.txt
```

#### Pipe output into `less`

```bash
cat longfile.txt | less
# or
less < longfile.txt
```

***

### 🔍 Common Navigation Keys

| Key       | Action                     |
| --------- | -------------------------- |
| `↓` / `j` | Scroll down one line       |
| `↑` / `k` | Scroll up one line         |
| `Space`   | Scroll down one page       |
| `b`       | Scroll up one page         |
| `g`       | Go to beginning of file    |
| `G`       | Go to end of file          |
| `/text`   | Search forward for "text"  |
| `?text`   | Search backward for "text" |
| `n`       | Repeat the last search     |
| `q`       | Quit `less`                |

***

### 🧪 With Other Commands

#### View logs

```bash
less /var/log/syslog
```

#### View command output

```bash
ps aux | less
```

***

### 💡 Tips

* Unlike `cat`, `less` doesn't load the entire file into memory — it’s better for **very large files**.
* You can scroll **backward**, which is not possible with just `cat`.
