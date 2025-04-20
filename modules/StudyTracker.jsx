import React, { useState ,useEffect } from "react";
import Charts from "D:/habeba/habeba/new work of DOM/dashbor--/components/charts.jsx";
import 'D:/habeba/habeba/new work of DOM/dashbor--/src/styles/index.css';
import { getStudyTipsAndReminders } from "D:/habeba/habeba/new work of DOM/dashbor--/src/Api.js"; // Adjust path to api.js
import { useLocalStorage } from 'usehooks-ts'
import PomodoroApp from "D:/habeba/habeba/new work of DOM/dashbor--/components/Promo.jsx";
import ReactMarkdown from "react-markdown"



function StudyTracker({ setStudyData }) {
  const [note, setNote] = useState({
    studygoal: "",
    date: "",
    time: "",
    duration: "",
    notes: "",
    mood: "",
  });
   
   
  const [submitted, setSubmitted] = useLocalStorage('study-tracker-submitted', []);
    const [tipsAndReminders, setTipsAndReminders] = useState(""); // Store AI-generated tips and reminders

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const Submit = async (e) => {
    e.preventDefault();
    // Add the current note to the submitted array
    setSubmitted((prev) => [...prev, note]);

    // Call the API to get study tips and reminders
    try {
      const response = await getStudyTipsAndReminders(note);
      setTipsAndReminders(response);
    } catch (error) {
      console.error("Failed to fetch study tips:", error);
      setTipsAndReminders("Error generating study tips. Please try again.");
    }

    // Clear the form
    setNote({
      studygoal: "",
      date: "",
      time: "",
      duration: "",
      notes: "",
    });
  };

  // Calculate total study hours
  const totalStudyHours = submitted.reduce((sum, item) => sum + Number(item.duration), 0);
  useEffect(() => {
    setStudyData({ duration: totalStudyHours });
  }, [totalStudyHours, setStudyData]);
  
  const handleDelete = (indexToDelete) => {
    setSubmitted((prev) => prev.filter((_, index) => index !== indexToDelete));
  };


  return (
    <>
    
    <div className="app-container">
      {/* Main Content */}
      <main className="flex-1 main-content">
        {/* Display total study hours */}
        <div className="flex">
          <p className="total-hours">
            I Studied Today
            <br /> {totalStudyHours}
          </p>
          <p className="total-hours">
            I Studied This Week
            <br /> {totalStudyHours}
          </p>
        </div>

<PomodoroApp/>

        {/* Form and Chart Container */}
        <div className="form-chart-container">
          {/* Form on the left */}
          <div>
            <form onSubmit={Submit} className="form-container">
              <input
                type="text"
                name="studygoal"
                value={note.studygoal}
                onChange={handleChange}
                placeholder="Enter your study goal"
                className="input-field input-field-height"
              />
              <input
                type="number"
                name="duration"
                value={note.duration}
                onChange={handleChange}
                placeholder="Hours"
                className="hours"
              />
              <input
                type="date"
                name="date"
                value={note.date}
                onChange={handleChange}
                className="date"
              />
              <input
                type="time"
                name="time"
                value={note.time}
                onChange={handleChange}
                className="input-field-date-time"
              />
              <select
  name="mood"
  value={note.mood}
  onChange={handleChange}
  className="input-field-date-time"
>
  <option value="">What is your Mood 🧐</option>
  <option value="tired">🥱 Tired</option>
  <option value="overwhelmed">😵‍💫 Overwhelmed</option>
  <option value="unmotivated">😩 Unmotivated</option>
  <option value="calm">🧘‍♀️ Calm</option>
  <option value="excited">🥳 Excited</option>
  <option value="curious">🤔 Curious</option>
  <option value="anxious">😟 Anxious</option>
  <option value="frustrated">😠 Frustrated</option>
  <option value="prepared">😌 Prepared</option>
  <option value="confident">😎 Confident</option>
  <option value="nervous">😬 Nervous</option>
  <option value="inspired">💡 Inspired</option>
  <option value="neutral">😐 Neutral</option>
  <option value="lazy">🐢 Lazy</option>
  <option value="energetic">⚡ Energetic</option>
</select>

              <textarea
                name="notes"
                value={note.notes}
                onChange={handleChange}
                placeholder="Enter additional notes"
                rows={6}
                className="textarea-field"
              />

              <button type="submit" className="btn-primary">
                Submit
              </button>
            </form>
          </div>

          {/* Chart on the right */}
          <div className="chart-container">
            <Charts chartData={submitted} />
          </div>
        </div>

        {tipsAndReminders ? (
  <div className="tips-reminders-container">
    <ReactMarkdown>### Study Tips and Reminders</ReactMarkdown>
    <ReactMarkdown>{tipsAndReminders}</ReactMarkdown>
  </div>
) : (
  <div className="tips-reminders-container ">
    <p>Your AI study buddy is here to help 😊</p>
  </div>
)}



        {/* Display submitted items */}
        <div className="submitted-items paragraph">
          {submitted.map((item, index) => (
            <div key={index} className="submitted-item">
              <h3 className="submitted-item-title">{item.studygoal}</h3>
              <p><strong className="spent">{item.duration} Hours</strong></p>
              <p><strong className="submitted-item-label">Date:</strong> {item.date}</p>
              <p><strong className="submitted-item-label">Time:</strong> {item.time}</p>
              <p><strong className="submitted-item-label">mood:</strong> {item.mood}</p>
              <p><strong className="submitted-item-label">Notes:</strong> <div className="notes">{item.notes}</div></p>
              <button
                onClick={() => handleDelete(index)}
                className="btn-danger mt-2"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>  </>
  );

}

export default StudyTracker;