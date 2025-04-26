# sed command

`sed` (Stream Editor) can **quickly clean, extract, or manipulate** logs.

`sed` reads from stdin (standard input) line-by-line.

If your logs are streaming (like from `tail -f`, `adb logcat`, `nc` or output logs from protocol like FIX, etc),
you can pipe that into `sed` to filter/modify the stream live.

---

## 🔥 Essential `sed` commands

### 1. Remove Timestamps

```bash
sed 's/^[0-9\-:. ,]\{18,30\}//'
```
- Removes date/time prefixes to **focus only on log content**.

---

### 2. Filter Specific Patterns (Extract)

```bash
sed -n '/Exception/p'
```
- Extract only lines containing "Exception" (or any error keyword).

---

### 3. Delete Noise / Verbose Logs

```bash
sed '/DEBUG\|INFO\|ViewRootImpl\|Choreographer/d'
```
- **Clean logs** by removing less critical messages live.

---

### 4. Mask Sensitive Information

```bash
sed 's/[a-zA-Z0-9._%+-]\+@[a-zA-Z0-9.-]\+\.[a-zA-Z]\{2,6\}/[email]/g'
```
- Replace emails in logs to **share them safely** for analysis.

---

### 5. Insert Separators Before Key Events

```bash
sed '/FATAL EXCEPTION/i ========================='
```
- **Visually separate** critical events inside a single logfile.

---

### 6. Normalize Log Level Formats

```bash
sed 's/\([eE][rR][rR][oO][rR]\)/ERROR/g'
```
- Normalize inconsistent log levels for easier searching.

---

### 7. Format FIX/Protocol Data (Optional)

```bash
sed 's/\x01/\n/g'
```
- Replace ASCII SOH (`\x01`) characters with newlines to **read FIX messages** easily.

---

### 8. Delete Continuation Lines or Junk

```bash
sed '/^[[:space:]]*$/d'
```
- Remove **empty or whitespace-only** lines.

---

## 🚀 Using `sed` Live

When streaming logs:

```bash
adb logcat | sed '/DEBUG/d' | sed 's/^[0-9\-:. ,]\{18,30\}//' | sed -n '/Exception/p'
```
- Clean live Android logs in real-time.
- Focus only on exceptions.

---

## 📋 Summary Table

| Goal                          | `sed` Command Example                            |
|:------------------------------|:-------------------------------------------------|
| Remove timestamps             | `sed 's/^[0-9\-:. ,]\{18,30\}//'`                 |
| Extract "Exception" lines     | `sed -n '/Exception/p'`                          |
| Delete noisy logs             | `sed '/DEBUG\|INFO/d'`                           |
| Mask sensitive data           | `sed 's/[a-zA-Z0-9._%+-]\+@[a-zA-Z0-9.-]\+\.[a-zA-Z]\{2,6\}/[email]/g'` |
| Insert separators             | `sed '/FATAL EXCEPTION/i ========================='` |
| Normalize case                | `sed 's/\([eE][rR][rR][oO][rR]\)/ERROR/g'`        |
| Format FIX messages           | `sed 's/\x01/\n/g'`                              |
| Remove empty lines            | `sed '/^[[:space:]]*$/d'`                        |

---

> 🧠 **Note:**  
> Always prefer to run `sed` without `-i` during investigations. 
> Stream output into a safe file or through `less`, `grep`, etc.

---

# 📌 Focus First on Actions That:
- Simplify reading the crash/error.
- Remove noise.
- Mask or sanitize sensitive info.
- Highlight key patterns.
