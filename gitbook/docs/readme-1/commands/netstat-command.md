---
icon: rectangle-terminal
---

# netstat command

## 🌐 `netstat` Command in Linux

`netstat` (network statistics) is a command-line tool for monitoring network connections, routing tables, interfaces, and more. Although deprecated in favor of `ss`, it's still widely used and useful.

***

### 📋 Common Options

| Option | Description                                                  |
| ------ | ------------------------------------------------------------ |
| `-a`   | Show all connections (listening and non-listening)           |
| `-t`   | Show TCP connections                                         |
| `-u`   | Show UDP connections                                         |
| `-n`   | Show numerical addresses instead of resolving hostnames      |
| `-l`   | Show only listening sockets                                  |
| `-p`   | Show the process ID and name of the program using the socket |
| `-r`   | Display the kernel routing table                             |
| `-i`   | Show network interfaces and their statistics                 |
| `-s`   | Show summary statistics for each protocol                    |
| `-c`   | Continuously display output (refreshes every second)         |

***

### 🧪 Examples

#### Show All Listening and Established Connections

```bash
netstat -a
```

#### Show TCP Connections Only

```bash
netstat -at
```

#### Show UDP Connections Only

```bash
netstat -au
```

#### Show Listening Ports Only

```bash
netstat -l
```

#### Show Numeric IPs and Ports (No DNS Resolution)

```bash
netstat -n
```

#### Show Listening TCP Ports with Process Info

```bash
sudo netstat -tlnp
```

#### Display Routing Table

```bash
netstat -r
```

#### Display Interface Statistics

```bash
netstat -i
```

#### Protocol Summary Statistics

```bash
netstat -s
```

***

### 🔁 Continuously Monitor Connections

```bash
netstat -c
```

***

### 🛠 Tip

* You may need to use `sudo` for `-p` or to view ports used by other users.
*   For modern systems, prefer `ss`, e.g.:

    ```bash
    ss -tulnp
    ```

***
