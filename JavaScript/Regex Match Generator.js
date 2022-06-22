
// Intro
// In regular expression, there is a meta-character called alternation, written as |. This meta-character behaves like an OR 
// operator that matches either of the sides.

// For example: abc|123 will match either "abc" or "123". They can also match empty string.

// Task
// Write a function called regexMatches(regex). Given a regex pattern, return a list of all possible matches.

// Examples
// let pattern1 = = /abc|123/
// regexMatches(pattern1) # -> should output ["abc", "123"]

// let pattern2 = = /abc|def|ghi/

// regexMatches(pattern2) # -> should output ["abc", "def", "ghi"]
const regexMatches = regex => String(regex).replace(/\//g, '').split('|')
