# sed command

`sed` (Stream Editor) can **quickly filter, clean, and write** logs for QA purposes.

`sed` reads from stdin (standard input) line-by-line, making it powerful for live streaming logs (e.g., `tail -f`, `adb logcat`, etc.).

---

## 🔹 Basic Syntax

```bash
sed [options] 'command' [file...]
```

- **`[options]`** — flags to control `sed` behavior.
- **`'command'`** — what transformation to apply.
- **`[file...]`** — input file(s) or piped input.

---

## 🔥 Essential `sed` commands

| Command / Syntax                                | Description                                                  |
|:-------------------------------------------------|:-------------------------------------------------------------|
| `sed -n '/pattern/p' file.log`                   | **Filter**: Print lines matching a pattern                   |
| `sed '/pattern/d' file.log`                      | **Delete**: Remove lines matching a pattern                  |
| `sed '/pattern/!d' file.log`                     | **Inverse filter**: Keep only lines matching a pattern       |
| `sed 's/old/new/g' file.log`                     | **Replace**: Global replacement of text                      |
| `sed -r 's/([0-9]{4})-([0-9]{2})/\2-\1/' file.log` | **Regex Replace**: Use extended regex                        |
| `sed '/pattern/w output.txt' file.log`           | **Write**: Write matching lines to another file              |
| `sed '/pattern/r extra.txt' file.log`            | **Read**: Insert contents from a file after matched line     |
| `sed -e 'command1' -e 'command2' file.log`        | Combine multiple sed commands                                |

---

## 🔹 Very Quick Real-World Examples (Viewing, Not Editing)

| Goal                                | Command Example                                      |
|:------------------------------------|:-----------------------------------------------------|
| Show only error lines               | `sed -n '/ERROR/p' logfile.log`                      |
| Show lines after a crash            | `sed -n '/FATAL EXCEPTION/,$p' logfile.log`           |
| Exclude debug lines                 | `sed '/DEBUG/d' logfile.log`                         |
| Normalize "error" case              | `sed 's/[eE][rR][rR][oO][rR]/ERROR/g' logfile.log`    |
| Remove empty lines                  | `sed '/^[[:space:]]*$/d' logfile.log`                 |
| View readable FIX messages          | `tail -f fix.log \| sed 's/\x01/\n/g'`                 |
| Highlight "Exception" with marker   | `sed '/Exception/i ===========' logfile.log`         |
| Print blocks between two patterns   | `sed -n '/BEGIN TRACE/,/END TRACE/p' logfile.log`     |
| Keep only lines with both "error" and "timeout" | `sed -n '/error/Ip' logfile.log \| sed -n '/timeout/Ip'` |

---

## 🔹 Piping `sed` with other tools

| Tool + `sed` Example                     | Description                                |
|:-----------------------------------------|:-------------------------------------------|
| `adb logcat \| sed -n '/Exception/p'`      | Filter live Android logs for exceptions    |
| `tail -f server.log \| sed '/DEBUG/d'`     | Remove noisy debug lines while tailing     |
| `nc localhost 5000 \| sed -n '/CRITICAL/p'`| Filter TCP streamed logs for "CRITICAL"    |
| `cat file.log \| sed -n '/error/p' \| grep timeout` | Double filter using sed + grep          |


---

> 📌 **Note:** In RCA/log viewing, `sed` is typically used with `-n` and `p` commands to **extract**, **highlight**, and **format**, but **not modify** files.

> 🧠 **Tip:** Always prefer to run `sed` without `-i` during investigations. Stream output into a safe file or view in terminal.
