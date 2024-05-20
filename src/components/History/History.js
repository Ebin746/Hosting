import React from 'react';
import './History.css';

const History = () => {
  return (
    <div className="history-body">
      <header className="history-header">
        <h1 className="history-h1">History</h1>
      </header>
      <main>
        <section className="history-timeline">
          <div className="history-timeline-item" id="year-1900">
            <div className="history-timeline-img">
              <img src="https://via.placeholder.com/150" alt="1900" />
            </div>
            <div className="history-timeline-content">
              <h2>1900</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a voluptate ad ducimus quo soluta rerum sint voluptatum, debitis, distinctio eligendi hic laudantium. Libero non et numquam adipisci perspiciatis incidunt.</p>
            </div>
          </div>
          <div className="history-timeline-item" id="year-1950">
            <div className="history-timeline-img">
              <img src="https://via.placeholder.com/150" alt="1950" />
            </div>
            <div className="history-timeline-content">
              <h2>1950</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nam qui ex officia obcaecati veritatis incidunt reprehenderit facere, similique ullam hic cumque tempore vel sequi unde velit, expedita ipsam tempora!</p>
            </div>
          </div>
          <div className="history-timeline-item" id="year-2000">
            <div className="history-timeline-img">
              <img src="https://via.placeholder.com/150" alt="2000" />
            </div>
            <div className="history-timeline-content">
              <h2>2000</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa rem repellendus alias facilis expedita itaque reprehenderit architecto nam quaerat, sint sunt, similique labore nulla error? Natus error quo sapiente sed.</p>
            </div>
          </div>
          <div className="history-timeline-item" id="year-2020">
            <div className="history-timeline-img">
              <img src="https://via.placeholder.com/150" alt="2020" />
            </div>
            <div className="history-timeline-content">
              <h2>2020</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, sunt. Cum incidunt aut odit ab natus aliquam, fuga veritatis autem eveniet quasi, exercitationem tenetur a qui possimus nobis illo! Ab.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default History;
