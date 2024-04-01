import requests as rq
import selenium as sel
from bs4 import BeautifulSoup
import time

sitemap_url = 'https://scholarships360.org/scholarships/search/u-s-western-digital-stem-scholarships/'
response = rq.get(sitemap_url)
html_response = response.text



def general_info():
   info = []
   if response.status_code == 200:
      soup = BeautifulSoup(response.text, 'html.parser')
      title = (soup.find_all('title'))
      amount = (soup.find_all('div', class_ = 're-scholarship-main-sidebar-block re-scholarship-main-sidebar-block-awards'))
      for element in title:
         word = element.text
         info.append(word)
      for element in amount:
         number = element.text.strip().split()
         info.append(number[5])

      return info[0], info[1]
      

def scraper():

   if response.status_code == 200:
      '''
      irrelevant 
      alphabet = 'abcdefghijklmnopqrstuvwxyz '
      # numbers = '1234567890 '
      # extras = '%/'

      # valid_stuff = set(alphabet + numbers + extras)
      '''
      data = []

      soup = BeautifulSoup(response.text, 'html.parser')
      prettier_data  = soup.prettify
      
      elements = soup.find_all('div', class_ = 're-scholarship-main-lists')

      for element in elements:
         words = element.text.lower().split()
         for item in words:
            data.append(item)

      data = {word for word in data}

      return data

if __name__ == "__main__":
   print(general_info())
   print(scraper())

      

   





    

 

