// Lấy thẻ body
const bodyContainer = document.getElementById("body");   
const leftBody = document.getElementById("left-body")
const rightBody = document.getElementById("right-body")

// Footer content that will be included in all pages


// Nội dung cho từng phần
const homeContent = `
  <div id="left-body">
    <img id="myImage" src="image/Hanoi(2).JPG" alt="Ảnh Hà Nội">
  </div>
  <div id="right-body">
    <p id="my">My</p>
    <p id="Portfolio">Portfolio</p>
    <p id="des">Hey there! I'm Thinh. This is my personal space where you can explore a bit about me, from where I've studied, to what I've worked on. Click the menu and let's connect the dots!</p>
    <hr id="line">
  </div>
`;

const personalContent = `
  <div id="body">  
    <div id="left-body">                    
      <img id="myImage" src="image/SUMMER.jpg" alt="avatar">
    </div>
    <div id="right-body">               
      <div id="personal-detail-right-body"> 
        <div id="detail-container">
          <p id="title">Personal detail</p>
          <p><strong>Full name:</strong> Nguyen Van Thinh</p>
          <p><strong>Date of birth:</strong> 19/01/2006</p>
          <p><strong>Currently study at:</strong> RMIT University SSG Campus</p>
          <p><strong>Member of:</strong> Fintech club</p>
          <p><strong>Major:</strong> Information Technology</p>
        </div>
        
        <div id="professional-container">
          <div id="skill-container">
            <p id="title">Technical Skills</p>
            <div>
              <p>Java</p>
              <div class="skill-bar">
                <div class="skill" style="width: 70%"></div>
              </div>
            </div>
            <div>
              <p>Python</p>
              <div class="skill-bar">
                <div class="skill" style="width: 50%"></div>
              </div>
            </div>
            <div>
              <p>HTML/CSS</p>
              <div class="skill-bar">
                <div class="skill" style="width: 60%"></div>
              </div>
            </div>
            <div>
              <p>JavaScript</p>
              <div class="skill-bar">
                <div class="skill" style="width: 50%"></div>
              </div>
            </div>
            
          </div>
          
          <div id="ranking-container">
            <p id="title">Soft Skills</p>
            <div>
              <p>Problem Solving</p>
              <div class="skill-bar">
                <div class="skill" style="width: 70%"></div>
              </div>
            </div>
            <div>
              <p>Team Work</p>
              <div class="skill-bar">
                <div class="skill" style="width: 80%"></div>
              </div>
            </div>
            <div>
              <p>Presentation</p>
              <div class="skill-bar">
                <div class="skill" style="width: 60%"></div>
              </div>
            </div>
            <div>
              <p>Time Management</p>
              <div class="skill-bar">
                <div class="skill" style="width: 60%"></div>
              </div>
          </div>
        </div>

        
  </div>
`;

const educationContent =`
  <div id="body">
    <div id="left-image-container">
      <img src="image/_CHE1277.jpg" id="left-image" alt="left">
    </div>
    <div id="right-image-container">
      <img src="image/fin-avatar.JPG" id="right-image" alt="right">
    </div>
    <div id="educationTable">
      <p>Education</p>
      <table id="MyTable">
        <tr>
          <th>School/University</th>
          <th>Major</th>
          <th>Time period</th>
        </tr>
        <tr>
          <td>Nguyen Du High School For The Gifted</td>
          <td>Physic</td>
          <td>2021-2024</td>
        </tr>
        <tr>
          <td>RMIT University</td>
          <td>Information Technology</td>
          <td>2024-Current</td>
        </tr>    
      </table>
    </div>
  </div>
`;

const experiences = [
  {
    image: "image/IMG_1543.JPG",
    title: `Camper of the project "Youth For Impact" season 7 of AIESEC`, 
    description: "Participated in the YFI camp where I discovered the true value of teamwork and the importance of every individual in a group. The experience taught me meaningful lessons about empathy and sharing—both with my tribe members and the children at the SOS Children's Village."
  },
  
  {
    image: "./image/IMG_1812.jpg",
    title: "42Km Finisher Of Techcombank International Marathon 2024",
    description: "Successfully completed a full 42km marathon, demonstrating strong discipline, mental resilience, and long-term goal commitment. The journey required consistent training, focus, and the ability to overcome physical and mental limits—skills that I apply to both personal and academic challenges."
  },
  {
    image: "./image/DSC04184.jpg",
    title: "Finisher Fansipan Climbing",
    description: "Successfully reached the summit of Fansipan, the highest mountain in Vietnam (3,147m). The climb tested my physical endurance, mental strength, and determination. It also deepened my appreciation for nature and taught me the value of persistence and teamwork in challenging environments."
  }
];

let currentExperienceIndex = 0;

const experienceContent = `
  <div id="body">
    <div id="experience-container">
      <div id="experience-image">
        <img src="${experiences[0].image}" alt="Experience Image" onerror="console.log('Image failed to load:', this.src)">
      </div>
      <div id="experience-content">
        <h2>${experiences[0].title}</h2>
        <p>${experiences[0].description}</p>
        <div class="experience-controls">
          <button id="prevBtn">Previous</button>
          <button id="nextBtn">Next</button>
        </div>
      </div>
    </div>
  </div>
`;

// Function to update experience content
function updateExperience() {
  const expContainer = document.getElementById("experience-container");
  if (expContainer) {
    expContainer.innerHTML = `
      <div id="experience-image">
        <img src="${experiences[currentExperienceIndex].image}" alt="Experience Image" onerror="console.log('Image failed to load:', this.src)">
      </div>
      <div id="experience-content">
        <h2>${experiences[currentExperienceIndex].title}</h2>
        <p>${experiences[currentExperienceIndex].description}</p>
        <div class="experience-controls">
          <button id="prevBtn">Previous</button>
          <button id="nextBtn">Next</button>
        </div>
      </div>
    `;
    setupExperienceControls();
  }
}

// dùng để thiết lập các nút Previous và Next
function setupExperienceControls() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.onclick = () => {
    currentExperienceIndex = (currentExperienceIndex - 1 + experiences.length) % experiences.length;
    updateExperience();
  };

  nextBtn.onclick = () => {
    currentExperienceIndex = (currentExperienceIndex + 1) % experiences.length;
    updateExperience();
  };
}

// Xử lý khi bấm nút
document.getElementById("home").onclick = () => {
  bodyContainer.innerHTML = homeContent;
};

document.getElementById("personal-detail").onclick = () => {
  bodyContainer.innerHTML = personalContent;
};

document.getElementById("education").onclick = () => {
  bodyContainer.innerHTML = educationContent;
};

document.getElementById("experience").onclick = () => {
  bodyContainer.innerHTML = experienceContent;
  setupExperienceControls();
};

// Footer navigation functionality
document.getElementById("footer-home").onclick = () => {
  bodyContainer.innerHTML = homeContent;
};

document.getElementById("footer-personal").onclick = () => {
  bodyContainer.innerHTML = personalContent;
};

document.getElementById("footer-education").onclick = () => {
  bodyContainer.innerHTML = educationContent;
};

document.getElementById("footer-experience").onclick = () => {
  bodyContainer.innerHTML = experienceContent;
  setupExperienceControls();
};

// Hiển thị mặc định trang Home khi load lần đầu
window.onload = () => {
  bodyContainer.innerHTML = homeContent;
};
