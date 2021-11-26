This is the source of the Repo for the website
To see the website visit: [https://delftopenhardware.github.io/](https://delftopenhardware.github.io/)
# The Website is done with jupyter book static site generator
https://jupyterbook.org/intro.html


## Contributing to content

### Reproducing the repository in your pc
```{note}
In order to reproduce this code you need to have [jupyter book](https://jupyterbook.org/intro.html) installed. You can use jupyter cli to make changes, but we also provide some bash scripts make this step less tedious, in order to be able to use this scripts you need a unix shell as is written in bash.
```

- Fork first so that you can work on your own version and experiment there.
- We recommend to create a specific virtual environment for the project. 
- For instance you can do with python 3: `python3 -m venv .venv`. Activate it in Unix `source .venv/bin/activate`.
- Install the dependecies: `python setup.py install`
- Navigate to the `./docs` folder
- Simply run `bash build.sh`, this will automatically build a new table of contents and open the static website on your browser.
- Go to the `./_build/html/` folder and open the index.html file. This should launch the website with the latest version in your browser
```{warning}
You might need to open your browser in an incognito window, as the browser will cache some of the html files and will render old versions of the website. There are more fancy ways to switch off caching, like browser extensions.
```

## Common issues and trouble shooting
- When running the jupyter-book locally you might have installed different

**Comment on the pages comment**


