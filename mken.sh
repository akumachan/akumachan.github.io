!#/bin/bash

#Parameter1: Category name
#Parameter2: Entry title

dir="./${1}/${2}/"
file="${dir}index.md"

cd ./content/blog/
mkdir -p $dir
echo "---" > ${file}
echo "title: ${2//_/ }" >> ${file}
echo "date: \"`date "+%Y-%m-%d %H:%M:%S"`\"" >> ${file}
echo "description: \"\"" >> ${file}
echo "category: \"${1}\"" >> ${file}
echo "tags: []" >> ${file}
echo "---" >> ${file}

echo "Create ${file}"

code ${file}
