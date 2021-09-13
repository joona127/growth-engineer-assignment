# Growth Engineer - Help us!

Hey you! Are you up for a challenge? Nothing contrived here, this is a snapshot straight from an average day at the office!

## The context
We're looking to wow engineers. Show them what materials we offer, and provide some extra information about the strengths and weaknesses of the materials. One of our latest components that does that is our material overview. Can you build it? Yes you can!

## What do I do?
- Go to https://www.hubs.com/cnc-machining#materials and inspect the "Choose from a broad range of metals and plastics" block.
- Re-implement it to the best of your abilities using whatever technologies you want, but inside the boilerplate provided. You're free to add whatever frontend technologies you're most familiar with, but you get bonus points if you keep it in plain JS.
- The demo api provided is missing data on purpose, don't worry about missing it, work with what you have :)

Specifically your final result *needs* to include the following:
- 2 tables, 1 for plastic materials 1 for metal materials.
- When you click on any of the materials: Some kind of sidebar/modal navigation opens, showing the details of the material and its subsets.
- When you click on a material subset a second level of navigation needs to open, showing the details of the subset.
- At any stage, clicking outside the modal should close everything
- When you're looking at the subset details, there should be a 'back' button that takes you back to the previous material.


## Some pointers
- Keep your code clean and re-usable, what if we want to use your code for another block in the future?
- Think about the end-user, how will someone interact with this block? What devices will they be using?
- Don't spend too much time. A few hours at the most. Make sure to spend your time at the right places.

Good luck! If you have any questions, go with your best guess!

## Running the boilerplate
Any HTTP server should be fine, some examples:


Python
```
$ python -m http.server 8000
```

NodeJS
```
$ npm install -g http-server   # install dependency
$ http-server -p 8000
```

PHP
```
$ php -S 127.0.0.1:8000
```


## Working on the assignment
- Clone this repository
- Implement your feature
- Zip everything up and send it our way!
