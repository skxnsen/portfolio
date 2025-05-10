---
icon: rectangle-terminal
---

# cp command

## 📝 `cp` Command in Linux

The `cp` command is used to copy files and directories in Linux.

***

### 🧰 Common Options

| Option     | Description                                                       |
| ---------- | ----------------------------------------------------------------- |
| `-r`       | Copy directories recursively                                      |
| `-i`       | Prompt before overwriting an existing file                        |
| `-u`       | Copy only when the source file is newer than the destination file |
| `-v`       | Verbose mode, show files being copied                             |
| `-n`       | Do not overwrite an existing file                                 |
| `-p`       | Preserve file attributes (timestamps, mode, ownership)            |
| `-a`       | Archive mode (preserve structure, symlinks, and attributes)       |
| `--backup` | Make a backup of the destination file before overwriting          |

***

### 📋 Basic Syntax

```bash
cp [options] [source] [destination]
```

* **`source`**: File or directory to copy.
* **`destination`**: The location to copy the source to.

***

### 📝 Common Commands

#### Copy a File

```bash
cp file1.txt file2.txt  # Copy file1.txt to file2.txt
```

#### Copy a Directory Recursively

```bash
cp -r dir1/ dir2/  # Copy the contents of dir1 to dir2
```

#### Verbose Mode (Show Progress)

```bash
cp -v file1.txt file2.txt  # Show details of copied files
```

#### Copy and Preserve File Attributes

```bash
cp -p file1.txt file2.txt  # Preserve timestamps, permissions, etc.
```

#### Copy Without Overwriting Existing Files

```bash
cp -n file1.txt file2.txt  # Copy only if file2.txt does not exist
```

#### Copy with Backup (e.g., `file1.txt` becomes `file1.txt~`)

```bash
cp --backup file1.txt file2.txt
```

***

### ⚙️ Copy Multiple Files to a Directory

#### Copy Multiple Files to a Directory

```bash
cp file1.txt file2.txt /path/to/destination/
```

***

### 💡 Additional Tips

* **Use `-i` for safety**: If you are unsure whether files will be overwritten, use `-i` to be prompted before overwriting.
*   **Combine with `find`**: You can combine `cp` with `find` to copy files that meet certain criteria.

    ```bash
    find . -name "*.txt" -exec cp {} /path/to/destination/ \;
    ```

***
