const options = {
  filterByDate: [
    { name: "Today", value: "isthistoday" },
    { name: "Tomorrow", value: "isthistomorrow" },
    { name: "This Week", value: "isthisweek" },
    { name: "This Month", value: "isthismonth" },
    { name: "This Year", value: "isthisyear" },
    { name: "All Time", value: "" },
  ],
  filterByCategory: [
    "All Category",
    "Photography",
    "Design",
    "Development",
    "Marketing",
    "Business",
    "Lifestyle",
    "Music",
  ],
  sortingBy: [
    { name: "Date", value: "" },
    { name: "Name", value: "" },
  ],
};

export default options;
