from bs4 import BeautifulSoup
import requests
import unicodedata
import json


url = "https://www.biographyonline.net/people/famous-100.html"
response = requests.get(url, timeout=5)
content = BeautifulSoup(response.content, "html.parser")

# print(content)
list = content.find('section', class_="post-content")
# print (list)
people = []
#>>> a = "some-sample-filename-to-split"
#>>> "-".join(a.split("-", 2)[:2])

for lis in list.find_all('li'):
    a = str(lis.getText(strip=True))
    print(a)
    b = (a.split('(')[0])
    # c = b.replace('\xc2\xa0', ' ')
    people.append(b)

people = people[:-40 or None]
print(people)
with open('data.json', 'w') as f:
  json.dump(people, f, ensure_ascii=False)
    