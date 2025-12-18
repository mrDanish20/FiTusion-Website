import React from 'react';
import './Table.css';

export default function Table() {
  return (
    <section className="Table-section">
      <div className="Table-container">
        {/* Heading */}
        <h2 className="Table-title">
          Class Timetable<br />
          <span className="highlighted-text">Inspire Your Best Self</span>
        </h2>
        <p className="Table-subtitle">
          We're Your Partner In Achieving A Healthier, Stronger, And More Confident You.
        </p>

        {/* Table Section */}
        <div className="schedule-wrapper">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{color:"#E8FD89"}}>6.00am - 8.00am</td>
                <td className="weight"><strong>WEIGHT LOOSE</strong><br />RLefew D. Loee</td>
                <td className="cardio"><strong>CARDIO</strong><br />RLefew D. Loee</td>
                <td className="yoga"><strong>YOGA</strong><br />Keaf Shen</td>
                <td className="fitness"><strong>FITNESS</strong><br />Kimberly Stone</td>
                <td className="boxing"><strong></strong>-</td> 
                <td className="body"><strong>BODY BUILDING</strong><br />Robert Cage</td>
                <td>-</td>
              </tr>
              <tr>
                <td style={{color:"#E8FD89"}}> 10.00am - 12.00am</td>
                <td className="fitness"><strong></strong>-</td>
                <td className="weight"><strong>WEIGHT LOOSE</strong><br />RLefew D. Loee</td>
                <td className="cardio"><strong>CARDIO</strong><br />RLefew D. Loee</td>
                <td className="body"><strong>BODY BUILDING</strong><br />Robert Cage</td>
                <td className="karate"><strong>kARATE</strong><br />Donald Grey</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td style={{color:"#E8FD89"}}> 5.00pm - 7.00pm</td>
                <td className="boxing"><strong>BOXING</strong><br />Rachel Adam</td>
                <td className="karate"><strong>kARATE</strong><br />Donald Grey</td>
                <td className="body"><strong>BODY BUILDING</strong><br />Robert Cage</td>
                <td className="yoga"><strong></strong>-</td>
                <td className="cardio"><strong>CARDIO</strong><br />RLefew D. Loee</td>
                <td className="fitness"><strong>FITNESS</strong><br />Kimberly Stone</td>
                <td>-</td>
              </tr>
              <tr>
                <td style={{color:"#E8FD89"}}>7.00pm - 9.00pm</td>
                <td className="cardio"><strong>CARDIO</strong><br />RLefew D. Loee</td>
                <td className="boxing"><strong></strong>-</td>
                <td className="yoga"><strong>YOGA</strong><br />Keaf Shen</td>
                <td className="karate"><strong></strong>-</td>
                <td className="boxing"><strong>BOXING</strong><br />Rachel Adam</td>
                <td className="weight"><strong>WEIGHT LOOSE</strong><br />RLefew D. Loee</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
