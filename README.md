# Jacquard - Yarn Parser

This is a antlr-based javascript parser for the Yarn syntax, intended for use in the Jacquard editor.

## Usage

Install `jacquard-yarnparser` via your favourite javascript package tool.

API Docs are [here](https://stirfirestudios.github.io/Jacquard-YarnParser/#parser)

## Building/Developing

### How it works

We use the ANTLR parser that @mcjones wrote for Yarnspinner for the most part, but first we need to pre-process the yarn files.

#### PreProcessor Pseudocode

(the implemented JS preprocessor is [here](preprocessor.js))

Because of the difficulties of parsing indented languages in ANTLR we pre-process the text file before passing it into the ANTLR parser. We add invisible shortcut start and shortcut end characters. These characters are `0x1D` and `0x1E`

Newlines can be either `\n` or `\r\n` to be aware of that (you can convert into `\n` if you wish)

It's probably a good idea to use a stack as the way of storing the whitspace encountered and if this was part of an option (so you can decide if you need to emit a "close option" and to figure out if this is a deeper level of nesting or not)

  1. Save our whitespace encountered as the empty string and not to emit a shortcut end character
  2. After a newline, check the whitespace between the newline and any other character
    - If:
        - we are in a comment and the line doesn't contain `*/`
    - then
        1. Skip to 3 below
    - If:
        - we are in a comment and the line contains `*/`
    - then
        1. take everything after the `*/` and and push it back as a new line.
        2. the current line should only be the remainder of the comment.
        2. Skip to 3 below
    - If: 
        - we aren't in a comment and the next characters are `//`
    - then
        1. Skip to 3 below
    - If:
        - we aren't in a comment and the next characters are `/*`
    - then
        1. we are in a comment
        2. Skip to 3 below
    - If:
        - we need to emit a close option 
    - and
        - the whitespace found is the same as the current whitespace encountered or shorter
    - then
        1. Insert a shortcut end character (`0x1E`) before the newline 
        2. pop the current whitespace encountered & option off the stack
        3. start reading from the newline
    - If:
        - the whitespace found is the same or longer than the current whitespace encountered
    - and 
        - the next characters are `->`
    - then
        1. Insert a single space and a shortcut start character  (`0x1D`) immediatley following the `->`
        1. Mark off that we are now in an option and the amount of whitespace we have onto the stack.
        2. Output the start of the line (whitespace and `->`), a space (` `), the shortcut start character (`0x1D`) and the rest of that line and return to 2 above
  3. Output the line and return to 2 above


### Dependencies

Jacquard - Yarn Parser requires the following dependencies be pre-installed:

* NodeJS (https://nodejs.org).
* Yarn package manager (https://yarnpkg.com).

First, you need to make sure that you have nodeJs and Yarn installed (see the dependencies section above and install the relevant version for your platform).

Currenlty we're using `node v8.9.4` and `yarn v1.5.1`.

### Spin up instructions

Using your command line, navigate to the directory you've cloned this repo into.

  1. Execute a `yarn install`. This will download all the necessary libraries you need.
  2. To run the parser on the command line execute `yarn parse`. This will list help.