import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";

function Course() {
  return (
    <>
      <div>
        <Navbar />
        <div className="min-h-screen mt-8">
          <CourseCard />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Course;
