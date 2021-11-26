!/bin/bash
# Build jupyter-books faster with chained toc, build and launching in bash
# A simple bash script to automate the building of table of contents,

REPO=$(pwd)

if [ -d "./_toc.yml" ]
then
    rm -f "_toc.yml"
fi

# Build table of contents website
jupyter-book toc to-project "${REPO}/ _toc.yml"

if [ -d "./_build" ]
then
    rm -rf "./_build"
fi

mkdir _build/

# Build html
jupyter-book build ${REPO}

# Copy slides inside _build/html
# If we have html slides at some point we can use this
# cp -R ../slides ./_build/html