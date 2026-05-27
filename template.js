var blog = document.getElementById('expandable');
function addToBlog(title, imageUrl, paragraph, tag = 'Articolo', date = 'Oggi', link = '#') {
  const card = document.createElement('article');
  card.className = 'blog-card';

  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = title;
  img.loading = 'lazy';

  const body = document.createElement('div');
  body.className = 'blog-card-body';

  const tagEl = document.createElement('span');
  tagEl.className = 'blog-card-tag';
  tagEl.textContent = tag;

  const h3 = document.createElement('h3');
  h3.className = 'blog-card-title';
  h3.textContent = title;

  const p = document.createElement('p');
  p.className = 'blog-card-text';
  p.textContent = paragraph;

  const footer = document.createElement('div');
  footer.className = 'blog-card-footer';

  const meta = document.createElement('span');
  meta.className = 'blog-card-meta';
  meta.textContent = date;

  const readMore = document.createElement('a');
  readMore.className = 'blog-card-readmore';
  readMore.href = link;
  readMore.textContent = ' Link';
  readMore.target = '_blank';
  readMore.rel = 'noopener noreferrer';

  footer.appendChild(meta);
  footer.appendChild(readMore);
  body.appendChild(tagEl);
  body.appendChild(h3);
  body.appendChild(p);
  body.appendChild(footer);
  card.appendChild(img);
  card.appendChild(body);
  blog.appendChild(card);
}
addToBlog("Ally indoor localization system", "media/logo.jpg", "Ally is an IoT system for indoor localization in corporate, industrial, or healthcare environments. Through small tags (worn by employees or attached to any type of object, machine, or asset) and a three-tier distributed architecture, Ally enables real-time tracking of people and things within a building", "Group Project", "24/05/26", "https://github.com/UniCT-Internet-of-Things/Ally");
