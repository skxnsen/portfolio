---
icon: rectangle-terminal
---

# find command

## 🔍 `find` Command in Linux

The `find` command is used to search for files and directories within a directory hierarchy. Below is a reference for common options and use cases.

***

### 🧰 Common Options

| Option      | Description                                          |
| ----------- | ---------------------------------------------------- |
| `-name`     | Search for files by name                             |
| `-iname`    | Search for files by name (case-insensitive)          |
| `-type`     | Search by file type (e.g., file, directory, symlink) |
| `-size`     | Search for files by size                             |
| `-mtime`    | Search for files by modification time                |
| `-perm`     | Search for files by permissions                      |
| `-exec`     | Execute commands on found files                      |
| `-maxdepth` | Limit the depth of the search                        |
| `-prune`    | Exclude directories from the search                  |

***

### 📋 Basic Syntax

```bash
find [path] [expression]
```

* **`path`**: Directory or path to search (use `.` for current directory).
* **`expression`**: Search criteria, like file name, type, permissions, etc.

***

### 📝 Common Commands

#### Search by File Name

```bash
find /path/to/search -name "filename.txt"
find . -name "*.txt"  # Search for all .txt files in current directory
```

#### Case-Insensitive Search

```bash
find . -iname "*.txt"  # Search .txt files without case sensitivity
```

#### Search by File Type

*   **Regular files**:

    ```bash
    find . -type f  # Finds only files
    ```
*   **Directories**:

    ```bash
    find . -type d  # Finds only directories
    ```
*   **Symbolic links**:

    ```bash
    find . -type l  # Finds only symlinks
    ```

#### Search by Size

*   **Files larger than 1GB**:

    ```bash
    find . -size +1G
    ```
*   **Files smaller than 100KB**:

    ```bash
    find . -size -100k
    ```

#### Search by Modification Time

*   **Modified within the last 7 days**:

    ```bash
    find . -mtime -7
    ```
*   **Modified more than 30 days ago**:

    ```bash
    find . -mtime +30
    ```

#### Search by Permissions

*   **Files with specific permissions (e.g., 755)**:

    ```bash
    find . -perm 755
    ```

***

### 📤 Execute Commands on Found Files

#### Run Command on Found Files

*   **Example**: Delete all `.log` files

    ```bash
    find . -name "*.log" -exec rm {} \;
    ```
*   **Example**: Print the list of files

    ```bash
    find . -type f -exec ls -l {} \;
    ```

#### Use `+` for Efficient Execution

*   This will group the found files and run the command only once, rather than for each file.

    ```bash
    find . -name "*.txt" -exec cat {} +
    ```

***

### ⚙️ Combining Multiple Conditions

#### Find files that are `.txt` or `.md`

```bash
find . \( -name "*.txt" -o -name "*.md" \)
```

#### Find files with size greater than 10MB and modified in the last 7 days

```bash
find . -size +10M -mtime -7
```

***

### 💡 Additional Tips

* **`find` can be slow** if searching large directories. Combine with `-prune` to skip certain directories.
*   Use `-maxdepth` to limit the search depth.

    ```bash
    find . -maxdepth 2 -name "*.log"
    ```

***
