interface DateFormattingFunction {
  (date: Date): string | undefined;
}

const formatDate: DateFormattingFunction = (date) => {
  if (date instanceof Date && !isNaN(date.valueOf())) {
    const formattedDate = date.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return formattedDate;
  }
};

export default formatDate;
