export default class Time {
  constructor(formProps) {
    this.formProps = formProps;
  }

  formatedDate({day, month, year}) {
    const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  
    return `${year} ${months[month -1]} ${day}`;
  }

  get pastDate() {
    const formatedDate = this.formatedDate(this.formProps);
    return new Date(formatedDate);
  }

  get todayDate() {
    return new Date();
  }

  get year() {
    return Math.floor(this.diff / (1000 * 60 * 60 * 24 * 365));
  }

  get month() {
    return (Math.floor(this.diff / (1000 * 60 * 60 * 24 * 29))) % 12;
  }

  get day() {
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let day = Math.floor(this.diff / (1000 * 60 * 60 * 24));

    let month = this.formProps.month -1;

    day++
    while (day > 31) {
      if (month > 11) month = 0;
      day -= monthDays[month];
      month++;
    }
    day--

    return day;
  }

  get obj() {
    this.diff = this.todayDate - this.pastDate;

    return {
      year: this.year,
      month: this.month,
      day: this.day
    }
  }
}