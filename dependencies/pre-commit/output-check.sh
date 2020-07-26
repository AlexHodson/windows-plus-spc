#!/bin/sh

# Redirect output to stderr.
exec 1>&2
# enable user input
exec < /dev/tty

# The command which is piped into the 'git diff' command
fileCommand=""
# The list of any files that should be excluded from the console checker
excludableFiles=("dependencies/pre-commit/*")

# Loops over every excludable file name
for t in ${excludableFiles[@]}; do
  ## Generates the exclude command for the file using concatenation
  fileCommand="${fileCommand} :(exclude)${t}"
done

# Test Strings
consoleregexp='System.out.print'
# consoleregexp="console."
# consoleregexp='print'

# Add "-- . ':(exclude)[files]/'" at the end of each 'git diff' command to exclude that particular file/folder
## "-- . ':(exclude)src/'" is used when testing new changes to ignore output commands in this file
if test $(git diff --cached $fileCommand | grep ^+ | grep $consoleregexp | wc -l) != 0
then
  echo -e "\n\033[1m\e[033mOutputs Found\e[39m\033[0m"
  git grep -n -E --cached $consoleregexp $(git diff --cached --name-only  --diff-filter=d -- $fileCommand)
  echo -e "\n"
  echo "There are some occurrences of '$consoleregexp' at your modification. Please remove them before continuing."
  echo $yn | grep ^[Yy]$
  exit 1;
else
  echo "No Outputs Found In Staged Files"
fi
