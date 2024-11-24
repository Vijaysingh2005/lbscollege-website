function downloadPDF(courseName) {
    const courseDetails = {
      course1: {
        name: "Introduction to Programming",
        description: "This course covers the basics of programming.",
        topics: ["Introduction to programming languages", "Variables and data types", "Control flow", "Functions", "Arrays and loops"]
      },
      course2: {
        name: "Data Structures and Algorithms",
        description: "This course covers advanced data structures and algorithms.",
        topics: ["Arrays and linked lists", "Stacks and queues", "Trees and graphs", "Sorting and searching algorithms", "Dynamic programming"]
      },
      course3: {
        name: "Web Development",
        description: "This course covers web development technologies.",
        topics: ["HTML and CSS", "JavaScript", "Backend frameworks", "Database management", "APIs and web services"]
      }
    };

    const course = courseDetails[courseName];

    if (!course) {
      alert("Course not found!");
      return;
    }

    const pdfContent = `
      Syllabus for ${course.name}
      ==========================
      
      Description:
      ${course.description}
      
      Topics Covered:
      ${course.topics.map((topic, index) => `${index + 1}. ${topic}`).join("\n")}
    `;

    const blob = new Blob([pdfContent], { type: 'application/pdf' });

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${courseName}_syllabus.pdf`;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }