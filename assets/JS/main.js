function updateProfileInfo(profileData) {

  const photo = document.getElementById('profile.photo')
  photo.src = profileData.photo
  photo.alt = profileData.name

  const name = document.getElementById('profile.name')
  name.innerText = profileData.name

  const job = document.getElementById('profile.job')
  job.innerText = profileData.job

  const location = document.getElementById('profile.location')
  location.innerText = profileData.location

  const phone = document.getElementById('profile.phone')
  phone.innerText = profileData.phone

  const cleanedPhone = profileData.phone.replace(/\D/g, '')
  const whatsappLink = `https://wa.me/55${cleanedPhone}`
  phone.href = whatsappLink

  const email = document.getElementById('profile.email')
  email.innerText = profileData.email
  email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById('profile.skills.softSkills')
  softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById('profile.skills.hardSkills')
  hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<img src="${skill.logo}" alt="${skill.name}"></img>`).join('')
}

function updateLanguages(profileData) {
  const languages = document.getElementById('profile.languages')
  languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updateEducation(profileData) {
  const education = document.getElementById('profile.education')
  education.innerHTML = profileData.education.map(education => {
    return `
    <li>
      <h4>${education.name}</h4>
      <p>${education.institution} - ${education.date}</p>
    </li>        
    `

  }).join('')
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById('profile.portfolio')
  portfolio.innerHTML = profileData.portfolio.map(portfolio => {
    return ` 
    <li>
  <h4>
    <a target="_blank" href="${portfolio.url}">${portfolio.name}</a>
  </h4>
  <p> 
    ${portfolio.scope}
  </p>
</li>
  `
  }).join('')
}

function updateExperience(profileData) {
  const experience = document.getElementById('profile.experience')
  experience.innerHTML = profileData.experience.map(experience => {
    return ` 
    <li>
  <h4>
    ${experience.name}
  </h4>
  <p><span>
    ${experience.organization} | ${experience.period}
  </span></p>
  <p>
    ${experience.description}
  </p>
</li>
  `
  }).join('')
}


 
 
 
(async () => {
  const profileData = await fetchProfileData()
  updateProfileInfo(profileData)
  updateSoftSkills(profileData)
  updateHardSkills(profileData)
  updateLanguages(profileData)
  updateEducation(profileData)
  updatePortfolio(profileData)
  updateExperience(profileData)
 })()




