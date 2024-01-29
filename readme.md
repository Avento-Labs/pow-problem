# Avento Blockchain Validation

## Problem Statement:
Welcome to the world of AventoBlockchain, a new-age digital ledger system. Your task is to implement a simplified version of a Proof of Work (PoW) algorithm, crucial for maintaining the integrity of the AventoBlockchain. The AventoBlockchain employs a unique validation mechanism for adding new blocks, known as the "Avento Hash Challenge" (AHC).

In the AHC, each block contains a string "S", an integer "N", and a mystery number "X". To successfully mine (add) a block to the AventoBlockchain, you must find the smallest positive integer X such that when X is appended to S and hashed using a special AventoHash function, the resulting hash string begins with exactly N leading zeroes.

**Input Format:**
* The JSON file called "input.json" contains an array of JSON objects, each representing a test case. Each test case is a JSON object with two keys, "S" and "N", corresponding to the string S and integer N, respectively. 

## Constraints:
* S consists of alphanumeric characters (both lowercase and uppercase).
* 0 ≤ N ≤ 5

## Output Format:
For each test case, output a single line containing the smallest positive integer X that solves the Avento Hash Challenge for the given S and N.

**Sample Input:**
```
[
    {
        "S": "274873082711-0x3dc1d85dffc6fea2fbce4703bf03428f1be11409-634913674699",
        "N": 1
    },
    {
        "S": "761235837059-0x124d627b287054d022213f718b747acca27794ef-300773947541",
        "N": 4
    }
]
```

**Sample Output:**

```
Transaction 1 is valid
Transaction 2 is valid
```