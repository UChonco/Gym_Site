const OpenForm = document.getElementById('openform')
const PopForm = document.getElementById('popform')
const Popbackground = document.getElementById('popbackground')
const Closepop =document.getElementById('closepop')


OpenForm.onclick = function(){
    PopForm.style.display = 'flex'
    Popbackground.style.display = 'flex'

    
}

Closepop.onclick = function(){
    PopForm.style.display = 'none'
    Popbackground.style.display = 'none'
}

  // Get all nav links
  const navLinks = document.querySelectorAll('.nav-link');

  // Function to remove 'active' class from all links
  function removeActiveClass() {
      navLinks.forEach(link => link.classList.remove('active'));
  }

  // Function to add 'active' class based on the current hash
  function setActiveLink() {
      const currentHash = window.location.hash;
      if (currentHash) {
          removeActiveClass();
          const activeLink = document.querySelector(`a[href="${currentHash}"]`);
          if (activeLink) {
              activeLink.classList.add('active');
          }
      }
  }

  // Set active link on page load
  window.onload = setActiveLink;

  // Set active link when hash changes (e.g., user clicks a link)
  window.onhashchange = setActiveLink;