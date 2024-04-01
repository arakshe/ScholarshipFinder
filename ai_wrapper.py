import os
import math 
from gensim.models import Word2Vec
import gensim.downloader as api
from google.generativeai import GenerativeModel
from google.generativeai.types import GenerateContentResponse
from scraper import scraper
from dotenv import load_dotenv
import google.generativeai as genai
import numpy as np

# getting API key
load_dotenv()
api_key = os.getenv('API_KEY')
genai.configure(api_key=api_key)

# configure word2vec
model = api.load("word2vec-google-news-300")

data = scraper()


def get_gemini_response(user_input: str) -> str:
    """
    Retrieves Gemini response given input prompt.

    :param user_input: input prompt
    :return: Gemini response
    """
    # generate new model
    model: GenerativeModel = genai.GenerativeModel('gemini-pro')

    # get response
    response: GenerateContentResponse = model.generate_content(user_input)
    gemini_response: str = response.text

    # return response
    return gemini_response


def get_tags(user_input: str) -> list[str]:
    """
    Generates list of tags based on user input.

    :param user_input: user input
    :return: list of tags
    """
    # getting a list of tags and parsing the response
    response: str = get_gemini_response(
        'generate many one-word keywords for ' + user_input + ' and provide it as a comma-separated list, like: keyword1, keyword2, keyword3')
    tag_list: list[str] = response.split(',')
    tag_list = [tag.strip() for tag in tag_list]

    # returning response
    return tag_list


def word2vec(word: str) -> np.ndarray:
    """
    Converts word to semantic vector.

    :param word: word
    :return: vector
    """
    if not word.lower() in model:
        return np.zeros(300)
    return model[word.lower()]


def words2vecs(words: list[str]) -> list[np.ndarray]:
    """
    Converts words to semantic vectors.

    :param words: list of words
    :return: list of semantic vectors
    """
    return [word2vec(word) for word in words]


def similarity_kernel(vec1: np.ndarray, vec2: np.ndarray) -> float:
    """
    Calculates the cosine similarity between two vectors

    :param vec1: vector 1
    :param vec2: vector 2
    :return: cosine similarity, in range [-1, 1]
    """
    return np.dot(vec1, vec2) / (np.linalg.norm(vec1) * np.linalg.norm(vec2))


def word_similarity_score(word1: str, word2: str) -> float:
    """
    Calculates the similarity between two words semantically as a value in [-1, 1]

    :param word1: word 1
    :param word2: word 2
    :return: similarity
    """

    vec1: np.ndarray = word2vec(word1)
    vec2: np.ndarray = word2vec(word2)
    return similarity_kernel(vec1, vec2)


def tag_list_similarity(tags1: list[str], tags2: list[str]) -> float:
    """
    Calculates the similarity between two lists of tags semantically as a value in [-1, 1]

    :param tags1: tag list 1
    :param tags2: tag list 2
    :return: similarity
    """

    # converting words to vectors
    vecs1 = words2vecs(tags1)
    vecs2 = words2vecs(tags2)

    # to calculate average
    sum: float = 0
    count: int = 0

    # looping through every combination of tags, calculating average cosine similarity
    for vec1 in vecs1:
        for vec2 in vecs2:
            # the cosine of the angle between the vectors
            similarity = similarity_kernel(vec1, vec2)
            if np.isnan(similarity):
                continue
            sum += similarity
            count += 1

    # average calculation
    return sum / count


#CREATE SCALING, PLAY AROUND WITH THE MODEL
def scale(similarity_score):
    return str(round((1/(1+math.exp(similarity_score * -1))) * 100, 0))



if __name__ == "__main__":
    gemini_data = get_tags('give me a scholarship for low income first generation native american students')
    similarity_score = tag_list_similarity(gemini_data, data)
    print(scale(similarity_score))


