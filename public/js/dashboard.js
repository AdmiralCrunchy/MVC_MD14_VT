const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#article-title').value.trim();
  const description = document.querySelector('#article-desc').value.trim();
  const main_Body = document.querySelector('#article-main_Body').value.trim();

  if (title && description && main_Body) {
    const response = await fetch(`/api/articles`, {
      method: 'POST',
      body: JSON.stringify({ title, description, main_Body }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create article');
    }
  }
};


const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/articles/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete article');
    }
  }
};


//couldn't figure out how to do a up vote and down vote system.
const addVote = async (event) =>{
  if (event.target.hasAttribute('data-id')) {
    let vote = event.target.getAttribute('data-id');

    vote++
  }
}
const takeVote = async (event) =>{
  if (event.target.hasAttribute('data-id')) {
    let vote = event.target.getAttribute('data-id');
    vote--
  }
}

document
  .querySelector('.new-article-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.article-list')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('.upVote')
  .addEventListener('click', addVote);
document
  .querySelector('.dnVote')
  .addEventListener('click', takeVote);

