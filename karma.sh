git log --pretty=oneline --no-merges | cut -d " " -f 2 | cut -d "(" -f 1 | cut -d ":" -f 1 | sort -r | uniq -c | sort -nr -k1 > karma.txt
