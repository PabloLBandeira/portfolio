const acordeonTriggers = document.querySelectorAll('.trigger');


acordeonTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const parentDiv = trigger.parentElement;
    const content = trigger.nextElementSibling;
    
    if (parentDiv.classList.contains('skills')) {
      parentDiv.classList.replace('skills', 'skills-open');
      content.classList.remove('hidden');
    } else {
      parentDiv.classList.replace('skills-open', 'skills');
      content.classList.add('hidden');
    }
  });
});





