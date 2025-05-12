// Lấy thẻ body
const bodyContainer = document.getElementById("body");   
const leftBody = document.getElementById("left-body")
const rightBody = document.getElementById("right-body")

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
              <img id="myImage" src="image/fintech_avatar(3).png" alt="avatar">
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
                 <div id="contact-container"> 
                <p style="margin-top: 5vh" id="title">Contact</p> 
                  <p><strong>University email: </strong><a href="mailto:s4130401@rmit.edu.vn">s4130401@rmit.edu.vn</a></p> 
                  <p><strong>Personal email: </strong><a href="mailto:thinhlinhtinh2006@gmail.com">thinhlinhtinh2006@gmail.com</a></p> 
                  <p>Social Media: <a href="https://www.facebook.com/thinhreal.nguyenvan">Facebook</a></p>
                  </div>
              </div>
             </div>   
        </div>
`;

const educationContent =`
   <div id="body">
          <div id="left-image-container">
            <img src="image/ndu_avatar.jpg" id="left-image" alt="left">
          </div>
          <div id="right-image-container">
            <img src="image/IMG_4423(2).JPG" id="right-image" alt="right">
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
    image: "image/DSC04184.jpg",
    title: "Experience 1",
    description: "Description for experience 1"
  },
  {
    image: "image/IMG_1522.JPG",
    title: "Experience 2",
    description: "Description for experience 2"
  },
  {
    image: "image/IMG_1534.JPG",
    title: "Experience 3",
    description: "Description for experience 3"
  }
];

let currentExperienceIndex = 0;

const experienceContent = `
  <div id="experience-container">
    <div id="experience-image">
      <img src="${experiences[0].image}" alt="Experience Image">
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
`;

// Function to update experience content
function updateExperience() {
  const expContainer = document.getElementById("experience-container");
  if (expContainer) {
    expContainer.innerHTML = `
      <div id="experience-image">
        <img src="${experiences[currentExperienceIndex].image}" alt="Experience Image">
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

// Function to setup experience controls
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

// Hiển thị mặc định trang Home khi load lần đầu
window.onload = () => {
  bodyContainer.innerHTML = homeContent;
};
