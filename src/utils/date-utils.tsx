export default function formatDate(date) {
  //const date = new Date();
  const formattedDate = date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  console.log(formattedDate);
  return formattedDate;
}

//.replace(/ /g, '-');
