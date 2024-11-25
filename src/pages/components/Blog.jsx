import React from 'react';
import SFAC from '../../../public/SFAC.jpg';
import College from '../../../public/College.jpg';
import Copy2 from '../../../public/Copy2.jpg';

const Blog = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  alt="content" 
                  className="object-cover object-center w-full h-full" 
                  src="/SFAC.jpg" 
                  style={{ width: '100%', height: 'auto', maxHeight: '700px' }} // Adjust maxHeight as needed
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    "Building Futures: How the Largest School Network in the South is Leading the Way in Transforming Education Through Innovation, Excellence, and Community Engagement"
                  </h1>
                  <p className="leading-relaxed mb-3">
                  Education is the cornerstone of progress, and in the South, one network stands out as a beacon of innovation, collaboration, and opportunity. As the largest school network in the region, this institution is redefining what it means to provide quality education in an ever-changing world. By combining cutting-edge technology, inclusive learning strategies, and a deep commitment to community, it is setting new benchmarks for academic excellence and holistic student development.
                  With a mission to empower every student, the network leverages advanced digital tools, modernized curricula, and state-of-the-art facilities to create an environment where learning thrives. From early childhood education to advanced collegiate preparation, it ensures that students are equipped not just with knowledge but with the critical thinking and problem-solving skills they need to excel in the 21st century. Teachers are empowered with ongoing professional development, 
                  access to innovative teaching methodologies, and a collaborative ecosystem that promotes continuous improvement.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  alt="content" 
                  className="object-cover object-center w-full h-full" 
                  src="/College.jpg" 
                  style={{ width: '100%', height: 'auto', maxHeight: '700px' }} 
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  "Driving Success Across Disciplines: How Computer Science, Engineering, Business, and More Are Shaping the Future of Education and Careers"
                  </h1>
                  <p className="leading-relaxed mb-3">
                  In today’s fast-evolving world, fields like Computer Science, Engineering, Business Administration, Nursing, Psychology, Hospitality Management, and Education are at the forefront of innovation and opportunity. Discover how students and professionals in these disciplines are driving advancements, solving real-world problems, and preparing for rewarding careers. From cutting-edge tech in computer science to compassionate care in nursing, these fields represent the diverse paths to success in a global landscape, each contributing uniquely to a brighter future. Explore how academic excellence and practical skills come together in these vital areas of study.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img 
              alt="content" 
              className="object-cover object-center w-full h-full" 
              src="/Copy2.jpg" 
              style={{ width: '100%', height: 'auto', maxHeight: '700px' }} 
              />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  "Empowering Young Minds: How Innovations in Education Are Transforming Learning and Shaping the Future of Student Success"
                  </h1>
                  <p className="leading-relaxed mb-3">
                  In an ever-changing world driven by rapid technological advancements, the landscape of education is evolving to meet the needs of tomorrow. Innovative approaches to teaching and learning are revolutionizing classrooms, fostering creativity, and equipping students with the skills they need to thrive in the 21st century.
                  From the integration of cutting-edge digital tools to the implementation of personalized learning pathways tailored to individual needs, these innovations are breaking down barriers and creating opportunities for every student to succeed. Technology plays a vital role in this transformation, offering access to global resources, enabling interactive and immersive learning experiences, and bridging gaps in traditional education models.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
