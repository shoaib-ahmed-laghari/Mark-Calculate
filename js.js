     document.getElementById("percentageForm").addEventListener("submit", (event) => {
          event.preventDefault();
          let totalMarks = document.getElementById("totalMarks").value;
          let obtainedMarks = document.getElementById("obtainedMarks").value;
          let marksPercentage = ((obtainedMarks * 100) / totalMarks);
          document.getElementById("percentage").innerText = marksPercentage + "%";
          if (marksPercentage >=80 && marksPercentage <= 100) {
            document.getElementById("grade").innerHTML = "A1 Grade ";
          } 
          else if (marksPercentage >=60 && marksPercentage <= 79) {
            document.getElementById("grade").innerHTML = "A Grade ";
          }
          else if (marksPercentage >=40 && marksPercentage <= 59) {
            document.getElementById("grade").innerHTML = "B Grade ";
          }
          else {
            document.getElementById("grade").innerText = "FAIL";
          }
        });