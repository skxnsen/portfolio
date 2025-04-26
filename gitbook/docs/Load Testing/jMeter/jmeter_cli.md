# jMeter CLI commands

The most commonly used JMeter command-line options, structured for easy usage in automation and testing tasks.

---

## 📄 General Options

| Command | Description |
| :------ | :---------- |
| `--` | Print command line options and exit. |
| `-h`, `--help` | Print usage information and exit. |
| `-v`, `--version` | Print the version information and exit. |

---

## 📂 File and Test Options

| Command | Description |
| :------ | :---------- |
| `-p`, `--propfile <file>` | Use the specified JMeter property file. |
| `-q`, `--addprop <file>` | Load additional JMeter property file(s). |
| `-t`, `--testfile <file>` | Specify the JMeter test plan (.jmx) file to run. |
| `-l`, `--logfile <file>` | Save the sample results to a file. |
| `-i`, `--jmeterlogconf <file>` | Specify JMeter logging configuration (e.g., `log4j2.xml`). |
| `-j`, `--jmeterlogfile <file>` | Specify JMeter run log output file (e.g., `jmeter.log`). |

---

## 🖥️ Run Modes

| Command | Description |
| :------ | :---------- |
| `-n`, `--nongui` | Run JMeter in non-GUI mode (recommended for load tests). |
| `-s`, `--server` | Run JMeter in server (distributed) mode. |

---

## 🌐 Proxy Configuration

| Command | Description |
| :------ | :---------- |
| `-H`, `--proxyHost <hostname>` | Set proxy host. |
| `-P`, `--proxyPort <port>` | Set proxy port. |
| `-N`, `--nonProxyHosts <hosts>` | Set non-proxy hosts (e.g., `*.apache.org|localhost`). |
| `-u`, `--username <username>` | Proxy username. |
| `-a`, `--password <password>` | Proxy password. |

---

## ⚙️ Property Configuration

| Command | Description |
| :------ | :---------- |
| `-J`, `--jmeterproperty <name>=<value>` | Define additional JMeter properties. |
| `-G`, `--globalproperty <name>=<value>` | Define global properties for remote servers. <br> Example: `-Gport=123` or `-Gglobal.properties`. |
| `-D`, `--systemproperty <name>=<value>` | Define additional Java system properties. |
| `-S`, `--systemPropertyFile <file>` | Load Java system properties from file(s). |

---

## 📈 Results and Report Options

| Command | Description |
| :------ | :---------- |
| `-f`, `--forceDeleteResultFile` | Force delete old result and report folders before starting the test. |
| `-g`, `--reportonly <file>` | Generate report dashboard only from existing results. |
| `-e`, `--reportatendofloadtests` | Generate dashboard report automatically at the end of the test. |
| `-o`, `--reportoutputfolder <folder>` | Define output folder for the dashboard report. |

---

## 🌍 Remote (Distributed) Testing

| Command | Description |
| :------ | :---------- |
| `-r`, `--runremote` | Start all configured remote servers (`remote_hosts` property). |
| `-R`, `--remotestart <servers>` | Start specified remote servers (overrides `remote_hosts`). |
| `-X`, `--remoteexit` | Exit remote servers after test finishes. |

---

## 🛠️ Other Useful Options

| Command | Description |
| :------ | :---------- |
| `-d`, `--homedir <folder>` | Set JMeter home directory. |
| `-L`, `--loglevel <category>=<level>` | Set logging level. <br> Example: `jorphan=INFO`, `jmeter.util=DEBUG`, `com.example.foo=WARN`. |

---

## 🚀 Popular One-Liner Examples

### 1. **Run JMeter in Non-GUI Mode**
Execute the test plan in non-GUI mode for performance testing.
```bash
jmeter -n -t test_plan.jmx -l results.jtl
```
- `-n`: Non-GUI mode
- `-t`: Test plan (.jmx file)
- `-l`: Log the test results to a `.jtl` file

### 2. **Run Test and Generate Report**
Run a JMeter test and automatically generate the HTML report after the test finishes.
```bash
jmeter -n -t test_plan.jmx -l results.jtl -e -o /path/to/report
```
- `-e -o`: Generate the HTML report
- `-l`: Save the results to a `.jtl` file

### 3. **Run Test with Proxy Settings**
Run a test plan with a proxy server.
```bash
jmeter -n -t test_plan.jmx -l results.jtl -H proxyhost -P 8080
```
- `-H`: Proxy host
- `-P`: Proxy port

### 4. **Start Remote Servers**
Start JMeter on all configured remote servers defined in `remote_hosts`.
```bash
jmeter -n -t test_plan.jmx -r
```
- `-r`: Run remote servers as defined in `remote_hosts`

### 5. **Generate Report from Existing Results**
Generate an HTML dashboard report from previously saved test results.
```bash
jmeter -g results.jtl -e -o /path/to/report
```
- `-g`: Specify the path to the `.jtl` results file
- `-e -o`: Generate the HTML report

### 6. **Run JMeter with Custom Properties**
Override JMeter properties at runtime.
```bash
jmeter -n -t test_plan.jmx -Jproperty.name=value
```
- `-J`: Define a JMeter property

---

> 📚 **Note:**
> - Always prefer `-n` mode for automated or CI/CD test runs.
> - Combine `-f` and `-o` for clean report generation.
> - Properties can be passed dynamically via `-J`, `-G`, or `-D` switches for better flexibility.

---

### 📖 Resources:
* [jMeter Documentation](https://jmeter.apache.org/usermanual/index.html)
* [jMeter CLI](https://jmeter.apache.org/usermanual/get-started.html#non_gui)
