all:hello
hello:main.js
node main.js
clean:
rm -f *.log
rm -f *.out