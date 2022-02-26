# tsql-formatter
[![Build](https://github.com/silwalanish/tsql-formatter/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/silwalanish/tsql-formatter/actions/workflows/build.yml)
[![Tests](https://github.com/silwalanish/tsql-formatter/actions/workflows/test.yml/badge.svg)](https://github.com/silwalanish/tsql-formatter/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/silwalanish/tsql-formatter/branch/main/graph/badge.svg?token=91EGQEVV1K)](https://codecov.io/gh/silwalanish/tsql-formatter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A code formatter for T-SQL.

# Project Scope
- Create a code formatter that follows the [Mozilla SQL Style Guide](https://docs.telemetry.mozilla.org/concepts/sql_style.html)
- Expose a programmtic API to take in a T-SQL query and return a formatted query.
- Write a CLI command to format sql file with glob support. Reference [Prettier CLI](https://prettier.io/docs/en/cli.html)

# Tasks
- [ ] Add ability to specify the T-SQL syntax as a [CFG](https://en.wikipedia.org/wiki/Context-free_grammar).
- [ ] Implement tokenizer for the given grammer.
- [ ] Implement parser to generate AST from the given CFG and list of tokens.
- [ ] Implement formatter to pretty print the AST. (No line limit)
- [ ] Implement node script to use the formatter from CLI.

# License
[MIT](LICENSE)
