---
icon: rectangle-terminal
---

# tail command

## 🦒 `tail` Command in Linux

The `tail` command is used to display the end of a file. It's useful for monitoring logs and large files.

***

### 🧰 Common Options

| Option       | Description                                           |
| ------------ | ----------------------------------------------------- |
| `-n [lines]` | Show the last `[lines]` lines (default is 10)         |
| `-f`         | Follow the file as it grows (useful for logs)         |
| `-c [bytes]` | Show the last `[bytes]` bytes                         |
| `-q`         | Suppress headers when multiple files are being tailed |
| `-v`         | Show the header when multiple files are being tailed  |

***

### 📋 Basic Syntax

```bash
tail [options] [file]
```

***

### 📝 Common Commands

#### Show the Last 10 Lines (Default)

```bash
tail /path/to/file
```

#### Show the Last N Lines

```bash
tail -n 20 /path/to/file  # Show the last 20 lines
```

#### Follow a File for Real-Time Updates

```bash
tail -f /path/to/logfile
```

* This is commonly used for monitoring log files in real time.

#### Show the Last N Bytes

```bash
tail -c 50 /path/to/file  # Show the last 50 bytes
```

#### Show Multiple Files at Once

```bash
tail -n 10 -q file1.txt file2.txt  # Show last 10 lines of file1 and file2 without headers
```

***

### 💡 Additional Tips

* **Using `tail -f` with multiple files**: The `-f` option allows you to view real-time updates, which is great for log files or watching a file being written to.
*   **Combining with `grep`**: You can pipe the output of `tail` to `grep` to filter the results.

    ```bash
    tail -f /var/log/syslog | grep "error"
    ```
* **Use `Ctrl + C`** to stop following the file when using `tail -f`.

***
