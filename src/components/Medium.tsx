import { useState, useEffect } from 'react';
import { MediumPost } from '../interfaces/MediumPost';
import { getMediumPosts } from '../utils/api';

function Medium() {
  const [articles, setArticles] = useState<MediumPost[]>([]);

  useEffect(() => {
    getMediumPosts().then((data) => {
      // Set the second parameter (the second number) to the max amount of post that you want to display - 15 is a safe number so it can nicely work on almost every screen.
      setArticles(data.slice(0, 15));
    });
  }, []);

  return (
    <div className='medium-container'>
      <div>
        <ul>
          {articles.map((article) => (
            <li key={article.link}>
              <a href={article.link}>{article.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Medium;
