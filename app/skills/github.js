// components/Github.js
"use client";
import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 12;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <div className="github-section  text-foreground py-12 px-5">
      <div className=" justify-center">
        <GitHubCalendar
          username="N1khilM"
          blockSize={15}
          blockMargin={5}
          color="white"
          fontSize={16}
          className="github-calendar "
          transformData={selectLastHalfYear}
          labels={{
            totalCount: "{{count}} contributions in this year",
          }}
          theme={{
            light: [
              "#ffffff", // Background color for light theme
              "#d6d6d6", // Color for low contributions
              "#969696", // Color for medium contributions
              "#565555", // Color for high contributions
              "#1b1b1b", // Color for very high contributions
            ],
            dark: [
              "#1b1b1b", // Background color for dark theme
              "#565555", // Color for low contributions in dark theme
              "#969696", // Color for medium contributions in dark theme
              "#d6d6d6", // Color for high contributions in dark theme
              "#ffffff", // Color for very high contributions in dark theme
            ],
          }}
        />
      </div>
    </div>
  );
}

export default Github;
