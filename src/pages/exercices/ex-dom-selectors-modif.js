import '/src/style.css';
     //let nom  = document.querySelector('h2');
     //let age = document.querySelector('h3');
     //let bio = document.querySelector('p');
     //let exercice = document.querySelector('.exercice');

     //nom.textContent = 'Inès Fawes';
     //age.textContent = 25;
     //bio.textContent = 'Madame Inès Fawes est une cliente de notre entreprise. Elle habite à Paris.'; 
     
     
     const userData = {
      name: 'John delavega',
      email: 'john.doe@example.com',
      age: 25,
      dob: '08/02/1989',
      active: true,
      img: 'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
    };
    // JS qui va customiser la div du profile utilisateur
    let divUser = document.querySelector('.userProfile');
    console.log(divUser);

    divUser.style.backgroundColor = `background-color: #4158D0`;
    divUser.style.backgroundImage = `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`;
    divUser.style.color = `white`;
    divUser.style.width = '500px';
    divUser.style.margin = 'auto';
    divUser.style.padding = '2rem';
    //JS crée une image, renseigne la src , modif taille
    const imgTemplate = document.createElement('img');
    imgTemplate.src = userData.img;
    imgTemplate.alt = userData.name;
    imgTemplate.style.height = '500px';
    imgTemplate.style.width = '500px';
    divUser.append(imgTemplate);
    // JS crée le titre du name
    const nameTemplate = document.createElement('h1');//phase 1 creation
    nameTemplate.innerText = userData['name'];
    divUser.append(nameTemplate);
    // JS crée le titre du email
    const emailTemplate = document.createElement('h2');//phase 1 creation
    emailTemplate.innerText = userData.email;
    divUser.append(emailTemplate);
    // JS crée le titre du age
    const ageTemplate = document.createElement('h2');//phase 1 creation
    ageTemplate.innerText = userData.age;
    divUser.append(ageTemplate);
    // JS crée le titre du dob
    const dobTemplate = document.createElement('h2');//phase 1 creation
    dobTemplate.innerText = userData.dob;
    divUser.append(dobTemplate);
    // JS crée le titre du active
    const activeTemplate = document.createElement('h2');//phase 1 creation
    // activeTemplate.innerText = userData.active;
    activeTemplate.innerText = userData.active ? 'OnLine' : 'OffLine';
    divUser.append(activeTemplate);