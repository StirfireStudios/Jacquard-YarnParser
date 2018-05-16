# Jacquard - Yarn Parser

This is a antlr-based javascript parser for the Yarn syntax, intended for use in the Jacquard editor.

## Usage

Install `jacquard-yarnparser` via your favourite javascript package tool.

API Docs are [here](https://stirfirestudios.github.io/Jacquard-YarnParser/#parser)

## Building/Developing

### PreProcessor Pseudocode

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

If you want to modify the ANTLR definitions, you should setup ANTLR for your environment.

### Antlr Spinup

#### Windows

Install the Java SE Development Kit (either version 7 or 8) - check java.sun.com for downloads

Ensure that `javac.exe` and `java.exe` executables are in your path: 
  
  1. Open a command prompt
  2. try the command `java -version` (you should be greeted with a version number)
  3. try the command `javac -version` (again, a version should be output)

If either javac or java aren't present check the following:

  1. check your environment variables and ensure your System Variable JAVA_HOME is set to the root of the java SDK (usually something like `C:\Program Files\Java\jdk1.8.0_131`)
  2. check your system path and user path for `%JAVA_HOME%\bin`, if it's not present - add it to the end of either your user or system path. 
  3. if you had to add either of the above, sign out and sign back in.

Next - we need to get ANTLR itself and put it in your classpath. Check out the instructions [here](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md#windows)

### Showing antlr output

To preprocess all the files in the `yarn_files` directory `yarn preprocessTestFiles`. To preprocess a specific file, or another file, take a look at `yarn parse --help`

To see the AST for a given file run `yarn antlr-gui preprocessed_yarn_files\<filename>`

To update the javascript antlr files run `yarn antlr-compile`. You'll need to do this if you modify the `.g4` files in the `src/antlr/` directory

### Spin up instructions

Using your command line, navigate to the directory you've cloned this repo into.

  1. Execute a `yarn install`. This will download all the necessary libraries you need.
  2. To run the parser on the command line execute `yarn parse`. This will list help.
  
If you wish to rebuild the documentation, you'll need to have [documentation.js](http://documentation.js.org/) installed, which you can do via `npm install -g documentation` - then you can run `yarn serveDoc` to serve the docs locally or `yarn buildDoc` to build the docs directory
