---
icon: link-horizontal
---

# Diff between symlink and hard link

## 🔗 Symlinks vs Hard Links in Linux

Links are a powerful feature in Linux that allow you to create references to files. There are two types of links: **symlinks** (symbolic links) and **hard links**. Here’s a comparison of both.

***

### 🧰 Key Differences

| Feature               | **Symlink (Symbolic Link)**                                                        | **Hard Link**                                            |
| --------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **Definition**        | A pointer or reference to another file                                             | Another reference to the same inode (file data)          |
| **File Type**         | Can link to files or directories                                                   | Links only to files (not directories)                    |
| **Inode**             | Points to the file name and path                                                   | Points directly to the inode (file’s data block)         |
| **Cross Filesystems** | Can link across different filesystems                                              | Cannot link across different filesystems                 |
| **Link Target**       | Can point to a file that does not exist (broken link)                              | Always points to an existing file                        |
| **File Deletion**     | If the original file is deleted, the symlink becomes broken                        | If the original file is deleted, hard links remain valid |
| **Permissions**       | Can have different permissions from the original file                              | Shares the same permissions as the original file         |
| **Identification**    | Identified with `l` in `ls -l` (e.g., `lrwxrwxrwx`)                                | Identified with `-` in `ls -l` (e.g., `-rw-r--r--`)      |
| **Use Case**          | Used for creating shortcuts, linking across filesystems, or redirecting file paths | Used for file redundancy and reliability                 |

***

### 📝 Examples

#### Create a Symlink

```bash
ln -s /path/to/original/file /path/to/symlink
```

#### Create a Hard Link

```bash
ln /path/to/original/file /path/to/hardlink
```

***

### ⚡ When to Use Symlinks vs Hard Links

* **Use Symlinks** when:
  * You need to link across filesystems.
  * You want to create a shortcut to a file or directory.
  * You don’t mind if the link becomes broken if the target is deleted.
* **Use Hard Links** when:
  * You want to create an additional reference to a file within the same filesystem.
  * You want the file to persist even if the original file is deleted (as long as there’s another link).

***

### 💡 Additional Notes

* **Symlinks** are more flexible but can become broken if the target file is moved or deleted.
* **Hard Links** are more robust for file consistency, but they can only be created within the same filesystem and are limited to files (not directories).
* **Hard Link l**inks only to files (not directories), because hard link points directly to an inode, when creating a hard link to a directory, it would mean both the directory and the hard link share the same inode, so if hard links to directories were allowed, it would create potential **cyclic dependencies**, e.g., a directory could link to itself through its subdirs, leading to an infinite loop, which would make it impossible to traverse the file system.

***
