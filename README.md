# Web Development Fundamentals

Hello world! Thanks for checking out this little introductory series on web development. This guide will walk you through some very basic concepts that are the building blocks for all things internet, from markup and css, to JavaScript and nodejs. By the end of this guide you should be able to develop web apps on your local machine and even publish sites online through hosting platforms such as Heroku and Netlify. Let's get into it!

## Navigating The Computer

Navigating a desktop computer or laptop is typically done with a keyboard and mouse. This is perfectly acceptable for the vast majority of use cases but as a web developer this can be very limiting. In almost all programming languages there is a heavy reliance on package management services to get projects up and running quickly. We have the power to get basic web apps up and running with just one command, installing hundreds of files in a matter of seconds. Later on you will learn about Node and Node Package Manager, services that make downloading and installing features in your web apps a trivial task. Also, most of the computers that house websites and servers have no screens at all. So we must be able to traverse through files and folders with only a keyboard and a text input/output interface known as the terminal. For this tutorial we will focus on Mac and Linux machines as there are extra steps to get up and running on Windows devices.

### Open The Terminal

On linux press crtl+alt+t and the terminal should pop up. On Mac press cmd+spacebar and type in terminal. This is the entry point into the heart of your computer. Be careful with the commands you punch in as you can utilize very powerful and sometimes irreversible create / delete operations. Let's start with some basic navigation.

1. ls

- This command lists all of the files and folders in your current directory (folder). Consider it like a little person in the computer. He only exists in one place and can only see the things around him. As you jump into and out of different folders your vision of files will change. If you ever need to know what your current environment contains you will use the ls command.

2. cd

- This is the command to change the directory that you are currently in (cd = change directory). To do anything in relation to your current position you start with './'. If your current directory contains a file named 'Desktop' to move into it you would type 'cd ./Desktop' and press enter. You will now see that your position have updated on the left of your cursor. In order to move back out of the file you would type 'cd ../'.

3. mkdir

- This command makes a new folder. You can specify where to create the folder, or you can omit the path to create a folder in your current directory. For example 'mkdir ./someFolder/newFolder' would create a new folder inside of someFolder and 'mkdir newFolder' would create a new folder inside the current folder.

4. touch

- This command creates files. The same location rules as before apply except you will now be creating files rather than folders. For example, 'touch ./newFolder/index.html' would create a new html file inside of newFolder.

5. rm

- This is the command to remove files and directories. Be careful with this one as it is irreversible. Example usage 'rm index.html' for sinlge files. 'rm -r newFolder' to delete everything out of the folder recursively. rm -rf newFolder to delete the directory completely in one step.

## HTML

