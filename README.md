# Sketch Style Dictionary
A custom Style Dictionary action to output Sketch files. It's a bit messy right now, but has potential. Because Sketch files are a zipped directory of JSON files, it is straightforward (albeit verbose) to write them.

### How it works
For some reason, Sketch does not like it if you just build the Sketch file by hand and zip up the contents. Even if you take a Sketch file, rename it, unzip it, zip it back up, rename it to have a .sketch extension, it does not like it. So what we do is use the jszip library to create a read stream from the .sketch file, and a write stream to write to a new one with the manipulated contents.

### Gotchas
For text styling, Sketch uses some weird plist format that references ObjC classes that is then base64'd into a string. It's pretty gross. Because of that, manipulating text objects programmatically is difficult.


### Testing
For now in the test directory I have an example Style Dictionary package that depends on this module and uses it as a consumer would. To get everything hooked up, run
`npm run test-setup`