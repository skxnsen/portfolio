---
icon: python
---

# Generators

## ⚙️ Generators in Python

Generators are a way to create **iterators** in Python using **lazy evaluation**, meaning values are produced **on the fly** and not stored in memory. They're ideal for handling **large datasets**, **infinite sequences**, or **streamed data**.

***

### 🧠 Why Generators Are Memory Efficient

Generators are memory efficient because they produce values **lazily** - that is, **one at a time and only when needed**, instead of computing and storing the entire sequence in memory at once.

Let’s break this down clearly:

#### 🔁 Traditional Function (stores everything)

```python
def firstn(n):
    nums = []
    for i in range(n):
        nums.append(i)
    return nums
```

* Creates and stores the entire list of `n` items in memory.
* For large `n`, memory usage grows significantly.

#### ⚙️ Generator Function (yields one at a time)

```python
def firstn_generator(n):
    for i in range(n):
        yield i
```

* Does **not** store all `n` items.
* Remembers only:
  * The **current value** of `i`
  * The **function state** (where to resume next)

#### 🔍 Real Example (Memory Comparison)

```python
from sys import getsizeof

big_list = [i for i in range(1_000_000)]
big_gen = (i for i in range(1_000_000))

print(getsizeof(big_list))  # ~8,000,000 bytes (varies)
print(getsizeof(big_gen))   # ~200 bytes
```

* `big_list`: Stores **1 million integers**
* `big_gen`: Stores only the **generator machinery**

#### 🚚 Analogy

**List approach**: Bake every loaf of bread in advance and store them.\
**Generator approach**: Bake one loaf **only when a customer walks in**.

***

### 🔁 Key Characteristics

* Use `yield` instead of `return`
* Produce values **one at a time**
* Resume function state between calls
* More memory-efficient than lists

***

### 🧱 Generator Syntax

#### A Simple Generator Function

```python
def countdown(n):
    while n > 0:
        yield n
        n -= 1
```

#### Usage:

```python
for number in countdown(5):
    print(number)
```

***

### 🧮 Generator Expression

Similar to list comprehensions, but with \*\*()`instead of`\[]\`:

```python
squares = (x*x for x in range(10))
print(next(squares))  # 0
print(next(squares))  # 1
```

***

### ⚖️ Generators vs Lists

| Feature      | List                           | Generator                      |
| ------------ | ------------------------------ | ------------------------------ |
| Syntax       | `[x*x for x in range(1000)]`   | `(x*x for x in range(1000))`   |
| Memory Usage | Loads all at once (high usage) | Yields one item at a time      |
| Speed        | Faster for small data          | Better for large/streamed data |
| Reusability  | Can be reused                  | Exhausted after one iteration  |

***

### 🧪 Examples

#### Generate Even Numbers

```python
def even_numbers(limit):
    for i in range(limit):
        if i % 2 == 0:
            yield i
```

#### Fibonacci Sequence

```python
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b
```

#### Read File Line by Line (Memory Efficient)

```python
def read_large_file(filepath):
    with open(filepath) as f:
        for line in f:
            yield line
```

***

### 🔄 Generator Methods

| Method      | Description                     |
| ----------- | ------------------------------- |
| `next()`    | Gets the next value             |
| `send(val)` | Sends value to paused generator |
| `throw()`   | Raises exception in generator   |
| `close()`   | Terminates the generator        |

#### Example:

```python
gen = countdown(3)
print(next(gen))   # 3
print(next(gen))   # 2
gen.close()
```

***

### ✅ Benefits of Generators

* ✅ Low memory usage — especially for large or infinite data.
* ✅ Faster startup — can start processing immediately.
* ✅ Great for **data pipelines**, streaming, and lazy evaluation.

***

### ⚠️ Tradeoffs

* ❌ Can be **iterated only once**
* ❌ No backward access
* ❌ No random indexing (like `list[5]`)

***

Let me know if you want to extend this with `yield from`, coroutines, or async generators!
