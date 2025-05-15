---
icon: binary-lock
---

# chmod and File Permissions

## 🛡️ `chmod` and File Permissions in Linux

`chmod` (change mode) is used to manage **file permissions** in Linux. Permissions control who can **read**, **write**, or **execute** a file or directory.

***

### 🔤 Permission Types

| Symbol | Meaning | Applies To     |
| ------ | ------- | -------------- |
| `r`    | Read    | View content   |
| `w`    | Write   | Modify content |
| `x`    | Execute | Run as program |

***

### 👥 Permission Levels

| Level | Description                 |
| ----- | --------------------------- |
| `u`   | User (owner)                |
| `g`   | Group                       |
| `o`   | Others (everyone else)      |
| `a`   | All (user + group + others) |

***

### 🔢 Numeric (Octal) Representation

Each permission is a number:

| Permission | Binary | Octal |
| ---------- | ------ | ----- |
| `r`        | 100    | 4     |
| `w`        | 010    | 2     |
| `x`        | 001    | 1     |

Add values to combine permissions:

| Access | Octal |
| ------ | ----- |
| `r--`  | 4     |
| `rw-`  | 6     |
| `rwx`  | 7     |

**Example:** `chmod 755 file`\
Means:

* User: `rwx` (7)
* Group: `r-x` (5)
* Others: `r-x` (5)

***

### 🔧 Common Usage

#### Set Permissions with Numbers

```bash
chmod 644 file.txt     # rw-r--r--
chmod 755 script.sh    # rwxr-xr-x
```

#### Add or Remove Permissions Symbolically

```bash
chmod +x script.sh     # Add execute for all
chmod u+x script.sh    # Add execute for user
chmod go-w file.txt    # Remove write for group/others
```

#### Recursive Change (for folders)

```bash
chmod -R 755 /path/to/dir
```

***

### 🔍 View File Permissions

Use `ls -l` to list file permissions:

```bash
ls -l file.txt
```

Example output:

```
-rw-r--r-- 1 user group  1234 May 15 14:00 file.txt
```

* First char: `-` (file) or `d` (directory)
* Next 9: permissions for user, group, others

***

### 🔐 Special Bits (Optional)

| Bit      | Octal | Description                         |
| -------- | ----- | ----------------------------------- |
| `setuid` | 4     | Run as file owner's user ID         |
| `setgid` | 2     | Run as group's ID / sticky group    |
| `sticky` | 1     | Only owner can delete (e.g. `/tmp`) |

Set using `chmod`:

```bash
chmod 4755 file      # setuid
chmod 2755 dir       # setgid
chmod 1755 dir       # sticky
```

***

### ✅ Examples

#### Make script executable

```bash
chmod +x my_script.sh
```

#### Remove all access for others

```bash
chmod o-rwx file.txt
```

#### Set folder and contents to rwxr-xr-x

```bash
chmod -R 755 my_folder
```

***