Hyper-Text Markup Language. This is groundwork for every website. HTML tells the browser to render things on the screen. HTML tags are identifiers for which thing the screen should display. You can consider everything on a webpage to be a box with 4 characteristics: content - padding - border - margin. Content is the native height and width, padding is extra space between the content and the edges, border is the space that the edge takes up (this can take up space inside or outside depnding on something we'll discuss later), and margin is the space around the box.

A typical HTML document has two parts: the body and the head. The head holds information that tells the body how to act, and the body is what is shown to the user. The typical structure looks like this: 
```
    <html lang="en">  
        <head>  
            <title>An Amazing Website!</title>  
        </head>  
        <body>  
            <h1>Hello World!</h1>  
        </body>  
    </html>  
```

There are many different semantic elements that developers use for various reasons. The main items to consider are headings, paragraphs, containers (divs), and images. You can make most layouts with these alone and the semantics can be addressed later as they apply more to SEO and screen readers than functionality.

## CSS

Cascading Style Sheets are what we use to style websites. I would personally say that css work is the bulk of what you will do as a frontend developer. This can also be the most frustrating and least intuitive part of web development but once you understand a few basic principles then working will css will become predictable and rewarding! CSS can be added to an element in a number of ways, namely inline, through a style tag, and through importing a style sheet. Style sheets are external files ending in .css that we import into our document from the head.

Most styling will be done with classes. A class is a collection of css properties with a name. Classes declared lower in the css file will take priority over classes declared higher up. A class looks like this on an element

```
    <h1 class="heading">Hello World</h1>
```

and a class is defined like this in the css file or style tag

```
    .heading {
        color: blue;
        font-size: 24px;
        line-height: 1;
        text-align: center;
    }
```

Lets looks at the three ways to make this - 

<p style="color: red">This is red text</p>

Inline CSS looks like: 

```
    <p style="color: red">This is red text</p>
```

Inline style tags look like this:

```
    <style>
        .red {
            color: red;
        }
    </style>
    <p class="red">This is red text</p>
```

Stylesheet imports look like this

```
    <html>
        <head>
            <link rel="stylesheet" src="./index.css">
        </head>
        <body>
            <p class="red">This is red text</p>
        </body>
    </html>
```

## JavaScript

JavaScript is the magic inside the site. This is the programming language of the internet. The things you can do with javascript are basically endless but generally you'll use it to update HTML elements (style, position, etc) and to fetch data. You can also use JS for servers, desktop apps, writing and reading files, and much more but for now we'll stick with the basics. To add JavaScript to your website you must use a script tag. The JS can either be a file that you reference ending in .js or written right inside the tag.

Referencing a file: 

```
    <script src="./helloWorld.js"></script>
```

Inline JS:

```
    <script>
        const helloWorld = () => {
            console.log("Hello World!")
        }
        helloWorld()
    </script>
```

## Building Your Portfolio Page

This very high-level overview should be enough to start building a basic website. I've put together some boilerplate and here are the steps to get started.

1. Install node and npm on your computer - you can google this or follow these steps below (excecute each command one at a time)
```
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

close your terminal and open again (you may need to restart your computer) and then

```
    nvm install --lts
    node -v
    npm -v
```

The last two commands just confirm that it installed correctly. You should see something like 'v18.12.1'.

2. Make a github account - [github]("https://github.com")

You may need to look into personal access tokens for this next part, just google it and when you make one save in a text file somewhere as you'll need it in the future as well.

3. Open up you terminal, create a folder to hold your projects, and then navigate into it. 
For example 'mkdir projects' then 'cd projects'

Then run 'git clone https://github.com/Geoffxp/StarterPack.git'
followed by 'cd StarterPack' and then 'npm install'

(if it asks you for you username and password use your github username, press enter, then paste in the personal access token and press enter again. You wont see the token paste but it will be there.)

Once that's finished run 'npm start', open up your web browser, and go to 'http://localhost:3000'

You now have the project up and running and you are in the project directory. You can see all the files with 'ls' and you can edit them with your favorite text editor (I recommend sublime on linux and vscode on everything else). You can also just edit the files with linux's built in text editor nano. To stop the server press ctrl+c in your terminal. To start again, run 'npm start' (make sure you are in the project folder in your terminal)

To edit a file run the command 'nano filename'. For example in this project you can run 'nano index.html'. To save a file press ctrl+X, then press y, then enter.

You'll need to refresh your browser each time you make changes to see them take effect.

4. Now it's time to turn this simple page into your own portfolio website!

You will probably have to use a lot of google but that's what 90% of web development is lol.
Here's a list of things to add:

### HTML (index.html file)

- A heading using an h1 tag (`<h1>Heading</h1>`)
- A subheading using an h2 tag
- An unordered list of 3 of your hobbies 
```
    <ul>
        <li>Hobby one</li>
    </ul>
```
- An ordered list of your top 5 skills
```
    <ol>
        <li>Coding</li>
    </ol>
```
- An image (`<img/>`)
- A paragraph (`<p>This is a p tag</p>`)
- Add a container with three paragraphs inside of it, then style it so all three are in a row (look up 'display: flex', and 'display: grid')
- add classes to each element (`<h1 class="heading"></h1>`)

### CSS (main.css file)

- Change the body color to something besides white
- change the heading color and center it
- make the image 400px wide and 400px tall, filling the whole contains but not changing the aspect ratio
- center the image inside of it parent div (hint: display: flex on parent display block on img)
- remove the bullets from the unordered list and add a border to the bottom of every list item
- Make all of the paragraphs a light font weight (hint: reuse css classes or apply css to all p tags without using a class)

### JavaScript (hello.js file)

- Open the developer tools on your browser and find the console
- Check out the message that's been logged
- Change the message to say 'JavaScript is scary o.o'

In the next section we'll dive more into javascript and how it works!

Thank you, and enjoy!